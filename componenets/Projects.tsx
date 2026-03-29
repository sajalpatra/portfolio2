export default function Projects() {
  const projects = [
    {
      title: "Expense Tracker App",
      description:
        "A full stack web application built with React, Node.js, and MongoDB that allows users to track their expenses, categorize them, and visualize spending patterns through interactive charts.",
      image: "/image/expence.png",
      link: "https://my-app-e887-4xeva43tx-sajalpatra978-gmailcoms-projects.vercel.app/",
    },
    {
      title: "Classpilot",
      description:
        "Ai powered classroom ecosystem for students and teachers to manage learning within the docs and notes provided by the teacher and more.",
      image: "/image/classpilot.jpeg",
      link: "https://frosthacks-localhost.vercel.app/",
    },
    {
      title: "civic-app admin dashboard webapp",
      description:
        "An admin dashboard for managing civic releted reports and users.",
      image: "/image/image.png",
      link: "https://civic-web-opfg-git-main-sajalpatra978-gmailcoms-projects.vercel.app/",
    },
  ];

  const isValidUrl = (value?: string) =>
    !!value && (value.startsWith("http://") || value.startsWith("https://"));

  return (
    <section
      id="projects"
      className="fade-up scroll-mt-28 py-24 md:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-14 text-slate-900">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-9">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-7 bg-white rounded-3xl border border-slate-200 shadow-md hover:scale-[1.02] transition-transform flex flex-col items-center"
            >
              <div className="w-full h-60 mb-5 flex items-center justify-center bg-slate-100 rounded-2xl overflow-hidden border border-slate-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full  w-full"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-semibold text-sky-700 text-center">
                {project.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600 text-center">
                {project.description}
              </p>

              {isValidUrl(project.link) ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex rounded-xl bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-amber-600"
                >
                  View Project
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="mt-7 inline-flex cursor-not-allowed rounded-xl border border-slate-300 bg-slate-100 px-5 py-2.5 text-sm font-semibold text-slate-500"
                >
                  Link Coming Soon
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
