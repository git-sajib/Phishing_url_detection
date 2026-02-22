import { useState } from "react";
import Hero from "./components/Hero";
import DarkModeToggle from "./components/DarkModeToggle";
import ResultCard from "./components/ResultCard";
import RiskChart from "./components/RiskChart";
import Explainability from "./components/Explainability";

export default function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState("");
  const [score, setScore] = useState(0);
  const [shap, setShap] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const analyze = async () => {
    if (!url) {
      setError("Please enter URL");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (data.error) {
        setError(data.error);
      } else {
        setResult(data.result);
        setScore(data.legitimate_percentage || 0);
        setShap(data.shap_values || null);  // SHAP explanation (if provided)
      }
    } catch (err) {
      setError("Error connecting to server");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <DarkModeToggle />

      <Hero />

      <div className="max-w-lg mx-auto p-6">
        <input
          className="w-full p-2 rounded border mt-4"
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={analyze}
          className="mt-3 w-full bg-blue-600 text-white p-2 rounded"
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Analyze"}
        </button>

        {error && <div className="mt-4 text-red-500">{error}</div>}

        {result && !error && (
          <div className="mt-4">
            <ResultCard result={result} score={score} shap={shap} />
            <RiskChart score={score} />
            <Explainability shap={shap} />
          </div>
        )}
      </div>
    </div>
  );
}