
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "@/app/components/Footer";
import {
  FaInstagram as Instagram,
  FaFacebookF as Facebook,
  FaLinkedinIn as Linkedin,
} from "react-icons/fa";
import {
  MapPin,
  Mail,
  Phone,
  Star,
  ArrowUpRight,
  MessageCircle,
  Send,
  Clock,
} from "lucide-react";

const inquiryOptions = [
  "Booking",
  "General",
  "Traveling",
  "Corporate",
  "Others",
];

export default function ContactPage() {
  const [inquiryType, setInquiryType] = useState("General");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    country: "",
    phone: "",
    email: "",
    message: "",
    subscribe: false,
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      offset: 80,
      easing: "ease-out-cubic",
    });

    AOS.refresh();
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      inquiryType,
    };

    console.log("Contact Form Submitted:", submissionData);

    // Connect your backend / email API here.
    setSubmitted(true);
  };

  return (
    <main className="overflow-hidden bg-[#F5F7FB]">

      {/* ================= HERO BANNER ================= */}

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
              Get In <span className="text-[#FFB900]">Touch</span>
            </h1>

            <p className="mt-5 max-w-xl text-base leading-8 text-white/85 md:text-lg">
               We are here to help you plan your stay, answer your
              questions, and make your experience at our Ashram
              comfortable and memorable.
            </p>

            <div className="mt-8 flex items-center gap-3 text-sm text-white/80">
              <Link href="/" className="transition hover:text-[#FFB900]">
                Home
              </Link>
              <span>/</span>
              <span className="font-semibold text-[#FFB900]">Contact</span>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white to-[#244584]" />
      </section>


      {/* ================= CONTACT SECTION ================= */}
      <section className="relative w-full overflow-hidden bg-[#fff] py-20 text-white md:py-28">

        {/* Background Decoration */}
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-[0.12] mix-blend-luminosity"
         
        />

        <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border-[50px] border-white/[0.03]" />

        <div className="relative z-10 mx-auto max-w-[1320px] px-5 lg:px-8">

          <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-10">

            {/* LEFT SIDE: CONTACT INFORMATION */}
            <div
              className="flex flex-col lg:col-span-6 xl:pr-12"
              data-aos="fade-right"
            >

              <div className="mb-6 flex items-center gap-3">
                <span className="h-[2px] w-10 bg-[#fdbb00]" />

                <span className="text-xs font-bold uppercase tracking-[3px] text-[#fdbb00]">
                  Contact Us
                </span>
              </div>

              <h2 className="font-serif text-4xl font-light uppercase leading-tight tracking-wide text-[#16222f] sm:text-5xl lg:text-6xl">
                You Have Questions,
                <span className="block text-[#fdbb00]">
                  We Have Answers
                </span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-[#16222f]">
                Whether you are planning a peaceful stay, looking for
                information about our facilities, or interested in
                spiritual activities, our team is happy to assist you.
              </p>


              {/* CONTACT DETAILS GRID */}
              <div className="mt-14 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2">

                {/* LOCATION */}
                <div className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#fdbb00] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#fdbb00] group-hover:text-[#16222f]">
                    <MapPin size={23} />
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#fdbb00]">
                    Location
                  </h4>

                  <div className="mt-3 text-sm font-light leading-7 text-[#16222f]">
                    <p>Shree Krishna Bhakti Ashram</p>
                    <p>123 Serenity Bay Road</p>
                    <p>Vrindavan, India 281121</p>

                    <p className="mt-3 flex items-center gap-2 text-xs italic text-gray-400">
                      <Clock size={14} />
                      Monday – Sunday | 08:00 – 22:00
                    </p>
                  </div>
                </div>


                {/* SOCIAL MEDIA */}
                <div className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#fdbb00] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#fdbb00] group-hover:text-[#16222f]">
                    <MessageCircle size={23} />
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#fdbb00]">
                    Social Media
                  </h4>

                  <div className="mt-3 flex flex-col gap-3 text-sm font-light text-[#16222f]">

                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 transition hover:translate-x-1 hover:text-[#fdbb00]"
                    >
                      <Instagram size={15} />
                      Instagram
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 transition hover:translate-x-1 hover:text-[#fdbb00]"
                    >
                      <Linkedin size={15} />
                      LinkedIn
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 transition hover:translate-x-1 hover:text-[#fdbb00]"
                    >
                      <Facebook size={15} />
                      Facebook
                      <ArrowUpRight size={13} />
                    </a>

                    <a
                      href="#"
                      target="_blank"
                      rel="noreferrer"
                      className="flex w-fit items-center gap-2 transition hover:translate-x-1 hover:text-[#fdbb00]"
                    >
                      <Star size={15} />
                      Google Review
                      <ArrowUpRight size={13} />
                    </a>

                  </div>
                </div>


                {/* EMAIL */}
                <div className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#fdbb00] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#fdbb00] group-hover:text-[#16222f]">
                    <Mail size={23} />
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#fdbb00]">
                    Email
                  </h4>

                  <a
                    href="mailto:stay@ashramresort.com"
                    className="mt-3 inline-block break-all text-sm font-light text-[#16222f] transition hover:text-[#fdbb00]"
                  >
                    stay@ashramresort.com
                  </a>
                </div>


                {/* PHONE */}
                <div className="group">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#fdbb00] transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-[#fdbb00] group-hover:text-[#16222f]">
                    <Phone size={23} />
                  </div>

                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#fdbb00]">
                    Contact
                  </h4>

                  <a
                    href="tel:+918583017971"
                    className="mt-3 inline-block text-sm font-semibold tracking-wide text-[#16222f] transition hover:text-[#fdbb00]"
                  >
                    +91 8583017971
                  </a>
                </div>

              </div>


              {/* WHATSAPP CARD */}
              <a
                href="https://wa.me/918583017971"
                target="_blank"
                rel="noreferrer"
                className="group mt-12 flex items-center justify-between gap-4 rounded-2xl border border-[#16222f]/10 bg-[#16222f]/[0.06] p-5 transition-all duration-300 hover:border-[#fdbb00]/50 hover:bg-white/10"
              >

                <div className="flex items-center gap-4">

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle size={25} />
                  </div>

                  <div>
                    <p className="text-sm font-bold text-[#16222f]">
                      Chat With Us
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      Connect with our team on WhatsApp
                    </p>
                  </div>

                </div>

                <ArrowUpRight
                  size={22}
                  className="text-[#fdbb00] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />

              </a>

            </div>


            {/* RIGHT SIDE: CONTACT FORM */}
            <div
              className="w-full lg:col-span-6"
              data-aos="fade-left"
            >

              <form
                onSubmit={handleSubmit}
                className="w-full rounded-2xl bg-[#fdfcfb] p-6 text-black shadow-2xl sm:p-9 md:p-11"
              >

                <div className="mb-8 border-b border-gray-200 pb-6">

                  <span className="text-xs font-bold uppercase tracking-[3px] text-[#B78300]">
                    We'd Love To Hear From You
                  </span>

                  <h3 className="mt-3 text-2xl font-semibold tracking-wide text-[#16222f] md:text-3xl">
                    Tell Us What You Need
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    Our team is ready to assist you with every detail,
                    big or small.
                  </p>

                </div>


                {/* SUCCESS MESSAGE */}
                {submitted && (
                  <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800">
                    Your form has been validated. Please connect a backend
                    or email service to deliver your enquiry.
                  </div>
                )}


                {/* NAME / COUNTRY / PHONE */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name *"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#16222f] focus:ring-2 focus:ring-[#16222f]/10"
                  />

                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name *"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#16222f] focus:ring-2 focus:ring-[#16222f]/10"
                  />

                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#16222f] focus:ring-2 focus:ring-[#16222f]/10"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#16222f] focus:ring-2 focus:ring-[#16222f]/10"
                  />

                </div>


                {/* EMAIL */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-4 w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-sm text-black outline-none transition focus:border-[#16222f] focus:ring-2 focus:ring-[#16222f]/10"
                />


                {/* INQUIRY TYPE */}
                <div className="mt-7">

                  <label className="mb-4 block text-xs font-bold uppercase tracking-wider text-[#16222f]">
                    Type of Inquiry
                  </label>

                  <div className="flex flex-wrap gap-2">

                    {inquiryOptions.map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setInquiryType(option)}
                        className={`rounded-full border px-4 py-2.5 text-xs font-semibold transition-all duration-300 ${
                          inquiryType === option
                            ? "border-[#16222f] bg-[#16222f] text-white shadow-md"
                            : "border-gray-200 bg-white text-gray-500 hover:border-[#fdbb00] hover:bg-[#fff8e5] hover:text-[#16222f]"
                        }`}
                      >
                        {option}
                      </button>
                    ))}

                  </div>

                </div>


                {/* MESSAGE */}
                <textarea
                  rows={5}
                  name="message"
                  placeholder="Tell us how we can help you..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-7 w-full resize-none rounded-xl border border-gray-200 bg-white p-4 text-sm text-black outline-none transition focus:border-[#16222f] focus:ring-2 focus:ring-[#16222f]/10"
                />


                {/* SUBSCRIBE */}
                <label className="mt-5 flex cursor-pointer select-none items-start gap-3 text-gray-500">

                  <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="mt-0.5 h-4 w-4 accent-[#16222f]"
                  />

                  <span className="text-xs leading-5">
                    I'd like to receive exclusive offers and updates.
                  </span>

                </label>


                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group mt-8 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-xl border border-[#294985] bg-[#294985] px-6 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-[#FFB900] hover:bg-[#FFB900] hover:text-[#fff] hover:shadow-xl"
                >
                  Submit Enquiry

                  <Send
                    size={17}
                    className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>


                <p className="mt-5 text-center text-[11px] leading-5 text-gray-400">
                  Your information will be used to respond to your enquiry.
                </p>

              </form>

            </div>

          </div>
        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="relative overflow-hidden bg-[#F5F7FB] px-5 py-16 md:px-10 md:py-20">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 rounded-3xl bg-white p-8 shadow-lg md:flex-row md:p-12">

          <div data-aos="fade-right">

            <span className="text-xs font-bold uppercase tracking-[3px] text-[#B78300]">
              Plan Your Visit
            </span>

            <h2 className="mt-3 text-2xl font-bold text-[#16222f] md:text-4xl">
              We Look Forward to Welcoming You
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500">
              Contact us for accommodation enquiries and information
              about your visit to Shree Krishna Bhakti Ashram.
            </p>

          </div>

          <Link
            href="/accommodation"
            data-aos="fade-left"
            className="inline-flex shrink-0 items-center gap-3 rounded-full bg-[#16222f] px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#fdbb00] hover:text-[#16222f]"
          >
            Explore Rooms
            <ArrowUpRight size={19} />
          </Link>

        </div>

      </section>

 <Footer />
    </main>
  );
}
