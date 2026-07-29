import { describe, test, expect } from "vitest";
import { formatAbsenceType, deriveEndDate, formatDate } from "./index";

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
