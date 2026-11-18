"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { generateTryoutQuestions } from "@/data/questions";
import { CPNS_CATEGORIES, TRYOUT_CONFIG } from "@/lib/cpns-config";
import { evaluateExam } from "@/lib/scoring";
import { saveAttempt } from "@/lib/storage";
import { Category, OptionKey, Question } from "@/types/question";
import { QuestionView } from "@/components/QuestionView";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  Play,
  RotateCcw,
  XCircle,
} from "lucide-react";

function formatClock(totalSeconds: number) {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

export default function TryoutPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, OptionKey>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [secondsLeft, setSecondsLeft] = useState(TRYOUT_CONFIG.durationSeconds);
  const [finished, setFinished] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [reviewFilter, setReviewFilter] = useState<"ALL" | Category | "FLAGGED">(
    "ALL"
  );

  const handleSubmit = useCallback(() => {
    if (!questions || finished) return;
    const evalResult = evaluateExam(questions, answers);
    const usedSeconds = Math.max(
      1,
      TRYOUT_CONFIG.durationSeconds - secondsLeft
    );
    saveAttempt({
      id: `tryout-${Date.now()}`,
      mode: "tryout",
      title: `Tryout CAT SKD (${questions.length} Soal)`,
      date: new Date().toISOString(),
      durationSeconds: usedSeconds,
      totalQuestions: questions.length,
      scores: evalResult.scores,
      passed: evalResult.passedAll,
    });
    setConfirmOpen(false);
    setFinished(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [questions, finished, answers, secondsLeft]);

  const handleSubmitRef = useRef(handleSubmit);
  useEffect(() => {
    handleSubmitRef.current = handleSubmit;
  }, [handleSubmit]);

  useEffect(() => {
    if (!questions || finished) return;
    const timer = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(timer);
          window.setTimeout(() => handleSubmitRef.current(), 0);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => window.clearInterval(timer);
  }, [questions, finished]);

  const startTryout = () => {
    const generated = generateTryoutQuestions();
    setQuestions(generated);
    setCurrentIndex(0);
    setAnswers({});
    setFlagged({});
    setSecondsLeft(TRYOUT_CONFIG.durationSeconds);
    setFinished(false);
    setConfirmOpen(false);
  };

  const evalResult = useMemo(() => {
    if (!questions) return null;
    return evaluateExam(questions, answers);
  }, [questions, answers]);

  if (!questions) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-8 space-y-6">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 px-3 py-1 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <ClipboardCheck className="h-3.5 w-3.5" />
              Simulasi CAT BKN Resmi
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Tryout SKD CPNS ({TRYOUT_CONFIG.totalQuestions} Soal)
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Soal diambil secara acak dan proporsional dari bank soal TWK,
              TIU, dan TKP. Pastikan Anda mengerjakan dalam kondisi fokus.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {(["TWK", "TIU", "TKP"] as const).map((cat) => {
              const cfg = CPNS_CATEGORIES[cat];
              return (
                <div
                  key={cat}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4 space-y-1"
                >
                  <div className="text-xs font-bold text-slate-500">{cat}</div>
                  <div className="text-lg font-bold text-slate-900 dark:text-white">
                    {cfg.tryoutCount} Soal
                  </div>
                  <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                    Passing Grade: {cfg.passingGrade}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl bg-slate-50 dark:bg-slate-800/40 p-4 text-sm text-slate-600 dark:text-slate-300 space-y-1.5">
            <div className="font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-600" />
              Ketentuan Ujian:
            </div>
            <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
              <li>
                Waktu pengerjaan: <strong>100 menit</strong> (otomatis selesai
                saat waktu habis).
              </li>
              <li>
                TWK & TIU: Benar <strong>+5</strong>, Salah/Kosong{" "}
                <strong>0</strong>.
              </li>
              <li>
                TKP: Skala nilai <strong>1–5</strong> pada tiap opsi, Kosong{" "}
                <strong>0</strong>.
              </li>
              <li>
                Dinyatakan <strong>LULUS Passing Grade</strong> apabila ketiga
                subtes memenuhi ambang batas (TWK ≥ 65, TIU ≥ 80, TKP ≥ 166).
              </li>
            </ul>
          </div>

          <button
            type="button"
            onClick={startTryout}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700"
          >
            <Play className="h-4 w-4" />
            Mulai Tryout CAT Sekarang
          </button>
        </div>
      </div>
    );
  }

  if (finished && evalResult) {
    const filteredReview = questions.filter((q) => {
      if (reviewFilter === "ALL") return true;
      if (reviewFilter === "FLAGGED") return !!flagged[q.id];
      return q.category === reviewFilter;
    });

    return (
      <div className="mx-auto max-w-5xl px-4 py-8 space-y-6">
        {/* Result Summary */}
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-2">
                {evalResult.passedAll ? (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 px-3.5 py-1 text-xs font-bold text-emerald-700 dark:text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    LULUS PASSING GRADE SKD
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 dark:bg-red-950 px-3.5 py-1 text-xs font-bold text-red-700 dark:text-red-300">
                    <XCircle className="h-4 w-4" />
                    BELUM MEMENUHI PASSING GRADE
                  </span>
                )}
              </div>
              <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                Hasil Simulasi CAT CPNS
              </h1>
            </div>

            <div className="text-right">
              <div className="text-xs font-medium text-slate-500">
                Total Skor SKD
              </div>
              <div className="text-4xl font-black text-blue-600 dark:text-blue-400">
                {evalResult.scores.total}
                <span className="text-base font-normal text-slate-400">
                  {" "}
                  / {TRYOUT_CONFIG.totalMaxScore}
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {(["TWK", "TIU", "TKP"] as const).map((cat) => {
              const cfg = CPNS_CATEGORIES[cat];
              const score = evalResult.scores[cat];
              const passed = evalResult.passedByCategory[cat];
              const pct = Math.min(100, Math.round((score / cfg.maxScore) * 100));

              return (
                <div
                  key={cat}
                  className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 p-4 space-y-2.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900 dark:text-white">
                      {cat}
                    </span>
                    <span
                      className={`text-xs font-bold ${
                        passed
                          ? "text-emerald-600 dark:text-emerald-400"
                          : "text-red-600 dark:text-red-400"
                      }`}
                    >
                      {passed ? "Lulus" : "Tidak Lulus"} (PG {cfg.passingGrade})
                    </span>
                  </div>

                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white">
                    {score}{" "}
                    <span className="text-xs font-normal text-slate-500">
                      / {cfg.maxScore}
                    </span>
                  </div>

                  <div className="h-2 w-full overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
                    <div
                      className={`h-full rounded-full ${
                        passed ? "bg-emerald-500" : "bg-red-500"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>

                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    Terjawab: {evalResult.answeredCounts[cat]} /{" "}
                    {evalResult.totalCounts[cat]} soal
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={startTryout}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              <RotateCcw className="h-4 w-4" />
              Ulangi Tryout Baru
            </button>
          </div>
        </div>

        {/* Review Section */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              Pembahasan Soal ({filteredReview.length})
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {(["ALL", "TWK", "TIU", "TKP", "FLAGGED"] as const).map((f) => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setReviewFilter(f)}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold ${
                    reviewFilter === f
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300"
                  }`}
                >
                  {f === "ALL"
                    ? "Semua"
                    : f === "FLAGGED"
                    ? "Ditandai Ragu"
                    : f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {filteredReview.map((q) => {
              const origIndex = questions.findIndex((item) => item.id === q.id);
              return (
                <QuestionView
                  key={q.id}
                  question={q}
                  index={origIndex}
                  total={questions.length}
                  selected={answers[q.id]}
                  showExplanation
                  disabled
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const answeredTotal = Object.keys(answers).length;
  const isLowTime = secondsLeft <= 300;

  return (
    <div className="mx-auto max-w-6xl px-4 py-6 space-y-5">
      {/* Top Bar */}
      <div className="sticky top-16 z-30 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur px-4 py-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div
            className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-sm font-bold ${
              isLowTime
                ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300"
                : "bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100"
            }`}
          >
            <Clock className="h-4 w-4" />
            {formatClock(secondsLeft)}
          </div>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Terjawab: <strong>{answeredTotal}</strong> / {questions.length}
          </span>
        </div>

        <button
          type="button"
          onClick={() => setConfirmOpen(true)}
          className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
        >
          Selesai Ujian
        </button>
      </div>

      {/* Main CAT Grid */}
      <div className="grid gap-6 lg:grid-cols-[1fr_300px]">
        <div className="space-y-4">
          <QuestionView
            question={currentQ}
            index={currentIndex}
            total={questions.length}
            selected={answers[currentQ.id]}
            onSelect={(key) =>
              setAnswers((prev) => ({ ...prev, [currentQ.id]: key }))
            }
            isFlagged={!!flagged[currentQ.id]}
            onToggleFlag={() =>
              setFlagged((prev) => ({
                ...prev,
                [currentQ.id]: !prev[currentQ.id],
              }))
            }
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

            <button
              type="button"
              onClick={() => {
                if (currentIndex < questions.length - 1) {
                  setCurrentIndex((i) => i + 1);
                } else {
                  setConfirmOpen(true);
                }
              }}
              className="inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              {currentIndex < questions.length - 1 ? (
                <>
                  Simpan & Lanjutkan
                  <ArrowRight className="h-4 w-4" />
                </>
              ) : (
                "Tinjau & Selesai"
              )}
            </button>
          </div>
        </div>

        {/* Navigation Grid */}
        <aside className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-4 shadow-sm h-fit">
          <h3 className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-500">
            Navigasi Soal ({questions.length})
          </h3>
          <div className="grid grid-cols-10 lg:grid-cols-6 gap-1.5 max-h-[420px] overflow-y-auto pr-1">
            {questions.map((q, idx) => {
              const isAnswered = !!answers[q.id];
              const isFlag = !!flagged[q.id];
              const isActive = idx === currentIndex;

              let btnCls =
                "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300";
              if (isFlag) {
                btnCls = "bg-amber-400 text-slate-950 font-bold";
              } else if (isAnswered) {
                btnCls = "bg-emerald-600 text-white font-bold";
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-8 rounded-lg text-xs transition ${btnCls} ${
                    isActive ? "ring-2 ring-blue-600 ring-offset-1" : ""
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-4 flex flex-wrap gap-3 border-t border-slate-100 dark:border-slate-800 pt-3 text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded bg-emerald-600" />
              Dijawab
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded bg-amber-400" />
              Ragu
            </span>
            <span className="inline-flex items-center gap-1">
              <span className="h-2.5 w-2.5 rounded bg-slate-200 dark:bg-slate-700" />
              Kosong
            </span>
          </div>
        </aside>
      </div>

      {/* Confirmation Modal */}
      {confirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-xl space-y-4">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 shrink-0 text-amber-500" />
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Akhiri Tryout CAT?
                </h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  Anda telah menjawab <strong>{answeredTotal}</strong> dari{" "}
                  <strong>{questions.length}</strong> soal. Soal yang belum
                  dijawab bernilai 0.
                </p>
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setConfirmOpen(false)}
                className="rounded-xl border border-slate-200 dark:border-slate-700 px-4 py-2 text-xs font-semibold"
              >
                Kembali Mengerjakan
              </button>
              <button
                type="button"
                onClick={handleSubmit}
                className="rounded-xl bg-emerald-600 px-4 py-2 text-xs font-semibold text-white hover:bg-emerald-700"
              >
                Ya, Kumpulkan Sekarang
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
