import { Category, OptionKey, Question } from "@/types/question";
import { CPNS_CATEGORIES } from "./cpns-config";

export function getOptionScore(question: Question, selected?: OptionKey): number {
  if (!selected) return 0;
  if (question.category === "TKP") {
    const opt = question.options.find((o) => o.key === selected);
    return opt?.score ?? 0;
  }
  return selected === question.correctAnswer ? 5 : 0;
}

export function getBestOptionKey(question: Question): OptionKey {
  if (question.category === "TKP") {
    const sorted = [...question.options].sort((a, b) => (b.score ?? 0) - (a.score ?? 0));
    return sorted[0]?.key ?? "A";
  }
  return question.correctAnswer ?? "A";
}

export interface ExamEvaluation {
  scores: Record<Category, number> & { total: number };
  correctCounts: Record<Category, number>;
  answeredCounts: Record<Category, number>;
  totalCounts: Record<Category, number>;
  passedByCategory: Record<Category, boolean>;
  passedAll: boolean;
}

export function evaluateExam(
  questions: Question[],
  answers: Record<string, OptionKey>
): ExamEvaluation {
  const scores: Record<Category, number> & { total: number } = {
    TWK: 0,
    TIU: 0,
    TKP: 0,
    total: 0,
  };
  const correctCounts: Record<Category, number> = { TWK: 0, TIU: 0, TKP: 0 };
  const answeredCounts: Record<Category, number> = { TWK: 0, TIU: 0, TKP: 0 };
  const totalCounts: Record<Category, number> = { TWK: 0, TIU: 0, TKP: 0 };

  for (const q of questions) {
    totalCounts[q.category] += 1;
    const sel = answers[q.id];
    if (!sel) continue;

    answeredCounts[q.category] += 1;
    const pts = getOptionScore(q, sel);
    scores[q.category] += pts;
    scores.total += pts;

    if (q.category === "TKP") {
      if (pts === 5) correctCounts.TKP += 1;
    } else if (pts === 5) {
      correctCounts[q.category] += 1;
    }
  }

  const passedByCategory: Record<Category, boolean> = {
    TWK: scores.TWK >= CPNS_CATEGORIES.TWK.passingGrade,
    TIU: scores.TIU >= CPNS_CATEGORIES.TIU.passingGrade,
    TKP: scores.TKP >= CPNS_CATEGORIES.TKP.passingGrade,
  };

  const passedAll =
    passedByCategory.TWK && passedByCategory.TIU && passedByCategory.TKP;

  return {
    scores,
    correctCounts,
    answeredCounts,
    totalCounts,
    passedByCategory,
    passedAll,
  };
}
