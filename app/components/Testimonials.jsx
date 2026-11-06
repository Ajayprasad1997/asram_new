
"use client";

import { useEffect, useRef, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { SiBookingdotcom } from "react-icons/si";
import { ArrowUpRight, Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Kaustav",
    country: "India",
    countryCode: "IN",
    initials: "K",
    date: "18 days ago",
    rating: 5,
    review:
      "Calm, peaceful, comfortable and clean with excellent staff members who are very helpful.",
  },
  {
    id: 2,
    name: "Letitia",
    country: "United Kingdom",
    countryCode: "GB",
    initials: "R",
    date: "2 weeks ago",
    rating: 5,
    review:
      "very friendly, polite, helpful and respectful staff.very calm ands contemplative atmoshere the mandir was peaceful the location was near and accessible to the main temples",
  },
  {
    id: 3,
    name: "Sita",
    country: "India",
    country: "Netherlands",
    countryCode: "NL",
    initials: "P",
    date: "1 month ago",
    rating: 5,
    review:
      "This place was amazing! The people are very nice and helpful. The place gives you very good vibes and it's very peaceful. It's also close to many sacred places. I definitely recommend this place, it gives you really local vibes. Especially if you want some peace this is the best place. They even arrange a taxi for you from the airport or if you want to travel around.",
  },
  {
    id: 4,
    name: "Mick",
    country: "Australia",
    countryCode: "AU",
    initials: "M",
    date: "1 month ago",
    rating: 5,
    review:
      "Vrindavan is a very busy city so Shree Krishna is a quiet sanctuary but still close to all the attractions.",
  },
  {
    id: 5,
    name: "Robin",
    country: "Netherlands",
    countryCode: "NL",
    initials: "R",
    date: "2 months ago",
    rating: 5,
    review:
      "Great stay. I felt very safe and comfortable there, nice spacious rooms and people. Met a nice German Woman who was also staying there, to do things with. I def recommend the place.",
  },
  {
    id: 6,
    name: "Laura",
    country: "Albania",
    countryCode: "AL",
    initials: "V",
    date: "2 months ago",
    rating: 5,
    review:
      "Location is great. Staff really helpful for every question and issues we had. Really clean place for Vrindavan standards.",
  },
];

