import type { Dispatch, SetStateAction } from "react";
import type { Absence } from "../types/absence";
import { deriveEndDate, formatAbsenceType, formatDate } from "../utils";
import { Conflict } from "./Conflict";

export function AbsenceRow({
  absence,
  onSelectEmployee,
}: {
  absence: Absence;
  onSelectEmployee: Dispatch<SetStateAction<string | null>>;
}) {
  const endDate = deriveEndDate(absence.startDate, absence.days);

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">
        <button
          onClick={() =>
            onSelectEmployee((prev: string | null) =>
              prev === absence.employee.id ? null : absence.employee.id
            )
          }
          className="text-blue-600 hover:underline"
        >
          {absence.employee.firstName} {absence.employee.lastName}
        </button>
      </td>
      <td className="px-4 py-2">{formatDate(new Date(absence.startDate))}</td>
      <td className="px-4 py-2">{formatDate(endDate)}</td>
      <td className="px-4 py-2">{formatAbsenceType(absence.absenceType)}</td>
      <td className="px-4 py-2">{absence.approved ? "Approved" : "Pending"}</td>
      <td className="px-4 py-2 text-center w-24">
        <Conflict absenceId={absence.id} />
      </td>
    </tr>
  );
}
