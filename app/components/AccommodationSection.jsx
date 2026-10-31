
"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  BedDouble,
  Users,
} from "lucide-react";

const roomCategories = [
  {
    id: "super-deluxe",
    label: "Super Deluxe Rooms",
    description:
      "Experience extra comfort and a peaceful stay in our Super Deluxe Rooms.",
    rooms: [
      {
        id: 1,
        name: "Super Deluxe Room",
        image: "/assets/images/super-deluxe-rooms/1.jpg",
        guests: "2 Guests",
        detail: "Premium Comfort",
        // description:
        //   "Relax in a spacious, thoughtfully designed room for a comfortable ashram stay.",
      },
      {
        id: 2,
        name: "Super Deluxe Garden Room",
        image: "/assets/images/super-deluxe-rooms/1.jpg",
        guests: "2–3 Guests",
        detail: "Garden Retreat",
        // description:
        //   "Enjoy a restful atmosphere and a welcoming space surrounded by tranquillity.",
      },
      {
        id: 3,
        name: "Super Deluxe Family Room",
        image: "/assets/images/super-deluxe-rooms/3.jpg",
        guests: "Up to 4 Guests",
        detail: "Family Comfort",
        // description:
        //   "A comfortable accommodation option for families visiting the ashram.",
      },
      {
        id: 4,
        name: "Super Deluxe Family Room",
        image: "/assets/images/super-deluxe-rooms/4.jpg",
        guests: "Up to 4 Guests",
        detail: "Family Comfort",
        // description:
        //   "Enjoy a peaceful and comfortable room during your visit to the ashram.",
      },
      {
        id: 5,
        name: "Super Deluxe Family Room",
        image: "/assets/images/super-deluxe-rooms/5.jpg",
        guests: "Up to 4 Guests",
        detail: "Family Comfort",
        // description:
        //   "Relax in a welcoming space designed for a restful stay.",
      },
      {
        id: 6,
        name: "Super Deluxe Family Room",
        image: "/assets/images/super-deluxe-rooms/6.jpg",
        guests: "Up to 4 Guests",
        detail: "Family Comfort",
        // description:
        //   "Discover comfort and tranquillity in our accommodation.",
      },
      {
        id: 7,
        name: "Super Deluxe Family Room",
        image: "/assets/images/super-deluxe-rooms/7.jpg",
        guests: "Up to 4 Guests",
        detail: "Family Comfort",
        // description:
        //   "Make your spiritual visit comfortable with a relaxing place to stay.",
      },
      {
        id: 8,
        name: "Super Deluxe Family Room",
        image: "/assets/images/super-deluxe-rooms/8.jpg",
        guests: "Up to 4 Guests",
        detail: "Family Comfort",
        // description:
        //   "Find a peaceful retreat for your time at the ashram.",
      },
    ],
  },
  {
    id: "deluxe-direct",
    label: "Deluxe Rooms — Direct Booking",
    description:
      "Explore our Deluxe Rooms and enquire directly with the ashram. These rooms are not listed on external booking websites.",
    rooms: [
      {
        id: 9,
        name: "Deluxe Comfort Room",
        image: "/assets/images/diffrent-booking-sites/1.jpg",
        guests: "2 Guests",
        detail: "Direct Enquiry",
        // description:
        //   "Contact our team directly to enquire about availability and your preferred dates.",
      },
      {
        id: 10,
        name: "Deluxe Twin Room",
        image: "/assets/images/diffrent-booking-sites/2.jpg",
        guests: "2 Guests",
        detail: "Direct Enquiry",
        // description:
        //   "A simple and welcoming room for guests seeking a peaceful visit.",
      },
      {
        id: 11,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/3.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 12,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/10.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 13,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/4.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 14,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/11.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 15,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/5.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 16,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/6.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 17,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/7.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 18,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/8.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
      {
        id: 19,
        name: "Deluxe Family Stay",
        image: "/assets/images/diffrent-booking-sites/9.jpg",
        guests: "Family Stay",
        detail: "Direct Enquiry",
      },
    ],
  },
  {
    id: "deluxe-online",
    label: "Deluxe Rooms — Booking Sites",
    description:
      "Discover Deluxe Room options listed on external booking platforms. Check each listing for current prices and availability.",
    rooms: [
      {
        id: 20,
        name: "Deluxe Room",
        image: "/assets/images/deluxe-booking-sites/1.jpg",
        guests: "2 Guests",
        detail: "Online Listing",
        // description:
        //   "Explore this room and check the relevant booking platform for current offers.",
        bookingUrl: "",
        bookingSite: "View Booking Options",
      },
      {
        id: 21,
        name: "Deluxe Double Room",
        image: "/assets/images/deluxe-booking-sites/2.jpg",
        guests: "2 Guests",
        detail: "Online Listing",
        // description:
        //   "Compare available booking options and select the stay that suits your plans.",
        bookingUrl: "",
        bookingSite: "View Booking Options",
      },
      {
        id: 22,
        name: "Deluxe Stay Room",
        image: "/assets/images/deluxe-booking-sites/3.jpg",
        guests: "2–3 Guests",
        detail: "Online Listing",
        // description:
        //   "Visit the relevant listing to review room details, prices, and booking conditions.",
        bookingUrl: "",
        bookingSite: "View Booking Options",
      },
      {
        id: 23,
        name: "Deluxe Stay Room",
        image: "/assets/images/deluxe-booking-sites/4.jpg",
        guests: "2–3 Guests",
        detail: "Online Listing",
        // description:
        //   "Visit the relevant listing to review room details, prices, and booking conditions.",
        bookingUrl: "",
        bookingSite: "View Booking Options",
      },
      {
        id: 24,
        name: "Deluxe Stay Room",
        image: "/assets/images/deluxe-booking-sites/5.jpg",
        guests: "2–3 Guests",
        detail: "Online Listing",
        // description:
        //   "Visit the relevant listing to review room details, prices, and booking conditions.",
        bookingUrl: "",
        bookingSite: "View Booking Options",
      },
      {
        id: 25,
        name: "Deluxe Stay Room",
        image: "/assets/images/deluxe-booking-sites/6.jpg",
        guests: "2–3 Guests",
        detail: "Online Listing",
        // description:
        //   "Visit the relevant listing to review room details, prices, and booking conditions.",
        bookingUrl: "",
        bookingSite: "View Booking Options",
      },
    ],
  },
];

export default function AccommodationSection() {
  const [activeTab, setActiveTab] = useState(roomCategories[0].id);
  const sliderRef = useRef(null);

  const dragRef = useRef({
    dragging: false,
    startX: 0,
    startScrollLeft: 0,
    moved: true,
    suppressClick: false,
  });

  const activeCategory = roomCategories.find(
    (category) => category.id === activeTab
  );

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = 0;
    }
  }, [activeTab]);

  function changeTab(tabId) {
    setActiveTab(tabId);
  }

  function slide(direction) {
    const slider = sliderRef.current;
    if (!slider) return;

    const firstCard = slider.querySelector("[data-room-card]");
    const gap = 32;

    const distance = firstCard
      ? firstCard.getBoundingClientRect().width + gap
      : 350;

    slider.scrollBy({
      left: direction * distance,
      behavior: "smooth",
    });
  }

