
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      {/* Abstract background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-neon-blue/10 rounded-full filter blur-3xl animate-spin-slow"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-neon-purple/10 rounded-full filter blur-3xl animate-pulse"></div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-['Orbitron'] text-glow">
            PRITAM X <span className="text-neon-blue">999</span>
          </h1>
          <p className="text-xl md:text-2xl font-medium text-gray-700 mb-8 text-glow-purple animate-slide-in">
            All Server Safe Panels Here
          </p>
          <p className="text-gray-600 max-w-2xl mb-10">
            Elevate your gaming experience with our premium selection of gaming panels. 
            Designed by gamers, for gamers, our tools provide the edge you need to dominate 
            the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white px-8 py-6 text-lg animate-pulse-glow">
              <Link to="/#panels">Explore Panels</Link>
            </Button>
            <Button variant="outline" className="border-neon-purple text-neon-purple hover:bg-neon-purple/10 px-8 py-6 text-lg">
              <Link to="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
