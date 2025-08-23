// components/Biography.tsx
export default function Biography() {
  return (
    <section className=" px-4  py-10 bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start ">
        
        {/* Left: Personal Info */}
        <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            Personal Info
          </h2>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li><span className="font-semibold">Name:</span> Sajal Kanti Patra</li>
            <li><span className="font-semibold">Email:</span> sajalpatra978@gmail.com</li>
            <li><span className="font-semibold">Location:</span> Kolkata, India</li>
            <li><span className="font-semibold">Role:</span> Full-Stack Developer</li>
          </ul>
        </div>

        {/* Right: About Me */}
        <div className="p-6 bg-zinc-800">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
            About Me
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m a passionate software engineer who loves building scalable web apps 
            and exploring AI/ML technologies. Currently pursuing a B.Tech in Computer 
            Science, I spend my time learning full-stack development, DSA, and working 
            on personal projects. My long-term goal is to become a highly skilled 
            AI/ML expert and create impactful digital solutions. 🚀
          </p>
        </div>
      </div>
    </section>
  );
}
