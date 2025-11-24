import React, { useRef, useEffect } from 'react';

const Starfield: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    const stars: { x: number, y: number, z: number, size: number, color: string }[] = [];
    const numStars = 1000;
    
    // Multi-colored galaxy palette
    const colors = [
        '#FFFFFF', // White
        '#AEC6CF', // Pastel Blue
        '#FFB7B2', // Pastel Red/Pink
        '#C7CEEA', // Periwinkle
        '#E2F0CB', // Pale Green
        '#FFD700', // Gold (Rare)
        '#DA70D6', // Orchid
        '#00BFFF', // Deep Sky Blue
    ];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
        size: Math.random() * 2, // Varied sizes
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    let animationFrameId: number;
    const speed = 0.3; // Slower, majestic speed

    const render = () => {
      // Clear with a slight trail effect for smoothness
      ctx.fillStyle = 'rgba(9, 10, 15, 0.3)'; 
      ctx.fillRect(0, 0, width, height);
      
      ctx.save();
      ctx.translate(width / 2, height / 2);

      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
          star.color = colors[Math.floor(Math.random() * colors.length)];
        }

        const k = 128.0 / star.z;
        const px = star.x * k;
        const py = star.y * k;

        if (px >= -width/2 && px <= width/2 && py >= -height/2 && py <= height/2) {
          const sizeFactor = (1 - star.z / width);
          const size = star.size * sizeFactor;
          const alpha = sizeFactor;

          ctx.globalAlpha = alpha;
          ctx.fillStyle = star.color;
          
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.restore();
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full z-0" 
      style={{
        background: 'linear-gradient(to bottom, #090A0F 0%, #1B1E2B 100%)' // Deep space background
      }}
    />
  );
};

export default Starfield;