const avatars = [
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
  "https://randomuser.me/api/portraits/men/75.jpg",
  "https://randomuser.me/api/portraits/women/68.jpg",
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedReview, setSelectedReview] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [paused, setPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const dragStartX = useRef(0);
  const dragPointerId = useRef(null);
  const dragged = useRef(false);

  const CountryFlag = ({ countryCode, country }) => {
  if (!countryCode) return null;

  return (
    <img
      src={`https://flagcdn.com/w40/${countryCode.toLowerCase()}.png`}
      alt={`${country} flag`}
      title={country}
      width={20}
      height={14}
      className="inline-block h-[14px] w-5 rounded-[2px] object-cover"
      loading="lazy"
    />
  );
};

  // Infinite autoplay
  useEffect(() => {
    if (paused || selectedReview || showAll || isDragging) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [paused, selectedReview, showAll, isDragging]);

  // Circular review positioning
  const getReview = (offset) => {
    return reviews[
      (activeIndex + offset + reviews.length) % reviews.length
    ];
  };

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveIndex(
      (prev) => (prev - 1 + reviews.length) % reviews.length
    );
  };

  // Mouse and touch drag handlers
  const handlePointerDown = (e) => {
    if (e.button !== undefined && e.button !== 0) return;

    dragStartX.current = e.clientX;
    dragPointerId.current = e.pointerId;
    dragged.current = false;

    setIsDragging(true);
    setPaused(true);
  };

  const handlePointerUp = (e) => {
    if (dragPointerId.current !== e.pointerId) return;

    const distance = e.clientX - dragStartX.current;

    if (Math.abs(distance) > 8) {
      dragged.current = true;
    }

    if (distance < -45) {
      nextReview();
    } else if (distance > 45) {
      prevReview();
    }

    dragPointerId.current = null;
    setIsDragging(false);

    // Resume autoplay after the drag interaction
    setPaused(false);
  };

  const handlePointerCancel = () => {
    dragPointerId.current = null;
    setIsDragging(false);
    setPaused(false);
  };

  // Click a side review to bring it to center
  const handleCardClick = (review, offset) => {
    if (dragged.current) {
      dragged.current = false;
      return;
    }

    if (offset !== 0) {
      const index = reviews.findIndex((r) => r.id === review.id);

      if (index !== -1) {
        setActiveIndex(index);
      }
    }
  };

  const openReview = (review) => {
    setSelectedReview(review);
  };

  const closeModals = () => {
    setSelectedReview(null);
    setShowAll(false);
  };

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-white py-12 pb-0 sm:py-20 lg:py-24"
    >
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-40 top-10 h-80 w-80 rounded-full bg-[#244584]/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-[#fdbb00]/[0.06] blur-3xl" />

      <div className="relative mx-auto grid w-full max-w-[1600px] grid-cols-1 items-center gap-14 px-5 sm:px-8 lg:grid-cols-[30%_69%] lg:gap-0 lg:pl-10 lg:pr-5">

        {/* ===================================
             LEFT SIDE - 30%
        ==================================== */}

        <div className="relative z-10 flex w-full flex-col items-center lg:items-start lg:pr-8">

          {/* Heading */}
          <div className="mb-5 w-full text-center lg:text-left">

            <div className="mb-3 flex items-center justify-center gap-2 lg:justify-start">
              <span className="h-[2px] w-8 bg-[#fdbb00]" />

              <span className="text-[13px] font-bold uppercase tracking-[3px] text-[#244584]" data-aos="fade-up"
              data-aos-delay="100">
                What Guests Say
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#244584] sm:text-4xl md:text-5xl" data-aos="fade-up"
              data-aos-delay="100">
              Our Best
              <span className="block text-[#fdbb00]">
                Guest Feedback
              </span>
            </h2>
          </div>

          {/* ===================================
               GOOGLE + BOOKING RATING WIDGET
          ==================================== */}

          <div className="mt-0 w-full max-w-sm rounded-xl border border-neutral-100 bg-white px-4 py-3.5 text-neutral-800 shadow-[0_6px_24px_rgba(0,0,0,0.04)]" data-aos="fade-up"
              data-aos-delay="100">

            {/* Google and Booking.com */}
            <div className="mb-2.5 grid grid-cols-2 gap-2.5">

              {/* Google Review */}
              <a
                href="https://www.google.com/search?kgmid=/g/11c529r4st&hl=en-IN&q=Shree+Krishna+Bhakti+Ashram&shem=epsd1,ltae,rimspwouoe&shndl=30&source=sh/x/loc/osrp/m1/2&kgs=31317842a6481b1e&utm_source=epsd1,ltae,rimspwouoe,sh/x/loc/osrp/m1/2"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 p-2.5 text-left transition-colors hover:bg-neutral-50"
              >
                <div className="flex flex-col">

                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                    <FcGoogle size={20} />
                    Google
                  </span>

                  <div className="mt-1 text-dark font-extrabold leading-none text-neutral-900">
                    4.9 / 5
                  </div>

                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    75 votes
                  </p>
                </div>

                <ArrowUpRight
                  size={13}
                  className="self-start text-neutral-400 transition-colors group-hover:text-neutral-700"
                />
              </a>

              {/* Booking.com */}
              <a
                href="https://www.booking.com/hotel/in/shree-krishna-bhakti-ashram.en-gb.html?aid=311984&label=shree-krishna-bhakti-ashram-HKBWyKNw9X7sL1Xz4ChHWwSM714164372571%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-2589914360392%3Alp9061835%3Ali%3Adem%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YbSsBl3MCvHsD8UKUHIRFxY-Share-KnYMng%401791888618&sid=e3a8a5a2e9889c578ff795f6a2b26381&dest_id=-2114543&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1793776641&srpvid=02bc333c4b6c006a&type=total&ucfs=1&"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex cursor-pointer items-center justify-between rounded-lg border border-neutral-100 bg-neutral-50/50 p-2.5 text-left transition-colors hover:bg-neutral-50"
              >
                <div className="flex flex-col">

                  <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wide text-neutral-400">
                    <SiBookingdotcom size={20} color="#003580" />
                    Booking.com
                  </span>

                  <div className="mt-1 text-dark font-extrabold leading-none text-neutral-900">
                    9.1 / 9.6
                  </div>

                  <p className="mt-0.5 text-[10px] text-neutral-400">
                    187 stays
                  </p>
                </div>

                <ArrowUpRight
                  size={13}
                  className="self-start text-neutral-400 transition-colors group-hover:text-neutral-700"
                />
              </a>
            </div>

            {/* Avatar stack and stars */}
            <div className="mb-3 flex items-center gap-3.5 border-b border-neutral-100 pb-3">

              {/* Avatars */}
              <div className="isolate flex items-center -space-x-2.5">
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    style={{ zIndex: 30 - index * 10 }}
                    className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-neutral-200"
                  >
                    <img
                      src={avatar}
                      alt={`Customer ${index + 1}`}
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Stars and totals */}
              <div className="flex flex-col justify-center">

                <div className="flex gap-0.5 text-[#ffc107]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={13}
                      fill="currentColor"
                      stroke="none"
                    />
                  ))}
                </div>

                <span className="mt-0.5 text-[12px] font-medium tracking-tight text-neutral-500">
                  from 262 reviews
                </span>
              </div>
            </div>

            {/* Explore all reviews */}
            <button
              onClick={() => setShowAll(true)}
              className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#244584] px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#fdbb00] hover:text-[#244584]"
            >
              Explore All Guest Reviews
              <ArrowUpRight size={14} />
            </button>

          </div>
        </div>

        {/* ===================================
             RIGHT SIDE - 70%
        ==================================== */}

        <div
                className={`relative flex min-h-[560px] w-full items-center justify-center overflow-hidden sm:min-h-[570px] lg:min-h-[590px] ${
                    isDragging ? "cursor-grabbing" : "cursor-grab"
                }`}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => {
                    setPaused(false);

                    if (dragPointerId.current !== null) {
                    dragPointerId.current = null;
                    setIsDragging(false);
                    }
                }}
                onPointerDown={(e) => {
                    handlePointerDown(e);

                    if (e.currentTarget.setPointerCapture) {
                    e.currentTarget.setPointerCapture(e.pointerId);
                    }
                }}
                onPointerUp={handlePointerUp}
                onPointerCancel={handlePointerCancel}
                onLostPointerCapture={handlePointerCancel}
                onClickCapture={(e) => {
                    if (dragged.current) {
                    e.preventDefault();
                    e.stopPropagation();
                    dragged.current = false;
                    }
                }}
                style={{ touchAction: "pan-y" }}
                >

          {/* Carousel heading */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 w-full px-2 text-center">

            <div className="mb-2 flex items-center justify-center gap-2">
              <span className="h-[2px] w-8 bg-[#fdbb00]" />

              <p className="text-[20px] font-bold uppercase tracking-[3px] text-[#244584]" data-aos="fade-up"
              data-aos-delay="100">
                Words From The Heart
              </p>

              <span className="h-[2px] w-8 bg-[#fdbb00]" />
            </div>

            <p className="text-[18px] text-gray-500" data-aos="fade-up"
              data-aos-delay="100">
              Real experiences, beautiful memories
            </p>
          </div>

          {/* 3D draggable slider */}
          <div className="relative mt-[75px] h-[350px] w-full select-none px-0 [perspective:1400px] sm:mt-[95px] sm:h-[360px] md:mt-[95px] md:px-2">

            {[-2, -1, 0, 1, 2].map((offset) => {
              const review = getReview(offset);
              const isCenter = offset === 0;

              return (
                <div
                  key={review.id}
                  onClick={() => handleCardClick(review, offset)}
                  className={`absolute left-1/2 top-1/2 w-[88%] max-w-[440px] sm:w-[82%] md:w-[78%] transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                    offset === 0 ? "cursor-default" : "cursor-pointer"
                                    }`}
                                    style={{
                    transform: `
                        translate(calc(-50% + ${offset * 70}%), -50%)
                        scale(${
                        isCenter
                            ? 1.04
                            : Math.abs(offset) === 1
                            ? 0.86
                            : 0.72
                        })
                        translateZ(${isCenter ? "55px" : "0px"})
                    `,
                    opacity: 1,
                    filter: "none",
                    zIndex: 10 - Math.abs(offset),
                    pointerEvents: Math.abs(offset) > 1 ? "none" : "auto",
                    }}
                >

                  {/* Review card */}
                  <div
                    className={`relative min-h-[255px] rounded-[22px] border bg-white p-5 sm:p-6 ${
                      isCenter
                        ? "border-2 border-[#fdbb00]"
                        : "border border-[#244584]/15"
                    }`}
                  >

                    {isCenter && (
                      <div className="absolute -top-[2px] left-8 right-8 h-[4px] rounded-full bg-[#fdbb00]" />
                    )}

                    {/* User info */}
                    <div className="flex items-center justify-between gap-2">

                      <div className="flex min-w-0 items-center gap-3">

                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#244584] text-lg font-bold text-white">
                          {review.initials}
                        </div>

                        <div className="min-w-0">
                          <h4 className="truncate text-dark font-bold text-[#244584]">
                            {review.name}
                          </h4>

                          <div className="flex items-center gap-1.5 text-xs text-gray-500">
                                <CountryFlag
                                    countryCode={review.countryCode}
                                    country={review.country}
                                />
                                <span>{review.country}</span>
                                </div>
                        </div>
                      </div>

                      {/* Rating */}
                      <div className="shrink-0 text-right">

                        <div className="text-dark tracking-[-2px] text-[#fdbb00]">
                          {"★".repeat(review.rating)}
                        </div>

                        <p className="mt-1 text-[12px] text-gray-400">
                          {review.date}
                        </p>
                      </div>
                    </div>

                    {/* Review text */}
                    <div className="relative mt-5">

                      <span className="absolute -top-3 left-0 font-serif text-4xl leading-none text-[#fdbb00]">
                        “
                      </span>

                      <p className="line-clamp-3 pl-1 pt-3 text-sm leading-7 text-black-600">
                        {review.review}
                      </p>
                    </div>

                    {/* Read more */}
                    <button
                      onPointerDown={(e) => e.stopPropagation()}
                      onClick={(e) => {
                        e.stopPropagation();
                        openReview(review);
                      }}
                      className="mt-4 inline-flex cursor-pointer items-center gap-2 text-xs font-bold text-[#244584] transition hover:text-[#d99e00]"
                    >
                      Read Full Review
                      <ArrowUpRight size={13} />
                    </button>

                    {/* Card label */}
                    <div className="absolute bottom-5 right-5 flex items-center gap-1 text-[12px] font-semibold text-[#244584]">
                      <span className="text-[#fdbb00]">✦</span>
                      Guest Experience
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

         {/* Slider controls */}
<div
  className="absolute bottom-2 left-1/2 z-30 flex -translate-x-1/2 items-center justify-center gap-3 sm:bottom-1 sm:gap-5"
  onPointerDown={(e) => e.stopPropagation()}
>
  <button
    onClick={prevReview}
    aria-label="Previous review"
    className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border border-[#244584] text-lg font-bold text-[#244584] transition-all duration-300 hover:border-[#fdbb00] hover:bg-[#fdbb00] sm:h-11 sm:w-11"
  >
    ←
  </button>

  <div className="flex items-center gap-1.5 sm:gap-2">
    {reviews.map((review, index) => (
      <button
        key={review.id}
        onClick={() => setActiveIndex(index)}
        aria-label={`Go to review ${index + 1}`}
        className={`h-2 cursor-pointer rounded-full transition-all duration-500 ${
          activeIndex === index
            ? "w-7 bg-[#fdbb00] sm:w-8"
            : "w-2 bg-[#244584]/25 hover:bg-[#244584]"
        }`}
      />
    ))}
  </div>

  <button
    onClick={nextReview}
    aria-label="Next review"
    className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full bg-[#244584] text-lg font-bold text-white transition-all duration-300 hover:bg-[#fdbb00] hover:text-[#244584] sm:h-11 sm:w-11"
  >
    →
  </button>
</div>

         
        </div>
      </div>

      {/* ===================================
           SINGLE REVIEW MODAL
      ==================================== */}

      {selectedReview && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#10213d]/75 p-4 backdrop-blur-sm"
          onClick={closeModals}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Review by ${selectedReview.name}`}
            className="relative w-full max-w-[600px] rounded-[25px] border-t-4 border-[#fdbb00] bg-white p-6 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={closeModals}
              aria-label="Close review"
              className="absolute right-5 top-4 flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-[#244584]/10 text-xl text-[#244584] hover:bg-[#fdbb00]"
            >
              ×
            </button>

            <div className="mb-6 flex items-center gap-4">

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#244584] text-xl font-bold text-white">
                {selectedReview.initials}
              </div>

              <div>
                <h3 className="font-bold text-[#244584]">
                  {selectedReview.name}
                </h3>

                <div className="mt-1 flex items-center gap-1.5 text-xs text-gray-500">
                    <CountryFlag
                        countryCode={selectedReview.countryCode}
                        country={selectedReview.country}
                    />
                    <span>
                        {selectedReview.country} · {selectedReview.date}
                    </span>
                    </div>

                <div className="mt-1 text-sm text-[#fdbb00]">
                  {"★".repeat(selectedReview.rating)}
                </div>
              </div>
            </div>

            <div className="mb-5 h-[2px] w-full bg-[#244584]/10" />

            <p className="text-sm leading-8 text-gray-600">
              {selectedReview.review}
            </p>

            <div className="mt-7 rounded-xl bg-[#244584] p-5 text-center">
              <p className="font-serif text-lg italic text-white">
                Thank you for being part of our Ashram family.
              </p>

              <p className="mt-2 text-xs font-semibold tracking-widest text-[#fdbb00]">
                RADHE RADHE
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ===================================
           ALL REVIEWS GRID MODAL
      ==================================== */}

      {showAll && (
        <div
          className="fixed z-[99999999] top-0 left-0 md:static md:z-auto inset-0 z-[100] overflow-y-auto bg-[#10213d]/75 p-4 backdrop-blur-sm sm:p-8"
          onClick={closeModals}
        >
          <div
            className="relative mx-auto my-5 max-w-[1150px] rounded-[25px] border-t-4 border-[#fdbb00] bg-white p-5 sm:p-9 z-[50]"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              onClick={closeModals}
              aria-label="Close all reviews"
              className="absolute right-5 top-4 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-[#244584]/10 text-2xl text-[#244584] hover:bg-[#fdbb00]"
            >
              ×
            </button>

            <div className="mb-9 pr-10 text-center">

              <p className="text-xs font-bold uppercase tracking-[4px] text-[#244584]">
                Guest Experiences
              </p>

              <h3 className="mt-3 font-serif text-3xl font-bold text-[#244584] sm:text-4xl">
                Our Guest Reviews
              </h3>

              <div className="mx-auto mt-4 h-[3px] w-16 rounded-full bg-[#fdbb00]" />

              <p className="mt-4 text-sm text-gray-500">
                Beautiful words, wonderful experiences and unforgettable memories.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="rounded-2xl border border-[#244584]/15 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#fdbb00]"
                >

                  <div className="flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#244584] font-bold text-white">
                      {review.initials}
                    </div>

                    <div className="min-w-0">
                      <h4 className="truncate font-bold text-[#244584]">
                        {review.name}
                      </h4>

                      <div className="flex items-center gap-1.5 text-xs text-gray-400">
                        <CountryFlag
                            countryCode={review.countryCode}
                            country={review.country}
                        />
                        <span>{review.country} · {review.date}</span>
                        </div>
                    </div>
                  </div>

                  <div className="mt-4 text-sm tracking-wider text-[#fdbb00]">
                    {"★".repeat(review.rating)}
                  </div>

                  <p className="mt-3 text-sm leading-7 text-gray-600">
                    {review.review}
                  </p>

                  <button
                    onClick={() => {
                      setShowAll(false);
                      setSelectedReview(review);
                    }}
                    className="mt-4 cursor-pointer text-xs font-bold text-[#244584] hover:text-[#d99e00]"
                  >
                    Read Full Review ↗
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-9 text-center">
              <button
                onClick={closeModals}
                className="cursor-pointer rounded-full bg-[#244584] px-9 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-[#fdbb00] hover:text-[#244584]"
              >
                Close Reviews
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
