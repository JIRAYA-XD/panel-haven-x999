
import { panels } from "../lib/data";
import PanelCard from "./PanelCard";

const FeaturedPanels = () => {
  return (
    <section className="py-20" id="panels">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold mb-4 font-['Orbitron'] text-gray-800">Our Gaming Panels</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our selection of high-performance gaming panels designed to enhance your gameplay
            and give you the competitive edge.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {panels.map((panel, index) => (
            <div 
              key={panel.id}
              className="animate-slide-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <PanelCard panel={panel} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPanels;
