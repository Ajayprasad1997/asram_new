
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CalendarDays, Star,ArrowUpRight } from "lucide-react";
import { BiSolidContact } from "react-icons/bi";


const slides = [
  {
    line: "In the Heart of Vrindavan",
    description: "Experience genuine hospitality...",
    review: {
      name: "Letitia",
       country: "United Kingdom",
       countryCode: "gb",
      flag: "🇬🇧",
      content: "Very friendly, polite, helpful and respectful staff. Very calm and contemplative atmosphere. The mandir was peaceful. The location was near and accessible to the main temples."
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
      content: "Calm, peaceful, comfortable and clean with excellent staff members who are very helpful."
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
      content: "This place was amazing! The people are very nice and helpful. The place gives you very good vibes and it's very peaceful. It's also close to many sacred places. I definitely recommend this place, it gives you really local vibes...."
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="isolate flex min-h-[680px] w-full items-center overflow-hidden bg-[#10251e] text-white sm:min-h-[740px] lg:min-h-[calc(100svh-278px)]">
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

 {/* Hero container layout */}
<div className="mx-auto w-full max-w-[1320px] px-6 py-0 lg:py-6 sm:px-10 lg:px-6 relative">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    
    {/* LEFT PANEL: Hero Typography Headers & Buttons */}
<div className="lg:col-span-6 w-full">
  {/* Eyebrow */}
  

  {/* Animated Headline */}
  <div className="min-h-[100px] sm:min-h-[180px]">
    <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-[66px]">
      <span className="block text-white">Book A Room</span>

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

  {/* REDUCED HEIGHT COMPACT PLATFORM RATING CARD */}
  <div className="mt-6 w-full max-w-sm rounded-xl bg-white px-4 py-3.5 border border-neutral-100 shadow-[0_6px_24px_rgba(0,0,0,0.04)] text-neutral-800">
    {/* Top Segment: Avatar Stack & Star Combo */}
    <div className="flex items-center gap-3.5 mb-3 pb-3 border-b border-neutral-100">
      {/* Overlapping Profile Avatar Stack */}
      <div className="flex items-center -space-x-2.5 isolate">
  {/* Avatar 1 */}
  <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-900 overflow-hidden shadow-sm z-30 flex items-center justify-center text-white text-[10px] font-bold">
    {/* <img 
      src="https://unsplash.com" 
      alt="Reviewer" 
      className="w-full h-full object-cover" 
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
    /> */}
    <span className="absolute z-[-1]">LG</span>
  </div>

  {/* Avatar 2 */}
  <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-900 overflow-hidden shadow-sm z-20 flex items-center justify-center text-white text-[10px] font-bold">
    {/* <img 
      src="https://unsplash.com" 
      alt="Reviewer" 
      className="w-full h-full object-cover" 
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
    /> */}
    <span className="absolute z-[-1]">AM</span>
  </div>

  {/* Avatar 3 */}
  <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-900 overflow-hidden shadow-sm z-10 flex items-center justify-center text-white text-[10px] font-bold">
    {/* <img 
      src="https://unsplash.com" 
      alt="Reviewer" 
      className="w-full h-full object-cover" 
      onError={(e) => { e.currentTarget.style.display = 'none'; }}
    /> */}
    <span className="absolute z-[-1]">JG</span>
  </div>

  {/* Fallback Text Badge Node */}
  <div className="w-8 h-8 rounded-full border-2 border-white bg-neutral-900 flex items-center justify-center text-white text-[10px] font-bold shadow-sm z-0">
    CW
  </div>
</div>


      {/* Stars and Totals Content Layout */}
      <div className="flex flex-col justify-center">
        <div className="flex gap-0.5 text-[#ffc107]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill="currentColor" stroke="none" />
          ))}
        </div>
        <span className="text-[12px] font-medium text-neutral-500 mt-0.5 tracking-tight">
          from 262 reviews
        </span>
      </div>
    </div>

    {/* Middle Segment: Two Platforms Layout */}
    <div className="grid grid-cols-2 gap-2.5 mb-2.5">
      {/* Google Review Badge Action Option */}
      <a 
        href="https://www.google.com/search?kgmid=/g/11c529r4st&hl=en-IN&q=Shree+Krishna+Bhakti+Ashram&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m1/2&kgs=31317842a6481b1e&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m1/2" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors group text-left"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-bold tracking-wide text-neutral-400 uppercase">Google</span>
          <div className="text-base font-extrabold text-neutral-900 leading-none mt-1">4.9 / 5</div>
          <p className="text-[10px] text-neutral-400 mt-0.5">75 votes</p>
        </div>
        <ArrowUpRight size={13} className="text-neutral-400 group-hover:text-neutral-700 transition-colors self-start" />
      </a>

      {/* Booking.com Rating Action Option */}
      <a 
        href="https://www.booking.com/hotel/in/shree-krishna-bhakti-ashram.en-gb.html?aid=311984&label=shree-krishna-bhakti-ashram-HKBWyKNw9X7sL1Xz4ChHWwSM714164372571%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2589914360392%3Alp9061835%3Ali%3Adem%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsD8UKUHIRFxY-Share-KnYMng%401791888618&sid=e3a8a5a2e9889c578ff795f6a2b26381&dest_id=-2114543&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1793776641&srpvid=02bc333c4b6c006a&type=total&ucfs=1&" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center justify-between p-2.5 rounded-lg border border-neutral-100 bg-neutral-50/50 hover:bg-[neutral-50] transition-colors group text-left"
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-bold tracking-wide text-neutral-400 uppercase">Booking.com</span>
          <div className="text-base font-extrabold text-neutral-900 leading-none mt-1">9.1 / 9.6</div>
          <p className="text-[10px] text-neutral-400 mt-0.5">187 stays</p>
        </div>
        <ArrowUpRight size={13} className="text-neutral-400 group-hover:text-neutral-700 transition-colors self-start" />
      </a>
    </div>

    {/* Bottom Segment: Minimal View All Trigger Inline Link */}
    {/* <div className="text-right">
      <Link 
        href="/reviews"
        className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-amber-500 hover:text-amber-600 transition-colors"
      >
        View All Guest Reviews
        <ArrowUpRight size={12} />
      </Link>
    </div> */}
  </div>

  {/* Primary Action Buttons */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.65, delay: 0.25 }}
    className="mt-9 flex flex-col gap-4 sm:flex-row hidden sm:flex"
  >
    <Link
      href="/accommodation"
      className="group inline-flex min-h-[54px] uppercase items-center justify-center gap-3 rounded-full bg-amber-400 px-7 py-4 text-sm font-bold text-[#19271e] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-amber-300 sm:px-8"
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

   
{/* RIGHT PANEL: 3-Stacked Testimonial Cards */}
<div className="lg:col-span-6 mt-0 lg:mt-12 flex w-full flex-col items-center justify-center lg:mt-0 lg:items-end">
  <div className="relative min-h-[270px] lg:min-h-[650px]  w-full max-w-[500px] px-4 py-2">
    <AnimatePresence initial={false}>
      {[0, 1, 2].map((offset) => {
        const slideIndex = (activeSlide + offset) % slides.length;
        const reviewItem = slides[slideIndex]?.review;

        if (!reviewItem) return null;

        const isMiddleBox = offset === 1;

        return (
          <motion.div
            key={`${slideIndex}-${reviewItem.name}`}
            initial={{ opacity: 0, y: 220, scale: 0.95 }}
            animate={{
              opacity: 1,
              y: offset * 195,
              x: isMiddleBox ? -65 : 0,
              scale: 1,
              zIndex: 3 - offset,
            }}
            exit={{
              opacity: 0,
              y: -150,
              scale: 0.95,
              filter: "blur(2px)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 26,
            }}
            layout
            onClick={() => setActiveSlide(slideIndex)}
            className={`absolute left-4 flex min-h-[170px] w-[calc(100%-32px)] flex-col justify-between rounded-[20px] border border-neutral-100 bg-white p-5 text-left shadow-[0_12px_32px_rgba(0,0,0,0.08)] sm:p-6 ${
  offset > 0 ? "hidden lg:flex" : "flex"
}`}
          >
            <div>
              {/* Card Header */}
              <div className="mb-3 flex items-start justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
  {reviewItem.avatar ? (
    <img
      src={reviewItem.avatar}
      alt={reviewItem.name}
      className="h-11 w-11 shrink-0 rounded-full object-cover shadow-sm"
    />
  ) : (
    <div className="flex h-11 w-11 shrink-0 select-none items-center justify-center rounded-full bg-[#117a65] text-lg font-bold text-white shadow-inner">
      {reviewItem.name.charAt(0)}
    </div>
  )}

  <div className="flex min-w-0 flex-col">
    <h4 className="text-[15px] font-bold tracking-tight text-[#1a1a1a] sm:text-base">
      {reviewItem.name}
    </h4>

    
    {/* Country Flag and Name */}
<div className="mt-1 flex items-center gap-1.5">
  <img
    src={`https://flagcdn.com/w40/${reviewItem.countryCode?.toLowerCase()}.png`}
    alt={`${reviewItem.country} flag`}
    className="h-3.5 w-5 rounded-[2px] object-cover"
  />

  <span className="text-[11px] font-medium text-gray-500">
    {reviewItem.country}
  </span>
</div>
  </div>
</div>
                {/* Rating and Date */}
                <div className="flex shrink-0 flex-col items-end">
                  <div className="flex gap-0.5 text-[#ffc107]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        fill="currentColor"
                        stroke="none"
                      />
                    ))}
                  </div>

                  <span className="mt-1 select-none text-[11px] font-normal text-[#7a7a7a]">
                    {reviewItem.timeAgo || "18 days ago"}
                  </span>
                </div>
              </div>

              {/* Review Content */}
              <p className="pr-1 text-[13px] font-normal leading-relaxed tracking-wide text-[#5a5a5a] sm:text-[13.5px]">
                {reviewItem.content}
              </p>
            </div>

            {/* Read More */}
            <div className="mt-3 text-left">
              <span className="text-[12px] font-normal text-[#9a9a9a] transition-colors duration-200 hover:text-[#117a65]">
                Read more
              </span>
            </div>
          </motion.div>
        );
      })}
    </AnimatePresence>
  </div>

  {/* Pagination Dots */}
  <div className="mt-2 flex items-center gap-2 lg:mr-8">
    {slides.map((_, index) => (
      <button
        key={index}
        type="button"
        onClick={() => setActiveSlide(index)}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          activeSlide === index
            ? "w-6 bg-amber-400"
            : "w-1.5 bg-white/30 hover:bg-white/60"
        }`}
        aria-label={`Go to slide ${index + 1}`}
      />
    ))}
  </div>
</div>


  </div>
</div>
      {/* Bottom cinematic edge */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-20 w-full bg-gradient-to-t from-black/25 to-transparent" />
    </section>
  );
}
