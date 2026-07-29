import type { Dispatch, SetStateAction } from "react";
import type { Absence } from "../types/absence";
import { AbsenceRow } from "./AbsenceRow";

export function AbsenceTable({
  absences,
  onSelectEmployee,
}: {
  absences: Absence[];
  onSelectEmployee: Dispatch<SetStateAction<string | null>>;
}) {
  return (
    <table className="w-full text-left text-sm">
      <thead>
        <tr className="border-b border-gray-300 font-semibold">
          <th className="px-4 py-2">Employee</th>
          <th className="px-4 py-2">Start Date</th>
          <th className="px-4 py-2">End Date</th>
          <th className="px-4 py-2">Type</th>
          <th className="px-4 py-2">Status</th>
          <th className="px-4 py-2">Conflict</th>
        </tr>
      </thead>
      <tbody>
        {absences.map((absence) => (
          <AbsenceRow
            key={absence.id}
            absence={absence}
            onSelectEmployee={onSelectEmployee}
          />
        ))}
      </tbody>
    </table>
  );
}
