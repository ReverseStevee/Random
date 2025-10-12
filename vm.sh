#!/usr/bin/env bash
set -euo pipefail

# ------------------------------------------------------------
#  Ubuntu 22.04 + Flutter/Dart + VS-Code extensions (HOST)
#  One-click installer / launcher
# ------------------------------------------------------------
VM_DIR="${HOME}/vm"
IMG_FILE="${VM_DIR}/ubuntu-cloud.img"
SEED_FILE="${VM_DIR}/seed.iso"
MEMORY="${MEMORY:-4096}"          # host RAM for VM
CPUS="${CPUS:-2}"                 # host vCPUs for VM
SSH_PORT="${SSH_PORT:-24}"        # host port forwarded to guest:22
DISK_SIZE="${DISK_SIZE:-20G}"     # final guest disk size
GUEST_USER="ubuntu"               # ubuntu cloud image default user
GUEST_PASS="ubuntu"               # we set this via cloud-init

mkdir -p "${VM_DIR}"
cd "${VM_DIR}"

# -----------------------------------------------------------
# 1.  Install host packages (Debian/Ubuntu)
# -----------------------------------------------------------
HOST_PKGS=(
  qemu-kvm qemu-utils cloud-image-utils unzip openssh-client
  git sudo cdrkit-genisoimage
)
if ! command -v qemu-system-x86_64 &>/dev/null; then
  echo "[HOST] Installing required packages: ${HOST_PKGS[*]}"
  sudo apt-get update -qq
  sudo apt-get install -y "${HOST_PKGS[@]}"
fi

# -----------------------------------------------------------
# 2.  Download cloud image once
# -----------------------------------------------------------
CLOUD_IMG_URL="https://cloud-images.ubuntu.com/jammy/current/jammy-server-cloudimg-amd64.img"
if [[ ! -f "${IMG_FILE}" ]]; then
  echo "[HOST] Fetching Ubuntu 22.04 cloud image …"
  wget -q --show-progress "${CLOUD_IMG_URL}" -O "${IMG_FILE}"
  qemu-img resize "${IMG_FILE}" "${DISK_SIZE}"
fi

# -----------------------------------------------------------
# 3.  Build cloud-init ISO (user-data + meta-data)
# -----------------------------------------------------------
# Packages that will be installed *inside* the guest
GUEST_APT_PKGS=(
  unzip git sudo openssh-server qemu-kvm cloud-guest-utils
  build-essential curl file git unzip which xz-utils zip
  libglu1-mesa clang cmake ninja-build pkg-config
)

cat > user-data <<EOF
#cloud-config
users:
  - default
  - name: ${GUEST_USER}
    sudo: ALL=(ALL) NOPASSWD:ALL
    shell: /bin/bash
    plain_text_passwd: ${GUEST_PASS}
    lock_passwd: false
ssh_pwauth: true
disable_root: true
chpasswd:
  expire: false
package_update: true
package_upgrade: true
packages: [${GUEST_APT_PKGS[*]}]
runcmd:
  - systemctl enable --now qemu-guest-agent
  - |
    # Install Flutter stable
    sudo -u ${GUEST_USER} bash -c '
      set -e
      cd \$HOME
      git clone https://github.com/flutter/flutter.git -b stable --depth 1
      echo "export PATH=\$PATH:\$HOME/flutter/bin" >> \$HOME/.bashrc
      export PATH=\$PATH:\$HOME/flutter/bin
      flutter precache
      flutter doctor
    '
  - |
    # Install VS-Code + extensions (Flutter & Dart)
    sudo -u ${GUEST_USER} bash -c '
      set -e
      wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
      sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
      sudo sh -c "echo deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main > /etc/apt/sources.list.d/vscode.list"
      sudo apt-get update -qq
      sudo apt-get install -y code
      code --install-extension Dart-Code.flutter
      code --install-extension Dart-Code.dart-code
    '
power_state:
  mode: reboot
  message: Cloud-init finished – rebooting
  timeout: 10
EOF

cat > meta-data <<EOF
instance-id: iid-ubuntu22-flutter
local-hostname: ubuntu-flutter
EOF

cloud-localds "${SEED_FILE}" user-data meta-data

# -----------------------------------------------------------
# 4.  Launch the VM
# -----------------------------------------------------------
echo "[HOST] Starting VM  (SSH: localhost:${SSH_PORT}) …"
exec qemu-system-x86_64 \
  -enable-kvm \
  -m "${MEMORY}" \
  -smp "${CPUS}" \
  -cpu host \
  -drive file="${IMG_FILE}",format=qcow2,if=virtio \
  -drive file="${SEED_FILE}",format=raw,if=virtio \
  -netdev user,id=n0,hostfwd=tcp::"${SSH_PORT}"-:22 \
  -device virtio-net-pci,netdev=n0 \
  -boot order=c \
  -nographic \
  -serial mon:stdio