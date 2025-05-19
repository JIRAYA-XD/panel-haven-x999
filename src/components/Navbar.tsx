
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gaming-dark/80 backdrop-blur-md border-b border-neon-blue/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold font-['Orbitron'] text-white text-glow">
              TERMINAL X <span className="text-neon-blue">999</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-white hover:text-neon-blue transition-colors">
              Home
            </Link>
            <Link to="/#panels" className="text-white hover:text-neon-blue transition-colors">
              Panels
            </Link>
            <Link to="/#contact" className="text-white hover:text-neon-blue transition-colors">
              Contact
            </Link>
            <Button variant="outline" className="border-neon-blue text-neon-blue hover:bg-neon-blue/10">
              Login
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
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/#panels" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Panels
            </Link>
            <Link 
              to="/#contact" 
              className="text-white hover:text-neon-blue transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
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
