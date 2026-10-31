"use client";

import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState('General');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    country: '',
    phone: '',
    email: '',
    message: '',
    subscribe: false
  });

  const inquiryOptions = ['Booking', 'General', 'Traveling', 'Corporate', 'Others'];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", { ...formData, inquiryType });
    // Handle form delivery logic here (e.g., mailer API call)
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#16222f] py-16 text-white md:py-24">
      {/* Background Graphic Watermark Image Accent */}
      <div 
        className="absolute inset-0 z-0 opacity-25 bg-cover bg-center mix-blend-luminosity pointer-events-none"
        style={{ backgroundImage: "url('/assets/images/about-accent.jpg')", backgroundPosition: "top" }} 
      />

      <div className="relative z-10 mx-auto max-w-[1320px] px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* LEFT SIDE BLOCK: Copy & Quick Identity Metadata details */}
          <div className="flex flex-col lg:col-span-6 xl:pr-12" data-aos="fade-right">
            <h2 className="font-serif text-4xl font-light uppercase tracking-wide leading-tight text-white sm:text-5xl lg:text-6xl">
              You Have Questions,<br />We Have Answers
            </h2>
            
            {/* <p className="mt-6 max-w-md text-xs font-light leading-6 tracking-wide text-gray-800">
              Discover experiences you won't find anywhere else—thoughtfully designed to immerse you in the heart of the destination. Soulful stories waiting to be lived.
            </p> */}

            {/* Quick Context Grid */}
            <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mt-24">
              <div>
                <h4 className="text-[16px] font-bold uppercase tracking-wider text-[#fdbb00]">Location</h4>
                <div className="mt-3 text-[15px] font-light leading-6 text-gray-300">
                  <p>Shree Krishna Bhakti Ashram</p>
                  <p>123 Serenity Bay Road</p>
                  <p>Vrindavan, India 281121</p>
                  <p className="mt-2 text-gray-300 italic">Monday–Sunday | 08:00 – 22:00 (local time)</p>
                </div>
              </div>

              <div>
                <h4 className="text-[16px] font-bold uppercase tracking-wider text-[#fdbb00]">Social Media</h4>
                <div className="mt-3 flex flex-col gap-2 text-[15px] font-light text-gray-300">
                  {['Instagram', 'LinkedIn', 'Facebook', 'Google Review'].map((platform) => (
                    <a key={platform} href="#" className="transition hover:text-[#fdbb00] w-fit">{platform}</a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[16px] font-bold uppercase tracking-wider text-[#fdbb00]">Email</h4>
                <p className="mt-3 text-[15px] font-light text-gray-300 transition hover:text-[#fdbb00]">
                  <a href="mailto:stay@ashramresort.com">stay@ashramresort.com</a>
                </p>
              </div>

              <div>
                <h4 className="text-[16px] font-bold uppercase tracking-wider text-[#fdbb00]">Contact</h4>
                <p className="mt-3 text-[15px] font-semibold text-gray-300 tracking-wide">
                  +91 8583017971
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE BLOCK: Premium Inset Floating Form Card */}
          <div className="w-full lg:col-span-6" data-aos="fade-left">
            <form 
              onSubmit={handleSubmit}
              className="w-full bg-[#fdfcfb] p-6 text-black shadow-2xl rounded-sm sm:p-10"
            >
              <h3 className="text-xl font-medium tracking-wide text-gray-900">Tell Us What You Need</h3>
              <p className="mt-1 text-xs text-black font-light">Our team is ready to assist you with every detail, big or small.</p>

              {/* Input elements split wrapper block */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full border border-black bg-transparent px-4 py-3 text-xs font-light text-black outline-none focus:border-[#16222f] rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full border border-black bg-transparent px-4 py-3 text-xs font-light text-black outline-none focus:border-[#16222f] rounded-xl"
                />
                <input
                  type="text"
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  className="w-full border border-black bg-transparent px-4 py-3 text-xs font-light text-black outline-none focus:border-[#16222f] rounded-xl"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-black bg-transparent px-4 py-3 text-xs font-light text-black outline-none focus:border-[#16222f] rounded-xl"
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-4 w-full border border-black bg-transparent px-4 py-3 text-xs font-light text-black outline-none focus:border-[#16222f] rounded-xl"
              />

              {/* Custom Selector Blocks: Type of Inquiry */}
              <div className="mt-6">
                <label className="text-[11px] font-bold uppercase tracking-wider text-black block mb-3">Type of Inquiry</label>
                <div className="flex flex-wrap gap-2">
                  {inquiryOptions.map((option) => (
                    <button
                      key={option}
                      type="button"
                      onClick={() => setInquiryType(option)}
                      className={`min-h-[34px] border px-4 text-xs font-light tracking-wide transition rounded-full ${
                        inquiryType === option
                          ? "border-[#16222f] bg-[#16222f] font-normal text-white shadow-sm"
                          : "border-black bg-transparent text-gray-500 hover:border-gray-400 hover:text-gray-700"
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                rows={4}
                placeholder="Message"
                required
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="rounded-xl mt-6 w-full border border-black bg-transparent p-4 text-xs font-light text-black outline-none resize-none focus:border-[#16222f]"
              />

              {/* Subscriptions Checkbox */}
              <label className="mt-5 flex items-center gap-3 cursor-pointer text-gray-500 select-none">
                <input
                  type="checkbox"
                  checked={formData.subscribe}
                  onChange={(e) => setFormData({ ...formData, subscribe: e.target.checked })}
                  className="h-4 w-4 border-black accent-[#16222f] rounded"
                />
                <span className="text-[11px] font-light">I'd like to receive exclusive offers and updates</span>
              </label>

              <button
                type="submit"
                className="mt-8 flex min-h-[46px] w-full items-center justify-center border border-gray-300 bg-transparent text-xs font-bold uppercase tracking-[0.2em] text-black transition hover:bg-[#fdbb00] hover:border-[#fdbb00] hover:text-white rounded-xl shadow-sm cursor-pointer"
              >
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
