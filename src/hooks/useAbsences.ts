import { useQuery } from "@tanstack/react-query";
import { apiGet } from "../api/client";
import { ABSENCES_URL } from "../constants/endpoints";
import type { Absence } from "../types/absence";

export function useAbsences() {
  return useQuery({
    queryKey: ["absences"],
    queryFn: () => apiGet<Absence[]>(ABSENCES_URL),
  });
}
