import { AbsenceTable } from "./components/AbsenceTable";
import { useAbsences } from "./hooks/useAbsences";

function App() {
  const { data, isLoading, isError } = useAbsences();

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold text-gray-900">BrightHR Absences</h1>
      {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}
      <div className="mt-4">{data && <AbsenceTable absences={data} />}</div>
    </div>
  );
}

export default App;
