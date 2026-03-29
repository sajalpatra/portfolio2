// components/Biography.tsx
export default function Biography() {
  return (
    <section
      id="about"
      className="fade-up scroll-mt-28 px-4 py-20 md:py-24 bg-slate-50"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left: Personal Info */}
        <div className="h-full bg-white p-8 rounded-3xl shadow-md border border-slate-200">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">
            Personal Info
          </h2>
          <ul className="space-y-4 text-base leading-7 text-slate-600">
            <li>
              <span className="font-semibold">Name:</span> Sajal Kanti Patra
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              sajalpatra978@gmail.com
            </li>
            <li>
              <span className="font-semibold">Location:</span> Kolkata, India
            </li>
            <li>
              <span className="font-semibold">Role:</span> Full-Stack Developer
            </li>
          </ul>
        </div>

        {/* Right: About Me */}
        <div className="h-full p-8 bg-white rounded-3xl shadow-md border border-slate-200">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">About Me</h2>
          <p className="text-base md:text-lg text-slate-600 leading-8">
            I’m a passionate software engineer who loves building scalable web
            apps and exploring AI/ML technologies. Currently pursuing a B.Tech
            in Computer Science, I spend my time learning full-stack
            development, DSA, and working on personal projects. My long-term
            goal is to become a highly skilled AI/ML expert and create impactful
            digital solutions. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
