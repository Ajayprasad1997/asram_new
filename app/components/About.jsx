"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import AOS from 'aos'; 
import 'aos/dist/aos.css';

const sliderImages = [
  '/assets/images/about1.jpg',
  '/assets/images/about2.jpg',
  '/assets/images/about3.jpg',
  '/assets/images/about4.jpg',
];

export default function AboutAshram() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 1. Hook up DOM reference boundaries to compute active scroll progress
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // 2. Map scroll percentages to translation styles (moves down when scrolling down)
  const yParallax = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  // 3. Initialize AOS safely inside a client-side layout hook
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true,     // Triggers animation only once when scrolling down
      easing: 'ease-out-quad',
    });
    
    // Forces re-calculation when layout positions settle
    AOS.refresh();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sliderImages.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const boxSliderVariants = {
    enter: {
      x: '100%',
      scale: 1.05,
      rotate: 0.5,
      zIndex: 10,
    },
    center: {
      x: '0%',
      scale: 1,
      rotate: 0,
      zIndex: 20,
    },
    exit: {
      x: '-20%',
      scale: 0.95,
      rotate: -0.5,
      zIndex: 0,
    },
  };

  return (
    <section 
      ref={sectionRef} 
      className="relative w-full overflow-hidden bg-white py-16 md:py-24"
    >
      {/* Decorative Top Right Stripes */}
      <div className="absolute right-0 top-0 hidden w-1/3 flex-col gap-3 md:flex">
        <div className="h_20 w-full bg-[#86a7e3]/20" />
        <div className="h_20 w-full bg-[#86a7e3]/20" />
        <div className="h_20 w-full bg-[#86a7e3]/20" />
        
      </div>

      {/* Outer grid layer spanning edge-to-edge */}
      <div className="w-full">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT SIDE: Edge-to-Edge Image Slider Frame */}
          <div 
            className="relative w-full lg:col-span-6"
            data-aos="fade-right"
          >
            {/* Aspect frame with no left borders or bounding shapes */}
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-900 shadow-2xl lg:aspect-auto lg:h-[520px]">
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentIndex}
                  variants={boxSliderVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    type: "spring",
                    stiffness: 70,
                    damping: 18,
                    mass: 0.8
                  }}
                  className="absolute inset-0 h-full w-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${sliderImages[currentIndex]})` }}
                />
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-black/5 pointer-events-none z-30" />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content Block with Staggered Fade Up */}
          <div className="flex flex-col justify-center px-4 sm:px-2 lg:col-span-6 lg:max-w-2xl lg:px-8 xl:pl-16">
            <h2 
              className="text-3xl font-bold uppercase tracking-wide text-[#244584] sm:text-4xl md:text-5xl" 
              data-aos="fade-up"
              data-aos-delay="100"
            >
              About the <span className="mt-1 block text-[#fdbb00]">Ashram</span>
            </h2>
            
            <div className="mt-6 space-y-4 text-sm leading-7 text-gray-600">
              <p 
                className="font-medium text-gray-800" 
                data-aos="fade-up"
                data-aos-delay="200"
              >
                The Ashram is an ancestral property.
              </p>
              <p 
                data-aos="fade-up"
                data-aos-delay="300"
              >
                It is now open to guests seeking a peaceful, comfortable, and spiritually enriching stay in Vrindavan.
                The property offers a serene atmosphere, spacious rooms, a well-maintained garden, and a temple within the premises.
              </p>
            </div>

            {/* Action Buttons Row */}
            <div 
              className="mt-8 flex flex-wrap gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                href="/accommodation"
                className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#244584] px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#fdbb00]"
              >
                Book Your Stay
              </Link>
              
              <Link
                href="/events"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-[#244584] px-6 text-xs font-bold uppercase tracking-wider text-[#244584] transition hover:bg-[#244584] hover:text-white"
              >
                Our Activities
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
