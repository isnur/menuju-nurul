# 📖 Buku Tamu Online (Google Sheet)

Undangan ini statis (GitHub Pages tanpa server), tapi ucapan & RSVP tetap bisa
**tersimpan permanen** dan **dilihat semua tamu** dengan bantuan Google Sheet +
Google Apps Script. Gratis, tanpa daftar layanan baru. Setup ±5 menit.

## Langkah setup

1. **Buat Spreadsheet**
   Buka <https://sheets.new> (login dengan akun Google kamu).
   Beri nama, misalnya `Buku Tamu Nikah`.

2. **Buka Apps Script**
   Di Spreadsheet: menu **Extensions → Apps Script**.
   Hapus semua kode contoh yang ada.

3. **Tempel kode**
   Salin **seluruh isi** file [`guestbook/Code.gs`](guestbook/Code.gs),
   tempel ke editor Apps Script, lalu klik ikon **Save** (💾).

4. **Deploy sebagai Web App**
   - Klik tombol **Deploy → New deployment**.
   - Klik ikon gerigi ⚙️ di samping "Select type" → pilih **Web app**.
   - Isi:
     - **Description**: `buku tamu` (bebas)
     - **Execute as**: **Me** (email kamu)
     - **Who has access**: **Anyone**
   - Klik **Deploy**.
   - Saat diminta izin: **Authorize access** → pilih akun → jika muncul
     "Google hasn't verified this app", klik **Advanced → Go to (nama
     project) (unsafe)** → **Allow**. (Ini normal untuk script pribadi.)

5. **Salin URL Web App**
   Setelah deploy, muncul **Web app URL** seperti:
   `https://script.google.com/macros/s/AKfycb..../exec`
   **Salin URL itu.**

6. **Pasang ke undangan**
   Buka [`js/config.js`](js/config.js), isi baris `guestbookUrl`:

   ```js
   guestbookUrl: "https://script.google.com/macros/s/AKfycb..../exec",
   ```

   Simpan, commit, push. Selesai! 🎉

## Cara kerja

- Tamu mengisi form ucapan → tersimpan ke tab **Ucapan** di Spreadsheet-mu
  (kolom: waktu, nama, kehadiran, ucapan).
- Semua tamu yang membuka undangan akan melihat daftar ucapan yang sama,
  langsung tertarik dari Spreadsheet.
- Kamu bisa buka Spreadsheet kapan saja untuk melihat rekap RSVP (siapa
  hadir / tidak) dan semua ucapan.

## Kalau mau mengubah / menghapus ucapan

Cukup edit atau hapus barisnya langsung di Google Spreadsheet. Perubahan
akan ikut tampil di undangan.

## Kalau `guestbookUrl` dikosongkan

Undangan tetap jalan: ucapan disimpan di browser tamu masing-masing
(localStorage) dan — jika `whatsapp` diisi di config — diteruskan ke WhatsApp.
Tapi ucapan tidak dibagikan antar tamu. Untuk buku tamu bersama, pakai cara di
atas.

## Update kode Apps Script nanti

Kalau kamu mengubah `Code.gs`, jangan lupa **Deploy → Manage deployments →
Edit (pensil) → Version: New version → Deploy** agar perubahan aktif. URL-nya
tetap sama, jadi tidak perlu mengganti `config.js`.
