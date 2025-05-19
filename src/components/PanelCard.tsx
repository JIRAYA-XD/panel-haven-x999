
import { Link } from "react-router-dom";
import { Panel } from "../lib/data";
import { Button } from "@/components/ui/button";

interface PanelCardProps {
  panel: Panel;
}

const PanelCard = ({ panel }: PanelCardProps) => {
  return (
    <div className="panel-card group h-full flex flex-col">
      {/* Image container */}
      <div className="relative overflow-hidden h-48 bg-gaming-accent">
        <img
          src={panel.image}
          alt={panel.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Price tag */}
        <div className="absolute top-4 right-4 bg-gaming-dark px-3 py-1 rounded-full border border-neon-blue/50">
          <span className="text-neon-blue font-bold">${panel.price.toFixed(2)}</span>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 font-['Orbitron'] text-white">
          {panel.name}
        </h3>
        <p className="text-gray-400 mb-4 flex-grow">
          {panel.shortDescription}
        </p>
        <Button 
          className="w-full bg-gaming-accent hover:bg-neon-blue/20 border border-neon-blue/50 text-neon-blue"
        >
          <Link to={`/panel/${panel.id}`} className="w-full h-full flex items-center justify-center">
            View Details
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default PanelCard;
