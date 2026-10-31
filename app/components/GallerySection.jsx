"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const galleryStates = [
  {
    leftImg: { src: '/assets/images/gl1.jpg', label: "Kwame Nkrumah Memorial Park" },
    rightImg: { src: '/assets/images/gl2.jpg', label: "Kwame Nkrumah Memorial Park" },
    bottomLeftImg: { src: '/assets/images/gl3.jpg', label: "Aburi Botanical Gardens" },
    bottomRightImg: { src: '/assets/images/gl4.jpg', label: "Aburi Botanical Gardens" }
  },
  {
    leftImg: { src: '/assets/images/gl5.jpg', label: "Sacred Ashram Grounds" },
    rightImg: { src: '/assets/images/gl7.jpg', label: "Vrindavan Heritage Path" },
    bottomLeftImg: { src: '/assets/images/gl6.jpg', label: "Yamuna Aarti View" },
    bottomRightImg: { src: '/assets/images/gl8.jpg', label: "Spiritual Meditation Hall" }
  }
];

export default function GallerySection() {
  const [currentState, setCurrentState] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  
  const containerRef = useRef(null);
  const stateRef = useRef(0);
  const isThrottled = useRef(false);

  // Flatten images into a clean 1D array for easy left/right arrow navigation
  const allImagesList = [
    galleryStates[currentState].leftImg,
    galleryStates[currentState].bottomLeftImg,
    galleryStates[currentState].rightImg,
    galleryStates[currentState].bottomRightImg
  ];

 
useEffect(() => {
  const element = containerRef.current;
  if (!element) return;

  let throttleTimer;

  const resetThrottle = () => {
    clearTimeout(throttleTimer);

    throttleTimer = setTimeout(() => {
      isThrottled.current = false;
    }, 800);
  };

  const handleGalleryScroll = (event) => {
    if (lightboxIndex !== null) return;

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const activeState = stateRef.current;

    // Gallery bottom reaches viewport bottom
    const reachedBottom =
      rect.bottom <= viewportHeight + 10 &&
      rect.bottom >= viewportHeight - 100;

    // Gallery top reaches viewport top (for reverse scrolling)
    const reachedTop =
      rect.top >= -100 &&
      rect.top <= 10;

    if (isThrottled.current) {
      if (reachedBottom || reachedTop) {
        event.preventDefault();
      }
      return;
    }

    // SCROLL DOWN
    if (event.deltaY > 20) {
      if (reachedBottom && activeState < galleryStates.length - 1) {
        event.preventDefault();

        isThrottled.current = true;

        const nextState = activeState + 1;

        stateRef.current = nextState;
        setCurrentState(nextState);

        resetThrottle();
      }
    }

    // SCROLL UP
    else if (event.deltaY < -20) {
      if (reachedTop && activeState > 0) {
        event.preventDefault();

        isThrottled.current = true;

        const prevState = activeState - 1;

        stateRef.current = prevState;
        setCurrentState(prevState);

        resetThrottle();
      }
    }
  };

  element.addEventListener("wheel", handleGalleryScroll, {
    passive: false,
  });

  return () => {
    element.removeEventListener("wheel", handleGalleryScroll);
    clearTimeout(throttleTimer);
  };
}, [lightboxIndex]);


  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) => (prev === 0 ? allImagesList.length - 1 : prev - 1));
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) => (prev === allImagesList.length - 1 ? 0 : prev + 1));
      } else if (e.key === "Escape") {
        setLightboxIndex(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, currentState]);

  const openLightboxWithImage = (imageObj) => {
    const foundIndex = allImagesList.findIndex((img) => img.src === imageObj.src);
    if (foundIndex !== -1) setLightboxIndex(foundIndex);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === 0 ? allImagesList.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev === allImagesList.length - 1 ? 0 : prev + 1));
  };

  const leftColumnVariants = {
    enter: (dir) => ({
      y: dir === 'down' ? '100%' : '-100%',
      opacity: 0
    }),
    center: { y: '0%', opacity: 1 },
    exit: (dir) => ({
      y: dir === 'down' ? '-100%' : '100%',
      opacity: 0
    })
  };

  const rightColumnVariants = {
    enter: (dir) => ({
      y: dir === 'down' ? '-100%' : '100%',
      opacity: 0
    }),
    center: { y: '0%', opacity: 1 },
    exit: (dir) => ({
      y: dir === 'down' ? '100%' : '-100%',
      opacity: 0
    })
  };

  const direction = currentState === 1 ? 'down' : 'up';
  const currentLightboxImg = lightboxIndex !== null ? allImagesList[lightboxIndex] : null;

  return (
    <section 
      ref={containerRef}
      className="relative w-full bg-[#fcfbfa] py-24 overflow-hidden font-sans select-none"
    >
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-6">
          
          {/* LEFT COLUMN */}
          <div className="relative flex flex-col gap-8 lg:col-span-4 min-h-[500px] lg:min-h-[700px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentState}
                custom={direction}
                variants={leftColumnVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ ease: "easeInOut", duration: 0.7 }}
                className="flex flex-col gap-8 w-full h-full justify-between"
              >
                <div 
                  onClick={() => openLightboxWithImage(galleryStates[currentState].leftImg)}
                  className="group relative w-full overflow-hidden shadow-sm cursor-zoom-in"
                >
                  <div className="relative aspect-[3/3] w-full transition-transform duration-500 group-hover:scale-102">
                    <img src={galleryStates[currentState].leftImg.src} alt="Gallery" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs text-white font-medium tracking-wide drop-shadow-sm">
                    {galleryStates[currentState].leftImg.label}
                  </div>
                </div>

                <div 
                  onClick={() => openLightboxWithImage(galleryStates[currentState].bottomLeftImg)}
                  className="group relative w-full overflow-hidden shadow-md mt-auto cursor-zoom-in"
                >
                  <div className="relative aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-102">
                    <img src={galleryStates[currentState].bottomLeftImg.src} alt="Gallery" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs text-white font-medium tracking-wide drop-shadow-sm">
                    {galleryStates[currentState].bottomLeftImg.label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* CENTER TEXT PANEL */}
          <div 
            className="z-20 flex flex-col items-center justify-center text-center px-4 lg:col-span-4 self-center"
            data-aos="fade-up"
          >
            <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
              <span className="h-px w-6 bg-gray-300" />
              Nearby Places
              <span className="h-px w-6 bg-gray-300" />
            </div>
            <h2 className="mt-4 font-serif text-3xl font-bold uppercase tracking-widest text-gray-900 sm:text-4xl lg:text-5xl">
              Our Gallery
            </h2>
            <p className="mt-6 max-w-xs text-[12px] font-light leading-6 tracking-wide text-gray-500">
              When you travel and relax you can&apos;t miss the new discoveries tour, our hotel has a guided tour for tourists to explore the city.
            </p>
            <Link
              href="/#"
              className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full border border-[#fff] px-6 text-xs font-bold uppercase tracking-wider text-[#fff] transition hover:bg-[#fdbb00] hover:text-whiteinline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#244584] px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#fdbb00]"
            >
              Discovery Gallery
            </Link>
          </div>

          {/* RIGHT COLUMN */}
          <div className="relative flex flex-col gap-8 lg:col-span-4 min-h-[500px] lg:min-h-[700px] overflow-hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentState}
                custom={direction}
                variants={rightColumnVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ ease: "easeInOut", duration: 0.7 }}
                className="flex flex-col gap-8 w-full h-full justify-between"
              >
                <div 
                  onClick={() => openLightboxWithImage(galleryStates[currentState].rightImg)}
                  className="group relative w-full overflow-hidden shadow-sm cursor-zoom-in"
                >
                  <div className="relative aspect-[3/4] w-full transition-transform duration-500 group-hover:scale-102">
                    <img src={galleryStates[currentState].rightImg.src} alt="Gallery" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs text-white font-medium tracking-wide drop-shadow-sm">
                    {galleryStates[currentState].rightImg.label}
                  </div>
                </div>

                <div 
                  onClick={() => openLightboxWithImage(galleryStates[currentState].bottomRightImg)}
                  className="group relative w-full overflow-hidden shadow-sm cursor-zoom-in"
                >
                  <div className="relative aspect-[3/3] w-full transition-transform duration-500 group-hover:scale-102">
                    <img src={galleryStates[currentState].bottomRightImg.src} alt="Gallery" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/25" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs text-white font-medium tracking-wide drop-shadow-sm">
                    {galleryStates[currentState].bottomRightImg.label}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {currentLightboxImg && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              aria-label="Close lightbox"
              className="absolute right-5 top-5 z-10 text-white"
              onClick={() => setLightboxIndex(null)}
            >
              <X size={32} />
            </button>
            <button
              type="button"
              aria-label="Previous image"
              className="absolute left-4 z-10 rounded-full bg-white/10 p-3 text-white md:left-8"
              onClick={handlePrevImage}
            >
              <ChevronLeft size={32} />
            </button>
            <motion.img
              key={currentLightboxImg.src}
              src={currentLightboxImg.src}
              alt={currentLightboxImg.label}
              className="max-h-full max-w-full object-contain"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(event) => event.stopPropagation()}
            />
            <button
              type="button"
              aria-label="Next image"
              className="absolute right-4 z-10 rounded-full bg-white/10 p-3 text-white md:right-8"
              onClick={handleNextImage}
            >
              <ChevronRight size={32} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
