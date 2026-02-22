import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components (important)
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function RiskChart({ score }) {
  if (score === undefined || score === null) return null;

  const data = {
    labels: ["Legitimate", "Risk"],
    datasets: [
      {
        label: "Risk Analysis",
        data: [score, 100 - score],
      },
    ],
  };

  return (
    <div className="mt-4">
      <Bar data={data} />
    </div>
  );
}