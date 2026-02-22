import { Bar } from "react-chartjs-2";

export default function Explainability({ shap }) {
  if (!shap || !shap.features || !shap.importance) return null;

  const data = {
    labels: shap.features,
    datasets: [
      {
        label: "Feature Importance (SHAP)",
        data: shap.importance,
      },
    ],
  };

  return (
    <div className="mt-6">
      <h3 className="text-lg font-bold">Explainability (SHAP)</h3>
      <Bar data={data} />
    </div>
  );
} 