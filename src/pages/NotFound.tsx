
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gaming-dark text-foreground">
      <div className="text-center animate-fade-in">
        <h1 className="text-6xl font-bold mb-4 text-neon-blue font-['Orbitron'] text-glow">404</h1>
        <p className="text-xl text-gray-700 mb-8">Oops! Page not found</p>
        <Button className="bg-neon-blue hover:bg-neon-blue/80">
          <Link to="/" className="text-white">
            Return to Home
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
