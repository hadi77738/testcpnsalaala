import { Question } from "@/types/question";

export const tkpPelayananJejaring: Question[] = [
  {
    id: "tkp-001",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda bertugas di loket pelayanan terpadu satu pintu. Menjelang jam istirahat siang, antrean pemohon masih cukup panjang dan seorang lansia datang dengan berkas yang belum lengkap karena kurang memahami informasi di papan pengumuman. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menyarankan lansia tersebut pulang dulu dan kembali lagi esok hari setelah melengkapi berkas.", score: 2 },
      { key: "B", text: "Memberikan brosur persyaratan dan memintanya membaca sendiri di ruang tunggu.", score: 4 },
      { key: "C", text: "Meminta rekan kerja lain yang sedang senggang untuk menanganinya karena waktu istirahat sudah dekat.", score: 3 },
      { key: "D", text: "Menjelaskan dengan ramah bagian berkas yang kurang, membantu mengarahkan cara melengkapinya, lalu tetap melayaninya sesuai giliran atau mekanisme prioritas kelompok rentan.", score: 5 },
      { key: "E", text: "Menerima berkas seadanya agar antrean cepat selesai dan Anda bisa segera beristirahat.", score: 1 },
    ],
    explanation:
      "Opsi D mencerminkan nilai BerAKHLAK Berorientasi Pelayanan: ramah, solutif, memahami kebutuhan kelompok rentan (lansia), serta tetap tertib prosedur.",
    difficulty: "mudah",
  },
  {
    id: "tkp-002",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang warga datang ke kantor dinas dengan nada tinggi karena merasa pengurusan surat keterangannya berbelit-belit dan memakan waktu lebih lama dari perkiraan. Padahal, keterlambatan terjadi karena sistem jaringan pusat sedang mengalami gangguan. Tindakan Anda yang paling tepat adalah...",
    options: [
      { key: "A", text: "Membalas dengan nada tegas agar warga tersebut menghormati petugas yang sedang bekerja.", score: 1 },
      { key: "B", text: "Mendengarkan keluhannya dengan tenang, menyampaikan permohonan maaf atas ketidaknyamanan, menjelaskan kendala teknis secara transparan, dan memberikan estimasi waktu penyelesaian serta alternatif layanan.", score: 5 },
      { key: "C", text: "Menyalahkan pihak penyedia jaringan pusat agar warga tahu bukan Anda yang bersalah.", score: 3 },
      { key: "D", text: "Mengabaikan emosinya dan langsung memanggil nomor antrean berikutnya agar tidak memicu keributan.", score: 2 },
      { key: "E", text: "Memintanya menunggu di ruang tunggu sampai jaringan kembali normal tanpa kepastian waktu.", score: 4 },
    ],
    explanation:
      "Opsi B menunjukkan empati, komunikasi efektif, transparansi informasi, dan tanggung jawab pelayanan publik tanpa bersikap defensif.",
    difficulty: "mudah",
  },
  {
    id: "tkp-003",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang kenalan dekat meminta bantuan Anda untuk mempercepat proses penerbitan izin usahanya dengan menyelipkan sejumlah uang terima kasih agar berkasnya tidak perlu melewati antrean verifikasi. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menjelaskan bahwa Anda tidak bisa menerima uang, namun akan mengabari jika antrean sedang sepi.", score: 4 },
      { key: "B", text: "Menolak uangnya, tetapi tetap mendahulukan berkasnya diam-diam karena ia adalah kenalan dekat.", score: 2 },
      { key: "C", text: "Menolak uang tersebut dengan tegas namun tetap sopan, menjelaskan bahwa semua pemohon harus mengikuti antrean dan prosedur yang berlaku secara adil.", score: 5 },
      { key: "D", text: "Menerima uang tersebut sebagai bentuk rezeki, lalu membantu mengecek berkasnya di luar jam kerja.", score: 1 },
      { key: "E", text: "Menyarankannya untuk menghubungi atasan Anda secara langsung jika ingin mendapat prioritas.", score: 3 },
    ],
    explanation:
      "Opsi C menegakkan prinsip pelayanan publik yang adil, transparan, bebas gratifikasi, serta tetap menjaga kesantunan dalam berkomunikasi.",
    difficulty: "mudah",
  },
  {
    id: "tkp-004",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Di unit pelayanan tempat Anda bekerja, banyak masyarakat yang mengeluhkan alur pengisian formulir daring yang terlalu rumit bagi warga pedesaan. Sebagai staf pelaksana, apa yang sebaiknya Anda lakukan?",
    options: [
      { key: "A", text: "Membantu mengisikan formulir warga yang datang apabila Anda sedang tidak sibuk.", score: 4 },
      { key: "B", text: "Membuat panduan visual sederhana langkah demi langkah di loket, membantu warga yang kesulitan secara langsung, serta mengusulkan penyederhanaan alur kepada atasan berdasarkan masukan masyarakat.", score: 5 },
      { key: "C", text: "Mencatat keluhan tersebut di buku laporan harian tanpa melakukan langkah perbaikan apa pun.", score: 2 },
      { key: "D", text: "Meminta warga yang tidak bisa mengisi formulir daring untuk meminta bantuan keluarga mereka sebelum datang.", score: 3 },
      { key: "E", text: "Membiarkan saja karena formulir daring tersebut sudah ditetapkan oleh pimpinan pusat.", score: 1 },
    ],
    explanation:
      "Opsi B menunjukkan inisiatif perbaikan tiada henti (continuous improvement) dan kepedulian nyata untuk memudahkan akses layanan bagi seluruh lapisan masyarakat.",
    difficulty: "sedang",
  },
  {
    id: "tkp-005",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang penyandang disabilitas tunanetra datang seorang diri untuk mengurus dokumen kependudukan. Kantor Anda belum memiliki fasilitas huruf Braille untuk formulir permohonan. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menyambutnya dengan hangat, mendampinginya secara khusus untuk membacakan dan membantu pengisian formulir sesuai kehendaknya, serta mengusulkan pengadaan fasilitas aksesibel kepada pimpinan.", score: 5 },
      { key: "B", text: "Memintanya pulang dan datang kembali bersama pendamping keluarga.", score: 2 },
      { key: "C", text: "Meminta pemohon lain di antrean untuk membantu membacakan formulirnya.", score: 4 },
      { key: "D", text: "Menyuruh petugas keamanan untuk mengantarkannya ke bagian informasi.", score: 3 },
      { key: "E", text: "Menjelaskan bahwa kantor belum memiliki layanan khusus bagi tunanetra sehingga prosesnya tidak bisa dilakukan.", score: 1 },
    ],
    explanation:
      "Opsi A mewujudkan pelayanan publik yang inklusif, non-diskriminatif, dan proaktif mendorong perbaikan fasilitas bagi kelompok rentan.",
    difficulty: "mudah",
  },
  {
    id: "tkp-006",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda menemukan adanya kesalahan ketik pada dokumen resmi yang baru saja diserahkan kepada warga lima menit lalu, padahal warga tersebut sudah meninggalkan gedung kantor. Langkah yang paling tepat Anda ambil adalah...",
    options: [
      { key: "A", text: "Mencatat nomor berkasnya agar jika sewaktu-waktu ia kembali, Anda sudah siap memperbaikinya.", score: 2 },
      { key: "B", text: "Segera menghubungi warga melalui nomor telepon yang tertera di berkas permohonan, menyampaikan permohonan maaf, dan mencetak ulang dokumen yang benar untuk diserahkan secepatnya.", score: 5 },
      { key: "C", text: "Menunggu warga tersebut datang kembali untuk komplain agar tidak repot mencarinya.", score: 1 },
      { key: "D", text: "Mengirimkan pesan singkat agar ia datang kembali ke kantor keesokan harinya.", score: 4 },
      { key: "E", text: "Melaporkan kesalahan tersebut kepada atasan dan menunggu instruksi lebih lanjut.", score: 3 },
    ],
    explanation:
      "Opsi B menunjukkan akuntabilitas, kecepatan respons, dan tanggung jawab penuh terhadap kualitas hasil pelayanan publik.",
    difficulty: "sedang",
  },
  {
    id: "tkp-007",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Saat Anda sedang bertugas sebagai petugas informasi, seorang wisatawan asing menanyakan prosedur perizinan kunjungan menggunakan bahasa Inggris yang terbata-bata, sementara kemampuan bahasa Inggris Anda juga terbatas. Tindakan Anda adalah...",
    options: [
      { key: "A", text: "Memintanya mencari penerjemah terlebih dahulu sebelum datang ke loket.", score: 2 },
      { key: "B", text: "Memberikan brosur berbahasa Indonesia dan memintanya menerjemahkan sendiri.", score: 3 },
      { key: "C", text: "Menggunakan bahasa Inggris sederhana yang dipadukan dengan gestur ramah atau aplikasi penerjemah yang akurat agar informasi tersampaikan dengan jelas dan tepat.", score: 5 },
      { key: "D", text: "Mencoba menjawab sebisanya meskipun tidak yakin apakah ia memahami penjelasan Anda.", score: 4 },
      { key: "E", text: "Menghindar dan berpura-pura sibuk agar rekan lain yang melayaninya.", score: 1 },
    ],
    explanation:
      "Opsi C memperlihatkan sikap adaptif, solutif, dan komitmen memberikan pelayanan prima meskipun terdapat kendala bahasa.",
    difficulty: "mudah",
  },
  {
    id: "tkp-008",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Kantor Anda meluncurkan kanal pengaduan masyarakat berbasis aplikasi, tetapi dalam sebulan terakhir banyak aduan yang menumpuk belum ditindaklanjuti karena pembagian admin belum jelas. Sebagai anggota tim pelayanan, sikap Anda adalah...",
    options: [
      { key: "A", text: "Menunggu rapat evaluasi bulanan untuk membahas penumpukan aduan tersebut.", score: 3 },
      { key: "B", text: "Tidak ikut campur karena pengelolaan aplikasi bukan tercantum dalam uraian tugas harian Anda.", score: 1 },
      { key: "C", text: "Menjawab beberapa aduan yang mudah saja saat waktu luang tanpa berkoordinasi.", score: 4 },
      { key: "D", text: "Mengusulkan kepada koordinator layanan untuk menyusun jadwal piket admin pengaduan serta siap berpartisipasi membantu memilah dan merespons aduan sesuai SOP.", score: 5 },
      { key: "E", text: "Menyarankan agar kanal pengaduan ditutup sementara hingga SDM mencukupi.", score: 2 },
    ],
    explanation:
      "Opsi D menunjukkan kepedulian terhadap efektivitas pelayanan publik dan kemampuan berkoordinasi untuk menyelesaikan hambatan sistemik.",
    difficulty: "sedang",
  },
  {
    id: "tkp-009",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang pemohon datang terlambat 10 menit setelah jam tutup loket pelayanan, padahal ia sudah menempuh perjalanan jauh dari daerah terpencil untuk mengurus dokumen penting. Kebijakan kantor membolehkan toleransi terbatas jika sistem belum ditutup. Apa yang Anda lakukan?",
    options: [
      { key: "A", text: "Memintanya datang lebih pagi besok tanpa memeriksa berkasnya terlebih dahulu.", score: 3 },
      { key: "B", text: "Menolak mentah-mentah karena jam pelayanan sudah berakhir tepat waktu.", score: 2 },
      { key: "C", text: "Tetap melayaninya dengan ramah selama sistem masih aktif, atau bila sistem sudah terkunci, membantu memeriksa kelengkapan berkasnya terlebih dahulu agar keesokan harinya ia langsung diproses tanpa kendala.", score: 5 },
      { key: "D", text: "Melayaninya sambil menggerutu agar ia sadar pentingnya datang tepat waktu.", score: 1 },
      { key: "E", text: "Memintanya menitipkan berkas kepada petugas keamanan untuk diproses besok.", score: 4 },
    ],
    explanation:
      "Opsi C memadukan empati tinggi terhadap kondisi masyarakat dari daerah jauh dengan kepatuhan pada batasan sistem dan prosedur.",
    difficulty: "sedang",
  },
  {
    id: "tkp-010",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Dalam survei kepuasan masyarakat triwulan ini, unit Anda mendapat nilai rendah pada indikator kecepatan pelayanan. Rekan-rekan kerja merasa hal itu wajar karena jumlah pemohon memang membludak. Pendapat dan tindakan Anda adalah...",
    options: [
      { key: "A", text: "Menyetujui pendapat rekan kerja bahwa masyarakat memang sering tidak sabar.", score: 1 },
      { key: "B", text: "Berusaha bekerja lebih cepat secara individu tanpa mengubah alur kerja tim.", score: 4 },
      { key: "C", text: "Menjadikan hasil survei tersebut sebagai bahan evaluasi objektif, menganalisis titik kemacetan alur layanan, dan mengusulkan perbaikan proses kerja kepada tim.", score: 5 },
      { key: "D", text: "Meminta atasan menambah jumlah pegawai baru sebelum melakukan perubahan apa pun.", score: 3 },
      { key: "E", text: "Merasa kecewa karena sudah bekerja keras tetapi tetap mendapat penilaian kurang baik.", score: 2 },
    ],
    explanation:
      "Opsi C mencerminkan orientasi pada kualitas hasil, keterbukaan terhadap umpan balik masyarakat, dan komitmen perbaikan berkelanjutan.",
    difficulty: "sedang",
  },
  {
    id: "tkp-011",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda bertugas di rumah sakit daerah. Seorang pasien peserta BPJS Kesehatan mengeluh karena merasa diperlakukan berbeda dengan pasien umum dalam hal kecepatan administrasi pendaftaran. Sikap Anda sebagai petugas pendaftaran adalah...",
    options: [
      { key: "A", text: "Memindahkan pasien tersebut ke loket khusus pengaduan agar antrean tidak terhambat.", score: 3 },
      { key: "B", text: "Menjelaskan bahwa memang prosedurnya berbeda dan memintanya menerima keadaan.", score: 2 },
      { key: "C", text: "Membantah keluhannya karena merasa sudah bekerja sesuai aturan.", score: 1 },
      { key: "D", text: "Meminta maaf atas ketidaknyamanan yang dirasakan, memastikan pelayanan diberikan setara sesuai antrean dan standar operasional, serta menjelaskan tahapan verifikasi BPJS dengan jelas.", score: 5 },
      { key: "E", text: "Mendahulukan pasien tersebut agar ia segera berhenti mengeluh.", score: 4 },
    ],
    explanation:
      "Opsi D menjamin prinsip keadilan dan kesetaraan dalam pelayanan publik sekaligus memberikan penjelasan prosedural yang menenangkan.",
    difficulty: "sedang",
  },
  {
    id: "tkp-012",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Ketika Anda sedang melayani seorang warga di meja layanan, ponsel pribadi Anda berdering terus-menerus dari nomor keluarga yang tidak Anda ketahui urgensinya. Tindakan Anda yang paling tepat adalah...",
    options: [
      { key: "A", text: "Mengangkat telepon sambil tetap mengetik data warga agar hemat waktu.", score: 2 },
      { key: "B", text: "Mengabaikan panggilan sepenuhnya lalu mematikan ponsel sampai jam pulang kantor.", score: 4 },
      { key: "C", text: "Menyelesaikan pelayanan warga tersebut terlebih dahulu dengan fokus penuh, atau jika sangat mendesak, meminta izin secara sopan untuk menunda sebentar sebelum menghubungi kembali setelah selesai.", score: 5 },
      { key: "D", text: "Langsung mengangkat telepon dan berbicara panjang lebar di depan warga.", score: 1 },
      { key: "E", text: "Meminta warga menunggu di kursi sambil Anda pergi ke luar ruangan menerima telepon tanpa penjelasan.", score: 3 },
    ],
    explanation:
      "Opsi C menunjukkan profesionalisme dan penghormatan penuh terhadap warga yang sedang dilayani tanpa mengabaikan etika komunikasi.",
    difficulty: "mudah",
  },
  {
    id: "tkp-013",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Sebuah peraturan baru mengenai tarif retribusi layanan baru saja diberlakukan hari ini, namun banyak warga yang belum mengetahuinya dan membawa uang sesuai tarif lama. Sebagai petugas kasir layanan, sikap Anda adalah...",
    options: [
      { key: "A", text: "Menolak transaksi warga yang uangnya kurang tanpa memberi penjelasan rinci.", score: 2 },
      { key: "B", text: "Meminta warga membaca pengumuman di dinding kantor karena sudah ditempel sejak pagi.", score: 3 },
      { key: "C", text: "Tetap menarik tarif lama untuk hari ini agar tidak berdebat dengan warga.", score: 1 },
      { key: "D", text: "Meminta warga mencari ATM terdekat terlebih dahulu sebelum kembali mengantre.", score: 4 },
      { key: "E", text: "Menjelaskan perubahan tarif secara santun dengan menunjukkan dasar aturan resmi yang berlaku, serta menyarankan pembayaran nontunai atau mekanisme lain yang memudahkan warga.", score: 5 },
    ],
    explanation:
      "Opsi E menjaga kepatuhan terhadap regulasi baru sekaligus mengedepankan edukasi yang ramah dan solusi praktis bagi masyarakat.",
    difficulty: "sedang",
  },
  {
    id: "tkp-014",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang warga mengunggah kritik pedas di media sosial mengenai lambatnya layanan di instansi Anda, disertai foto ruang tunggu yang penuh sesak. Kebetulan Anda adalah bagian dari tim humas dan pelayanan. Langkah terbaik adalah...",
    options: [
      { key: "A", text: "Menghubungi pengunggah secara pribadi dan memintanya menghapus postingan tersebut.", score: 4 },
      { key: "B", text: "Merespons secara resmi dengan bahasa yang empatik, mengapresiasi masukan warga, menjelaskan upaya perbaikan antrean yang sedang dilakukan, serta menindaklanjuti kendala teknis di internal.", score: 5 },
      { key: "C", text: "Mendiamkan unggahan tersebut karena biasanya akan tenggelam dengan sendirinya.", score: 3 },
      { key: "D", text: "Membalas komentar dengan membela diri bahwa jumlah pegawai memang terbatas.", score: 2 },
      { key: "E", text: "Menghapus atau melaporkan unggahan tersebut agar tidak mencemarkan nama baik instansi.", score: 1 },
    ],
    explanation:
      "Opsi B menunjukkan keterbukaan instansi publik terhadap kritik, respons komunikasi krisis yang konstruktif, dan aksi perbaikan nyata.",
    difficulty: "sulit",
  },
  {
    id: "tkp-015",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Saat terjadi pemadaman listrik mendadak di kantor pelayanan kecamatan dan genset mengalami kerusakan, proses cetak dokumen terhenti sementara ruang tunggu penuh oleh warga. Sebagai koordinator layanan, Anda akan...",
    options: [
      { key: "A", text: "Meliburkan pelayanan hari itu dan menyuruh semua warga pulang.", score: 1 },
      { key: "B", text: "Segera menginformasikan kondisi secara jujur kepada warga, tetap melakukan penerimaan dan verifikasi berkas secara manual, serta mendata nomor kontak warga untuk pemberitahuan saat dokumen selesai dicetak.", score: 5 },
      { key: "C", text: "Meminta warga menunggu di luar gedung sampai listrik menyala kembali.", score: 3 },
      { key: "D", text: "Mengalihkan seluruh warga ke kantor kecamatan tetangga meskipun jaraknya jauh.", score: 4 },
      { key: "E", text: "Menunggu teknisi PLN datang tanpa memberikan pengumuman apa pun kepada warga.", score: 2 },
    ],
    explanation:
      "Opsi B memperlihatkan ketangguhan layanan (service continuity), komunikasi yang menenangkan, dan solusi kreatif agar warga tidak pulang dengan tangan hampa.",
    difficulty: "sulit",
  },
  {
    id: "tkp-016",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang pemohon merasa bingung dengan istilah-istilah hukum dalam surat pemberitahuan yang diterimanya dari instansi Anda, lalu ia menanyakannya berulang kali hingga membuat antrean di belakangnya mulai gelisah. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Memberikan penjelasan singkat seadanya agar ia cepat pergi dari loket.", score: 4 },
      { key: "B", text: "Memintanya berkonsultasi dengan pengacara karena Anda bukan penyuluh hukum.", score: 2 },
      { key: "C", text: "Menyuruhnya membaca ulang surat tersebut di rumah pelan-pelan.", score: 1 },
      { key: "D", text: "Terus menjelaskan secara panjang lebar di loket meskipun antrean di belakang semakin menumpuk.", score: 3 },
      { key: "E", text: "Menjelaskan inti surat dengan bahasa sehari-hari yang mudah dipahami secara ringkas, dan jika masih membutuhkan pendalaman, mengarahkannya ke meja konsultasi khusus agar antrean tetap lancar.", score: 5 },
    ],
    explanation:
      "Opsi E menyeimbangkan kualitas pemahaman pemohon dengan kelancaran pelayanan bagi antrean lainnya melalui pengalihan ke layanan konsultasi.",
    difficulty: "sedang",
  },
  {
    id: "tkp-017",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda melihat seorang rekan kerja di loket sebelah berbicara ketus kepada seorang ibu yang membawa anak kecil rewel. Sebagai sesama petugas pelayanan publik, apa yang Anda lakukan?",
    options: [
      { key: "A", text: "Langsung melaporkan rekan kerja tersebut ke bagian kepegawaian saat itu juga.", score: 3 },
      { key: "B", text: "Menegur rekan kerja tersebut secara keras di depan warga agar ia malu dan berubah.", score: 2 },
      { key: "C", text: "Mengajak rekan kerja tersebut beristirahat setelah jam layanan tanpa membahas sikapnya.", score: 4 },
      { key: "D", text: "Membiarkannya karena setiap petugas memiliki cara masing-masing dalam menghadapi warga.", score: 1 },
      { key: "E", text: "Membantu menenangkan situasi dengan menawarkan bantuan ramah kepada ibu tersebut atau mengambil alih sementara jika diperlukan, lalu mengingatkan rekan kerja secara pribadi dengan santun setelah pelayanan selesai.", score: 5 },
    ],
    explanation:
      "Opsi E menjaga kenyamanan warga secara langsung sekaligus menjaga etika kolegialitas dengan menegur rekan secara privat dan konstruktif.",
    difficulty: "sulit",
  },
  {
    id: "tkp-018",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Instansi Anda berencana menerapkan sistem pendaftaran antrean daring penuh guna mengurangi kerumunan. Namun, Anda menyadari sebagian besar pengguna layanan di wilayah Anda adalah pekerja sektor informal yang kurang melek teknologi. Usulan Anda dalam rapat adalah...",
    options: [
      { key: "A", text: "Menunda penerapan sistem daring hingga seluruh warga memiliki ponsel pintar.", score: 4 },
      { key: "B", text: "Menolak rencana pendaftaran daring dan tetap mempertahankan sistem manual sepenuhnya.", score: 2 },
      { key: "C", text: "Mendukung sistem daring dengan tetap menyediakan kuota antrean luring/pendampingan petugas di lokasi (hybrid) selama masa transisi edukasi masyarakat.", score: 5 },
      { key: "D", text: "Langsung mewajibkan pendaftaran daring tanpa pengecualian agar masyarakat terpaksa belajar.", score: 1 },
      { key: "E", text: "Mengikuti keputusan mayoritas peserta rapat tanpa menyampaikan kondisi riil di lapangan.", score: 3 },
    ],
    explanation:
      "Opsi C menunjukkan transformasi layanan digital yang bijaksana, inklusif, dan memperhatikan kesiapan masyarakat pengguna layanan.",
    difficulty: "sulit",
  },
  {
    id: "tkp-019",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang warga memberikan bingkisan makanan khas daerah kepada Anda sebagai ucapan terima kasih karena proses pengurusan berkasnya berjalan lancar dan sesuai jadwal. Bagaimana Anda menyikapinya?",
    options: [
      { key: "A", text: "Menolak dengan sangat sopan disertai ucapan terima kasih, seraya menjelaskan bahwa melayani dengan baik sudah menjadi kewajiban ASN dan instansi melarang penerimaan bingkisan apa pun.", score: 5 },
      { key: "B", text: "Menerimanya terlebih dahulu agar tidak menyinggung perasaan warga, lalu menyumbangkannya.", score: 3 },
      { key: "C", text: "Memintanya mengisi kotak saran kepuasan layanan sebagai pengganti bingkisan tanpa menjelaskan aturan gratifikasi.", score: 4 },
      { key: "D", text: "Menyuruhnya meletakkan bingkisan tersebut di ruang istirahat untuk dimakan bersama seluruh staf.", score: 1 },
      { key: "E", text: "Menerimanya dengan senang hati karena nilainya kecil dan hanya berupa makanan.", score: 2 },
    ],
    explanation:
      "Opsi A menjaga integritas pelayanan publik dari segala bentuk gratifikasi dengan cara komunikasi yang santun dan edukatif.",
    difficulty: "mudah",
  },
  {
    id: "tkp-020",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda ditempatkan di bagian layanan pengaduan konsumen. Seorang pelapor datang membawa bukti dugaan pelanggaran usaha, namun kasus tersebut sebenarnya berada di bawah kewenangan instansi lain. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menerima berkas laporannya lalu menumpuknya di laci karena bukan tugas Anda.", score: 2 },
      { key: "B", text: "Memberitahunya nama instansi yang berwenang secara singkat tanpa membantu mengarahkan prosedurnya.", score: 4 },
      { key: "C", text: "Menyarankannya mencari sendiri informasi instansi yang tepat melalui internet.", score: 3 },
      { key: "D", text: "Langsung menyuruhnya pergi karena salah alamat instansi.", score: 1 },
      { key: "E", text: "Mendengarkan laporannya dengan baik, menjelaskan secara jelas pembagian kewenangan instansi, serta memberikan informasi kontak, alamat, dan prosedur pelaporan ke instansi yang berwenang.", score: 5 },
    ],
    explanation:
      "Opsi E mencerminkan semangat 'no wrong door policy' dalam pelayanan publik: masyarakat tetap dibantu memperoleh kejelasan arah meski kewenangan berada di instansi lain.",
    difficulty: "sedang",
  },
  {
    id: "tkp-021",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Di kantor Anda, masih sering terjadi warga datang bolak-balik karena informasi persyaratan di situs web resmi belum diperbarui mengikuti aturan terbaru. Sebagai pegawai yang mengetahui hal ini, tindakan Anda adalah...",
    options: [
      { key: "A", text: "Menunggu pengelola situs web menyadari kesalahannya sendiri.", score: 2 },
      { key: "B", text: "Segera melaporkan ketidaksesuaian informasi tersebut kepada pengelola situs web dan atasan, serta menyiapkan draf pembaruan informasi agar warga mendapat kepastian syarat.", score: 5 },
      { key: "C", text: "Menempelkan kertas pengumuman tulisan tangan di pintu masuk tanpa mengurus situs web.", score: 4 },
      { key: "D", text: "Menjelaskan kepada setiap warga yang komplain bahwa situs web memang sering terlambat diperbarui.", score: 3 },
      { key: "E", text: "Mengeluhkan hal tersebut kepada sesama staf di kantin tanpa melaporkannya.", score: 1 },
    ],
    explanation:
      "Opsi B menunjukkan kepekaan terhadap akurasi informasi publik dan inisiatif cepat untuk mencegah kerugian waktu masyarakat.",
    difficulty: "sedang",
  },
  {
    id: "tkp-022",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Saat bertugas di puskesmas keliling di daerah terpencil, jumlah obat untuk salah satu jenis penyakit menipis sebelum seluruh warga yang mengantre terlayani. Sebagai bagian dari tim layanan, Anda akan...",
    options: [
      { key: "A", text: "Menutup layanan lebih awal dan langsung kembali ke kota agar tidak didemo warga.", score: 2 },
      { key: "B", text: "Membagikan obat hanya kepada warga yang Anda kenal terlebih dahulu.", score: 1 },
      { key: "C", text: "Berkoordinasi dengan tim medis untuk memprioritaskan pasien dengan kondisi paling mendesak, memberikan edukasi kesehatan, dan memastikan mekanisme pengambilan obat lanjutan di puskesmas induk.", score: 5 },
      { key: "D", text: "Mengurangi dosis obat untuk setiap pasien agar semua kebagian meskipun tidak sesuai standar medis.", score: 3 },
      { key: "E", text: "Menjelaskan stok habis dan meminta warga membeli obat sendiri di apotek kecamatan.", score: 4 },
    ],
    explanation:
      "Opsi C memprioritaskan keselamatan pasien, keadilan berbasis urgensi medis, dan keberlanjutan akses pelayanan kesehatan.",
    difficulty: "sulit",
  },
  {
    id: "tkp-023",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang pejabat daerah menghubungi Anda secara pribadi melalui telepon dan meminta berkas perizinan milik kerabatnya segera disetujui tanpa melalui pemeriksaan lapangan yang semestinya. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menunda-nunda berkas tersebut tanpa memberi kepastian kepada siapa pun.", score: 3 },
      { key: "B", text: "Menyetujuinya segera demi menjaga hubungan baik dengan pejabat tersebut.", score: 1 },
      { key: "C", text: "Meminta rekan kerja lain yang menandatangani persetujuan agar Anda aman.", score: 2 },
      { key: "D", text: "Menolak permintaan tersebut dengan santun namun tegas, menjelaskan pentingnya pemeriksaan lapangan demi kepatuhan hukum dan keselamatan publik, serta melaporkan situasi ini kepada atasan langsung.", score: 5 },
      { key: "E", text: "Menjelaskan bahwa Anda harus memeriksa berkas terlebih dahulu sebelum memutuskan apakah perlu cek lapangan.", score: 4 },
    ],
    explanation:
      "Opsi D menunjukkan integritas tinggi, keberanian menolak intervensi yang melanggar SOP, serta akuntabilitas dengan melapor kepada atasan.",
    difficulty: "sulit",
  },
  {
    id: "tkp-024",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda melihat ruang tunggu pelayanan tampak kotor karena sampah plastik berserakan setelah jam ramai, sementara petugas kebersihan sedang bertugas di lantai lain. Langkah Anda sebelum memanggil antrean berikutnya adalah...",
    options: [
      { key: "A", text: "Membiarkannya karena bukan tugas Anda membersihkan ruangan.", score: 2 },
      { key: "B", text: "Membantu memungut sampah yang terlihat mengganggu atau segera menghubungi petugas kebersihan agar ruang tunggu kembali nyaman bagi warga.", score: 5 },
      { key: "C", text: "Memarahi warga yang ada di ruang tunggu karena tidak menjaga kebersihan.", score: 1 },
      { key: "D", text: "Menunggu petugas kebersihan selesai dari lantai lain baru kemudian memanggil antrean.", score: 3 },
      { key: "E", text: "Menulis status keluhan di grup internal kantor tentang kinerja petugas kebersihan.", score: 4 },
    ],
    explanation:
      "Opsi B mencerminkan kepedulian terhadap kenyamanan sarana pelayanan publik dan kerendahan hati untuk bertindak cepat.",
    difficulty: "mudah",
  },
  {
    id: "tkp-025",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang warga lanjut usia tampak kebingungan membaca layar monitor antrean digital di lobi kantor. Pada saat yang sama, Anda sedang menuju ruang rapat internal yang akan dimulai 5 menit lagi. Tindakan Anda adalah...",
    options: [
      { key: "A", text: "Berjalan cepat menuju ruang rapat agar tidak terlambat.", score: 2 },
      { key: "B", text: "Memanggil sekuriti dengan nada keras agar segera membantu lansia tersebut.", score: 4 },
      { key: "C", text: "Menunjuk ke arah papan informasi dari kejauhan sambil terus berjalan.", score: 3 },
      { key: "D", text: "Menyempatkan diri 1–2 menit untuk menyapa dan membantu lansia tersebut memahami nomor antreannya atau menitipkannya kepada petugas resepsionis sebelum masuk ruang rapat.", score: 5 },
      { key: "E", text: "Menganggap itu tanggung jawab petugas loket sehingga tidak perlu ikut campur.", score: 1 },
    ],
    explanation:
      "Opsi D menunjukkan kepekaan sosial dan jiwa melayani seorang ASN tanpa mengorbankan ketepatan waktu rapat.",
    difficulty: "mudah",
  },
  {
    id: "tkp-026",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Dalam pelayanan perizinan lingkungan, terdapat masukan dari komunitas masyarakat adat setempat bahwa lokasi proyek yang diajukan pemohon berdekatan dengan sumber air keramat mereka. Sebagai tim verifikator, apa sikap Anda?",
    options: [
      { key: "A", text: "Menyarankan komunitas adat untuk mengajukan gugatan ke pengadilan saja.", score: 3 },
      { key: "B", text: "Meminta pemohon menyelesaikan masalah tersebut sendiri di luar mekanisme perizinan.", score: 4 },
      { key: "C", text: "Langsung menolak permohonan izin tanpa melakukan pemeriksaan objektif.", score: 2 },
      { key: "D", text: "Mengabaikan masukan tersebut karena izin hanya menilai kelengkapan dokumen administratif.", score: 1 },
      { key: "E", text: "Mencatat masukan tersebut secara resmi, memfasilitasi verifikasi lapangan dan dialog dengan pemangku kepentingan terkait sesuai regulasi perlindungan lingkungan dan kearifan lokal.", score: 5 },
    ],
    explanation:
      "Opsi E mengedepankan pelayanan publik yang partisipatif, objektif, dan menghormati kepentingan masyarakat serta kelestarian lingkungan.",
    difficulty: "sulit",
  },
  {
    id: "tkp-027",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang pemohon meminta salinan data pribadi milik warga lain dengan alasan ia adalah tetangga dekat yang ingin membantu mengurus bantuan sosial. Sikap Anda sebagai petugas data adalah...",
    options: [
      { key: "A", text: "Memberikan data secara lisan saja tanpa mencetak dokumennya.", score: 1 },
      { key: "B", text: "Menolak permintaan dengan santun, menjelaskan kewajiban perlindungan data pribadi, dan mengarahkan agar yang bersangkutan hadir langsung atau melampirkan surat kuasa resmi.", score: 5 },
      { key: "C", text: "Memberikan data tersebut karena tujuannya baik untuk membantu tetangga.", score: 2 },
      { key: "D", text: "Memintanya datang lagi bersama ketua RT tanpa menjelaskan dasar aturannya.", score: 4 },
      { key: "E", text: "Menolaknya dengan ketus dan mencurigainya sebagai penipu.", score: 3 },
    ],
    explanation:
      "Opsi B menjaga kerahasiaan dan keamanan data pribadi masyarakat sesuai undang-undang sekaligus tetap memberikan solusi prosedural yang sah.",
    difficulty: "sedang",
  },
  {
    id: "tkp-028",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda menerima telepon layanan informasi dari seorang warga yang berbicara kurang jelas karena gugup dan tidak tahu harus mulai dari mana. Tindakan Anda adalah...",
    options: [
      { key: "A", text: "Memutus sambungan telepon karena antrean panggilan lain masih banyak.", score: 1 },
      { key: "B", text: "Meminta warga tersebut menelepon lagi nanti setelah ia tenang dan siap berbicara.", score: 2 },
      { key: "C", text: "Menyapa dengan suara tenang dan ramah, memandu percakapan dengan pertanyaan sederhana yang terarah agar kebutuhan warga dapat dipahami dan dibantu dengan tepat.", score: 5 },
      { key: "D", text: "Mendengarkan diam saja sampai warga tersebut selesai berbicara tanpa memandunya.", score: 3 },
      { key: "E", text: "Memintanya mengirimkan pesan teks saja agar lebih mudah dibaca.", score: 4 },
    ],
    explanation:
      "Opsi C menunjukkan kesabaran, empati, dan keterampilan komunikasi melayani yang efektif bagi warga yang membutuhkan bimbingan.",
    difficulty: "mudah",
  },
  {
    id: "tkp-029",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Setelah dilakukan pembaruan aplikasi layanan publik, beberapa fitur laporan warga mengalami bug sehingga bukti unggahan tidak muncul. Anda bukan programmer, melainkan petugas front office. Apa yang Anda lakukan?",
    options: [
      { key: "A", text: "Menyalahkan tim IT di hadapan warga setiap kali ada keluhan.", score: 1 },
      { key: "B", text: "Menghentikan penerimaan laporan warga hingga tim IT selesai memperbaiki aplikasi.", score: 3 },
      { key: "C", text: "Mendokumentasikan kendala yang dialami warga secara rinci, segera melaporkannya ke tim IT, dan menyiapkan penerimaan bukti alternatif melalui email resmi atau loket fisik sementara waktu.", score: 5 },
      { key: "D", text: "Meminta warga terus mencoba mengunggah ulang sampai aplikasinya normal kembali.", score: 2 },
      { key: "E", text: "Melaporkan masalah ke tim IT lalu menunggu tanpa menyediakan solusi sementara bagi warga.", score: 4 },
    ],
    explanation:
      "Opsi C mencerminkan kolaborasi lintas unit, orientasi solusi, dan komitmen agar pelayanan publik tidak terhenti oleh kendala teknis.",
    difficulty: "sedang",
  },
  {
    id: "tkp-030",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Instansi Anda mengadakan layanan jemput bola ke desa-desa pada hari Sabtu. Namun, hujan deras turun sejak pagi sehingga jumlah warga yang hadir di balai desa masih sedikit. Sikap Anda sebagai bagian dari tim adalah...",
    options: [
      { key: "A", text: "Tetap menunggu di lokasi hingga jam selesai tanpa berkoordinasi dengan perangkat desa.", score: 4 },
      { key: "B", text: "Mengusulkan segera pulang karena cuaca buruk dan warga tidak antusias.", score: 1 },
      { key: "C", text: "Bekerja santai sambil bermain ponsel sambil menunggu hujan reda.", score: 2 },
      { key: "D", text: "Mempersingkat jam layanan menjadi setengah hari tanpa persetujuan koordinator.", score: 3 },
      { key: "E", text: "Tetap siaga melayani warga yang hadir dengan maksimal, serta berkoordinasi dengan perangkat desa untuk menginformasikan bahwa tim tetap berada di lokasi hingga jadwal berakhir.", score: 5 },
    ],
    explanation:
      "Opsi E menunjukkan dedikasi pelayanan prima, tanggung jawab terhadap jadwal layanan publik, dan koordinasi aktif dengan mitra lokal.",
    difficulty: "sedang",
  },
  {
    id: "tkp-031",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang warga datang dengan pakaian sangat sederhana dan tampak ragu-ragu memasuki ruang pelayanan ber-AC, sementara di belakangnya ada seorang pengusaha berpakaian rapi. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Meminta petugas keamanan menanyakan keperluan warga sederhana tersebut terlebih dahulu di luar.", score: 2 },
      { key: "B", text: "Melayani keduanya sesuai antrean namun berbicara lebih ramah kepada pengusaha.", score: 3 },
      { key: "C", text: "Menyambut warga berpakaian sederhana tersebut dengan senyum tulus dan melayani keduanya secara setara sesuai nomor urut antrean.", score: 5 },
      { key: "D", text: "Mempersilakan warga sederhana tersebut duduk tanpa segera menanyakan keperluannya.", score: 4 },
      { key: "E", text: "Mendahulukan pengusaha tersebut karena terlihat lebih terburu-buru dan penting.", score: 1 },
    ],
    explanation:
      "Opsi C menegakkan prinsip non-diskriminasi dan kesetaraan martabat setiap warga negara di hadapan pelayanan publik.",
    difficulty: "mudah",
  },
  {
    id: "tkp-032",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda diminta menyusun standar pelayanan publik baru untuk unit kerja Anda. Agar standar tersebut benar-benar efektif dan tidak hanya bagus di atas kertas, langkah pertama yang paling penting Anda lakukan adalah...",
    options: [
      { key: "A", text: "Membuat standar yang longgar agar pegawai tidak mudah mendapat teguran jika terlambat.", score: 3 },
      { key: "B", text: "Menyusun target waktu yang sangat singkat agar terlihat mengesankan di mata pimpinan meskipun sulit dicapai.", score: 1 },
      { key: "C", text: "Mengandalkan pengalaman pribadi Anda selama bekerja tanpa meminta masukan tim lain.", score: 4 },
      { key: "D", text: "Menyalin sepenuhnya standar pelayanan dari instansi lain yang sudah terkenal.", score: 2 },
      { key: "E", text: "Mengidentifikasi kebutuhan dan keluhan riil pengguna layanan, memetakan kapasitas sumber daya unit, serta melibatkan pemangku kepentingan dalam penyusunannya.", score: 5 },
    ],
    explanation:
      "Opsi E menunjukkan pendekatan pelayanan berbasis kebutuhan pengguna (citizen-centric), realistis, dan partisipatif.",
    difficulty: "sulit",
  },
  {
    id: "tkp-033",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Seorang pemohon marah karena permohonannya ditolak oleh sistem akibat satu dokumen pendukung kedaluwarsa sehari yang lalu. Ia merasa aturan tersebut terlalu kaku. Bagaimana Anda meresponsnya?",
    options: [
      { key: "A", text: "Menjelaskan aturan sistem dengan singkat lalu memintanya kembali setelah dokumen diperbarui.", score: 4 },
      { key: "B", text: "Mengatakan bahwa itu salahnya sendiri karena tidak memeriksa tanggal berlaku dokumen.", score: 1 },
      { key: "C", text: "Memintanya langsung menemui kepala dinas untuk meminta dispensasi.", score: 3 },
      { key: "D", text: "Mengubah tanggal dokumen di sistem secara manual agar ia bisa langsung lolos.", score: 2 },
      { key: "E", text: "Menunjukkan empati atas situasinya, menjelaskan bahwa validitas dokumen merupakan syarat mutlak sistem dan hukum, serta membantu menginformasikan cara tercepat memperbarui dokumen tersebut.", score: 5 },
    ],
    explanation:
      "Opsi E memadukan kepatuhan pada aturan hukum/sistem dengan sikap empatik dan bantuan informasi yang konstruktif.",
    difficulty: "sedang",
  },
  {
    id: "tkp-034",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Di ruang laktasi kantor pelayanan publik, fasilitas pendingin ruangan rusak sehingga ibu menyusui merasa tidak nyaman. Anda bekerja di bagian pelayanan, bukan bagian rumah tangga. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menyarankan ibu menyusui untuk menyusui di ruang tunggu umum saja.", score: 2 },
      { key: "B", text: "Mengirim pesan ke bagian perlengkapan dan membiarkan warga menunggu perbaikannya.", score: 4 },
      { key: "C", text: "Segera melaporkan kerusakan tersebut ke bagian perlengkapan agar cepat diperbaiki, dan untuk sementara menyediakan ruangan alternatif yang nyaman atau kipas angin bagi ibu menyusui.", score: 5 },
      { key: "D", text: "Tidak peduli karena itu urusan bagian perlengkapan dan rumah tangga.", score: 1 },
      { key: "E", text: "Mencatat keluhan tersebut untuk dibahas pada rapat evaluasi bulan depan.", score: 3 },
    ],
    explanation:
      "Opsi C memperlihatkan kepekaan terhadap kebutuhan kelompok ibu dan anak serta solusi cepat lintas bagian.",
    difficulty: "mudah",
  },
  {
    id: "tkp-035",
    category: "TKP",
    subtopic: "Pelayanan Publik",
    question:
      "Anda mendapat tugas baru di loket pengaduan yang sering berhadapan dengan masyarakat yang emosional. Pada minggu pertama, seorang warga melontarkan kata-kata kasar karena proses klaim bantuannya tertunda. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Tetap mengendalikan emosi, mendengarkan inti permasalahannya dengan kepala dingin, menunjukkan keseriusan untuk memeriksa status klaimnya, dan memberikan kejelasan langkah tindak lanjut.", score: 5 },
      { key: "B", text: "Diam seribu bahasa hingga warga tersebut lelah sendiri lalu pergi.", score: 3 },
      { key: "C", text: "Ikut terpancing emosi dan membentaknya balik agar ia tidak semena-mena.", score: 1 },
      { key: "D", text: "Langsung meminta petugas keamanan menyeret warga tersebut keluar ruangan.", score: 2 },
      { key: "E", text: "Meminta rekan senior mengambil alih seluruh tugas Anda di loket pengaduan.", score: 4 },
    ],
    explanation:
      "Opsi A mencerminkan kematangan emosi, fokus pada penyelesaian masalah warga, dan ketahanan mental sebagai pelayan publik.",
    difficulty: "sedang",
  },
  {
    id: "tkp-036",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda ditunjuk menjadi penghubung kerja sama antara dinas Anda dengan dinas lain untuk program pengentasan kemiskinan. Namun, pihak dinas mitra sering lambat membalas surat resmi dan pesan koordinasi. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menjalankan bagian program dinas Anda sendiri tanpa menunggu koordinasi dengan mereka.", score: 4 },
      { key: "B", text: "Menyerah dan melaporkan kepada atasan bahwa dinas mitra tidak kooperatif.", score: 2 },
      { key: "C", text: "Mengirimkan surat teguran resmi bernada keras agar mereka segera merespons.", score: 3 },
      { key: "D", text: "Menunggu saja hingga mereka membalas agar tidak terkesan memaksa.", score: 1 },
      { key: "E", text: "Melakukan pendekatan komunikasi persuasif secara langsung atau tatap muka dengan narahubung dinas mitra untuk menyepakati jadwal dan kanal koordinasi yang efektif.", score: 5 },
    ],
    explanation:
      "Opsi E menunjukkan kemampuan membangun jejaring kerja secara proaktif, komunikatif, dan solutif demi kelancaran kolaborasi lintas instansi.",
    difficulty: "sedang",
  },
  {
    id: "tkp-037",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Tim Anda kedatangan pegawai pindahan dari unit lain yang belum menguasai alur kerja di tim baru. Sebagian rekan satu tim enggan membantunya karena merasa sibuk dengan target masing-masing. Tindakan Anda adalah...",
    options: [
      { key: "A", text: "Ikut menjaga jarak karena khawatir pekerjaan Anda sendiri terbengkalai.", score: 1 },
      { key: "B", text: "Menyambutnya dengan hangat, meluangkan waktu memperkenalkan alur kerja tim, dan mengajaknya berkolaborasi pada tugas awal agar cepat beradaptasi.", score: 5 },
      { key: "C", text: "Membantunya hanya jika ia datang bertanya lebih dulu.", score: 4 },
      { key: "D", text: "Menyarankannya membaca dokumen SOP sendiri di meja kerjanya.", score: 3 },
      { key: "E", text: "Menyerahkan urusan adaptasi sepenuhnya kepada atasan langsung.", score: 2 },
    ],
    explanation:
      "Opsi B mencerminkan nilai Kolaboratif dan Harmonis dalam membangun lingkungan kerja yang suportif dan mempercepat sinergi tim.",
    difficulty: "mudah",
  },
  {
    id: "tkp-038",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Dalam sebuah rapat lintas sektor, usulan program yang Anda susun bersama tim ditolak oleh perwakilan instansi mitra karena dianggap tumpang tindih dengan program mereka. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Mengajak diskusi terbuka dengan kepala dingin untuk memetakan irisan program, lalu mencari titik temu agar kedua program saling melengkapi bukan tumpang tindih.", score: 5 },
      { key: "B", text: "Menyetujui penolakan tersebut tanpa meminta penjelasan lebih lanjut.", score: 4 },
      { key: "C", text: "Langsung menarik seluruh usulan dan membatalkan keterlibatan instansi Anda.", score: 2 },
      { key: "D", text: "Diam saja selama rapat dan mengeluh di belakang setelah rapat selesai.", score: 3 },
      { key: "E", text: "Bersikeras mempertahankan usulan Anda karena sudah dikerjakan dengan susah payah.", score: 1 },
    ],
    explanation:
      "Opsi A menunjukkan kedewasaan dalam bermitra, keterbukaan terhadap masukan, dan orientasi sinergi demi tujuan bersama.",
    difficulty: "sedang",
  },
  {
    id: "tkp-039",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda baru saja dipindahkan ke kantor cabang di daerah baru. Agar dapat membangun jejaring kerja yang solid dengan sesama ASN dan pemangku kepentingan lokal, langkah awal yang Anda lakukan adalah...",
    options: [
      { key: "A", text: "Menunggu rekan kerja lain mengajak berkenalan dan makan siang bersama.", score: 3 },
      { key: "B", text: "Membagikan kartu nama kepada pimpinan saja agar cepat dikenal di level atas.", score: 4 },
      { key: "C", text: "Fokus mengerjakan tugas di meja sendiri saja agar tidak salah bicara.", score: 2 },
      { key: "D", text: "Hanya bergaul dengan rekan yang memiliki kesamaan asal daerah atau hobi.", score: 1 },
      { key: "E", text: "Proaktif memperkenalkan diri dengan sopan, mempelajari budaya kerja setempat, dan menjalin komunikasi yang tulus dengan rekan kerja serta mitra terkait.", score: 5 },
    ],
    explanation:
      "Opsi E menunjukkan inisiatif membangun relasi profesional yang inklusif, adaptif, dan menghargai kultur kerja setempat.",
    difficulty: "mudah",
  },
  {
    id: "tkp-040",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Sebuah organisasi masyarakat (ormas) lokal menawarkan kerja sama kegiatan bakti sosial bersama instansi Anda, namun Anda melihat adanya potensi konflik kepentingan menjelang tahun politik. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Langsung menyetujui kerja sama karena kegiatan bakti sosial pasti bermanfaat.", score: 2 },
      { key: "B", text: "Menolak mentah-mentah di tempat tanpa menjelaskan alasannya.", score: 1 },
      { key: "C", text: "Menyerahkan keputusan sepenuhnya kepada ormas tersebut tanpa berkonsultasi ke pimpinan.", score: 3 },
      { key: "D", text: "Menerima proposal secara formal, melakukan kajian netralitas ASN dan regulasi kemitraan bersama pimpinan, lalu memberikan jawaban objektif berbasis aturan.", score: 5 },
      { key: "E", text: "Menunda-nunda respons hingga ormas tersebut membatalkan niatnya sendiri.", score: 4 },
    ],
    explanation:
      "Opsi D menyeimbangkan keterbukaan terhadap jejaring masyarakat dengan kehati-hatian menjaga netralitas ASN dan tata kelola kemitraan.",
    difficulty: "sulit",
  },
  {
    id: "tkp-041",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Rekan satu tim Anda mengalami musibah keluarga sehingga tidak dapat menyelesaikan bagian laporannya menjelang tenggat waktu pengumpulan ke kementerian. Tindakan Anda sebagai bagian dari tim adalah...",
    options: [
      { key: "A", text: "Menghubungi rekan tersebut dan memintanya tetap menyelesaikan laporan dari rumah.", score: 4 },
      { key: "B", text: "Melaporkan kepada atasan bahwa laporan terlambat karena kesalahan rekan tersebut.", score: 2 },
      { key: "C", text: "Mengerjakan semuanya sendirian diam-diam lalu mengungkitnya di kemudian hari.", score: 3 },
      { key: "D", text: "Berempati atas musibahnya, lalu berinisiatif mengoordinasikan pembagian sisa pekerjaannya bersama anggota tim lain agar target tim tetap tercapai tepat waktu.", score: 5 },
      { key: "E", text: "Membiarkan saja karena setiap orang bertanggung jawab atas porsi masing-masing.", score: 1 },
    ],
    explanation:
      "Opsi D menonjolkan solidaritas tim, empati, dan kemampuan menggerakkan kerja sama untuk menjaga kinerja kolektif.",
    difficulty: "mudah",
  },
  {
    id: "tkp-042",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda tergabung dalam tim proyek lintas divisi. Dua anggota tim dari divisi berbeda terlibat perdebatan sengit mengenai metode pengumpulan data yang paling akurat, sehingga progres rapat terhenti. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Keluar dari ruangan rapat sampai perdebatan mereka selesai.", score: 2 },
      { key: "B", text: "Menengahi secara objektif, merangkum keunggulan masing-masing metode, dan mengajak tim menguji opsi mana yang paling sesuai dengan tujuan serta sumber daya proyek.", score: 5 },
      { key: "C", text: "Memihak anggota yang berasal dari divisi yang sama dengan Anda.", score: 1 },
      { key: "D", text: "Diam saja dan sibuk mencatat hal lain agar tidak ikut terlibat konflik.", score: 3 },
      { key: "E", text: "Meminta ketua tim langsung memutus diskusi tanpa mendengarkan argumen lebih lanjut.", score: 4 },
    ],
    explanation:
      "Opsi B menunjukkan peran mediator yang objektif, berorientasi pada tujuan bersama, dan menjaga keharmonisan jejaring kerja.",
    difficulty: "sedang",
  },
  {
    id: "tkp-043",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Sebuah perguruan tinggi menawarkan kolaborasi riset kebijakan gratis bagi instansi Anda. Namun, sebagian rekan kerja meragukan manfaatnya dan menganggapnya hanya menambah beban koordinasi. Pendapat Anda adalah...",
    options: [
      { key: "A", text: "Menyarankan perguruan tinggi tersebut mencari instansi lain saja.", score: 4 },
      { key: "B", text: "Mempelajari proposalnya, lalu memaparkan potensi nilai tambah riset tersebut bagi kinerja instansi serta mengusulkan pembagian peran yang ringan namun berdampak.", score: 5 },
      { key: "C", text: "Menerima kerja sama tersebut secara sepihak tanpa melibatkan rekan kerja lain.", score: 3 },
      { key: "D", text: "Ikut menolak karena memang pekerjaan rutin kantor sudah cukup padat.", score: 1 },
      { key: "E", text: "Menyetujui penolakan rekan kerja tanpa membaca proposal risetnya.", score: 2 },
    ],
    explanation:
      "Opsi B menunjukkan keterbukaan terhadap sinergi pentahelix (akademisi-pemerintah) dengan pendekatan kolaboratif yang realistis.",
    difficulty: "sedang",
  },
  {
    id: "tkp-044",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Atasan meminta Anda berkoordinasi dengan vendor swasta penyedia sistem informasi baru. Saat rapat, pihak vendor menggunakan banyak istilah teknis yang tidak dipahami oleh anggota tim Anda yang lain. Tindakan Anda adalah...",
    options: [
      { key: "A", text: "Meminta vendor menjelaskan ulang dengan bahasa yang lebih sederhana atau membantu menjembatani istilah teknis tersebut agar seluruh tim memiliki pemahaman yang sama.", score: 5 },
      { key: "B", text: "Mencatat istilah tersebut dan meminta rekan kerja mencari artinya sendiri di internet.", score: 4 },
      { key: "C", text: "Mengangguk-angguk saja seolah paham agar rapat cepat selesai.", score: 2 },
      { key: "D", text: "Menghentikan rapat dan meminta vendor mengirim dokumen tertulis saja.", score: 3 },
      { key: "E", text: "Membiarkan saja agar Anda terlihat paling paham di antara rekan kerja.", score: 1 },
    ],
    explanation:
      "Opsi A memastikan komunikasi yang efektif antara mitra eksternal dan tim internal sehingga tidak terjadi miskomunikasi dalam proyek.",
    difficulty: "mudah",
  },
  {
    id: "tkp-045",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Dalam forum koordinasi antar-kabupaten, perwakilan kabupaten tetangga menyampaikan data yang menurut pengamatan Anda kurang akurat dan berpotensi merugikan pembagian alokasi program wilayah Anda. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Diam saja demi menjaga hubungan baik antar-daerah meskipun wilayah Anda dirugikan.", score: 2 },
      { key: "B", text: "Menyela pembicaraannya secara langsung dan menuduhnya memanipulasi data.", score: 1 },
      { key: "C", text: "Menyampaikan klarifikasi secara santun berbasis data valid yang Anda bawa pada sesi tanggapan, serta mengusulkan verifikasi data bersama agar keputusan adil bagi semua pihak.", score: 5 },
      { key: "D", text: "Melaporkan perwakilan tersebut kepada moderator agar dilarang berbicara lagi.", score: 4 },
      { key: "E", text: "Mengirim pesan sindiran di grup WhatsApp forum setelah rapat selesai.", score: 3 },
    ],
    explanation:
      "Opsi C menggabungkan ketegasan berbasis data dengan etika komunikasi yang santun dan solusi verifikasi kolaboratif.",
    difficulty: "sulit",
  },
  {
    id: "tkp-046",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda memiliki kenalan di instansi pusat yang memiliki kewenangan persetujuan anggaran. Rekan kantor Anda menyarankan agar Anda memanfaatkan kedekatan pribadi tersebut untuk meloloskan usulan anggaran unit tanpa melalui antrean evaluasi teknis. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Menghubungi kenalan tersebut sekadar menitipkan pesan agar usulan cepat dibaca.", score: 4 },
      { key: "B", text: "Menyerahkan nama kenalan tersebut kepada rekan kantor agar ia yang menghubungi.", score: 3 },
      { key: "C", text: "Mengikuti saran rekan karena dianggap sebagai wujud pemanfaatan jejaring kerja.", score: 1 },
      { key: "D", text: "Menolak cara tersebut dan tetap menempuh jalur prosedur resmi, namun tetap dapat berkonsultasi secara terbuka mengenai standar kualitas proposal agar lolos evaluasi secara objektif.", score: 5 },
      { key: "E", text: "Memutus hubungan pertemanan dengan kenalan di pusat agar tidak dicurigai.", score: 2 },
    ],
    explanation:
      "Opsi D membedakan secara tegas antara jejaring kerja profesional yang sehat (konsultasi standar kualitas) dengan praktik kolusi/nepotisme.",
    difficulty: "sulit",
  },
  {
    id: "tkp-047",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Sebuah kegiatan seminar instansi yang Anda ketuai membutuhkan dukungan narasumber dari praktisi industri. Namun, anggaran honorarium instansi sangat terbatas. Strategi jejaring kerja yang paling tepat adalah...",
    options: [
      { key: "A", text: "Menawarkan kerja sama saling menguntungkan berupa publikasi, jejaring profesional, atau piagam penghargaan resmi sebagai bentuk kemitraan kontribusi sosial perusahaan.", score: 5 },
      { key: "B", text: "Menggunakan narasumber internal seadanya meskipun topiknya membutuhkan perspektif industri.", score: 3 },
      { key: "C", text: "Mengirim surat undangan standar tanpa komunikasi pendekatan apa pun dan berharap ada yang bersedia.", score: 4 },
      { key: "D", text: "Membatalkan acara seminar karena merasa tidak mungkin mendapatkan narasumber berkualitas.", score: 1 },
      { key: "E", text: "Meminta sumbangan pribadi dari seluruh panitia untuk menambah honor narasumber.", score: 2 },
    ],
    explanation:
      "Opsi A menunjukkan kreativitas membangun kemitraan strategis (win-win collaboration) tanpa melanggar aturan anggaran.",
    difficulty: "sedang",
  },
  {
    id: "tkp-048",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda diminta menjadi mentor bagi dua peserta magang mahasiswa di unit kerja Anda. Pada minggu pertama, mereka sering membuat kesalahan administratif kecil. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Memberikan umpan balik yang membangun dengan sabar, menjelaskan standar kerja yang benar, dan melakukan pengecekan bertahap untuk menumbuhkan kepercayaan diri mereka.", score: 5 },
      { key: "B", text: "Memperbaiki kesalahan mereka diam-diam tanpa memberitahu letak kesalahannya.", score: 4 },
      { key: "C", text: "Menyerahkan pembinaan mereka kepada staf junior lain.", score: 3 },
      { key: "D", text: "Memarahi mereka dan meminta bagian kepegawaian memindahkan mereka ke unit lain.", score: 1 },
      { key: "E", text: "Tidak lagi memberi mereka pekerjaan apa pun agar tidak merepotkan Anda.", score: 2 },
    ],
    explanation:
      "Opsi A mencerminkan peran pembimbing yang suportif, membangun kapasitas mitra/peserta magang, dan menjaga kualitas kerja.",
    difficulty: "mudah",
  },
  {
    id: "tkp-049",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Setelah menghadiri bimbingan teknis nasional, Anda memperoleh banyak materi baru dan kontak pakar dari berbagai provinsi. Agar manfaatnya berdampak bagi instansi Anda, tindakan terbaik adalah...",
    options: [
      { key: "A", text: "Menceritakan pengalaman perjalanan dinas secara santai saat jam makan siang.", score: 3 },
      { key: "B", text: "Berbagi ringkasan ilmu dalam forum internal unit kerja dan mendokumentasikan jejaring kontak pakar ke dalam direktori kolaborasi instansi.", score: 5 },
      { key: "C", text: "Menulis laporan perjalanan dinas seperlunya untuk syarat pencairan SPJ.", score: 2 },
      { key: "D", text: "Menyimpan materi dan kontak tersebut untuk kepentingan karier pribadi saja.", score: 1 },
      { key: "E", text: "Membagikan file materi di grup pesan tanpa penjelasan konteks penerapannya.", score: 4 },
    ],
    explanation:
      "Opsi B menunjukkan transfer pengetahuan (knowledge sharing) dan pemanfaatan jejaring eksternal untuk kemajuan organisasi.",
    difficulty: "mudah",
  },
  {
    id: "tkp-050",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Dalam proyek bersama antara instansi pemerintah dan komunitas relawan lingkungan, muncul kesalahpahaman karena relawan merasa birokrasi instansi terlalu lambat, sementara pegawai menganggap relawan kurang tertib administrasi. Sebagai penghubung, Anda akan...",
    options: [
      { key: "A", text: "Menyalahkan relawan yang tidak paham tata kelola pemerintahan.", score: 1 },
      { key: "B", text: "Mengundurkan diri dari posisi penghubung karena lelah menghadapi dua karakter berbeda.", score: 3 },
      { key: "C", text: "Meneruskan keluhan masing-masing pihak ke pimpinan tanpa menawarkan jalan keluar.", score: 4 },
      { key: "D", text: "Mempertemukan kedua pihak dalam diskusi santai namun terstruktur untuk saling memahami kendala, lalu menyepakati alur kerja bersama yang sederhana tetapi tetap akuntabel.", score: 5 },
      { key: "E", text: "Membela instansi sepenuhnya karena aturan birokrasi tidak bisa ditawar.", score: 2 },
    ],
    explanation:
      "Opsi D menunjukkan kemampuan menjembatani perbedaan kultur kerja antara birokrasi dan komunitas demi keberhasilan kolaborasi.",
    difficulty: "sulit",
  },
  {
    id: "tkp-051",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Salah satu rekan kerja senior di unit Anda sering menolak ide-ide baru dari pegawai muda dengan alasan 'dari dulu aturannya sudah begini'. Ketika Anda memiliki gagasan perbaikan kolaborasi tim, cara terbaik menyampaikannya adalah...",
    options: [
      { key: "A", text: "Menyampaikan ide langsung ke atasan dengan memotong jalur diskusi rekan senior.", score: 2 },
      { key: "B", text: "Menerapkan ide tersebut secara diam-diam bersama pegawai muda saja.", score: 4 },
      { key: "C", text: "Mengajak rekan senior berdiskusi secara hormat, menghargai pengalamannya, lalu memaparkan ide perbaikan dengan data manfaat nyata bagi kelancaran kerja bersama.", score: 5 },
      { key: "D", text: "Menyindir pola pikir lama rekan senior tersebut di forum rapat.", score: 3 },
      { key: "E", text: "Mengurungkan niat menyampaikan ide agar tidak terjadi gesekan dengan senior.", score: 1 },
    ],
    explanation:
      "Opsi C menunjukkan kecerdasan interpersonal dalam membangun dukungan lintas generasi di tempat kerja melalui pendekatan hormat dan berbasis bukti.",
    difficulty: "sedang",
  },
  {
    id: "tkp-052",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Instansi Anda diminta menjadi tuan rumah rapat koordinasi tingkat provinsi. Beberapa pejabat dari daerah lain memiliki preferensi jadwal dan agenda yang saling bertabrakan. Sebagai panitia pelaksana, Anda akan...",
    options: [
      { key: "A", text: "Menyerahkan penentuan jadwal kepada peserta paling senior saja.", score: 3 },
      { key: "B", text: "Mengubah-ubah jadwal mendadak mengikuti permintaan delegasi yang terakhir menghubungi.", score: 2 },
      { key: "C", text: "Mengadakan rapat secara terpisah-pisah untuk setiap daerah.", score: 4 },
      { key: "D", text: "Menetapkan jadwal sepihak tanpa meminta konfirmasi peserta.", score: 1 },
      { key: "E", text: "Melakukan pemetaan ketersediaan waktu seluruh delegasi secara proaktif, menyusun prioritas agenda bersama, dan mengomunikasikan keputusan jadwal secara jelas jauh hari.", score: 5 },
    ],
    explanation:
      "Opsi E memperlihatkan kemampuan koordinasi multi-pihak yang terorganisir, inklusif, dan komunikatif.",
    difficulty: "sedang",
  },
  {
    id: "tkp-053",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda mengetahui bahwa unit kerja sebelah mengalami kekurangan tenaga untuk menyelesaikan input data mendesak, sementara beban kerja di unit Anda hari ini sudah selesai lebih awal. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Melapor kepada atasan Anda untuk menawarkan bantuan tenaga kepada unit sebelah dan membantu mereka sesuai arahan.", score: 5 },
      { key: "B", text: "Pulang lebih awal karena menganggap pekerjaan sudah selesai.", score: 1 },
      { key: "C", text: "Langsung pindah ke unit sebelah tanpa melapor kepada atasan Anda.", score: 3 },
      { key: "D", text: "Menunggu unit sebelah datang meminta bantuan secara resmi.", score: 4 },
      { key: "E", text: "Menggunakan waktu luang untuk bersantai karena tugas unit Anda sudah tuntas.", score: 2 },
    ],
    explanation:
      "Opsi A menunjukkan jiwa kolaboratif lintas unit yang tetap menghormati garis komando dan tata tertib organisasi.",
    difficulty: "mudah",
  },
  {
    id: "tkp-054",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Seorang mitra kerja dari sektor swasta mengundang Anda makan malam mewah di hotel berbintang setelah penandatanganan nota kesepahaman kerja sama resmi. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Datang bersama seluruh keluarga agar suasana lebih akrab.", score: 1 },
      { key: "B", text: "Menghadirinya karena kerja sama sudah resmi ditandatangani dan bersifat profesional.", score: 2 },
      { key: "C", text: "Menolak undangan makan malam pribadi tersebut dengan halus namun sopan, serta menjelaskan komitmen menjaga independensi dan integritas kerja sama.", score: 5 },
      { key: "D", text: "Meminta mitra tersebut mengganti makan malam dengan uang saku saja.", score: 3 },
      { key: "E", text: "Menghadirinya diam-diam tanpa memberi tahu siapa pun di kantor.", score: 4 },
    ],
    explanation:
      "Opsi C menjaga batas profesionalisme dalam berjejaring dengan mitra eksternal agar terhindar dari konflik kepentingan dan gratifikasi.",
    difficulty: "sedang",
  },
  {
    id: "tkp-055",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Dalam sebuah grup koordinasi daring lintas instansi, terjadi perdebatan yang mulai mengarah pada saling menyalahkan antar-pegawai terkait keterlambatan pengiriman laporan bulanan. Sebagai salah satu anggota grup, tindakan Anda adalah...",
    options: [
      { key: "A", text: "Mengajak anggota grup kembali fokus pada solusi, menawarkan langkah sinkronisasi data yang cepat, dan menyarankan pembahasan teknis lanjutan melalui panggilan koordinasi.", score: 5 },
      { key: "B", text: "Keluar dari grup koordinasi karena suasananya sudah tidak kondusif.", score: 2 },
      { key: "C", text: "Mematikan notifikasi grup sampai masalah reda sendiri.", score: 4 },
      { key: "D", text: "Membaca perdebatan saja dan membagikannya ke rekan kantor sebagai bahan gosip.", score: 3 },
      { key: "E", text: "Ikut membalas komentar untuk membela instansi Anda dengan nada tinggi.", score: 1 },
    ],
    explanation:
      "Opsi A menunjukkan kepemimpinan kolaboratif dalam ruang komunikasi digital untuk meredam konflik dan mengarahkan tim pada penyelesaian tugas.",
    difficulty: "sedang",
  },
  {
    id: "tkp-056",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda bekerja di unit humas dan diminta memperluas jejaring media lokal guna mendukung sosialisasi program pemerintah daerah. Langkah paling efektif yang Anda lakukan adalah...",
    options: [
      { key: "A", text: "Mengunggah informasi hanya di akun media sosial pribadi Anda.", score: 4 },
      { key: "B", text: "Hanya mengirim rilis berita ke satu media besar yang sudah terkenal.", score: 2 },
      { key: "C", text: "Menunggu wartawan datang ke kantor jika membutuhkan berita.", score: 3 },
      { key: "D", text: "Memetakan seluruh media lokal dan komunitas jurnalis, membangun komunikasi rutin yang transparan dan setara, serta menyediakan bahan informasi yang akurat dan mudah diolah.", score: 5 },
      { key: "E", text: "Memilih media yang hanya mau memberitakan hal positif saja.", score: 1 },
    ],
    explanation:
      "Opsi D mencerminkan strategi membangun kemitraan media yang inklusif, transparan, dan profesional.",
    difficulty: "sedang",
  },
  {
    id: "tkp-057",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Ketika Anda bekerja dalam tim proyek, salah satu anggota tim selalu menyerahkan bagian pekerjaannya melewati tenggat waktu yang disepakati, sehingga menghambat pekerjaan anggota lain. Sebagai ketua tim, sikap Anda adalah...",
    options: [
      { key: "A", text: "Mengambil alih seluruh tugasnya setiap kali ia terlambat agar proyek aman.", score: 3 },
      { key: "B", text: "Menyindirnya di depan seluruh anggota tim saat rapat mingguan.", score: 2 },
      { key: "C", text: "Langsung mengeluarkannya dari tim tanpa berbicara terlebih dahulu.", score: 1 },
      { key: "D", text: "Membiarkannya saja asalkan hasil akhirnya nanti selesai juga.", score: 4 },
      { key: "E", text: "Mengajaknya berbicara empat mata untuk mengetahui kendala yang dihadapi, menegaskan dampak keterlambatan terhadap tim, dan menyepakati target waktu antara (checkpoint) yang terukur.", score: 5 },
    ],
    explanation:
      "Opsi E menunjukkan komunikasi asertif, empatik, dan manajemen kinerja tim yang akuntabel.",
    difficulty: "sedang",
  },
  {
    id: "tkp-058",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Instansi Anda akan meluncurkan program desa binaan. Agar program tersebut berkelanjutan dan tidak berhenti setelah pendampingan selesai, mitra strategis yang paling tepat Anda libatkan sejak tahap perencanaan adalah...",
    options: [
      { key: "A", text: "Warga desa diundang hanya saat acara peresmian program saja.", score: 4 },
      { key: "B", text: "Hanya pejabat di tingkat kabupaten agar proses persetujuan cepat.", score: 2 },
      { key: "C", text: "Hanya kepala desa saja tanpa melibatkan unsur masyarakat lainnya.", score: 3 },
      { key: "D", text: "Konsultan dari luar kota sepenuhnya tanpa melibatkan warga desa.", score: 1 },
      { key: "E", text: "Pemerintah desa, tokoh masyarakat, kelompok pemuda/perempuan desa, serta pelaku usaha lokal agar tercipta rasa memiliki dan kemandirian.", score: 5 },
    ],
    explanation:
      "Opsi E menerapkan prinsip jejaring kerja partisipatif yang membangun keberlanjutan dan pemberdayaan mitra lokal.",
    difficulty: "sedang",
  },
  {
    id: "tkp-059",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda mendapat kritik tajam dari rekan tim mengenai cara Anda menyajikan data presentasi yang dinilai kurang informatif. Padahal Anda sudah mengerjakannya lembur semalaman. Reaksi Anda adalah...",
    options: [
      { key: "A", text: "Diam saja dan langsung mengubah seluruh presentasi tanpa berdiskusi.", score: 4 },
      { key: "B", text: "Meminta atasan menilai apakah presentasi Anda sudah cukup baik.", score: 3 },
      { key: "C", text: "Menerima kritik tersebut dengan lapang dada, menanyakan bagian mana yang perlu diperjelas, dan mengajak rekan tersebut berkolaborasi menyempurnakan tampilan data.", score: 5 },
      { key: "D", text: "Merasa tersinggung dan membalas mengkritik hasil kerjanya.", score: 1 },
      { key: "E", text: "Menjelaskan bahwa Anda sudah lembur sehingga ia seharusnya menghargai usaha Anda.", score: 2 },
    ],
    explanation:
      "Opsi C mencerminkan kedewasaan menerima umpan balik, kerendahan hati, dan semangat kolaborasi demi hasil terbaik tim.",
    difficulty: "mudah",
  },
  {
    id: "tkp-060",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Dua instansi pemerintah daerah bersepakat membangun pusat layanan terpadu bersama, tetapi terjadi kebingungan mengenai siapa yang menanggung biaya pemeliharaan gedung. Sebagai perwakilan tim teknis, Anda mengusulkan...",
    options: [
      { key: "A", text: "Menunda operasional gedung tanpa batas waktu hingga masalah selesai sendiri.", score: 1 },
      { key: "B", text: "Meminta sumbangan dari masyarakat pengguna layanan.", score: 3 },
      { key: "C", text: "Menyerahkan seluruh biaya pemeliharaan kepada instansi yang memiliki anggaran lebih besar.", score: 2 },
      { key: "D", text: "Menggunakan gedung terlebih dahulu dan memikirkan biaya pemeliharaan belakangan.", score: 4 },
      { key: "E", text: "Menyusun kesepakatan tertulis (adendum perjanjian kerja sama) yang merinci pembagian beban pemeliharaan secara proporsional berdasarkan luas area atau intensitas penggunaan.", score: 5 },
    ],
    explanation:
      "Opsi E menunjukkan tata kelola jejaring kerja yang akuntabel, adil, dan memiliki kepastian hukum melalui perjanjian yang jelas.",
    difficulty: "sulit",
  },
  {
    id: "tkp-061",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda diundang sebagai perwakilan instansi dalam rapat forum komunikasi pimpinan daerah. Saat sesi diskusi, Anda menyadari ada peluang kerja sama lintas instansi yang sangat bermanfaat, namun belum ada dalam agenda resmi. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Mengobrol di belakang layar dengan satu orang saja tanpa mencatatnya di notula forum.", score: 3 },
      { key: "B", text: "Menunggu instansi lain yang memulai mengusulkan gagasan tersebut.", score: 4 },
      { key: "C", text: "Menyampaikan gagasan awal tersebut sebagai usulan penjajakan kolaborasi yang akan dikonsultasikan lebih lanjut dengan pimpinan masing-masing instansi.", score: 5 },
      { key: "D", text: "Tidak menyampaikan apa-apa karena takut melampaui kewenangan.", score: 2 },
      { key: "E", text: "Langsung menjanjikan komitmen anggaran instansi Anda di forum tersebut.", score: 1 },
    ],
    explanation:
      "Opsi C menyeimbangkan kepekaan menangkap peluang jejaring kerja dengan kepatuhan pada etika kewenangan birokrasi.",
    difficulty: "sulit",
  },
  {
    id: "tkp-062",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Rekan kerja Anda di bagian lain meminta data rekapitulasi yang sebenarnya berada di bawah tanggung jawab Anda untuk keperluan laporan mendesak ke pusat. Namun, ia memintanya secara mendadak di luar jam kerja. Tindakan Anda adalah...",
    options: [
      { key: "A", text: "Menolak karena di luar jam kerja dan menyuruhnya menunggu besok pagi.", score: 2 },
      { key: "B", text: "Mengirimkan data seadanya tanpa memeriksa validitasnya agar cepat selesai.", score: 3 },
      { key: "C", text: "Mengabaikan pesannya hingga keesokan harinya.", score: 1 },
      { key: "D", text: "Memintanya meminta izin tertulis dari atasan Anda terlebih dahulu baru Anda proses besok.", score: 4 },
      { key: "E", text: "Membantu mengirimkan data yang dibutuhkan secepat mungkin jika aksesnya tersedia dan sesuai prosedur kerahasiaan data, demi kelancaran laporan instansi.", score: 5 },
    ],
    explanation:
      "Opsi E menunjukkan semangat kolaborasi dan tanggung jawab kolektif terhadap kepentingan organisasi tanpa mengabaikan keamanan data.",
    difficulty: "sedang",
  },
  {
    id: "tkp-063",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Dalam tim kerja, Anda memiliki rekan yang sangat kompeten secara teknis namun cenderung pendiam dan jarang berpendapat saat rapat. Sebagai rekan atau koordinator tim, sikap Anda adalah...",
    options: [
      { key: "A", text: "Menganggapnya tidak peduli dan tidak melibatkannya dalam pengambilan keputusan.", score: 1 },
      { key: "B", text: "Memberinya tugas teknis saja tanpa perlu ikut rapat tim.", score: 4 },
      { key: "C", text: "Menegurnya di depan tim karena dianggap pasif.", score: 3 },
      { key: "D", text: "Memberikan ruang yang nyaman baginya untuk berpendapat, misalnya meminta pandangannya secara santun dalam rapat atau melalui diskusi tertulis sebelum rapat.", score: 5 },
      { key: "E", text: "Membiarkannya diam agar rapat berjalan lebih cepat.", score: 2 },
    ],
    explanation:
      "Opsi D menunjukkan kemampuan membangun inklusivitas dalam tim agar seluruh potensi anggota dapat berkontribusi optimal.",
    difficulty: "mudah",
  },
  {
    id: "tkp-064",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Instansi Anda bekerja sama dengan lembaga swadaya masyarakat (LSM) untuk pendampingan kelompok tani. Di tengah jalan, Anda mendapat informasi bahwa salah satu oknum LSM tersebut mengutip biaya dari petani tanpa sepengetahuan instansi Anda. Langkah Anda adalah...",
    options: [
      { key: "A", text: "Melakukan verifikasi fakta di lapangan secara objektif, melaporkan temuan kepada pimpinan, dan mengklarifikasi secara resmi kepada pimpinan LSM untuk penindakan sesuai perjanjian.", score: 5 },
      { key: "B", text: "Menegur oknum tersebut secara informal tanpa mencatatnya dalam laporan resmi.", score: 4 },
      { key: "C", text: "Langsung memutus kontrak kerja sama secara sepihak tanpa klarifikasi.", score: 3 },
      { key: "D", text: "Menyebarkan kabar tersebut di media sosial agar petani waspada.", score: 2 },
      { key: "E", text: "Membiarkannya karena itu urusan internal LSM tersebut.", score: 1 },
    ],
    explanation:
      "Opsi A menjaga akuntabilitas kemitraan dan perlindungan masyarakat melalui verifikasi fakta dan mekanisme penyelesaian resmi.",
    difficulty: "sulit",
  },
  {
    id: "tkp-065",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda baru ditunjuk memimpin gugus tugas percepatan digitalisasi arsip yang anggotanya berasal dari lima bidang berbeda. Agar semua bidang bergerak serentak dan tidak saling menunggu, langkah pertama yang Anda lakukan adalah...",
    options: [
      { key: "A", text: "Langsung membagi tugas lewat pesan singkat tanpa mengadakan pertemuan awal.", score: 2 },
      { key: "B", text: "Menggelar rapat penyelarasan awal untuk menyepakati tujuan bersama, pembagian peran yang jelas, jadwal berkala, dan kanal komunikasi tim.", score: 5 },
      { key: "C", text: "Menunggu masing-masing bidang mengajukan rencana sendiri baru digabungkan.", score: 4 },
      { key: "D", text: "Mengerjakan bagian terbanyak sendiri agar anggota lain tidak terbebani.", score: 3 },
      { key: "E", text: "Menyerahkan koordinasi kepada anggota yang paling senior.", score: 1 },
    ],
    explanation:
      "Opsi B membangun fondasi kolaborasi lintas bidang melalui kejelasan tujuan, peran, dan ritme komunikasi sejak awal.",
    difficulty: "mudah",
  },
  {
    id: "tkp-066",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Seorang rekan kerja yang sebelumnya pernah berselisih paham dengan Anda kini ditugaskan menjadi mitra kerja satu tim dalam proyek penting. Sikap profesional Anda adalah...",
    options: [
      { key: "A", text: "Bekerja masing-masing tanpa saling mengganggu.", score: 4 },
      { key: "B", text: "Mengungkit kembali perselisihan lama sebelum mulai bekerja agar tuntas.", score: 1 },
      { key: "C", text: "Bersikap dingin dan hanya berkomunikasi seperlunya lewat email.", score: 3 },
      { key: "D", text: "Mengesampingkan persoalan pribadi, berkomunikasi secara profesional dan terbuka, serta fokus pada keberhasilan target tim.", score: 5 },
      { key: "E", text: "Meminta atasan memindahkan salah satu dari kalian ke tim lain.", score: 2 },
    ],
    explanation:
      "Opsi D mencerminkan profesionalisme dan kematangan dalam menjaga jejaring kerja di atas kepentingan atau emosi pribadi.",
    difficulty: "mudah",
  },
  {
    id: "tkp-067",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Dalam program magang atau pertukaran pegawai antar-instansi, Anda mendapat kesempatan bekerja selama sebulan di instansi mitra yang memiliki sistem kerja jauh lebih modern. Apa yang paling penting Anda lakukan?",
    options: [
      { key: "A", text: "Menikmati suasana baru dan mengerjakan tugas ringan saja.", score: 1 },
      { key: "B", text: "Mengikuti rutinitas harian saja tanpa mencatat pembelajaran apa pun.", score: 3 },
      { key: "C", text: "Mengumpulkan kontak pegawai mitra hanya untuk keperluan pindah instansi.", score: 4 },
      { key: "D", text: "Aktif belajar praktik terbaik (best practices), membangun relasi profesional dengan pegawai setempat, serta merumuskan ide adaptasi yang relevan untuk diterapkan di instansi asal.", score: 5 },
      { key: "E", text: "Membanding-bandingkan dan merendahkan instansi asal di depan pegawai mitra.", score: 2 },
    ],
    explanation:
      "Opsi D memaksimalkan jejaring kerja antar-instansi untuk pembelajaran organisasi dan peningkatan kinerja instansi asal.",
    difficulty: "mudah",
  },
  {
    id: "tkp-068",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Anda diminta mewakili kantor dalam pameran pelayanan publik bersama puluhan instansi lain. Di sela-sela menjaga stan, tindakan yang paling mencerminkan kemampuan berjejaring adalah...",
    options: [
      { key: "A", text: "Duduk terus di stan sendiri sambil bermain ponsel saat pengunjung sepi.", score: 1 },
      { key: "B", text: "Berkunjung ke stan instansi lain saat ada waktu luang untuk bertukar informasi inovasi layanan dan membangun kontak kolaborasi yang bermanfaat.", score: 5 },
      { key: "C", text: "Hanya berbicara dengan rekan dari instansi yang sudah Anda kenal sebelumnya.", score: 3 },
      { key: "D", text: "Mengkritik tampilan stan instansi lain yang kurang menarik.", score: 2 },
      { key: "E", text: "Fokus membagikan brosur kantor Anda saja tanpa berinteraksi lebih jauh.", score: 4 },
    ],
    explanation:
      "Opsi B memanfaatkan momentum forum bersama untuk memperluas wawasan inovasi dan membangun jejaring antar-instansi.",
    difficulty: "mudah",
  },
  {
    id: "tkp-069",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Tim Anda berhasil meraih penghargaan inovasi pelayanan terbaik tingkat daerah. Penghargaan tersebut tidak lepas dari kontribusi data dari unit kerja lain yang sering terlupakan saat seremoni. Sikap Anda adalah...",
    options: [
      { key: "A", text: "Mengucapkan terima kasih secara pribadi hanya kepada kepala unitnya saja.", score: 4 },
      { key: "B", text: "Mengirimkan kue ke unit sebelah tanpa menjelaskan kaitannya dengan penghargaan.", score: 3 },
      { key: "C", text: "Menyebut dan mengapresiasi kontribusi unit kerja mitra secara terbuka serta menyampaikan terima kasih secara resmi kepada mereka.", score: 5 },
      { key: "D", text: "Tidak perlu menyebut unit lain agar prestasi unit Anda terlihat dominan.", score: 1 },
      { key: "E", text: "Menerima penghargaan untuk tim Anda sendiri karena tim Anda yang paling banyak bekerja.", score: 2 },
    ],
    explanation:
      "Opsi C membangun kepercayaan dan keberlanjutan jejaring kerja dengan memberikan pengakuan yang adil atas kontribusi mitra.",
    difficulty: "mudah",
  },
  {
    id: "tkp-070",
    category: "TKP",
    subtopic: "Jejaring Kerja",
    question:
      "Ketika instansi Anda harus mengeksekusi program tanggap darurat bencana bersama TNI/Polri, BPBD, dan relawan, terjadi tumpang tindih pengiriman logistik ke satu posko sementara posko lain kekurangan. Sebagai koordinator posko instansi Anda, tindakan Anda adalah...",
    options: [
      { key: "A", text: "Segera bergabung dalam pusat kendali koordinasi terpadu lintas unsur untuk memetakan kebutuhan riil tiap posko dan menyelaraskan rute distribusi bersama.", score: 5 },
      { key: "B", text: "Terus menyalurkan bantuan ke posko yang mudah dijangkau saja agar target instansi tercapai.", score: 2 },
      { key: "C", text: "Menyalahkan posko gabungan yang dianggap tidak mampu mengatur distribusi.", score: 1 },
      { key: "D", text: "Menanyakan posisi posko kosong hanya kepada relawan yang Anda kenal.", score: 4 },
      { key: "E", text: "Menghentikan penyaluran bantuan sementara sampai pihak lain selesai menyalurkan.", score: 3 },
    ],
    explanation:
      "Opsi A menunjukkan koordinasi krisis lintas lembaga yang terintegrasi, cepat, dan berorientasi pada efektivitas bantuan bagi korban.",
    difficulty: "sulit",
  },
];
