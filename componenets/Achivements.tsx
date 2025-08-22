export default function Achievements() {
  return (
    <section
      id="achievements"
      className="py-20 bg-gradient-to-br from-blue-950 via-black to-gray-900 text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Achievements</h2>
        <div className="space-y-8">
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-300">🏆 Hackathon Winner</h3>
            <p className="mt-2 text-gray-300">
              Won 1st place in a 24-hour hackathon with a team of developers.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-300">📜 Certified in Web Development</h3>
            <p className="mt-2 text-gray-300">
              Completed a full-stack web development course with certification.
            </p>
          </div>
          <div className="p-6 bg-gray-800 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold text-blue-300">🤖 AI Project Recognition</h3>
            <p className="mt-2 text-gray-300">
              AI-powered application featured in a college tech fest showcase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
