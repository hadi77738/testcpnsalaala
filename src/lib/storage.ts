import { AttemptRecord } from "@/types/question";

const HISTORY_KEY = "latihcpns_history_v1";

export function loadHistory(): AttemptRecord[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(HISTORY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveAttempt(record: AttemptRecord): AttemptRecord[] {
  const existing = loadHistory();
  const updated = [record, ...existing].slice(0, 50);
  if (typeof window !== "undefined") {
    try {
      window.localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
    } catch {
      // Ignore quota errors
    }
  }
  return updated;
}

export function clearHistory(): void {
  if (typeof window !== "undefined") {
    window.localStorage.removeItem(HISTORY_KEY);
  }
}
