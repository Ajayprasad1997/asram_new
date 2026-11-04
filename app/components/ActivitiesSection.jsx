"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';

const activitySlides = [
  {
    id: 1,
    subtitle: "OUR",
    title: "SPIRITUAL ACTIVITIES",
    image: "/assets/images/activitie1.jpg", 
    videoSrc: "/assets/videos/activitie1.mp4",
    // description: "Dive into the depths of the Indian Ocean, where vibrant marine life awaits. From graceful manta rays to majestic whale sharks, every encounter promises unforgettable memories.",
    link: "/events"
  },
  {
    id: 2,
    subtitle: "SACRED",
    title: "social activities",
    image: "/assets/images/activitie2.jpg", 
    videoSrc: "/assets/videos/activitie2.mp4",
    // description: "Align your mind, body, and spirit along the peaceful shorelines. Experience traditional ashram practices designed to awaken inner consciousness and profound calm.",
    link: "/events"
  },
  {
    id: 3,
    subtitle: "DIVINE",
    title: "TEMPLE BHAJANS",
    image: "/assets/images/activitie3.jpg",
    videoSrc: "/assets/videos/activitie3.mp4",
    // description: "Immerse yourself in ancestral devotional chants and sacred evening prayers within our temple courtyard, fostering unity and spiritual nourishment.",
    link: "/events"
  }
];

