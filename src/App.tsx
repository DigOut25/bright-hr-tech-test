import { useAbsences } from "./hooks/useAbsences";

function App() {
  const { data, isLoading, isError } = useAbsences();
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-900">BrightHR Absences</h1>
      <pre className="mt-4 text-xs">{JSON.stringify(data, null, 2)}</pre>
      {isLoading && <p>Loading</p>}
      {isError && <p>Error</p>}
    </div>
  );
}

export default App;
