"use client";

import { useRef, useEffect } from 'react';
import { useMousePosition } from '@/hooks/use-mouse-position';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  size: number;
  color: string;
}

export function ParticlesEffect() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePosition = useMousePosition();
  const particlesRef = useRef<Particle[]>([]);
  const maxParticles = 100;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createParticle = (x: number, y: number): Particle => ({
      x,
      y,
      vx: (Math.random() - 0.5) * 1,
      vy: (Math.random() - 0.5) * 1,
      life: Math.random() * 0.8 + 0.2,
      size: Math.random() * 2 + 1,
      color: `hsla(262, 83%, ${50 + Math.random() * 20}%, ${Math.random() * 0.5})`
    });

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Add new particles near mouse position
      if (mousePosition.x > 0 && mousePosition.y > 0) {
        while (particlesRef.current.length < maxParticles) {
          particlesRef.current.push(
            createParticle(
              mousePosition.x + (Math.random() - 0.5) * 20,
              mousePosition.y + (Math.random() - 0.5) * 20
            )
          );
        }
      }

      // Update and draw particles
      particlesRef.current = particlesRef.current
        .filter(p => p.life > 0)
        .map(p => {
          p.x += p.vx;
          p.y += p.vy;
          p.life -= 0.01;
          p.size *= 0.99;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.fill();

          return p;
        });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [mousePosition]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
    />
  );
}