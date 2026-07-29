import { useQuery } from "@tanstack/react-query";
import { apiGet } from "../api/client";
import { conflictUrl } from "../constants/endpoints";
import type { Conflict } from "../types/absence";

export function useConflict(id: number) {
  return useQuery({
    queryKey: ["conflict", id],
    queryFn: () => apiGet<Conflict>(conflictUrl(id)),
  });
}
