import type { SortColumn } from "../types/absence";

interface SortByProps {
  value: SortColumn;
  onChange: (column: SortColumn) => void;
}

export function SortBy({ value, onChange }: SortByProps) {
  return (
    <label className="mb-4 flex items-center gap-2 text-sm">
      Sort by:
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as SortColumn)}
        className="rounded border border-gray-300 px-2 py-1"
      >
        <option value="startDate">Start Date</option>
        <option value="endDate">End Date</option>
        <option value="absenceType">Absence Type</option>
        <option value="employeeName">Employee Name</option>
      </select>
    </label>
  );
}
