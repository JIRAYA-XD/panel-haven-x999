
import { useParams, useNavigate } from "react-router-dom";
import { getPanelById } from "../lib/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageCircle, MessageSquare } from "lucide-react";
import { toast } from "sonner";
import GalaxyBackground from "../components/GalaxyBackground";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const panel = id ? getPanelById(id) : undefined;

  if (!panel) {
    return (
      <div className="min-h-screen bg-gaming-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Panel Not Found</h1>
        <p className="text-gray-300 mb-8">The panel you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")} className="bg-neon-blue hover:bg-neon-blue/80">
          Back to Home
        </Button>
      </div>
    );
  }

  const handleBuyNow = () => {
    // Show options for contacting via WhatsApp or Discord
    toast(
      <div className="flex flex-col gap-3">
        <h3 className="font-medium text-center">Contact us to purchase</h3>
        <div className="flex gap-2 justify-center">
          <Button 
            size="sm" 
            className="bg-green-600 hover:bg-green-700"
            onClick={() => window.open("https://wa.me/1234567890?text=I'm%20interested%20in%20purchasing%20" + panel.name, "_blank")}
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            WhatsApp
          </Button>
          <Button 
            size="sm" 
            className="bg-indigo-600 hover:bg-indigo-700"
            onClick={() => window.open("https://discord.gg/yourserver", "_blank")}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Discord
          </Button>
        </div>
      </div>,
      {
        duration: 5000,
      }
    );
  };

  return (
    <div className="min-h-screen bg-gaming-dark text-white flex flex-col relative animate-fade-in">
      <GalaxyBackground />
      <Navbar />
      <main className="flex-grow pt-28 pb-20 relative z-10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="bg-gaming-card rounded-lg overflow-hidden animate-float neon-border">
                <img
                  src={panel.image}
                  alt={panel.name}
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>

              {/* Product Details */}
              <div className="animate-slide-in">
                <h1 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron'] text-white text-glow">
                  {panel.name}
                </h1>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-neon-blue">
                    ${panel.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-gray-300 mb-8">
                  {panel.description}
                </p>
                
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4 font-['Orbitron'] text-white">
                    Features
                  </h3>
                  <ul className="space-y-3">
                    {panel.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                        <CheckCircle className="h-5 w-5 text-neon-blue flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Buy Now Button */}
                <Button 
                  onClick={handleBuyNow} 
                  className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white py-7 text-lg animate-pulse-glow water-ripple"
                >
                  Buy Now
                </Button>
                
                {/* Additional Info */}
                <div className="mt-8 border-t border-gray-700 pt-6">
                  <p className="text-gray-400 text-sm">
                    * By purchasing this panel, you agree to our Terms of Service and Privacy Policy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductPage;
