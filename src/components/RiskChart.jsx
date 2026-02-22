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
        backgroundColor: ["#22c55e", "#ef4444"], // green, red
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
    <div className="mt-4 p-4 bg-white dark:bg-gray-900 rounded-lg shadow">
      <Bar data={data} options={options} />
    </div>
  );
}