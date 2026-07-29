import { useConflict } from "../hooks/useConflict";

export function Conflict({ absenceId }: { absenceId: number }) {
  const { data, isLoading, isError } = useConflict(absenceId);

  if (isLoading)
    return (
      <span className="text-gray-300" aria-label="Checking for conflicts">
        Checking...
      </span>
    );
  if (isError)
    return (
      <span className="text-gray-300" aria-label="Error checking conflicts">
        –
      </span>
    );
  if (data?.conflicts)
    return <span aria-label="Has scheduling conflict">⚠️</span>;
  return null;
}
