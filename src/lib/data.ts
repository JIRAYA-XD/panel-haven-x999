
export type Panel = {
  id: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  features: string[];
  image: string;
};

export const panels: Panel[] = [
  {
    id: "basic-panel",
    name: "Basic Panel",
    shortDescription: "Essential gaming tools for beginners",
    description: "The Basic Panel is perfect for new gamers looking to enhance their gameplay experience. It provides essential tools and features without overwhelming complexity.",
    price: 29.99,
    features: [
      "Simple user interface",
      "Basic aim assistance",
      "Performance monitoring",
      "Game optimization",
      "Lightweight design"
    ],
    image: "/placeholder.svg"
  },
  {
    id: "aimsilent-exe",
    name: "Aimsilent EXE",
    shortDescription: "Advanced aiming without detection",
    description: "Aimsilent EXE offers sophisticated aim assistance technology that helps improve accuracy while maintaining a natural feel to your gameplay. Our advanced algorithms ensure seamless integration with your gaming style.",
    price: 59.99,
    features: [
      "Precision aim assistance",
      "Customizable sensitivity",
      "Multiple configuration profiles",
      "Compatibility with popular FPS games",
      "Regular updates and improvements"
    ],
    image: "/placeholder.svg"
  },
  {
    id: "aimkill-apk",
    name: "Aimkill APK",
    shortDescription: "Mobile gaming mastery solution",
    description: "Designed specifically for mobile gamers, Aimkill APK enhances your mobile gaming experience with customized controls and performance optimization for touch screens.",
    price: 39.99,
    features: [
      "Optimized for mobile devices",
      "Touch screen response enhancement",
      "Battery consumption optimization",
      "Custom overlay options",
      "Compatible with Android 8.0+"
    ],
    image: "/placeholder.svg"
  },
  {
    id: "brutal-panel",
    name: "Brutal Panel",
    shortDescription: "Unleash maximum gaming potential",
    description: "For serious gamers who demand the best, Brutal Panel offers a comprehensive suite of advanced tools to maximize your gaming performance and dominate the competition.",
    price: 79.99,
    features: [
      "Full suite of gaming enhancements",
      "Real-time performance analytics",
      "Hardware optimization tools",
      "Custom macro creation",
      "Priority technical support"
    ],
    image: "/placeholder.svg"
  },
  {
    id: "emulator-bypass",
    name: "Emulator Bypass",
    shortDescription: "Seamless emulation experience",
    description: "Emulator Bypass ensures smooth gameplay across different platforms by optimizing performance in emulated environments and ensuring compatibility with a wide range of games.",
    price: 44.99,
    features: [
      "Supports multiple emulation platforms",
      "Performance optimization",
      "Input lag reduction",
      "Custom controller mapping",
      "Regular compatibility updates"
    ],
    image: "/placeholder.svg"
  },
  {
    id: "aimbot-ai",
    name: "Aimbot AI",
    shortDescription: "AI-powered precision gaming",
    description: "Leveraging cutting-edge artificial intelligence, Aimbot AI learns and adapts to your gaming style to provide intelligent assistance that evolves with your skills.",
    price: 89.99,
    features: [
      "Adaptive AI technology",
      "Learning algorithm that improves over time",
      "Smart target prioritization",
      "Customizable AI behavior settings",
      "Cross-game profile synchronization"
    ],
    image: "/placeholder.svg"
  }
];

export function getPanelById(id: string): Panel | undefined {
  return panels.find(panel => panel.id === id);
}
