
import HeroSection from "../components/HeroSection";
import FeaturedPanels from "../components/FeaturedPanels";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GalaxyBackground from "../components/GalaxyBackground";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-white flex flex-col relative animate-fade-in">
      <GalaxyBackground />
      <Navbar />
      <main className="flex-grow relative z-10">
        <HeroSection />
        <FeaturedPanels />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
