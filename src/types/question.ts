export type Category = "TWK" | "TIU" | "TKP";

export type OptionKey = "A" | "B" | "C" | "D" | "E";

export interface QuestionOption {
  key: OptionKey;
  text: string;
  /** Bobot nilai: untuk TWK/TIU (5 jika benar, 0 jika salah); untuk TKP (1 sampai 5) */
  score?: number;
  /** SVG inline opsional untuk soal TIU Figural */
  svg?: string;
}

export interface Question {
  id: string;
  category: Category;
  subtopic: string;
  question: string;
  /** SVG inline opsional untuk diagram/gambar soal TIU Figural */
  svg?: string;
  options: QuestionOption[];
  /** Wajib untuk TWK dan TIU; opsional untuk TKP (karena semua opsi bernilai 1-5) */
  correctAnswer?: OptionKey;
  explanation: string;
  difficulty?: "mudah" | "sedang" | "sulit";
}

export interface AttemptRecord {
  id: string;
  mode: "tryout" | "latihan";
  title: string;
  date: string;
  durationSeconds: number;
  totalQuestions: number;
  scores: {
    TWK: number;
    TIU: number;
    TKP: number;
    total: number;
  };
  passed: boolean;
}
