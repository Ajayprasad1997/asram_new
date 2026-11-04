
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

// Lucide Icons
import {
  ArrowUpRight,
  ChevronRight,
  MapPin,
  Heart,
} from "lucide-react";

// Social Media Icons
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

// Quick Links
const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Accommodation", href: "/accommodation" },
  { name: "Events & Activities", href: "/events" },
  { name: "Our Gallery", href: "/gallery" },
  { name: "Booking", href: "/contact" },
   { name: "Reservation Policies", href: "/#" },
  { name: "Contact", href: "/contact" },
];

// Social Media Links
// Replace "#" with your actual social media URLs.
const socialLinks = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "#",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "#",
  },
  {
    name: "YouTube",
    icon: FaYoutube,
    href: "#",
  },
  {
    name: "Twitter / X",
    icon: FaXTwitter,
    href: "#",
  },
];

export default function Footer() {
  const [currentYear, setCurrentYear] = React.useState(null);

  React.useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#16222f] text-white">

      {/* BACKGROUND DECORATION */}
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-[#fdbb00]/10" />

      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#fdbb00]/10" />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-12 pt-20 md:px-12 lg:pt-24">

        {/* MAIN FOOTER GRID */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-12 lg:gap-12">

          {/* LEFT SIDE: LOGO & ABOUT */}
          <div className="lg:col-span-4">

            <Link href="/" className="inline-block">
              <Image
                src="/assets/images/ashram-logo.png"
                alt="Shree Krishna Bhakti Ashram"
                width={220}
                height={110}
                className="h-auto w-[190px] object-contain"
              />
            </Link>

            <h3 className="mt-6 font-serif text-xl tracking-wide text-[#fdbb00]">
              Shree Krishna Bhakti Ashram
            </h3>

            <p className="mt-4 max-w-sm text-[14px] font-light leading-7 text-gray-400">
              Experience divine serenity in the sacred land of Vrindavan.
              A peaceful sanctuary dedicated to devotion, spiritual
              awakening, selfless service, and the eternal blessings
              of Lord Krishna.
            </p>

            {/* Address */}
            <div className="mt-7 flex items-start gap-3">
              <MapPin
                size={19}
                className="mt-1 shrink-0 text-[#fdbb00]"
              />

              <p className="text-sm leading-6 text-gray-400">
                Shree Krishna Bhakti Ashram
                <br />
                Vrindavan, Uttar Pradesh, India
              </p>
            </div>

          </div>

          {/* MIDDLE: QUICK LINKS */}
          <div className="lg:col-span-3 lg:pl-10">

            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#fdbb00]" />

              <h4 className="font-serif text-lg uppercase tracking-[0.15em] text-[#fdbb00]">
                Quick Links
              </h4>
            </div>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex max-w-[230px] items-center justify-between text-[14px] font-light tracking-wide text-gray-300 transition-all duration-300 hover:translate-x-1 hover:text-[#fdbb00]"
                  >
                    <span>{link.name}</span>

                    <ChevronRight
                      size={15}
                      className="text-[#fdbb00] transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </li>
              ))}
            </ul>

          </div>

          {/* RIGHT SIDE: MAP & SOCIAL MEDIA */}
          <div className="md:col-span-2 lg:col-span-5">

            {/* Location Heading */}
            <div className="mb-8 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#fdbb00]" />

              <h4 className="font-serif text-lg uppercase tracking-[0.15em] text-[#fdbb00]">
                Our Location
              </h4>
            </div>

            {/* GOOGLE MAP */}
            <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-white/10 bg-white/5 shadow-xl">

              <iframe
                title="Shree Krishna Bhakti Ashram Location"
                src="https://www.google.com/maps?q=Shree+Krishna+Bhakti+Ashram+Vrindavan&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full"
              />

            </div>

            {/* SOCIAL MEDIA */}
            <div className="mt-9">

              <div className="mb-5 flex items-center gap-3">
                <span className="h-[2px] w-8 bg-[#fdbb00]" />

                <h4 className="font-serif text-lg uppercase tracking-[0.15em] text-[#fdbb00]">
                  Follow Us
                </h4>
              </div>

              <div className="flex flex-wrap items-center gap-3">

                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      title={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-11 w-11 items-center justify-center rounded-full border border-[#fdbb00]/70 text-[#fdbb00] transition-all duration-300 hover:-translate-y-1 hover:border-[#fdbb00] hover:bg-[#fdbb00] hover:text-[#16222f] hover:shadow-[0_0_20px_rgba(253,187,0,0.25)]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}

              </div>
            </div>

          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="mt-16 border-t border-white/10 pt-7">

          <div className="flex flex-col items-center justify-between gap-5 text-center md:flex-row md:text-left">

            {/* Copyright */}
            <p className="text-[12px] font-light tracking-wide text-gray-400">
              © {currentYear} Shree Krishna Bhakti Ashram.
              All Rights Reserved.
            </p>

            {/* Devotion Text */}
           
<div className="flex items-center gap-2 text-[12px] text-gray-400">
  <span>Design By</span>

  <Heart
    size={13}
    className="fill-[#fdbb00] text-[#fdbb00]"
  />

  <a
    href="https://slingverse.in"
    target="_blank"
    rel="noopener noreferrer"
    className="transition-colors duration-300 hover:text-[#fdbb00]"
  >
    Slingverse
  </a>
</div>


            {/* Contact Link */}
            <Link
              href="/contact"
              className="group flex items-center gap-2 text-[12px] tracking-wide text-gray-400 transition-colors hover:text-[#fdbb00]"
            >
              Get in Touch

              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>

      </div>
    </footer>
  );
}
