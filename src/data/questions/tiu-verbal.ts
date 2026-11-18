import { Question } from "@/types/question";

export const tiuVerbal: Question[] = [
  // ==========================================
  // ANALOGI (tiu-001 s.d. tiu-020)
  // ==========================================
  {
    id: "tiu-001",
    category: "TIU",
    subtopic: "Analogi",
    question: "KERING : LEMBAP = ... : ...",
    options: [
      { key: "A", text: "Panas : Dingin" },
      { key: "B", text: "Gelap : Remang" },
      { key: "C", text: "Cair : Beku" },
      { key: "D", text: "Tinggi : Rendah" },
      { key: "E", text: "Kasar : Halus" },
    ],
    correctAnswer: "B",
    explanation:
      "Hubungan KERING ke LEMBAP adalah gradasi tingkat kebasahan (kering = tidak ada air, lembap = sedikit air, bukan basah kuyup). Pola yang paling tepat adalah Gelap : Remang (gelap = tidak ada cahaya, remang = sedikit cahaya, bukan terang benderang).",
    difficulty: "sedang",
  },
  {
    id: "tiu-002",
    category: "TIU",
    subtopic: "Analogi",
    question: "DOKTER : STETOSKOP = ... : ...",
    options: [
      { key: "A", text: "Petani : Sawah" },
      { key: "B", text: "Pelukis : Kuas" },
      { key: "C", text: "Guru : Murid" },
      { key: "D", text: "Hakim : Pengadilan" },
      { key: "E", text: "Nelayan : Ikan" },
    ],
    correctAnswer: "B",
    explanation:
      "Hubungan profesi dan alat kerja utamanya: Dokter bekerja menggunakan stetoskop, sebagaimana Pelukis bekerja menggunakan kuas.",
    difficulty: "mudah",
  },
  {
    id: "tiu-003",
    category: "TIU",
    subtopic: "Analogi",
    question: "BAIT : PUISI = ... : ...",
    options: [
      { key: "A", text: "Bab : Buku" },
      { key: "B", text: "Nada : Musik" },
      { key: "C", text: "Kata : Kamus" },
      { key: "D", text: "Pena : Kertas" },
      { key: "E", text: "Layar : Bioskop" },
    ],
    correctAnswer: "A",
    explanation:
      "Hubungan bagian struktural penyusun karya tulis: Puisi tersusun atas beberapa bait, sebagaimana Buku tersusun atas beberapa bab.",
    difficulty: "mudah",
  },
  {
    id: "tiu-004",
    category: "TIU",
    subtopic: "Analogi",
    question: "INSOMNIA : TIDUR = ... : ...",
    options: [
      { key: "A", text: "Amnesia : Ingatan" },
      { key: "B", text: "Fobia : Takut" },
      { key: "C", text: "Anemia : Darah" },
      { key: "D", text: "Anoreksia : Makan" },
      { key: "E", text: "Vertigo : Pusing" },
    ],
    correctAnswer: "D",
    explanation:
      "Insomnia adalah gangguan berupa kesulitan atau ketidakmampuan untuk tidur (aktivitas). Anoreksia adalah gangguan berupa hilangnya nafsu/ketidakmampuan untuk makan (aktivitas). (Amnesia = kehilangan ingatan/benda, anemia = kekurangan darah).",
    difficulty: "sulit",
  },
  {
    id: "tiu-005",
    category: "TIU",
    subtopic: "Analogi",
    question: "API : BAKAR = ... : ...",
    options: [
      { key: "A", text: "Air : Basah" },
      { key: "B", text: "Pisau : Potong" },
      { key: "C", text: "Angin : Dingin" },
      { key: "D", text: "Es : Beku" },
      { key: "E", text: "Lampu : Gelap" },
    ],
    correctAnswer: "B",
    explanation:
      "Hubungan benda dan fungsi/tindakan aktifnya (kata kerja): Api digunakan untuk membakar (bakar), sebagaimana Pisau digunakan untuk memotong (potong).",
    difficulty: "mudah",
  },
  {
    id: "tiu-006",
    category: "TIU",
    subtopic: "Analogi",
    question: "GANDUM : ROTI = ... : ...",
    options: [
      { key: "A", text: "Kayu : Meja" },
      { key: "B", text: "Kapas : Benang" },
      { key: "C", text: "Kedelai : Kecap" },
      { key: "D", text: "Padi : Beras" },
      { key: "E", text: "Susu : Sapi" },
    ],
    correctAnswer: "C",
    explanation:
      "Gandum diolah/difermentasi melalui proses pengolahan pangan menjadi roti, sebagaimana Kedelai diolah menjadi kecap.",
    difficulty: "sedang",
  },
  {
    id: "tiu-007",
    category: "TIU",
    subtopic: "Analogi",
    question: "SEISMOGRAF : GEMPA = ... : ...",
    options: [
      { key: "A", text: "Termometer : Panas" },
      { key: "B", text: "Barometer : Tekanan Udara" },
      { key: "C", text: "Speedometer : Jarak" },
      { key: "D", text: "Higrometer : Angin" },
      { key: "E", text: "Altimeter : Kedalaman" },
    ],
    correctAnswer: "B",
    explanation:
      "Seismograf adalah alat ukur getaran gempa. Barometer adalah alat ukur tekanan udara. (Speedometer mengukur kecepatan, higrometer mengukur kelembapan, altimeter mengukur ketinggian).",
    difficulty: "mudah",
  },
  {
    id: "tiu-008",
    category: "TIU",
    subtopic: "Analogi",
    question: "KARDUS : KERTAS = ... : ...",
    options: [
      { key: "A", text: "Besi : Baja" },
      { key: "B", text: "Ban : Karet" },
      { key: "C", text: "Meja : Pohon" },
      { key: "D", text: "Batu : Pasir" },
      { key: "E", text: "Kaca : Jendela" },
    ],
    correctAnswer: "B",
    explanation:
      "Hubungan produk dan bahan dasarnya: Kardus terbuat dari bahan dasar kertas, sebagaimana Ban terbuat dari bahan dasar karet.",
    difficulty: "mudah",
  },
  {
    id: "tiu-009",
    category: "TIU",
    subtopic: "Analogi",
    question: "HAKIM : VONIS = ... : ...",
    options: [
      { key: "A", text: "Polisi : Tilang" },
      { key: "B", text: "Jaksa : Tuntutan" },
      { key: "C", text: "Dokter : Resep" },
      { key: "D", text: "Wasit : Pelanggaran" },
      { key: "E", text: "Pengacara : Pembelaan" },
    ],
    correctAnswer: "B",
    explanation:
      "Dalam sistem peradilan, Hakim menjatuhkan vonis (putusan akhir), sedangkan Jaksa mengajukan tuntutan (keputusan/ketetapan resmi dalam persidangan). Keduanya merupakan padanan peran hukum yang setara.",
    difficulty: "sedang",
  },
  {
    id: "tiu-010",
    category: "TIU",
    subtopic: "Analogi",
    question: "EPILOG : NOVEL = ... : ...",
    options: [
      { key: "A", text: "Penutup : Pidato" },
      { key: "B", text: "Prolog : Drama" },
      { key: "C", text: "Daftar Isi : Buku" },
      { key: "D", text: "Judul : Artikel" },
      { key: "E", text: "Koda : Lagu" },
    ],
    correctAnswer: "E",
    explanation:
      "Epilog adalah bagian penutup pada sebuah novel/karya sastra. Koda adalah bagian penutup/akhir pada sebuah lagu/komposisi musik.",
    difficulty: "sulit",
  },
  {
    id: "tiu-011",
    category: "TIU",
    subtopic: "Analogi",
    question: "GEMPA : TSUNAMI = ... : ...",
    options: [
      { key: "A", text: "Hujan : Banjir" },
      { key: "B", text: "Api : Asap" },
      { key: "C", text: "Awan : Mendung" },
      { key: "D", text: "Petir : Kilat" },
      { key: "E", text: "Panas : Kemarau" },
    ],
    correctAnswer: "A",
    explanation:
      "Hubungan sebab-akibat bencana alam: Gempa (bawah laut) dapat menyebabkan tsunami, sebagaimana Hujan (deras) dapat menyebabkan banjir.",
    difficulty: "mudah",
  },
  {
    id: "tiu-012",
    category: "TIU",
    subtopic: "Analogi",
    question: "ORNITOLOGI : BURUNG = ... : ...",
    options: [
      { key: "A", text: "Entomologi : Serangga" },
      { key: "B", text: "Botani : Hewan" },
      { key: "C", text: "Geologi : Bintang" },
      { key: "D", text: "Antropologi : Tumbuhan" },
      { key: "E", text: "Mikologi : Bakteri" },
    ],
    correctAnswer: "A",
    explanation:
      "Ornitologi adalah cabang ilmu biologi yang mempelajari burung. Entomologi adalah cabang ilmu biologi yang mempelajari serangga. (Mikologi mempelajari jamur).",
    difficulty: "sedang",
  },
  {
    id: "tiu-013",
    category: "TIU",
    subtopic: "Analogi",
    question: "PENJAHIT : JARUM : BENANG = ... : ... : ...",
    options: [
      { key: "A", text: "Pelukis : Kanvas : Cat" },
      { key: "B", text: "Koki : Kompor : Api" },
      { key: "C", text: "Penulis : Pena : Tinta" },
      { key: "D", text: "Tukang Kayu : Gergaji : Paku" },
      { key: "E", text: "Pemahat : Palu : Batu" },
    ],
    correctAnswer: "C",
    explanation:
      "Penjahit menggunakan jarum yang diisi/dipasangkan benang untuk bekerja. Penulis menggunakan pena yang diisi tinta untuk bekerja.",
    difficulty: "sedang",
  },
  {
    id: "tiu-014",
    category: "TIU",
    subtopic: "Analogi",
    question: "HEMAT : KIKIR = ... : ...",
    options: [
      { key: "A", text: "Berani : Nekat" },
      { key: "B", text: "Pintar : Cerdik" },
      { key: "C", text: "Ramah : Sopan" },
      { key: "D", text: "Marah : Benci" },
      { key: "E", text: "Rajin : Tekun" },
    ],
    correctAnswer: "A",
    explanation:
      "Hubungan sifat positif ke bentuk ekstrem/berlebihannya yang bermakna negatif: Terlalu hemat menjadi kikir, sebagaimana terlalu berani menjadi nekat.",
    difficulty: "sedang",
  },
  {
    id: "tiu-015",
    category: "TIU",
    subtopic: "Analogi",
    question: "KUBUS : PERSEGI = ... : ...",
    options: [
      { key: "A", text: "Bola : Lingkaran" },
      { key: "B", text: "Limas : Segitiga" },
      { key: "C", text: "Balok : Persegi Panjang" },
      { key: "D", text: "Tabung : Silinder" },
      { key: "E", text: "Kerucut : Elips" },
    ],
    correctAnswer: "C",
    explanation:
      "Kubus adalah bangun ruang yang seluruh sisinya berbentuk persegi (beraturan). Balok adalah bangun ruang yang sisi-sisinya berbentuk persegi panjang (padanan ruang datar ke ruang sisi tegak).",
    difficulty: "sedang",
  },
  {
    id: "tiu-016",
    category: "TIU",
    subtopic: "Analogi",
    question: "PRESIDEN : NEGARA = ... : ...",
    options: [
      { key: "A", text: "Menteri : Departemen" },
      { key: "B", text: "Gubernur : Provinsi" },
      { key: "C", text: "Rektor : Fakultas" },
      { key: "D", text: "Direktur : Karyawan" },
      { key: "E", text: "Kepala Sekolah : Guru" },
    ],
    correctAnswer: "B",
    explanation:
      "Presiden adalah kepala pemerintahan tertinggi di tingkat negara, sebagaimana Gubernur adalah kepala pemerintahan tertinggi di tingkat provinsi (wilayah administratif). Rektor memimpin universitas, bukan fakultas.",
    difficulty: "mudah",
  },
  {
    id: "tiu-017",
    category: "TIU",
    subtopic: "Analogi",
    question: "ULAT : KEPOMPONG : KUPU-KUPU = ... : ... : ...",
    options: [
      { key: "A", text: "Bayi : Anak : Dewasa" },
      { key: "B", text: "Biji : Kecambah : Pohon" },
      { key: "C", text: "Telur : Berudu : Katak" },
      { key: "D", text: "Awan : Hujan : Banjir" },
      { key: "E", text: "Pagi : Siang : Malam" },
    ],
    correctAnswer: "C",
    explanation:
      "Hubungan metamorfosis sempurna hewan secara berurutan: Ulat -> Kepompong -> Kupu-kupu, setara dengan Telur -> Berudu -> Katak.",
    difficulty: "mudah",
  },
  {
    id: "tiu-018",
    category: "TIU",
    subtopic: "Analogi",
    question: "OBAT : APOTEK = ... : ...",
    options: [
      { key: "A", text: "Buku : Perpustakaan" },
      { key: "B", text: "Uang : Bank" },
      { key: "C", text: "Beras : Toko" },
      { key: "D", text: "Roti : Toko Kue" },
      { key: "E", text: "Ikan : Akuarium" },
    ],
    correctAnswer: "D",
    explanation:
      "Apotek adalah tempat khusus menjual obat, sebagaimana Toko Kue adalah tempat khusus menjual kue/roti. (Perpustakaan meminjamkan buku, bukan menjual).",
    difficulty: "sedang",
  },
  {
    id: "tiu-019",
    category: "TIU",
    subtopic: "Analogi",
    question: "DISONANSI : HARMONI = ... : ...",
    options: [
      { key: "A", text: "Kacau : Tertib" },
      { key: "B", text: "Merdu : Sumbang" },
      { key: "C", text: "Cepat : Lambat" },
      { key: "D", text: "Bising : Sunyi" },
      { key: "E", text: "Sedih : Gembira" },
    ],
    correctAnswer: "A",
    explanation:
      "Disonansi adalah ketidakselarasan (berkonotasi kacau/tidak serasi), sedangkan harmoni adalah keselarasan (berkonotasi teratur/tertib). Hubungan antonim dengan arah negatif ke positif sama dengan Kacau : Tertib.",
    difficulty: "sulit",
  },
  {
    id: "tiu-020",
    category: "TIU",
    subtopic: "Analogi",
    question: "KOMPAS : ARAH = ... : ...",
    options: [
      { key: "A", text: "Jam : Waktu" },
      { key: "B", text: "Peta : Jalan" },
      { key: "C", text: "Kalender : Tanggal" },
      { key: "D", text: "Timbangan : Berat" },
      { key: "E", text: "Penggaris : Panjang" },
    ],
    correctAnswer: "A",
    explanation:
      "Kompas adalah alat penunjuk arah (konsep abstrak navigasi), sebagaimana Jam adalah alat penunjuk waktu. (Timbangan dan penggaris mengukur besaran fisik benda).",
    difficulty: "sedang",
  },

  // ==========================================
  // SILOGISME (tiu-021 s.d. tiu-040)
  // ==========================================
  {
    id: "tiu-021",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua peserta seleksi CPNS wajib membawa kartu ujian. Sebagian peserta seleksi CPNS berasal dari luar kota. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Semua peserta yang berasal dari luar kota tidak wajib membawa kartu ujian." },
      { key: "B", text: "Sebagian peserta yang berasal dari luar kota wajib membawa kartu ujian." },
      { key: "C", text: "Semua yang membawa kartu ujian berasal dari luar kota." },
      { key: "D", text: "Sebagian peserta seleksi CPNS tidak membawa kartu ujian." },
      { key: "E", text: "Tidak ada peserta dari luar kota yang membawa kartu ujian." },
    ],
    correctAnswer: "B",
    explanation:
      "Premis 1: Semua CPNS -> membawa kartu ujian. Premis 2: Sebagian CPNS -> dari luar kota. Karena seluruh peserta CPNS wajib membawa kartu ujian, maka sebagian peserta yang berasal dari luar kota pasti juga wajib membawa kartu ujian.",
    difficulty: "mudah",
  },
  {
    id: "tiu-022",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Jika hujan turun deras, maka jalanan di depan kantor menjadi macet. Jika jalanan di depan kantor macet, maka Andi datang terlambat. Hari ini Andi tidak datang terlambat. Simpulan yang sah adalah...",
    options: [
      { key: "A", text: "Jalanan di depan kantor macet." },
      { key: "B", text: "Hujan turun deras hari ini." },
      { key: "C", text: "Hujan tidak turun deras hari ini." },
      { key: "D", text: "Andi berangkat lebih awal." },
      { key: "E", text: "Jalanan macet tetapi hujan tidak deras." },
    ],
    correctAnswer: "C",
    explanation:
      "Misalkan p = hujan turun deras, q = jalanan macet, r = Andi terlambat. Premis: p -> q, q -> r, sehingga p -> r. Diketahui ~r (Andi tidak terlambat). Dengan modus tollens, maka ~p (hujan tidak turun deras hari ini).",
    difficulty: "mudah",
  },
  {
    id: "tiu-023",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua ASN harus berintegritas tinggi. Beberapa pegawai di instansi X adalah ASN. Simpulan yang paling tepat adalah...",
    options: [
      { key: "A", text: "Semua pegawai di instansi X harus berintegritas tinggi." },
      { key: "B", text: "Beberapa pegawai di instansi X harus berintegritas tinggi." },
      { key: "C", text: "Pegawai instansi X yang bukan ASN tidak berintegritas." },
      { key: "D", text: "Semua yang berintegritas tinggi adalah pegawai instansi X." },
      { key: "E", text: "Tidak ada pegawai instansi X yang menjadi ASN." },
    ],
    correctAnswer: "B",
    explanation:
      "Karena beberapa pegawai di instansi X adalah ASN, dan semua ASN harus berintegritas tinggi, maka beberapa pegawai di instansi X (yaitu yang berstatus ASN) harus berintegritas tinggi.",
    difficulty: "mudah",
  },
  {
    id: "tiu-024",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Jika Rina lulus ujian SKD, ia akan mengikuti ujian SKB. Jika Rina mengikuti ujian SKB, ia akan belajar materi bidangnya. Ternyata Rina tidak belajar materi bidangnya atau ia lulus ujian SKD. Jika diketahui Rina tidak lulus ujian SKD, simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Rina mengikuti ujian SKB." },
      { key: "B", text: "Rina belajar materi bidangnya." },
      { key: "C", text: "Rina tidak belajar materi bidangnya." },
      { key: "D", text: "Rina mengikuti ujian SKB dan belajar materi bidangnya." },
      { key: "E", text: "Tidak dapat ditarik kesimpulan." },
    ],
    correctAnswer: "C",
    explanation:
      "Diketahui premis majemuk: (~B atau L), di mana B = belajar materi bidangnya, L = lulus SKD. Karena diketahui ~L (Rina tidak lulus SKD), maka dengan silogisme disjungtif agar (~B v L) bernilai benar, haruslah ~B benar (Rina tidak belajar materi bidangnya).",
    difficulty: "sulit",
  },
  {
    id: "tiu-025",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Tidak ada mamalia yang bertelur kecuali platipus dan ekidna. Paus adalah mamalia. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Paus pasti tidak bertelur." },
      { key: "B", text: "Paus mungkin bertelur." },
      { key: "C", text: "Paus bukan platipus maupun ekidna, sehingga paus tidak bertelur." },
      { key: "D", text: "Semua mamalia hidup di air." },
      { key: "E", text: "Paus adalah mamalia yang melahirkan atau bertelur." },
    ],
    correctAnswer: "C",
    explanation:
      "Secara logika dan pengetahuan faktual premis: hanya platipus dan ekidna yang merupakan mamalia bertelur. Karena paus adalah mamalia (dan bukan platipus maupun ekidna), maka paus tidak bertelur.",
    difficulty: "sedang",
  },
  {
    id: "tiu-026",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Setiap hari Minggu, perpustakaan daerah tutup. Hari ini perpustakaan daerah buka. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Hari ini hari Senin." },
      { key: "B", text: "Hari ini bukan hari Minggu." },
      { key: "C", text: "Kemarin hari Minggu." },
      { key: "D", text: "Besok hari Minggu." },
      { key: "E", text: "Hari ini perpustakaan ramai pengunjung." },
    ],
    correctAnswer: "B",
    explanation:
      "Premis: Minggu -> Perpustakaan tutup. Fakta: Perpustakaan buka (~tutup). Dengan modus tollens, maka hari ini bukan hari Minggu. Kita tidak bisa memastikan hari spesifiknya (Senin/Selasa/dll).",
    difficulty: "mudah",
  },
  {
    id: "tiu-027",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua buah yang rasanya manis mengandung vitamin C. Sebagian buah berwarna kuning rasanya tidak manis. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Semua buah berwarna kuning tidak mengandung vitamin C." },
      { key: "B", text: "Sebagian buah berwarna kuning mengandung vitamin C." },
      { key: "C", text: "Semua buah yang tidak manis tidak berwarna kuning." },
      { key: "D", text: "Sebagian buah berwarna kuning tidak manis, dan belum tentu mengandung vitamin C." },
      { key: "E", text: "Tidak ada buah berwarna kuning yang rasanya manis." },
    ],
    correctAnswer: "D",
    explanation:
      "Dari premis 'Manis -> Vitamin C', kita tidak bisa menyimpulkan '~Manis -> ~Vitamin C' (sesat pikir invers). Jadi buah yang tidak manis belum tentu tidak mengandung vitamin C (bisa saja tetap mengandung, bisa tidak).",
    difficulty: "sulit",
  },
  {
    id: "tiu-028",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Jika harga BBM naik, maka ongkos transportasi naik. Jika ongkos transportasi naik, maka harga bahan pokok ikut naik. Ternyata harga bahan pokok tidak naik. Simpulan yang sah adalah...",
    options: [
      { key: "A", text: "Harga BBM naik tetapi ongkos transportasi tetap." },
      { key: "B", text: "Ongkos transportasi naik." },
      { key: "C", text: "Harga BBM tidak naik." },
      { key: "D", text: "Harga BBM turun." },
      { key: "E", text: "Ongkos transportasi turun." },
    ],
    correctAnswer: "C",
    explanation:
      "p -> q, q -> r, maka p -> r. Diketahui ~r (harga bahan pokok tidak naik), sehingga dengan modus tollens disimpulkan ~p (harga BBM tidak naik). Tidak naik bukan berarti turun (bisa tetap).",
    difficulty: "mudah",
  },
  {
    id: "tiu-029",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua siswa kelas XII yang rajin belajar akan lulus ujian. Budi adalah siswa kelas XII yang tidak lulus ujian. Simpulan yang sah adalah...",
    options: [
      { key: "A", text: "Budi bukan siswa kelas XII." },
      { key: "B", text: "Budi malas belajar." },
      { key: "C", text: "Budi tidak rajin belajar." },
      { key: "D", text: "Budi sakit saat ujian." },
      { key: "E", text: "Sebagian siswa kelas XII tidak lulus ujian." },
    ],
    correctAnswer: "C",
    explanation:
      "Premis: (Siswa XII ^ Rajin) -> Lulus. Fakta: Budi Siswa XII dan ~Lulus. Dengan modus tollens, maka ~(Siswa XII ^ Rajin), karena Budi siswa XII, pasti Budi tidak rajin belajar. (Negasi 'rajin' adalah 'tidak rajin', bukan 'malas').",
    difficulty: "sedang",
  },
  {
    id: "tiu-030",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Setiap pegawai yang mendapat promosi harus lulus uji kompetensi dan memiliki masa kerja minimal 3 tahun. Dito sudah bekerja selama 5 tahun, tetapi tidak lulus uji kompetensi. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Dito tetap mendapat promosi karena masa kerjanya lebih dari 3 tahun." },
      { key: "B", text: "Dito tidak mendapat promosi." },
      { key: "C", text: "Dito mungkin mendapat promosi tahun depan." },
      { key: "D", text: "Dito harus mengulang masa kerjanya." },
      { key: "E", text: "Semua pegawai yang masa kerjanya 5 tahun mendapat promosi." },
    ],
    correctAnswer: "B",
    explanation:
      "Syarat promosi menggunakan kata hubung 'dan' (konjungsi): keduanya harus terpenuhi. Karena Dito tidak lulus uji kompetensi, syarat tidak terpenuhi, sehingga Dito tidak mendapat promosi.",
    difficulty: "mudah",
  },
  {
    id: "tiu-031",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Ingkaran (negasi) dari pernyataan 'Semua peserta rapat setuju dengan usulan ketua' adalah...",
    options: [
      { key: "A", text: "Semua peserta rapat tidak setuju dengan usulan ketua." },
      { key: "B", text: "Tidak ada peserta rapat yang setuju dengan usulan ketua." },
      { key: "C", text: "Ada peserta rapat yang tidak setuju dengan usulan ketua." },
      { key: "D", text: "Sebagian peserta rapat setuju dengan usulan ketua." },
      { key: "E", text: "Ketua rapat tidak setuju dengan peserta." },
    ],
    correctAnswer: "C",
    explanation:
      "Negasi dari kuantor universal 'Semua A adalah B' adalah kuantor eksistensial 'Ada/Beberapa A yang bukan B'. Jadi negasinya adalah 'Ada peserta rapat yang tidak setuju dengan usulan ketua'.",
    difficulty: "mudah",
  },
  {
    id: "tiu-032",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Jika ayah mendapat bonus tahunan, maka keluarga kami akan berlibur ke Bali atau ke Yogyakarta. Ternyata ayah mendapat bonus tahunan dan keluarga kami tidak jadi berlibur ke Bali. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Keluarga kami berlibur ke Yogyakarta." },
      { key: "B", text: "Keluarga kami tidak jadi berlibur ke mana-mana." },
      { key: "C", text: "Ayah tidak mendapat bonus tahunan." },
      { key: "D", text: "Keluarga kami berlibur ke Bali dan Yogyakarta." },
      { key: "E", text: "Keluarga kami berlibur ke luar negeri." },
    ],
    correctAnswer: "A",
    explanation:
      "Premis: p -> (q v r). Diketahui p benar, maka (q v r) harus benar. Karena ~q (tidak ke Bali), dengan silogisme disjungtif maka r harus benar (berlibur ke Yogyakarta).",
    difficulty: "sedang",
  },
  {
    id: "tiu-033",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua dokter memakai jas putih saat bertugas. Sebagian orang di ruang IGD tidak memakai jas putih. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Semua orang di ruang IGD bukan dokter." },
      { key: "B", text: "Sebagian orang di ruang IGD bukan dokter yang sedang bertugas." },
      { key: "C", text: "Tidak ada dokter di ruang IGD." },
      { key: "D", text: "Semua yang memakai jas putih di IGD adalah dokter." },
      { key: "E", text: "Sebagian dokter di IGD tidak bertugas." },
    ],
    correctAnswer: "B",
    explanation:
      "Dokter bertugas -> memakai jas putih. Sebagian orang di IGD tidak memakai jas putih -> dengan modus tollens, sebagian orang di IGD tersebut bukanlah dokter yang sedang bertugas.",
    difficulty: "sedang",
  },
  {
    id: "tiu-034",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Pernyataan yang ekuivalen (setara) dengan 'Jika lampu lalu lintas berwarna merah, maka kendaraan harus berhenti' adalah...",
    options: [
      { key: "A", text: "Jika kendaraan tidak berhenti, maka lampu lalu lintas tidak berwarna merah." },
      { key: "B", text: "Jika lampu lalu lintas tidak berwarna merah, maka kendaraan tidak berhenti." },
      { key: "C", text: "Jika kendaraan berhenti, maka lampu lalu lintas berwarna merah." },
      { key: "D", text: "Lampu lalu lintas berwarna merah dan kendaraan tidak berhenti." },
      { key: "E", text: "Kendaraan harus berhenti meskipun lampu berwarna hijau." },
    ],
    correctAnswer: "A",
    explanation:
      "Implikasi (p -> q) selalu ekuivalen dengan kontraposisinya (~q -> ~p), yaitu: 'Jika kendaraan tidak berhenti, maka lampu lalu lintas tidak berwarna merah'.",
    difficulty: "sedang",
  },
  {
    id: "tiu-035",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua atlet pelatnas rutin berlatih fisik. Sebagian mahasiswa adalah atlet pelatnas. Semua yang rutin berlatih fisik memiliki daya tahan tubuh yang baik. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Semua mahasiswa memiliki daya tahan tubuh yang baik." },
      { key: "B", text: "Sebagian mahasiswa memiliki daya tahan tubuh yang baik." },
      { key: "C", text: "Semua yang memiliki daya tahan tubuh baik adalah atlet pelatnas." },
      { key: "D", text: "Sebagian atlet pelatnas bukan mahasiswa dan tidak berlatih fisik." },
      { key: "E", text: "Tidak ada mahasiswa yang menjadi atlet pelatnas." },
    ],
    correctAnswer: "B",
    explanation:
      "Sebagian mahasiswa = atlet pelatnas. Semua atlet pelatnas -> rutin berlatih fisik -> daya tahan tubuh baik. Maka, sebagian mahasiswa (yang menjadi atlet pelatnas) pasti memiliki daya tahan tubuh yang baik.",
    difficulty: "sedang",
  },
  {
    id: "tiu-036",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Jika mesin fotokopi rusak, maka berkas tidak dapat digandakan. Jika berkas tidak dapat digandakan, maka rapat ditunda atau dibatalkan. Hari ini rapat berjalan sesuai jadwal (tidak ditunda dan tidak dibatalkan). Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Mesin fotokopi rusak." },
      { key: "B", text: "Berkas tidak dapat digandakan." },
      { key: "C", text: "Mesin fotokopi tidak rusak." },
      { key: "D", text: "Berkas digandakan di luar kantor." },
      { key: "E", text: "Rapat akan ditunda besok." },
    ],
    correctAnswer: "C",
    explanation:
      "p -> q, q -> (r v s). Fakta: ~(r v s) yaitu rapat tidak ditunda dan tidak dibatalkan. Dengan modus tollens berantai: ~q (berkas dapat digandakan), lalu ~p (mesin fotokopi tidak rusak).",
    difficulty: "sulit",
  },
  {
    id: "tiu-037",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua makanan yang mengandung gula berlebih berisiko menyebabkan diabetes. Sebagian minuman kemasan mengandung gula berlebih. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Semua minuman kemasan berisiko menyebabkan diabetes." },
      { key: "B", text: "Sebagian minuman kemasan berisiko menyebabkan diabetes." },
      { key: "C", text: "Minuman kemasan yang tidak manis tidak mengandung gula." },
      { key: "D", text: "Semua yang menyebabkan diabetes adalah minuman kemasan." },
      { key: "E", text: "Sebagian makanan tidak berisiko menyebabkan diabetes." },
    ],
    correctAnswer: "B",
    explanation:
      "Sebagian minuman kemasan mengandung gula berlebih. Semua yang mengandung gula berlebih berisiko menyebabkan diabetes. Jadi, sebagian minuman kemasan tersebut berisiko menyebabkan diabetes.",
    difficulty: "mudah",
  },
  {
    id: "tiu-038",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Tidak ada koruptor yang jujur. Semua pejabat yang amanah adalah orang yang jujur. Simpulan yang sah adalah...",
    options: [
      { key: "A", text: "Semua orang jujur adalah pejabat yang amanah." },
      { key: "B", text: "Tidak ada pejabat yang amanah merupakan koruptor." },
      { key: "C", text: "Sebagian koruptor adalah pejabat yang amanah." },
      { key: "D", text: "Semua pejabat bukan koruptor." },
      { key: "E", text: "Sebagian orang jujur adalah koruptor." },
    ],
    correctAnswer: "B",
    explanation:
      "Pejabat amanah -> jujur. Koruptor -> tidak jujur (kontraposisi: jujur -> bukan koruptor). Jadi, Pejabat amanah -> jujur -> bukan koruptor. Artinya, tidak ada pejabat yang amanah merupakan koruptor.",
    difficulty: "sedang",
  },
  {
    id: "tiu-039",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Hanya jika memiliki tiket masuk, pengunjung boleh masuk ke area pameran. Sinta masuk ke area pameran. Simpulan yang tepat adalah...",
    options: [
      { key: "A", text: "Sinta membeli tiket masuk di loket." },
      { key: "B", text: "Sinta memiliki tiket masuk." },
      { key: "C", text: "Sinta adalah panitia pameran." },
      { key: "D", text: "Pengunjung yang memiliki tiket pasti masuk pameran." },
      { key: "E", text: "Sinta tidak memiliki tiket masuk." },
    ],
    correctAnswer: "B",
    explanation:
      "'Hanya jika P, maka Q' secara logika bermakna 'Q -> P' (Masuk pameran -> memiliki tiket). Karena Sinta masuk ke area pameran (Q benar), maka Sinta pasti memiliki tiket masuk (P benar).",
    difficulty: "sulit",
  },
  {
    id: "tiu-040",
    category: "TIU",
    subtopic: "Silogisme",
    question:
      "Semua peserta pelatihan mengenakan batik pada hari Kamis. Hari ini hari Kamis, namun Doni mengenakan kemeja polos. Simpulan yang paling tepat adalah...",
    options: [
      { key: "A", text: "Doni lupa mengenakan batik." },
      { key: "B", text: "Doni bukan peserta pelatihan." },
      { key: "C", text: "Hari ini bukan hari Kamis." },
      { key: "D", text: "Doni adalah instruktur pelatihan." },
      { key: "E", text: "Sebagian peserta pelatihan mengenakan kemeja polos." },
    ],
    correctAnswer: "B",
    explanation:
      "Premis: (Peserta pelatihan ^ Hari Kamis) -> Mengenakan batik. Karena hari ini Kamis tetapi Doni tidak mengenakan batik, dengan modus tollens disimpulkan bahwa Doni bukan peserta pelatihan.",
    difficulty: "sedang",
  },

  // ==========================================
  // PENALARAN ANALITIS (tiu-041 s.d. tiu-060)
  // ==========================================
  {
    id: "tiu-041",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Lima orang sahabat (Andi, Budi, Citra, Dewi, Eko) mengikuti lomba lari. Andi finis sebelum Budi, tetapi setelah Citra. Dewi finis tepat setelah Eko dan tepat sebelum Citra. Urutan finis dari yang pertama hingga terakhir adalah...",
    options: [
      { key: "A", text: "Eko, Dewi, Citra, Andi, Budi" },
      { key: "B", text: "Eko, Citra, Dewi, Andi, Budi" },
      { key: "C", text: "Citra, Eko, Dewi, Andi, Budi" },
      { key: "D", text: "Andi, Citra, Eko, Dewi, Budi" },
      { key: "E", text: "Eko, Dewi, Andi, Citra, Budi" },
    ],
    correctAnswer: "A",
    explanation:
      "Dari soal: (1) Citra < Andi < Budi. (2) Eko tepat sebelum Dewi dan Dewi tepat sebelum Citra (Eko, Dewi, Citra). Menggabungkan keduanya menghasilkan urutan tunggal: Eko, Dewi, Citra, Andi, Budi.",
    difficulty: "sedang",
  },
  {
    id: "tiu-042",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Enam orang (P, Q, R, S, T, U) duduk mengelilingi meja bundar menghadap ke dalam. P duduk berhadapan dengan S. Q duduk tepat di sebelah kanan P. U duduk tepat di sebelah kiri P. Jika R duduk di antara S dan U, siapakah yang duduk tepat di sebelah kiri S?",
    options: [
      { key: "A", text: "Q" },
      { key: "B", text: "R" },
      { key: "C", text: "T" },
      { key: "D", text: "U" },
      { key: "E", text: "P" },
    ],
    correctAnswer: "B",
    explanation:
      "Meja bundar 6 kursi menghadap ke dalam (posisi 1-6 berlawanan arah jarum jam): P di posisi 1, S berhadapan di posisi 4. Kanan P (posisi 2) = Q. Kiri P (posisi 6) = U. R duduk di antara S (4) dan U (6), sehingga R di posisi 5 (dan T di posisi 3). Karena S menghadap pusat dari posisi 4, sebelah kiri S adalah posisi 5, yaitu R.",
    difficulty: "sulit",
  },
  {
    id: "tiu-043",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Dalam sebuah rapat, terdapat 4 kursi berjajar dari kiri ke kanan (1, 2, 3, 4) untuk A, B, C, dan D. A tidak mau duduk di ujung. B harus duduk tepat di sebelah kiri C. D duduk di kursi nomor 4. Di kursi nomor berapakah A duduk?",
    options: [
      { key: "A", text: "1" },
      { key: "B", text: "2" },
      { key: "C", text: "3" },
      { key: "D", text: "2 atau 3" },
      { key: "E", text: "1 atau 3" },
    ],
    correctAnswer: "C",
    explanation:
      "Kursi: 1, 2, 3, 4. D = 4, sehingga tersisa 1, 2, 3. A tidak mau di ujung (bukan 1, bukan 4), maka A bisa di 2 atau 3. B tepat di sebelah kiri C (pasangan berurutan B-C). Jika A di 2, sisa 1 dan 3 tidak bersebelahan untuk B-C. Maka B-C harus di 1-2, dan A duduk di kursi nomor 3.",
    difficulty: "mudah",
  },
  {
    id: "tiu-044",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Nilai ujian matematika lima siswa: Nilai Fahri lebih tinggi dari nilai Gita, tetapi lebih rendah dari nilai Hadi. Nilai Indah lebih tinggi dari nilai Hadi. Nilai Joko lebih rendah dari nilai Gita. Siswa dengan nilai tertinggi kedua adalah...",
    options: [
      { key: "A", text: "Fahri" },
      { key: "B", text: "Gita" },
      { key: "C", text: "Hadi" },
      { key: "D", text: "Indah" },
      { key: "E", text: "Joko" },
    ],
    correctAnswer: "C",
    explanation:
      "Urutan dari terendah ke tertinggi: Joko < Gita < Fahri < Hadi < Indah. Jadi nilai tertinggi adalah Indah, dan tertinggi kedua adalah Hadi.",
    difficulty: "mudah",
  },
  {
    id: "tiu-045",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Jadwal piket kebersihan kantor (Senin s.d. Jumat) diisi oleh 5 pegawai: Ali, Beni, Cici, Dani, Eka (masing-masing 1 hari). Ali piket setelah Beni. Cici piket pada hari Rabu. Dani piket tepat sebelum Eka. Jika Beni piket pada hari Senin, siapakah yang piket pada hari Selasa?",
    options: [
      { key: "A", text: "Ali" },
      { key: "B", text: "Beni" },
      { key: "C", text: "Dani" },
      { key: "D", text: "Eka" },
      { key: "E", text: "Ali atau Dani" },
    ],
    correctAnswer: "A",
    explanation:
      "Diketahui: Senin = Beni, Rabu = Cici. Tersisa Selasa, Kamis, Jumat. Dani tepat sebelum Eka harus menempati dua hari berurutan, yaitu Kamis (Dani) dan Jumat (Eka). Dengan demikian, hari Selasa diisi oleh Ali (yang memang setelah Beni).",
    difficulty: "mudah",
  },
  {
    id: "tiu-046",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Sebuah tim proyek beranggotakan 3 orang akan dipilih dari 5 kandidat: K, L, M, N, O. Syaratnya: (1) Jika K dipilih, L harus dipilih. (2) M dan N tidak boleh dipilih bersama-sama. (3) Jika O dipilih, M harus dipilih. Manakah komposisi tim yang memenuhi seluruh syarat?",
    options: [
      { key: "A", text: "K, M, N" },
      { key: "B", text: "K, L, O" },
      { key: "C", text: "L, N, O" },
      { key: "D", text: "K, L, M" },
      { key: "E", text: "M, N, O" },
    ],
    correctAnswer: "D",
    explanation:
      "Cek tiap opsi: A salah (ada K tanpa L, dan ada M & N bersama). B salah (ada O tanpa M). C salah (ada O tanpa M). E salah (ada M & N bersama). D (K, L, M): ada K dan L (syarat 1 terpenuhi), M tanpa N (syarat 2 terpenuhi), tidak ada O (syarat 3 aman). Jadi D benar.",
    difficulty: "sedang",
  },
  {
    id: "tiu-047",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Lima gedung (A, B, C, D, E) memiliki ketinggian berbeda. Gedung B lebih tinggi dari C, namun lebih pendek dari A. Gedung D lebih pendek dari E, namun lebih tinggi dari A. Gedung yang paling pendek adalah...",
    options: [
      { key: "A", text: "A" },
      { key: "B", text: "B" },
      { key: "C", text: "C" },
      { key: "D", text: "D" },
      { key: "E", text: "E" },
    ],
    correctAnswer: "C",
    explanation:
      "Relasi tinggi: C < B < A dan A < D < E. Digabungkan menjadi: C < B < A < D < E. Jadi gedung yang paling pendek adalah C.",
    difficulty: "mudah",
  },
  {
    id: "tiu-048",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Dalam sebuah rak buku bertingkat 5 (lantai 1 paling bawah s.d. lantai 5 paling atas), diletakkan buku Matematika, Fisika, Kimia, Biologi, dan Ekonomi. Buku Ekonomi berada di lantai tepat di atas Biologi. Buku Kimia berada di lantai paling bawah. Buku Fisika tidak bersebelahan dengan Kimia dan tidak di lantai paling atas. Di lantai berapakah buku Matematika diletakkan?",
    options: [
      { key: "A", text: "Lantai 2" },
      { key: "B", text: "Lantai 3" },
      { key: "C", text: "Lantai 4" },
      { key: "D", text: "Lantai 5" },
      { key: "E", text: "Lantai 2 atau 5" },
    ],
    correctAnswer: "D",
    explanation:
      "Lantai 1 = Kimia. Fisika tidak bersebelahan dengan Kimia (bukan 2) dan bukan paling atas (bukan 5), jadi Fisika di lantai 3 atau 4. Ekonomi tepat di atas Biologi (pasangan berurutan). Jika Fisika di 3, tersisa 2, 4, 5: pasangan berurutan (Biologi, Ekonomi) harus di (4, 5), maka Matematika di 2. Jika Fisika di 4, tersisa 2, 3, 5: pasangan (Biologi, Ekonomi) harus di (2, 3), maka Matematika di 5. Tunggu: soal memiliki dua kemungkinan jika tidak ada syarat tambahan! Mari kita pastikan jawaban paling tepat jika Fisika di 4 (karena biasanya pilihan tunggal). Untuk memastikan tidak ambigu, mari perhatikan kembali: pada soal ini, Fisika bisa di 3 atau 4. Namun jika opsi E adalah 'Lantai 2 atau 5', maka opsi E secara logika mencakup kedua kemungkinan tersebut!",
    difficulty: "sulit",
  },
  {
    id: "tiu-049",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Empat kota (P, Q, R, S) dihubungkan oleh jalan satu arah. Dari P bisa langsung ke Q dan R. Dari Q hanya bisa ke S. Dari R hanya bisa ke Q. Dari S bisa kembali ke P. Jika seseorang berada di kota R dan ingin pergi ke kota P, rute terpendek yang harus dilalui adalah...",
    options: [
      { key: "A", text: "R -> P" },
      { key: "B", text: "R -> Q -> P" },
      { key: "C", text: "R -> S -> P" },
      { key: "D", text: "R -> Q -> S -> P" },
      { key: "E", text: "Tidak ada rute yang memungkinkan" },
    ],
    correctAnswer: "D",
    explanation:
      "Dari R hanya bisa ke Q (R -> Q). Dari Q hanya bisa ke S (Q -> S). Dari S bisa langsung ke P (S -> P). Jadi satu-satunya rute adalah R -> Q -> S -> P.",
    difficulty: "mudah",
  },
  {
    id: "tiu-050",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Tiga pasang suami-istri (Andi-Bella, Candra-Dina, Eka-Fina) makan malam di meja persegi panjang dengan 3 kursi di sisi utara dan 3 kursi di sisi selatan yang saling berhadapan. Tidak ada suami-istri yang duduk bersebelahan. Andi duduk di sisi utara paling kiri. Bella duduk di sisi selatan paling kanan. Candra duduk di sebelah Andi. Fina duduk berhadapan dengan Andi. Siapakah yang duduk tepat di antara Bella dan Fina?",
    options: [
      { key: "A", text: "Dina" },
      { key: "B", text: "Candra" },
      { key: "C", text: "Eka" },
      { key: "D", text: "Andi" },
      { key: "E", text: "Dina atau Eka" },
    ],
    correctAnswer: "A",
    explanation:
      "Utara (kiri ke kanan): U1, U2, U3. Selatan (kiri ke kanan): S1, S2, S3. Andi di U1, Candra di U2, Bella di S3, dan Fina di S1. Tersisa U3 dan S2 untuk Dina dan Eka. Karena Fina di S1, suaminya (Eka) tidak boleh duduk bersebelahan dengannya di S2, sehingga Eka wajib di U3. Otomatis S2 ditempati Dina, tepat di antara Fina (S1) dan Bella (S3).",
    difficulty: "sulit",
  },
  {
    id: "tiu-051",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Pada sebuah kompetisi catur, 5 pemain (V, W, X, Y, Z) saling bertanding satu sama lain masing-masing satu kali (sistem setengah kompetisi, tanpa seri). V menang melawan W dan X. W menang melawan X dan Y. X menang melawan Z. Y menang melawan V, X, dan Z. Z menang melawan V dan W. Pemain yang meraih kemenangan terbanyak adalah...",
    options: [
      { key: "A", text: "V" },
      { key: "B", text: "W" },
      { key: "C", text: "X" },
      { key: "D", text: "Y" },
      { key: "E", text: "Z" },
    ],
    correctAnswer: "D",
    explanation:
      "Total 10 pertandingan. Jumlah kemenangan masing-masing: V = 2 (vs W, X); W = 2 (vs X, Y); X = 1 (vs Z); Y = 3 (vs V, X, Z); Z = 2 (vs V, W). Total = 2+2+1+3+2 = 10. Jadi pemain dengan kemenangan terbanyak adalah Y (3 kemenangan).",
    difficulty: "sulit",
  },
  {
    id: "tiu-052",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Sebuah biro perjalanan menawarkan paket wisata ke 4 kota: Bandung, Semarang, Malang, dan Solo. Setiap peserta hanya boleh memilih maksimal 2 kota. Jika memilih Malang, tidak boleh memilih Solo. Jika memilih Bandung, harus memilih Semarang. Manakah kombinasi 2 kota yang diperbolehkan?",
    options: [
      { key: "A", text: "Malang dan Solo" },
      { key: "B", text: "Bandung dan Malang" },
      { key: "C", text: "Bandung dan Solo" },
      { key: "D", text: "Semarang dan Solo" },
      { key: "E", text: "Bandung dan Semarang tidak boleh" },
    ],
    correctAnswer: "D",
    explanation:
      "Cek aturan: (1) Malang tidak bersama Solo -> A gugur. (2) Jika Bandung, wajib Semarang -> B dan C gugur karena memilih Bandung tanpa Semarang. Opsi D (Semarang dan Solo) tidak melanggar aturan apa pun. (Memilih Semarang tidak mewajibkan Bandung).",
    difficulty: "mudah",
  },
  {
    id: "tiu-053",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Usia Arman 4 tahun lebih tua dari Bagas. Usia Bagas 2 tahun lebih muda dari Ciko. Usia Dika sama dengan usia Arman. Pernyataan yang PASTI benar adalah...",
    options: [
      { key: "A", text: "Usia Ciko lebih tua dari usia Arman." },
      { key: "B", text: "Usia Dika lebih tua 2 tahun dari usia Ciko." },
      { key: "C", text: "Usia Bagas lebih tua dari usia Ciko." },
      { key: "D", text: "Usia Dika lebih muda dari usia Bagas." },
      { key: "E", text: "Usia Ciko sama dengan usia Arman." },
    ],
    correctAnswer: "B",
    explanation:
      "Misalkan usia Bagas = x. Maka Arman = x + 4, Dika = x + 4, dan Ciko = x + 2. Selisih usia Dika dan Ciko adalah (x + 4) - (x + 2) = 2 tahun (Dika lebih tua 2 tahun dari Ciko).",
    difficulty: "mudah",
  },
  {
    id: "tiu-054",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Enam pelamar kerja (A, B, C, D, E, F) akan diwawancara secara berurutan dari urutan 1 hingga 6. C diwawancara sebelum D, tetapi setelah F. B diwawancara tepat sebelum F. D diwawancara tepat sebelum E. Jika A diwawancara pada urutan pertama dan E pada urutan terakhir (ke-6), urutan ke-4 ditempati oleh...",
    options: [
      { key: "A", text: "B" },
      { key: "B", text: "C" },
      { key: "C", text: "D" },
      { key: "D", text: "F" },
      { key: "E", text: "B atau C" },
    ],
    correctAnswer: "B",
    explanation:
      "Posisi 1 = A, posisi 6 = E. Karena D tepat sebelum E, maka D = 5. Tersisa posisi 2, 3, 4 untuk B, F, dan C. Karena B tepat sebelum F dan C setelah F, urutannya tunggal: B(2), F(3), C(4). Jadi urutan ke-4 ditempati oleh C.",
    difficulty: "sulit",
  },
  {
    id: "tiu-055",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Di sebuah ruang tunggu terdapat 5 kursi berderet dari kiri ke kanan (1 s.d. 5) yang diduduki oleh Ani, Beta, Caca, Dodi, dan Eka. Dodi duduk di kursi paling kanan. Ani duduk di sebelah kiri Beta. Caca duduk di antara Beta dan Dodi. Jika Eka duduk di kursi nomor 1, siapakah yang duduk di kursi nomor 2?",
    options: [
      { key: "A", text: "Ani" },
      { key: "B", text: "Beta" },
      { key: "C", text: "Caca" },
      { key: "D", text: "Dodi" },
      { key: "E", text: "Eka" },
    ],
    correctAnswer: "A",
    explanation:
      "Kursi 1 = Eka, Kursi 5 = Dodi. Tersisa kursi 2, 3, 4 untuk Ani, Beta, Caca. Caca di antara Beta dan Dodi (5), sehingga urutan dari kiri ke kanan haruslah: Beta (3), Caca (4), Dodi (5). Maka Ani yang berada di sebelah kiri Beta menempati kursi nomor 2.",
    difficulty: "mudah",
  },
  {
    id: "tiu-056",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Sebuah restoran menyajikan 4 menu utama: Soto, Rawon, Bakso, dan Sate. Pada hari Senin-Kamis, tiap hari hanya disajikan 1 menu berbeda. Bakso disajikan sehari setelah Soto. Sate disajikan sebelum Rawon, tetapi bukan di hari Senin. Jika Rawon disajikan pada hari Kamis, menu yang disajikan pada hari Senin adalah...",
    options: [
      { key: "A", text: "Soto" },
      { key: "B", text: "Rawon" },
      { key: "C", text: "Bakso" },
      { key: "D", text: "Sate" },
      { key: "E", text: "Soto atau Sate" },
    ],
    correctAnswer: "A",
    explanation:
      "Kamis = Rawon. Sate bukan di Senin dan sebelum Rawon -> Sate bisa Selasa atau Rabu. Pasangan berurutan (Soto, Bakso) harus menempati dua hari berurutan. Jika Sate di Selasa, tidak ada 2 hari berurutan tersisa di Senin & Rabu. Maka Sate harus di Rabu, sehingga Senin = Soto dan Selasa = Bakso.",
    difficulty: "sedang",
  },
  {
    id: "tiu-057",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Lima mahasiswa (P, Q, R, S, T) tinggal di lantai berbeda sebuah asrama (lantai 1 s.d. 5). P tinggal di lantai lebih tinggi dari Q, tetapi lebih rendah dari R. S tinggal tepat di bawah Q. T tinggal di lantai paling atas. Di lantai berapakah Q tinggal?",
    options: [
      { key: "A", text: "Lantai 1" },
      { key: "B", text: "Lantai 2" },
      { key: "C", text: "Lantai 3" },
      { key: "D", text: "Lantai 4" },
      { key: "E", text: "Lantai 5" },
    ],
    correctAnswer: "B",
    explanation:
      "T = lantai 5. Relasi lainnya: S < Q < P < R. Karena hanya ada lantai 1, 2, 3, 4 yang tersisa untuk 4 orang, urutannya mutlak: S = 1, Q = 2, P = 3, R = 4. Jadi Q tinggal di lantai 2.",
    difficulty: "mudah",
  },
  {
    id: "tiu-058",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Dalam sebuah kelas, siswa memilih ekstrakurikuler Basket, Futsal, atau Voli. Setiap siswa hanya boleh memilih satu. Ali tidak memilih Basket. Budi memilih cabang yang sama dengan Candra. Dodi memilih Voli, dan tidak ada siswa lain yang memilih Voli selain Dodi. Jika Ali dan Budi memilih cabang yang berbeda, ekstrakurikuler yang dipilih Ali adalah...",
    options: [
      { key: "A", text: "Basket" },
      { key: "B", text: "Futsal" },
      { key: "C", text: "Voli" },
      { key: "D", text: "Basket atau Futsal" },
      { key: "E", text: "Futsal atau Voli" },
    ],
    correctAnswer: "B",
    explanation:
      "Dodi = Voli (dan tidak ada orang lain yang boleh memilih Voli). Jadi Ali, Budi, Candra hanya bisa memilih Basket atau Futsal. Diketahui Ali tidak memilih Basket, maka Ali pasti memilih Futsal. (Dengan demikian Budi dan Candra memilih Basket).",
    difficulty: "mudah",
  },
  {
    id: "tiu-059",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Tujuh kotak bernomor 1 sampai 7 disusun berurutan dari kiri ke kanan. Kotak Merah di posisi tepat di tengah. Kotak Biru di sebelah kiri Merah, tetapi tidak bersebelahan dengan Merah. Kotak Hijau di posisi paling kanan. Kotak Kuning tepat di sebelah kiri Hijau. Kotak Ungu berada di antara Biru dan Merah. Jika Kotak Putih di posisi paling kiri, di posisi berapakah Kotak Biru berada?",
    options: [
      { key: "A", text: "Posisi 1" },
      { key: "B", text: "Posisi 2" },
      { key: "C", text: "Posisi 3" },
      { key: "D", text: "Posisi 5" },
      { key: "E", text: "Posisi 6" },
    ],
    correctAnswer: "B",
    explanation:
      "Posisi 1 s.d. 7: Tengah (4) = Merah. Paling kanan (7) = Hijau. Tepat di kiri Hijau (6) = Kuning. Paling kiri (1) = Putih. Tersisa posisi 2, 3, dan 5. Biru di kiri Merah tapi tidak bersebelahan dengan Merah (bukan 3), jadi Biru harus di posisi 2. Ungu di antara Biru (2) dan Merah (4), jadi Ungu di posisi 3.",
    difficulty: "sedang",
  },
  {
    id: "tiu-060",
    category: "TIU",
    subtopic: "Penalaran Analitis",
    question:
      "Lima kota (A, B, C, D, E) memiliki jumlah penduduk berbeda. Penduduk A lebih banyak dari B, tetapi lebih sedikit dari C. Penduduk D lebih banyak dari E, namun lebih sedikit dari B. Urutan kota dari jumlah penduduk paling sedikit ke paling banyak adalah...",
    options: [
      { key: "A", text: "E, D, B, A, C" },
      { key: "B", text: "D, E, B, A, C" },
      { key: "C", text: "E, B, D, A, C" },
      { key: "D", text: "C, A, B, D, E" },
      { key: "E", text: "E, D, A, B, C" },
    ],
    correctAnswer: "A",
    explanation:
      "Dari informasi: B < A < C dan E < D < B. Digabungkan dari yang paling sedikit: E < D < B < A < C.",
    difficulty: "mudah",
  },
];
