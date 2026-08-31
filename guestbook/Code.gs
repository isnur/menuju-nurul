/**
 * BUKU TAMU UNDANGAN — Google Apps Script (v3)
 * Ucapan/RSVP + balasan + badge mempelai + rate limit.
 *
 * FITUR:
 * - Kiriman yang menyertakan ADMIN_KEY yang benar ditandai kolom `admin`
 *   -> tampil dengan badge "✓ Mempelai" di undangan. Tamu bebas memakai
 *   nama apa pun, tapi hanya mempelai yang bisa mendapat badge ini.
 * - Rate limit global: maksimal MAX_PER_MINUTE kiriman per menit.
 *
 * PENTING SEBELUM DEPLOY:
 * 1. Ganti ADMIN_KEY di bawah dengan kunci rahasiamu sendiri (bebas, anggap
 *    seperti password). JANGAN commit kunci asli ke repo publik — cukup
 *    diganti di editor Apps Script saja.
 * 2. Deploy > Manage deployments > pensil > Version: New version > Deploy.
 *    (URL tetap sama.)
 *
 * Mempelai membalas ucapan dengan membuka undangan lewat:
 *   https://domain-undanganmu/?admin=KUNCI_RAHASIA
 * (sekali buka, tersimpan di perangkat; selanjutnya semua kiriman dari
 * perangkat itu otomatis bertanda mempelai.)
 */

var ADMIN_KEY = "GANTI_DENGAN_KUNCI_RAHASIA"; // <-- WAJIB diganti!
var MAX_PER_MINUTE = 10;
var SHEET_NAME = "Ucapan";

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(["time", "name", "attend", "msg", "id", "parentId", "admin"]);
  }
  return sh;
}

// GET -> semua ucapan & balasan sebagai JSON array
function doGet() {
  var sh = getSheet_();
  var values = sh.getDataRange().getValues();
  var out = [];
  for (var i = 1; i < values.length; i++) {
    var r = values[i];
    if (!r[1] && !r[3]) continue; // lewati baris kosong
    out.push({
      time: r[0] ? new Date(r[0]).getTime() : Date.now(),
      name: String(r[1] || ""),
      attend: String(r[2] || ""),
      msg: String(r[3] || ""),
      id: String(r[4] || "row" + (i + 1)),
      parentId: String(r[5] || ""),
      admin: String(r[6] || "") === "1",
    });
  }
  return json_(out);
}

// POST -> tambah satu ucapan atau balasan
function doPost(e) {
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    }
    var name = clean_(data.name).slice(0, 60);
    var attend = clean_(data.attend).slice(0, 20);
    var msg = clean_(data.msg || data.message).slice(0, 500);
    var parentId = clean_(data.parentId).slice(0, 40);
    var id = clean_(data.id).slice(0, 40) || Utilities.getUuid();
    var isAdmin =
      clean_(data.adminKey) !== "" && clean_(data.adminKey) === ADMIN_KEY;

    // Rate limit hanya untuk tamu — mempelai (kunci valid) bebas
    // membalas beruntun tanpa jeda.
    if (!isAdmin && rateLimited_()) {
      return json_({
        ok: false,
        error: "Terlalu banyak kiriman. Coba lagi sebentar lagi.",
      });
    }

    if (!name || !msg) {
      return json_({ ok: false, error: "Nama dan ucapan wajib diisi." });
    }

    getSheet_().appendRow([
      new Date(), name, attend, msg, id, parentId, isAdmin ? "1" : "",
    ]);
    return json_({ ok: true, id: id });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

// Rate limit global sederhana: hitung kiriman per 60 detik
function rateLimited_() {
  var lock = LockService.getScriptLock();
  try {
    lock.tryLock(3000);
    var cache = CacheService.getScriptCache();
    var n = Number(cache.get("rl") || 0) + 1;
    cache.put("rl", String(n), 60);
    return n > MAX_PER_MINUTE;
  } finally {
    try { lock.releaseLock(); } catch (ignored) {}
  }
}

function clean_(v) {
  return String(v == null ? "" : v).trim();
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(
    ContentService.MimeType.JSON
  );
}
