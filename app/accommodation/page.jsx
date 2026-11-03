
import Link from "next/link";
import Image from "next/image";
import AccommodationSection from "@/app/components/AccommodationSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";

const facilities = [
  "Spacious, air-conditioned rooms with heating facilities for colder months.",
  "Attached private bathrooms, comfortable seating areas, wardrobes, and dressing areas in selected rooms.",
  "Selected rooms include a compact kitchen and mini refrigerator.",
  "Garden views, open spaces, and outdoor sitting areas.",
  "The Ashram also has a goshala (cow shelter), prayer rooms, a drinking-water facility (piyau), and provisions for anna khetra (free distribution of food) and satsang.",
  "Being a ground-floor property, it is also suitable for elderly guests.",
  "Spacious hall and garden adjacent to the temple, ideal for religious ceremonies and social functions.",
  "24/7 power backup for uninterrupted convenience.",
];

export default function AccommodationPage() {
  return (
    <main className="overflow-hidden bg-white">

      {/* Accommodation Banner */}

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
                Your Peaceful Stay in Vrindavan
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Accommodation
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
              <span className="font-semibold text-[#FFB900]">Accommodation</span>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#FFB900] via-white to-[#244584]" />
      </section>
      
      
      {/* Existing Accommodation Component */}
      <AccommodationSection />

      {/* Facilities and Accommodation */}
      <section className="bg-[#F5F7FB] py-20 sm:py-24">

        <div className="mx-auto max-w-[1320px] px-6 sm:px-10 lg:px-16">

          <div className="mb-12 max-w-3xl">

            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-[0.25em] text-[#2c83a5]">
              Comfort & Convenience
            </span>

            <h2 className="text-3xl font-bold uppercase leading-tight tracking-tight text-[#244584] sm:text-4xl lg:text-5xl">
              Facilities and
              <span className="block text-[#fdbb00]">
                Accommodation
              </span>
            </h2>

          </div>

          <div className="grid gap-x-12 gap-y-8 md:grid-cols-2">

            {facilities.map((item, index) => (
              <div
                key={index}
                className="group flex gap-4 border-b border-[#244584]/10 pb-6"
              >

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#244584] text-sm font-bold text-white transition duration-300 group-hover:bg-[#fdbb00] group-hover:text-[#244584]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <p className="text-sm leading-7 text-[#46536A] sm:text-base">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>
       <ContactSection />
      <Footer />
    </main>
  );
}
