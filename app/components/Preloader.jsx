
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let hideTimer;
    let fallbackTimer;

    const hideLoader = () => {
      hideTimer = window.setTimeout(() => {
        setIsLoading(false);
      }, 700);
    };

    if (document.readyState === "complete") {
      hideLoader();
    } else {
      window.addEventListener("load", hideLoader, { once: true });
    }

    // Prevent the loader from staying forever
    fallbackTimer = window.setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      window.removeEventListener("load", hideLoader);
      window.clearTimeout(hideTimer);
      window.clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="ashram-preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] flex min-h-screen items-center justify-center overflow-hidden bg-[#101c29] text-white"
          role="status"
          aria-label="Loading Shree Krishna Bhakti Ashram"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(253,187,0,0.13),transparent_48%)]" />

          {/* Decorative circles */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-64 w-64 rounded-full border border-[#fdbb00]/20 sm:h-80 sm:w-80"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 24,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-52 w-52 rounded-full border border-dashed border-[#fdbb00]/40 sm:h-64 sm:w-64"
          />

          <div className="relative z-10 flex flex-col items-center px-6 text-center">
            {/* Animated sacred symbol */}
            <motion.div
              initial={{ scale: 0.65, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-7 flex h-24 w-24 items-center justify-center rounded-full border border-[#fdbb00]/50 bg-[#fdbb00]/10 shadow-[0_0_50px_rgba(253,187,0,0.15)] sm:h-28 sm:w-28"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 8px rgba(253,187,0,0.2)",
                    "0 0 28px rgba(253,187,0,0.9)",
                    "0 0 8px rgba(253,187,0,0.2)",
                  ],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="font-serif text-6xl text-[#fdbb00] sm:text-7xl"
              >
                ॐ
              </motion.span>
            </motion.div>

            {/* Ashram name */}
            <motion.h1
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="font-serif text-2xl font-semibold tracking-wide text-white sm:text-4xl"
            >
              Shree Krishna
              <span className="mt-1 block text-[#fdbb00]">
                Bhakti Ashram
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="mt-4 text-xs tracking-[0.3em] text-gray-300 sm:text-sm"
            >
              VRINDAVAN
            </motion.p>

            {/* Loading bar */}
            <div className="mt-9 h-[3px] w-48 overflow-hidden rounded-full bg-white/15 sm:w-56">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{
                  duration: 2.2,
                  ease: "easeInOut",
                }}
                className="h-full w-full origin-left rounded-full bg-[#fdbb00]"
              />
            </div>

            <motion.p
              animate={{ opacity: [0.45, 1, 0.45] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="mt-4 text-[10px] uppercase tracking-[0.25em] text-gray-400 sm:text-xs"
            >
              Preparing your sacred experience
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
