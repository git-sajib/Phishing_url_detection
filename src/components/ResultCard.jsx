export default function ResultCard({ result, score }) {
  const isLegit = score >= 50;

  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-900">
      <h3 className="text-lg font-bold">
        {isLegit ? "✅ Legitimate Website" : "🚨 Phishing Website"}
      </h3>

      <p className="text-sm mt-2">
        Legitimate Probability: <strong>{score}%</strong>
      </p>
    </div>
  );
}