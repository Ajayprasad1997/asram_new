
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

import {
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ArrowUpRight,
  BedDouble,
  CheckCircle2,
} from "lucide-react";

/* ================= ROOM DATA ================= */

const roomSections = [
  {
    id: "super-deluxe",
    title: "Super Deluxe Rooms",
    subtitle: "PREMIUM ACCOMMODATION",
    description:
      "Experience premium comfort and elegance in our Super Deluxe Rooms. Thoughtfully designed interiors, spacious accommodation and beautiful surroundings create a peaceful and relaxing stay in Vrindavan.",
    images: [
      {
        src: "assets/images/sd/1.jpg",
        alt: "Super deluxe bedroom",
      },
      {
        src: "assets/images/sd/2.jpg",
        alt: "Premium room interior",
      },
      {
        src: "assets/images/sd/3.jpg",
        alt: "Elegant room design",
      },
      {
        src: "assets/images/sd/4.jpg",
        alt: "Luxury bedroom interior",
      },
      {
        src: "assets/images/sd/5.jpg",
        alt: "Luxury bedroom interior",
      },
      {
        src: "assets/images/sd/6.jpg",
        alt: "Luxury bedroom interior",
      },
    ],
  },
  {
    id: "direct-booking",
    title: "Deluxe Rooms",
    subtitle: "DIRECT BOOKING",
    description:
      "Discover our comfortable Deluxe Rooms with a perfect blend of simplicity and modern amenities. Book directly with us for a convenient and personalized experience during your stay.",
    images: [
      {
        src: "assets/images/db/1.jpg",
        alt: "Deluxe room",
      },
      {
        src: "assets/images/db/2.jpg",
        alt: "Deluxe bedroom",
      },
      {
        src: "assets/images/db/3.jpg",
        alt: "Deluxe room interior",
      },
      {
        src: "assets/images/db/4.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/5.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/6.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/7.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/8.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/9.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/10.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/11.jpg",
        alt: "Deluxe bedroom interior",
      },
       {
        src: "assets/images/db/12.jpg",
        alt: "Deluxe bedroom interior",
      },
    ],
  },
  {
    id: "booking-sites",
    title: "Deluxe Rooms",
    subtitle: "AVAILABLE ON BOOKING PLATFORMS",
    description:
      "Explore our Deluxe Room options available through popular booking platforms. Enjoy a peaceful atmosphere, comfortable accommodation and a memorable stay at Shree Krishna Bhakti Ashram.",
    images: [
      {
        src: "assets/images/dr/1.jpg",
        alt: "Booking site deluxe room",
      },
      {
        src: "assets/images/dr/2.jpg",
        alt: "Room details",
      },
      {
        src: "assets/images/dr/3.jpg",
        alt: "Bedroom interior",
      },
      {
        src: "assets/images/dr/4.jpg",
        alt: "Room view",
      },
      {
        src: "assets/images/dr/5.jpg",
        alt: "Room view",
      },
    ],
  },
];

/* ================= TAB DATA ================= */

const tabs = [
  { id: "super-deluxe", label: "Super Deluxe Rooms" },
  { id: "direct-booking", label: "Deluxe Rooms — Direct Booking" },
  { id: "booking-sites", label: "Deluxe Rooms — Booking Sites" },
];

/* ================= FACILITIES ================= */

const facilities = [
  "Spacious, air-conditioned rooms with heating facilities for colder months.",
  "Attached private bathrooms, comfortable seating areas, wardrobes, and dressing areas in selected rooms.",
  "Selected rooms include a compact kitchen and mini refrigerator.",
  "Garden views, open spaces, and outdoor sitting areas.",
  "The Ashram also has a goshala (cow shelter), prayer rooms, a drinking-water facility (piyau), and provisions for anna khetra and satsang.",
  "Being a ground-floor property, it is also suitable for elderly guests.",
  "Spacious hall and garden adjacent to the temple, ideal for religious ceremonies and social functions.",
  "24/7 power backup for uninterrupted convenience.",
];

/* ================= MAIN COMPONENT ================= */

