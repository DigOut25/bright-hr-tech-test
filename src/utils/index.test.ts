import { describe, test, expect } from "vitest";
import {
  formatAbsenceType,
  deriveEndDate,
  formatDate,
  sortAbsences,
} from "./index";
import type { Absence, AbsenceType } from "../types/absence";

const mockAbsence: Absence = {
  id: 1,
  startDate: "2024-01-01T00:00:00.000Z",
  days: 5,
  absenceType: "SICKNESS",
  employee: { id: "e1", firstName: "Jane", lastName: "Doe" },
  approved: true,
};

describe("formatAbsenceType", () => {
  test("formats ANNUAL_LEAVE", () => {
    expect(formatAbsenceType("ANNUAL_LEAVE")).toBe("Annual leave");
  });
  test("formats SICKNESS", () => {
    expect(formatAbsenceType("SICKNESS")).toBe("Sickness");
  });
  test("formats MEDICAL", () => {
    expect(formatAbsenceType("MEDICAL")).toBe("Medical");
  });
});

describe("deriveEndDate", () => {
  test("adds the correct number of days", () => {
    const end = deriveEndDate("2024-01-01T12:00:00.000Z", 5);
    expect(end.toISOString().slice(0, 10)).toBe("2024-01-06");
  });
  test("updates month correctly", () => {
    const end = deriveEndDate("2025-08-31T12:00:00.000Z", 2);
    expect(end.toISOString().slice(0, 10)).toBe("2025-09-02");
  });
  test("updates year correctly", () => {
    const end = deriveEndDate("2025-12-31T12:00:00.000Z", 1);
    expect(end.toISOString().slice(0, 10)).toBe("2026-01-01");
  });
});

describe("formatDate", () => {
  test("formats a date correctly day, short month and year", () => {
    const date = new Date("2026-01-01T12:00:00.000Z");
    expect(formatDate(date)).toBe("1 Jan 2026");
  });

  test("formats a different month correctly", () => {
    const date = new Date("2025-07-23T12:00:00.000Z");
    expect(formatDate(date)).toBe("23 Jul 2025");
  });
});

describe("sortAbsences", () => {
  test("sorts by start date ascending", () => {
    const absences = [
      { ...mockAbsence, id: 1, startDate: "2025-03-01T00:00:00.000Z" },
      { ...mockAbsence, id: 2, startDate: "2025-01-01T00:00:00.000Z" },
    ];
    const sorted = sortAbsences(absences, "startDate");
    expect(sorted[0].id).toBe(2);
    expect(sorted[1].id).toBe(1);
  });
  test("sorts by absence type alphabetically", () => {
    const absences = [
      { ...mockAbsence, absenceType: "SICKNESS" as AbsenceType },
      { ...mockAbsence, absenceType: "ANNUAL_LEAVE" as AbsenceType },
    ];
    const sorted = sortAbsences(absences, "absenceType");
    expect(sorted[0].absenceType).toBe("ANNUAL_LEAVE");
    expect(sorted[1].absenceType).toBe("SICKNESS");
  });
});
