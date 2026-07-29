import { useMemo, useState } from "react";
import { AbsenceTable } from "./components/AbsenceTable";
import { useAbsences } from "./hooks/useAbsences";
import type { SortColumn } from "./types/absence";
import { SortBy } from "./components/SortBy";
import { deriveEndDate, formatAbsenceType } from "./utils";

function App() {
  const { data, isLoading, isError } = useAbsences();

  const [sortBy, setSortBy] = useState<SortColumn>("startDate");
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<string | null>(
    null
  );

  const sortedData = useMemo(() => {
    if (!data) return [];
    return [...data].sort((a, b) => {
      switch (sortBy) {
        case "startDate":
          return (
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
          );
        case "endDate":
          return (
            deriveEndDate(a.startDate, a.days).getTime() -
            deriveEndDate(b.startDate, b.days).getTime()
          );
        case "absenceType":
          return formatAbsenceType(a.absenceType).localeCompare(
            formatAbsenceType(b.absenceType)
          );
        case "employeeName":
          return `${a.employee.lastName}${a.employee.firstName}`.localeCompare(
            `${b.employee.lastName}${b.employee.firstName}`
          );
      }
    });
  }, [data, sortBy]);

  const displayedAbsences = useMemo(() => {
    if (!selectedEmployeeId) return sortedData;
    return sortedData.filter(
      (absence) => absence.employee.id === selectedEmployeeId
    );
  }, [sortedData, selectedEmployeeId]);

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-900">BrightHR Absences</h1>
      {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}
      <div className="mt-4">
        <SortBy value={sortBy} onChange={setSortBy} />
        {selectedEmployeeId && (
          <button
            onClick={() => setSelectedEmployeeId(null)}
            className="mb-4 text-sm text-blue-600 underline"
          >
            Back to all absences
          </button>
        )}
        <>
          {data && (
            <AbsenceTable
              absences={displayedAbsences}
              onSelectEmployee={setSelectedEmployeeId}
            />
          )}
        </>
      </div>
    </div>
  );
}

export default App;