export default function ActivitiesSection() {
  const [activeTab, setActiveTab] = useState(0);
  const containerRef = useRef(null);
  const activeTabRef = useRef(0);
  const isThrottled = useRef(false);



useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
    easing: "ease-out-quad",
  });

  const element = containerRef.current;
  if (!element) return;

  let throttleTimer;

  // True while the user is navigating the activity slides
  let isGalleryLocked = false;

  const resetThrottle = () => {
    clearTimeout(throttleTimer);

    throttleTimer = setTimeout(() => {
      isThrottled.current = false;
    }, 550);
  };

  const handleActivityScroll = (event) => {
    if (event.deltaY === 0) return;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const currentTab = activeTabRef.current;

    const scrollingDown = event.deltaY > 0;

    // Detect when this wheel movement will reach the section boundary.
    const willReachBottom =
      scrollingDown &&
      rect.bottom > viewportHeight &&
      rect.bottom - event.deltaY <= viewportHeight + 100;

    const willReachTop =
      !scrollingDown &&
      rect.top < 0 &&
      rect.top - event.deltaY >= -100;

    const atBottom =
      rect.bottom <= viewportHeight + 5 &&
      rect.bottom >= viewportHeight - 100;

    const atTop =
      rect.top >= -5 &&
      rect.top <= 100;

    // Start locking when the user reaches the section boundary.
    if (!isGalleryLocked) {
      if (willReachBottom || (scrollingDown && atBottom)) {
        if (currentTab < activitySlides.length - 1) {
          event.preventDefault();
          isGalleryLocked = true;

          // Align the section bottom with the viewport bottom.
          window.scrollBy({
            top: rect.bottom - viewportHeight,
            behavior: "instant",
          });
        } else {
          return;
        }
      } else if (willReachTop || (!scrollingDown && atTop)) {
        if (currentTab > 0) {
          event.preventDefault();
          isGalleryLocked = true;

          window.scrollBy({
            top: rect.top,
            behavior: "instant",
          });
        } else {
          return;
        }
      } else {
        return;
      }
    }

    // Keep the page still while an animation is in progress.
    if (isThrottled.current) {
      event.preventDefault();
      return;
    }

    if (scrollingDown) {
      if (currentTab < activitySlides.length - 1) {
        event.preventDefault();

        const nextTab = currentTab + 1;

        activeTabRef.current = nextTab;
        setActiveTab(nextTab);

        isThrottled.current = true;
        resetThrottle();
      } else {
        // Final slide: allow normal scrolling to the next section.
        isGalleryLocked = false;
      }
    } else {
      if (currentTab > 0) {
        event.preventDefault();

        const previousTab = currentTab - 1;

        activeTabRef.current = previousTab;
        setActiveTab(previousTab);

        isThrottled.current = true;
        resetThrottle();
      } else {
        // First slide: allow normal scrolling to the previous section.
        isGalleryLocked = false;
      }
    }
  };

  window.addEventListener("wheel", handleActivityScroll, {
    passive: false,
  });

  return () => {
    window.removeEventListener("wheel", handleActivityScroll);
    clearTimeout(throttleTimer);
    isThrottled.current = false;
  };
}, []);



  const slideVariants = {
    enter: { opacity: 0, x: 80 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -80 },
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full overflow-hidden bg-[#16222f]"
    >
      <div className="w-full">
        <div className="grid grid-cols-1 items-stretch lg:grid-cols-12">
          
          {/* LEFT SIDE: Dynamic Full-Screen Video Panel */}
          <div className="relative w-full bg-black lg:col-span-6 min-h-[450px] lg:min-h-[750px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ ease: "easeInOut", duration: 0.6 }}
                className="absolute inset-0 h-full w-full"
              >
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="h-full w-full object-cover"
                  src={activitySlides[activeTab].videoSrc} 
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-black/15 pointer-events-none z-10" />
          </div>

          {/* RIGHT SIDE: Text Content with Integrated Highlight Schedule Box */}
          <div 
            className="relative flex flex-col items-center justify-center bg-[#16222f] px-6 py-16 text-center text-white sm:px-16 lg:col-span-6 lg:py-20"
            data-aos="fade-up"
          >
            {/* Numeric Indicators */}
            <div className="absolute right-4 top-1/2 flex -translate-y-1/2 flex-col gap-4 z-40 sm:right-6 lg:right-8">
              {activitySlides.map((slide, index) => (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => setActiveTab(index)}
                  className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold tracking-wide transition-all duration-300 ${
                    activeTab === index
                      ? "bg-[#fdbb00] text-white scale-110 shadow-lg"
                      : "border border-white/20 bg-transparent text-white/50 hover:border-white/60 hover:text-white"
                  }`}
                >
                  {slide.id}
                </button>
              ))}
            </div>

            {/* Content Display Frame */}
            <div className="w-full pr-6 lg:pr-4 flex flex-col items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ ease: "easeInOut", duration: 0.5 }}
                  className="flex flex-col items-center w-full"
                >
                  <span className="text-[14px] uppercase tracking-[0.3em] text-[#fdbb00] font-semibold">
                    {activitySlides[activeTab].subtitle}
                  </span>

                  <h2 className="mt-2 text-2xl font-bold uppercase tracking-widest text-white sm:text-4xl lg:text-5xl">
                    {activitySlides[activeTab].title}
                  </h2>

                  <div className="mt-6 aspect-[4/3] w-[200px] overflow-hidden bg-gray-800 shadow-2xl border border-white/5">
                    <img
                      src={activitySlides[activeTab].image}
                      alt={activitySlides[activeTab].title}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <p className="mt-6 text-xs font-light leading-6 tracking-wide text-gray-300 max-w-md">
                    {activitySlides[activeTab].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* HIGHLIGHTED CAPTION CARD: Dynamic Daily Schedule */}
              <div className="mt-8 w-full border border-white/10 bg-white/[0.03] p-5 text-left rounded-xs shadow-inner max-w-md">
                <h4 className="text-[15px] font-bold uppercase tracking-wider text-[#fdbb00]">
                  Ashram Daily Timings & Participation
                </h4>
                <p className="mt-1.5 text-[13px] text-gray-400 font-light leading-relaxed">
                  Guests are welcome to participate in the Ashram&apos;s daily activities:
                </p>
                
                <ul className="mt-3.5 space-y-2 border-t border-white/5 pt-3 text-[14px] text-gray-300">
                  <li className="flex items-center justify-between gap-4 font-light">
                    <span className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#c5a880]" />
                      Morning prayers
                    </span>
                    <span className="font-semibold text-white bg-white/5 px-2 py-0.5 rounded-xs">6:30 AM</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 font-light">
                    <span className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-[#c5a880]" />
                      Evening prayers
                    </span>
                    <span className="font-semibold text-white bg-white/5 px-2 py-0.5 rounded-xs">6:00 PM</span>
                  </li>
                  <li className="flex items-start justify-between gap-4 font-light">
                    <span className="flex items-start gap-2 max-w-[280px]">
                      <span className="h-1 w-1 rounded-full bg-[#c5a880] mt-1.5" />
                      Food distribution to yogis & underprivileged
                    </span>
                    <span className="font-semibold text-white bg-white/5 px-2 py-0.5 rounded-xs shrink-0 text-right">
                      8:00 AM - 8:30 AM
                    </span>
                  </li>
                </ul>
                
                <p className="mt-4 border-t border-white/5 pt-3 text-[14px] italic text-gray-400 font-light leading-relaxed">
                  * Guests can also inquire about other spiritual and religious activities inside and outside the Ashram.
                </p>
              </div>

              {/* Primary Navigation Trigger Link */}
              <a
                href={activitySlides[activeTab].link}
                className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-[#fff] px-6 text-xs font-bold uppercase tracking-wider text-[#fff] transition hover:bg-[#fdbb00] hover:text-white"
              >
                Explore Activities
              </a>
            </div>
            
          </div>

        </div>
      </div>
    </section>
  );
}