export default function AccommodationPage() {
  const [activeTab, setActiveTab] = useState("super-deluxe");
  const [lightbox, setLightbox] = useState(null);

  /* AOS INITIALIZATION */

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    return () => {
      AOS.refreshHard();
    };
  }, []);

  /* STICKY TAB ACTIVE SECTION OBSERVER */

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-130px 0px -55% 0px",
        threshold: 0,
      }
    );

    roomSections.forEach((section) => {
      const element = document.getElementById(section.id);

      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  /* TAB CLICK SCROLL */

  const scrollToSection = (id) => {
    setActiveTab(id);

    const element = document.getElementById(id);

    if (!element) return;

    const y =
      element.getBoundingClientRect().top +
      window.scrollY -
      100;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  /* LIGHTBOX OPEN */

  const openLightbox = (sectionIndex, imageIndex) => {
    setLightbox({ sectionIndex, imageIndex });
  };

  /* LIGHTBOX CLOSE */

  const closeLightbox = () => {
    setLightbox(null);
  };

  /* PREVIOUS / NEXT */

  const changeImage = (direction) => {
    setLightbox((prev) => {
      if (!prev) return prev;

      const total =
        roomSections[prev.sectionIndex].images.length;

      return {
        ...prev,
        imageIndex:
          (prev.imageIndex + direction + total) % total,
      };
    });
  };

  /* MODAL BODY SCROLL LOCK */

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [lightbox]);

  /* KEYBOARD CONTROLS */

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;

      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") changeImage(1);
      if (e.key === "ArrowLeft") changeImage(-1);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightbox]);

  return (
    <main className="bg-white text-[#244584]">

      {/* ================= PAGE BANNER ================= */}

      <section className="relative flex min-h-[350px] items-center overflow-hidden md:min-h-[460px]">

        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[7000ms] hover:scale-105"
          style={{
            backgroundImage: "url('/assets/images/abgh.jpg')",
          }}
        />

        <div className="absolute inset-0 bg-[#244584]/80" />

        <div className="relative mx-auto w-full max-w-7xl px-5 py-20 md:px-10">

          <div data-aos="fade-up" className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-12 bg-[#fdbb00]" />

              <span className="text-xs font-bold uppercase tracking-[4px] text-[#fdbb00]">
                Your Peaceful Stay in Vrindavan
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Accommodation
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/90 md:text-lg">
              Experience peace, comfort and spiritual
              hospitality at Shree Krishna Bhakti Ashram.
              Discover thoughtfully designed rooms for
              a memorable stay in Vrindavan.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
              <Link href="/" className="transition hover:text-[#fdbb00]">
                Home
              </Link>

              <span>/</span>

              <span className="font-semibold text-[#fdbb00]">
                Accommodation
              </span>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-[#fdbb00]" />

      </section>

      {/* ================= INTRODUCTION ================= */}

      {/* <section className="bg-white px-5 py-16 sm:py-20">

        <div
          data-aos="fade-up"
          className="mx-auto max-w-3xl text-center"
        >

          <span className="text-xs font-bold uppercase tracking-[4px] text-[#244584]">
            <span className="text-[#fdbb00]">●</span> Stay With Us
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#244584] sm:text-4xl md:text-5xl">
            A Peaceful Stay in the
            <span className="text-[#fdbb00]"> Heart of Vrindavan</span>
          </h2>

          <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
            At Shree Krishna Bhakti Ashram, we offer a peaceful
            environment where comfort meets spirituality.
            Choose from our accommodation options and enjoy
            a relaxing experience surrounded by devotion
            and tranquility.
          </p>

        </div>

      </section> */}

      {/* ================= STICKY ROOM TABS ================= */}

      <nav className="sticky top-0 z-50 border-y border-[#244584]/10 bg-white px-3 py-4 shadow-md sm:px-6">

        <div className="mx-auto flex max-w-[1250px] gap-3 overflow-x-auto scrollbar-hide sm:justify-center">

          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => scrollToSection(tab.id)}
              className={`min-w-max rounded-full border px-5 py-3 text-[11px] font-bold uppercase tracking-[0.7px] transition-all duration-300 sm:px-7 sm:text-xs ${
                activeTab === tab.id
                  ? "border-[#244584] bg-[#244584] text-white shadow-md"
                  : "border-[#244584]/15 bg-white text-[#244584] hover:border-[#fdbb00] hover:bg-[#fdbb00] hover:text-[#244584]"
              }`}
            >
              {tab.label}
            </button>
          ))}

        </div>

      </nav>

      {/* ================= ROOM GALLERY SECTIONS ================= */}

      <div className="mx-auto max-w-[1250px] px-5 pb-10 sm:px-8 lg:px-10">

        {roomSections.map((section, sectionIndex) => (

          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-28 border-b border-[#244584]/10 py-14 sm:py-20"
          >

            {/* FEATURED CONTENT */}

            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[minmax(0,0.9fr)_minmax(0,2.1fr)] md:gap-8">

              {/* LEFT CONTENT */}

              <div data-aos="fade-right" className="max-w-md">

                <span className="mb-3 inline-block text-[14px] font-bold uppercase tracking-[3px] text-[#244584]">
                  <span className="mr-2 text-[#fdbb00]">●</span>
                  {section.subtitle}
                </span>

                <h2 className="text-3xl font-bold leading-tight text-[#244584] sm:text-4xl lg:text-[42px]">
                  {section.title}
                </h2>

                <p className="mt-4 text-[13px] leading-[1.9] text-gray-600">
                  {section.description}
                </p>

                {/* <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold uppercase tracking-[1px] text-[#244584] transition hover:text-[#fdbb00]"
                >
                  Enquire Now
                  <ArrowUpRight size={15} />
                </a> */}

                <div className="mt-5 flex flex-wrap gap-3">

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-[#244584] bg-[#244584] px-6 py-3 text-[13px] font-bold text-white transition duration-300 hover:border-[#fdbb00] hover:bg-[#fdbb00] hover:text-[#244584]"
                  >
                    Book Your Room
                    <ArrowUpRight size={15} />
                  </a>

                  <button
                    type="button"
                    onClick={() => openLightbox(sectionIndex, 0)}
                    className="rounded-full border border-[#244584] px-5 py-3 text-[13px] font-bold text-[#244584] transition duration-300 hover:border-[#fdbb00] hover:bg-[#fdbb00]"
                  >
                    View Gallery
                  </button>

                </div>

              </div>

              {/* FEATURED IMAGE */}

              <button
                type="button"
                data-aos="fade-left"
                onClick={() => openLightbox(sectionIndex, 0)}
                aria-label={`Open ${section.title} gallery`}
                className="group relative h-[260px] cursor-pointer overflow-hidden rounded-[18px] bg-gray-100 text-left sm:h-[360px] lg:h-[390px]"
              >

                <img
                  src={section.images[0].src}
                  alt={section.images[0].alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-[#244584]/0 transition duration-500 group-hover:bg-[#244584]/25" />

                <div className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#fdbb00] text-[#244584] opacity-0 shadow-lg transition duration-300 group-hover:opacity-100">
                  <Maximize2 size={18} />
                </div>

                <span className="absolute bottom-5 left-5 translate-y-3 text-xs font-bold text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  Explore Gallery
                </span>

              </button>

            </div>

            {/* IMAGE GRID */}

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">

              {section.images.slice(1).map((image, imageIndex) => (

                <button
                  type="button"
                  key={`${section.id}-${imageIndex}`}
                  data-aos="fade-up"
                  data-aos-delay={imageIndex * 100}
                  onClick={() =>
                    openLightbox(sectionIndex, imageIndex + 1)
                  }
                  aria-label={`View ${image.alt}`}
                  className="group relative h-[180px] cursor-pointer overflow-hidden rounded-[16px] bg-gray-100 text-left sm:h-[210px] lg:h-[250px]"
                >

                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-[#244584]/0 transition duration-300 group-hover:bg-[#244584]/25" />

                  <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#fdbb00] text-[#244584] opacity-0 transition duration-300 group-hover:opacity-100">
                    <Maximize2 size={16} />
                  </div>

                </button>

              ))}

            </div>

          </section>

        ))}

      </div>

      {/* ================= LIGHTBOX MODAL ================= */}

      {lightbox && (

        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Room image gallery"
        >

          {/* CLOSE */}

          <button
            type="button"
            onClick={closeLightbox}
            aria-label="Close gallery"
            className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#244584] text-white transition hover:bg-[#fdbb00] hover:text-[#244584]"
          >
            <X size={24} />
          </button>

          {/* PREVIOUS */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              changeImage(-1);
            }}
            aria-label="Previous image"
            className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#244584] text-white transition hover:bg-[#fdbb00] hover:text-[#244584] sm:left-8"
          >
            <ChevronLeft size={28} />
          </button>

          {/* IMAGE */}

          <div
            className="relative flex h-[80vh] w-full max-w-6xl items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >

            <img
              key={`${lightbox.sectionIndex}-${lightbox.imageIndex}`}
              src={roomSections[lightbox.sectionIndex].images[lightbox.imageIndex].src.replace(/w=\d+/, "w=1800")}
              alt={roomSections[lightbox.sectionIndex].images[lightbox.imageIndex].alt}
              className="max-h-full max-w-full rounded-xl object-contain animate-[fadeIn_0.3s_ease]"
            />

            <div className="absolute -bottom-9 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium text-white">
              {roomSections[lightbox.sectionIndex].title}
              {" — "}
              {lightbox.imageIndex + 1} /{" "}
              {roomSections[lightbox.sectionIndex].images.length}
            </div>

          </div>

          {/* NEXT */}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              changeImage(1);
            }}
            aria-label="Next image"
            className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-[#244584] text-white transition hover:bg-[#fdbb00] hover:text-[#244584] sm:right-8"
          >
            <ChevronRight size={28} />
          </button>

        </div>

      )}

      {/* ================= FACILITIES SECTION ================= */}

      <section className="bg-[#F5F7FB] py-20 sm:py-24">

        <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16">

          <div data-aos="fade-up" className="mb-14 max-w-3xl">

            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#244584]">
              <span className="text-[#fdbb00]">●</span> Comfort & Convenience
            </span>

            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-[#244584] sm:text-4xl lg:text-5xl">
              Facilities and
              <span className="block text-[#fdbb00]">
                Accommodation
              </span>
            </h2>

            <p className="mt-5 text-sm leading-8 text-gray-600 sm:text-base">
              We provide essential facilities and thoughtful
              amenities to make your stay comfortable, peaceful
              and convenient.
            </p>

          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">

            {facilities.map((item, index) => (

              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={(index % 2) * 100}
                className="group flex gap-4 border-b border-[#244584]/10 pb-6"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#244584] text-white transition duration-300 group-hover:bg-[#fdbb00] group-hover:text-[#244584]">
                  <CheckCircle2 size={20} />
                </div>

                <p className="text-sm leading-7 text-[#46536A] sm:text-base transition-colors duration-300 group-hover:text-[#244584]">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* ================= BOTTOM CTA ================= */}

      <section className="bg-[#244584] px-5 py-20 text-center text-white sm:py-24">

        <div data-aos="zoom-in" className="mx-auto max-w-3xl">

          <span className="text-xs font-bold uppercase tracking-[4px] text-[#fdbb00]">
            Plan Your Stay
          </span>

          <h2 className="mt-5 text-3xl font-bold sm:text-4xl md:text-5xl">
            Experience Peace & Comfort
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/80 sm:text-base">
            Let us welcome you to a peaceful spiritual
            environment in Vrindavan. Contact us to plan
            your memorable stay at our Ashram.
          </p>

          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-[#fdbb00] bg-[#fdbb00] px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#244584] transition duration-300 hover:bg-white hover:border-white"
          >
            Contact Us
            <ArrowUpRight size={17} />
          </a>

        </div>

      </section>

      {/* ================= CONTACT SECTION ================= */}

      <div id="contact">
        <ContactSection />
      </div>

      {/* ================= FOOTER ================= */}

      <Footer />

      {/* ================= GLOBAL STYLES ================= */}

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.97);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>

    </main>
  );
}
