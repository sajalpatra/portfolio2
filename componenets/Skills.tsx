// components/Skills.tsx
import { Code, Database, Cpu, Globe } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "C", icon: <Code className="w-6 h-6" /> },
    { name: "Java", icon: <Code className="w-6 h-6" /> },
    { name: "JavaScript / TypeScript", icon: <Code className="w-6 h-6" /> },
    {
      name: "React / Next.js/React Native",
      icon: <Globe className="w-6 h-6" />,
    },
    { name: "Node.js / Express", icon: <Cpu className="w-6 h-6" /> },
    {
      name: "Databases (SQL / MongoDB/PostgreSQL/Redis/Convex)",
      icon: <Database className="w-6 h-6" />,
    },
    { name: "Python / AI-ML Basics", icon: <Cpu className="w-6 h-6" /> },
    { name: "HTML / CSS / Tailwind", icon: <Globe className="w-6 h-6" /> },
    { name: "Git / GitHub", icon: <Globe className="w-6 h-6" /> },
  ];

  return (
    <section
      id="skills"
      className="fade-up scroll-mt-28 bg-white mx-auto px-4 py-20 md:py-24"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12 text-slate-900">
        Skills
      </h2>
      <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-7">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center min-h-32 sm:min-h-40 justify-center p-4 sm:p-6 bg-slate-50 rounded-2xl sm:rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition"
          >
            <div className="text-sky-600 mb-2 sm:mb-3 scale-110 sm:scale-125">
              {skill.icon}
            </div>
            <p className="text-slate-700 text-sm sm:text-base font-semibold text-center leading-6 sm:leading-7">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
