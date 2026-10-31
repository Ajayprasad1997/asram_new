
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays } from "lucide-react";

const slides = [
  {
    line: "With a View",
    description:
      "Wake up to peaceful surroundings, breathe in the fresh air, and discover a beautiful place to reconnect with yourself.",
  },
  {
    line: "to remember",
    description:
      "Experience heartfelt hospitality, serene accommodation, and meaningful moments in a peaceful spiritual sanctuary.",
  },
  {
    line: "by the sea",
    description:
      "Slow down, embrace nature, and find your own moment of tranquillity away from the rush of everyday life.",
  },
];

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative isolate flex min-h-[680px] w-full items-center overflow-hidden bg-[#10251e] text-white sm:min-h-[740px] lg:min-h-[calc(100svh-178px)]">
      {/* Full-screen background video */}
      <video
        className="absolute inset-0 -z-30 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/assets/images/shree-krishna-ashram-banner.jpg"
        aria-hidden="true"
      >
        <source
          src="/assets/videos/ashram-hero.mp4"
          type="video/mp4"
        />
      </video>

      {/* Cinematic dark layer mask */}
      <div className="absolute inset-0 -z-20 bg-black/35" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a15]/85 via-[#071a15]/45 to-transparent" />

      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071a15]/70 via-transparent to-black/15" />

      {/* Decorative glow */}
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-amber-200/10 blur-[120px]" />

      {/* Hero content */}
      <div className="mx-auto w-full max-w-[1320px] px-6 py-24 sm:px-10 lg:px-16">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-12 bg-amber-300" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-amber-200 sm:text-sm">
              A peaceful stay, a soulful journey
            </p>
          </motion.div>

          {/* Animated headline */}
          <div className="min-h-[100px] sm:min-h-[220px] lg:min-h-[240px]">
            <h2 className="text-4xl font-bold leading-[1.15] tracking-tight sm:text-6xl lg:text-[82px]">
              <span className="block">Book A Room</span>

              <span className="relative mt-2 block min-h-[1.25em] overflow-hidden text-amber-300">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeSlide}
                    initial={{ opacity: 0, y: 45, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -35, filter: "blur(6px)" }}
                    transition={{
                      duration: 0.65,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="block"
                  >
                    {slides[activeSlide].line}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h2>
          </div>

          {/* Supporting description */}
          <AnimatePresence mode="wait">
            <motion.p
              key={`description-${activeSlide}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.4, delay: 0.12 }}
              className="mt-2 max-w-2xl text-sm leading-7 text-white/85 sm:text-base sm:leading-8 lg:text-lg"
            >
              {slides[activeSlide].description}
            </motion.p>
          </AnimatePresence>

          <p className="mt-5 max-w-xl text-xs leading-6 text-white/65 sm:text-sm">
            Discover a welcoming retreat where devotion, comfort, and
            unforgettable experiences come together. Your peaceful escape
            begins here.
          </p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.25 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              href="/booking"
              className="group inline-flex min-h-[54px] uppercase items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-[#19271e] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 sm:px-8"
            >
              Book Your Stay Now
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/events"
              className="inline-flex min-h-[54px] items-center uppercase justify-center gap-3 rounded-full border border-white/60 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/20 sm:px-8"
            >
              <CalendarDays size={18} />
              See Our Activities
            </Link>
          </motion.div>

          {/* Slide indicators */}
          <div className="mt-12 flex items-center gap-3">
            {slides.map((slide, index) => (
              <button
                key={slide.line}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Show slide ${index + 1}: ${slide.line}`}
                aria-current={activeSlide === index ? "true" : undefined}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  activeSlide === index
                    ? "w-12 bg-amber-300"
                    : "w-5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}

            <span className="ml-2 text-xs tracking-[0.2em] text-white/75">
              0{activeSlide + 1} / 0{slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom cinematic edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/25 to-transparent" />
    </section>
  );
}
