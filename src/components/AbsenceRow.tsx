import type { Absence } from "../types/absence";
import { deriveEndDate, formatDate } from "../utils";

export function AbsenceRow({ absence }: { absence: Absence }) {
  const endDate = deriveEndDate(absence.startDate, absence.days);

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">
        {absence.employee.firstName} {absence.employee.lastName}
      </td>
      <td className="px-4 py-2">{formatDate(new Date(absence.startDate))}</td>
      <td className="px-4 py-2">{formatDate(endDate)}</td>
      <td className="px-4 py-2">{absence.absenceType}</td>
      <td className="px-4 py-2">{absence.approved ? "Approved" : "Pending"}</td>
    </tr>
  );
}
