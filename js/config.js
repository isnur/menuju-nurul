/* ============================================================
   KONFIGURASI UNDANGAN
   Edit file ini saja untuk mengganti semua data undangan.
   Field berakhiran "En" = versi bahasa Inggris (fallback ke
   versi Indonesia jika dikosongkan).
   ============================================================ */
const CONFIG = {
  // --- Mempelai ---
  groom: {
    nickname: "Isnur",
    fullname: "Isnur Muhammad Suryo Margono",
    parents: "Putra bungsu dari Bapak Bambang Margono (Alm.) & Ibu Welas Asih",
    parentsEn: "Youngest son of Mr. Bambang Margono (the late) & Mrs. Welas Asih",
    instagram: "", // tanpa @, kosongkan "" jika tidak ada
    photo: "assets/pria.jpg",
  },
  bride: {
    nickname: "Nurul",
    fullname: "Nurul Fitri Azahra",
    parents: "Putri pertama dari Bapak Agus Sunarno & Ibu Siti Rochati",
    parentsEn: "First daughter of Mr. Agus Sunarno & Mrs. Siti Rochati",
    instagram: "",
    photo: "assets/wanita.jpg",
  },
  hashtag: "#IsnurmenujuNurul",

  // --- Tanggal pernikahan (untuk countdown & kalender) ---
  // Format: tahun, bulan (1-12), tanggal, jam, menit  (waktu lokal / WIB)
  weddingDate: { year: 2027, month: 1, day: 9, hour: 9, minute: 0 },
  weddingDateText: "Sabtu, 9 Januari 2027",
  weddingDateTextEn: "Saturday, January 9th, 2027",

  // --- Acara ---
  events: [
    {
      name: "Akad Nikah",
      nameEn: "Akad Nikah",
      date: "Sabtu, 9 Januari 2027",
      dateEn: "Saturday, January 9th, 2027",
      time: "09.00 WIB",
      timeEn: "09.00 AM (WIB)",
      venue: "Masjid Nurul Iman",
      address:
        "Jl. Merbabu, RT.01/RW.006, Karang Tengah, Kec. Karang Tengah, Kota Tangerang, Banten 15157",
      maps: "https://maps.google.com/?q=Masjid+Nurul+Iman+Jl.+Merbabu+Karang+Tengah+Tangerang",
    },
    {
      name: "Resepsi",
      nameEn: "Reception",
      date: "Sabtu, 9 Januari 2027",
      dateEn: "Saturday, January 9th, 2027",
      time: "11.00 - 13.00 WIB",
      timeEn: "11.00 AM - 1.00 PM (WIB)",
      venue: "Aula Masjid Nurul Iman",
      address:
        "Jl. Merbabu, RT.01/RW.006, Karang Tengah, Kec. Karang Tengah, Kota Tangerang, Banten 15157",
      maps: "https://maps.google.com/?q=Masjid+Nurul+Iman+Jl.+Merbabu+Karang+Tengah+Tangerang",
    },
  ],

  // --- Google Calendar (jam dalam WIB) ---
  calendar: {
    title: "Pernikahan Isnur & Nurul",
    details: "Akad Nikah & Resepsi Pernikahan Isnur dan Nurul",
    location:
      "Aula Masjid Nurul Iman, Jl. Merbabu, Karang Tengah, Kota Tangerang, Banten",
    // format: YYYYMMDDTHHMMSS/YYYYMMDDTHHMMSS dalam UTC (WIB - 7 jam)
    // 9 Jan 2027, 09.00–13.00 WIB = 02.00–06.00 UTC
    dates: "20270109T020000Z/20270109T060000Z",
  },

  // --- Love story ---
  story: [
    {
      year: "2 Agustus 2026",
      yearEn: "August 2nd, 2026",
      title: "Match di Bumble",
      titleEn: "Matched on Bumble",
      text: "Semesta mempertemukan kami lewat sebuah aplikasi. Sebuah 'match' yang kelak mengubah segalanya.",
      textEn:
        "The universe brought us together through an app. A single match that would change everything.",
    },
    {
      year: "4 Agustus 2026",
      yearEn: "August 4th, 2026",
      title: "Pertemuan Pertama",
      titleEn: "First Date",
      text: "Kencan pertama kami: menonton Spider-Man di bioskop. Dari layar lebar, tumbuh cerita kami sendiri.",
      textEn:
        "Our first date: watching Spider-Man at the cinema. From the big screen, our own story began to grow.",
    },
    {
      year: "23 Agustus 2026",
      yearEn: "August 23rd, 2026",
      title: "Pertemuan Keluarga",
      titleEn: "Meeting the Families",
      text: "Kami memberanikan diri saling mengenalkan diri kepada keluarga, melangkah lebih serius bersama.",
      textEn:
        "We introduced each other to our families, taking a more serious step forward together.",
    },
    {
      year: "10 Oktober 2026",
      yearEn: "October 10th, 2026",
      title: "Tunangan",
      titleEn: "Engagement",
      text: "Dengan restu kedua keluarga, kami mengikat janji dalam sebuah pertunangan yang penuh haru dan bahagia.",
      textEn:
        "With both families' blessings, we made our promise in a heartfelt and joyful engagement.",
    },
    {
      year: "9 Januari 2027",
      yearEn: "January 9th, 2027",
      title: "Menikah",
      titleEn: "The Wedding",
      text: "Dan sampailah kami pada hari yang dinanti. Mohon doa restu agar kami menjadi keluarga sakinah, mawaddah, warahmah.",
      textEn:
        "And here we are, at the long-awaited day. Kindly bless us with your prayers for a family full of love and grace.",
    },
  ],

  // --- Galeri ---
  gallery: [
    "assets/galeri-1.jpg",
    "assets/galeri-2.jpg",
    "assets/galeri-3.jpg",
    "assets/galeri-4.jpg",
  ],

  // --- Foto cover & hero ---
  // coverPhoto dipakai di layar kecil (HP), coverPhotoDesktop di layar lebar.
  // Kosongkan coverPhotoDesktop "" untuk memakai foto yang sama.
  coverPhoto: "assets/cover.jpg",
  coverPhotoDesktop: "assets/cover-desktop.jpg",

  // --- Amplop digital / kado ---
  gifts: [
    { bank: "BCA", number: "1234567890", holder: "Nurul Fitri Azahra" },
    { bank: "BCA", number: "1234567890", holder: "Isnur Muhammad Suryo Margono" },
  ],
  giftAddress:
    "Green Lake View, Cluster Edelweiss, Blok H, No.11, Curug, Cimanggis, Depok City, West Java 16453",

  // --- WhatsApp untuk menerima RSVP/ucapan (format internasional tanpa +) ---
  // Kosongkan "" jika tidak ingin memakai tombol kirim via WhatsApp.
  whatsapp: "",

  // --- Buku Tamu (Google Sheet via Apps Script) ---
  // Tempel URL Web App hasil deploy Apps Script di sini. Lihat GUESTBOOK.md.
  // Jika kosong "", ucapan hanya tersimpan di browser tamu (localStorage).
  guestbookUrl:
    "https://script.google.com/macros/s/AKfycbza7f7fWub2GrOYHUaweL77PHpobVoIpVRjx63KP-Y4tNp5GExHzkV-ENLRdA31wkRsQw/exec",

  // --- Musik latar ---
  // Bisa link YouTube (mis. "https://youtu.be/xxxx") ATAU file lokal
  // (mis. "assets/music.mp3"). Kosongkan "" jika tanpa musik.
  music: "https://youtu.be/xLPGtQoRUbk", // Kodaline - The One
};
