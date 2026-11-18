"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { ALL_QUESTIONS } from "@/data/questions";
import { evaluateExam } from "@/lib/scoring";
import { saveAttempt } from "@/lib/storage";
import { Category, OptionKey, Question } from "@/types/question";
import { QuestionView } from "@/components/QuestionView";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  Play,
  RotateCcw,
} from "lucide-react";

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function LatihanContent() {
  const searchParams = useSearchParams();
  const initialCat = searchParams.get("kategori");
  const validInitialCat: Category | "ALL" =
    initialCat === "TWK" || initialCat === "TIU" || initialCat === "TKP"
      ? initialCat
      : "TWK";

  const [category, setCategory] = useState<Category | "ALL">(validInitialCat);
  const [subtopic, setSubtopic] = useState<string>("ALL");
  const [count, setCount] = useState<number>(20);
  const [instantFeedback, setInstantFeedback] = useState<boolean>(true);

  const [sessionQuestions, setSessionQuestions] = useState<Question[] | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, OptionKey>>({});
  const [finished, setFinished] = useState(false);
  const [startedAt, setStartedAt] = useState<number>(0);

  const subtopics = useMemo(() => {
    const base =
      category === "ALL"
        ? ALL_QUESTIONS
        : ALL_QUESTIONS.filter((q) => q.category === category);
    return Array.from(new Set(base.map((q) => q.subtopic))).sort();
  }, [category]);

  const availablePool = useMemo(() => {
    return ALL_QUESTIONS.filter((q) => {
      if (category !== "ALL" && q.category !== category) return false;
      if (subtopic !== "ALL" && q.subtopic !== subtopic) return false;
      return true;
    });
  }, [category, subtopic]);

  const startPractice = () => {
    const shuffled = shuffleArray(availablePool);
    const picked = count === 0 ? shuffled : shuffled.slice(0, count);
    setSessionQuestions(picked);
    setCurrentIndex(0);
    setAnswers({});
    setFinished(false);
    setStartedAt(Date.now());
  };

  const finishPractice = () => {
    if (!sessionQuestions) return;
    const evalResult = evaluateExam(sessionQuestions, answers);
    const durationSeconds = Math.max(
      1,
      Math.round((Date.now() - startedAt) / 1000)
    );
    saveAttempt({
      id: `latihan-${Date.now()}`,
      mode: "latihan",
      title: `Latihan ${category === "ALL" ? "Campuran" : category}${
        subtopic !== "ALL" ? ` (${subtopic})` : ""
      }`,
      date: new Date().toISOString(),
      durationSeconds,
      totalQuestions: sessionQuestions.length,
      scores: evalResult.scores,
      passed: evalResult.passedAll,
    });
    setFinished(true);
  };

  if (!sessionQuestions) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <GraduationCap className="h-6 w-6 text-blue-600" />
            Mode Latihan Per Materi
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Pilih kategori dan sub-materi yang ingin Anda latih. Cocok untuk
            memperdalam kelemahan di topik tertentu.
          </p>
        </div>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              1. Pilih Kategori
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {(["TWK", "TIU", "TKP", "ALL"] as const).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => {
                    setCategory(cat);
                    setSubtopic("ALL");
                  }}
                  className={`rounded-xl border px-4 py-3 text-sm font-semibold transition ${
                    category === cat
                      ? "border-blue-600 bg-blue-50 text-blue-700 dark:border-blue-500 dark:bg-blue-950/60 dark:text-blue-300"
                      : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {cat === "ALL" ? "Campuran" : cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              2. Pilih Sub-Materi
            </label>
            <select
              value={subtopic}
              onChange={(e) => setSubtopic(e.target.value)}
              className="w-full rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 px-3.5 py-2.5 text-sm"
            >
              <option value="ALL">
                Semua Sub-Materi ({availablePool.length} soal tersedia)
              </option>
              {subtopics.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              3. Jumlah Soal
            </label>
            <div className="flex flex-wrap gap-2">
              {[10, 20, 30, 50, 0].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setCount(n)}
                  className={`rounded-xl border px-4 py-2 text-xs font-semibold ${
                    count === n
                      ? "border-blue-600 bg-blue-600 text-white"
                      : "border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  {n === 0 ? `Semua (${availablePool.length})` : `${n} Soal`}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
              4. Mode Pembahasan
            </label>
            <div className="grid sm:grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => setInstantFeedback(true)}
                className={`rounded-xl border p-3.5 text-left ${
                  instantFeedback
                    ? "border-blue-600 bg-blue-50/70 dark:border-blue-500 dark:bg-blue-950/40"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Langsung Bahas
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Kunci & pembahasan muncul langsung setelah memilih jawaban.
                </div>
              </button>
              <button
                type="button"
                onClick={() => setInstantFeedback(false)}
                className={`rounded-xl border p-3.5 text-left ${
                  !instantFeedback
                    ? "border-blue-600 bg-blue-50/70 dark:border-blue-500 dark:bg-blue-950/40"
                    : "border-slate-200 dark:border-slate-700"
                }`}
              >
                <div className="text-sm font-bold text-slate-900 dark:text-white">
                  Ujian Mini
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400">
                  Pembahasan ditampilkan di akhir setelah semua soal selesai.
                </div>
              </button>
            </div>
          </div>

          <button
            type="button"
            disabled={availablePool.length === 0}
            onClick={startPractice}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 disabled:opacity-50"
          >
            <Play className="h-4 w-4" />
            Mulai Latihan Sekarang
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const evalResult = evaluateExam(sessionQuestions, answers);
    const maxPossible = sessionQuestions.length * 5;
    return (
      <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Hasil Latihan Selesai
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {sessionQuestions.length} soal dikerjakan
              </p>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-500">Total Skor</div>
              <div className="text-3xl font-extrabold text-blue-600 dark:text-blue-400">
                {evalResult.scores.total}{" "}
                <span className="text-base font-normal text-slate-400">
                  / {maxPossible}
                </span>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={() => setSessionQuestions(null)}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <RotateCcw className="h-4 w-4" />
              Latihan Lagi
            </button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            Review & Pembahasan
          </h2>
          {sessionQuestions.map((q, idx) => (
            <QuestionView
              key={q.id}
              question={q}
              index={idx}
              total={sessionQuestions.length}
              selected={answers[q.id]}
              showExplanation
              disabled
            />
          ))}
        </div>
      </div>
    );
  }

  const currentQ = sessionQuestions[currentIndex];
  const hasAnsweredCurrent = !!answers[currentQ.id];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setSessionQuestions(null)}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
        >
          ← Ubah Pengaturan Latihan
        </button>
        <div className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          Terjawab: {Object.keys(answers).length} / {sessionQuestions.length}
        </div>
      </div>

      <QuestionView
        question={currentQ}
        index={currentIndex}
        total={sessionQuestions.length}
        selected={answers[currentQ.id]}
        onSelect={(key) => {
          setAnswers((prev) => ({ ...prev, [currentQ.id]: key }));
        }}
        showExplanation={instantFeedback && hasAnsweredCurrent}
        disabled={instantFeedback && hasAnsweredCurrent}
      />

      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          disabled={currentIndex === 0}
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 px-4 py-2.5 text-sm font-semibold disabled:opacity-40"
        >
          <ArrowLeft className="h-4 w-4" />
          Sebelumnya
        </button>

        {currentIndex < sessionQuestions.length - 1 ? (
          <button
            type="button"
            onClick={() =>
              setCurrentIndex((i) =>
                Math.min(sessionQuestions.length - 1, i + 1)
              )
            }
            className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Selanjutnya
            <ArrowRight className="h-4 w-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={finishPractice}
            className="inline-flex items-center gap-1.5 rounded-xl bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            <CheckCircle2 className="h-4 w-4" />
            Selesai & Lihat Skor
          </button>
        )}
      </div>
    </div>
  );
}

export default function LatihanPage() {
  return (
    <Suspense
      fallback={
        <div className="mx-auto max-w-3xl px-4 py-12 text-center text-sm text-slate-500">
          Memuat mode latihan...
        </div>
      }
    >
      <LatihanContent />
    </Suspense>
  );
}
