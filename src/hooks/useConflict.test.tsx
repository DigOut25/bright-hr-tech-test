import { test, expect, vi } from "vitest";
import { renderHook, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useConflict } from "./useConflict";
import * as apiClient from "../api/client";

vi.mock("../api/client");

function createWrapper() {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    );
  };
}

test("fetches conflict status for a given absence id", async () => {
  vi.spyOn(apiClient, "apiGet").mockResolvedValue({ conflicts: true });

  const { result } = await renderHook(() => useConflict(1), {
    wrapper: createWrapper(),
  });

  await waitFor(() => expect(result.current.isSuccess).toBe(true));
  expect(result.current.data).toEqual({ conflicts: true });
});
