export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-950 text-white"
    >
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-400">Contact Me</h2>
        <p className="text-gray-300 mb-6">
          Feel free to reach out via the form below or email me directly.
        </p>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-400 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-400 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-3 rounded-xl bg-gray-800 border border-gray-700 focus:border-blue-400 outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
