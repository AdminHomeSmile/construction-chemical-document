import type { Copy } from "./copy";

export type BrandId = "wetproof" | "roofguard" | "locksure";
export type CategoryId = "cement" | "liquid" | "sealant";

export type SpecRow = {
  label: Copy;
  value: Copy;
  standard?: string;
};

export type Product = {
  slug: string;
  brand: BrandId;
  code: string;
  name: Copy;
  tagline: Copy;
  category: CategoryId;
  docType: Copy;
  pages: number;
  pdf: string;
  cover: string;
  downloadName: string;
  pack: Copy;
  color: Copy;
  shelf: Copy;
  highlights: Copy[];
  applications: Copy[];
  specs: SpecRow[];
  mixing?: Copy;
  coverage?: Copy;
  notes: Copy[];
};

export const brands: { id: BrandId | "all"; label: Copy }[] = [
  { id: "all", label: { th: "ทั้งหมด", en: "All" } },
  { id: "wetproof", label: { th: "WetPROOF", en: "WetPROOF" } },
  { id: "roofguard", label: { th: "RoofGUARD", en: "RoofGUARD" } },
  { id: "locksure", label: { th: "LOCKSURE", en: "LOCKSURE" } },
];

export const products: Product[] = [
  {
    slug: "wetproof-110",
    brand: "wetproof",
    code: "110",
    name: {
      th: "WetPROOF 110",
      en: "WetPROOF 110",
    },
    tagline: {
      th: "ซีเมนต์กันซึมชนิดยืดหยุ่น แบบส่วนประกอบเดียว",
      en: "One-component flexible cementitious waterproofing",
    },
    category: "cement",
    docType: { th: "เอกสารข้อมูลทางเทคนิค", en: "Technical Data Sheet" },
    pages: 6,
    pdf: "/tds/wetproof-110.pdf",
    cover: "/covers/wetproof-110.jpg",
    downloadName: "WetPROOF-110-TDS-July-2026.pdf",
    pack: { th: "20 กก./ถุง · 4 กก./ถัง", en: "20 kg bag · 4 kg pail" },
    color: { th: "สีเทาซีเมนต์", en: "Cement grey" },
    shelf: { th: "12 เดือน นับจากวันผลิต", en: "12 months from manufacture" },
    highlights: [
      { th: "ส่วนผสมเดียว ผสมน้ำใช้ได้ทันที", en: "One-component — just add water" },
      { th: "ปิดรอยร้าวเส้นผมได้ ≥ 0.75 มม.", en: "Bridges hairline cracks ≥ 0.75 mm" },
      { th: "พื้นผิวพร้อมปูกระเบื้อง", en: "Tile-ready surface" },
      { th: "ผ่าน มอก. 257-2549 งานถังน้ำดื่ม", en: "TIS 257-2549 potable-water tanks" },
    ],
    applications: [
      { th: "ห้องน้ำ ระเบียง", en: "Bathrooms and balconies" },
      { th: "ถังน้ำดื่มและถังเก็บน้ำ", en: "Drinking-water and general tanks" },
      { th: "บ่อน้ำและงานกันซึมทั่วไป", en: "Ponds and general waterproofing" },
      { th: "งานโครงสร้างใหม่และงานปรับปรุง", en: "New build and renovation" },
    ],
    specs: [
      {
        label: { th: "ค่าการยึดเกาะแรงดึงเริ่มต้น", en: "Initial tensile adhesion" },
        value: { th: "≥ 0.5 N/mm² (28 วัน)", en: "≥ 0.5 N/mm² (28 days)" },
        standard: "EN 14891",
      },
      {
        label: { th: "ยึดเกาะหลังแช่น้ำ", en: "Adhesion after water contact" },
        value: { th: "≥ 0.5 N/mm² (28 วัน)", en: "≥ 0.5 N/mm² (28 days)" },
        standard: "EN 14891",
      },
      {
        label: { th: "ยึดเกาะหลังความร้อน", en: "Adhesion after heat" },
        value: { th: "≥ 0.5 N/mm² (28 วัน)", en: "≥ 0.5 N/mm² (28 days)" },
        standard: "EN 14891",
      },
      {
        label: { th: "การซึมผ่านของน้ำ", en: "Water permeability" },
        value: { th: "≤ 20 g ที่ 1.5 บาร์", en: "≤ 20 g at 1.5 bar" },
        standard: "EN 14891",
      },
      {
        label: { th: "ปิดรอยร้าว (สภาวะมาตรฐาน)", en: "Crack bridging" },
        value: { th: "≥ 0.75 มม.", en: "≥ 0.75 mm" },
        standard: "EN 14891",
      },
      {
        label: { th: "ความหนาแน่น (ผง)", en: "Bulk density (powder)" },
        value: { th: "≈ 1.01 กก./ลิตร", en: "≈ 1.01 kg/L" },
      },
      {
        label: { th: "อายุงานหลังผสม ที่ 25°C", en: "Pot life at 25°C" },
        value: { th: "30 นาที", en: "30 minutes" },
      },
      {
        label: { th: "อุณหภูมิแวดล้อม", en: "Ambient temperature" },
        value: { th: "10–40 °C", en: "10–40 °C" },
      },
    ],
    mixing: {
      th: "ปูน 2.5 กก. : น้ำ 1 ลิตร",
      en: "2.5 kg powder : 1 L water",
    },
    coverage: {
      th: "1.0–1.5 กก./ตร.ม./2 รอบ · ถุง 20 กก. ปูได้ประมาณ 15–20 ตร.ม. · ความหนาฟิล์มแห้ง 1–1.5 มม.",
      en: "1.0–1.5 kg/m² / 2 coats · ~15–20 m² per 20 kg bag · DFT 1–1.5 mm",
    },
    notes: [
      { th: "ไม่แนะนำให้ปล่อยเปลือยสัมผัสแดดโดยตรง", en: "Not recommended as an exposed UV-facing finish" },
      { th: "ปูกระเบื้องหลังบ่ม 1–3 วัน · แช่น้ำได้หลัง 7 วัน", en: "Tile after 1–3 days; immerse after 7 days" },
    ],
  },
  {
    slug: "wetproof-120",
    brand: "wetproof",
    code: "120",
    name: { th: "WetPROOF 120", en: "WetPROOF 120" },
    tagline: {
      th: "ซีเมนต์กันซึมชนิดยืดหยุ่น แบบ 2 ส่วนผสม พร้อมใช้",
      en: "Two-component ready-to-mix flexible cementitious waterproofing",
    },
    category: "cement",
    docType: { th: "เอกสารข้อมูลทางเทคนิค", en: "Technical Data Sheet" },
    pages: 6,
    pdf: "/tds/wetproof-120.pdf",
    cover: "/covers/wetproof-120.jpg",
    downloadName: "WetPROOF-120-TDS-July-2026.pdf",
    pack: {
      th: "ชุด 23 กก. (ส่วน A 18 กก. + ส่วน B 5 ลิตร)",
      en: "23 kg set (Part A 18 kg + Part B 5 L)",
    },
    color: { th: "สีเทาซีเมนต์ เมื่อผสม A+B", en: "Cement grey when mixed" },
    shelf: { th: "12 เดือน นับจากวันผลิต", en: "12 months from manufacture" },
    highlights: [
      { th: "2 ส่วนผสม สำเร็จรูป ไม่ต้องเติมน้ำ", en: "Two parts — no extra water" },
      { th: "ยึดเกาะสูง พร้อมปูกระเบื้อง", en: "High adhesion, tile-ready" },
      { th: "ซึมน้ำ ≤ 5 กรัม ที่ 1.5 บาร์", en: "Permeability ≤ 5 g at 1.5 bar" },
      { th: "กำลังอัด ≥ 30 MPa ที่ 28 วัน", en: "Compressive strength ≥ 30 MPa at 28 days" },
    ],
    applications: [
      { th: "ห้องน้ำ ระเบียง", en: "Bathrooms and balconies" },
      { th: "สระว่ายน้ำ", en: "Swimming pools" },
      { th: "งานโครงสร้างใหญ่และงานปรับปรุง", en: "Large structures and renovation" },
    ],
    specs: [
      {
        label: { th: "กำลังอัด", en: "Compressive strength" },
        value: { th: "≥ 20 MPa (7 วัน) · ≥ 30 MPa (28 วัน)", en: "≥ 20 MPa (7 d) · ≥ 30 MPa (28 d)" },
        standard: "ASTM C109",
      },
      {
        label: { th: "ยึดเกาะผิวคอนกรีต", en: "Adhesion to concrete" },
        value: { th: "≥ 1.0 MPa (28 วัน)", en: "≥ 1.0 MPa (28 days)" },
        standard: "ASTM C952",
      },
      {
        label: { th: "อัตรายืดตัวขาด", en: "Elongation at break" },
        value: { th: "≥ 30% (7 วัน)", en: "≥ 30% (7 days)" },
        standard: "ASTM D412",
      },
      {
        label: { th: "แรงดึง", en: "Tensile strength" },
        value: { th: "≥ 1 MPa (7 วัน)", en: "≥ 1 MPa (7 days)" },
        standard: "ASTM D412",
      },
      {
        label: { th: "ยึดเกาะแรงดึง (EN)", en: "Tensile adhesion (EN)" },
        value: { th: "≥ 0.5 N/mm² เริ่มต้น / แช่น้ำ / ความร้อน", en: "≥ 0.5 N/mm² initial / water / heat" },
        standard: "EN 14891",
      },
      {
        label: { th: "การซึมผ่านของน้ำ", en: "Water permeability" },
        value: { th: "≤ 5 g ที่ 1.5 บาร์", en: "≤ 5 g at 1.5 bar" },
        standard: "EN 14891",
      },
      {
        label: { th: "ความหนาแน่นเมื่อผสม", en: "Mixed density" },
        value: { th: "≈ 2.1 กก./ลิตร", en: "≈ 2.1 kg/L" },
      },
      {
        label: { th: "อายุงานหลังผสม ที่ 25°C", en: "Pot life at 25°C" },
        value: { th: "60 นาที", en: "60 minutes" },
      },
    ],
    mixing: {
      th: "ทาด้วยแปรง A:B = 3.6:1 โดยน้ำหนัก · ฉาบ A:B = 4.0:1 โดยน้ำหนัก",
      en: "Brush A:B = 3.6:1 by weight · Trowel A:B = 4.0:1 by weight",
    },
    coverage: {
      th: "1.5–2 กก./ตร.ม./2 รอบ · ชุด 23 กก. ปูได้ประมาณ 10–15 ตร.ม. · ความหนาฟิล์มแห้ง 1–1.5 มม.",
      en: "1.5–2 kg/m² / 2 coats · ~10–15 m² per 23 kg set · DFT 1–1.5 mm",
    },
    notes: [
      { th: "ไม่ต้องเติมน้ำเพิ่ม", en: "Do not add extra water" },
      { th: "ปูกระเบื้องหลังบ่ม 2–3 วัน · แช่น้ำได้หลัง 7 วัน", en: "Tile after 2–3 days; immerse after 7 days" },
      { th: "ไม่แนะนำให้ปล่อยเปลือยสัมผัสแดดโดยตรง", en: "Not recommended as an exposed UV-facing finish" },
    ],
  },
  {
    slug: "roofguard-600",
    brand: "roofguard",
    code: "600",
    name: { th: "RoofGUARD 600", en: "RoofGUARD 600" },
    tagline: {
      th: "อะคริลิกกันซึมยืดหยุ่นสูง สำหรับหลังคาและดาดฟ้า",
      en: "Ultra-high-flexibility acrylic liquid waterproofing for roofs and decks",
    },
    category: "liquid",
    docType: { th: "เอกสารข้อมูลทางเทคนิค", en: "Technical Data Sheet" },
    pages: 6,
    pdf: "/tds/roofguard-600.pdf",
    cover: "/covers/roofguard-600.jpg",
    downloadName: "RoofGUARD-600-TDS-July-2026.pdf",
    pack: { th: "4 กก./กระป๋อง หรือ 20 กก./ถัง", en: "4 kg can or 20 kg pail" },
    color: { th: "สีทอง / เทา / เขียว (สั่งผลิต)", en: "Gold / grey / green (made to order)" },
    shelf: { th: "24 เดือน นับจากวันผลิต", en: "24 months from manufacture" },
    highlights: [
      { th: "พร้อมใช้ สูตรน้ำ ไร้ตัวทำละลาย", en: "Ready-to-use, solvent-free water-based" },
      { th: "ยืดตัวสูงสุด 600%", en: "Up to 600% elongation" },
      { th: "กันซึมไร้รอยต่อ ทนรังสียูวี", en: "Seamless film, UV resistant" },
      { th: "ปิดรอยแตกร้าว 0.5–0.75 มม.", en: "Bridges 0.5–0.75 mm cracks" },
    ],
    applications: [
      { th: "ดาดฟ้าคอนกรีต", en: "Concrete roof decks" },
      { th: "รางน้ำ", en: "Gutters" },
      { th: "หลังคาไฟเบอร์ซีเมนต์ คอนกรีต เมทัลชีท", en: "Fibre-cement, concrete and metal roofs" },
      { th: "ระเบียงและพื้นภายนอก", en: "Balconies and exterior decks" },
    ],
    specs: [
      {
        label: { th: "แรงดึง", en: "Tensile strength" },
        value: { th: "≥ 3.0 MPa (ไม่เสริมแรง)", en: "≥ 3.0 MPa (unreinforced)" },
        standard: "ASTM D412",
      },
      {
        label: { th: "อัตรายืดตัวขาด", en: "Elongation at break" },
        value: { th: "สูงสุด 600%", en: "Max. 600%" },
        standard: "ASTM D412",
      },
      {
        label: { th: "แรงฉีกขาด", en: "Tear strength" },
        value: { th: "≥ 15 N/mm", en: "≥ 15 N/mm" },
        standard: "ASTM D624",
      },
      {
        label: { th: "ยึดเกาะผิวคอนกรีต", en: "Adhesion to concrete" },
        value: { th: "≥ 1.0 MPa", en: "≥ 1.0 MPa" },
        standard: "ASTM D4541",
      },
      {
        label: { th: "การดูดซับน้ำ 72 ชม.", en: "Water absorption (72 h)" },
        value: { th: "≤ 25%", en: "≤ 25%" },
        standard: "ASTM C121",
      },
      {
        label: { th: "ความหนาแน่น", en: "Density" },
        value: { th: "≈ 1.25 กก./ลิตร", en: "≈ 1.25 kg/L" },
      },
      {
        label: { th: "ของแข็งในเนื้อสาร", en: "Solids content" },
        value: { th: "≈ 60% โดยน้ำหนัก", en: "≈ 60% by weight" },
      },
      {
        label: { th: "อุณหภูมิแวดล้อม", en: "Ambient temperature" },
        value: { th: "5–40 °C", en: "5–40 °C" },
      },
    ],
    mixing: {
      th: "รองพื้น: เจือจางน้ำ 10% · ชั้นกันซึม: ไม่เจือจาง",
      en: "Primer: dilute 10% with water · Top coats: undiluted",
    },
    coverage: {
      th: "1.0–2.0 กก./ตร.ม. (รองพื้น 1 + กันซึม 2–3 รอบ) · ความหนาฟิล์มแห้ง 0.5–1.0 มม.",
      en: "1.0–2.0 kg/m² (1 primer + 2–3 coats) · DFT 0.5–1.0 mm",
    },
    notes: [
      { th: "ไม่เหมาะกับพื้นที่น้ำท่วมขังตลอดเวลา เช่น สระว่ายน้ำ บ่อปลา", en: "Not for permanent immersion (pools, fish ponds)" },
      { th: "ทนยูวี ใช้งานภายนอกได้", en: "UV resistant for exterior service" },
    ],
  },
  {
    slug: "roofguard-800",
    brand: "roofguard",
    code: "800",
    name: { th: "RoofGUARD 800", en: "RoofGUARD 800" },
    tagline: {
      th: "โพลียูรีเทนกันซึมยืดหยุ่นสูง สำหรับหลังคาและดาดฟ้า",
      en: "Ultra-high-flexibility polyurethane liquid waterproofing for roofs and decks",
    },
    category: "liquid",
    docType: { th: "เอกสารข้อมูลทางเทคนิค", en: "Technical Data Sheet" },
    pages: 6,
    pdf: "/tds/roofguard-800.pdf",
    cover: "/covers/roofguard-800.jpg",
    downloadName: "RoofGUARD-800-TDS-July-2026.pdf",
    pack: { th: "4 กก./กระป๋อง หรือ 20 กก./ถัง", en: "4 kg can or 20 kg pail" },
    color: { th: "สีทอง / เทา / เขียว (สั่งผลิต)", en: "Gold / grey / green (made to order)" },
    shelf: { th: "12 เดือน นับจากวันผลิต", en: "12 months from manufacture" },
    highlights: [
      { th: "โพลียูรีเทนสูตรน้ำ ยืดตัวสูงสุด 800%", en: "Water-based PU — up to 800% elongation" },
      { th: "ทนรังสียูวีและน้ำขัง", en: "UV and ponding-water resistant" },
      { th: "ปิดรอยแตกร้าว 0.75–1.0 มม.", en: "Bridges 0.75–1.0 mm cracks" },
      { th: "Shore A ≥ 55 · ดูดซับน้ำ ≤ 15%", en: "Shore A ≥ 55 · water absorption ≤ 15%" },
    ],
    applications: [
      { th: "ดาดฟ้าคอนกรีต", en: "Concrete roof decks" },
      { th: "งานระบายน้ำคอนกรีต", en: "Concrete drainage" },
      { th: "หลังคา", en: "Roofs" },
      { th: "ระเบียงและพื้นภายนอก", en: "Balconies and decks" },
    ],
    specs: [
      {
        label: { th: "แรงดึง", en: "Tensile strength" },
        value: { th: "≥ 3.0 MPa (ไม่เสริมแรง)", en: "≥ 3.0 MPa (unreinforced)" },
        standard: "ASTM D412",
      },
      {
        label: { th: "อัตรายืดตัวขาด", en: "Elongation at break" },
        value: { th: "สูงสุด 800%", en: "Max. 800%" },
        standard: "ASTM D412",
      },
      {
        label: { th: "แรงฉีกขาด", en: "Tear strength" },
        value: { th: "≥ 20 N/mm", en: "≥ 20 N/mm" },
        standard: "ASTM D624",
      },
      {
        label: { th: "ความแข็งฟิล์ม", en: "Hardness" },
        value: { th: "Shore A ≥ 55", en: "Shore A ≥ 55" },
        standard: "ASTM D2240",
      },
      {
        label: { th: "ยึดเกาะผิวคอนกรีต", en: "Adhesion to concrete" },
        value: { th: "≥ 1.0 MPa", en: "≥ 1.0 MPa" },
        standard: "ASTM D4541",
      },
      {
        label: { th: "การดูดซับน้ำ 72 ชม.", en: "Water absorption (72 h)" },
        value: { th: "≤ 15%", en: "≤ 15%" },
        standard: "ASTM C121",
      },
      {
        label: { th: "ความหนาแน่น", en: "Density" },
        value: { th: "≈ 1.24 กก./ลิตร", en: "≈ 1.24 kg/L" },
      },
      {
        label: { th: "ของแข็งในเนื้อสาร", en: "Solids content" },
        value: { th: "≈ 60% โดยน้ำหนัก", en: "≈ 60% by weight" },
      },
    ],
    mixing: {
      th: "รองพื้น: เจือจางน้ำ 10% · ชั้นกันซึม: ไม่เจือจาง",
      en: "Primer: dilute 10% with water · Top coats: undiluted",
    },
    coverage: {
      th: "1.5–2.0 กก./ตร.ม. (รองพื้น 1 + กันซึม 2–3 รอบ) · ความหนาฟิล์มแห้ง 0.7–1.0 มม.",
      en: "1.5–2.0 kg/m² (1 primer + 2–3 coats) · DFT 0.7–1.0 mm",
    },
    notes: [
      { th: "ทนน้ำขังได้ แต่ไม่เหมาะกับสระว่ายน้ำหรือบ่อปลาที่แช่น้ำตลอด", en: "Handles ponding rainwater; not for permanent immersion" },
      { th: "สูตรน้ำ ปราศจากตัวทำละลาย กลิ่นไม่ฉุน", en: "Solvent-free water-based, low odour" },
    ],
  },
  {
    slug: "locksure-541",
    brand: "locksure",
    code: "541",
    name: { th: "LOCKSURE MS Flex 541", en: "LOCKSURE MS Flex 541" },
    tagline: {
      th: "กาวยาแนวโมดิฟายด์ซิลิโคนพอลิเมอร์ ใช้งานได้หลากหลาย",
      en: "Modified-silicone (MS) polymer sealant — all-purpose",
    },
    category: "sealant",
    docType: { th: "คู่มือการใช้งาน", en: "Method Statement / Application Guide" },
    pages: 11,
    pdf: "/tds/locksure-541.pdf",
    cover: "/covers/locksure-541.jpg",
    downloadName: "LOCKSURE-MS-Flex-541-July-2026.pdf",
    pack: { th: "หลอด 300 มล. (ตารางปริมาณอ้างอิง 290 มล.)", en: "300 ml cartridge (yield table based on 290 ml)" },
    color: { th: "ขาว / เทา", en: "White / grey" },
    shelf: { th: "ดูวันหมดอายุบนบรรจุภัณฑ์", en: "See pack date" },
    highlights: [
      { th: "MS Sealant โมดูลัสปานกลาง–สูง", en: "Medium–high modulus MS sealant" },
      { th: "ยาแนวได้กับวัสดุหลากหลาย", en: "All-purpose — many substrates" },
      { th: "ร่องกว้าง 5–20 มม. อัตรา 2:1", en: "Joints 5–20 mm, width:depth ≈ 2:1" },
      { th: "ทาสีทับได้หลัง 24 ชม.", en: "Paintable after 24 hours" },
    ],
    applications: [
      { th: "คอนกรีต ปูนฉาบ ปูนเท", en: "Concrete, plaster, screed" },
      { th: "วงกบประตูหน้าต่าง อลูมิเนียม โลหะ", en: "Door/window frames, aluminium, metals" },
      { th: "กระจก กระเบื้อง ไฟเบอร์ซีเมนต์ ไม้", en: "Glass, ceramic, fibre-cement, wood" },
      { th: "ไวนิล และวัสดุทั่วไป", en: "Vinyl and general construction joints" },
    ],
    specs: [
      {
        label: { th: "ชนิด", en: "Type" },
        value: { th: "MS Sealant · Medium–high modulus", en: "MS Sealant · Medium–high modulus" },
      },
      {
        label: { th: "ร่องยาแนว", en: "Joint size" },
        value: { th: "กว้าง 5–20 มม. · ลึกไม่ต่ำกว่า 5 มม.", en: "5–20 mm wide · min. 5 mm deep" },
      },
      {
        label: { th: "ปริมาณการใช้ (290 มล.)", en: "Yield (290 ml)" },
        value: {
          th: "6×4 มม. ≈ 12 ม. · 10×5 มม. ≈ 6 ม. · 15×7 มม. ≈ 2.8 ม. · 20×10 มม. ≈ 1.45 ม.",
          en: "6×4 mm ≈ 12 m · 10×5 mm ≈ 6 m · 15×7 mm ≈ 2.8 m · 20×10 mm ≈ 1.45 m",
        },
      },
    ],
    coverage: {
      th: "หลอด 290 มล. ยาแนวร่อง 10×5 มม. ได้ประมาณ 6 เมตร",
      en: "A 290 ml cartridge covers ~6 m of a 10 × 5 mm joint",
    },
    notes: [
      { th: "ความชื้นพื้นผิวไม่เกิน 10%", en: "Substrate moisture ≤ 10%" },
      { th: "ซีลแลนท์ที่ยังไม่แห้งเช็ดออกด้วยอะซิโตนได้", en: "Uncured material cleans with acetone" },
    ],
  },
  {
    slug: "locksure-181",
    brand: "locksure",
    code: "181",
    name: { th: "LOCKSURE Acrylic Easy 181", en: "LOCKSURE Acrylic Easy 181" },
    tagline: {
      th: "กาวยาแนวอะคริลิกสูตรน้ำ แต่งง่าย ทาสีทับได้",
      en: "Water-based acrylic sealant — easy to tool, overpaintable",
    },
    category: "sealant",
    docType: { th: "คู่มือการใช้งาน", en: "Method Statement / Application Guide" },
    pages: 10,
    pdf: "/tds/locksure-181.pdf",
    cover: "/covers/locksure-181.jpg",
    downloadName: "LOCKSURE-Acrylic-Easy-181-July-2026.pdf",
    pack: { th: "หลอด 300 มล.", en: "300 ml cartridge" },
    color: { th: "ขาว / เทา", en: "White / grey" },
    shelf: { th: "ดูวันหมดอายุบนบรรจุภัณฑ์", en: "See pack date" },
    highlights: [
      { th: "สูตรน้ำ กลิ่นไม่ฉุน ไม่กัดกร่อนโลหะ", en: "Water-based, low odour, non-corrosive" },
      { th: "ตกแต่งและทาสีทับได้", en: "Toolable and overpaintable" },
      { th: "งานภายในทั่วไป", en: "General interior joints" },
      { th: "ทำความสะอาดด้วยน้ำขณะยังไม่แห้ง", en: "Clean with water while uncured" },
    ],
    applications: [
      { th: "บัวพื้น วงกบประตูหน้าต่าง", en: "Skirting, door and window frames" },
      { th: "คอนกรีต ปูนฉาบ ยิปซัม อลูมิเนียม", en: "Concrete, plaster, gypsum, aluminium" },
      { th: "กระเบื้องเซรามิก UPVC", en: "Ceramic tile and UPVC" },
    ],
    specs: [
      {
        label: { th: "ชนิด", en: "Type" },
        value: { th: "อะคริลิกสูตรน้ำ", en: "Water-based acrylic" },
      },
      {
        label: { th: "ร่องยาแนว", en: "Joint size" },
        value: { th: "กว้างไม่เกิน 10 มม. · อัตรา 2:1", en: "Max. 10 mm wide · ratio ≈ 2:1" },
      },
      {
        label: { th: "ปริมาณการใช้ (300 มล.)", en: "Yield (300 ml)" },
        value: {
          th: "5×4 มม. ≈ 12.5 ม. · 8×5 มม. ≈ 6.5 ม. · 10×6 มม. ≈ 4.0 ม.",
          en: "5×4 mm ≈ 12.5 m · 8×5 mm ≈ 6.5 m · 10×6 mm ≈ 4.0 m",
        },
      },
    ],
    coverage: {
      th: "หลอด 300 มล. ยาแนวร่อง 8×5 มม. ได้ประมาณ 6.5 เมตร",
      en: "A 300 ml cartridge covers ~6.5 m of an 8 × 5 mm joint",
    },
    notes: [
      { th: "ไม่แนะนำงานภายนอกอาคาร", en: "Not recommended outdoors" },
      { th: "ไม่ใช้กับ PE, PP, เทฟลอน, แอสฟัลต์ หรือรอยต่อที่แช่น้ำ", en: "Not for PE, PP, PTFE, asphalt, or immersed joints" },
      { th: "กันฝนอย่างน้อย 3 ชม. หลังยาแนว · ทาสีทับหลัง 24 ชม.", en: "Keep dry 3 hours; paint after 24 hours" },
    ],
  },
  {
    slug: "locksure-221",
    brand: "locksure",
    code: "221",
    name: { th: "LOCKSURE Silicone Easy 221", en: "LOCKSURE Silicone Easy 221" },
    tagline: {
      th: "ซิลิโคนสูตรไร้กรด กันรา สำหรับห้องน้ำและความชื้นสูง",
      en: "Neutral-cure anti-mould silicone for wet rooms",
    },
    category: "sealant",
    docType: { th: "คู่มือการใช้งาน", en: "Method Statement / Application Guide" },
    pages: 10,
    pdf: "/tds/locksure-221.pdf",
    cover: "/covers/locksure-221.jpg",
    downloadName: "LOCKSURE-Silicone-Easy-221-July-2026.pdf",
    pack: { th: "หลอด 300 มล.", en: "300 ml cartridge" },
    color: { th: "ขาว / ใส", en: "White / clear" },
    shelf: { th: "ดูวันหมดอายุบนบรรจุภัณฑ์", en: "See pack date" },
    highlights: [
      { th: "ซิลิโคน 100% ชนิดเป็นกลาง", en: "100% silicone, neutral cure" },
      { th: "ต้านเชื้อราในที่ชื้น", en: "Anti-fungal in humid rooms" },
      { th: "ใช้ได้ทั้งภายในและภายนอก", en: "Interior and exterior" },
      { th: "ร่อง 3–12 มม.", en: "Joints 3–12 mm" },
    ],
    applications: [
      { th: "สุขภัณฑ์และห้องน้ำ", en: "Sanitary ware and bathrooms" },
      { th: "อุปกรณ์ในห้องครัว", en: "Kitchen fittings" },
      { th: "กระเบื้องเซรามิก ก่องานระบบ", en: "Ceramic tile and service ducts" },
      { th: "กระจกและพลาสติก", en: "Glass and plastics" },
    ],
    specs: [
      {
        label: { th: "ชนิด", en: "Type" },
        value: { th: "ซิลิโคนเป็นกลาง 100% กันรา", en: "100% neutral silicone, anti-mould" },
      },
      {
        label: { th: "ร่องยาแนว", en: "Joint size" },
        value: { th: "กว้าง 3–12 มม. · อัตรา 2:1", en: "3–12 mm wide · ratio ≈ 2:1" },
      },
      {
        label: { th: "ปริมาณการใช้ (300 มล.)", en: "Yield (300 ml)" },
        value: {
          th: "6×4 มม. ≈ 12.5 ม. · 9×5 มม. ≈ 6.5 ม. · 12×6 มม. ≈ 4.0 ม.",
          en: "6×4 mm ≈ 12.5 m · 9×5 mm ≈ 6.5 m · 12×6 mm ≈ 4.0 m",
        },
      },
    ],
    coverage: {
      th: "หลอด 300 มล. ยาแนวร่อง 9×5 มม. ได้ประมาณ 6.5 เมตร",
      en: "A 300 ml cartridge covers ~6.5 m of a 9 × 5 mm joint",
    },
    notes: [
      { th: "ไม่แนะนำพื้นผิวรูพรุนสูง เช่น คอนกรีต หิน", en: "Not for highly porous substrates (concrete, stone)" },
      { th: "ซีลโคนที่ยังไม่แห้งเช็ดด้วยอะซิโตนได้", en: "Uncured silicone cleans with acetone" },
    ],
  },
  {
    slug: "locksure-271",
    brand: "locksure",
    code: "271",
    name: { th: "LOCKSURE Silicone Easy 271", en: "LOCKSURE Silicone Easy 271" },
    tagline: {
      th: "ซิลิโคนสูตรกรด แห้งเร็ว สำหรับกระจกและอลูมิเนียม",
      en: "Acetoxy silicone — fast cure for glass and aluminium",
    },
    category: "sealant",
    docType: { th: "คู่มือการใช้งาน", en: "Method Statement / Application Guide" },
    pages: 10,
    pdf: "/tds/locksure-271.pdf",
    cover: "/covers/locksure-271.jpg",
    downloadName: "LOCKSURE-Silicone-Easy-271-July-2026.pdf",
    pack: { th: "หลอด 280 มล.", en: "280 ml cartridge" },
    color: { th: "ขาว / ใส", en: "White / clear" },
    shelf: { th: "ดูวันหมดอายุบนบรรจุภัณฑ์", en: "See pack date" },
    highlights: [
      { th: "ซิลิโคนชนิดกรด แห้งเร็ว", en: "Acid-cure, fast drying" },
      { th: "ยึดเกาะกระจก อลูมิเนียม สเตนเลส", en: "Bonds glass, aluminium, stainless steel" },
      { th: "กันน้ำ ความชื้น และอากาศ", en: "Seals against water, moisture and air" },
      { th: "ร่อง 6–12 มม.", en: "Joints 6–12 mm" },
    ],
    applications: [
      { th: "กระจกและอลูมิเนียม ประตูหน้าต่าง", en: "Glass and aluminium doors/windows" },
      { th: "แผ่นโลหะ ก่องานระบบ", en: "Metal sheet and service ducts" },
      { th: "เซรามิก สเตนเลส แผ่นอะคริลิก", en: "Ceramic, stainless, acrylic sheet" },
      { th: "ตู้ห้องชื้นและงานภายในอาคาร", en: "Humid cabinets and interior glazing" },
    ],
    specs: [
      {
        label: { th: "ชนิด", en: "Type" },
        value: { th: "ซิลิโคนสูตรกรด (acetoxy) แห้งเร็ว", en: "Acetoxy silicone, fast cure" },
      },
      {
        label: { th: "ร่องยาแนว", en: "Joint size" },
        value: { th: "กว้าง 6–12 มม. · อัตรา 2:1", en: "6–12 mm wide · ratio ≈ 2:1" },
      },
      {
        label: { th: "ปริมาณการใช้ (280 มล.)", en: "Yield (280 ml)" },
        value: {
          th: "6×4 มม. ≈ 11.5 ม. · 9×5 มม. ≈ 6.0 ม. · 12×6 มม. ≈ 4.0 ม.",
          en: "6×4 mm ≈ 11.5 m · 9×5 mm ≈ 6.0 m · 12×6 mm ≈ 4.0 m",
        },
      },
    ],
    coverage: {
      th: "หลอด 280 มล. ยาแนวร่อง 9×5 มม. ได้ประมาณ 6 เมตร",
      en: "A 280 ml cartridge covers ~6 m of a 9 × 5 mm joint",
    },
    notes: [
      { th: "ไม่ใช้กับคอนกรีต ปูนฉาบ หรือพื้นผิวรูพรุนสูง", en: "Not for concrete, plaster, or porous substrates" },
      { th: "ไม่ใช้กับกระจกเงา เหล็กชุบกัลวาไนซ์ หรือเหล็กเปลือย", en: "Not for mirrors, galvanised steel, or bare steel" },
    ],
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((item) => item.slug === slug);
}

export function relatedProducts(product: Product): Product[] {
  return products.filter((item) => item.brand === product.brand && item.slug !== product.slug);
}

export function searchProducts(
  query: string,
  brand: BrandId | "all",
): Product[] {
  const q = query.trim().toLowerCase();
  return products.filter((item) => {
    if (brand !== "all" && item.brand !== brand) return false;
    if (!q) return true;
    const blob = [
      item.code,
      item.slug,
      item.name.th,
      item.name.en,
      item.tagline.th,
      item.tagline.en,
      item.category,
      ...item.highlights.map((h) => `${h.th} ${h.en}`),
      ...item.applications.map((h) => `${h.th} ${h.en}`),
    ]
      .join(" ")
      .toLowerCase();
    return blob.includes(q);
  });
}
