// components/Skills.tsx
import { Code, Database, Cpu, Globe } from "lucide-react";

export default function Skills() {
  const skills = [
    { name: "JavaScript / TypeScript", icon: <Code className="w-6 h-6" /> },
    { name: "React / Next.js", icon: <Globe className="w-6 h-6" /> },
    { name: "Node.js / Express", icon: <Cpu className="w-6 h-6" /> },
    { name: "Databases (SQL / MongoDB)", icon: <Database className="w-6 h-6" /> },
    { name: "Python / AI-ML Basics", icon: <Cpu className="w-6 h-6" /> },
    { name: "HTML / CSS / Tailwind", icon: <Globe className="w-6 h-6" /> },
  ];

  return (
    <section className="bg-gray-900  mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-900  dark:text-gray-100">
        Skills
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-lg transition"
          >
            <div className="text-blue-500 dark:text-blue-400 mb-2">{skill.icon}</div>
            <p className="text-gray-800 dark:text-gray-200 text-sm font-medium text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
