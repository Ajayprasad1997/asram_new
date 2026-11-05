
"use client";

import { useEffect, useState , useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Images,
} from "lucide-react";

const galleryCategories = [
  {
    id: "overview",
    label: "Ashram Overview",
    images: [
      "/assets/images/about1.jpg",
      "/assets/images/about2.jpg",
      "/assets/images/about3.jpg",
      "/assets/images/about4.jpg",
      "/assets/images/gallery1.jpg",
       "/assets/images/gallery2.jpg",
        "/assets/images/gallery3.jpg",
    ],
  },

  {
    id: "deluxe",
    label: "Deluxe Rooms",
    images: [
      "/assets/images/deluxe-booking-sites/1.jpg",
      "/assets/images/deluxe-booking-sites/2.jpg",
      "/assets/images/deluxe-booking-sites/3.jpg",
      "/assets/images/deluxe-booking-sites/4.jpg",
    ],
  },
  {
    id: "super-deluxe",
    label: "Super Deluxe Rooms",
    images: [
      "/assets/images/super-deluxe-rooms/1.jpg",
      "/assets/images/super-deluxe-rooms/2.jpg",
      "/assets/images/super-deluxe-rooms/3.jpg",
      "/assets/images/super-deluxe-rooms/4.jpg",
    ],
  },
  {
    id: "guests",
    label: "Photos Guests",
    images: [
      "/assets/images/gl1.jpg",
      "/assets/images/gl2.jpg",
      "/assets/images/gl3.jpg",
      "/assets/images/gl4.jpg",
      "/assets/images/guests/1.jpg",
      "/assets/images/guests/2.jpg",
      "/assets/images/guests/3.jpg",
      "/assets/images/guests/4.jpg",
      "/assets/images/guests/5.jpg",
      "/assets/images/guests/6.jpg",
    ],
  },
  {
    id: "temple",
    label: "Temple, Hall & Lawn",
    images: [
       "/assets/images/temple-hall/1.jpg",
      "/assets/images/temple-hall/2.jpg",
      "/assets/images/temple-hall/3.jpg",
      "/assets/images/temple-hall/4.jpg",
      "/assets/images/temple-hall/5.jpg",
      "/assets/images/temple-hall/6.jpg",
      "/assets/images/temple-hall/7.jpg",
      "/assets/images/temple-hall/8.jpg",
      "/assets/images/temple-hall/9.jpg",
      "/assets/images/temple-hall/10.jpg",
      "/assets/images/temple-hall/11.jpg",
      "/assets/images/temple-hall/12.jpg",
      "/assets/images/temple-hall/13.jpg",
      "/assets/images/temple-hall/14.jpg",
      "/assets/images/temple-hall/15.jpg",
      "/assets/images/temple-hall/16.jpg",
    ],
  },
 
  {
    id: "social",
    label: "Social Activities",
    images: [
       "/assets/images/ac2.jpg",
      "/assets/images/activitie1.jpg",
      "/assets/images/food.jpg",
      "/assets/images/bhajan.jpg",
    ],
  },
  
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const tabContainerRef = useRef(null);
  const tabRefs = useRef({});

  const activeCategory = galleryCategories.find(
    (category) => category.id === activeTab
  );

  const images = activeCategory?.images || [];
  const lightboxOpen = lightboxIndex !== null;

  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      offset: 70,
      easing: "ease-out-cubic",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [activeTab]);

  useEffect(() => {
    const container = tabContainerRef.current;
    const activeButton = tabRefs.current[activeTab];

    if (!container || !activeButton) return;

    const frame = window.requestAnimationFrame(() => {
      const containerRect = container.getBoundingClientRect();
      const buttonRect = activeButton.getBoundingClientRect();

      const targetLeft =
        container.scrollLeft +
        buttonRect.left -
        containerRect.left -
        (container.clientWidth - buttonRect.width) / 2;

      container.scrollTo({
        left: targetLeft,
        behavior: "smooth",
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeTab]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLightboxIndex(null);
      }

      if (event.key === "ArrowRight") {
        setLightboxIndex((current) =>
          current === images.length - 1 ? 0 : current + 1
        );
      }

      if (event.key === "ArrowLeft") {
        setLightboxIndex((current) =>
          current === 0 ? images.length - 1 : current - 1
        );
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen, images.length]);

  const showPrevious = () => {
    setLightboxIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setLightboxIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  const sectionRefs = useRef({});

      useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            const visibleSections = entries
              .filter((entry) => entry.isIntersecting)
              .sort(
                (a, b) =>
                  a.boundingClientRect.top - b.boundingClientRect.top
              );

            if (visibleSections.length > 0) {
              setActiveTab(visibleSections[0].target.dataset.category);
            }
          },
          {
            root: null,
            rootMargin: "-160px 0px -55% 0px",
            threshold: 0,
          }
        );

        galleryCategories.forEach((category) => {
          const section = sectionRefs.current[category.id];

          if (section) observer.observe(section);
        });

        return () => observer.disconnect();
      }, []);

      
