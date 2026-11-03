
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
    id: "guests",
    label: "Photos Guests",
    images: [
      "/assets/images/gl1.jpg",
      "/assets/images/gl2.jpg",
      "/assets/images/gl3.jpg",
      "/assets/images/gl4.jpg",
    ],
  },
  {
    id: "temple",
    label: "Temple, Hall & Lawn",
    images: [
      "/assets/images/chs.jpg",
      "/assets/images/evening.jpg",
      "/assets/images/bhajan.jpg",
      "/assets/images/about5.jpg",
    ],
  },
  {
    id: "religious",
    label: "Religious Activities",
    images: [
      "/assets/images/ac2.jpg",
      "/assets/images/activitie1.jpg",
      "/assets/images/food.jpg",
      "/assets/images/bhajan.jpg",
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
];

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [lightboxIndex, setLightboxIndex] = useState(null);

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

  return (
    <main className="overflow-hidden bg-[#F5F7FB] text-[#14233F]">

      {/* HERO BANNER */}
      <section className="relative flex min-h-[350px] items-center overflow-hidden md:min-h-[440px]">
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

      {/* GALLERY TABS & IMAGES */}
      <section className="px-4 pb-20 md:px-10 md:pb-24">
        <div className="mx-auto max-w-7xl">

          {/* CATEGORY TABS */}
          <div className="mb-10 border-b border-[#DCE3ED]" data-aos="fade-up">
            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide lg:flex-wrap lg:justify-center">

              {galleryCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveTab(category.id);
                    setLightboxIndex(null);
                  }}
                  className={`relative shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                    activeTab === category.id
                      ? "bg-[#244584] text-white shadow-lg shadow-[#244584]/20"
                      : "border border-[#DCE3ED] bg-white text-[#46536A] hover:border-[#FFB900] hover:bg-[#FFF8E8] hover:text-[#244584]"
                  }`}
                >
                  {category.label}

                  {activeTab === category.id && (
                    <span className="absolute -bottom-3 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-[#FFB900]" />
                  )}
                </button>
              ))}

            </div>
          </div>

          {/* GALLERY HEADER */}
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-xl font-bold text-[#14233F] md:text-2xl">
                {activeCategory?.label}
              </h3>
              <p className="mt-1 text-sm text-[#8490A2]">
                Explore our collection of photographs
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#244584] shadow-sm">
              <Images size={17} />
              {images.length} Photos
            </div>
          </div>

          {/* IMAGE GRID */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {images.map((image, index) => (
              <button
                key={`${activeTab}-${image}`}
                type="button"
                onClick={() => setLightboxIndex(index)}
                data-aos="fade-up"
                data-aos-delay={(index % 4) * 100}
                aria-label={`Open ${activeCategory?.label} photo ${index + 1}`}
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl border border-white bg-white p-1 text-left shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-[#FFB900]"
              >
                <img
                  src={image}
                  alt={`${activeCategory?.label} ${index + 1}`}
                  className="h-full w-full rounded-xl object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-1 flex items-center justify-center rounded-xl bg-[#102B58]/0 transition-all duration-500 group-hover:bg-[#102B58]/40">
                  <div className="flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-[#FFB900] text-[#14233F] opacity-0 shadow-lg transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                    <Maximize2 size={21} />
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 right-3 translate-y-3 rounded-xl bg-white/95 px-4 py-3 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm font-bold text-[#244584]">
                    {activeCategory?.label}
                  </p>
                  <p className="mt-1 text-xs text-[#8490A2]">
                    View Photo {index + 1}
                  </p>
                </div>
              </button>
            ))}

          </div>

          {/* EMPTY STATE */}
          {images.length === 0 && (
            <div className="rounded-2xl bg-white px-5 py-16 text-center shadow-sm">
              <Images className="mx-auto text-[#244584]" size={40} />
              <h3 className="mt-4 text-xl font-bold">No Photos Available</h3>
              <p className="mt-2 text-sm text-[#647084]">
                Photos for this category will be added soon.
              </p>
            </div>
          )}

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
