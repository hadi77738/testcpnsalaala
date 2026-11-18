import { Category, Question } from "@/types/question";
import { CPNS_CATEGORIES } from "@/lib/cpns-config";
import { twkPilarNegara } from "./twk-pilar-negara";
import { twkNasionalismeIntegritas } from "./twk-nasionalisme-integritas";
import { twkBahasaIndonesia } from "./twk-bahasa-indonesia";
import { tiuVerbal } from "./tiu-verbal";
import { tiuNumerik } from "./tiu-numerik";
import { tiuSoalCerita } from "./tiu-soal-cerita";
import { tiuFigural } from "./tiu-figural";
import { tkpPelayananJejaring } from "./tkp-pelayanan-jejaring";
import { tkpSosbudTik } from "./tkp-sosbud-tik";
import { tkpProfesionalismeAntiradikalisme } from "./tkp-profesionalisme-antiradikalisme";

export const TWK_QUESTIONS: Question[] = [
  ...twkPilarNegara,
  ...twkNasionalismeIntegritas,
  ...twkBahasaIndonesia,
];

export const TIU_QUESTIONS: Question[] = [
  ...tiuVerbal,
  ...tiuNumerik,
  ...tiuSoalCerita,
  ...tiuFigural,
];

export const TKP_QUESTIONS: Question[] = [
  ...tkpPelayananJejaring,
  ...tkpSosbudTik,
  ...tkpProfesionalismeAntiradikalisme,
];

export const ALL_QUESTIONS: Question[] = [
  ...TWK_QUESTIONS,
  ...TIU_QUESTIONS,
  ...TKP_QUESTIONS,
];

export function getQuestionsByCategory(category: Category): Question[] {
  switch (category) {
    case "TWK":
      return TWK_QUESTIONS;
    case "TIU":
      return TIU_QUESTIONS;
    case "TKP":
      return TKP_QUESTIONS;
  }
}

export function getCategoryCounts(): Record<Category, number> {
  return {
    TWK: TWK_QUESTIONS.length,
    TIU: TIU_QUESTIONS.length,
    TKP: TKP_QUESTIONS.length,
  };
}

export function getSubtopicsByCategory(
  category: Category
): { subtopic: string; count: number }[] {
  const list = getQuestionsByCategory(category);
  const map = new Map<string, number>();
  for (const q of list) {
    map.set(q.subtopic, (map.get(q.subtopic) ?? 0) + 1);
  }
  return Array.from(map.entries())
    .map(([subtopic, count]) => ({ subtopic, count }))
    .sort((a, b) => a.subtopic.localeCompare(b.subtopic));
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function generateTryoutQuestions(): Question[] {
  const twk = shuffle(TWK_QUESTIONS).slice(0, CPNS_CATEGORIES.TWK.tryoutCount);
  const tiu = shuffle(TIU_QUESTIONS).slice(0, CPNS_CATEGORIES.TIU.tryoutCount);
  const tkp = shuffle(TKP_QUESTIONS).slice(0, CPNS_CATEGORIES.TKP.tryoutCount);
  return [...twk, ...tiu, ...tkp];
}
