
import HeroSection from "../components/HeroSection";
import FeaturedPanels from "../components/FeaturedPanels";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gaming-dark text-foreground flex flex-col animate-fade-in">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedPanels />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
