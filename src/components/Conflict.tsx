import { useConflict } from "../hooks/useConflict";

export function Conflict({ absenceId }: { absenceId: number }) {
  const { data, isLoading, isError } = useConflict(absenceId);

  if (isLoading)
    return (
      <span
        className="text-gray-300 items-center"
        aria-label="Checking for conflicts"
      >
        Checking
      </span>
    );
  if (isError)
    return (
      <span
        className="text-gray-300 items-center"
        aria-label="Error checking conflicts"
      >
        –
      </span>
    );
  if (data?.conflicts)
    return (
      <span className="inline-flex items-center gap-1 text-amber-700">
        <span aria-hidden="true">⚠️</span>
        <span className="text-xs">Conflict</span>
      </span>
    );
  return null;
}
