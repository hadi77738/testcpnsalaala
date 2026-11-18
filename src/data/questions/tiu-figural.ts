import { Question } from "@/types/question";

export const tiuFigural: Question[] = [
  // =========================================================================
  // FIGURAL - ANALOGI GAMBAR (tiu-171 s.d. tiu-180)
  // =========================================================================
  {
    id: "tiu-171",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "mudah",
    question:
      "Perhatikan pola perubahan gambar pertama menjadi gambar kedua, lalu tentukan gambar keempat yang sesuai untuk melengkapi analogi berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="41,28 57,68 25,68" fill="none" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="155,50 115,34 115,66" fill="#2563eb" stroke="#2563eb" stroke-width="3" stroke-linejoin="round"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="207,50 231,32 231,43 247,43 247,57 231,57 231,68" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,26 86,56 70,56 70,94 50,94 50,56 34,56" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,26 86,56 70,56 70,94 50,94 50,56 34,56" fill="#2563eb" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,94 86,64 70,64 70,26 50,26 50,64 34,64" fill="#2563eb" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="94,60 64,34 64,50 26,50 26,70 64,70 64,86" fill="#2563eb" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,26 86,56 70,56 70,94 50,94 50,56 34,56" fill="#dc2626" stroke="#dc2626" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
    ],
    correctAnswer: "B",
    explanation:
      "Dari gambar pertama ke gambar kedua, bangun diputar 90° searah jarum jam dan bagian dalamnya diisi penuh warna biru (#2563eb). Panah pada gambar ketiga menunjuk ke kiri dan tidak terisi. Jika diputar 90° searah jarum jam, panah akan menunjuk ke atas dan terisi penuh warna biru (Gambar B).",
  },
  {
    id: "tiu-172",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "mudah",
    question:
      "Tentukan gambar yang tepat untuk mengisi tanda tanya berdasarkan pola analogi berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="41,25 65,69 17,69" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="41" cy="54" r="4" fill="#dc2626"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="112" y="29" width="42" height="42" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="126" cy="50" r="4" fill="#dc2626"/>
  <circle cx="140" cy="50" r="4" fill="#dc2626"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="227,25 250,42 241,69 213,69 204,42" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="220" cy="52" r="4" fill="#dc2626"/>
  <circle cx="234" cy="52" r="4" fill="#dc2626"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 93,41 93,79 60,98 27,79 27,41" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="50" cy="60" r="5.5" fill="#dc2626"/><circle cx="70" cy="60" r="5.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 96,48 82,91 38,91 24,48" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="44" cy="62" r="5.5" fill="#dc2626"/><circle cx="60" cy="62" r="5.5" fill="#dc2626"/><circle cx="76" cy="62" r="5.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 93,41 93,79 60,98 27,79 27,41" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="44" cy="60" r="5.5" fill="#dc2626"/><circle cx="60" cy="60" r="5.5" fill="#dc2626"/><circle cx="76" cy="60" r="5.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="28" y="28" width="64" height="64" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="44" cy="60" r="5.5" fill="#dc2626"/><circle cx="60" cy="60" r="5.5" fill="#dc2626"/><circle cx="76" cy="60" r="5.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 93,41 93,79 60,98 27,79 27,41" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="46" cy="50" r="5.5" fill="#dc2626"/><circle cx="74" cy="50" r="5.5" fill="#dc2626"/><circle cx="46" cy="70" r="5.5" fill="#dc2626"/><circle cx="74" cy="70" r="5.5" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "C",
    explanation:
      "Aturan transformasi dari gambar pertama ke kedua adalah jumlah sisi poligon bertambah 1 (segitiga 3 sisi → persegi 4 sisi) dan jumlah titik merah di dalam bertambah 1 (1 titik → 2 titik). Pada pasangan kedua, segilima (5 sisi) dengan 2 titik merah berubah menjadi segienam (6 sisi) dengan 3 titik merah (Gambar C).",
  },
  {
    id: "tiu-173",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sedang",
    question:
      "Temukan gambar yang sesuai untuk menggantikan tanda tanya berdasarkan hubungan pencerminan dan pembalikan warna berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="20" y="29" width="21" height="42" fill="#1e293b"/>
  <rect x="20" y="29" width="42" height="42" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="53" cy="38" r="4.5" fill="#dc2626"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="133" y="29" width="21" height="42" fill="#1e293b"/>
  <rect x="112" y="29" width="42" height="42" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="121" cy="38" r="4.5" fill="#dc2626"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M227,27 A23,23 0 0,0 227,73 Z" fill="#2563eb"/>
  <circle cx="227" cy="50" r="23" fill="none" stroke="#1e293b" stroke-width="2"/>
  <polygon points="237,56 243,66 231,66" fill="#dc2626"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,22 A38,38 0 0,1 60,98 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><polygon points="44,68 53,84 35,84" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,22 A38,38 0 0,0 60,98 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><polygon points="44,68 53,84 35,84" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,22 A38,38 0 0,1 60,98 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><polygon points="76,68 85,84 67,84" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,22 A38,38 0 0,1 60,98 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><polygon points="44,36 53,52 35,52" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,22 A38,38 0 0,0 60,98 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><polygon points="76,36 85,52 67,52" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "A",
    explanation:
      "Gambar kedua merupakan hasil pencerminan horizontal (kiri-kanan) dari gambar pertama: bagian arsiran berpindah dari sisi kiri ke sisi kanan, dan elemen kecil merah berpindah dari kanan ke kiri pada ketinggian yang sama. Dengan aturan yang sama pada lingkaran, arsiran biru berpindah ke setengah kanan dan segitiga merah berpindah dari kanan bawah ke kiri bawah (Gambar A).",
  },
  {
    id: "tiu-174",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sedang",
    question:
      "Perhatikan hubungan posisi bangun luar dan bangun dalam pada dua gambar pertama, lalu tentukan gambar keempat yang tepat.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="19" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="41" cy="50" r="10" fill="#2563eb"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="133" cy="50" r="23" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <rect x="124" y="41" width="18" height="18" fill="#1e293b"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="227,25 251,70 203,70" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
  <polygon points="227,45 236,55 227,65 218,55" fill="#dc2626"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 98,60 60,98 22,60" fill="none" stroke="#1e293b" stroke-width="3.5"/><polygon points="60,46 74,72 46,72" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 98,60 60,98 22,60" fill="none" stroke="#dc2626" stroke-width="3.5"/><polygon points="60,46 74,72 46,72" fill="none" stroke="#1e293b" stroke-width="3"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 98,92 22,92" fill="none" stroke="#dc2626" stroke-width="3.5"/><polygon points="60,52 74,66 60,80 46,66" fill="#1e293b"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 98,60 60,98 22,60" fill="none" stroke="#dc2626" stroke-width="3.5"/><polygon points="60,46 74,72 46,72" fill="#1e293b"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 98,60 60,98 22,60" fill="#dc2626"/><polygon points="60,46 74,72 46,72" fill="#ffffff"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Aturan transformasi adalah pertukaran posisi bangun luar dan bangun dalam beserta warnanya: bangun dalam yang terisi penuh menjadi bangun luar bergaris tepi (outline) dengan warna sama, sedangkan bangun luar bergaris tepi menjadi bangun dalam yang terisi penuh. Maka segitiga bergaris hitam dengan belah ketupat merah di dalam berubah menjadi belah ketupat bergaris merah dengan segitiga hitam terisi penuh di dalam (Gambar D).",
  },
  {
    id: "tiu-175",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sedang",
    question:
      "Tentukan gambar keempat yang melengkapi analogi rotasi berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="19" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="19" y1="28" x2="63" y2="72" stroke="#1e293b" stroke-width="2"/>
  <circle cx="54" cy="37" r="4" fill="#2563eb"/>
  <path d="M25,63 h8 M29,59 v8" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="111" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="111" y1="28" x2="155" y2="72" stroke="#1e293b" stroke-width="2"/>
  <circle cx="120" cy="63" r="4" fill="#2563eb"/>
  <path d="M142,37 h8 M146,33 v8" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="205" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="227" y1="28" x2="227" y2="72" stroke="#1e293b" stroke-width="2"/>
  <rect x="211" y="34" width="8" height="8" fill="#2563eb"/>
  <circle cx="238" cy="62" r="4" fill="#dc2626"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="3"/><rect x="70" y="34" width="14" height="14" fill="#2563eb"/><circle cx="42" cy="78" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="24" y1="60" x2="96" y2="60" stroke="#1e293b" stroke-width="3"/><rect x="70" y="70" width="14" height="14" fill="#2563eb"/><circle cx="42" cy="42" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="3"/><rect x="36" y="70" width="14" height="14" fill="#2563eb"/><circle cx="78" cy="42" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="3"/><rect x="36" y="34" width="14" height="14" fill="#2563eb"/><circle cx="78" cy="78" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="3"/><rect x="70" y="70" width="14" height="14" fill="#2563eb"/><circle cx="42" cy="42" r="7" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "E",
    explanation:
      "Gambar kedua diperoleh dengan memutar gambar pertama sebesar 180° (elemen di kanan atas berpindah ke kiri bawah, dan elemen di kiri bawah berpindah ke kanan atas). Jika gambar ketiga diputar 180°, garis vertikal tetap di tengah, kotak biru di kiri atas berpindah ke kanan bawah, dan lingkaran merah di kanan bawah berpindah ke kiri atas (Gambar E).",
  },
  {
    id: "tiu-176",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sedang",
    question:
      "Tentukan gambar keempat yang tepat berdasarkan pola rotasi dan perubahan warna berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="19" y="28" width="22" height="22" fill="#2563eb"/>
  <rect x="19" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="41" y1="28" x2="41" y2="72" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="19" y1="50" x2="63" y2="50" stroke="#1e293b" stroke-width="1.5"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="111" y="50" width="22" height="22" fill="#dc2626"/>
  <rect x="111" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="133" y1="28" x2="133" y2="72" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="111" y1="50" x2="155" y2="50" stroke="#1e293b" stroke-width="1.5"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="227" y="28" width="22" height="22" fill="#2563eb"/>
  <rect x="205" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="227" y1="28" x2="227" y2="72" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="205" y1="50" x2="249" y2="50" stroke="#1e293b" stroke-width="1.5"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="60" width="36" height="36" fill="#dc2626"/><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#1e293b" stroke-width="2"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="36" height="36" fill="#dc2626"/><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#1e293b" stroke-width="2"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="36" height="36" fill="#2563eb"/><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#1e293b" stroke-width="2"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="60" width="36" height="36" fill="#dc2626"/><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#1e293b" stroke-width="2"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="24" width="36" height="36" fill="#dc2626"/><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#1e293b" stroke-width="2"/></svg>`,
      },
    ],
    correctAnswer: "B",
    explanation:
      "Kotak berarsir berputar 90° berlawanan arah jarum jam (dari kuadran kiri atas ke kiri bawah) dan warnanya berubah dari biru menjadi merah. Pada gambar ketiga, kotak biru berada di kuadran kanan atas; jika diputar 90° berlawanan arah jarum jam dan berubah menjadi merah, posisinya berpindah ke kuadran kiri atas (Gambar B).",
  },
  {
    id: "tiu-177",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sulit",
    question:
      "Perhatikan pergerakan jarum hitam dan titik merah pada lingkaran berikut, lalu tentukan gambar keempat yang sesuai.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="41" cy="50" r="22" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="41" y1="50" x2="41" y2="30" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <circle cx="57" cy="50" r="4" fill="#dc2626"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="133" cy="50" r="22" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="133" y1="50" x2="153" y2="50" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <circle cx="133" cy="34" r="4" fill="#dc2626"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="227" cy="50" r="22" fill="none" stroke="#1e293b" stroke-width="2"/>
  <line x1="227" y1="50" x2="227" y2="70" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <circle cx="211" cy="50" r="4" fill="#dc2626"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="60" x2="26" y2="60" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/><circle cx="60" cy="32" r="6.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="60" x2="94" y2="60" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/><circle cx="60" cy="88" r="6.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="60" x2="26" y2="60" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/><circle cx="60" cy="88" r="6.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="60" x2="60" y2="26" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/><circle cx="60" cy="88" r="6.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="60" x2="26" y2="60" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/><circle cx="88" cy="60" r="6.5" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "C",
    explanation:
      "Dari gambar pertama ke gambar kedua, jarum hitam berputar 90° searah jarum jam (dari arah jam 12 ke jam 3), sedangkan titik merah berputar 90° berlawanan arah jarum jam (dari jam 3 ke jam 12). Pada gambar ketiga, jarum di jam 6 dan titik merah di jam 9. Dengan aturan yang sama, jarum berpindah ke jam 9 (kiri) dan titik merah berpindah ke jam 6 (bawah) (Gambar C).",
  },
  {
    id: "tiu-178",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sulit",
    question:
      "Tentukan gambar keempat yang sesuai dengan pola pencerminan vertikal dan pembalikan arah panah berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M22,30 h36 v12 h-24 v28 h-12 z" fill="#1e293b"/>
  <path d="M38,62 h18 M51,57 l5,5 -5,5" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M114,70 h36 v-12 h-24 v-28 h-12 z" fill="#1e293b"/>
  <path d="M148,38 h-18 M135,33 l-5,5 5,5" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M244,30 h-36 v12 h24 v28 h12 z" fill="#1e293b"/>
  <path d="M214,48 v18 M209,61 l5,5 5,-5" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M92,94 h-64 v-18 h46 v-50 h18 z" fill="#1e293b"/><path d="M38,68 v-32 M30,44 l8,-8 8,8" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M92,94 h-64 v-18 h46 v-50 h18 z" fill="#1e293b"/><path d="M38,36 v32 M30,60 l8,8 8,-8" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M28,94 h64 v-18 h-46 v-50 h-18 z" fill="#1e293b"/><path d="M82,68 v-32 M74,44 l8,-8 8,8" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M92,26 h-64 v18 h46 v50 h18 z" fill="#1e293b"/><path d="M38,68 v-32 M30,44 l8,-8 8,8" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M92,94 h-64 v-18 h46 v-50 h18 z" fill="#1e293b"/><path d="M28,50 h32 M52,42 l8,8 -8,8" fill="none" stroke="#2563eb" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
    ],
    correctAnswer: "A",
    explanation:
      "Gambar kedua adalah hasil pencerminan vertikal (atas-bawah) dari gambar pertama disertai pembalikan arah panah biru (dari kanan menjadi kiri). Jika gambar ketiga dicerminkan vertikal (siku kanan atas menjadi siku kanan bawah) dan arah panah di sisi kiri dibalik dari bawah menjadi ke atas, hasilnya adalah Gambar A.",
  },
  {
    id: "tiu-179",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sulit",
    question:
      "Tentukan gambar yang tepat untuk melengkapi analogi perubahan jumlah dan pertukaran warna berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="41" cy="50" r="22" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <polygon points="41,40 50,57 32,57" fill="#2563eb"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="133" cy="50" r="22" fill="none" stroke="#2563eb" stroke-width="2.5"/>
  <polygon points="124,42 132,57 116,57" fill="#1e293b"/>
  <polygon points="142,42 150,57 134,57" fill="#1e293b"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="205" y="28" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <polygon points="227,40 236,50 227,60 218,50" fill="#dc2626"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3.5"/><polygon points="44,46 56,60 44,74 32,60" fill="#dc2626"/><polygon points="76,46 88,60 76,74 64,60" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#dc2626" stroke-width="3.5"/><polygon points="60,44 74,60 60,76 46,60" fill="#1e293b"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#dc2626" stroke-width="3.5"/><polygon points="44,46 56,70 32,70" fill="#1e293b"/><polygon points="76,46 88,70 64,70" fill="#1e293b"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#dc2626" stroke-width="3.5"/><polygon points="44,46 56,60 44,74 32,60" fill="#1e293b"/><polygon points="76,46 88,60 76,74 64,60" fill="#1e293b"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#dc2626" stroke-width="3.5"/><polygon points="44,46 56,60 44,74 32,60" fill="#1e293b"/><polygon points="76,46 88,60 76,74 64,60" fill="#1e293b"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Bentuk bangun luar tetap, namun warna garis luar bertukar dengan warna bangun dalam, dan jumlah bangun dalam digandakan dari 1 menjadi 2. Pada pasangan kedua, persegi bergaris hitam dengan 1 belah ketupat merah di dalam berubah menjadi persegi bergaris merah dengan 2 belah ketupat hitam di dalam (Gambar D).",
  },
  {
    id: "tiu-180",
    category: "TIU",
    subtopic: "Figural - Analogi Gambar",
    difficulty: "sulit",
    question:
      "Tentukan gambar keempat yang tepat berdasarkan pola rotasi dan perubahan ujung garis berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="41" cy="50" r="3" fill="#1e293b"/>
  <line x1="41" y1="50" x2="41" y2="28" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="41" cy="28" r="5" fill="#2563eb"/>
  <text x="87" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="98" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="133" cy="50" r="3" fill="#1e293b"/>
  <line x1="133" y1="50" x2="149" y2="34" stroke="#1e293b" stroke-width="2.5"/>
  <polygon points="153,30 142,33 150,41" fill="#dc2626"/>
  <text x="180" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">::</text>
  <rect x="192" y="15" width="70" height="70" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="227" cy="50" r="3" fill="#1e293b"/>
  <line x1="227" y1="50" x2="249" y2="50" stroke="#1e293b" stroke-width="2.5"/>
  <circle cx="249" cy="50" r="5" fill="#2563eb"/>
  <text x="273" y="55" font-size="16" text-anchor="middle" fill="#64748b" font-family="sans-serif">→</text>
  <rect x="284" y="15" width="70" height="70" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="319" y="57" font-size="22" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="4.5" fill="#1e293b"/><line x1="60" y1="60" x2="86" y2="34" stroke="#1e293b" stroke-width="3.5"/><polygon points="92,28 76,33 87,44" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="4.5" fill="#1e293b"/><line x1="60" y1="60" x2="86" y2="86" stroke="#1e293b" stroke-width="3.5"/><circle cx="86" cy="86" r="8" fill="#2563eb"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="4.5" fill="#1e293b"/><line x1="60" y1="60" x2="60" y2="92" stroke="#1e293b" stroke-width="3.5"/><polygon points="60,98 52,84 68,84" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="4.5" fill="#1e293b"/><line x1="60" y1="60" x2="34" y2="86" stroke="#1e293b" stroke-width="3.5"/><polygon points="28,92 44,87 33,76" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="4.5" fill="#1e293b"/><line x1="60" y1="60" x2="86" y2="86" stroke="#1e293b" stroke-width="3.5"/><polygon points="92,92 87,76 76,87" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "E",
    explanation:
      "Garis berputar 45° searah jarum jam dan ujung lingkaran biru berubah menjadi ujung panah merah. Pada gambar ketiga, garis menunjuk ke kanan (90°); jika diputar 45° searah jarum jam, garis akan mengarah ke kanan bawah (135°) dengan ujung panah merah (Gambar E).",
  },

  // =========================================================================
  // FIGURAL - SERIAL GAMBAR (tiu-181 s.d. tiu-190)
  // =========================================================================
  {
    id: "tiu-181",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "mudah",
    question:
      "Perhatikan deret gambar berikut secara berurutan dari kiri ke kanan, lalu tentukan gambar kelima yang tepat.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="36,30 50,48 41,48 41,70 31,70 31,48 22,48" fill="#2563eb"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="128,50 110,36 110,45 88,45 88,55 110,55 110,64" fill="#2563eb"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="180,70 194,52 185,52 185,30 175,30 175,52 166,52" fill="#2563eb"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="232,50 250,36 250,45 272,45 272,55 250,55 250,64" fill="#2563eb"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 86,54 70,54 70,96 50,96 50,54 34,54" fill="#2563eb"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="96,60 66,34 66,50 24,50 24,70 66,70 66,86" fill="#2563eb"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,96 86,66 70,66 70,24 50,24 50,66 34,66" fill="#2563eb"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="24,60 54,34 54,50 96,50 96,70 54,70 54,86" fill="#2563eb"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 86,54 70,54 70,96 50,96 50,54 34,54" fill="none" stroke="#2563eb" stroke-width="3.5"/></svg>`,
      },
    ],
    correctAnswer: "A",
    explanation:
      "Panah berputar 90° searah jarum jam pada setiap langkah: Atas → Kanan → Bawah → Kiri → kembali ke Atas (Gambar A).",
  },
  {
    id: "tiu-182",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "mudah",
    question:
      "Tentukan gambar selanjutnya yang tepat untuk melengkapi deret pola berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="36" cy="50" r="4.5" fill="#2563eb"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="98" cy="50" r="4.5" fill="#2563eb"/>
  <circle cx="118" cy="50" r="4.5" fill="#2563eb"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="180" cy="36" r="4.5" fill="#2563eb"/>
  <circle cx="168" cy="60" r="4.5" fill="#2563eb"/>
  <circle cx="192" cy="60" r="4.5" fill="#2563eb"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="240" cy="38" r="4.5" fill="#2563eb"/>
  <circle cx="264" cy="38" r="4.5" fill="#2563eb"/>
  <circle cx="240" cy="62" r="4.5" fill="#2563eb"/>
  <circle cx="264" cy="62" r="4.5" fill="#2563eb"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" r="8" fill="#2563eb"/><circle cx="80" cy="40" r="8" fill="#2563eb"/><circle cx="40" cy="80" r="8" fill="#2563eb"/><circle cx="80" cy="80" r="8" fill="#2563eb"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="8" fill="#dc2626"/><circle cx="84" cy="36" r="8" fill="#dc2626"/><circle cx="60" cy="60" r="8" fill="#dc2626"/><circle cx="36" cy="84" r="8" fill="#dc2626"/><circle cx="84" cy="84" r="8" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="8" fill="#2563eb"/><circle cx="84" cy="36" r="8" fill="#2563eb"/><circle cx="60" cy="60" r="8" fill="#2563eb"/><circle cx="36" cy="84" r="8" fill="#2563eb"/><circle cx="84" cy="84" r="8" fill="#2563eb"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="36" cy="36" r="8" fill="#2563eb"/><circle cx="84" cy="36" r="8" fill="#2563eb"/><circle cx="36" cy="60" r="8" fill="#2563eb"/><circle cx="84" cy="60" r="8" fill="#2563eb"/><circle cx="36" cy="84" r="8" fill="#2563eb"/><circle cx="84" cy="84" r="8" fill="#2563eb"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="36" r="8" fill="#2563eb"/><circle cx="38" cy="76" r="8" fill="#2563eb"/><circle cx="82" cy="76" r="8" fill="#2563eb"/></svg>`,
      },
    ],
    correctAnswer: "C",
    explanation:
      "Jumlah lingkaran biru bertambah 1 secara berurutan: 1 → 2 → 3 → 4 → 5 lingkaran biru (Gambar C).",
  },
  {
    id: "tiu-183",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "mudah",
    question:
      "Amati pergerakan titik merah pada setiap kotak, lalu tentukan posisi pada gambar kelima.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="16" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="24" cy="38" r="4.5" fill="#dc2626"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="88" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="120" cy="38" r="4.5" fill="#dc2626"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="160" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="192" cy="62" r="4.5" fill="#dc2626"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="232" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="240" cy="62" r="4.5" fill="#dc2626"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="82" cy="38" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="38" cy="38" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="82" cy="82" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="38" cy="82" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="60" cy="60" r="7.5" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "B",
    explanation:
      "Titik merah berpindah dari satu sudut ke sudut berikutnya searah jarum jam: Kiri Atas → Kanan Atas → Kanan Bawah → Kiri Bawah → kembali ke Kiri Atas (Gambar B).",
  },
  {
    id: "tiu-184",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "sedang",
    question:
      "Tentukan bangun datar selanjutnya yang tepat untuk melengkapi deret berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="36,30 53,64 19,64" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="91" y="33" width="34" height="34" fill="none" stroke="#1e293b" stroke-width="2.5"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="180,30 199,44 192,66 168,66 161,44" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <polygon points="252,30 269,40 269,60 252,70 235,60 235,40" fill="none" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 91,78 29,78" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 94,49 81,89 39,89 26,49" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 91,42 91,78 60,96 29,78 29,42" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 88,38 95,68 76,92 44,92 25,68 32,38" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 85,35 96,60 85,85 60,96 35,85 24,60 35,35" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Jumlah sisi poligon bertambah 1 pada setiap langkah: Segitiga (3 sisi) → Persegi (4 sisi) → Segilima (5 sisi) → Segienam (6 sisi) → Segitujuh (7 sisi) (Gambar D).",
  },
  {
    id: "tiu-185",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "sedang",
    question:
      "Perhatikan arah dan warna jarum pada setiap gambar, lalu tentukan gambar kelima yang sesuai.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="36" cy="50" r="20" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="36" y1="50" x2="36" y2="33" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="108" cy="50" r="20" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="108" y1="50" x2="120" y2="38" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="180" cy="50" r="20" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="180" y1="50" x2="197" y2="50" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="252" cy="50" r="20" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="252" y1="50" x2="264" y2="62" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#cbd5e1" stroke-width="2.5"/><line x1="60" y1="60" x2="60" y2="90" stroke="#2563eb" stroke-width="5" stroke-linecap="round"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#cbd5e1" stroke-width="2.5"/><line x1="60" y1="60" x2="39" y2="81" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#cbd5e1" stroke-width="2.5"/><line x1="60" y1="60" x2="81" y2="81" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#cbd5e1" stroke-width="2.5"/><line x1="60" y1="60" x2="30" y2="60" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#cbd5e1" stroke-width="2.5"/><line x1="60" y1="60" x2="60" y2="90" stroke="#1e293b" stroke-width="5" stroke-linecap="round"/></svg>`,
      },
    ],
    correctAnswer: "E",
    explanation:
      "Jarum berputar 45° searah jarum jam pada setiap langkah (0° → 45° → 90° → 135° → 180°/bawah), dan warnanya bergantian antara hitam (#1e293b) dan biru (#2563eb). Langkah kelima adalah posisi 180° (mengarah ke bawah) berwarna hitam (Gambar E).",
  },
  {
    id: "tiu-186",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "sedang",
    question:
      "Amati pergerakan lingkaran biru dan segitiga merah pada empat kuadran kotak berikut, lalu tentukan gambar kelima.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="16" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="36" y1="30" x2="36" y2="70" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="16" y1="50" x2="56" y2="50" stroke="#cbd5e1" stroke-width="1"/>
  <circle cx="26" cy="40" r="4.5" fill="#2563eb"/>
  <polygon points="46,55 51,64 41,64" fill="#dc2626"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="88" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="108" y1="30" x2="108" y2="70" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="88" y1="50" x2="128" y2="50" stroke="#cbd5e1" stroke-width="1"/>
  <circle cx="118" cy="36" r="4.5" fill="#2563eb"/>
  <polygon points="118,41 123,48 113,48" fill="#dc2626"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="160" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="180" y1="30" x2="180" y2="70" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="160" y1="50" x2="200" y2="50" stroke="#cbd5e1" stroke-width="1"/>
  <circle cx="190" cy="60" r="4.5" fill="#2563eb"/>
  <polygon points="170,35 175,44 165,44" fill="#dc2626"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <rect x="232" y="30" width="40" height="40" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="252" y1="30" x2="252" y2="70" stroke="#cbd5e1" stroke-width="1"/>
  <line x1="232" y1="50" x2="272" y2="50" stroke="#cbd5e1" stroke-width="1"/>
  <circle cx="242" cy="56" r="4.5" fill="#2563eb"/>
  <polygon points="242,61 247,68 237,68" fill="#dc2626"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#cbd5e1" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#cbd5e1" stroke-width="2"/><circle cx="42" cy="42" r="8" fill="#2563eb"/><polygon points="78,70 87,86 69,86" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#cbd5e1" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#cbd5e1" stroke-width="2"/><circle cx="78" cy="42" r="8" fill="#2563eb"/><polygon points="42,70 51,86 33,86" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#cbd5e1" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#cbd5e1" stroke-width="2"/><circle cx="42" cy="42" r="8" fill="#2563eb"/><polygon points="42,70 51,86 33,86" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#cbd5e1" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#cbd5e1" stroke-width="2"/><circle cx="78" cy="78" r="8" fill="#2563eb"/><polygon points="42,34 51,50 33,50" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#cbd5e1" stroke-width="2"/><line x1="24" y1="60" x2="96" y2="60" stroke="#cbd5e1" stroke-width="2"/><circle cx="42" cy="78" r="8" fill="#2563eb"/><polygon points="78,34 87,50 69,50" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "A",
    explanation:
      "Lingkaran biru bergerak 1 kuadran searah jarum jam (Kiri Atas → Kanan Atas → Kanan Bawah → Kiri Bawah → Kiri Atas). Segitiga merah bergerak 1 kuadran berlawanan arah jarum jam (Kanan Bawah → Kanan Atas → Kiri Atas → Kiri Bawah → Kanan Bawah). Jadi pada gambar kelima, lingkaran biru di kiri atas dan segitiga merah di kanan bawah (Gambar A).",
  },
  {
    id: "tiu-187",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "sedang",
    question:
      "Perhatikan penambahan garis horizontal dan vertikal secara bergantian berikut, lalu tentukan gambar kelima.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="18" y1="42" x2="54" y2="42" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="90" y1="42" x2="126" y2="42" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="101" y1="32" x2="101" y2="68" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="162" y1="42" x2="198" y2="42" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="162" y1="54" x2="198" y2="54" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="173" y1="32" x2="173" y2="68" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <line x1="234" y1="42" x2="270" y2="42" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="234" y1="54" x2="270" y2="54" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="245" y1="32" x2="245" y2="68" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="259" y1="32" x2="259" y2="68" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="44" x2="94" y2="44" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="72" x2="94" y2="72" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="42" y1="26" x2="42" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="26" x2="60" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><line x1="78" y1="26" x2="78" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="40" x2="94" y2="40" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="60" x2="94" y2="60" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="80" x2="94" y2="80" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="40" y1="26" x2="40" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="26" x2="60" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><line x1="80" y1="26" x2="80" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="40" x2="94" y2="40" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="60" x2="94" y2="60" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="80" x2="94" y2="80" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="48" y1="26" x2="48" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><line x1="72" y1="26" x2="72" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="48" x2="94" y2="48" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="72" x2="94" y2="72" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="48" y1="26" x2="48" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><line x1="72" y1="26" x2="72" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="26" y1="40" x2="94" y2="40" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="60" x2="94" y2="60" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="26" y1="80" x2="94" y2="80" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="26" x2="60" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/></svg>`,
      },
    ],
    correctAnswer: "C",
    explanation:
      "Penambahan garis dilakukan bergantian: (1) 1 horizontal hitam, (2) +1 vertikal biru, (3) +1 horizontal hitam, (4) +1 vertikal biru. Maka pada langkah kelima ditambahkan 1 garis horizontal hitam sehingga menjadi 3 garis horizontal hitam dan 2 garis vertikal biru (Gambar C).",
  },
  {
    id: "tiu-188",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "sulit",
    question:
      "Perhatikan pola loncatan posisi titik merah mengelilingi lingkaran berikut, lalu tentukan posisi pada gambar kelima.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="36" cy="50" r="19" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="36" cy="31" r="4.5" fill="#dc2626"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="108" cy="50" r="19" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="121.4" cy="36.6" r="4.5" fill="#dc2626"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="180" cy="50" r="19" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="193.4" cy="63.4" r="4.5" fill="#dc2626"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <circle cx="252" cy="50" r="19" fill="none" stroke="#1e293b" stroke-width="2"/>
  <circle cx="233" cy="50" r="4.5" fill="#dc2626"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="60" cy="24" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="96" cy="60" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="60" cy="96" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="34.5" cy="34.5" r="7.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="36" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="85.5" cy="85.5" r="7.5" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "B",
    explanation:
      "Sudut rotasi titik merah searah jarum jam bertambah 45° setiap langkah: 0° (atas) → +45° = 45° (kanan atas) → +90° = 135° (kanan bawah) → +135° = 270° (kiri). Langkah kelima adalah +180° dari posisi 270°, yaitu 450° = 90° (posisi kanan / jam 3) (Gambar B).",
  },
  {
    id: "tiu-189",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "sulit",
    question:
      "Tentukan gambar kelima yang tepat berdasarkan pola rotasi huruf T dan jumlah titik merah berikut.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M22,34 h28 v7 h-10.5 v25 h-7 v-25 h-10.5 z" fill="#1e293b"/>
  <circle cx="24" cy="56" r="4" fill="#dc2626"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M124,36 v28 h-7 v-10.5 h-25 v-7 h25 v-10.5 z" fill="#1e293b"/>
  <circle cx="96" cy="38" r="4" fill="#dc2626"/>
  <circle cx="108" cy="38" r="4" fill="#dc2626"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M166,66 h28 v-7 h-10.5 v-25 h-7 v25 h-10.5 z" fill="#1e293b"/>
  <circle cx="192" cy="44" r="4" fill="#dc2626"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M236,36 v28 h7 v-10.5 h25 v-7 h-25 v-10.5 z" fill="#1e293b"/>
  <circle cx="252" cy="62" r="4" fill="#dc2626"/>
  <circle cx="264" cy="62" r="4" fill="#dc2626"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M32,32 h56 v14 h-21 v44 h-14 v-44 h-21 z" fill="#1e293b"/><circle cx="34" cy="62" r="7" fill="#dc2626"/><circle cx="34" cy="82" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M32,32 h56 v14 h-21 v44 h-14 v-44 h-21 z" fill="#1e293b"/><circle cx="84" cy="72" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M32,88 h56 v-14 h-21 v-44 h-14 v44 h-21 z" fill="#1e293b"/><circle cx="36" cy="48" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M32,32 h56 v14 h-21 v44 h-14 v-44 h-21 z" fill="#1e293b"/><circle cx="36" cy="72" r="7" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M88,32 v56 h-14 v-21 h-44 v-14 h44 v-21 z" fill="#1e293b"/><circle cx="48" cy="36" r="7" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Huruf T berputar 90° searah jarum jam setiap langkah, titik merah ikut berputar bersama sisi kiri batang T, dan jumlah titik merah bergantian antara 1 dan 2 (1 → 2 → 1 → 2 → 1). Pada langkah kelima, huruf T kembali tegak menghadap atas dengan 1 titik merah di sebelah kiri (Gambar D).",
  },
  {
    id: "tiu-190",
    category: "TIU",
    subtopic: "Figural - Serial Gambar",
    difficulty: "sulit",
    question:
      "Amati pergeseran juring biru pada lingkaran bersektor enam berikut, lalu tentukan posisi juring biru pada gambar kelima.",
    svg: `<svg viewBox="0 0 360 100" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M36,50 L36,30 A20,20 0 0,1 53.3,40 Z" fill="#2563eb"/>
  <circle cx="36" cy="50" r="20" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="36" y1="30" x2="36" y2="70" stroke="#94a3b8" stroke-width="1"/>
  <line x1="18.7" y1="40" x2="53.3" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="18.7" y1="60" x2="53.3" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <text x="72" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="78" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M108,50 L125.3,40 A20,20 0 0,1 125.3,60 Z" fill="#2563eb"/>
  <circle cx="108" cy="50" r="20" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="108" y1="30" x2="108" y2="70" stroke="#94a3b8" stroke-width="1"/>
  <line x1="90.7" y1="40" x2="125.3" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="90.7" y1="60" x2="125.3" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <text x="144" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="150" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M180,50 L180,70 A20,20 0 0,1 162.7,60 Z" fill="#2563eb"/>
  <circle cx="180" cy="50" r="20" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="180" y1="30" x2="180" y2="70" stroke="#94a3b8" stroke-width="1"/>
  <line x1="162.7" y1="40" x2="197.3" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="162.7" y1="60" x2="197.3" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <text x="216" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="222" y="20" width="60" height="60" rx="6" fill="none" stroke="#cbd5e1" stroke-width="1.5"/>
  <path d="M252,50 L252,30 A20,20 0 0,1 269.3,40 Z" fill="#2563eb"/>
  <circle cx="252" cy="50" r="20" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <line x1="252" y1="30" x2="252" y2="70" stroke="#94a3b8" stroke-width="1"/>
  <line x1="234.7" y1="40" x2="269.3" y2="60" stroke="#94a3b8" stroke-width="1"/>
  <line x1="234.7" y1="60" x2="269.3" y2="40" stroke="#94a3b8" stroke-width="1"/>
  <text x="288" y="55" font-size="14" text-anchor="middle" fill="#64748b" font-family="sans-serif">›</text>
  <rect x="294" y="20" width="60" height="60" rx="6" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3"/>
  <text x="324" y="57" font-size="20" font-weight="bold" text-anchor="middle" fill="#64748b" font-family="sans-serif">?</text>
</svg>`,
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,60 L92.9,41 A38,38 0 0,1 92.9,79 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="2.5"/><line x1="60" y1="22" x2="60" y2="98" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="41" x2="92.9" y2="79" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="79" x2="92.9" y2="41" stroke="#94a3b8" stroke-width="1.5"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,60 L92.9,79 A38,38 0 0,1 60,98 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="2.5"/><line x1="60" y1="22" x2="60" y2="98" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="41" x2="92.9" y2="79" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="79" x2="92.9" y2="41" stroke="#94a3b8" stroke-width="1.5"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,60 L60,98 A38,38 0 0,1 27.1,79 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="2.5"/><line x1="60" y1="22" x2="60" y2="98" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="41" x2="92.9" y2="79" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="79" x2="92.9" y2="41" stroke="#94a3b8" stroke-width="1.5"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,60 L27.1,41 A38,38 0 0,1 60,22 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="2.5"/><line x1="60" y1="22" x2="60" y2="98" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="41" x2="92.9" y2="79" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="79" x2="92.9" y2="41" stroke="#94a3b8" stroke-width="1.5"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,60 L27.1,79 A38,38 0 0,1 27.1,41 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="2.5"/><line x1="60" y1="22" x2="60" y2="98" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="41" x2="92.9" y2="79" stroke="#94a3b8" stroke-width="1.5"/><line x1="27.1" y1="79" x2="92.9" y2="41" stroke="#94a3b8" stroke-width="1.5"/></svg>`,
      },
    ],
    correctAnswer: "E",
    explanation:
      "Jika sektor diberi nomor 1 sampai 6 searah jarum jam (sektor 1 di kanan atas), perpindahan juring biru bertambah 1 sektor setiap langkah: sektor 1 → (+1) sektor 2 → (+2) sektor 4 → (+3) sektor 1 → (+4) sektor 5 (sektor kiri tengah, arah jam 8–10) (Gambar E).",
  },

  // =========================================================================
  // FIGURAL - KETIDAKSAMAAN (tiu-191 s.d. tiu-200)
  // =========================================================================
  {
    id: "tiu-191",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "mudah",
    question:
      "Pilihlah satu gambar yang memiliki pola berbeda dibandingkan keempat gambar lainnya.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="26" width="68" height="68" fill="none" stroke="#1e293b" stroke-width="3.5"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="38" width="80" height="44" fill="none" stroke="#1e293b" stroke-width="3.5"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 96,60 60,98 24,60" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="34,34 94,34 86,86 26,86" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 96,48 82,92 38,92 24,48" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
    ],
    correctAnswer: "E",
    explanation:
      "Gambar A (persegi), B (persegi panjang), C (belah ketupat), dan D (jajar genjang) semuanya merupakan bangun segiempat (4 sisi). Hanya Gambar E yang merupakan segilima (5 sisi).",
  },
  {
    id: "tiu-192",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "mudah",
    question:
      "Manakah di antara kelima gambar berikut yang berbeda dari yang lain?",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M36,24 h44 v14 h-30 v16 h24 v14 h-24 v28 h-14 z" fill="#1e293b"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(90 60 60)"><path d="M36,24 h44 v14 h-30 v16 h24 v14 h-24 v28 h-14 z" fill="#1e293b"/></g></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(180 60 60)"><path d="M36,24 h44 v14 h-30 v16 h24 v14 h-24 v28 h-14 z" fill="#1e293b"/></g></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="translate(120,0) scale(-1,1)"><path d="M36,24 h44 v14 h-30 v16 h24 v14 h-24 v28 h-14 z" fill="#1e293b"/></g></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(270 60 60)"><path d="M36,24 h44 v14 h-30 v16 h24 v14 h-24 v28 h-14 z" fill="#1e293b"/></g></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Gambar A, B, C, dan E merupakan bangun huruf F yang sama dan hanya diputar (0°, 90°, 180°, dan 270°). Hanya Gambar D yang merupakan hasil pencerminan (terbalik arah hadapnya) sehingga tidak dapat diperoleh hanya melalui rotasi.",
  },
  {
    id: "tiu-193",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "mudah",
    question:
      "Pilihlah satu gambar yang tidak mengikuti pola kesamaan jumlah sisi dan titik di dalamnya.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 94,86 26,86" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/><circle cx="60" cy="54" r="5" fill="#dc2626"/><circle cx="48" cy="72" r="5" fill="#dc2626"/><circle cx="72" cy="72" r="5" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="26" width="68" height="68" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="46" cy="46" r="5" fill="#dc2626"/><circle cx="74" cy="46" r="5" fill="#dc2626"/><circle cx="46" cy="74" r="5" fill="#dc2626"/><circle cx="74" cy="74" r="5" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 98,48 83,92 37,92 22,48" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/><circle cx="60" cy="44" r="5" fill="#dc2626"/><circle cx="44" cy="58" r="5" fill="#dc2626"/><circle cx="76" cy="58" r="5" fill="#dc2626"/><circle cx="50" cy="76" r="5" fill="#dc2626"/><circle cx="70" cy="76" r="5" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 94,40 94,80 60,100 26,80 26,40" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/><circle cx="60" cy="42" r="5" fill="#dc2626"/><circle cx="44" cy="56" r="5" fill="#dc2626"/><circle cx="76" cy="56" r="5" fill="#dc2626"/><circle cx="50" cy="74" r="5" fill="#dc2626"/><circle cx="70" cy="74" r="5" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 98,60 60,100 22,60" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/><circle cx="60" cy="44" r="5" fill="#dc2626"/><circle cx="44" cy="60" r="5" fill="#dc2626"/><circle cx="76" cy="60" r="5" fill="#dc2626"/><circle cx="60" cy="76" r="5" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Pada gambar A (3 sisi, 3 titik), B (4 sisi, 4 titik), C (5 sisi, 5 titik), dan E (4 sisi, 4 titik), jumlah titik merah di dalam selalu sama dengan jumlah sisi bangun luar. Hanya Gambar D yang bersisi 6 tetapi memiliki 5 titik merah.",
  },
  {
    id: "tiu-194",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "sedang",
    question:
      "Tentukan satu gambar yang posisinya tidak konsisten dengan keempat gambar lainnya.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M60,94 V28 M44,44 L60,28 L76,44" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="80" cy="72" r="7" fill="#2563eb"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(90 60 60)"><path d="M60,94 V28 M44,44 L60,28 L76,44" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="80" cy="72" r="7" fill="#2563eb"/></g></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(180 60 60)"><path d="M60,94 V28 M44,44 L60,28 L76,44" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="80" cy="72" r="7" fill="#2563eb"/></g></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(270 60 60)"><path d="M60,94 V28 M44,44 L60,28 L76,44" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="40" cy="72" r="7" fill="#2563eb"/></g></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(45 60 60)"><path d="M60,94 V28 M44,44 L60,28 L76,44" fill="none" stroke="#1e293b" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><circle cx="80" cy="72" r="7" fill="#2563eb"/></g></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Pada gambar A, B, C, dan E, titik biru selalu berada di sebelah kanan arah hadap panah (hasil rotasi murni). Pada Gambar D, titik biru berada di sebelah kiri arah hadap panah (di bawah batang panah yang menunjuk ke kiri, seharusnya di atas).",
  },
  {
    id: "tiu-195",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "sedang",
    question:
      "Pilihlah satu gambar yang memiliki pembagian luas berbeda dengan keempat gambar lainnya.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="36" height="72" fill="#2563eb"/><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="60" y1="24" x2="60" y2="96" stroke="#1e293b" stroke-width="2.5"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M22,60 A38,38 0 0,1 98,60 Z" fill="#2563eb"/><circle cx="60" cy="60" r="38" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="22" y1="60" x2="98" y2="60" stroke="#1e293b" stroke-width="2.5"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 60,92 22,92" fill="#2563eb"/><polygon points="60,22 98,92 22,92" fill="none" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/><line x1="60" y1="22" x2="60" y2="92" stroke="#1e293b" stroke-width="2.5"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="20,34 100,34 20,86" fill="#2563eb"/><rect x="20" y="34" width="80" height="52" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="20" y1="86" x2="100" y2="34" stroke="#1e293b" stroke-width="2.5"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="24" y="24" width="24" height="72" fill="#2563eb"/><rect x="24" y="24" width="72" height="72" fill="none" stroke="#1e293b" stroke-width="3"/><line x1="48" y1="24" x2="48" y2="96" stroke="#1e293b" stroke-width="2.5"/></svg>`,
      },
    ],
    correctAnswer: "E",
    explanation:
      "Pada gambar A, B, C, dan D, bangun dibagi menjadi dua bagian yang sama besar (arsiran biru tepat setengah luas bangun). Hanya pada Gambar E garis pembagi tidak berada di tengah sehingga bagian biru hanya sepertiga luas persegi.",
  },
  {
    id: "tiu-196",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "sedang",
    question:
      "Temukan satu gambar yang memiliki hubungan posisi antarbangun yang berbeda.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="48" cy="52" r="24" fill="none" stroke="#2563eb" stroke-width="3.5"/><rect x="52" y="48" width="44" height="44" fill="none" stroke="#1e293b" stroke-width="3.5"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="50,24 78,76 22,76" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/><circle cx="72" cy="68" r="24" fill="none" stroke="#2563eb" stroke-width="3.5"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="18" y="38" width="36" height="36" fill="none" stroke="#1e293b" stroke-width="3.5"/><circle cx="84" cy="56" r="20" fill="none" stroke="#2563eb" stroke-width="3.5"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="48,26 74,52 48,78 22,52" fill="none" stroke="#1e293b" stroke-width="3.5"/><rect x="50" y="46" width="44" height="44" fill="none" stroke="#2563eb" stroke-width="3.5"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="62,24 92,76 32,76" fill="none" stroke="#2563eb" stroke-width="3.5" stroke-linejoin="round"/><rect x="26" y="54" width="42" height="42" fill="none" stroke="#1e293b" stroke-width="3.5"/></svg>`,
      },
    ],
    correctAnswer: "C",
    explanation:
      "Pada gambar A, B, D, dan E, kedua bangun datar saling berpotongan (tumpang tindih). Hanya Gambar C yang kedua bangunnya terpisah dan tidak berpotongan.",
  },
  {
    id: "tiu-197",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "sedang",
    question:
      "Perhatikan jumlah titik merah di dalam dan di luar bangun datar pada setiap pilihan, lalu pilih gambar yang berbeda.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="28" y="28" width="64" height="64" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="46" cy="52" r="5" fill="#dc2626"/><circle cx="74" cy="52" r="5" fill="#dc2626"/><circle cx="60" cy="72" r="5" fill="#dc2626"/><circle cx="14" cy="60" r="5" fill="#dc2626"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 96,86 24,86" fill="none" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/><circle cx="60" cy="48" r="5" fill="#dc2626"/><circle cx="50" cy="66" r="5" fill="#dc2626"/><circle cx="70" cy="66" r="5" fill="#dc2626"/><circle cx="60" cy="76" r="5" fill="#dc2626"/><circle cx="24" cy="36" r="5" fill="#dc2626"/><circle cx="96" cy="36" r="5" fill="#dc2626"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="32" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="48" cy="48" r="4.5" fill="#dc2626"/><circle cx="72" cy="48" r="4.5" fill="#dc2626"/><circle cx="60" cy="60" r="4.5" fill="#dc2626"/><circle cx="48" cy="72" r="4.5" fill="#dc2626"/><circle cx="72" cy="72" r="4.5" fill="#dc2626"/><circle cx="16" cy="24" r="4.5" fill="#dc2626"/><circle cx="104" cy="24" r="4.5" fill="#dc2626"/><circle cx="104" cy="96" r="4.5" fill="#dc2626"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,22 96,48 82,92 38,92 24,48" fill="none" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/><circle cx="48" cy="62" r="5" fill="#dc2626"/><circle cx="72" cy="62" r="5" fill="#dc2626"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="28" y="28" width="64" height="64" fill="none" stroke="#1e293b" stroke-width="3"/><circle cx="46" cy="46" r="5" fill="#dc2626"/><circle cx="74" cy="46" r="5" fill="#dc2626"/><circle cx="46" cy="74" r="5" fill="#dc2626"/><circle cx="74" cy="74" r="5" fill="#dc2626"/><circle cx="14" cy="60" r="5" fill="#dc2626"/></svg>`,
      },
    ],
    correctAnswer: "E",
    explanation:
      "Selisih jumlah titik di dalam dan di luar bangun pada A (3 - 1 = 2), B (4 - 2 = 2), C (5 - 3 = 2), dan D (2 - 0 = 2) selalu bernilai 2. Pada Gambar E terdapat 4 titik di dalam dan 1 titik di luar sehingga selisihnya 3.",
  },
  {
    id: "tiu-198",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "sulit",
    question:
      "Pilihlah satu gambar yang memiliki besar sudut antara dua jarum berbeda dibandingkan keempat gambar lainnya.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#cbd5e1" stroke-width="2"/><line x1="60" y1="60" x2="60" y2="26" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="60" x2="94" y2="60" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#1e293b"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#cbd5e1" stroke-width="2"/><line x1="60" y1="60" x2="94" y2="60" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="60" x2="60" y2="94" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#1e293b"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#cbd5e1" stroke-width="2"/><line x1="60" y1="60" x2="84" y2="36" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="60" x2="84" y2="84" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#1e293b"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#cbd5e1" stroke-width="2"/><line x1="60" y1="60" x2="60" y2="26" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="60" x2="89.4" y2="43" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#1e293b"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="60" r="38" fill="none" stroke="#cbd5e1" stroke-width="2"/><line x1="60" y1="60" x2="36" y2="84" stroke="#1e293b" stroke-width="4" stroke-linecap="round"/><line x1="60" y1="60" x2="36" y2="36" stroke="#2563eb" stroke-width="4" stroke-linecap="round"/><circle cx="60" cy="60" r="4" fill="#1e293b"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Pada gambar A, B, C, dan E, kedua jarum membentuk sudut siku-siku (90°). Hanya Gambar D yang membentuk sudut lancip (60°).",
  },
  {
    id: "tiu-199",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "sulit",
    question:
      "Manakah di antara kelima bangun berikut yang tidak memiliki sifat simetri lipat seperti keempat bangun lainnya?",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,24 94,88 26,88" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect x="26" y="26" width="68" height="68" fill="none" stroke="#1e293b" stroke-width="3.5"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><path d="M32,26 h14 v26 h28 v-26 h14 v68 h-14 v-28 h-28 v28 h-14 z" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="38,34 98,34 82,86 22,86" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 92,60 60,100 28,60" fill="none" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Segitiga sama kaki/sama sisi (A), persegi (B), bentuk H (C), dan belah ketupat (E) semuanya memiliki sumbu simetri lipat. Hanya jajar genjang (Gambar D) yang tidak memiliki sumbu simetri lipat.",
  },
  {
    id: "tiu-200",
    category: "TIU",
    subtopic: "Figural - Ketidaksamaan",
    difficulty: "sulit",
    question:
      "Pilihlah satu gambar yang jumlah ruas garis pembentuknya berbeda dengan keempat gambar lainnya.",
    options: [
      {
        key: "A",
        text: "Gambar A",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polyline points="28,30 92,30 28,90 92,90" fill="none" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "B",
        text: "Gambar B",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polyline points="32,90 32,30 88,90 88,30" fill="none" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "C",
        text: "Gambar C",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polyline points="30,30 30,90 90,90 90,30" fill="none" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "D",
        text: "Gambar D",
        score: 5,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><polyline points="24,90 42,30 60,72 78,30 96,90" fill="none" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      },
      {
        key: "E",
        text: "Gambar E",
        score: 0,
        svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><line x1="34" y1="28" x2="34" y2="92" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/><line x1="86" y1="28" x2="86" y2="92" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/><line x1="34" y1="60" x2="86" y2="60" stroke="#1e293b" stroke-width="4.5" stroke-linecap="round"/></svg>`,
      },
    ],
    correctAnswer: "D",
    explanation:
      "Bentuk Z (A), N (B), U siku (C), dan H (E) masing-masing tersusun dari tepat 3 ruas garis lurus. Hanya bentuk M (Gambar D) yang tersusun dari 4 ruas garis lurus.",
  },
];
