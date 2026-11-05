
"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

import {
  ArrowRight,
  MapPin,
  Heart,
  Flower2,
  BedDouble,
  Bath,
  Refrigerator,
  Trees,
  Church,
  Users,
  Utensils,
  ShieldCheck,
  Zap,
  Droplets,
  Sun,
  Moon,
  HandHeart,
  CalendarDays,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// ==========================================
// COUNTER ANIMATION HOOK
// ==========================================

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const end = parseInt(target.replace(/[^0-9]/g, ""), 10);

    if (!Number.isFinite(end) || end <= 0) return;

    let start = 0;
    const interval = 20;
    const steps = Math.max(1, Math.ceil(duration / interval));
    const increment = end / steps;

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [hasStarted, target, duration]);

  const suffix = target.replace(/[0-9]/g, "");

  return {
    ref: elementRef,
    value: count.toLocaleString() + suffix,
  };
}

// ==========================================
// THREE COLUMN ABOUT SECTION
// ==========================================

function AboutThreeColumnSection() {
  const counter1 = useCountUp("10000+");
  const counter2 = useCountUp("94%");
  const counter3 = useCountUp("100");
  const counter4 = useCountUp("7+");

  return (
    <section className="relative w-full bg-white px-6 py-20 text-[#202D43] md:px-12 md:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-center">

          {/* COLUMN 1 */}
          <div
            data-aos="fade-right"
            className="flex flex-col justify-center lg:col-span-4"
          >
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
              <span className="h-px w-9 bg-[#FFB900]" />
              About Our Ashram
            </p>

            <h2 className="text-4xl font-extrabold uppercase leading-tight text-[#2c4984] md:text-5xl">
              About The
              <br />
              <span className="text-[#FFB900]">Ashram</span>
            </h2>

            <p className="mt-5 text-[15px] font-medium leading-7 text-[#202D43]">
              The Ashram is an ancestral property now open to guests
              seeking a peaceful, comfortable, and spiritually
              enriching stay in Vrindavan.
            </p>

            {/* COUNTERS */}
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-gray-100 pt-6">

              <div>
                <span
                  ref={counter1.ref}
                  className="block text-3xl font-extrabold text-[#294985]"
                >
                  {counter1.value}
                </span>

                <span className="mt-1 block text-xs text-[#737F91]">
                  Yearly seekers & visitors
                </span>
              </div>

              <div>
                <span
                  ref={counter2.ref}
                  className="block text-3xl font-extrabold text-[#294985]"
                >
                  {counter2.value}
                </span>

                <span className="mt-1 block text-xs text-[#737F91]">
                  Peaceful return rate
                </span>
              </div>

              <div>
                <span
                  ref={counter3.ref}
                  className="block text-3xl font-extrabold text-[#294985]"
                >
                  <span className="mr-1 text-sm font-bold text-[#737F91]">
                    Top
                  </span>
                  {counter3.value}
                </span>

                <span className="mt-1 block text-xs text-[#737F91]">
                  Spiritual destinations
                </span>
              </div>

              <div>
                <span
                  ref={counter4.ref}
                  className="block text-3xl font-extrabold text-[#294985]"
                >
                  {counter4.value}
                </span>

                <span className="mt-1 block text-xs text-[#737F91]">
                  Sacred facilities
                </span>
              </div>

            </div>

            {/* BOOKING BUTTON */}
            <div className="mt-8">
              <Link
                href="/accommodation"
                className="inline-flex items-center gap-3 rounded-full bg-[#294985] px-7 py-4 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FFB900] hover:text-[#202D43]"
              >
                BOOK YOUR STAY NOW
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* COLUMN 2 - IMAGES */}
          <div
            data-aos="fade-up"
            className="relative my-6 flex min-h-[460px] flex-col items-center justify-center lg:col-span-4 lg:my-0"
          >
            <div className="relative md:absolute right-0 md:right-2 top-0 z-10 h-[240px] w-full md:h-[140px] md:w-[78%] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/assets/images/about1.jpg"
                alt="Ashram"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="relative z-20 my-4 h-[240px] md:h-[210px] md:w-[72%] overflow-hidden rounded-xl border-2 border-white shadow-xl">
              <img
                src="/assets/images/about3.jpg"
                alt="Temple"
                className="h-full w-full object-cover"
              />
            </div>

            {/* <div className="absolute right-[-8px] top-[48%] z-30 flex max-w-[145px] -translate-y-1/2 flex-col items-start gap-2 rounded-xl border border-white/10 bg-[#294985] p-4 text-white shadow-xl">
              <div className="rounded-lg bg-[#FFB900] p-1.5 text-[#202D43]">
                <Flower2 size={20} />
              </div>

              <span className="text-xs font-bold leading-snug text-white">
                Embrace the Tradition
              </span>
            </div> */}

            <div className="relative md:absolute bottom-0 left-0 md:left-2 z-10 h-[290px] md:h-[140px] md:w-[78%] overflow-hidden rounded-xl shadow-lg">
              <img
                src="/assets/images/about5.jpg"
                alt="Ashram surroundings"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* COLUMN 3 */}
          <div
            data-aos="fade-left"
            className="flex flex-col justify-center lg:col-span-4"
          >
            <h3 className="text-2xl font-extrabold leading-snug tracking-tight text-[#202D43] md:text-3xl">
              Authentic Culture and Charm, Where Beauty Knows No Bounds
            </h3>

            <p className="mt-4 text-[15px] leading-8 text-[#737F91]">
              The property offers a serene atmosphere, spacious
              rooms, a well-maintained garden, and a temple within
              the premises.
            </p>

            <ul className="mt-6 space-y-4 text-[14px] font-bold uppercase tracking-wide text-[#202D43]">
              {[
                "Fresh Air, Feel the Nature",
                "Peaceful, Tranquil Space",
                "Rich Vedic Culture",
                "Far from Hustle-bustle",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[#FFB900]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-[#294985] px-7 py-3.5 text-xs font-bold text-[#294985] transition-all duration-300 hover:bg-[#294985] hover:text-white"
              >
                CONTACT US FOR INQUIRIES
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}



function FacilitiesArcShowcaseSection({ facilities = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const wasDragged = useRef(false);
  const dragPointerId = useRef(null);

  const visibleFacilities = facilities.slice(0, 10);
  const totalItems = visibleFacilities.length;

  // Facility images
  const facilityImages = [
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=85",
    "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=85",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&q=85",
    "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&q=85",
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=85",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=85",
    "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=600&q=85",
    "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=85",
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=600&q=85",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=85",
  ];

  // Responsive layout
  useEffect(() => {
    const updateScreen = () => {
      setIsMobile(window.innerWidth < 768);
    };

    updateScreen();
    window.addEventListener("resize", updateScreen);

    return () => window.removeEventListener("resize", updateScreen);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused || isDragging || totalItems <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => prev + 1);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused, isDragging, totalItems]);

  if (!totalItems) return null;

  // Correct circular positioning
  const getRelativePosition = (index) => {
    const current =
      ((activeIndex % totalItems) + totalItems) % totalItems;

    return (
      (index - current + totalItems + Math.floor(totalItems / 2)) %
        totalItems -
      Math.floor(totalItems / 2)
    );
  };

  // Click card to center
  const selectCard = (position) => {
    setActiveIndex((prev) => prev + position);
  };

  // Pointer down
  const handlePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;

    dragStartX.current = event.clientX;
    dragPointerId.current = event.pointerId;
    wasDragged.current = false;

    setIsDragging(true);
    setIsPaused(true);

    // Capture on the actual card to preserve click events
    const card = event.target.closest("button");

    if (card) {
      card.setPointerCapture(event.pointerId);
    }
  };

  // Pointer up
  const handlePointerUp = (event) => {
    if (dragPointerId.current !== event.pointerId) return;

    const difference = event.clientX - dragStartX.current;
    const threshold = 35;

    if (Math.abs(difference) > threshold) {
      wasDragged.current = true;

      // Left = next | Right = previous
      setActiveIndex((prev) =>
        difference < 0 ? prev + 1 : prev - 1
      );
    }

    dragPointerId.current = null;
    setIsDragging(false);
    setIsPaused(false);
  };

  // Pointer cancel
  const handlePointerCancel = () => {
    dragPointerId.current = null;
    setIsDragging(false);
    setIsPaused(false);
  };

  // Desktop 7 cards | Mobile 5 cards
  const maxVisible = isMobile ? 2 : 3;

  return (
    <section className="relative w-full overflow-hidden bg-[#F5F7FB] px-4 py-20 text-[#202D43] sm:px-6 md:px-12 md:py-28">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#294985]/5 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#FFB900]/10 blur-[100px]" />
      </div>

      {/* CAROUSEL */}
      <div
        className="relative z-10 mx-auto max-w-7xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          if (!isDragging) setIsPaused(false);
        }}
        onFocus={() => setIsPaused(true)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            setIsPaused(false);
          }
        }}
      >

        {/* ARC STAGE */}
        <div
          className={`relative h-[240px] w-full select-none sm:h-[200px] md:h-[300px] ${
            isDragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{
            perspective: "1400px",
            transformStyle: "preserve-3d",
            touchAction: "pan-y",
          }}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >

          {visibleFacilities.map((item, index) => {
            const position = getRelativePosition(index);
            const distance = Math.abs(position);

            if (distance > maxVisible) return null;

            // ARC GEOMETRY
            const angle = position * (isMobile ? 25 : 22);
            const angleRad = (angle * Math.PI) / 180;

            const radiusX = isMobile ? 175 : 475;
            const radiusY = isMobile ? 85 : 170;

            const x = Math.sin(angleRad) * radiusX;
            const y = (1 - Math.cos(angleRad)) * radiusY;

            const isCenter = position === 0;

            const scale = isCenter
              ? 1
              : isMobile
                ? 0.82
                : Math.max(0.72, 0.94 - distance * 0.065);

            const rotate = position * (isMobile ? 9 : 10);

            const image =
              item.image ||
              facilityImages[index % facilityImages.length];

            return (
              <motion.button
                key={item.id || item.title + "-" + index}
                type="button"
                onClick={() => {
                  if (wasDragged.current) {
                    wasDragged.current = false;
                    return;
                  }

                  if (position !== 0) {
                    selectCard(position);
                  }
                }}
                initial={false}
                animate={{
                  x,
                  y,
                  rotate,
                  scale,
                  opacity:
                    distance === maxVisible
                      ? 0.65
                      : isCenter
                        ? 1
                        : 0.88,
                }}
                transition={{
                  duration: isDragging ? 0.55 : 0.65,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute left-1/2 top-[8%] w-[145px] sm:w-[165px] md:w-[175px] lg:w-[190px]"
                style={{
                  marginLeft: isMobile ? "-72.5px" : "-95px",
                  transformStyle: "preserve-3d",
                  transformOrigin: "center center",
                  backfaceVisibility: "hidden",
                  willChange: "transform",
                  zIndex: 20 - distance,
                  cursor: isDragging
                    ? "grabbing"
                    : isCenter
                      ? "grab"
                      : "pointer",
                }}
              >

                {/* IMAGE CARD */}
                <div
                  className={`group relative aspect-square overflow-hidden rounded-2xl bg-white text-left transition-shadow duration-500 sm:rounded-3xl ${
                    isCenter
                      ? "shadow-[0_25px_65px_rgba(41,73,133,0.20)]"
                      : "shadow-[0_12px_35px_rgba(41,73,133,0.09)]"
                  }`}
                >

                  {/* IMAGE */}
                  <img
                    src={image}
                    alt={item.title || "Ashram facility"}
                    draggable="false"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#10213E]/95 via-[#10213E]/25 to-transparent" />

                  {/* FEATURED BADGE */}
                  {isCenter && (
                    <div className="absolute right-3 top-3 rounded-full bg-[#FFB900] px-3 py-1 text-[9px] font-bold uppercase tracking-wider text-[#294985]">
                      Featured
                    </div>
                  )}

                  {/* CONTENT */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-3 text-left sm:p-4">
                    <h3
                      className={`font-bold leading-tight text-white ${
                        isCenter
                          ? "text-sm sm:text-base"
                          : "text-xs sm:text-sm"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <div
                      className={`mt-2 h-[3px] rounded-full bg-[#FFB900] transition-all duration-500 ${
                        isCenter ? "w-12" : "w-7"
                      }`}
                    />

                    {isCenter && item.description && (
                      <p className="mt-2 line-clamp-2 text-[10px] leading-5 text-white/80 sm:text-xs">
                        {item.description}
                      </p>
                    )}
                  </div>

                  {/* GLOW */}
                  {isCenter && (
                    <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FFB900]/20 blur-2xl" />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* DRAG HINT */}
        <p className="mt-3 text-center text-[10px] font-semibold uppercase tracking-[2px] text-[#737F91]">
          <span className="mr-2">←</span>
          Drag or Click to Explore Facilities
          <span className="ml-2">→</span>
        </p>
      </div>

      {/* SECTION HEADER */}
      <div
        data-aos="fade-up"
        className="relative z-10 mx-auto mb-14 mt-10 max-w-2xl text-center md:mb-20"
      >
        <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
          <span className="h-px w-9 bg-[#FFB900]" />
          Comfort Meets Spirituality
          <span className="h-px w-9 bg-[#FFB900]" />
        </div>

        <h2 className="text-3xl font-extrabold leading-tight text-[#294985] sm:text-4xl md:text-5xl">
          Thoughtful Facilities
        </h2>

        <p className="mt-3 text-lg font-semibold italic text-[#FFB900] sm:text-xl md:text-2xl">
          For a Peaceful Stay
        </p>

        <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-[#737F91]">
          Thoughtfully arranged facilities and comfortable spaces make your
          stay peaceful, convenient and spiritually enriching.
        </p>
      </div>
    </section>
  );
}





// ==========================================
// FACILITIES DATA
// ==========================================

const facilities = [
  {
    icon: BedDouble,
    title: "Spacious AC Rooms",
    description:
      "Spacious, air-conditioned rooms with heating facilities for comfortable stays during colder months.",
  },
  {
    icon: Bath,
    title: "Private Bathrooms",
    description:
      "Attached private bathrooms, comfortable seating areas, wardrobes and dressing areas in selected rooms.",
  },
  {
    icon: Refrigerator,
    title: "Kitchen Facilities",
    description:
      "Selected rooms feature a compact kitchen and mini refrigerator for additional convenience.",
  },
  {
    icon: Trees,
    title: "Garden & Open Spaces",
    description:
      "Enjoy peaceful garden views, well-maintained green spaces and relaxing outdoor sitting areas.",
  },
  {
    icon: Church,
    title: "Temple & Prayer Rooms",
    description:
      "A temple within the premises, dedicated prayer rooms and spaces for spiritual activities.",
  },
  {
    icon: Heart,
    title: "Goshala & Anna Kshetra",
    description:
      "The Ashram has a goshala (cow shelter) and provisions for anna kshetra, offering free food distribution.",
  },
  {
    icon: Droplets,
    title: "Drinking Water Facility",
    description:
      "A dedicated piyau provides drinking-water facilities within the Ashram premises.",
  },
  {
    icon: Users,
    title: "Spacious Hall & Garden",
    description:
      "A spacious hall and garden adjacent to the temple, ideal for religious ceremonies and social functions.",
  },
  {
    icon: ShieldCheck,
    title: "Ground Floor Property",
    description:
      "The ground-floor layout makes the property suitable for elderly guests and those who prefer easy accessibility.",
  },
  {
    icon: Zap,
    title: "24/7 Power Backup",
    description:
      "Round-the-clock power backup for uninterrupted comfort and convenience.",
  },
];

// ==========================================
// NEARBY ATTRACTIONS DATA
// ==========================================

const attractions = [
  { name: "Shri Banke Bihari Temple", distance: "1 km" },
  { name: "Radha Ballabh Mandir", distance: "1 km" },
  { name: "ISKCON Temple", distance: "0.75 km" },
  { name: "Prem Mandir", distance: "Nearby" },
  { name: "Nidhivan", distance: "Nearby" },
  { name: "Shri Rangji Mandir", distance: "Nearby" },
  { name: "Neem Karori Baba Ashram", distance: "Nearby" },
  { name: "Jugal Kishore Temple", distance: "Nearby" },
];

// ==========================================
// DAILY ACTIVITIES DATA
// ==========================================

const activities = [
  {
    time: "06:30 AM",
    title: "Morning Prayers",
    description:
      "Guests are welcome to begin their day with peaceful morning prayers at the Ashram.",
    icon: Sun,
  },
  {
    time: "08:00 AM – 08:30 AM",
    title: "Anna Kshetra",
    description:
      "Daily food distribution to yogis and underprivileged people as an expression of selfless service.",
    icon: Utensils,
  },
  {
    time: "06:00 PM",
    title: "Evening Prayers",
    description:
      "Spend the evening in prayer and devotion within the peaceful atmosphere of the Ashram.",
    icon: Moon,
  },
];

// ==========================================
// MAIN ABOUT PAGE
// ==========================================

export default function AboutPage() {

  // AOS INITIALIZATION
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();

    return () => {
      AOS.refreshHard();
    };
  }, []);

  return (
    <main className="overflow-hidden bg-white text-[#202D43]">

      {/* =====================================
          01. ABOUT HERO SECTION
      ===================================== */}

      <section className="pt-[28px] sm:pt-0 relative flex min-h-[350px] items-center overflow-hidden md:min-h-[440px]">

        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] hover:scale-105"
          style={{
            backgroundImage: "url('/assets/images/about1.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#102B58]/75" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#102B58]/90 via-[#102B58]/50 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">

          <div data-aos="fade-up" className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FFB900]" />

              <span className="text-xs font-bold uppercase tracking-[4px] text-[#FFCA45]">
                Your Peaceful Stay in Vrindavan
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              About The Ashram
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/85 md:text-lg">
              We are here to help you plan your stay, answer your
              questions, and make your experience at our Ashram
              comfortable and memorable.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
              <Link href="/" className="transition hover:text-[#FFB900]">
                Home
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#FFB900]">
                About Us
              </span>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white to-[#244584]" />

      </section>


      {/* =====================================
          02. ABOUT THREE COLUMN SECTION
      ===================================== */}

      <AboutThreeColumnSection />


      {/* =====================================
          03. FACILITIES & ACCOMMODATION
      ===================================== */}

     <FacilitiesArcShowcaseSection facilities={facilities} />


      {/* =====================================
          04. LOCATION & ACCESSIBILITY
      ===================================== */}

      <section className="px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* LOCATION IMAGE */}

          <div data-aos="fade-right" className="relative">

            <img
              src="/assets/images/chs.jpg"
              alt="Vrindavan spiritual surroundings"
              className="h-[380px] w-full rounded-xl object-cover shadow-xl md:h-[520px]"
            />

            <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-white p-5 shadow-lg md:bottom-8 md:left-8 md:right-8">

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F5F7FB] text-[#294985]">
                  <MapPin size={25} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#737F91]">
                    Our Location
                  </p>

                  <h3 className="mt-1 text-lg font-bold text-[#294985]">
                    Vrindavan, Uttar Pradesh
                  </h3>
                </div>

              </div>
            </div>
          </div>

          {/* LOCATION CONTENT */}

          <div data-aos="fade-left">

            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
              <span className="h-px w-9 bg-[#FFB900]" />
              Location & Accessibility
            </p>

            <h2 className="text-4xl font-extrabold leading-tight text-[#294985] md:text-5xl">
              Close to the
              <br />
              <span className="text-[#FFB900]">
                Sacred Temples
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#737F91]">
              Centrally located in Vrindavan, the Ashram
              provides convenient access to major temples
              and important religious destinations.
            </p>

            <p className="mt-4 text-sm leading-8 text-[#737F91]">
              Restaurants, ATMs, banks, grocery stores and
              local shops are available nearby. Rickshaws
              and other local transportation options help
              guests explore Vrindavan.
            </p>

            <div className="mt-9">

              <h3 className="mb-5 flex items-center gap-3 text-lg font-bold text-[#294985]">
                <MapPin size={21} className="text-[#FFB900]" />
                Nearby Religious Destinations
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">

                {attractions.map((place) => (
                  <div
                    key={place.name}
                    className="group flex items-center justify-between gap-3 rounded-lg border border-[#E5EAF2] bg-white p-4 transition-all duration-300 hover:border-[#FFB900] hover:bg-[#F5F7FB]"
                  >

                    <span className="text-sm font-semibold text-[#294985]">
                      {place.name}
                    </span>

                    <span className="shrink-0 rounded-full bg-[#FFF6D9] px-3 py-1 text-xs font-bold text-[#294985]">
                      {place.distance}
                    </span>

                  </div>
                ))}

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================
          05. SPIRITUAL ACTIVITIES
      ===================================== */}

      <section className="bg-[#F5F7FB] px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* IMAGE */}

          <div data-aos="fade-right">

            <div className="mb-6">

              <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
                <span className="h-px w-9 bg-[#FFB900]" />
                Daily Ashram Life
              </p>

              <h2 className="text-4xl font-extrabold leading-tight text-[#294985] md:text-5xl">
                Experience the
                <br />
                <span className="text-[#FFB900]">
                  Spiritual Activities
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-[#737F91]">
                Guests are welcome to participate in the
                Ashram's daily activities, including morning
                prayers, evening prayers and food distribution.
              </p>

            </div>

            <div className="group relative overflow-hidden rounded-xl">

              <img
                src="/assets/images/ac2.jpg"
                alt="Daily spiritual prayers at the Ashram"
                className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[410px]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#14233F]/60 to-transparent" />

              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-white">
                <Flower2 size={27} className="text-[#FFB900]" />

                <span className="text-lg font-bold">
                  Prayer & Devotion
                </span>
              </div>

            </div>
          </div>

          {/* DAILY SCHEDULE */}

          <div data-aos="fade-left">

            <div className="mb-9 flex items-center gap-3">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FFF6D9] text-[#294985]">
                <CalendarDays size={24} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#737F91]">
                  Ashram Timings
                </p>

                <h3 className="text-2xl font-extrabold text-[#294985]">
                  Daily Schedule
                </h3>
              </div>

            </div>

            <div className="relative space-y-9 border-l-2 border-[#DCE4F0] pl-8">

              {activities.map((activity, index) => {
                const Icon = activity.icon;

                return (
                  <div
                    key={activity.title}
                    data-aos="fade-up"
                    data-aos-delay={index * 150}
                    className="relative"
                  >

                    <div className="absolute -left-[49px] top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFB900] bg-white text-[#294985] shadow-sm transition-all duration-300 hover:bg-[#FFB900]">
                      <Icon size={19} />
                    </div>

                    <p className="text-xs font-extrabold tracking-[2px] text-[#294985]">
                      {activity.time}
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#202D43]">
                      {activity.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-[#737F91]">
                      {activity.description}
                    </p>

                  </div>
                );
              })}

            </div>

            <div className="mt-12 rounded-xl border border-[#E5EAF2] bg-white p-6">

              <div className="flex items-start gap-4">

                <Sparkles
                  size={23}
                  className="mt-1 shrink-0 text-[#FFB900]"
                />

                <p className="text-sm leading-7 text-[#737F91]">
                  Guests can also inquire about other spiritual
                  and religious activities taking place inside
                  and outside the Ashram.
                </p>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================
          06. HOSPITALITY & GUEST ASSISTANCE
      ===================================== */}

      <section className="px-6 py-20 md:px-12 md:py-28">

        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* HOSPITALITY CONTENT */}

          <div data-aos="fade-right">

            <p className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[3px] text-[#294985]">
              <span className="h-px w-9 bg-[#FFB900]" />
              Hospitality & Guest Assistance
            </p>

            <h2 className="text-4xl font-extrabold leading-tight text-[#294985] md:text-5xl">
              A Warm Welcome,
              <br />
              <span className="text-[#FFB900]">
                Personal Care
              </span>
            </h2>

            <p className="mt-7 text-sm leading-8 text-[#737F91]">
              The family emphasizes devotion, sincere service
              and personal care for guests, creating a welcoming
              atmosphere throughout their stay.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#737F91]">
              Caretakers can assist with information about
              Vrindavan's religious sites and help arrange local
              transportation, subject to availability.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#737F91]">
              Guests can receive guidance about significant
              places associated with the lives of Shri Radha
              and Krishna.
            </p>

            <p className="mt-5 text-sm leading-8 text-[#737F91]">
              Restaurants nearby offer dining options, and
              some provide food delivery to the Ashram.
            </p>

            <div className="mt-9 flex items-center gap-4 rounded-xl bg-[#F5F7FB] p-5">

              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFB900] text-[#294985]">
                <HandHeart size={25} />
              </div>

              <div>
                <h3 className="font-bold text-[#294985]">
                  Serving with Love
                </h3>

                <p className="mt-1 text-sm text-[#737F91]">
                  Devotion, sincere service and personal care.
                </p>
              </div>

            </div>
          </div>

          {/* HOSPITALITY IMAGE */}

          <div data-aos="fade-left" className="relative">

            <img
              src="/assets/images/about5.jpg"
              alt="Family hospitality at Shree Krishna Bhakti Ashram"
              className="h-[400px] w-full rounded-xl object-cover shadow-xl transition-transform duration-700 hover:scale-[1.02] md:h-[530px]"
            />

            <div className="absolute -bottom-7 -left-4 rounded-xl border border-[#E5EAF2] bg-white p-5 shadow-xl md:-left-8 md:p-7">

              <div className="flex items-center gap-3">

                <Heart
                  size={25}
                  className="fill-[#FFB900] text-[#FFB900]"
                />

                <div>
                  <p className="font-bold text-[#294985]">
                    Feel at Home
                  </p>

                  <p className="mt-1 text-xs text-[#737F91]">
                    Your stay in Vrindavan
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =====================================
          07. CONTACT SECTION
      ===================================== */}

      <ContactSection />


      {/* =====================================
          08. FOOTER
      ===================================== */}

      <Footer />

    </main>
  );
}
