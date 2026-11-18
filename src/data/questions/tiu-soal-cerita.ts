import { Question } from "@/types/question";

export const tiuSoalCerita: Question[] = [
  {
    id: "tiu-131",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Jarak kota A dan kota B adalah 240 km. Budi berangkat dari kota A menuju kota B pukul 07.00 dengan kecepatan rata-rata 55 km/jam. Pada saat yang sama, Candra berangkat dari kota B menuju kota A melalui jalan yang sama dengan kecepatan rata-rata 65 km/jam. Pada pukul berapakah mereka akan berpapasan?",
    options: [
      { key: "A", text: "08.30" },
      { key: "B", text: "09.00" },
      { key: "C", text: "09.15" },
      { key: "D", text: "09.30" },
      { key: "E", text: "10.00" },
    ],
    correctAnswer: "B",
    explanation:
      "Waktu berpapasan (berangkat bersamaan) = Jarak / (v1 + v2) = 240 / (55 + 65) = 240 / 120 = 2 jam. Jadi mereka berpapasan pukul 07.00 + 2 jam = 09.00.",
    difficulty: "mudah",
  },
  {
    id: "tiu-132",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Andi berangkat bersepeda dari rumah pukul 06.00 dengan kecepatan 20 km/jam. Pukul 06.30, Ayah menyusul Andi menggunakan sepeda motor dengan kecepatan 40 km/jam melalui rute yang sama. Pada pukul berapakah Ayah berhasil menyusul Andi?",
    options: [
      { key: "A", text: "06.45" },
      { key: "B", text: "07.00" },
      { key: "C", text: "07.15" },
      { key: "D", text: "07.30" },
      { key: "E", text: "08.00" },
    ],
    correctAnswer: "B",
    explanation:
      "Selisih waktu = 0,5 jam, sehingga jarak yang sudah ditempuh Andi saat Ayah berangkat = 20 x 0,5 = 10 km. Waktu menyusul = Selisih jarak / (v2 - v1) = 10 / (40 - 20) = 10 / 20 = 0,5 jam (30 menit) setelah Ayah berangkat. Jadi pukul 06.30 + 30 menit = 07.00.",
    difficulty: "mudah",
  },
  {
    id: "tiu-133",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Seorang pedagang membeli 1 kuintal beras seharga Rp1.100.000. Beras tersebut kemudian dijual eceran dengan harga Rp13.200 per kilogram. Persentase keuntungan yang diperoleh pedagang tersebut adalah...",
    options: [
      { key: "A", text: "15%" },
      { key: "B", text: "18%" },
      { key: "C", text: "20%" },
      { key: "D", text: "22%" },
      { key: "E", text: "25%" },
    ],
    correctAnswer: "C",
    explanation:
      "1 kuintal = 100 kg. Harga beli per kg = Rp1.100.000 / 100 = Rp11.000. Keuntungan per kg = Rp13.200 - Rp11.000 = Rp2.200. Persentase untung = (2.200 / 11.000) x 100% = 20%.",
    difficulty: "mudah",
  },
  {
    id: "tiu-134",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah toko memberikan diskon ganda (bertahap) 20% + 10% untuk pembelian jaket seharga Rp500.000. Berapakah harga akhir yang harus dibayar pembeli?",
    options: [
      { key: "A", text: "Rp350.000" },
      { key: "B", text: "Rp360.000" },
      { key: "C", text: "Rp375.000" },
      { key: "D", text: "Rp380.000" },
      { key: "E", text: "Rp400.000" },
    ],
    correctAnswer: "B",
    explanation:
      "Diskon pertama 20%: 500.000 x (1 - 0,20) = Rp400.000. Diskon kedua 10% dari harga setelah diskon pertama: 400.000 x (1 - 0,10) = Rp360.000.",
    difficulty: "mudah",
  },
  {
    id: "tiu-135",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Ani dapat menyelesaikan pengetikan sebuah laporan dalam waktu 6 jam, sedangkan Budi dapat menyelesaikan laporan yang sama dalam waktu 4 jam. Jika mereka bekerja sama mengetik laporan tersebut, waktu yang dibutuhkan adalah...",
    options: [
      { key: "A", text: "2 jam" },
      { key: "B", text: "2 jam 24 menit" },
      { key: "C", text: "2 jam 30 menit" },
      { key: "D", text: "2 jam 40 menit" },
      { key: "E", text: "3 jam" },
    ],
    correctAnswer: "B",
    explanation:
      "1/t = 1/6 + 1/4 = 2/12 + 3/12 = 5/12. Maka t = 12/5 = 2,4 jam = 2 jam + (0,4 x 60 menit) = 2 jam 24 menit.",
    difficulty: "mudah",
  },
  {
    id: "tiu-136",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Suatu proyek pembangunan direncanakan selesai dalam 30 hari oleh 15 pekerja. Setelah bekerja selama 6 hari, proyek dihentikan selama 4 hari karena cuaca buruk. Agar proyek tetap selesai tepat waktu, berapakah banyak pekerja tambahan yang dibutuhkan?",
    options: [
      { key: "A", text: "3 orang" },
      { key: "B", text: "4 orang" },
      { key: "C", text: "5 orang" },
      { key: "D", text: "6 orang" },
      { key: "E", text: "8 orang" },
    ],
    correctAnswer: "A",
    explanation:
      "Sisa hari rencana setelah kerja 6 hari = 30 - 6 = 24 hari (dengan 15 pekerja). Karena libur 4 hari, sisa waktu efektif = 24 - 4 = 20 hari. Perbandingan berbalik nilai: 24 x 15 = 20 x P => P = 360 / 20 = 18 pekerja. Jadi tambahan pekerja = 18 - 15 = 3 orang.",
    difficulty: "sedang",
  },
  {
    id: "tiu-137",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Dalam sebuah kelas terdapat 40 siswa. Sebanyak 22 siswa gemar matematika, 18 siswa gemar bahasa Inggris, dan 5 siswa tidak gemar keduanya. Banyaknya siswa yang gemar kedua mata pelajaran tersebut adalah...",
    options: [
      { key: "A", text: "3 orang" },
      { key: "B", text: "4 orang" },
      { key: "C", text: "5 orang" },
      { key: "D", text: "6 orang" },
      { key: "E", text: "7 orang" },
    ],
    correctAnswer: "C",
    explanation:
      "Total siswa = (M + B - Irisan) + Tidak Keduanya => 40 = (22 + 18 - x) + 5 => 40 = 45 - x => x = 5 orang.",
    difficulty: "mudah",
  },
  {
    id: "tiu-138",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Dari 8 orang kandidat pengurus organisasi, akan dipilih 3 orang untuk menjadi Ketua, Sekretaris, dan Bendahara. Banyaknya susunan pengurus berbeda yang mungkin terbentuk adalah...",
    options: [
      { key: "A", text: "56" },
      { key: "B", text: "168" },
      { key: "C", text: "336" },
      { key: "D", text: "512" },
      { key: "E", text: "720" },
    ],
    correctAnswer: "C",
    explanation:
      "Karena jabatan berbeda (memperhatikan urutan), gunakan permutasi P(8, 3) = 8 x 7 x 6 = 336.",
    difficulty: "mudah",
  },
  {
    id: "tiu-139",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Di dalam sebuah kotak terdapat 5 bola merah dan 3 bola biru. Jika diambil 2 bola sekaligus secara acak, peluang terambilnya 1 bola merah dan 1 bola biru adalah...",
    options: [
      { key: "A", text: "15/28" },
      { key: "B", text: "15/56" },
      { key: "C", text: "8/28" },
      { key: "D", text: "5/14" },
      { key: "E", text: "3/8" },
    ],
    correctAnswer: "A",
    explanation:
      "Total bola = 8. Banyak ruang sampel n(S) = C(8, 2) = (8 x 7)/2 = 28. Banyak kejadian 1 merah dan 1 biru = C(5, 1) x C(3, 1) = 5 x 3 = 15. Jadi peluangnya = 15/28.",
    difficulty: "sedang",
  },
  {
    id: "tiu-140",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Seorang peternak memiliki persediaan pakan yang cukup untuk 36 ekor sapi selama 15 hari. Jika peternak tersebut menjual 6 ekor sapinya, persediaan pakan tersebut akan habis dalam waktu...",
    options: [
      { key: "A", text: "16 hari" },
      { key: "B", text: "18 hari" },
      { key: "C", text: "20 hari" },
      { key: "D", text: "21 hari" },
      { key: "E", text: "24 hari" },
    ],
    correctAnswer: "B",
    explanation:
      "Sisa sapi = 36 - 6 = 30 ekor. Perbandingan berbalik nilai: 36 x 15 = 30 x H => H = 540 / 30 = 18 hari.",
    difficulty: "mudah",
  },
  {
    id: "tiu-141",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Rina menabung di bank sebesar Rp4.000.000 dengan suku bunga tunggal 6% per tahun. Setelah 8 bulan, jumlah tabungan Rina seluruhnya menjadi...",
    options: [
      { key: "A", text: "Rp4.120.000" },
      { key: "B", text: "Rp4.160.000" },
      { key: "C", text: "Rp4.180.000" },
      { key: "D", text: "Rp4.240.000" },
      { key: "E", text: "Rp4.320.000" },
    ],
    correctAnswer: "B",
    explanation:
      "Bunga 8 bulan = (8/12) x 6% x 4.000.000 = (2/3) x 240.000 = Rp160.000. Total tabungan = 4.000.000 + 160.000 = Rp4.160.000.",
    difficulty: "mudah",
  },
  {
    id: "tiu-142",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah mobil menempuh perjalanan dari kota P ke kota Q dengan kecepatan 60 km/jam dan kembali lagi dari kota Q ke kota P melalui rute yang sama dengan kecepatan 40 km/jam. Kecepatan rata-rata mobil untuk seluruh perjalanan pergi-pulang adalah...",
    options: [
      { key: "A", text: "45 km/jam" },
      { key: "B", text: "48 km/jam" },
      { key: "C", text: "50 km/jam" },
      { key: "D", text: "52 km/jam" },
      { key: "E", text: "54 km/jam" },
    ],
    correctAnswer: "B",
    explanation:
      "Untuk jarak pergi dan pulang yang sama, kecepatan rata-rata menggunakan rata-rata harmonik: v_rata = (2 x v1 x v2) / (v1 + v2) = (2 x 60 x 40) / (60 + 40) = 4800 / 100 = 48 km/jam.",
    difficulty: "sedang",
  },
  {
    id: "tiu-143",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Perbandingan uang Dani, Eka, dan Fajar adalah 2 : 3 : 5. Jika selisih uang Fajar dan Dani adalah Rp180.000, maka jumlah uang mereka bertiga adalah...",
    options: [
      { key: "A", text: "Rp500.000" },
      { key: "B", text: "Rp540.000" },
      { key: "C", text: "Rp600.000" },
      { key: "D", text: "Rp640.000" },
      { key: "E", text: "Rp720.000" },
    ],
    correctAnswer: "C",
    explanation:
      "Selisih rasio Fajar dan Dani = 5 - 2 = 3 bagian = Rp180.000, sehingga 1 bagian = Rp60.000. Jumlah rasio bertiga = 2 + 3 + 5 = 10 bagian. Jadi jumlah uang mereka = 10 x 60.000 = Rp600.000.",
    difficulty: "mudah",
  },
  {
    id: "tiu-144",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Lima tahun yang lalu, usia Ayah 4 kali usia Budi. Lima tahun yang akan datang, usia Ayah menjadi 2 kali usia Budi. Berapakah usia Budi sekarang?",
    options: [
      { key: "A", text: "8 tahun" },
      { key: "B", text: "10 tahun" },
      { key: "C", text: "12 tahun" },
      { key: "D", text: "14 tahun" },
      { key: "E", text: "15 tahun" },
    ],
    correctAnswer: "B",
    explanation:
      "Misal usia Ayah = A dan Budi = B sekarang. (1) A - 5 = 4(B - 5) => A = 4B - 15. (2) A + 5 = 2(B + 5) => A = 2B + 5. Samakan: 4B - 15 = 2B + 5 => 2B = 20 => B = 10 tahun. (Cek: A = 25; 5 tahun lalu 20 = 4x5; 5 tahun lagi 30 = 2x15).",
    difficulty: "sedang",
  },
  {
    id: "tiu-145",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah keran air dapat mengisi penuh sebuah bak mandi berukuran 120 cm x 80 cm x 50 cm dalam waktu 24 menit. Debit air yang mengalir dari keran tersebut adalah...",
    options: [
      { key: "A", text: "15 liter/menit" },
      { key: "B", text: "18 liter/menit" },
      { key: "C", text: "20 liter/menit" },
      { key: "D", text: "24 liter/menit" },
      { key: "E", text: "25 liter/menit" },
    ],
    correctAnswer: "C",
    explanation:
      "Volume bak = 120 x 80 x 50 = 480.000 cm^3 = 480 liter (karena 1 liter = 1.000 cm^3). Debit = Volume / Waktu = 480 / 24 = 20 liter/menit.",
    difficulty: "mudah",
  },
  {
    id: "tiu-146",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah koperasi menjual sebuah tas dengan harga Rp210.000 dan mengalami kerugian sebesar 12,5% dari harga belinya. Harga beli tas tersebut adalah...",
    options: [
      { key: "A", text: "Rp225.000" },
      { key: "B", text: "Rp230.000" },
      { key: "C", text: "Rp240.000" },
      { key: "D", text: "Rp245.000" },
      { key: "E", text: "Rp250.000" },
    ],
    correctAnswer: "C",
    explanation:
      "Rugi 12,5% berarti harga jual = (100% - 12,5%) = 87,5% = 7/8 dari harga beli. Maka Harga Beli = (8/7) x 210.000 = 8 x 30.000 = Rp240.000.",
    difficulty: "sedang",
  },
  {
    id: "tiu-147",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Rata-rata nilai ujian matematika kelas A (24 siswa) adalah 78, sedangkan rata-rata kelas B (16 siswa) adalah 83. Jika nilai kedua kelas digabungkan, rata-ratanya menjadi...",
    options: [
      { key: "A", text: "79,5" },
      { key: "B", text: "80,0" },
      { key: "C", text: "80,5" },
      { key: "D", text: "81,0" },
      { key: "E", text: "81,5" },
    ],
    correctAnswer: "B",
    explanation:
      "Rata-rata gabungan = ((24 x 78) + (16 x 83)) / (24 + 16) = (1872 + 1328) / 40 = 3200 / 40 = 80,0.",
    difficulty: "mudah",
  },
  {
    id: "tiu-148",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Dari 10 soal ujian, seorang peserta diwajibkan mengerjakan 8 soal dengan syarat soal nomor 1 sampai 3 wajib dikerjakan. Banyaknya pilihan kombinasi soal yang dapat dikerjakan peserta tersebut adalah...",
    options: [
      { key: "A", text: "21" },
      { key: "B", text: "28" },
      { key: "C", text: "35" },
      { key: "D", text: "42" },
      { key: "E", text: "45" },
    ],
    correctAnswer: "A",
    explanation:
      "Karena 3 soal (nomor 1-3) wajib dikerjakan, peserta tinggal memilih 8 - 3 = 5 soal lagi dari 10 - 3 = 7 soal yang tersisa. Banyak cara = C(7, 5) = C(7, 2) = (7 x 6) / 2 = 21.",
    difficulty: "sedang",
  },
  {
    id: "tiu-149",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah peta dibuat dengan skala 1 : 250.000. Jika jarak antara dua kota pada peta tersebut adalah 12 cm, maka jarak sebenarnya antara kedua kota tersebut adalah...",
    options: [
      { key: "A", text: "25 km" },
      { key: "B", text: "30 km" },
      { key: "C", text: "35 km" },
      { key: "D", text: "40 km" },
      { key: "E", text: "300 km" },
    ],
    correctAnswer: "B",
    explanation:
      "Jarak sebenarnya = 12 x 250.000 cm = 3.000.000 cm = 30 km (dibagi 100.000).",
    difficulty: "mudah",
  },
  {
    id: "tiu-150",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Pipa A dapat mengisi kolam hingga penuh dalam 3 jam, pipa B dapat mengisi kolam yang sama dalam 6 jam, sedangkan pipa pembuangan C dapat menguras kolam penuh dalam 4 jam. Jika ketiga pipa dibuka bersamaan saat kolam kosong, kolam akan terisi penuh dalam waktu...",
    options: [
      { key: "A", text: "3 jam" },
      { key: "B", text: "3,5 jam" },
      { key: "C", text: "4 jam" },
      { key: "D", text: "4,5 jam" },
      { key: "E", text: "5 jam" },
    ],
    correctAnswer: "C",
    explanation:
      "Laju bersih = 1/3 + 1/6 - 1/4 = 4/12 + 2/12 - 3/12 = 3/12 = 1/4 kolam/jam. Jadi kolam akan penuh dalam waktu 4 jam.",
    difficulty: "sedang",
  },
  {
    id: "tiu-151",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Dua buah dadu bersisi enam dilempar undi secara bersamaan satu kali. Peluang munculnya mata dadu berjumlah 7 atau 10 adalah...",
    options: [
      { key: "A", text: "1/6" },
      { key: "B", text: "2/9" },
      { key: "C", text: "1/4" },
      { key: "D", text: "5/18" },
      { key: "E", text: "1/3" },
    ],
    correctAnswer: "C",
    explanation:
      "Total ruang sampel = 36. Jumlah 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1) ada 6. Jumlah 10: (4,6),(5,5),(6,4) ada 3. Total kejadian = 6 + 3 = 9. Peluang = 9/36 = 1/4.",
    difficulty: "sedang",
  },
  {
    id: "tiu-152",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Seorang pegawai mendapat kenaikan gaji sebesar 15% dari gaji sebelumnya. Jika gajinya sekarang menjadi Rp5.750.000, berapakah gaji pegawai tersebut sebelum naik?",
    options: [
      { key: "A", text: "Rp4.800.000" },
      { key: "B", text: "Rp4.900.000" },
      { key: "C", text: "Rp5.000.000" },
      { key: "D", text: "Rp5.100.000" },
      { key: "E", text: "Rp5.250.000" },
    ],
    correctAnswer: "C",
    explanation:
      "Gaji sekarang = 115% dari gaji awal. Jadi gaji awal = (100/115) x 5.750.000 = 100 x 50.000 = Rp5.000.000.",
    difficulty: "mudah",
  },
  {
    id: "tiu-153",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah taman berbentuk persegi panjang dengan panjang (3x + 2) meter dan lebar (2x - 1) meter. Jika keliling taman tersebut adalah 52 meter, maka luas taman tersebut adalah...",
    options: [
      { key: "A", text: "144 m^2" },
      { key: "B", text: "153 m^2" },
      { key: "C", text: "160 m^2" },
      { key: "D", text: "170 m^2" },
      { key: "E", text: "180 m^2" },
    ],
    correctAnswer: "B",
    explanation:
      "Keliling = 2(p + l) = 52 => p + l = 26. (3x + 2) + (2x - 1) = 26 => 5x + 1 = 26 => 5x = 25 => x = 5. Maka p = 3(5) + 2 = 17 m dan l = 2(5) - 1 = 9 m. Luas = 17 x 9 = 153 m^2.",
    difficulty: "sedang",
  },
  {
    id: "tiu-154",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah konveksi dengan 6 mesin jahit mampu memproduksi 300 potong baju dalam waktu 5 hari. Berapa potong baju yang dapat diproduksi jika konveksi tersebut menggunakan 8 mesin jahit selama 7 hari?",
    options: [
      { key: "A", text: "480 potong" },
      { key: "B", text: "520 potong" },
      { key: "C", text: "560 potong" },
      { key: "D", text: "600 potong" },
      { key: "E", text: "640 potong" },
    ],
    correctAnswer: "C",
    explanation:
      "Kapasitas 1 mesin per hari = 300 / (6 x 5) = 300 / 30 = 10 potong/mesin/hari. Maka dengan 8 mesin selama 7 hari = 8 x 7 x 10 = 560 potong baju.",
    difficulty: "mudah",
  },
  {
    id: "tiu-155",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Dari 60 pelamar kerja, 35 orang menguasai bahasa Inggris, 28 orang menguasai bahasa Mandarin, dan 12 orang tidak menguasai keduanya. Banyaknya pelamar yang HANYA menguasai bahasa Inggris saja adalah...",
    options: [
      { key: "A", text: "15 orang" },
      { key: "B", text: "20 orang" },
      { key: "C", text: "23 orang" },
      { key: "D", text: "25 orang" },
      { key: "E", text: "27 orang" },
    ],
    correctAnswer: "B",
    explanation:
      "Yang menguasai minimal satu bahasa = 60 - 12 = 48 orang. Irisan (keduanya) = 35 + 28 - 48 = 15 orang. Yang HANYA menguasai bahasa Inggris = 35 - 15 = 20 orang.",
    difficulty: "sedang",
  },
  {
    id: "tiu-156",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Kereta api A sepanjang 150 meter melaju dengan kecepatan 72 km/jam. Kereta tersebut akan melewati jembatan sepanjang 250 meter. Waktu yang dibutuhkan kereta sejak bagian depan memasuki jembatan hingga bagian belakang kereta keluar seluruhnya dari jembatan adalah...",
    options: [
      { key: "A", text: "15 detik" },
      { key: "B", text: "18 detik" },
      { key: "C", text: "20 detik" },
      { key: "D", text: "25 detik" },
      { key: "E", text: "30 detik" },
    ],
    correctAnswer: "C",
    explanation:
      "Kecepatan = 72 km/jam = 72.000 / 3.600 = 20 m/detik. Total jarak tempuh = panjang kereta + panjang jembatan = 150 + 250 = 400 meter. Waktu = 400 / 20 = 20 detik.",
    difficulty: "sedang",
  },
  {
    id: "tiu-157",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Dari angka-angka 1, 2, 3, 4, 5, dan 6 akan disusun bilangan ratusan genap yang terdiri atas 3 angka berbeda. Banyaknya bilangan yang dapat dibentuk adalah...",
    options: [
      { key: "A", text: "40" },
      { key: "B", text: "48" },
      { key: "C", text: "60" },
      { key: "D", text: "72" },
      { key: "E", text: "120" },
    ],
    correctAnswer: "C",
    explanation:
      "Bilangan genap -> digit satuan harus dipilih dari {2, 4, 6} (ada 3 pilihan). Digit ratusan dapat diisi dari sisa 5 angka (5 pilihan). Digit puluhan dari sisa 4 angka (4 pilihan). Total = 5 x 4 x 3 = 60 bilangan.",
    difficulty: "sedang",
  },
  {
    id: "tiu-158",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Harga 3 buku tulis dan 2 pensil adalah Rp19.000, sedangkan harga 2 buku tulis dan 3 pensil adalah Rp16.000. Harga 1 buku tulis dan 1 pensil adalah...",
    options: [
      { key: "A", text: "Rp6.000" },
      { key: "B", text: "Rp6.500" },
      { key: "C", text: "Rp7.000" },
      { key: "D", text: "Rp7.500" },
      { key: "E", text: "Rp8.000" },
    ],
    correctAnswer: "C",
    explanation:
      "Jumlahkan kedua persamaan: (3b + 2p) + (2b + 3p) = 19.000 + 16.000 => 5b + 5p = 35.000 => b + p = Rp7.000.",
    difficulty: "mudah",
  },
  {
    id: "tiu-159",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah gedung pertunjukan memiliki 12 baris kursi. Baris paling depan berisi 18 kursi, baris kedua 21 kursi, baris ketiga 24 kursi, dan seterusnya selalu bertambah 3 kursi. Jumlah seluruh kursi di gedung tersebut adalah...",
    options: [
      { key: "A", text: "396 kursi" },
      { key: "B", text: "414 kursi" },
      { key: "C", text: "420 kursi" },
      { key: "D", text: "432 kursi" },
      { key: "E", text: "450 kursi" },
    ],
    correctAnswer: "B",
    explanation:
      "Deret aritmetika dengan a = 18, b = 3, n = 12. S_12 = (12/2) x (2(18) + (12 - 1)(3)) = 6 x (36 + 33) = 6 x 69 = 414 kursi.",
    difficulty: "sedang",
  },
  {
    id: "tiu-160",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Pak Hendra membeli 2 karung beras jenis A seharga Rp300.000/karung (bruto 25 kg, tara 2%) dan 3 karung beras jenis B seharga Rp250.000/karung (bruto 25 kg, tara 2%). Jika beras dicampur dan dijual seluruhnya dengan harga Rp12.000 per kg neto, berapakah keuntungan yang diperoleh Pak Hendra?",
    options: [
      { key: "A", text: "Rp100.000" },
      { key: "B", text: "Rp120.000" },
      { key: "C", text: "Rp130.000" },
      { key: "D", text: "Rp140.000" },
      { key: "E", text: "Rp150.000" },
    ],
    correctAnswer: "B",
    explanation:
      "Modal beli = (2 x 300.000) + (3 x 250.000) = 600.000 + 750.000 = Rp1.350.000. Total bruto 5 karung = 5 x 25 = 125 kg. Neto = 98% x 125 = 122,5 kg. Hasil jual = 122,5 x 12.000 = Rp1.470.000. Untung = 1.470.000 - 1.350.000 = Rp120.000.",
    difficulty: "sulit",
  },
  {
    id: "tiu-161",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "A dan B bekerja bersama menyelesaikan sebuah tugas dalam 12 hari. B dan C bekerja bersama menyelesaikan tugas yang sama dalam 15 hari, sedangkan A dan C dalam 20 hari. Jika A, B, dan C bekerja bersama-sama, tugas tersebut akan selesai dalam...",
    options: [
      { key: "A", text: "8 hari" },
      { key: "B", text: "9 hari" },
      { key: "C", text: "10 hari" },
      { key: "D", text: "11 hari" },
      { key: "E", text: "12 hari" },
    ],
    correctAnswer: "C",
    explanation:
      "1/A + 1/B = 1/12; 1/B + 1/C = 1/15; 1/A + 1/C = 1/20. Dijumlahkan: 2(1/A + 1/B + 1/C) = 1/12 + 1/15 + 1/20 = (5 + 4 + 3)/60 = 12/60 = 1/5. Maka 1/A + 1/B + 1/C = 1/10. Jadi selesai dalam 10 hari.",
    difficulty: "sulit",
  },
  {
    id: "tiu-162",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah koin dan sebuah dadu dilempar bersamaan sebanyak 120 kali. Frekuensi harapan munculnya gambar pada koin dan mata dadu faktor dari 6 adalah...",
    options: [
      { key: "A", text: "20 kali" },
      { key: "B", text: "30 kali" },
      { key: "C", text: "40 kali" },
      { key: "D", text: "45 kali" },
      { key: "E", text: "60 kali" },
    ],
    correctAnswer: "C",
    explanation:
      "P(Gambar) = 1/2. Faktor dari 6 pada dadu = {1, 2, 3, 6} (ada 4), sehingga P(faktor 6) = 4/6 = 2/3. Peluang gabungan = 1/2 x 2/3 = 1/3. Frekuensi harapan = (1/3) x 120 = 40 kali.",
    difficulty: "sedang",
  },
  {
    id: "tiu-163",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Dalam sebuah rapat yang dihadiri oleh 10 orang, setiap peserta saling berjabat tangan satu sama lain tepat satu kali. Banyaknya jabat tangan yang terjadi seluruhnya adalah...",
    options: [
      { key: "A", text: "40" },
      { key: "B", text: "45" },
      { key: "C", text: "50" },
      { key: "D", text: "90" },
      { key: "E", text: "100" },
    ],
    correctAnswer: "B",
    explanation:
      "Jabat tangan melibatkan 2 orang tanpa memperhatikan urutan: C(10, 2) = (10 x 9) / 2 = 45.",
    difficulty: "mudah",
  },
  {
    id: "tiu-164",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah mobil berangkat dari kota X pukul 08.15 menuju kota Y yang berjarak 210 km. Jika mobil melaju dengan kecepatan rata-rata 60 km/jam dan di tengah perjalanan berhenti untuk istirahat selama 25 menit, pada pukul berapakah mobil tiba di kota Y?",
    options: [
      { key: "A", text: "11.45" },
      { key: "B", text: "12.00" },
      { key: "C", text: "12.10" },
      { key: "D", text: "12.15" },
      { key: "E", text: "12.25" },
    ],
    correctAnswer: "C",
    explanation:
      "Waktu berkendara = 210 / 60 = 3,5 jam = 3 jam 30 menit. Ditambah istirahat 25 menit = 3 jam 55 menit. Tiba = 08.15 + 3 jam 55 menit = 12.10.",
    difficulty: "mudah",
  },
  {
    id: "tiu-165",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Rata-rata usia 5 orang anggota tim adalah 28 tahun. Jika seorang anggota berusia 36 tahun keluar dan digantikan oleh anggota baru, rata-rata usia tim tersebut menjadi 26 tahun. Berapakah usia anggota baru tersebut?",
    options: [
      { key: "A", text: "24 tahun" },
      { key: "B", text: "25 tahun" },
      { key: "C", text: "26 tahun" },
      { key: "D", text: "27 tahun" },
      { key: "E", text: "28 tahun" },
    ],
    correctAnswer: "C",
    explanation:
      "Total usia awal = 5 x 28 = 140 tahun. Total usia baru = 5 x 26 = 130 tahun (turun 10 tahun). Maka usia anggota baru = 36 - 10 = 26 tahun.",
    difficulty: "mudah",
  },
  {
    id: "tiu-166",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah drum berisi minyak goreng sebanyak 3/5 bagian. Setelah diambil 15 liter untuk dijual, minyak yang tersisa tinggal 3/8 bagian. Kapasitas penuh drum tersebut adalah...",
    options: [
      { key: "A", text: "60 liter" },
      { key: "B", text: "64 liter" },
      { key: "C", text: "66,7 liter" },
      { key: "D", text: "72 liter" },
      { key: "E", text: "80 liter" },
    ],
    correctAnswer: "C",
    explanation:
      "Selisih bagian = 3/5 - 3/8 = 24/40 - 15/40 = 9/40 bagian = 15 liter. Kapasitas penuh = 15 x (40/9) = 600 / 9 = 66,67 liter (atau 66 2/3 liter). Cek: 3/5 x 66,67 = 40 liter; 40 - 15 = 25 liter; 3/8 x 66,67 = 25 liter.",
    difficulty: "sulit",
  },
  {
    id: "tiu-167",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Suatu larutan alkohol berkadar 30% sebanyak 40 liter dicampur dengan 10 liter air murni. Kadar alkohol dalam campuran yang baru menjadi...",
    options: [
      { key: "A", text: "20%" },
      { key: "B", text: "22%" },
      { key: "C", text: "24%" },
      { key: "D", text: "25%" },
      { key: "E", text: "26%" },
    ],
    correctAnswer: "C",
    explanation:
      "Volume alkohol murni = 30% x 40 = 12 liter. Volume total campuran baru = 40 + 10 = 50 liter. Kadar alkohol baru = (12 / 50) x 100% = 24%.",
    difficulty: "sedang",
  },
  {
    id: "tiu-168",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Pada sebuah tempat parkir terdapat 45 kendaraan yang terdiri dari mobil (roda 4) dan sepeda motor (roda 2). Jika jumlah seluruh roda kendaraan adalah 126 buah, banyaknya mobil di tempat parkir tersebut adalah...",
    options: [
      { key: "A", text: "15" },
      { key: "B", text: "18" },
      { key: "C", text: "21" },
      { key: "D", text: "24" },
      { key: "E", text: "27" },
    ],
    correctAnswer: "B",
    explanation:
      "Misal mobil = m, motor = s. m + s = 45 => s = 45 - m. 4m + 2s = 126 => 4m + 2(45 - m) = 126 => 2m + 90 = 126 => 2m = 36 => m = 18 mobil.",
    difficulty: "mudah",
  },
  {
    id: "tiu-169",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah roda berputar sebanyak 500 kali untuk menempuh jarak 660 meter. Dengan menggunakan pi = 22/7, panjang jari-jari roda tersebut adalah...",
    options: [
      { key: "A", text: "14 cm" },
      { key: "B", text: "21 cm" },
      { key: "C", text: "28 cm" },
      { key: "D", text: "35 cm" },
      { key: "E", text: "42 cm" },
    ],
    correctAnswer: "B",
    explanation:
      "Jarak = 660 m = 66.000 cm. Keliling roda = 66.000 / 500 = 132 cm. Keliling = 2 x pi x r => 132 = 2 x (22/7) x r => 132 = (44/7) r => r = 132 x 7 / 44 = 3 x 7 = 21 cm.",
    difficulty: "sedang",
  },
  {
    id: "tiu-170",
    category: "TIU",
    subtopic: "Soal Cerita",
    question:
      "Sebuah panitia beranggotakan 4 orang akan dipilih dari 5 pria dan 4 wanita. Jika disyaratkan panitia harus terdiri dari paling sedikit 2 wanita, banyaknya cara pemilihan panitia yang mungkin adalah...",
    options: [
      { key: "A", text: "60" },
      { key: "B", text: "75" },
      { key: "C", text: "81" },
      { key: "D", text: "96" },
      { key: "E", text: "126" },
    ],
    correctAnswer: "C",
    explanation:
      "Kemungkinan komposisi (minimal 2 wanita): (1) 2W + 2P = C(4,2) x C(5,2) = 6 x 10 = 60. (2) 3W + 1P = C(4,3) x C(5,1) = 4 x 5 = 20. (3) 4W + 0P = C(4,4) x C(5,0) = 1 x 1 = 1. Total cara = 60 + 20 + 1 = 81.",
    difficulty: "sulit",
  },
];
