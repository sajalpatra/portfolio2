export default function Achievements() {
  return (
    <section
      id="achievements"
      className="fade-up scroll-mt-28 py-24 md:py-28 bg-gradient-to-br from-blue-50 via-white to-slate-50 text-slate-900"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14 text-slate-900">Achievements</h2>
        <div className="space-y-9">
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-2xl md:text-3xl font-semibold text-sky-700">🏆 Hackathon Winner</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Won 1st place in a 24-hour hackathon with a team of developers.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-2xl md:text-3xl font-semibold text-sky-700">📜 Certified in Web Development</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              Completed a full-stack web development course with certification.
            </p>
          </div>
          <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-md">
            <h3 className="text-2xl md:text-3xl font-semibold text-sky-700">🤖 AI Project Recognition</h3>
            <p className="mt-3 text-base leading-8 text-slate-600">
              AI-powered application featured in a college tech fest showcase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
