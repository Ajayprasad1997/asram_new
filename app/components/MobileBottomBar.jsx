
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Phone, BedDouble, Mail, ArrowUp } from "lucide-react";

export default function MobileBottomBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 z-[999] w-full md:hidden animate-in slide-in-from-bottom duration-500">
      <div className="relative bg-gradient-to-r from-[#2e83a4] via-[#285b91] to-[#243c82] px-3 pb-[calc(12px+env(safe-area-inset-bottom))] pt-3 shadow-[0_-8px_30px_rgba(0,0,0,0.18)]">

      {/* Back To Top */}
<button
  type="button"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Back to top"
  className="absolute -top-10 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-[5px] border border-white/60 bg-white text-[#285b91] shadow-lg transition-all duration-300 hover:-translate-y-1 active:scale-95"
>
  <ArrowUp size={21} strokeWidth={2.5} />
</button>

        <div className="grid grid-cols-3 items-center gap-2">

          {/* Call Now */}
          <a
            href="tel:+918583017971"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl py-2 text-white transition active:scale-95"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <Phone size={21} strokeWidth={2.2} />
            </div>
            <span className="text-xs font-semibold tracking-wide">
              Call Now
            </span>
          </a>

          {/* View All Rooms */}
          <Link
            href="/accommodation"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl py-2 text-white transition active:scale-95"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
              <BedDouble size={22} strokeWidth={2.1} />
            </div>
            <span className="text-xs font-semibold tracking-wide">
              View Rooms
            </span>
          </Link>

          {/* Contact Now */}
          <Link
            href="/contact"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-white/30 bg-white px-2 py-2 text-[#243c82] shadow-lg transition active:scale-95"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-[#2e83a4] via-[#285b91] to-[#243c82] text-white">
              <Mail size={21} strokeWidth={2.2} />
            </div>
            <span className="text-xs font-bold tracking-wide">
              Contact Now
            </span>
          </Link>

        </div>
      </div>
    </div>
  );
}
