import { useEffect, useState } from "react";
import { apiGet } from "./api/client";
import { ABSENCES_URL } from "./constants/endpoints";

function App() {
  const [data, setData] = useState<unknown>(null);

  useEffect(() => {
    apiGet(ABSENCES_URL).then(setData);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold text-gray-900">BrightHR Absences</h1>
      <pre className="mt-4 text-xs">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
