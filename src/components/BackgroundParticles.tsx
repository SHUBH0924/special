import React, { useEffect, useRef } from 'react';

export const BackgroundParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle type definitions
    interface Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      fadeSpeed: number;
      rotation: number;
      rotationSpeed: number;
      color: string;
      type: 'petal' | 'dust';
    }

    const particleCount = Math.min(Math.floor(window.innerWidth / 35), 35);
    const particles: Particle[] = [];

    const colors = [
      'rgba(232, 211, 211, ', // Blush border #E8D3D3
      'rgba(139, 68, 68, ',   // Deep burgundy accent #8B4444
      'rgba(210, 180, 180, ', // Soft warm rose
      'rgba(180, 130, 130, '  // Warm editorial dust
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 6 + 3,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.4 + 0.15, // gentle drift downwards
        opacity: Math.random() * 0.4 + 0.1,
        fadeSpeed: Math.random() * 0.003 + 0.001,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
        type: Math.random() > 0.4 ? 'petal' : 'dust'
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach(p => {
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;

        // Wrap edges gracefully
        if (p.y > height + 20) {
          p.y = -10;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);

        if (p.type === 'petal') {
          // Soft organic petal shape
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size, p.size * 1.6, Math.PI / 4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity})`;
          ctx.fill();
        } else {
          // Gentle glowing dust
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${p.opacity * 0.8})`;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-80"
    />
  );
};
