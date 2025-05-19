
import { useParams, useNavigate } from "react-router-dom";
import { getPanelById } from "../lib/data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const panel = id ? getPanelById(id) : undefined;

  if (!panel) {
    return (
      <div className="min-h-screen bg-gaming-dark text-white flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Panel Not Found</h1>
        <p className="text-gray-400 mb-8">The panel you're looking for doesn't exist.</p>
        <Button onClick={() => navigate("/")} className="bg-neon-blue hover:bg-neon-blue/80">
          Back to Home
        </Button>
      </div>
    );
  }

  const handleBuyNow = () => {
    // Here you would typically redirect to a checkout page
    toast.success(`${panel.name} added to cart!`);
  };

  return (
    <div className="min-h-screen bg-gaming-dark text-white flex flex-col">
      <Navbar />
      <main className="flex-grow pt-28 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Image */}
              <div className="bg-gaming-card rounded-lg overflow-hidden animate-float">
                <img
                  src={panel.image}
                  alt={panel.name}
                  className="w-full h-full object-cover min-h-[400px]"
                />
              </div>

              {/* Product Details */}
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-4 font-['Orbitron'] text-white">
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
                      <li key={index} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-neon-blue flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Buy Now Button */}
                <Button 
                  onClick={handleBuyNow} 
                  className="w-full bg-neon-blue hover:bg-neon-blue/80 text-white py-7 text-lg animate-pulse-glow"
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