function GalleryCarousel({ category, onImageClick }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [spacing, setSpacing] = useState(220);

  const images = category.images || [];
  const totalImages = images.length;

  useEffect(() => {
    const updateSpacing = () => {
      setSpacing(window.innerWidth < 640 ? 125 : 220);
    };

    updateSpacing();

    window.addEventListener("resize", updateSpacing);

    return () => window.removeEventListener("resize", updateSpacing);
  }, []);

  // Infinite autoplay
  useEffect(() => {
    if (isPaused || totalImages <= 1) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalImages);
    }, 1000);

    return () => clearInterval(interval);
  }, [isPaused, totalImages]);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % totalImages);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + totalImages) % totalImages);
  };

  if (!totalImages) return null;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-[#FFB900]/10 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-blue-400/10 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.06]"
        />
      </div>


      {/* 3D INFINITE CAROUSEL */}
      <div
        className="relative z-10 h-[280px] w-full sm:h-[390px] md:h-[440px]"
        style={{ perspective: "1200px" }}
      >
        {[-2, -1, 0, 1, 2].map((offset) => {

          const unwrappedIndex = activeIndex + offset;
          const imageIndex =
            ((unwrappedIndex % totalImages) + totalImages) % totalImages;
          const cycle = Math.floor(unwrappedIndex / totalImages);

          const image = images[imageIndex];

          const isCenter = offset === 0;

          return (
            <motion.button
              key={`${category.id}-${cycle}-${imageIndex}`}
              type="button"
              onClick={() => {
                if (isCenter) {
                  onImageClick(imageIndex);
                } else {
                  setActiveIndex(imageIndex);
                }
              }}
              aria-label={
                isCenter
                  ? `View ${category.label} photo ${imageIndex + 1}`
                  : `Show photo ${imageIndex + 1}`
              }
              initial={false}
              animate={{
                x: offset * spacing,
                scale: isCenter ? 1 : Math.max(0.58, 0.84 - Math.abs(offset) * 0.09),
                rotateY: offset * -28,
                z: isCenter ? 100 : -Math.abs(offset) * 100,
                opacity:
                  totalImages < 3 && !isCenter
                    ? 0
                    : Math.abs(offset) === 2
                      ? 0.35
                      : Math.abs(offset) === 1
                        ? 0.75
                        : 1,
              }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-1/2 top-1/2 w-[72vw] max-w-[430px] -translate-x-1/2 -translate-y-1/2"
              style={{
                transformStyle: "preserve-3d",
                transformOrigin: "center center",
                zIndex: 10 - Math.abs(offset),
                pointerEvents:
                  totalImages < 3 && !isCenter ? "none" : "auto",
              }}
            >
              {/* IMAGE CARD */}
              <div
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border-2 bg-white p-1.5 shadow-2xl transition-colors duration-500 sm:rounded-3xl sm:p-2 ${
                  isCenter
                    ? "border-[#FFB900] shadow-[#FFB900]/20"
                    : "border-white/20"
                }`}
              >

                <img
                  src={image}
                  alt={`${category.label} ${imageIndex + 1}`}
                  loading="lazy"
                  draggable="false"
                  className="h-full w-full rounded-xl object-cover sm:rounded-2xl"
                />

                {/* IMAGE OVERLAY */}
                <div className="absolute inset-1.5 rounded-xl bg-gradient-to-t from-[#071426]/80 via-transparent to-transparent sm:inset-2 sm:rounded-2xl" />

                {/* CENTER IMAGE CONTENT */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between sm:bottom-6 sm:left-6 sm:right-6">

                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#FFCA45] sm:text-xs">
                      {category.label}
                    </p>

                    <p className="mt-1 text-sm font-bold text-white sm:text-lg">
                      Photo {imageIndex + 1}
                    </p>
                  </div>

                  {isCenter && (
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFB900] text-[#14233F] shadow-xl">
                      <Maximize2 size={19} />
                    </span>
                  )}

                </div>

              </div>
            </motion.button>
          );
        })}
      </div>

      {/* NAVIGATION */}
      <div className="relative z-20 mt-5 flex items-center justify-center gap-5">

        <button
          type="button"
          onClick={prevSlide}
          aria-label="Previous slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#26437e] bg-white/10 text-[#26437e] backdrop-blur-md transition-all hover:border-[#FFB900] hover:bg-[#FFB900] hover:text-[#14233F]"
        >
          <ChevronLeft size={23} />
        </button>

        {/* IMAGE COUNTER */}
        <div className="min-w-[100px] text-center">

          <p className="text-sm font-bold tracking-widest text-[#26437e]">
            <span className="text-[#FFCA45]">
              {String(activeIndex + 1).padStart(2, "0")}
            </span>
            <span className="mx-2 text-white/40">/</span>
            {String(totalImages).padStart(2, "0")}
          </p>

          <div className="mt-2 h-1 w-24 overflow-hidden rounded-full bg-white/20">
            <motion.div
              className="h-full rounded-full bg-[#FFB900]"
              animate={{
                width: `${((activeIndex + 1) / totalImages) * 100}%`,
              }}
              transition={{ duration: 0.4 }}
            />
          </div>

        </div>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[#26437e] bg-[#26437e] text-white backdrop-blur-md transition-all hover:border-[#FFB900] hover:bg-[#FFB900] hover:text-[#14233F]"
        >
          <ChevronRight size={23} />
        </button>

      </div>

      {/* AUTOPLAY INDICATOR */}
      {/* <div className="relative z-20 mt-5 flex items-center justify-center gap-2">

        <span
          className={`h-2 w-2 rounded-full ${
            isPaused ? "bg-[#FFB900]" : "animate-pulse bg-green-400"
          }`}
        />

        <span className="text-[10px] font-medium uppercase tracking-[2px] text-white/60">
          {isPaused ? "Autoplay Paused" : "Infinite Experience"}
        </span>

      </div> */}

    </div>
  );
}


  return (
    <main className="overflow-x-clip bg-[#F5F7FB] text-[#14233F]">

      {/* HERO BANNER */}
      <section className="pt-[28px] sm:pt-0 relative flex min-h-[350px] items-center overflow-hidden md:min-h-[440px]">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] hover:scale-105"
          style={{
            backgroundImage:
              "url('/assets/images/abgh.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#102B58]/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102B58]/90 via-[#102B58]/50 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">
          <div data-aos="fade-up" className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#FFB900]" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#FFCA45]">
                Shree Krishna Bhakti Ashram
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Our <span className="text-[#FFB900]">Gallery</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/85 md:text-lg">
              Explore beautiful moments, peaceful surroundings,
              comfortable rooms, and spiritual experiences at our Ashram.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
              <Link href="/" className="transition hover:text-[#FFB900]">
                Home
              </Link>
              <span>/</span>
              <span className="font-semibold text-[#FFB900]">Gallery</span>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white to-[#244584]" />
      </section>

      {/* GALLERY INTRO */}
      <section className="px-5 pb-10 pt-16 md:px-10 md:pt-20">
        <div className="mx-auto max-w-7xl text-center" data-aos="fade-up">

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-10 bg-[#FFB900]" />
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#244584]">
              Moments & Memories
            </span>
            <span className="h-[2px] w-10 bg-[#FFB900]" />
          </div>

          <h2 className="text-3xl font-bold text-[#14233F] md:text-5xl">
            Explore Our Ashram
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-8 text-[#647084] md:text-base">
            Take a visual journey through our Ashram, from welcoming
            accommodation and beautiful surroundings to temple life,
            religious celebrations, and memorable guest experiences.
          </p>

        </div>
      </section>

      
{/* GALLERY TABS & ALL CATEGORY SECTIONS */}
<section className="pb-20 md:pb-24">

  {/* FULL WIDTH STICKY TABS */}
  <div 
  className="sticky top-[75px] md:top-[75px] z-50 w-full border-y border-[#DCE3ED] bg-[#F5F7FB]/95 shadow-sm backdrop-blur-xl">

    <div className="mx-auto max-w-7xl px-4 py-3 md:px-8">

      <div ref={tabContainerRef} className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide lg:flex-wrap lg:justify-center">

        {galleryCategories.map((category) => (
         <button
  key={category.id}
  ref={(el) => {
    tabRefs.current[category.id] = el;
  }}
  type="button"
  onClick={() => {
    setActiveTab(category.id);
    setLightboxIndex(null);

    sectionRefs.current[category.id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }}
  className={`relative shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
    activeTab === category.id
      ? "bg-[#244584] text-white shadow-lg shadow-[#244584]/20"
      : "border border-[#DCE3ED] bg-white text-[#46536A] hover:border-[#FFB900] hover:bg-[#FFF8E8] hover:text-[#244584]"
  }`}
>
  {category.label}

  {activeTab === category.id && (
    <span className="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#FFB900]" />
  )}
</button>
        ))}

      </div>

    </div>
  </div>

  {/* ALL GALLERY CATEGORY SECTIONS */}
  <div className="mx-auto max-w-7xl space-y-20 px-4 pt-12 md:space-y-28 md:px-10 md:pt-16">

    {galleryCategories.map((category) => (

      <div
        key={category.id}
        ref={(element) => {
          sectionRefs.current[category.id] = element;
        }}
        data-category={category.id}
        id={`gallery-${category.id}`}
        className="scroll-mt-[155px] md:scroll-mt-[180px]"
      >

        {/* CATEGORY HEADER */}
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">

          <div>
            <div className="mb-2 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#FFB900]" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#244584]">
                Explore Our Collection
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#14233F] md:text-3xl">
              {category.label}
            </h3>

            <p className="mt-2 text-sm text-[#8490A2]">
              Explore our collection of photographs
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#244584] shadow-sm">
            <Images size={17} />
            {category.images.length} Photos
          </div>

        </div>

      {/* 3D INFINITE GALLERY CAROUSEL */}
        <GalleryCarousel
          key={category.id}
          category={category}
          onImageClick={(index) => {
            setActiveTab(category.id);
            setLightboxIndex(index);
          }}
        />

      </div>

    ))}

  </div>

</section>


      {/* LIGHTBOX */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#071426]/95 p-4 backdrop-blur-md"
          onClick={() => setLightboxIndex(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >

          {/* CLOSE BUTTON */}
          <button
            type="button"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close image viewer"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all hover:rotate-90 hover:bg-[#FFB900] hover:text-[#14233F]"
          >
            <X size={23} />
          </button>

          {/* IMAGE COUNT */}
          <div className="absolute left-5 top-6 z-20 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            {lightboxIndex + 1} / {images.length}
          </div>

          {/* PREVIOUS */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showPrevious();
            }}
            aria-label="Previous image"
            className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#FFB900] hover:text-[#14233F] md:left-8 md:h-14 md:w-14"
          >
            <ChevronLeft size={30} />
          </button>

          {/* IMAGE */}
          <div
            className="flex max-h-[85vh] w-full max-w-5xl flex-col items-center"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              key={images[lightboxIndex]}
              src={images[lightboxIndex]}
              alt={`${activeCategory?.label} photo ${lightboxIndex + 1}`}
              className="max-h-[75vh] w-auto max-w-full rounded-xl border border-white/10 object-contain shadow-2xl"
            />

            <div className="mt-5 text-center">
              <h3 className="text-lg font-bold text-white">
                {activeCategory?.label}
              </h3>
              <p className="mt-1 text-sm text-white/60">
                Photo {lightboxIndex + 1}
              </p>
            </div>
          </div>

          {/* NEXT */}
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            aria-label="Next image"
            className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all hover:bg-[#FFB900] hover:text-[#14233F] md:right-8 md:h-14 md:w-14"
          >
            <ChevronRight size={30} />
          </button>

        </div>
      )}


   <ContactSection />
      <Footer />
    </main>
  );
}
