import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GraduationCap,
  History,
  Layers,
} from "lucide-react";
import { CPNS_CATEGORIES, TRYOUT_CONFIG } from "@/lib/cpns-config";
import {
  ALL_QUESTIONS,
  getCategoryCounts,
  getSubtopicsByCategory,
} from "@/data/questions";
import { Category } from "@/types/question";

export default function HomePage() {
  const counts = getCategoryCounts();
  const totalQuestions = ALL_QUESTIONS.length;
  const categories: Category[] = ["TWK", "TIU", "TKP"];

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-12 space-y-12">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-10 shadow-sm">
        <div className="max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-950/60 px-3.5 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
            <Award className="h-3.5 w-3.5" />
            Sesuai Kisi-Kisi Resmi SKD CPNS KemenPANRB & BKN
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Latihan Soal & Simulasi CAT CPNS{" "}
            <span className="text-blue-600 dark:text-blue-400">
              TWK, TIU & TKP
            </span>
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-slate-600 dark:text-slate-300">
            Persiapkan diri menghadapi Seleksi Kompetensi Dasar (SKD) dengan{" "}
            <strong className="text-slate-900 dark:text-white">
              {totalQuestions} soal terstruktur
            </strong>{" "}
            lengkap dengan kunci jawaban, bobot nilai TKP (1–5), pembahasan
            mendalam, serta simulasi CAT berwaktu.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              href="/tryout"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              <ClipboardCheck className="h-4 w-4" />
              Mulai Tryout CAT ({TRYOUT_CONFIG.totalQuestions} Soal)
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/latihan"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-100 transition hover:bg-slate-50 dark:hover:bg-slate-700"
            >
              <GraduationCap className="h-4 w-4" />
              Latihan Per Materi
            </Link>
            <Link
              href="/bank-soal"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-700 dark:text-slate-200 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <BookOpen className="h-4 w-4" />
              Jelajahi Bank Soal
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 border-t border-slate-100 dark:border-slate-800 pt-6">
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Total Bank Soal
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {totalQuestions}
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Format Tryout CAT
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {TRYOUT_CONFIG.totalQuestions}{" "}
              <span className="text-sm font-normal text-slate-500">Soal</span>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Durasi Ujian
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-2xl font-bold text-slate-900 dark:text-white">
              <Clock className="h-5 w-5 text-blue-600" />
              {TRYOUT_CONFIG.durationMinutes}{" "}
              <span className="text-sm font-normal text-slate-500">Menit</span>
            </div>
          </div>
          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/50 p-4">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Passing Grade Total
            </div>
            <div className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {TRYOUT_CONFIG.totalPassingGrade}
              <span className="text-sm font-normal text-slate-500">
                {" "}
                / {TRYOUT_CONFIG.totalMaxScore}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Kategori SKD */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Materi & Passing Grade SKD CPNS
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Peserta wajib memenuhi nilai ambang batas di ketiga subtes secara
              bersamaan.
            </p>
          </div>
          <Link
            href="/riwayat"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
          >
            <History className="h-4 w-4" />
            Lihat Riwayat Skor
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {categories.map((cat) => {
            const cfg = CPNS_CATEGORIES[cat];
            const subtopics = getSubtopicsByCategory(cat);
            return (
              <div
                key={cat}
                className="flex flex-col justify-between rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span
                      className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-bold ${cfg.badgeClass}`}
                    >
                      {cfg.name}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {counts[cat]} Soal Tersedia
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {cfg.fullName}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {cfg.description}
                    </p>
                  </div>

                  <div className="space-y-1.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 p-3.5 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">
                        Jumlah Soal Tryout
                      </span>
                      <span className="font-semibold text-slate-900 dark:text-white">
                        {cfg.tryoutCount} soal
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">
                        Nilai Ambang Batas
                      </span>
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">
                        {cfg.passingGrade} / {cfg.maxScore}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500 dark:text-slate-400">
                        Sistem Bobot
                      </span>
                      <span className="font-medium text-slate-700 dark:text-slate-200">
                        {cfg.scoringRule}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {subtopics.map((s) => (
                      <span
                        key={s.subtopic}
                        className="inline-flex items-center gap-1 rounded-md bg-slate-100 dark:bg-slate-800 px-2 py-0.5 text-[11px] font-medium text-slate-600 dark:text-slate-300"
                      >
                        {s.subtopic} ({s.count})
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 flex gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <Link
                    href={`/latihan?kategori=${cat}`}
                    className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 dark:bg-slate-100 px-4 py-2.5 text-xs font-semibold text-white dark:text-slate-900 transition hover:bg-slate-800 dark:hover:bg-slate-200"
                  >
                    <Layers className="h-3.5 w-3.5" />
                    Latihan {cat}
                  </Link>
                  <Link
                    href={`/bank-soal?kategori=${cat}`}
                    className="inline-flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 px-3.5 py-2.5 text-xs font-semibold text-slate-700 dark:text-slate-200 transition hover:bg-slate-50 dark:hover:bg-slate-800"
                  >
                    Bank Soal
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Fitur */}
      <section className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <CheckCircle2 className="h-6 w-6 text-blue-600 mb-3" />
          <h3 className="font-bold text-slate-900 dark:text-white">
            Simulasi CAT Realistis
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Dilengkapi timer mundur 100 menit, navigasi 110 nomor soal, tanda
            ragu-ragu, dan koreksi otomatis sesuai aturan BKN.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <BookOpen className="h-6 w-6 text-emerald-600 mb-3" />
          <h3 className="font-bold text-slate-900 dark:text-white">
            Pembahasan Lengkap
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Setiap soal disertai pembahasan, termasuk penjelasan bobot poin 1–5
            untuk seluruh pilihan pada soal TKP.
          </p>
        </div>
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <History className="h-6 w-6 text-amber-600 mb-3" />
          <h3 className="font-bold text-slate-900 dark:text-white">
            100% Gratis & Tanpa Login
          </h3>
          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
            Riwayat tryout tersimpan otomatis di browser Anda. Ringan, cepat,
            dan siap langsung di-hosting gratis di Vercel.
          </p>
        </div>
      </section>
    </div>
  );
}
