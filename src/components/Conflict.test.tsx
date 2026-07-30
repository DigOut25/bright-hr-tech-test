import { describe, test, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Conflict } from "./Conflict";
import * as useConflictModule from "../hooks/useConflict";

vi.mock("../hooks/useConflict");

describe("Conflict", () => {
  test("shows loading state", () => {
    vi.spyOn(useConflictModule, "useConflict").mockReturnValue({
      isLoading: true,
      isError: false,
      data: undefined,
    } as any);
    render(<Conflict absenceId={1} />);
    expect(screen.getByText("Checking")).toBeTruthy();
  });

  test("shows error state", () => {
    vi.spyOn(useConflictModule, "useConflict").mockReturnValue({
      isLoading: false,
      isError: true,
      data: undefined,
    } as any);
    render(<Conflict absenceId={1} />);
    expect(screen.getByText("–")).toBeTruthy();
  });

  test("shows conflict warning", () => {
    vi.spyOn(useConflictModule, "useConflict").mockReturnValue({
      isLoading: false,
      isError: false,
      data: { conflicts: true },
    } as any);
    render(<Conflict absenceId={1} />);
    expect(screen.getByText("Conflict")).toBeTruthy();
  });

  test("shows nothing when no conflict", () => {
    vi.spyOn(useConflictModule, "useConflict").mockReturnValue({
      isLoading: false,
      isError: false,
      data: { conflicts: false },
    } as any);
    const { container } = render(<Conflict absenceId={1} />);
    expect(container.textContent).toBe("");
  });
});
