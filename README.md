# 💍 Undangan Pernikahan Digital

Undangan pernikahan statis (HTML/CSS/JS murni, tanpa build tool & tanpa backend)
yang bisa langsung di-hosting gratis di **GitHub Pages**.

Fitur:

- Cover dengan nama tamu personal via URL `?to=Nama+Tamu`
- Countdown menuju hari H + tombol "Simpan Tanggal" (Google Calendar)
- Profil kedua mempelai + link Instagram
- Love story timeline
- Detail acara (akad & resepsi) + tombol Google Maps
- Galeri foto
- Amplop digital (salin nomor rekening sekali klik) + alamat kirim kado
- Buku tamu (Ucapan & RSVP) yang **tersimpan permanen ke Google Sheet** dan
  dilihat semua tamu — lihat [GUESTBOOK.md](GUESTBOOK.md)
- Musik latar dengan tombol play/pause

Undangan untuk: **Isnur & Nurul** — Sabtu, 9 Januari 2027.

## 🚀 Cara deploy ke GitHub Pages

1. Buat repository baru di GitHub, misalnya `undangan`.
2. Upload semua isi folder ini ke repository tersebut:

   ```bash
   cd wedding-invitation
   git init
   git add .
   git commit -m "Undangan pernikahan"
   git branch -M main
   git remote add origin https://github.com/USERNAME/undangan.git
   git push -u origin main
   ```

3. Di GitHub: **Settings → Pages → Source: Deploy from a branch →
   Branch: `main` / folder `/ (root)` → Save**.
4. Tunggu ±1 menit. Undangan tayang di:
   `https://USERNAME.github.io/undangan/`

## ✏️ Cara mengganti data undangan

Semua data ada di **satu file**: [`js/config.js`](js/config.js)

- Nama mempelai, orang tua, Instagram
- Tanggal & jam pernikahan (untuk countdown)
- Detail acara + link Google Maps
- Love story
- Nomor rekening & alamat kado
- Nomor WhatsApp penerima RSVP
- `guestbookUrl` — URL buku tamu Google Sheet (lihat [GUESTBOOK.md](GUESTBOOK.md))

Ganti warna tema di bagian atas [`css/style.css`](css/style.css) (blok `:root`).

## 🖼 Mengganti foto

Foto contoh saat ini memakai placeholder SVG lokal di folder `assets/`
(gradient elegan + monogram), jadi undangan tetap tampak rapi sebelum foto
asli dipasang. Untuk memakai foto sendiri:

1. Letakkan foto di folder `assets/`, misalnya `assets/cover.jpg`,
   `assets/galeri-1.jpg`, dst.
2. Di `js/config.js`, ganti path-nya:

   ```js
   coverPhoto: "assets/cover.jpg",
   gallery: ["assets/galeri-1.jpg", "assets/galeri-2.jpg"],
   groom: { ..., photo: "assets/pria.jpg" },
   bride: { ..., photo: "assets/wanita.jpg" },
   ```

Tips: kompres foto dulu (mis. lewat squoosh.app) supaya undangan cepat dibuka.

## 🎵 Musik latar

Atur di `music` pada `js/config.js`. Dua pilihan:

- **Link YouTube** (dipakai sekarang): `music: "https://youtu.be/xLPGtQoRUbk"`
  — video diputar tersembunyi sebagai audio (butuh internet, sama seperti
  situs undangan pada umumnya).
- **File lokal**: `music: "assets/music.mp3"` (letakkan file-nya di `assets/`).

Kosongkan `""` jika tanpa musik — tombol musik otomatis disembunyikan.
Musik mulai setelah tamu menekan "Buka Undangan"; tombol ♫ untuk pause/play.

## 🌐 Dua bahasa (ID / EN)

Tombol **EN/ID** di pojok kanan atas mengganti bahasa seluruh undangan.
Pilihan tamu tersimpan otomatis. Bisa juga dipaksa lewat URL: `?lang=en`.
Teks konten versi Inggris diatur lewat field berakhiran `En` di
`js/config.js` (mis. `titleEn`, `parentsEn`) — jika dikosongkan, otomatis
memakai versi Indonesia.

## 👤 Membagikan ke tamu

Tambahkan nama tamu di URL supaya muncul di cover:

```
https://USERNAME.github.io/undangan/?to=Keluarga+Bapak+Agus
https://USERNAME.github.io/undangan/?to=Sahabat+Nurul
```

(Spasi ditulis `+` atau `%20`, tanda `&` ditulis `%26`.)

## 📖 Buku Tamu (Ucapan & RSVP)

Ucapan tersimpan permanen ke Google Sheet milikmu dan tampil untuk semua tamu.
Setup ±5 menit, gratis, tanpa layanan baru. Panduan lengkap:
**[GUESTBOOK.md](GUESTBOOK.md)** (script-nya di [`guestbook/Code.gs`](guestbook/Code.gs)).

Selama `guestbookUrl` di `js/config.js` masih kosong, undangan tetap jalan —
ucapan disimpan di browser tamu masing-masing sebagai cadangan.
