import { AnnouncementBar } from "./components/AnnouncementBar";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustBar } from "./components/TrustBar";
import { Services } from "./components/Services";
import { About } from "./components/About";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Reviews } from "./components/Reviews";
import { Gallery } from "./components/Gallery";
import { ServiceArea } from "./components/ServiceArea";
import { Contact } from "./components/Contact";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { BackToTop } from "./components/BackToTop";
import { MobileCallBar } from "./components/MobileCallBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <AnnouncementBar />
      <Navbar />

      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <About />
        <WhyChooseUs />
        <Reviews />
        <Gallery />
        <ServiceArea />
        <Contact />
        <FinalCTA />
      </main>

      <Footer />
      <BackToTop />
      <MobileCallBar />
    </div>
  );
}
