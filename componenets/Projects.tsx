export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern responsive portfolio site built with Next.js & Tailwind.",
      image: "/image/image1.png", 
      link:"see more"
    },
    {
      title: "AI Chatbot",
      description: "A chatbot powered by NLP models for smart Q&A.",
      image: "/image/image2.png",
    },
    {
      title: "Fitness Tracker",
      description: "A fitness app that tracks workouts, calories, and progress.",
      image: "/image/image.png",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 transition-transform flex flex-col items-center"
            >
              <div className="w-full h-52 mb-4 flex items-center justify-center bg-gray-900 rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-contain h-full  w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-300 text-center">{project.title}</h3>
              <p className="mt-2 text-gray-300 text-center">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}