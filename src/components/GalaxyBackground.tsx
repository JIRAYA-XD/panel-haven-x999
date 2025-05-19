
import { useEffect, useRef, useState } from "react";

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const particlesRef = useRef<Array<any>>([]);
  const animationFrameRef = useRef<number | null>(null);

  // Mouse move handler for the water ripple effect
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    
    // Create ripple effect
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      if (ctx) {
        addRipple(e.clientX, e.clientY);
      }
    }
  };

  // Add a ripple at the mouse position
  const addRipple = (x: number, y: number) => {
    particlesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius: 50,
      opacity: 1,
      color: '#9B87F5', // Purple color
      speed: 2,
    });
  };

  // Initialize stars for galaxy effect
  const initStars = () => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    // Create stars
    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        speed: Math.random() * 0.5,
        color: i % 5 === 0 ? '#9B87F5' : '#FFFFFF', // Some stars are purple
        opacity: Math.random() * 0.8 + 0.2
      });
    }
    
    return stars;
  };

  useEffect(() => {
    const stars = initStars();
    
    // Add event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }
    });
    
    // Animation loop
    const animate = () => {
      if (!canvasRef.current) return;
      
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw stars
      if (stars) {
        stars.forEach(star => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color === '#9B87F5' ? '155, 135, 245' : '255, 255, 255'}, ${star.opacity})`;
          ctx.fill();
          
          // Move stars
          star.y += star.speed;
          
          // Reset if star goes off screen
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });
      }
      
      // Draw ripples
      particlesRef.current.forEach((particle, index) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(155, 135, 245, ${particle.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
        
        // Update ripple
        particle.radius += particle.speed;
        particle.opacity -= 0.02;
        
        // Remove faded ripples
        if (particle.opacity <= 0) {
          particlesRef.current.splice(index, 1);
        }
      });
      
      animationFrameRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
};

export default GalaxyBackground;
