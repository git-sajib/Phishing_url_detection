import { Bar } from "react-chartjs-2";

export default function Explainability({ shap }) {
  if (!shap || !Array.isArray(shap) || shap.length === 0) return null;

  const data = {
    labels: shap.map((s) => s.feature),
    datasets: [
      {
        label: "Feature Importance (SHAP)",
        data: shap.map((s) => s.importance),
        backgroundColor: "#3b82f6",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
      },
    },
  };

  return (
    <div className="mt-6 p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h3 className="text-lg font-bold mb-2">Explainability (SHAP)</h3>
      <Bar data={data} options={options} />
    </div>
  );
}