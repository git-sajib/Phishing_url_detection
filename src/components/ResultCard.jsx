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

      {/* SHAP explanation (safe handling) */}
      {shap && Array.isArray(shap) && shap.length > 0 && (
        <div className="mt-4">
          <h4 className="font-semibold">Top Contributing Features</h4>
          <ul className="text-sm">
            {shap.slice(0, 5).map((item, i) => (
              <li key={i}>
                {item.feature}: {item.importance?.toFixed(3)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}