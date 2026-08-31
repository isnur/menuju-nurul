/**
 * BUKU TAMU UNDANGAN — Google Apps Script (v2: mendukung balasan)
 * Menyimpan ucapan/RSVP + balasan ke Google Spreadsheet.
 *
 * UPDATE dari v1: ada kolom `id` dan `parentId` (untuk fitur balas ucapan).
 * Baris lama tanpa id tetap terbaca (id dibuat dari nomor baris).
 *
 * Cara update deploy yang sudah ada:
 * 1. Buka Apps Script project-mu, ganti seluruh kode dengan file ini, Save.
 * 2. Deploy > Manage deployments > klik ikon pensil > Version: New version
 *    > Deploy. (URL tetap sama, config.js tidak perlu diubah.)
 */

var SHEET_NAME = "Ucapan";

function getSheet_() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sh = ss.getSheetByName(SHEET_NAME);
  if (!sh) {
    sh = ss.insertSheet(SHEET_NAME);
    sh.appendRow(["time", "name", "attend", "msg", "id", "parentId"]);
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
    if (!name || !msg) {
      return json_({ ok: false, error: "Nama dan ucapan wajib diisi." });
    }
    getSheet_().appendRow([new Date(), name, attend, msg, id, parentId]);
    return json_({ ok: true, id: id });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
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
