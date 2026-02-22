import { useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import ResultCard from "./components/ResultCard";
import RiskChart from "./components/RiskChart";

export default function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);

  const analyze = async () => {
    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.error) {
        setResult(data.error);
      } else {
        setResult(data.result);
        setScore(data.legitimate_percentage);
      }
    } catch (error) {
      setResult("Error connecting to server");
    }
  };

  return (
    
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <DarkModeToggle />

      <div className="max-w-lg mx-auto mt-10">
        <h2 className="text-2xl font-bold mb-4">Phishing Detector</h2>
        <input
          className="w-full p-2 rounded border"
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={analyze}
          className="mt-3 w-full bg-blue-500 text-white p-2 rounded"
        >
          Analyze
        </button>

        {result && (
          <div className="mt-4">
            <ResultCard result={result} score={score} />
            <RiskChart score={score} />
          </div>
        )}
      </div>
    </div>
  );
}