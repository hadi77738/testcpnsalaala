import { Category } from "@/types/question";

export interface CategoryConfig {
  id: Category;
  name: string;
  fullName: string;
  description: string;
  tryoutCount: number;
  passingGrade: number;
  maxScore: number;
  scoringRule: string;
  accentColor: string;
  badgeClass: string;
}

export const CPNS_CATEGORIES: Record<Category, CategoryConfig> = {
  TWK: {
    id: "TWK",
    name: "TWK",
    fullName: "Tes Wawasan Kebangsaan",
    description:
      "Nasionalisme, Integritas, Bela Negara, Pilar Negara (Pancasila, UUD 1945, NKRI, Bhinneka Tunggal Ika), dan Bahasa Indonesia.",
    tryoutCount: 30,
    passingGrade: 65,
    maxScore: 150,
    scoringRule: "Benar = +5, Salah/Kosong = 0",
    accentColor: "#dc2626",
    badgeClass: "bg-red-50 text-red-700 border-red-200 dark:bg-red-950/50 dark:text-red-300 dark:border-red-800",
  },
  TIU: {
    id: "TIU",
    name: "TIU",
    fullName: "Tes Intelegensia Umum",
    description:
      "Kemampuan Verbal (Analogi, Silogisme, Analitis), Numerik (Berhitung, Deret, Perbandingan, Soal Cerita), dan Figural.",
    tryoutCount: 35,
    passingGrade: 80,
    maxScore: 175,
    scoringRule: "Benar = +5, Salah/Kosong = 0",
    accentColor: "#2563eb",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/50 dark:text-blue-300 dark:border-blue-800",
  },
  TKP: {
    id: "TKP",
    name: "TKP",
    fullName: "Tes Karakteristik Pribadi (TKD)",
    description:
      "Pelayanan Publik, Jejaring Kerja, Sosial Budaya, TIK, Profesionalisme, dan Anti-Radikalisme.",
    tryoutCount: 45,
    passingGrade: 166,
    maxScore: 225,
    scoringRule: "Skala 1–5 di tiap pilihan, Kosong = 0",
    accentColor: "#059669",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:border-emerald-800",
  },
};

export const TRYOUT_CONFIG = {
  totalQuestions: 110,
  durationMinutes: 100,
  durationSeconds: 100 * 60,
  totalPassingGrade: 311,
  totalMaxScore: 550,
};
