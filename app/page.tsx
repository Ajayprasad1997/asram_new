import HeroBanner from "./components/HeroBanner";
import AccommodationSection from "./components/AccommodationSection";
import About from "./components/About";
import ActivitiesSection from "./components/ActivitiesSection";
import GallerySection from "./components/GallerySection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";


export default function Home() {
  return (
    <div className="flex w-full flex-col min-h-screen">
      {/* Homepage Sections stack consecutively */}
      <HeroBanner />
      <About />
      <AccommodationSection />
       <ActivitiesSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </div>
  );
}
