import type { Lang } from "./lang";

export type Copy = { th: string; en: string };

export function tx(lang: Lang, copy: Copy): string {
  return copy[lang];
}

export const ui = {
  appName: {
    th: "Construction Chemical Document",
    en: "Construction Chemical Document",
  },
  library: { th: "คลังเอกสารเคมีภัณฑ์ก่อสร้าง", en: "Construction Chemical Library" },
  heroTitle: {
    th: "เอกสารข้อมูลทางเทคนิค",
    en: "Technical Data Sheets",
  },
  heroLead: {
    th: "รวบรวม TDS และคู่มือการใช้งาน 8 ฉบับ ของ WetPROOF, RoofGUARD และ LOCKSURE — ดาวน์โหลด PDF ได้ทันที",
    en: "Eight WetPROOF, RoofGUARD and LOCKSURE technical documents — open or download the original PDF.",
  },
  docsCount: { th: "8 เอกสาร", en: "8 documents" },
  version: { th: "ฉบับ กรกฎาคม 2569", en: "July 2026 · Rev. 01" },
  search: {
    th: "ค้นหาชื่อ รหัส หรือการใช้งาน",
    en: "Search name, code, or use",
  },
  all: { th: "ทั้งหมด", en: "All" },
  download: { th: "ดาวน์โหลด PDF", en: "Download PDF" },
  openPdf: { th: "เปิดเอกสาร", en: "Open PDF" },
  details: { th: "รายละเอียด", en: "Details" },
  back: { th: "กลับคลังเอกสาร", en: "Back to library" },
  specs: { th: "ข้อมูลทางเทคนิค", en: "Technical data" },
  highlights: { th: "คุณสมบัติเด่น", en: "Key highlights" },
  applications: { th: "การใช้งาน", en: "Applications" },
  mixing: { th: "อัตราส่วนผสม", en: "Mixing" },
  coverage: { th: "อัตราการใช้งาน", en: "Coverage" },
  pack: { th: "ขนาดบรรจุ", en: "Pack size" },
  color: { th: "สี", en: "Colour" },
  shelf: { th: "อายุผลิตภัณฑ์", en: "Shelf life" },
  notes: { th: "ข้อแนะนำ", en: "Notes" },
  related: { th: "เอกสารในกลุ่มเดียวกัน", en: "In the same range" },
  pages: { th: "หน้า", en: "pages" },
  empty: {
    th: "ไม่พบเอกสารที่ตรงกับคำค้น ลองเปลี่ยนหมวดหรือคำค้นใหม่",
    en: "No documents match this search. Try another filter or keyword.",
  },
  quickTitle: { th: "ลิงก์ดาวน์โหลดด่วน", en: "Quick download links" },
  quickLead: {
    th: "กดดาวน์โหลดไฟล์ต้นฉบับได้เลย ทั้ง 8 ฉบับ",
    en: "Original PDFs — all eight files, one click each.",
  },
  catalogTitle: { th: "เลือกเอกสารตามแบรนด์", en: "Browse by brand" },
  viewerHint: {
    th: "หากดูไฟล์ในหน้านี้ไม่ได้ ให้กดดาวน์โหลดแทน",
    en: "If the preview does not load, download the file instead.",
  },
  contactTitle: { th: "ติดต่อ", en: "Contact" },
  company: {
    th: "บริษัท เอสซีจี ดิสทริบิวชั่น จำกัด",
    en: "SCG Distribution Co., Ltd.",
  },
  address: {
    th: "เลขที่ 1 ถ.ปูนซิเมนต์ไทย บางซื่อ กรุงเทพฯ 10800",
    en: "1 Poon Cement Thai Rd, Bang Sue, Bangkok 10800",
  },
  phone: { th: "SCG HOME Contact Center 0-2586-2222", en: "SCG HOME Contact Center 0-2586-2222" },
  hotline: { th: "โทรฟรี 1-800-300-900", en: "Toll-free 1-800-300-900" },
  email: { th: "Contact@scg.com", en: "Contact@scg.com" },
  footerNote: {
    th: "ข้อมูลจากเอกสารทางเทคนิคต้นฉบับ ฉบับที่ 01 · กรกฎาคม 2026",
    en: "Sourced from original technical documents · Version 01 · July 2026",
  },
  langTh: { th: "ไทย", en: "ไทย" },
  langEn: { th: "EN", en: "EN" },
  standard: { th: "มาตรฐาน", en: "Standard" },
} as const;
