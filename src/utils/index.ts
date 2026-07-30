import type { AbsenceType, Absence, SortColumn } from "../types/absence";

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

export const sortAbsences = (absences: Absence[], sortBy: SortColumn) => {
  if (!absences) return [];
  return [...absences].sort((a, b) => {
    switch (sortBy) {
      case "startDate":
        return (
          new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
        );
      case "endDate":
        return (
          deriveEndDate(a.startDate, a.days).getTime() -
          deriveEndDate(b.startDate, b.days).getTime()
        );
      case "absenceType":
        return formatAbsenceType(a.absenceType).localeCompare(
          formatAbsenceType(b.absenceType)
        );
      case "employeeName":
        return `${a.employee.lastName}${a.employee.firstName}`.localeCompare(
          `${b.employee.lastName}${b.employee.firstName}`
        );
    }
  });
};
