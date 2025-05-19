
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (anchor: string) => {
    setIsMenuOpen(false);
    
    // Smooth scroll to the section if we're on the homepage
    if (window.location.pathname === '/') {
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-blue/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-['Orbitron'] text-white text-glow animate-fade-in">
              PRITAM X <span className="text-neon-blue">999</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className="text-white hover:text-neon-blue transition-colors animate-slide-in" 
              style={{ animationDelay: "0.1s" }}
              onClick={() => handleNavClick('home')}
            >
              Home
            </Link>
            <a 
              href="/#panels" 
              className="text-white hover:text-neon-blue transition-colors animate-slide-in" 
              style={{ animationDelay: "0.2s" }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('panels');
              }}
            >
              Panels
            </a>
            <a 
              href="/#contact" 
              className="text-white hover:text-neon-blue transition-colors animate-slide-in" 
              style={{ animationDelay: "0.3s" }}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contact
            </a>
            <Button 
              variant="outline" 
              className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 animate-fade-in relative overflow-hidden group" 
              style={{ animationDelay: "0.4s" }}
            >
              <span className="relative z-10">Login</span>
              <span className="absolute inset-0 bg-neon-blue/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 flex flex-col gap-4">
            <Link 
              to="/" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={() => handleNavClick('home')}
            >
              Home
            </Link>
            <a 
              href="/#panels" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('panels');
              }}
            >
              Panels
            </a>
            <a 
              href="/#contact" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('contact');
              }}
            >
              Contact
            </a>
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10 w-full">
              Login
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
