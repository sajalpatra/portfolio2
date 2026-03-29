"use client";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const specialties = [
  "Scalable Full-Stack Systems",
  "AI-Enhanced Product Experiences",
  "Fast and Accessible Web Interfaces",
  "Clean Architecture and APIs",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [specialtyIndex, setSpecialtyIndex] = useState(0);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const specialtyTicker = setInterval(() => {
      setSpecialtyIndex((prev) => (prev + 1) % specialties.length);
    }, 2600);

    const updateTime = () => {
      setLocalTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }),
      );
    };

    updateTime();
    const clockTicker = setInterval(updateTime, 1000);

    return () => {
      clearInterval(specialtyTicker);
      clearInterval(clockTicker);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const imageY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.25]);
  const backgroundScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  return (
    <motion.section
      ref={sectionRef}
      id="home"
      className="fade-up relative isolate overflow-hidden bg-slate-50 scroll-mt-28"
      style={{ opacity: sectionOpacity }}
    >
      <motion.div
        style={{ scale: backgroundScale }}
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(59,130,246,0.15),transparent_45%),radial-gradient(circle_at_85%_10%,rgba(245,158,11,0.12),transparent_40%),linear-gradient(160deg,#f8fafc_0%,#f1f5f9_50%,#eef2ff_100%)]"
      />
      <div className="pointer-events-none absolute -top-20 right-1/3 h-72 w-72 rounded-full bg-amber-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-8 h-80 w-80 rounded-full bg-sky-300/25 blur-3xl" />

      <motion.div
        style={{ y: contentY }}
        className="relative mx-auto flex min-h-[94vh] w-full max-w-7xl items-center px-6 py-24 md:px-10"
      >
        <div className="grid w-full items-center gap-14 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex rounded-full border border-slate-300 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600"
            >
              Full-Stack Developer
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.05 }}
              className="max-w-3xl text-3xl font-bold leading-[1.1] text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Building reliable digital products with modern web technologies.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.12 }}
              className="mt-5 inline-flex min-h-12 items-center gap-2 rounded-xl border border-slate-300 bg-white/95 px-4 py-2 text-sm text-slate-700"
            >
              <span className="text-slate-500">Focused on:</span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={specialties[specialtyIndex]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  className="font-semibold text-amber-700"
                >
                  {specialties[specialtyIndex]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl"
            >
              I am Sajal, focused on creating performant, user-friendly
              applications with clean architecture and thoughtful design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                href="#projects"
                className="rounded-xl bg-amber-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-600"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
              >
                Contact Me
              </Link>
              <a
                href="/resume.pdf"
                download
                className="rounded-xl border border-amber-400 bg-amber-50 px-6 py-3 text-sm font-semibold text-amber-700 transition hover:bg-amber-100"
              >
                Download Resume
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.45 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              {[
                "Next.js",
                "TypeScript",
                "Node.js",
                "AI Integration",
                "Tailwind CSS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-slate-300 bg-white/90 px-3.5 py-2 text-sm font-medium text-slate-600"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            style={{ y: imageY }}
            className="mx-auto w-full max-w-[18rem] sm:max-w-md"
          >
            <div className="rounded-3xl border border-slate-300/80 bg-white/90 p-4 sm:p-7 shadow-[0_20px_55px_rgba(148,163,184,0.28)] backdrop-blur-sm">
              <Image
                src="/image/profile.jpeg"
                alt="Sajal Profile"
                width={420}
                height={460}
                className="h-64 w-full rounded-2xl object-cover sm:h-[24rem] md:h-[28rem]"
                priority
              />

              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/80 p-3 sm:mt-5 sm:p-4">
                <p className="text-sm font-medium text-slate-800">Sajal</p>
                <p className="mt-1 text-sm text-slate-500">
                  Full-Stack Developer and AI Enthusiast
                </p>
                <div className="mt-3 flex items-center justify-between rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs">
                  <span className="inline-flex items-center gap-2 text-emerald-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    Available for projects
                  </span>
                  <span className="font-medium text-slate-600">
                    {localTime || "--:--:--"}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
