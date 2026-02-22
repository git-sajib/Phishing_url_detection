export default function Hero() {
  return (
    <section className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center">
        
        <div className="md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            AI-Powered Phishing Detection <br />
            with Cybersecurity Intelligence
          </h1>

          <p className="mt-4 text-gray-300 text-lg">
            Detect malicious websites using machine learning and explainable AI.
            Protect users from phishing attacks with modern security analysis.
          </p>

          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold">
            Start Detection
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="https://images.pexels.com/photos/5380641/pexels-photo-5380641.jpeg"
            alt="Cybersecurity Protection"
            className="rounded-xl shadow-lg"
            width="500"
          />
        </div>

      </div>
    </section>
  );
}