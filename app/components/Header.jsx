"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, MapPin, Menu, X } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
const navItems = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Accommodation",
    href: "/accommodation",
  },

  {
    label: "Events & Activities ",
    href: "/events",
    // children: [
    //   { label: "Food Distribution", href: "/food-distribution" },
    //   { label: "Community Service", href: "/social-action" },
    // ],
  },
  {
    label: "Our Gallery",
    href: "/gallery",
  },
  {
    label: "Contact",
    href: "/contact",
    //     children: [
    //       { label: "News & Events", href: "/events" },
    //       { label: "Photo Gallery", href: "/gallery" },
    //       { label: "Contact Information", href: "/contact" },
    //     ],
  },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="relative z-50 w-full font-sans">
     
      {/* Top blue header */}
      <div className="bg-transparent md:bg-gradient-to-r md:from-[#2e83a4] md:via-[#285b91] md:to-[#243c82] text-white">
         
        <div className="mx-auto flex min-h-[85px] sm:min-h-[122px] max-w-[1320px] items-center justify-between gap-6 px-5 py-3 lg:px-8">
          
          {/* Logo and site title */}
          <Link
            href="/"
            className="flex min-w-0 items-center gap-5"
            aria-label="Ashram home"
          >
            <img
              src="/assets/images/ashram-logo.png"
              alt="Ashram logo"
              className="h-[92px] w-[140px] shrink-0 object-contain mobile-logo"
            />

            <div className="hidden border-l border-white/30 pl-5 sm:block">
              <p className="mb-0.5 text-sm font-medium">
                Welcome to the official website of
              </p>
              <h1 className="max-w-[390px] text-xl font-bold leading-[1.3] md:text-[22px]">
                Shree Krishna Bhakti Ashram
              </h1>
              <p className="mt-1 text-sm text-white/90">
                Discover peace, devotion and spiritual wisdom
              </p>
            </div>
          </Link>

          {/* Founder information */}
          <div className="hidden items-center gap-5 md:flex">
            <div className="max-w-[260px] text-right text-xs leading-relaxed">
              <p className="font-medium text-white/90">
                Founded on the timeless path of devotion
              </p>
              <p className="text-sm font-semibold">
                Shree Krishna Bhakti Ashram
              </p>
            </div>

            <img
              src="/assets/images/ashram-founder.png"
              alt="Ashram founder"
              className="h-[105px] w-[115px] self-end object-contain object-bottom"
            />
          </div>

          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="ml-auto text-[#fff] lg:hidden mbsearch"
            aria-label="Toggle search"
          >
            <Search size={21} />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 transition hover:bg-white/15 md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className="bg-[#f3eee8] shadow-[0_6px_12px_rgba(0,0,0,0.15)]">
        <div className="hidden sm:flex mx-auto flex min-h-[56px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
          {/* Desktop navigation */}
          <nav
            className="hidden items-center gap-5 lg:flex xl:gap-7"
            aria-label="Main navigation"
          >
            {navItems.map((item, index) => (
              <div
                key={item.label}
                className="group relative flex h-14 items-center"
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 whitespace-nowrap text-[16px] transition-colors hover:text-[#2d83a5] ${
                    index === 0
                      ? "font-medium text-[#2d83a5]"
                      : "text-[#484848]"
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={13} strokeWidth={2} />}
                </Link>

                {item.children && (
                  <div className="invisible absolute left-0 top-full z-50 min-w-[210px] translate-y-2 rounded-b-lg bg-white py-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        className="block px-5 py-3 text-sm text-gray-700 transition hover:bg-blue-50 hover:text-[#287fa0]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              onClick={() => setSearchOpen(!searchOpen)}
              className="text-[#243c82] transition hover:text-[#2d83a5]"
              aria-label="Toggle search"
              aria-expanded={searchOpen}
            >
              <Search size={20} />
            </button>
          </nav>

          {/* Desktop action buttons */}
          {/* <div className="hidden items-center gap-5 lg:flex">
            <Link
              href="/contact"
              className="flex min-h-[41px] items-center gap-2 uppercase rounded-full bg-[#2c83a5] px-6 text-xs font-bold text-white transition hover:bg-[#216a88]"
            >
              <MapPin size={15} />
              See Google Reviews
            </Link>

            <Link
              href="/contact"
              className="flex min-h-[41px] items-center uppercase rounded-full bg-[#253e8b] px-6 text-xs font-bold text-white transition hover:bg-[#192c6a]"
            >
              Book Now
            </Link>
          </div> */}

             <ul className="hidden sm:flex top-bar-nav nav navbar-nav navbar-right flex flex-wrap items-center gap-6">
  {/* Contact Us Button */}
  

  {/* Email Block */}
  <li className="secondary flex items-center">
    <a 
      className="flex items-center gap-2 text-[16px] text-[#484848] transition hover:text-[#2c83a5]" 
      href="mailto:info@ashram.com"
    >
      <span className="flex items-center text-[16px] text-[#484848]"><MdEmail /></span>  
      info@ashram.com
    </a>
  </li>

  {/* Phone Block */}
  <li className="secondary flex items-center">
    <a 
      className="flex items-center gap-2 telnav text-[16px] text-[#484848] transition hover:text-[#2c83a5]" 
      href="tel:+911244666166"
    >
      <span className="flex items-center text-[16px] text-[#484848] hover:text-[#2c83a5]"><FaPhone /></span>
      +91 124 4666166
    </a>
  </li>
  <li>
    <a 
      className="inline-flex min-h-[38px] items-center gap-2 rounded-full bg-[#2c83a5] px-8 text-[16px] font-bold uppercase text-white transition hover:bg-[#216a88]" 
      href="#"
    >
      Book Now
    </a>
  </li>
</ul>

          {/* Compact tablet search */}
          <button
            type="button"
            onClick={() => setSearchOpen(!searchOpen)}
            className="ml-auto text-[#243c82] lg:hidden mbsearch"
            aria-label="Toggle search fseff"
          >
            <Search size={21} />
          </button>
        </div>

        {/* Search bar */}
        {searchOpen && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              if (searchTerm.trim()) {
                window.location.href =
                  "/search?q=" + encodeURIComponent(searchTerm.trim());
              }
            }}
            className="mx-auto flex max-w-[1320px] gap-2 px-5 pb-4 lg:px-8"
          >
            <input
              type="search"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Search the website..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-800 outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="rounded-lg bg-[#253e8b] px-5 text-sm font-semibold text-white"
            >
              Search
            </button>
          </form>
        )}

        {/* Mobile navigation */}
        {mobileOpen && (
          <nav
            className="max-h-[75vh] overflow-y-auto border-t border-gray-200 bg-white px-5 py-3 shadow-lg md:block lg:hidden"
            aria-label="Mobile navigation"
          >
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-gray-100">
                <div className="flex items-center justify-between">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex-1 py-3.5 text-sm font-medium text-gray-700 hover:text-[#2d83a5]"
                  >
                    {item.label}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      onClick={() =>
                        setOpenMenu(openMenu === item.label ? "" : item.label)
                      }
                      className="p-3 text-gray-600"
                      aria-label={`Toggle ${item.label} submenu`}
                      aria-expanded={openMenu === item.label}
                    >
                      <ChevronDown
                        size={17}
                        className={`transition-transform ${
                          openMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && openMenu === item.label && (
                  <div className="mb-3 ml-3 border-l-2 border-[#2d83a5]/30 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href + child.label}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block py-2.5 text-sm text-gray-600 hover:text-[#2d83a5]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

           
          </nav>
        )}
      </div>
    </header>
  );
}
