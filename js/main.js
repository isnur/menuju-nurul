/* ============================================================
   LOGIKA UNDANGAN — tidak perlu diedit untuk pemakaian normal.
   Semua data diambil dari js/config.js
   ============================================================ */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const esc = (s) =>
    String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[c]));

  /* ============================================================
     BAHASA (ID / EN)
     ============================================================ */
  const I18N = {
    id: {
      guestLabel: "Kepada Yth. Bapak/Ibu/Saudara/i",
      openBtn: "Buka Undangan",
      cdDays: "Hari", cdHours: "Jam", cdMinutes: "Menit", cdSeconds: "Detik",
      saveDate: "Simpan Tanggal",
      quoteText:
        "“Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.”",
      coupleTitle: "Mempelai",
      coupleSub:
        "Dengan memohon rahmat dan ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:",
      journeySub: "Perjalanan kami hingga sampai di hari bahagia ini.",
      eventsTitle: "Rangkaian Acara",
      eventsSub:
        "Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir.",
      galleryTitle: "Galeri",
      giftSub:
        "Doa restu Anda adalah hadiah terbaik bagi kami. Namun jika memberi adalah ungkapan tanda kasih, Anda dapat memberi melalui:",
      sendGift: "Kirim Kado",
      wishesTitle: "Ucapan & Doa",
      wishesSub: "Kirimkan ucapan dan konfirmasi kehadiran Anda.",
      optConfirm: "Konfirmasi kehadiran",
      optYes: "Hadir, InsyaAllah",
      optNo: "Maaf, belum bisa hadir",
      optMaybe: "Masih ragu",
      sendWish: "Kirim Ucapan",
      closingText:
        "Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu kepada kami.",
      // dipakai lewat JS:
      phName: "Nama Anda",
      phMessage: "Tulis ucapan & doa...",
      viewLocation: "📍 Lihat Lokasi",
      copyBtn: "Salin No. Rekening",
      copied: "✓ Tersalin",
      holderPrefix: "a.n.",
      wishCount: (n) => n + " Ucapan",
      loadingWishes: "Memuat ucapan…",
      beFirst: "Jadilah yang pertama memberi ucapan 💌",
      thanksSaved: "Terima kasih! Ucapanmu sudah tersimpan. 💌",
      thanksLocal: "Ucapan tersimpan di perangkatmu. (Koneksi ke server bermasalah)",
      thanksWa: "Terima kasih! Ucapanmu juga diteruskan via WhatsApp.",
      thanks: "Terima kasih atas ucapan dan doanya!",
      justNow: "baru saja",
      minutesAgo: (n) => n + " menit lalu",
      hoursAgo: (n) => n + " jam lalu",
      daysAgo: (n) => n + " hari lalu",
      reply: "Balas",
      replyPh: "Tulis balasan...",
      sendReply: "Kirim",
      cancel: "Batal",
      coupleBadge: "Mempelai",
      sendFail: "Gagal mengirim. Coba lagi ya.",
      attendBadge: { "Hadir": "Hadir", "Tidak Hadir": "Tidak Hadir", "Masih Ragu": "Masih Ragu" },
      guestFallback: "Tamu Undangan",
      docTitle: (names) => "Undangan Pernikahan " + names,
    },
    en: {
      guestLabel: "Dear Mr/Mrs/Ms",
      openBtn: "Open Invitation",
      cdDays: "Days", cdHours: "Hours", cdMinutes: "Minutes", cdSeconds: "Seconds",
      saveDate: "Save the Date",
      quoteText:
        "“And of His signs is that He created for you from yourselves mates that you may find tranquility in them; and He placed between you affection and mercy. Indeed in that are signs for a people who give thought.”",
      coupleTitle: "The Couple",
      coupleSub:
        "By the grace and blessings of Allah SWT, we cordially request your presence at the wedding of our beloved children:",
      journeySub: "Our journey that led us to this joyful day.",
      eventsTitle: "Wedding Events",
      eventsSub:
        "It would be an honor and a joy for us to have you attend and celebrate this special day.",
      galleryTitle: "Gallery",
      giftSub:
        "Your prayers and blessings are the greatest gift. However, if you wish to give a token of love, you may send it through:",
      sendGift: "Send a Gift",
      wishesTitle: "Wishes & Prayers",
      wishesSub: "Send your wishes and confirm your attendance.",
      optConfirm: "Will you attend?",
      optYes: "Yes, I will attend",
      optNo: "Sorry, I can't attend",
      optMaybe: "Not sure yet",
      sendWish: "Send Wishes",
      closingText:
        "It would be a great joy and honor for us if you could attend and give us your blessings on our special day.",
      phName: "Your name",
      phMessage: "Write your wishes & prayers...",
      viewLocation: "📍 View Location",
      copyBtn: "Copy Account No.",
      copied: "✓ Copied",
      holderPrefix: "a/n",
      wishCount: (n) => n + " Wishes",
      loadingWishes: "Loading wishes…",
      beFirst: "Be the first to send your wishes 💌",
      thanksSaved: "Thank you! Your wishes have been saved. 💌",
      thanksLocal: "Saved on your device. (Could not reach the server)",
      thanksWa: "Thank you! Your wishes were also forwarded via WhatsApp.",
      thanks: "Thank you for your wishes and prayers!",
      justNow: "just now",
      minutesAgo: (n) => n + " minutes ago",
      hoursAgo: (n) => n + " hours ago",
      daysAgo: (n) => n + " days ago",
      reply: "Reply",
      replyPh: "Write a reply...",
      sendReply: "Send",
      cancel: "Cancel",
      coupleBadge: "The Couple",
      sendFail: "Failed to send. Please try again.",
      attendBadge: { "Hadir": "Attending", "Tidak Hadir": "Not Attending", "Masih Ragu": "Maybe" },
      guestFallback: "Dear Guest",
      docTitle: (names) => "The Wedding of " + names,
    },
  };

  // Bahasa aktif: ?lang= di URL > pilihan tersimpan > default ID
  const params = new URLSearchParams(location.search);
  let lang = (params.get("lang") || "").toLowerCase();
  if (lang !== "id" && lang !== "en") {
    try { lang = localStorage.getItem("wedding-lang") || "id"; } catch { lang = "id"; }
  }
  if (lang !== "en") lang = "id";
  const t = () => I18N[lang];
  const pick = (obj, key) => (lang === "en" && obj[key + "En"] ? obj[key + "En"] : obj[key]);

  /* ---------- Nama tamu dari ?to= ---------- */
  const guestParam = (params.get("to") || "").trim();

  /* ---------- Mode mempelai ----------
     Buka undangan sekali dengan ?admin=KUNCI_RAHASIA — kunci tersimpan di
     perangkat, dan semua kiriman berikutnya bertanda "✓ Mempelai".
     Kunci divalidasi di server (Apps Script), bukan di sini. */
  let adminKey = (params.get("admin") || "").trim();
  try {
    if (adminKey) localStorage.setItem("wedding-admin", adminKey);
    else adminKey = localStorage.getItem("wedding-admin") || "";
  } catch {}

  /* ---------- Data statis dari CONFIG ---------- */
  const names = `${CONFIG.groom.nickname} & ${CONFIG.bride.nickname}`;
  $("coverNames").textContent = names;
  $("heroNames").textContent = names;
  $("closingNames").textContent = names;
  $("heroHashtag").textContent = CONFIG.hashtag || "";

  // Foto cover: versi mobile & desktop (dipilih lewat media query di CSS).
  // Pakai URL absolut karena url() di dalam CSS variable di-resolve
  // relatif terhadap file stylesheet, bukan halaman.
  const absUrl = (p) => new URL(p, document.baseURI).href;
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty("--cover-mobile", `url("${absUrl(CONFIG.coverPhoto)}")`);
  rootStyle.setProperty(
    "--cover-desktop",
    `url("${absUrl(CONFIG.coverPhotoDesktop || CONFIG.coverPhoto)}")`
  );

  const fillPerson = (p, prefix) => {
    $(prefix + "Photo").src = p.photo;
    $(prefix + "Name").textContent = p.nickname;
    $(prefix + "Fullname").textContent = p.fullname;
    if (p.instagram) {
      const a = $(prefix + "Ig");
      a.href = "https://instagram.com/" + p.instagram;
      a.textContent = "@" + p.instagram;
      a.hidden = false;
    }
  };
  fillPerson(CONFIG.groom, "groom");
  fillPerson(CONFIG.bride, "bride");

  const cal = CONFIG.calendar;
  $("calendarBtn").href =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=" + encodeURIComponent(cal.title) +
    "&details=" + encodeURIComponent(cal.details) +
    "&location=" + encodeURIComponent(cal.location) +
    "&dates=" + encodeURIComponent(cal.dates);

  $("galleryGrid").innerHTML = CONFIG.gallery
    .map((src, i) => `<img src="${esc(src)}" alt="Galeri ${i + 1}" loading="lazy" class="reveal" data-idx="${i}" />`)
    .join("");
  $("giftAddress").textContent = CONFIG.giftAddress;

  /* ---------- Lightbox galeri ---------- */
  const lb = document.createElement("div");
  lb.className = "lightbox";
  lb.innerHTML =
    '<button class="lightbox__btn lightbox__close" aria-label="Tutup">✕</button>' +
    '<button class="lightbox__btn lightbox__prev" aria-label="Sebelumnya">‹</button>' +
    '<img alt="Foto galeri" />' +
    '<button class="lightbox__btn lightbox__next" aria-label="Berikutnya">›</button>' +
    '<div class="lightbox__counter"></div>';
  document.body.appendChild(lb);
  const lbImg = lb.querySelector("img");
  const lbCounter = lb.querySelector(".lightbox__counter");
  let lbIdx = 0;

  function lbShow(i) {
    lbIdx = (i + CONFIG.gallery.length) % CONFIG.gallery.length;
    lbImg.src = CONFIG.gallery[lbIdx];
    lbCounter.textContent = (lbIdx + 1) + " / " + CONFIG.gallery.length;
  }
  function lbOpen(i) {
    lbShow(i);
    lb.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }
  function lbClose() {
    lb.classList.remove("is-open");
    document.body.style.overflow = "";
  }
  $("galleryGrid").addEventListener("click", (e) => {
    const img = e.target.closest("img[data-idx]");
    if (img) lbOpen(Number(img.dataset.idx));
  });
  lb.querySelector(".lightbox__close").addEventListener("click", lbClose);
  lb.querySelector(".lightbox__prev").addEventListener("click", (e) => { e.stopPropagation(); lbShow(lbIdx - 1); });
  lb.querySelector(".lightbox__next").addEventListener("click", (e) => { e.stopPropagation(); lbShow(lbIdx + 1); });
  lb.addEventListener("click", (e) => { if (e.target === lb) lbClose(); });
  document.addEventListener("keydown", (e) => {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape") lbClose();
    if (e.key === "ArrowLeft") lbShow(lbIdx - 1);
    if (e.key === "ArrowRight") lbShow(lbIdx + 1);
  });

  /* ---------- Render yang tergantung bahasa ---------- */
  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t().docTitle(names);
    $("langLabel").textContent = lang === "id" ? "EN" : "ID";
    try { localStorage.setItem("wedding-lang", lang); } catch {}

    // Teks statis bertanda data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const v = t()[el.dataset.i18n];
      if (typeof v === "string") el.textContent = v;
    });

    // Placeholder form
    $("wishName").placeholder = t().phName;
    $("wishMessage").placeholder = t().phMessage;

    // Nama tamu & tanggal
    $("guestName").textContent = guestParam || t().guestFallback;
    $("coverDate").textContent = pick(CONFIG, "weddingDateText");
    $("heroDate").textContent = pick(CONFIG, "weddingDateText");

    // Orang tua mempelai
    $("groomParents").textContent = pick(CONFIG.groom, "parents");
    $("brideParents").textContent = pick(CONFIG.bride, "parents");

    // Love story
    $("storyTimeline").innerHTML = CONFIG.story
      .map(
        (s) => `
        <div class="story__item reveal is-visible">
          <div class="story__year">${esc(pick(s, "year"))}</div>
          <div class="story__title">${esc(pick(s, "title"))}</div>
          <p class="story__text">${esc(pick(s, "text"))}</p>
        </div>`
      )
      .join("");

    // Acara
    $("eventsGrid").innerHTML = CONFIG.events
      .map(
        (e) => `
        <div class="event-card reveal is-visible">
          <div class="event-card__name">${esc(pick(e, "name"))}</div>
          <div class="event-card__date">${esc(pick(e, "date"))}</div>
          <div class="event-card__time">${esc(pick(e, "time"))}</div>
          <div class="event-card__venue">${esc(e.venue)}</div>
          <div class="event-card__address">${esc(e.address)}</div>
          <a class="btn btn--primary btn--small" href="${esc(e.maps)}" target="_blank" rel="noopener">${t().viewLocation}</a>
        </div>`
      )
      .join("");

    // Gift
    $("giftGrid").innerHTML = CONFIG.gifts
      .map(
        (g) => `
        <div class="gift-card reveal is-visible">
          <div class="gift-card__bank">${esc(g.bank)}</div>
          <div class="gift-card__number">${esc(g.number)}</div>
          <div class="gift-card__holder">${t().holderPrefix} ${esc(g.holder)}</div>
          <button class="btn btn--small" data-copy="${esc(g.number)}">${t().copyBtn}</button>
        </div>`
      )
      .join("");
    bindCopyButtons();

    renderWishes(lastWishes);
  }

  $("langToggle").addEventListener("click", () => {
    lang = lang === "id" ? "en" : "id";
    applyLang();
  });

  function bindCopyButtons() {
    document.querySelectorAll("[data-copy]").forEach((btn) => {
      btn.addEventListener("click", async () => {
        try {
          await navigator.clipboard.writeText(btn.dataset.copy);
        } catch {
          const ta = document.createElement("textarea");
          ta.value = btn.dataset.copy;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          ta.remove();
        }
        const old = btn.textContent;
        btn.textContent = t().copied;
        btn.classList.add("copied");
        setTimeout(() => {
          btn.textContent = old;
          btn.classList.remove("copied");
        }, 2000);
      });
    });
  }

  /* ---------- Countdown ---------- */
  const d = CONFIG.weddingDate;
  const target = new Date(d.year, d.month - 1, d.day, d.hour, d.minute).getTime();
  const pad = (n) => String(n).padStart(2, "0");
  function tick() {
    const diff = target - Date.now();
    if (diff <= 0) {
      $("cdDays").textContent = "0";
      $("cdHours").textContent = "00";
      $("cdMinutes").textContent = "00";
      $("cdSeconds").textContent = "00";
      return;
    }
    $("cdDays").textContent = Math.floor(diff / 864e5);
    $("cdHours").textContent = pad(Math.floor(diff / 36e5) % 24);
    $("cdMinutes").textContent = pad(Math.floor(diff / 6e4) % 60);
    $("cdSeconds").textContent = pad(Math.floor(diff / 1e3) % 60);
  }
  tick();
  setInterval(tick, 1000);

  /* ============================================================
     MUSIK — mendukung YouTube (link youtu.be / youtube.com)
     ataupun file audio lokal (assets/music.mp3).
     ============================================================ */
  const musicBtn = $("musicToggle");
  const musicSrc = (CONFIG.music || "").trim();
  const ytMatch = musicSrc.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{11})/
  );

  let playMusic = () => {};
  let pauseMusic = () => {};
  let musicPlaying = false;

  function setBtnState(playing) {
    musicPlaying = playing;
    musicBtn.hidden = false;
    musicBtn.classList.toggle("is-playing", playing);
    musicBtn.classList.toggle("is-paused", !playing);
  }

  if (ytMatch) {
    // --- Mode YouTube ---
    const videoId = ytMatch[1];
    let player = null;
    let wantPlay = false;

    window.onYouTubeIframeAPIReady = function () {
      player = new YT.Player("ytHolder", {
        height: "1",
        width: "1",
        videoId: videoId,
        playerVars: { playsinline: 1, loop: 1, playlist: videoId },
        events: {
          onReady: function () {
            player.setVolume(70);
            if (wantPlay) {
              player.playVideo();
              setBtnState(true);
            }
          },
          onStateChange: function (ev) {
            if (ev.data === YT.PlayerState.PLAYING) setBtnState(true);
            if (ev.data === YT.PlayerState.PAUSED) setBtnState(false);
            if (ev.data === YT.PlayerState.ENDED) player.playVideo();
          },
        },
      });
    };
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    tag.onerror = () => { musicBtn.hidden = true; };
    document.head.appendChild(tag);

    playMusic = () => {
      if (player && player.playVideo) {
        player.playVideo();
        setBtnState(true);
      } else {
        wantPlay = true; // diputar begitu player siap
      }
    };
    pauseMusic = () => {
      if (player && player.pauseVideo) player.pauseVideo();
      setBtnState(false);
    };
  } else if (musicSrc) {
    // --- Mode file audio lokal ---
    const audio = new Audio(musicSrc);
    audio.loop = true;
    audio.addEventListener("error", () => { musicBtn.hidden = true; });
    playMusic = () => {
      audio.play().then(() => setBtnState(true)).catch(() => {});
    };
    pauseMusic = () => {
      audio.pause();
      setBtnState(false);
    };
  } else {
    musicBtn.hidden = true;
  }

  musicBtn.addEventListener("click", () => {
    if (musicPlaying) pauseMusic();
    else playMusic();
  });

  /* ---------- Buka undangan ---------- */
  $("openBtn").addEventListener("click", () => {
    $("cover").classList.add("is-open");
    document.body.classList.remove("locked");
    playMusic();
    // Tampilkan tombol musik meski autoplay diblokir browser,
    // supaya tamu bisa memutarnya manual.
    if (musicSrc) musicBtn.hidden = false;
  });

  // Mode preview: tambah ?open=1 di URL untuk langsung melewati cover
  if (params.get("open") === "1") {
    $("cover").classList.add("is-open");
    document.body.classList.remove("locked");
    document.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-visible"));
  }

  /* ---------- Animasi scroll ---------- */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          en.target.classList.add("is-visible");
          io.unobserve(en.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  function observeReveals() {
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
  }

  /* ============================================================
     UCAPAN & RSVP (Buku Tamu)
     Tersimpan ke Google Sheet lewat Apps Script (CONFIG.guestbookUrl);
     fallback ke localStorage jika URL kosong / server tak terjangkau.
     ============================================================ */
  const STORE_KEY = "wedding-wishes";
  const GB_URL = (CONFIG.guestbookUrl || "").trim();
  let lastWishes = [];

  function localLoad() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }
  function localSave(list) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(list)); } catch {}
  }

  function timeAgo(ts) {
    const s = Math.floor((Date.now() - ts) / 1000);
    if (s < 60) return t().justNow;
    if (s < 3600) return t().minutesAgo(Math.floor(s / 60));
    if (s < 86400) return t().hoursAgo(Math.floor(s / 3600));
    return t().daysAgo(Math.floor(s / 86400));
  }

  // Pagination halaman: 5 ucapan per halaman, navigasi ‹ x/y ›
  const PAGE_SIZE = 5;
  let wishPage = 1;
  let activeReplyId = null; // id ucapan yang form balasannya sedang terbuka
  const uid = () =>
    Date.now().toString(36) + Math.random().toString(36).slice(2, 8);

  function renderWishes(list) {
    lastWishes = list;
    const tops = list
      .filter((w) => !w.parentId)
      .sort((a, b) => b.time - a.time);
    const replies = {};
    list
      .filter((w) => w.parentId)
      .sort((a, b) => a.time - b.time)
      .forEach((r) => {
        (replies[r.parentId] = replies[r.parentId] || []).push(r);
      });

    $("wishCount").textContent = t().wishCount(tops.length);
    if (!tops.length) {
      $("wishList").innerHTML =
        `<p style="text-align:center;color:var(--muted)">${t().beFirst}</p>`;
      return;
    }

    const totalPages = Math.max(1, Math.ceil(tops.length / PAGE_SIZE));
    if (wishPage > totalPages) wishPage = totalPages;
    if (wishPage < 1) wishPage = 1;
    const visible = tops.slice((wishPage - 1) * PAGE_SIZE, wishPage * PAGE_SIZE);

    let html = visible
      .map((w) => {
        const adminBadge = `<span class="wish-item__badge wish-item__badge--admin">✓ ${esc(t().coupleBadge)}</span>`;
        const reps = (replies[w.id] || [])
          .map(
            (r) => `
            <div class="wish-reply">
              <span class="wish-item__name">${esc(r.name)}</span>
              ${r.admin ? adminBadge : ""}
              <p class="wish-item__msg">${esc(r.msg)}</p>
              <div class="wish-item__time">${timeAgo(r.time)}</div>
            </div>`
          )
          .join("");
        const replyForm =
          activeReplyId === w.id
            ? `
            <form class="wish-reply-form" data-parent="${esc(w.id)}">
              <input type="text" class="rf-name" placeholder="${esc(t().phName)}"
                required maxlength="60" value="${esc(adminKey ? names : guestParam || "")}" />
              <textarea class="rf-msg" placeholder="${esc(t().replyPh)}"
                rows="2" required maxlength="500"></textarea>
              <div class="wish-reply-form__actions">
                <button type="submit" class="btn btn--primary btn--small">${esc(t().sendReply)}</button>
                <button type="button" class="btn btn--small wish-reply-cancel">${esc(t().cancel)}</button>
              </div>
              <p class="rf-note"></p>
            </form>`
            : "";
        return `
        <div class="wish-item">
          <div class="wish-item__head">
            <span class="wish-item__name">${esc(w.name)}</span>
            ${w.admin ? adminBadge : w.attend ? `<span class="wish-item__badge">${esc(t().attendBadge[w.attend] || w.attend)}</span>` : ""}
          </div>
          <p class="wish-item__msg">${esc(w.msg)}</p>
          <div class="wish-item__foot">
            <span class="wish-item__time">${timeAgo(w.time)}</span>
            ${w.id ? `<button type="button" class="wish-item__reply" data-reply="${esc(w.id)}">${esc(t().reply)}</button>` : ""}
          </div>
          ${reps ? `<div class="wish-replies">${reps}</div>` : ""}
          ${replyForm}
        </div>`;
      })
      .join("");

    if (totalPages > 1) {
      html += `
      <div class="wishes__pager">
        <button type="button" class="wishes__pager-btn" data-page="-1"
          ${wishPage <= 1 ? "disabled" : ""} aria-label="Prev">‹</button>
        <span class="wishes__pager-info">${wishPage} / ${totalPages}</span>
        <button type="button" class="wishes__pager-btn" data-page="1"
          ${wishPage >= totalPages ? "disabled" : ""} aria-label="Next">›</button>
      </div>`;
    }
    $("wishList").innerHTML = html;
  }

  // Satu event handler untuk pager, tombol balas, dan form balasan
  $("wishList").addEventListener("click", (e) => {
    const pagerBtn = e.target.closest("[data-page]");
    if (pagerBtn && !pagerBtn.disabled) {
      wishPage += Number(pagerBtn.dataset.page);
      activeReplyId = null;
      renderWishes(lastWishes);
      $("wishCount").scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    const replyBtn = e.target.closest("[data-reply]");
    if (replyBtn) {
      activeReplyId = activeReplyId === replyBtn.dataset.reply ? null : replyBtn.dataset.reply;
      renderWishes(lastWishes);
      return;
    }
    if (e.target.closest(".wish-reply-cancel")) {
      activeReplyId = null;
      renderWishes(lastWishes);
    }
  });

  $("wishList").addEventListener("submit", (e) => {
    const form = e.target.closest(".wish-reply-form");
    if (!form) return;
    e.preventDefault();
    const reply = {
      id: uid(),
      parentId: form.dataset.parent,
      name: form.querySelector(".rf-name").value.trim(),
      attend: "",
      msg: form.querySelector(".rf-msg").value.trim(),
      time: Date.now(),
    };
    if (!reply.name || !reply.msg) return;
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    sendWish(reply, (res) => {
      if (!res.ok) {
        btn.disabled = false;
        form.querySelector(".rf-note").textContent = res.error || t().sendFail;
        return;
      }
      activeReplyId = null;
      fetchWishes();
    });
  });

  // Kirim satu ucapan/balasan ke server; fallback localStorage hanya saat
  // server tidak terjangkau (bukan saat server menolak).
  function sendWish(wish, onDone) {
    if (!GB_URL) {
      const local = localLoad();
      local.push(wish);
      localSave(local);
      onDone({ ok: true, offline: true });
      return;
    }
    fetch(GB_URL, {
      method: "POST",
      headers: { "Content-Type": "text/plain;charset=utf-8" },
      body: JSON.stringify(Object.assign({}, wish, { adminKey: adminKey })),
    })
      .then((r) => r.json())
      .then((res) =>
        onDone(
          res && res.ok
            ? { ok: true }
            : { ok: false, error: (res && res.error) || "" }
        )
      )
      .catch(() => {
        const local = localLoad();
        local.push(wish);
        localSave(local);
        onDone({ ok: true, offline: true });
      });
  }

  function normalize(row) {
    return {
      name: row.name || "",
      attend: row.attend || "",
      msg: row.msg || row.message || "",
      time: row.time ? new Date(row.time).getTime() : Date.now(),
      id: row.id || "",
      parentId: row.parentId || "",
      admin: row.admin === true || row.admin === "1",
    };
  }

  function fetchWishes() {
    if (!GB_URL) {
      renderWishes(localLoad());
      return;
    }
    $("wishCount").textContent = t().loadingWishes;
    fetch(GB_URL)
      .then((r) => r.json())
      .then((data) => {
        const rows = Array.isArray(data) ? data : data.data || [];
        renderWishes(rows.map(normalize));
      })
      .catch(() => renderWishes(localLoad()));
  }

  if (guestParam) $("wishName").value = guestParam;

  $("wishForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const wish = {
      id: uid(),
      parentId: "",
      name: $("wishName").value.trim(),
      attend: $("wishAttend").value,
      msg: $("wishMessage").value.trim(),
      time: Date.now(),
    };
    if (!wish.name || !wish.msg) return;

    const submitBtn = $("wishForm").querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    const note = (msg) => {
      $("wishNote").textContent = msg;
      setTimeout(() => { $("wishNote").textContent = ""; }, 6000);
    };

    sendWish(wish, (res) => {
      submitBtn.disabled = false;
      if (!res.ok) {
        note(res.error || t().sendFail);
        return;
      }
      if (!GB_URL && CONFIG.whatsapp) {
        const text =
          `Ucapan & RSVP Pernikahan\n` +
          `Nama: ${wish.name}\nKehadiran: ${wish.attend}\nUcapan: ${wish.msg}`;
        window.open(
          `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(text)}`,
          "_blank",
          "noopener"
        );
        note(t().thanksWa);
      } else if (res.offline) {
        note(GB_URL ? t().thanksLocal : t().thanks);
      } else {
        note(t().thanksSaved);
      }
      $("wishMessage").value = "";
      $("wishAttend").selectedIndex = 0;
      fetchWishes();
    });
  });

  /* ---------- Inisialisasi ---------- */
  applyLang();
  observeReveals();
  fetchWishes();
})();
