export default function ResultCard({ result, score, shap }) {
  if (!result) return null;

  const isLegit = score >= 50;

  return (
    <div className="p-4 rounded-lg shadow bg-white dark:bg-gray-900">
      <h3 className="text-lg font-bold">
        {isLegit ? "✅ Legitimate Website" : "🚨 Phishing Website"}
      </h3>

      <p className="text-sm mt-2">
        Legitimate Probability: <strong>{score}%</strong>
      </p>

      {shap?.features && (
        <div className="mt-4">
          <h4 className="font-semibold">Top Contributing Features</h4>
          <ul className="text-sm">
            {shap.features.map((f, i) => (
              <li key={i}>
                {f}: {shap.importance[i]?.toFixed(3)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}