// Auto slider every 3 seconds
useEffect(() => {
  const interval = setInterval(() => {
    const slider = sliderRef.current;

    if (!slider || dragRef.current.dragging) return;

    const firstCard = slider.querySelector("[data-room-card]");
    if (!firstCard) return;

    const gap = parseFloat(
      window.getComputedStyle(slider).columnGap
    ) || 0;

    const distance =
      firstCard.getBoundingClientRect().width + gap;

    const maxScroll =
      slider.scrollWidth - slider.clientWidth;

    // Return to the first room after reaching the end
    if (slider.scrollLeft >= maxScroll - 5) {
      slider.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        left: distance,
        behavior: "smooth",
      });
    }
  }, 3000);

  return () => clearInterval(interval);
}, [activeTab]);

  function handlePointerDown(event) {
    // Only begin dragging with the primary mouse button.
    if (event.pointerType === "mouse" && event.button !== 0) {
      return;
    }

    const slider = sliderRef.current;
    if (!slider) return;

    dragRef.current.dragging = true;
    dragRef.current.startX = event.clientX;
    dragRef.current.startScrollLeft = slider.scrollLeft;
    dragRef.current.moved = true;
    dragRef.current.suppressClick = false;

    slider.classList.add("is-dragging");

    if (event.pointerType === "mouse") {
      slider.setPointerCapture(event.pointerId);
    }
  }

  function handlePointerMove(event) {
    const slider = sliderRef.current;
    const drag = dragRef.current;

    if (!slider || !drag.dragging) return;

    const distance = event.clientX - drag.startX;

    if (Math.abs(distance) > 5) {
      drag.moved = true;
      drag.suppressClick = true;
    }

    if (drag.moved) {
      slider.scrollLeft = drag.startScrollLeft - distance;
    }
  }

  function handlePointerUp() {
    const slider = sliderRef.current;
    const drag = dragRef.current;

    if (!drag.dragging) return;

    drag.dragging = false;

    if (slider) {
      slider.classList.remove("is-dragging");
    }

    // Keep the click suppression briefly so a drag does not open a card link.
    if (drag.moved) {
      window.setTimeout(() => {
        dragRef.current.suppressClick = false;
      }, 0);
    }
  }

  function handleClickCapture(event) {
    if (dragRef.current.suppressClick) {
      event.preventDefault();
      event.stopPropagation();
      dragRef.current.suppressClick = false;
    }
  }

  return (
    <section
      id="accommodation"
      className="overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Section heading */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mx-auto mb-10 max-w-[1320px] px-6 sm:px-10 lg:px-16"
      >
        <div className="mb-5 flex items-center gap-3">
          <span className="h-px w-10 bg-amber-500" />

          <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#2c83a5]">
            Your peaceful stay
          </span>
        </div>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-[#244584] sm:text-4xl lg:text-5xl">
              Accommodation at
              <span className="mt-1 block text-[#fdbb00]">
                Ashram Suites
              </span>
            </h2>

            {/* <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8">
              Discover comfortable accommodation for your spiritual journey.
              Choose your room category below and explore the available
              booking options for your stay.
            </p> */}
          </div>

          {/* Slider arrows */}
          <div className="hidden sm:flex flex shrink-0 items-center gap-3">
            <button
              type="button"
              onClick={() => slide(-1)}
              aria-label="Previous rooms"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[#244584]/25 text-[#244584] transition hover:bg-[#244584] hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => slide(1)}
              aria-label="Next rooms"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-[#274583] text-white transition hover:bg-[#fdbb00]"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Room category tabs */}
      <div className="mx-auto mb-8 max-w-[1320px] px-6 sm:px-10 lg:px-16">
        <div
          role="tablist"
          aria-label="Accommodation categories"
          className="flex gap-3 overflow-x-auto border-b border-gray-200 pb-3"
        >
          {roomCategories.map((category) => {
            const selected = activeTab === category.id;

            return (
              <button
                key={category.id}
                id={`tab-${category.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls={`panel-${category.id}`}
                onClick={() => changeTab(category.id)}
                className={`shrink-0 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 sm:px-6 ${
                  selected
                    ? "bg-[#244584] text-white shadow-md"
                    : "bg-[#f3eee8] text-[#244584] hover:bg-[#e8e3dc]"
                }`}
              >
                {category.label}
              </button>
            );
          })}
        </div>
    <div className="mb-0 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-600">
          {activeCategory.description}
        </p>
         <Link
          href="/accommodation"
          className="inline-flex items-center gap-2 self-start text-sm font-bold text-[#244584] transition hover:text-[#2c83a5] sm:self-auto"
        >
          Explore All Accommodation
          <ArrowRight size={17} />
        </Link>
        </div>

      </div>

      {/* Active room category panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.id}
          id={`panel-${activeCategory.id}`}
          role="tabpanel"
          aria-labelledby={`tab-${activeCategory.id}`}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
        >
          <div
            ref={sliderRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            onLostPointerCapture={handlePointerUp}
            onClickCapture={handleClickCapture}
            className="room-slider flex cursor-grab snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 active:cursor-grabbing sm:gap-8 sm:px-10 lg:gap-9 lg:px-16"
          >
            {activeCategory.rooms.map((room, index) => (
              <motion.article
                key={room.id}
                data-room-card
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 4) * 0.08,
                }}
                className="group w-[82vw] max-w-[390px] flex-none snap-start sm:w-[46vw] lg:w-[calc((100vw-184px)/3.5)] lg:max-w-[390px]"
              >
                {/* Room image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-[#eef0f2]">
                  <img
                    src={room.image}
                    alt={room.name}
                    draggable={false}
                    loading="lazy"
                    className="h-full w-full select-none object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#102b35]/80 via-transparent to-black/10" />

                  <span className="pointer-events-none absolute left-5 top-5 rounded-full border border-white/35 bg-white/15 px-4 py-2 text-[10px] font-semibold tracking-wider text-white backdrop-blur-md">
                    {room.detail}
                  </span>

                  <div className="pointer-events-none absolute bottom-5 left-5 right-5 text-white">
                    <h3 className="text-2xl font-semibold leading-tight sm:text-3xl">
                      {room.name}
                    </h3>
                  </div>
                </div>

                {/* Room details */}
                <div className="pt-5">
  <div className="mb-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
    <Users size={15} className="text-[#2c83a5]" />
    {room.guests}

    <span className="mx-1 text-gray-300">|</span>

    <BedDouble size={15} className="text-[#2c83a5]" />

    {activeCategory.id === "super-deluxe"
      ? "Super Deluxe"
      : "Deluxe Room"}
  </div>

  {/* <p className="min-h-[72px] text-sm leading-6 text-gray-600">
    {room.description}
  </p> */}

  {/* Booking action */}
  {activeCategory.id === "deluxe-online" ? (
    room.bookingUrl ? (
      <a
        href={room.bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
        draggable={false}
        onClick={(event) => {
          if (dragRef.current.suppressClick) {
            event.preventDefault();
          }
        }}
        className="mt-2 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#244584] px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#fdbb00]"
      >
        {room.bookingSite}
        <ExternalLink size={15} />
      </a>
    ) : (
      <span className="mt-2 inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#244584] px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#fdbb00]">
        Add booking site URL
      </span>
    )
  ) : (
    /* Wrapped both buttons in a fragment and added a gap for layout separation */
    <>
      <div className="mt-5 flex flex-wrap gap-3">
        <Link
          href={`/booking?room=${room.id}`}
          draggable={false}
          onClick={(event) => {
            if (dragRef.current.suppressClick) {
              event.preventDefault();
            }
          }}
          className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#244584] px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#2c83a5]"
        >
          Enquire
          <ArrowRight size={16} />
        </Link>

        <Link
          href={`/booking}`}
          draggable={false}
          onClick={(event) => {
            if (dragRef.current.suppressClick) {
              event.preventDefault();
            }
          }}
          className="inline-flex min-h-11 items-center justify-center gap-3 rounded-full bg-[#244584] px-6 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#fdbb00]"
        >
          View All Rooms
          <ArrowRight size={16} />
        </Link>
      </div>
    </>
  )}
</div>

              </motion.article>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Section footer */}

      
    </section>
  );
}
