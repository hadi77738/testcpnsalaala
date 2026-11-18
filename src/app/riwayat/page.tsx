"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { clearHistory, loadHistory } from "@/lib/storage";
import { AttemptRecord } from "@/types/question";
import {
  Award,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  History,
  Trash2,
  XCircle,
} from "lucide-react";

function formatDuration(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}m ${s}d`;
}

const emptySubscribe = () => () => {};

export default function RiwayatPage() {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
  const [cleared, setCleared] = useState(false);

  const history: AttemptRecord[] = mounted && !cleared ? loadHistory() : [];

  const handleClear = () => {
    if (window.confirm("Hapus semua riwayat nilai dari browser ini?")) {
      clearHistory();
      setCleared(true);
    }
  };

  const tryouts = history.filter((h) => h.mode === "tryout");
  const passedCount = tryouts.filter((h) => h.passed).length;
  const bestScore = tryouts.reduce(
    (max, h) => Math.max(max, h.scores.total),
    0
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <History className="h-6 w-6 text-blue-600" />
            Riwayat Latihan & Tryout
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Data tersimpan secara lokal di browser Anda (localStorage).
          </p>
        </div>

        {history.length > 0 && (
          <button
            type="button"
            onClick={handleClear}
            className="inline-flex items-center gap-1.5 rounded-xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-950/40 px-3.5 py-2 text-xs font-semibold text-red-700 dark:text-red-300 hover:bg-red-100 dark:hover:bg-red-950"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Hapus Riwayat
          </button>
        )}
      </div>

      {mounted && tryouts.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Total Tryout Selesai
            </div>
            <div className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
              {tryouts.length}x
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Lulus Passing Grade
            </div>
            <div className="mt-1 text-2xl font-bold text-emerald-600 dark:text-emerald-400">
              {passedCount} / {tryouts.length}
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Skor Tryout Tertinggi
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-2xl font-bold text-blue-600 dark:text-blue-400">
              <Award className="h-5 w-5" />
              {bestScore}
              <span className="text-sm font-normal text-slate-500">/ 550</span>
            </div>
          </div>
        </div>
      )}

      {!mounted ? (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-8 text-center text-sm text-slate-500">
          Memuat riwayat...
        </div>
      ) : history.length === 0 ? (
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-10 text-center space-y-4">
          <ClipboardCheck className="mx-auto h-10 w-10 text-slate-400" />
          <div>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
              Belum ada riwayat pengerjaan
            </h2>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
              Mulai Tryout CAT atau Latihan soal untuk melihat perkembangan skor
              Anda.
            </p>
          </div>
          <div className="flex justify-center gap-3">
            <Link
              href="/tryout"
              className="rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Mulai Tryout CAT
            </Link>
            <Link
              href="/latihan"
              className="rounded-xl border border-slate-300 dark:border-slate-700 px-4 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800"
            >
              Mulai Latihan
            </Link>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          {history.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 shadow-sm"
            >
              <div className="space-y-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-md px-2 py-0.5 text-xs font-bold uppercase ${
                      item.mode === "tryout"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300"
                        : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    }`}
                  >
                    {item.mode}
                  </span>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {item.title}
                  </h3>
                  {item.mode === "tryout" &&
                    (item.passed ? (
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:text-emerald-300">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        Lulus PG
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 rounded-full bg-red-50 dark:bg-red-950/60 px-2.5 py-0.5 text-xs font-semibold text-red-700 dark:text-red-300">
                        <XCircle className="h-3.5 w-3.5" />
                        Belum Lulus PG
                      </span>
                    ))}
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400">
                  <span>
                    {new Date(item.date).toLocaleString("id-ID", {
                      dateStyle: "medium",
                      timeStyle: "short",
                    })}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {formatDuration(item.durationSeconds)}
                  </span>
                  <span>{item.totalQuestions} soal</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                <div className="text-center">
                  <div className="text-[11px] text-slate-500">TWK</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {item.scores.TWK}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] text-slate-500">TIU</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {item.scores.TIU}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-[11px] text-slate-500">TKP</div>
                  <div className="font-bold text-slate-800 dark:text-slate-200">
                    {item.scores.TKP}
                  </div>
                </div>
                <div className="border-l border-slate-200 dark:border-slate-700 pl-4 text-center">
                  <div className="text-[11px] text-slate-500">Total</div>
                  <div className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
                    {item.scores.total}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
