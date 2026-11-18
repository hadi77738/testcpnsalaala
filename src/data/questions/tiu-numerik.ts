import { Question } from "@/types/question";

export const tiuNumerik: Question[] = [
  // ==========================================
  // BERHITUNG (tiu-061 s.d. tiu-085)
  // ==========================================
  {
    id: "tiu-061",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari 3/4 + 2/5 - 1/2 adalah...",
    options: [
      { key: "A", text: "11/20" },
      { key: "B", text: "13/20" },
      { key: "C", text: "15/20" },
      { key: "D", text: "17/20" },
      { key: "E", text: "19/20" },
    ],
    correctAnswer: "B",
    explanation:
      "Samakan penyebut menjadi KPK(4, 5, 2) = 20: 3/4 = 15/20, 2/5 = 8/20, 1/2 = 10/20. Maka 15/20 + 8/20 - 10/20 = 13/20.",
    difficulty: "mudah",
  },
  {
    id: "tiu-062",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Nilai dari 37,5% dari 640 adalah...",
    options: [
      { key: "A", text: "210" },
      { key: "B", text: "220" },
      { key: "C", text: "240" },
      { key: "D", text: "256" },
      { key: "E", text: "280" },
    ],
    correctAnswer: "C",
    explanation:
      "37,5% = 3/8. Maka 3/8 x 640 = 3 x 80 = 240.",
    difficulty: "mudah",
  },
  {
    id: "tiu-063",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari (45^2 - 35^2) / 16 adalah...",
    options: [
      { key: "A", text: "40" },
      { key: "B", text: "45" },
      { key: "C", text: "50" },
      { key: "D", text: "55" },
      { key: "E", text: "60" },
    ],
    correctAnswer: "C",
    explanation:
      "Gunakan identitas selisih kuadrat a^2 - b^2 = (a + b)(a - b): (45 + 35)(45 - 35) / 16 = (80 x 10) / 16 = 5 x 10 = 50.",
    difficulty: "mudah",
  },
  {
    id: "tiu-064",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Nilai dari sqrt(0,0625) + sqrt(1,44) - sqrt(0,25) adalah...",
    options: [
      { key: "A", text: "0,85" },
      { key: "B", text: "0,95" },
      { key: "C", text: "1,05" },
      { key: "D", text: "1,15" },
      { key: "E", text: "1,25" },
    ],
    correctAnswer: "B",
    explanation:
      "sqrt(0,0625) = 0,25; sqrt(1,44) = 1,20; sqrt(0,25) = 0,50. Maka 0,25 + 1,20 - 0,50 = 0,95.",
    difficulty: "mudah",
  },
  {
    id: "tiu-065",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika 2x - 3y = 11 dan x + 2y = 2, maka nilai dari 3x - y adalah...",
    options: [
      { key: "A", text: "9" },
      { key: "B", text: "11" },
      { key: "C", text: "13" },
      { key: "D", text: "15" },
      { key: "E", text: "17" },
    ],
    correctAnswer: "C",
    explanation:
      "Perhatikan penjumlahan kedua persamaan: (2x - 3y) + (x + 2y) = 11 + 2 => 3x - y = 13. (Atau dengan substitusi: x = 4, y = -1, sehingga 3(4) - (-1) = 13).",
    difficulty: "sedang",
  },
  {
    id: "tiu-066",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari 12,5 x 16 + 75 : 1,5 - 25 adalah...",
    options: [
      { key: "A", text: "200" },
      { key: "B", text: "215" },
      { key: "C", text: "225" },
      { key: "D", text: "235" },
      { key: "E", text: "250" },
    ],
    correctAnswer: "C",
    explanation:
      "12,5 x 16 = 200. 75 : 1,5 = 50. Jadi 200 + 50 - 25 = 225.",
    difficulty: "mudah",
  },
  {
    id: "tiu-067",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Nilai dari (2/3)^2 + (3/4) x (8/9) - 1/9 adalah...",
    options: [
      { key: "A", text: "8/9" },
      { key: "B", text: "1" },
      { key: "C", text: "10/9" },
      { key: "D", text: "11/9" },
      { key: "E", text: "4/3" },
    ],
    correctAnswer: "B",
    explanation:
      "(2/3)^2 = 4/9. (3/4) x (8/9) = 24/36 = 2/3 = 6/9. Maka 4/9 + 6/9 - 1/9 = 9/9 = 1.",
    difficulty: "sedang",
  },
  {
    id: "tiu-068",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika 15% dari suatu bilangan adalah 72, maka 25% dari bilangan tersebut adalah...",
    options: [
      { key: "A", text: "100" },
      { key: "B", text: "110" },
      { key: "C", text: "120" },
      { key: "D", text: "135" },
      { key: "E", text: "144" },
    ],
    correctAnswer: "C",
    explanation:
      "Misalkan bilangan tersebut N. 0,15 N = 72 => N = 72 / 0,15 = 480. Maka 25% dari 480 = 1/4 x 480 = 120. (Atau langsung (25/15) x 72 = (5/3) x 72 = 120).",
    difficulty: "mudah",
  },
  {
    id: "tiu-069",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari (2^5 x 4^3) / 8^2 adalah...",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "16" },
      { key: "C", text: "32" },
      { key: "D", text: "64" },
      { key: "E", text: "128" },
    ],
    correctAnswer: "C",
    explanation:
      "Ubah semua ke basis 2: 4^3 = (2^2)^3 = 2^6, dan 8^2 = (2^3)^2 = 2^6. Maka (2^5 x 2^6) / 2^6 = 2^5 = 32.",
    difficulty: "mudah",
  },
  {
    id: "tiu-070",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Manakah di antara pecahan berikut yang nilainya PALING BESAR?",
    options: [
      { key: "A", text: "5/8" },
      { key: "B", text: "7/11" },
      { key: "C", text: "9/14" },
      { key: "D", text: "11/17" },
      { key: "E", text: "13/21" },
    ],
    correctAnswer: "D",
    explanation:
      "Ubah ke bentuk desimal: 5/8 = 0,6250; 7/11 = 0,6364; 9/14 = 0,6429; 11/17 = 0,6471; 13/21 = 0,6190. Jadi yang paling besar adalah 11/17.",
    difficulty: "sedang",
  },
  {
    id: "tiu-071",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika x + 1/x = 4, maka nilai dari x^2 + 1/x^2 adalah...",
    options: [
      { key: "A", text: "12" },
      { key: "B", text: "14" },
      { key: "C", text: "16" },
      { key: "D", text: "18" },
      { key: "E", text: "20" },
    ],
    correctAnswer: "B",
    explanation:
      "Kuadratkan kedua ruas: (x + 1/x)^2 = 4^2 => x^2 + 2(x)(1/x) + 1/x^2 = 16 => x^2 + 2 + 1/x^2 = 16 => x^2 + 1/x^2 = 14.",
    difficulty: "sedang",
  },
  {
    id: "tiu-072",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari 0,36 x 150 + 0,64 x 150 - 25 adalah...",
    options: [
      { key: "A", text: "100" },
      { key: "B", text: "115" },
      { key: "C", text: "125" },
      { key: "D", text: "135" },
      { key: "E", text: "150" },
    ],
    correctAnswer: "C",
    explanation:
      "Gunakan sifat distributif: (0,36 + 0,64) x 150 - 25 = 1 x 150 - 25 = 125.",
    difficulty: "mudah",
  },
  {
    id: "tiu-073",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Nilai dari sqrt(12 + sqrt(12 + sqrt(12 + ...))) adalah...",
    options: [
      { key: "A", text: "3" },
      { key: "B", text: "4" },
      { key: "C", text: "6" },
      { key: "D", text: "12" },
      { key: "E", text: "2" },
    ],
    correctAnswer: "B",
    explanation:
      "Misalkan x = sqrt(12 + x), sehingga x^2 = 12 + x => x^2 - x - 12 = 0 => (x - 4)(x + 3) = 0. Karena hasil akar positif, maka x = 4.",
    difficulty: "sedang",
  },
  {
    id: "tiu-074",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika a = 3, b = -2, dan c = 5, maka nilai dari (2a^2 - 3bc + b^3) adalah...",
    options: [
      { key: "A", text: "30" },
      { key: "B", text: "34" },
      { key: "C", text: "40" },
      { key: "D", text: "44" },
      { key: "E", text: "48" },
    ],
    correctAnswer: "C",
    explanation:
      "2(3)^2 - 3(-2)(5) + (-2)^3 = 2(9) - (-30) + (-8) = 18 + 30 - 8 = 40.",
    difficulty: "mudah",
  },
  {
    id: "tiu-075",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari (3 1/4 + 2 3/5) : 1 3/10 adalah...",
    options: [
      { key: "A", text: "3,5" },
      { key: "B", text: "4,0" },
      { key: "C", text: "4,5" },
      { key: "D", text: "5,0" },
      { key: "E", text: "5,5" },
    ],
    correctAnswer: "C",
    explanation:
      "3 1/4 = 3,25 dan 2 3/5 = 2,60, jumlahnya 5,85. Pembaginya 1 3/10 = 1,30. Maka 5,85 / 1,30 = 58,5 / 13 = 4,5.",
    difficulty: "sedang",
  },
  {
    id: "tiu-076",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika 2^(x+3) = 128, maka nilai dari (3x - 2) adalah...",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "10" },
      { key: "C", text: "12" },
      { key: "D", text: "14" },
      { key: "E", text: "16" },
    ],
    correctAnswer: "B",
    explanation:
      "128 = 2^7, sehingga x + 3 = 7 => x = 4. Maka 3x - 2 = 3(4) - 2 = 10.",
    difficulty: "mudah",
  },
  {
    id: "tiu-077",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari 1/2 + 1/6 + 1/12 + 1/20 + 1/30 adalah...",
    options: [
      { key: "A", text: "3/4" },
      { key: "B", text: "4/5" },
      { key: "C", text: "5/6" },
      { key: "D", text: "6/7" },
      { key: "E", text: "7/8" },
    ],
    correctAnswer: "C",
    explanation:
      "Gunakan deret teleskopik 1/(n(n+1)) = 1/n - 1/(n+1): (1 - 1/2) + (1/2 - 1/3) + (1/3 - 1/4) + (1/4 - 1/5) + (1/5 - 1/6) = 1 - 1/6 = 5/6.",
    difficulty: "sedang",
  },
  {
    id: "tiu-078",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Nilai dari 62,5% x 240 - 16 2/3% x 180 adalah...",
    options: [
      { key: "A", text: "100" },
      { key: "B", text: "110" },
      { key: "C", text: "120" },
      { key: "D", text: "130" },
      { key: "E", text: "140" },
    ],
    correctAnswer: "C",
    explanation:
      "62,5% = 5/8, maka 5/8 x 240 = 150. 16 2/3% = 1/6, maka 1/6 x 180 = 30. Jadi 150 - 30 = 120.",
    difficulty: "sedang",
  },
  {
    id: "tiu-079",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika p/q = 3/5 dan q/r = 2/3, maka perbandingan p : q : r adalah...",
    options: [
      { key: "A", text: "3 : 5 : 6" },
      { key: "B", text: "6 : 10 : 15" },
      { key: "C", text: "6 : 15 : 10" },
      { key: "D", text: "5 : 10 : 15" },
      { key: "E", text: "2 : 5 : 3" },
    ],
    correctAnswer: "B",
    explanation:
      "Samakan nilai q menggunakan KPK(5, 2) = 10. p : q = 3 : 5 = 6 : 10, dan q : r = 2 : 3 = 10 : 15. Jadi p : q : r = 6 : 10 : 15.",
    difficulty: "mudah",
  },
  {
    id: "tiu-080",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Nilai dari (999^2 - 1) / 1000 adalah...",
    options: [
      { key: "A", text: "996" },
      { key: "B", text: "997" },
      { key: "C", text: "998" },
      { key: "D", text: "999" },
      { key: "E", text: "1000" },
    ],
    correctAnswer: "C",
    explanation:
      "999^2 - 1^2 = (999 + 1)(999 - 1) = 1000 x 998. Dibagi 1000 menghasilkan 998.",
    difficulty: "mudah",
  },
  {
    id: "tiu-081",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Hasil dari sqrt(75) + sqrt(48) - sqrt(27) adalah...",
    options: [
      { key: "A", text: "4 sqrt(3)" },
      { key: "B", text: "5 sqrt(3)" },
      { key: "C", text: "6 sqrt(3)" },
      { key: "D", text: "7 sqrt(3)" },
      { key: "E", text: "8 sqrt(3)" },
    ],
    correctAnswer: "C",
    explanation:
      "sqrt(75) = 5 sqrt(3), sqrt(48) = 4 sqrt(3), sqrt(27) = 3 sqrt(3). Maka (5 + 4 - 3) sqrt(3) = 6 sqrt(3).",
    difficulty: "mudah",
  },
  {
    id: "tiu-082",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Bilangan bulat terdekat dari hasil (19,8 x 14,9) / 5,98 adalah...",
    options: [
      { key: "A", text: "45" },
      { key: "B", text: "48" },
      { key: "C", text: "50" },
      { key: "D", text: "52" },
      { key: "E", text: "55" },
    ],
    correctAnswer: "C",
    explanation:
      "Pendekatan cepat: (20 x 15) / 6 = 300 / 6 = 50. Nilai eksaknya (19,8 x 14,9) / 5,98 = 295,02 / 5,98 = 49,33, terdekat ke 50.",
    difficulty: "mudah",
  },
  {
    id: "tiu-083",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika rata-rata dari 6, 8, x, 12, dan 14 adalah 10, maka nilai x adalah...",
    options: [
      { key: "A", text: "8" },
      { key: "B", text: "9" },
      { key: "C", text: "10" },
      { key: "D", text: "11" },
      { key: "E", text: "12" },
    ],
    correctAnswer: "C",
    explanation:
      "Jumlah 5 bilangan = 5 x 10 = 50. Jumlah 4 bilangan yang diketahui = 6 + 8 + 12 + 14 = 40. Jadi x = 50 - 40 = 10.",
    difficulty: "mudah",
  },
  {
    id: "tiu-084",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Jika f(x) = 3x - 5 dan f(a) = 19, maka nilai dari (a^2 - 4a) adalah...",
    options: [
      { key: "A", text: "24" },
      { key: "B", text: "28" },
      { key: "C", text: "32" },
      { key: "D", text: "36" },
      { key: "E", text: "40" },
    ],
    correctAnswer: "C",
    explanation:
      "3a - 5 = 19 => 3a = 24 => a = 8. Maka a^2 - 4a = 8^2 - 4(8) = 64 - 32 = 32.",
    difficulty: "mudah",
  },
  {
    id: "tiu-085",
    category: "TIU",
    subtopic: "Berhitung",
    question: "Sisa pembagian 3^2026 oleh 5 adalah...",
    options: [
      { key: "A", text: "0" },
      { key: "B", text: "1" },
      { key: "C", text: "2" },
      { key: "D", text: "3" },
      { key: "E", text: "4" },
    ],
    correctAnswer: "E",
    explanation:
      "Pola angka satuan 3^n: 3^1=3, 3^2=9, 3^3=27(7), 3^4=81(1), berulang setiap 4 pangkat. 2026 dibagi 4 bersisa 2 (2024 habis dibagi 4). Jadi angka satuan 3^2026 sama dengan 3^2 = 9. Sisa pembagian 9 oleh 5 adalah 4.",
    difficulty: "sulit",
  },

  // ==========================================
  // DERET ANGKA (tiu-086 s.d. tiu-110)
  // ==========================================
  {
    id: "tiu-086",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "4, 7, 12, 19, 28, ..., ...",
    options: [
      { key: "A", text: "37, 48" },
      { key: "B", text: "39, 52" },
      { key: "C", text: "39, 50" },
      { key: "D", text: "41, 54" },
      { key: "E", text: "38, 51" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola selisih bilangan ganjil berurutan: +3, +5, +7, +9, +11, +13. Maka 28 + 11 = 39, dan 39 + 13 = 52.",
    difficulty: "mudah",
  },
  {
    id: "tiu-087",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "3, 6, 12, 24, 48, ..., ...",
    options: [
      { key: "A", text: "72, 144" },
      { key: "B", text: "96, 192" },
      { key: "C", text: "84, 168" },
      { key: "D", text: "96, 144" },
      { key: "E", text: "108, 216" },
    ],
    correctAnswer: "B",
    explanation:
      "Deret geometri dengan rasio x2: 48 x 2 = 96, dan 96 x 2 = 192.",
    difficulty: "mudah",
  },
  {
    id: "tiu-088",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "2, 5, 11, 23, 47, ..., ...",
    options: [
      { key: "A", text: "94, 188" },
      { key: "B", text: "95, 191" },
      { key: "C", text: "93, 187" },
      { key: "D", text: "96, 193" },
      { key: "E", text: "91, 183" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola: dikali 2 lalu ditambah 1 (atau selisihnya +3, +6, +12, +24, +48, +96). 47 x 2 + 1 = 95, dan 95 x 2 + 1 = 191.",
    difficulty: "mudah",
  },
  {
    id: "tiu-089",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "100, 95, 85, 70, 50, ..., ...",
    options: [
      { key: "A", text: "25, 0" },
      { key: "B", text: "25, -5" },
      { key: "C", text: "30, 5" },
      { key: "D", text: "20, -10" },
      { key: "E", text: "30, 0" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola pengurangan kelipatan 5: -5, -10, -15, -20, -25, -30. Maka 50 - 25 = 25, dan 25 - 30 = -5.",
    difficulty: "mudah",
  },
  {
    id: "tiu-090",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "5, 10, 8, 16, 14, 28, 26, ..., ...",
    options: [
      { key: "A", text: "52, 50" },
      { key: "B", text: "50, 48" },
      { key: "C", text: "24, 48" },
      { key: "D", text: "52, 54" },
      { key: "E", text: "28, 56" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola bergantian x2 dan -2: 5(x2)->10(-2)->8(x2)->16(-2)->14(x2)->28(-2)->26. Selanjutnya 26 x 2 = 52, lalu 52 - 2 = 50.",
    difficulty: "mudah",
  },
  {
    id: "tiu-091",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "2, 3, 5, 8, 13, 21, 34, ..., ...",
    options: [
      { key: "A", text: "55, 89" },
      { key: "B", text: "54, 88" },
      { key: "C", text: "55, 88" },
      { key: "D", text: "56, 90" },
      { key: "E", text: "53, 87" },
    ],
    correctAnswer: "A",
    explanation:
      "Deret Fibonacci (suku berikutnya adalah jumlah dua suku sebelumnya): 21 + 34 = 55, dan 34 + 55 = 89.",
    difficulty: "mudah",
  },
  {
    id: "tiu-092",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "12, 15, 14, 17, 16, 19, 18, ..., ...",
    options: [
      { key: "A", text: "20, 19" },
      { key: "B", text: "21, 20" },
      { key: "C", text: "21, 22" },
      { key: "D", text: "17, 20" },
      { key: "E", text: "22, 21" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola dua larik (+2 pada tiap larik), atau pola bergantian +3, -1: 18 + 3 = 21, dan 21 - 1 = 20.",
    difficulty: "mudah",
  },
  {
    id: "tiu-093",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "1, 4, 9, 16, 25, 36, ..., ...",
    options: [
      { key: "A", text: "48, 63" },
      { key: "B", text: "49, 64" },
      { key: "C", text: "49, 81" },
      { key: "D", text: "47, 62" },
      { key: "E", text: "50, 65" },
    ],
    correctAnswer: "B",
    explanation:
      "Deret bilangan kuadrat (n^2): 1^2, 2^2, 3^2, 4^2, 5^2, 6^2, selanjutnya 7^2 = 49 dan 8^2 = 64.",
    difficulty: "mudah",
  },
  {
    id: "tiu-094",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "7, 10, 14, 19, 25, 32, ..., ...",
    options: [
      { key: "A", text: "40, 49" },
      { key: "B", text: "39, 47" },
      { key: "C", text: "41, 51" },
      { key: "D", text: "40, 48" },
      { key: "E", text: "38, 46" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola selisih bertambah 1: +3, +4, +5, +6, +7, selanjutnya +8 dan +9. Maka 32 + 8 = 40, dan 40 + 9 = 49.",
    difficulty: "mudah",
  },
  {
    id: "tiu-095",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "3, 5, 9, 17, 33, 65, ..., ...",
    options: [
      { key: "A", text: "128, 256" },
      { key: "B", text: "129, 257" },
      { key: "C", text: "130, 259" },
      { key: "D", text: "127, 255" },
      { key: "E", text: "131, 261" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola selisih berlipat dua: +2, +4, +8, +16, +32, selanjutnya +64 dan +128. Maka 65 + 64 = 129, dan 129 + 128 = 257.",
    difficulty: "sedang",
  },
  {
    id: "tiu-096",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "4, 12, 6, 18, 9, 27, ..., ...",
    options: [
      { key: "A", text: "13,5, 40,5" },
      { key: "B", text: "18, 54" },
      { key: "C", text: "15, 45" },
      { key: "D", text: "12, 36" },
      { key: "E", text: "14, 42" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola bergantian x3 dan :2. 4(x3)->12(:2)->6(x3)->18(:2)->9(x3)->27. Selanjutnya 27 : 2 = 13,5, dan 13,5 x 3 = 40,5.",
    difficulty: "sedang",
  },
  {
    id: "tiu-097",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "1, 2, 6, 24, 120, ..., ...",
    options: [
      { key: "A", text: "600, 3600" },
      { key: "B", text: "720, 4320" },
      { key: "C", text: "720, 5040" },
      { key: "D", text: "620, 4340" },
      { key: "E", text: "700, 4900" },
    ],
    correctAnswer: "C",
    explanation:
      "Deret faktorial (x2, x3, x4, x5, x6, x7): 120 x 6 = 720, dan 720 x 7 = 5040.",
    difficulty: "mudah",
  },
  {
    id: "tiu-098",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "20, 22, 26, 32, 40, ..., 62",
    options: [
      { key: "A", text: "48" },
      { key: "B", text: "50" },
      { key: "C", text: "52" },
      { key: "D", text: "54" },
      { key: "E", text: "46" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola pertambahan bilangan genap: +2, +4, +6, +8, +10, +12. Jadi 40 + 10 = 50 (cek: 50 + 12 = 62, sesuai).",
    difficulty: "mudah",
  },
  {
    id: "tiu-099",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "2, 7, 4, 14, 8, 21, 16, ..., ...",
    options: [
      { key: "A", text: "28, 32" },
      { key: "B", text: "28, 24" },
      { key: "C", text: "32, 28" },
      { key: "D", text: "24, 32" },
      { key: "E", text: "26, 30" },
    ],
    correctAnswer: "A",
    explanation:
      "Deret dua larik: Larik ganjil (x2): 2, 4, 8, 16, 32. Larik genap (+7): 7, 14, 21, 28. Jadi dua suku berikutnya adalah 28 dan 32.",
    difficulty: "sedang",
  },
  {
    id: "tiu-100",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "1, 4, 10, 22, 46, ..., ...",
    options: [
      { key: "A", text: "92, 184" },
      { key: "B", text: "94, 190" },
      { key: "C", text: "90, 182" },
      { key: "D", text: "96, 192" },
      { key: "E", text: "88, 178" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola: (suku sebelumnya x 2) + 2, atau selisih +3, +6, +12, +24, +48, +96. 46 + 48 = 94, dan 94 + 96 = 190.",
    difficulty: "sedang",
  },
  {
    id: "tiu-101",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "0, 7, 26, 63, 124, ..., ...",
    options: [
      { key: "A", text: "215, 342" },
      { key: "B", text: "216, 343" },
      { key: "C", text: "214, 341" },
      { key: "D", text: "217, 344" },
      { key: "E", text: "210, 336" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola bilangan kubik dikurangi 1 (n^3 - 1): 1^3-1=0, 2^3-1=7, 3^3-1=26, 4^3-1=63, 5^3-1=124. Selanjutnya 6^3 - 1 = 216 - 1 = 215, dan 7^3 - 1 = 343 - 1 = 342.",
    difficulty: "sulit",
  },
  {
    id: "tiu-102",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "81, 27, 36, 12, 21, 7, ..., ...",
    options: [
      { key: "A", text: "16, 5 1/3" },
      { key: "B", text: "18, 6" },
      { key: "C", text: "16, 16/3" },
      { key: "D", text: "15, 5" },
      { key: "E", text: "12, 4" },
    ],
    correctAnswer: "C",
    explanation:
      "Pola bergantian :3 dan +9: 81(:3)->27(+9)->36(:3)->12(+9)->21(:3)->7. Selanjutnya 7 + 9 = 16, dan 16 : 3 = 16/3.",
    difficulty: "sedang",
  },
  {
    id: "tiu-103",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "11, 13, 17, 25, 41, ..., ...",
    options: [
      { key: "A", text: "65, 113" },
      { key: "B", text: "73, 137" },
      { key: "C", text: "71, 135" },
      { key: "D", text: "69, 125" },
      { key: "E", text: "75, 139" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola selisih dikali 2: +2, +4, +8, +16, +32, +64. Maka 41 + 32 = 73, dan 73 + 64 = 137.",
    difficulty: "sedang",
  },
  {
    id: "tiu-104",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "5, 6, 9, 14, 21, 30, ..., ...",
    options: [
      { key: "A", text: "41, 54" },
      { key: "B", text: "40, 52" },
      { key: "C", text: "42, 56" },
      { key: "D", text: "39, 50" },
      { key: "E", text: "43, 58" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola selisih bilangan ganjil mulai dari 1: +1, +3, +5, +7, +9, +11, +13. Maka 30 + 11 = 41, dan 41 + 13 = 54.",
    difficulty: "mudah",
  },
  {
    id: "tiu-105",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "2, 6, 12, 20, 30, 42, ..., ...",
    options: [
      { key: "A", text: "54, 68" },
      { key: "B", text: "56, 72" },
      { key: "C", text: "58, 74" },
      { key: "D", text: "55, 70" },
      { key: "E", text: "56, 70" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola selisih bilangan genap mulai dari 4: +4, +6, +8, +10, +12, +14, +16 (atau n(n+1)). Maka 42 + 14 = 56, dan 56 + 16 = 72.",
    difficulty: "mudah",
  },
  {
    id: "tiu-106",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "1, 1, 2, 4, 7, 13, 24, ..., ...",
    options: [
      { key: "A", text: "44, 81" },
      { key: "B", text: "42, 79" },
      { key: "C", text: "43, 80" },
      { key: "D", text: "45, 82" },
      { key: "E", text: "41, 78" },
    ],
    correctAnswer: "A",
    explanation:
      "Deret Tribonacci (suku berikutnya adalah jumlah 3 suku sebelumnya): 7 + 13 + 24 = 44, dan 13 + 24 + 44 = 81.",
    difficulty: "sulit",
  },
  {
    id: "tiu-107",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "3, 8, 15, 24, 35, 48, ..., ...",
    options: [
      { key: "A", text: "61, 76" },
      { key: "B", text: "63, 80" },
      { key: "C", text: "62, 78" },
      { key: "D", text: "64, 81" },
      { key: "E", text: "65, 84" },
    ],
    correctAnswer: "B",
    explanation:
      "Pola selisih bilangan ganjil mulai 5: +5, +7, +9, +11, +13, +15, +17 (atau n^2 - 1 untuk n >= 2). 48 + 15 = 63, dan 63 + 17 = 80.",
    difficulty: "mudah",
  },
  {
    id: "tiu-108",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "10, 30, 27, 81, 78, 234, ..., ...",
    options: [
      { key: "A", text: "231, 693" },
      { key: "B", text: "230, 690" },
      { key: "C", text: "231, 690" },
      { key: "D", text: "232, 696" },
      { key: "E", text: "229, 687" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola bergantian x3 dan -3: 10(x3)->30(-3)->27(x3)->81(-3)->78(x3)->234. Selanjutnya 234 - 3 = 231, dan 231 x 3 = 693.",
    difficulty: "sedang",
  },
  {
    id: "tiu-109",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "64, 32, 40, 20, 28, 14, ..., ...",
    options: [
      { key: "A", text: "22, 11" },
      { key: "B", text: "20, 10" },
      { key: "C", text: "24, 12" },
      { key: "D", text: "21, 10,5" },
      { key: "E", text: "18, 9" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola bergantian :2 dan +8: 64(:2)->32(+8)->40(:2)->20(+8)->28(:2)->14. Selanjutnya 14 + 8 = 22, dan 22 : 2 = 11.",
    difficulty: "mudah",
  },
  {
    id: "tiu-110",
    category: "TIU",
    subtopic: "Deret Angka",
    question: "2, 3, 6, 15, 42, 123, ..., ...",
    options: [
      { key: "A", text: "366, 1095" },
      { key: "B", text: "360, 1080" },
      { key: "C", text: "369, 1107" },
      { key: "D", text: "364, 1090" },
      { key: "E", text: "368, 1100" },
    ],
    correctAnswer: "A",
    explanation:
      "Pola selisih pangkat 3 (+1, +3, +9, +27, +81, +243, +729): 123 + 243 = 366, dan 366 + 729 = 1095.",
    difficulty: "sulit",
  },

  // ==========================================
  // PERBANDINGAN KUANTITATIF (tiu-111 s.d. tiu-130)
  // ==========================================
  {
    id: "tiu-111",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui P = 3/8 dari 160 dan Q = 25% dari 240. Hubungan yang tepat antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 2Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "C",
    explanation:
      "P = (3/8) x 160 = 60. Q = (25/100) x 240 = 1/4 x 240 = 60. Jadi P = Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-112",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Jika x > 0 dan y < 0, dengan P = (x - y)^2 dan Q = x^2 - y^2, maka hubungan antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "2P = Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "P = x^2 - 2xy + y^2. Karena x > 0 dan y < 0, maka -2xy bernilai positif (> 0) dan y^2 > -y^2. Jadi P - Q = 2y^2 - 2xy > 0, yang berarti P > Q.",
    difficulty: "sedang",
  },
  {
    id: "tiu-113",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui 0 < a < 1. Jika P = a^2 dan Q = a^3, maka hubungan antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 3Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "Untuk pecahan positif di antara 0 dan 1 (misal a = 1/2), semakin besar pangkatnya semakin kecil nilainya: (1/2)^2 = 1/4 = 0,25 dan (1/2)^3 = 1/8 = 0,125. Jadi P > Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-114",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui x^2 = 25 dan y^3 = 125. Hubungan antara x dan y adalah...",
    options: [
      { key: "A", text: "x > y" },
      { key: "B", text: "x < y" },
      { key: "C", text: "x = y" },
      { key: "D", text: "x <= y" },
      { key: "E", text: "Hubungan x dan y tidak dapat ditentukan" },
    ],
    correctAnswer: "D",
    explanation:
      "Dari x^2 = 25 diperoleh x = 5 atau x = -5. Dari y^3 = 125 diperoleh y = 5. Jika x = 5 maka x = y; jika x = -5 maka x < y. Jadi hubungan yang pasti berlaku adalah x <= y (jika opsi hanya >, <, =, tidak dapat ditentukan, pilih D jika tersedia x <= y, atau E jika tidak ada ketaksamaan lemah). Di sini opsi D adalah x <= y, sehingga D paling tepat!",
    difficulty: "sulit",
  },
  {
    id: "tiu-115",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Jika P adalah luas persegi dengan keliling 36 cm, dan Q adalah luas segitiga siku-siku dengan panjang sisi siku-siku 9 cm dan 18 cm, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 2Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "C",
    explanation:
      "Keliling persegi 36 cm => sisi s = 36/4 = 9 cm => P = 9 x 9 = 81 cm^2. Luas segitiga Q = 1/2 x 9 x 18 = 81 cm^2. Jadi P = Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-116",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui 3x + 5y = 21 dan 2x - y = 1. Jika P = x + y dan Q = 5, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 2Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "C",
    explanation:
      "Dari 2x - y = 1 => y = 2x - 1. Substitusi ke 3x + 5(2x - 1) = 21 => 13x - 5 = 21 => 13x = 26 => x = 2. Maka y = 2(2) - 1 = 3. Jadi P = x + y = 2 + 3 = 5, sehingga P = Q.",
    difficulty: "sedang",
  },
  {
    id: "tiu-117",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui P = 1/12 + 1/15 dan Q = 3/20. Hubungan yang tepat antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "2P = 3Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "C",
    explanation:
      "P = 1/12 + 1/15 = 5/60 + 4/60 = 9/60 = 3/20. Karena Q = 3/20, maka P = Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-118",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Sebuah mobil menempuh jarak 180 km dalam waktu 2,5 jam. Jika P adalah kecepatan rata-rata mobil tersebut (dalam km/jam) dan Q = 70 km/jam, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P + Q = 150" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "P = jarak / waktu = 180 / 2,5 = 72 km/jam. Karena Q = 70 km/jam, maka P > Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-119",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui m dan n adalah bilangan bulat dengan m > n. Jika P = 2m - n dan Q = m - 2n, maka hubungan P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = -Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "E",
    explanation:
      "P - Q = (2m - n) - (m - 2n) = m + n. Karena tanda m dan n tidak diketahui, m + n bisa positif (misal m=2, n=1 => m+n=3 > 0 => P > Q), nol (m=1, n=-1 => P = Q), atau negatif (m=-1, n=-2 => m+n=-3 < 0 => P < Q). Jadi hubungan P dan Q tidak dapat ditentukan.",
    difficulty: "sulit",
  },
  {
    id: "tiu-120",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui P = sqrt(196) + sqrt(225) dan Q = 5^2 + 4. Hubungan antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = Q - 1" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "C",
    explanation:
      "P = 14 + 15 = 29. Q = 25 + 4 = 29. Jadi P = Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-121",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Harga sebuah baju dinaikkan 20%, kemudian pada bulan berikutnya diturunkan 20% dari harga setelah kenaikan. Jika P adalah harga akhir baju dan Q adalah harga awal baju, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 0,8Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "B",
    explanation:
      "Misal harga awal Q = 100. Naik 20% -> 120. Turun 20% dari 120 -> 120 - 24 = 96. Jadi P = 0,96 Q, yang berarti P < Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-122",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui jumlah dua bilangan adalah 24 dan selisihnya adalah 6. Jika P adalah hasil kali kedua bilangan tersebut dan Q = 130, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = Q + 10" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "a + b = 24 dan a - b = 6. Dijumlahkan: 2a = 30 => a = 15, maka b = 9. P = 15 x 9 = 135. Karena Q = 130, maka P > Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-123",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Jika 4 pekerja dapat menyelesaikan suatu pekerjaan dalam 12 hari, dan P adalah jumlah hari yang dibutuhkan jika dikerjakan oleh 6 pekerja dengan kecepatan yang sama, serta Q = 9 hari, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P + Q = 18" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "B",
    explanation:
      "Perbandingan berbalik nilai: 4 x 12 = 6 x P => P = 48 / 6 = 8 hari. Karena Q = 9 hari, maka P < Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-124",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui P = 2025 x 2027 dan Q = 2026^2. Hubungan antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = Q + 1" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "B",
    explanation:
      "Misal n = 2026. Maka P = (n - 1)(n + 1) = n^2 - 1 = 2026^2 - 1, sedangkan Q = 2026^2. Jelas P < Q (tepatnya P = Q - 1).",
    difficulty: "sedang",
  },
  {
    id: "tiu-125",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Sebuah tabung memiliki jari-jari r dan tinggi t. Jika jari-jarinya diperbesar menjadi 2 kali semula dan tingginya diperkecil menjadi 1/2 kali semula, dengan P adalah volume tabung baru dan Q adalah volume tabung awal, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 4Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "Q = pi x r^2 x t. P = pi x (2r)^2 x (1/2 t) = pi x 4r^2 x 1/2 t = 2 (pi x r^2 x t) = 2Q. Karena volume positif, maka P > Q.",
    difficulty: "sedang",
  },
  {
    id: "tiu-126",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui -3 < x < 2 dan -1 < y < 4. Jika P = x + y dan Q = 6, maka hubungan yang pasti benar antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P >= Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "B",
    explanation:
      "Batas atas penjumlahan: x + y < 2 + 4 = 6. Batas bawah: x + y > -3 + (-1) = -4. Jadi -4 < P < 6. Karena P selalu kurang dari 6 dan Q = 6, maka P < Q.",
    difficulty: "sedang",
  },
  {
    id: "tiu-127",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Dalam sebuah kelas, rata-rata nilai 18 siswa adalah 75. Setelah 2 siswa baru bergabung, rata-ratanya menjadi 76. Jika P adalah rata-rata nilai 2 siswa baru tersebut dan Q = 84, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = Q - 2" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "Total nilai 18 siswa = 18 x 75 = 1350. Total nilai 20 siswa = 20 x 76 = 1520. Jumlah nilai 2 siswa baru = 1520 - 1350 = 170. Maka P = 170 / 2 = 85. Karena Q = 84, maka P > Q.",
    difficulty: "sedang",
  },
  {
    id: "tiu-128",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui a * b = a^2 - 2b. Jika P = 4 * 3 dan Q = 3 * 2, maka...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 3Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "P = 4 * 3 = 4^2 - 2(3) = 16 - 6 = 10. Q = 3 * 2 = 3^2 - 2(2) = 9 - 4 = 5. Jadi P > Q.",
    difficulty: "mudah",
  },
  {
    id: "tiu-129",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Diketahui P = 3^(1/2) dan Q = 2^(1/3). Hubungan antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = 2Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "A",
    explanation:
      "Pangkatkan kedua bilangan dengan KPK(2, 3) = 6 (karena keduanya positif): P^6 = (3^(1/2))^6 = 3^3 = 27. Q^6 = (2^(1/3))^6 = 2^2 = 4. Karena 27 > 4, maka P > Q.",
    difficulty: "sedang",
  },
  {
    id: "tiu-130",
    category: "TIU",
    subtopic: "Perbandingan Kuantitatif",
    question:
      "Jika x != 0, P = (x + 2)^2 - x^2 - 4, dan Q = 4x, maka hubungan antara P dan Q adalah...",
    options: [
      { key: "A", text: "P > Q" },
      { key: "B", text: "P < Q" },
      { key: "C", text: "P = Q" },
      { key: "D", text: "P = -Q" },
      { key: "E", text: "Hubungan P dan Q tidak dapat ditentukan" },
    ],
    correctAnswer: "C",
    explanation:
      "Jabarkan P: (x^2 + 4x + 4) - x^2 - 4 = 4x. Karena Q = 4x, maka P = Q untuk setiap nilai x.",
    difficulty: "mudah",
  },
];
