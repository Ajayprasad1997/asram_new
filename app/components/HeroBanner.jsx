
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Star,ArrowUpRight } from "lucide-react";
import { BiSolidContact } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { SiBookingdotcom } from "react-icons/si";

const slides = [
  {
    line: "In the Heart of Vrindavan",
    description: "Experience genuine hospitality...",
    review: {
      name: "Letitia",
       country: "United Kingdom",
       countryCode: "gb",
      flag: "🇬🇧",
      content: "very friendly, polite, helpful and respectful staff.very calm ands contemplative atmoshere the mandir was peaceful the location was near and accessible to the main temples"
    }
  },
  {
    line: "A Sanctuary for Devotees",
    description: "Immerse yourself in clean and spiritual spaces...",
    review: {
      name: "Kaustav",
      country: "India",
      countryCode: "in",
      flag: "🇮🇳",
      content: "very friendly, polite, helpful and respectful staff.very calm ands contemplative atmoshere the mandir was peaceful the location was near and accessible to the main temples"
    }
  },
  {
    line: "Your Sacred Escape",
    description: "A welcoming retreat for visitors worldwide...",
    review: {
      name: "Sita",
      country: "Netherlands",
      countryCode: "nl",
      flag: "🇳🇱",
      content: "This place was amazing! The people are very nice and helpful. The place gives you very good vibes and it's very peaceful."
    }
  },
  {
    line: "Peaceful Ashram Environment",
    description: "Find tranquility away from the city's hustle...",
    review: {
      name: "Mick",
      country: "Australia",
      countryCode: "au",
      flag: "🇦🇺",
      content: "Vrindavan is a very busy city so Shree Krishna is a quiet sanctuary but still close to all the attractions."
    }
  },
  {
    line: "Comfort & Joy Combined",
    description: "Cherish every single moment of your stay...",
    review: {
      name: "Robin",
      country: "Netherlands",
      countryCode: "nl",
      flag: "🇳🇱",
      content: "Beautiful energy, cozy rooms, and exceptional service close to everything you need."
    }
  }
];

export default function HeroBanner() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

      useEffect(() => {
      const interval = setInterval(() => {
        setActiveSlide((current) => (current + 1) % slides.length);
      }, 3500);

      return () => clearInterval(interval);
    }, []);

      useEffect(() => {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      checkMobile();

      window.addEventListener("resize", checkMobile);

      return () => {
        window.removeEventListener("resize", checkMobile);
      };
    }, []);
  return (
   <section className="relative isolate flex min-h-[100dvh] w-full overflow-hidden bg-[#10251e] pt-[111px] items-center justify-center min-h-[460px] h-[460px] text-white sm:min-h-[100dvh] sm:pt-0 lg:min-h-[calc(100dvh-178px)]">

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

  {/* Left gradient */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#071a15]/85 via-[#071a15]/45 to-transparent" />

  {/* Bottom gradient */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#071a15]/70 via-transparent to-black/15" />

  {/* Decorative glow */}
  <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-96 w-96 rounded-full bg-amber-200/10 blur-[120px]" />


 
{/* Hero container layout */}
<div className="mx-auto relative w-full max-w-[1320px] item-center px-5 sm:px-6 lg:px-8">

  <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-12 items-center">

    {/* =========================================
        LEFT PANEL - HERO CONTENT
        Mobile: FIRST
        Desktop: LEFT
    ========================================= */}
    <div className="order-1 lg:order-1 lg:col-span-6 w-full md:text-left text-center">

      {/* Animated Headline */}
      <div className="min-h-[100px] sm:min-h-[180px]">
        <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-[66px]">

          <span className="block text-white">
            Book A Room
          </span>

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

      {/* Supporting Description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={`description-${activeSlide}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, delay: 0.12 }}
          className="mt-4 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-lg"
        >
          {slides[activeSlide].description}
        </motion.p>
      </AnimatePresence>
  <div className="order-3 lg:order-3 lg:col-span-6 flex w-full justify-center lg:justify-start hidden lg:block md:mt-6 mt-0">

    

    </div>
      {/* Primary Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.25 }}
        className="mt-3 md:mt-9 flex-col gap-4 sm:flex sm:flex-row"
      >
        <Link
          href="/accommodation"
          className="group inline-flex min-h-[54px] uppercase items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-[#19271e] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 sm:px-8 md:mb-0 mb-2"
        >
          Book Your Stay Now
          <ArrowRight
            size={18}
            className="transition-transform group-hover:translate-x-1"
          />
        </Link>

        <Link
          href="/contact"
          className="inline-flex min-h-[54px] items-center uppercase justify-center gap-3 rounded-full border border-white/60 bg-white/10 px-7 py-4 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/20 sm:px-8"
        >
          <BiSolidContact size={18} />
          Contact Us
        </Link>
      </motion.div>

    </div>


    {/* =========================================
        RIGHT PANEL - TESTIMONIAL CARDS
        Mobile: SECOND
        Desktop: RIGHT
    ========================================= */}
    <div className="order-2 lg:order-2 lg:col-span-6 mt-0 flex w-full flex-col items-center justify-center lg:items-end">

      

    </div>


    {/* =========================================
        RATING CARD
        Mobile: THIRD
        Desktop: BELOW HERO CONTENT (LEFT)
    ========================================= */}
   

  </div>
</div>

      {/* Bottom cinematic edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/25 to-transparent" />
    </section>

    
  );
}
