"use client";

import { CPNS_CATEGORIES } from "@/lib/cpns-config";
import { getBestOptionKey } from "@/lib/scoring";
import { OptionKey, Question } from "@/types/question";
import { CheckCircle2, Flag, XCircle } from "lucide-react";
import { SvgRenderer } from "./SvgRenderer";

interface QuestionViewProps {
  question: Question;
  index: number;
  total?: number;
  selected?: OptionKey;
  onSelect?: (key: OptionKey) => void;
  showExplanation?: boolean;
  isFlagged?: boolean;
  onToggleFlag?: () => void;
  disabled?: boolean;
}

export function QuestionView({
  question,
  index,
  total,
  selected,
  onSelect,
  showExplanation = false,
  isFlagged = false,
  onToggleFlag,
  disabled = false,
}: QuestionViewProps) {
  const catConfig = CPNS_CATEGORIES[question.category];
  const bestKey = getBestOptionKey(question);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5 sm:p-6 shadow-sm">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
            Soal {index + 1}
            {total ? ` / ${total}` : ""}
          </span>
          <span
            className={`inline-flex items-center rounded-lg border px-2.5 py-1 text-xs font-semibold ${catConfig.badgeClass}`}
          >
            {question.category}
          </span>
          <span className="inline-flex items-center rounded-lg bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-medium text-slate-600 dark:text-slate-300">
            {question.subtopic}
          </span>
          {question.difficulty && (
            <span className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-700 px-2 py-0.5 text-[11px] capitalize text-slate-500 dark:text-slate-400">
              {question.difficulty}
            </span>
          )}
        </div>

        {onToggleFlag && (
          <button
            type="button"
            onClick={onToggleFlag}
            className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
              isFlagged
                ? "border-amber-300 bg-amber-50 text-amber-800 dark:border-amber-700 dark:bg-amber-950/60 dark:text-amber-300"
                : "border-slate-200 bg-white text-slate-600 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
            }`}
          >
            <Flag className="h-3.5 w-3.5" />
            {isFlagged ? "Ditandai Ragu" : "Ragu-ragu"}
          </button>
        )}
      </div>

      <div className="mb-5 space-y-4">
        <p className="whitespace-pre-line text-base leading-relaxed text-slate-800 dark:text-slate-100">
          {question.question}
        </p>
        {question.svg && (
          <div className="flex justify-center">
            <SvgRenderer svg={question.svg} className="max-w-full overflow-x-auto" />
          </div>
        )}
      </div>

      <div className="space-y-2.5">
        {question.options.map((opt) => {
          const isSelected = selected === opt.key;
          const isBest = opt.key === bestKey;

          let cardStyle =
            "border-slate-200 dark:border-slate-700/80 bg-white dark:bg-slate-900 hover:border-blue-400 hover:bg-blue-50/40 dark:hover:bg-blue-950/20";

          if (showExplanation) {
            if (question.category === "TKP") {
              if (opt.score === 5) {
                cardStyle =
                  "border-emerald-400 bg-emerald-50/70 dark:border-emerald-700 dark:bg-emerald-950/40";
              } else if (isSelected) {
                cardStyle =
                  "border-blue-400 bg-blue-50/60 dark:border-blue-700 dark:bg-blue-950/40";
              }
            } else {
              if (isBest) {
                cardStyle =
                  "border-emerald-400 bg-emerald-50/70 dark:border-emerald-700 dark:bg-emerald-950/40";
              } else if (isSelected && !isBest) {
                cardStyle =
                  "border-red-400 bg-red-50/70 dark:border-red-700 dark:bg-red-950/40";
              }
            }
          } else if (isSelected) {
            cardStyle =
              "border-blue-600 bg-blue-50/80 ring-1 ring-blue-600 dark:border-blue-500 dark:bg-blue-950/40 dark:ring-blue-500";
          }

          return (
            <button
              key={opt.key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect?.(opt.key)}
              className={`flex w-full items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${cardStyle} ${
                disabled ? "cursor-default" : "cursor-pointer"
              }`}
            >
              <span
                className={`mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                  isSelected
                    ? "bg-blue-600 text-white"
                    : "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                }`}
              >
                {opt.key}
              </span>

              <div className="flex-1 space-y-2">
                {opt.text && (
                  <span className="block text-sm leading-relaxed text-slate-800 dark:text-slate-100">
                    {opt.text}
                  </span>
                )}
                {opt.svg && <SvgRenderer svg={opt.svg} variant="option" />}
              </div>

              {showExplanation && (
                <div className="shrink-0 self-center">
                  {question.category === "TKP" ? (
                    <span
                      className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-bold ${
                        opt.score === 5
                          ? "bg-emerald-600 text-white"
                          : opt.score === 4
                          ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                          : "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                      }`}
                    >
                      +{opt.score ?? 0}
                    </span>
                  ) : isBest ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                  ) : isSelected ? (
                    <XCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
                  ) : null}
                </div>
              )}
            </button>
          );
        })}
      </div>

      {showExplanation && (
        <div className="mt-5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 p-4">
          <div className="mb-1.5 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            <span>Pembahasan</span>
            <span className="text-emerald-700 dark:text-emerald-400">
              {question.category === "TKP"
                ? `Skor Tertinggi: Opsi ${bestKey} (5 poin)`
                : `Kunci Jawaban: ${bestKey}`}
            </span>
          </div>
          <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-200">
            {question.explanation}
          </p>
        </div>
      )}
    </div>
  );
}
