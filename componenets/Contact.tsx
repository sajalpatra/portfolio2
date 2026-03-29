"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_vu1rmeu", // from EmailJS
        "teplate_7pfxfor", // from EmailJS
        formRef.current,
        "1FNAH1C4hB6K2g3aW", // from EmailJS
      )
      .then(
        () => alert("Message sent successfully ✅"),
        (error) => alert("Failed to send ❌ " + error.text),
      );
  };

  return (
    <section
      id="contact"
      className="fade-up scroll-mt-28 py-24 md:py-28 bg-gradient-to-br from-white via-slate-50 to-blue-50 text-slate-900"
    >
      <div className="max-w-4xl mx-auto px-6 md:px-10 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-slate-900">
          Contact Me
        </h2>
        <p className="text-base md:text-lg leading-8 text-slate-600 mb-8">
          Feel free to reach out via the form below or email me directly.
        </p>

        <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full p-4 rounded-2xl bg-white border border-slate-300 focus:border-sky-500 text-base text-slate-800 outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full p-4 rounded-2xl bg-white border border-slate-300 focus:border-sky-500 text-base text-slate-800 outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-4 rounded-2xl bg-white border border-slate-300 focus:border-sky-500 text-base text-slate-800 outline-none"
          ></textarea>
          <button
            type="submit"
            className="px-7 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-base font-semibold shadow-md transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
