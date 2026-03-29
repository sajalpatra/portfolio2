"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(8);
  const finishedRef = useRef(false);

  useEffect(() => {
    const finishLoading = () => {
      if (finishedRef.current) return;
      finishedRef.current = true;
      setProgress(100);
      window.setTimeout(() => setIsLoading(false), 380);
    };

    const progressTimer = window.setInterval(() => {
      setProgress((prev) => (prev >= 92 ? prev : prev + 4));
    }, 70);

    const fallbackTimer = window.setTimeout(finishLoading, 1500);

    if (document.readyState === "complete") {
      finishLoading();
    } else {
      window.addEventListener("load", finishLoading, { once: true });
    }

    return () => {
      window.clearInterval(progressTimer);
      window.clearTimeout(fallbackTimer);
      window.removeEventListener("load", finishLoading);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-white"
        >
          <div className="w-[86%] max-w-sm">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-sm uppercase tracking-[0.24em] text-slate-500"
            >
              Sajal Portfolio
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
              className="mt-3 text-center text-2xl font-semibold text-slate-900"
            >
              Preparing Experience
            </motion.h2>

            <div className="mt-7 h-2 overflow-hidden rounded-full bg-slate-200">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-amber-400 to-sky-400"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "easeOut" }}
              />
            </div>

            <p className="mt-3 text-center text-xs text-slate-500">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
