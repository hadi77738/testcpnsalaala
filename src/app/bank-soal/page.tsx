"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ALL_QUESTIONS } from "@/data/questions";
import { CPNS_CATEGORIES } from "@/lib/cpns-config";
import { getBestOptionKey } from "@/lib/scoring";
import { Category } from "@/types/question";
import { BookOpen, ChevronDown, ChevronUp, Search } from "lucide-react";
import { SvgRenderer } from "@/components/SvgRenderer";

const PAGE_SIZE = 20;

function BankSoalContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("kategori");
  const validInitialCat: Category | "ALL" =
    initialCat === "TWK" || initialCat === "TIU" || initialCat === "TKP"
      ? initialCat
      : "ALL";

  const [category, setCategory] = useState<Category | "ALL">(validInitialCat);
  const [subtopic, setSubtopic] = useState<string>("ALL");
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const subtopics = useMemo(() => {
    const base =
      category === "ALL"
        ? ALL_QUESTIONS
        : ALL_QUESTIONS.filter((q) => q.category === category);
    const set = new Set(base.map((q) => q.subtopic));
    return Array.from(set).sort();
  }, [category]);

  const filtered = useMemo(() => {
    const qLower = query.trim().toLowerCase();
    return ALL_QUESTIONS.filter((item) => {
      if (category !== "ALL" && item.category !== category) return false;
      if (subtopic !== "ALL" && item.subtopic !== subtopic) return false;
      if (qLower) {
        const hay =
          `${item.question} ${item.subtopic} ${item.explanation}`.toLowerCase();
        if (!hay.includes(qLower)) return false;
      }
      return true;
    });
  }, [category, subtopic, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE
  );

  const toggleOpen = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-6">
      <div className="space-y-1">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-blue-600" />
          Bank Soal CPNS ({ALL_QUESTIONS.length} Soal)
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Cari dan pelajari soal TWK, TIU, dan TKP beserta kunci jawaban dan
          pembahasannya.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm space-y-3">
        <div className="flex flex-wrap gap-2">
          {(["ALL", "TWK", "TIU", "TKP"] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setCategory(cat);
                setSubtopic("ALL");
                setPage(1);
              }}
              className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                category === cat
                  ? "bg-blue-600 text-white"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {cat === "ALL" ? "Semua Kategori" : cat}
            </button>
          ))}
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setPage(1);
              }}
              placeholder="Cari kata kunci soal atau pembahasan..."
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 py-2.5 pl-9 pr-3 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
            />
          </div>

          <select
            value={subtopic}
            onChange={(e) => {
              setSubtopic(e.target.value);
              setPage(1);
            }}
            className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3 py-2.5 text-sm text-slate-900 dark:text-slate-100 focus:border-blue-500 focus:outline-none"
          >
            <option value="ALL">Semua Sub-Materi ({subtopics.length})</option>
            {subtopics.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>

        <div className="text-xs text-slate-500 dark:text-slate-400">
          Menampilkan <strong>{filtered.length}</strong> soal • Halaman{" "}
          {safePage} dari {totalPages}
        </div>
      </div>

      {/* Question List */}
      <div className="space-y-4">
        {paginated.map((q, idx) => {
          const isOpen = !!openIds[q.id];
          const bestKey = getBestOptionKey(q);
          const cfg = CPNS_CATEGORIES[q.category];
          const num = (safePage - 1) * PAGE_SIZE + idx + 1;

          return (
            <div
              key={q.id}
              className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
                    #{num} ({q.id.toUpperCase()})
                  </span>
                  <span
                    className={`rounded-lg border px-2.5 py-1 text-xs font-semibold ${cfg.badgeClass}`}
                  >
                    {q.category}
                  </span>
                  <span className="rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
                    {q.subtopic}
                  </span>
                </div>
              </div>

              <p className="whitespace-pre-line text-sm sm:text-base leading-relaxed text-slate-800 dark:text-slate-100">
                {q.question}
              </p>

              {q.svg && (
                <div className="flex justify-center">
                  <SvgRenderer svg={q.svg} className="max-w-full overflow-x-auto" />
                </div>
              )}

              <div className="grid gap-1.5 text-sm">
                {q.options.map((opt) => (
                  <div
                    key={opt.key}
                    className={`flex items-start gap-2.5 rounded-xl border px-3 py-2 ${
                      isOpen && opt.key === bestKey
                        ? "border-emerald-400 bg-emerald-50/70 dark:border-emerald-700 dark:bg-emerald-950/40"
                        : "border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/30"
                    }`}
                  >
                    <span className="font-bold text-slate-700 dark:text-slate-200">
                      {opt.key}.
                    </span>
                    <div className="flex-1">
                      {opt.text && <span>{opt.text}</span>}
                      {opt.svg && <SvgRenderer svg={opt.svg} variant="option" />}
                    </div>
                    {isOpen && q.category === "TKP" && (
                      <span className="rounded bg-slate-200 dark:bg-slate-700 px-1.5 py-0.5 text-xs font-bold">
                        +{opt.score}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <div>
                <button
                  type="button"
                  onClick={() => toggleOpen(q.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-400"
                >
                  {isOpen ? (
                    <>
                      <ChevronUp className="h-4 w-4" />
                      Sembunyikan Kunci & Pembahasan
                    </>
                  ) : (
                    <>
                      <ChevronDown className="h-4 w-4" />
                      Lihat Kunci & Pembahasan
                    </>
                  )}
                </button>

                {isOpen && (
                  <div className="mt-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-3.5 text-sm space-y-1">
                    <div className="font-bold text-emerald-700 dark:text-emerald-400">
                      {q.category === "TKP"
                        ? `Opsi Terbaik (5 Poin): ${bestKey}`
                        : `Kunci Jawaban: ${bestKey}`}
                    </div>
                    <p className="whitespace-pre-line text-slate-700 dark:text-slate-200">
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            type="button"
            disabled={safePage <= 1}
            onClick={() => {
              setPage((p) => Math.max(1, p - 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-semibold disabled:opacity-40"
          >
            Sebelumnya
          </button>
          <span className="text-xs font-medium text-slate-600 dark:text-slate-300">
            Halaman {safePage} / {totalPages}
          </span>
          <button
            type="button"
            disabled={safePage >= totalPages}
            onClick={() => {
              setPage((p) => Math.min(totalPages, p + 1));
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2 text-xs font-semibold disabled:opacity-40"
          >
            Berikutnya
          </button>
        </div>
      )}
    </div>
  );
}

export default function BankSoalPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-5xl px-4 py-12 text-center text-sm text-slate-500">
          Memuat bank soal...
        </div>
      }
    >
      <BankSoalContent />
    </Suspense>
  );
}
