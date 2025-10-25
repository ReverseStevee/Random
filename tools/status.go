package main

import (
	"fmt"
	"net/http"
	"time"
	"os"
)

func checkWebsiteStatus(url string) {
	client := http.Client{
		Timeout: 5 * time.Second,
	}

	for {
		// Mengambil Status Website Setiap 5 Detik🕊
		resp, err := client.Get(url)
		if err != nil {
			fmt.Printf("Gagal Mengecek Status Code Website, Atau Mungkin Sudah Down🕊", err)
			return
		}
		defer resp.Body.Close()

		statusCode := resp.StatusCode
		statusText := http.StatusText(statusCode)

		// Menampilkan Status Code Website🕊🪽
		fmt.Printf("URL: %s\nStatus Code: %d\nStatus Text: %s\n", url, statusCode, statusText)
		time.Sleep(5 * time.Second) // Interval 5 Detik Untuk Pemindaian Berikutnya
	}
}

func main() {
	var url string
	if len(os.Args) > 1 {
		url = os.Args[1]
	} else {
		fmt.Println("URL Tidak Diberikan. Gunakan Format: Go Run Status.go <Url>")
		return
	}

	// Jalankan Pemindaian Dalam Goroutine🕊
	go checkWebsiteStatus(url)

	// Menunggu Input Untuk Berhenti🕊
	for {
		var input string
		fmt.Println("Ketik 'Exit' Untuk Berhenti:")
		fmt.Scanln(&input)
		if input == "exit" || input == "EXIT" {
			fmt.Println("Pemindaian Dihentikan...")
			break
		}
	}
}
