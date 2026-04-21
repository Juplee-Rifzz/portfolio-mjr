# Portfolio — Muhamad Jufri Ramadhan

Website portofolio single-page pribadi. Dibangun dengan HTML, CSS, dan JavaScript murni — tanpa framework.

---

## Struktur Folder

```
portfolio-mjr/
├── index.html               ← Halaman utama
├── css/
│   └── style.css            ← Semua styling
├── js/
│   └── main.js              ← Semua JavaScript (cursor, animasi, scroll)
├── assets/
│   └── images/
│       ├── project-article-hub.png
│       ├── project-scuba-cat.png
│       ├── project-musik-home.png
│       ├── project-musik-profile.png
│       └── project-todolist.png
└── README.md
```

---

## Cara Membuka di VS Code

1. Buka VS Code
2. `File → Open Folder` → pilih folder **portfolio-mjr**
3. Install ekstensi **Live Server** (oleh Ritwick Dey) jika belum ada
4. Klik kanan `index.html` → **Open with Live Server**
5. Browser akan otomatis terbuka di `http://127.0.0.1:5500`

---

## Fitur

- **Hero section** dengan nama besar, badge "Available", dan tagline
- **About section** dengan 4 stat card (counter animasi saat scroll)
- **Projects section** — grid 5 kartu dengan screenshot proyek asli
  - Layout asimetris: kartu lebar (2 kolom) + kartu biasa (1 kolom)
  - Efek hover: kartu terangkat + border aksen oranye
- **Tools section** — 5 teknologi dengan progress bar animasi
- **Contact section** — dark background + link email
- **Custom cursor** animasi
- **Responsive** (mobile-friendly)
- **Smooth scroll** & reveal animasi saat scroll

---

## Teknologi

| File | Peran |
|------|-------|
| `index.html` | Struktur & konten |
| `css/style.css` | Tampilan & animasi CSS |
| `js/main.js` | Interaktivitas JavaScript |

Font: **Syne** (heading) + **DM Sans** (body) via Google Fonts  
Warna aksen: `#E84B2A`

---

## Kustomisasi

- Ganti email di `index.html` → cari `jufriramadhan@email.com`
- Ganti angka statistik → cari `data-target="15"` dst
- Ganti gambar proyek → timpa file di `assets/images/`
- Ganti warna aksen → ubah `--accent` di `:root` dalam `style.css`
