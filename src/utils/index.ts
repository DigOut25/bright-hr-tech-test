import type { AbsenceType } from "../types/absence";

export function deriveEndDate(startDate: string, days: number): Date {
  const start = new Date(startDate);
  const end = new Date(start);
  end.setDate(start.getDate() + days);
  return end;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function formatAbsenceType(absenceType: AbsenceType): string {
  switch (absenceType) {
    case "ANNUAL_LEAVE":
      return "Annual leave";
    case "SICKNESS":
      return "Sickness";
    case "MEDICAL":
      return "Medical";
    default:
      return absenceType;
  }
}
