export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
}

export interface Absence {
  id: number;
  startDate: string;
  days: number;
  absenceType: AbsenceType;
  employee: Employee;
  approved: boolean;
}

export interface Conflict {
  conflicts: boolean;
}

export type AbsenceType = "ANNUAL_LEAVE" | "SICKNESS" | "MEDICAL";

export type SortColumn =
  | "startDate"
  | "endDate"
  | "employeeName"
  | "absenceType";
