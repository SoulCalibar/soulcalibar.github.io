'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number | null = null;
    let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.min(120, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(122, 32, 50, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(122, 32, 50, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

    };

    const animate = () => {
      draw();
      if (!prefersReducedMotion) animationId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      resize();
      createParticles();
      if (prefersReducedMotion) draw();
    };

    const handleMotionPreferenceChange = (event: MediaQueryListEvent) => {
      prefersReducedMotion = event.matches;
      if (animationId !== null) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
      animate();
    };

    resize();
    createParticles();
    animate();
    window.addEventListener('resize', handleResize);
    const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionPreference.addEventListener('change', handleMotionPreferenceChange);

    return () => {
      window.removeEventListener('resize', handleResize);
      motionPreference.removeEventListener('change', handleMotionPreferenceChange);
      if (animationId !== null) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-void via-transparent to-void z-[1]" />

      <div className="relative z-10 text-center px-6">
        <div className="animate-fade-in">
          <p className="text-amethyst-glow text-sm tracking-[0.3em] uppercase mb-6 font-inter">
            Welcome to my domain
          </p>
        </div>

        <h1 className="font-cinzel text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-bone mb-6 animate-fade-in-up tracking-wide">
          Hûr<br />
          <span className="text-amethyst glow-text"> Al-‘În</span>
        </h1>

        <div className="animate-fade-in" style={{ animationDelay: '0.4s', opacity: 0 }}>
          <p className="text-ash text-lg md:text-xl max-w-2xl mx-auto mb-8 font-light leading-relaxed">
            Computer Scientist &amp; Aspiring Developer; bridging intelligent systems,
            low-level architecture, and seamless digital experiences.
          </p>
        </div>

        <div className="animate-fade-in" style={{ animationDelay: '0.8s', opacity: 0 }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#projects"
              className="px-8 py-3 border border-amethyst text-amethyst hover:bg-amethyst hover:text-bone transition-all duration-500 tracking-wider uppercase text-sm font-medium"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-ash/30 text-ash hover:border-bone hover:text-bone transition-all duration-500 tracking-wider uppercase text-sm font-medium"
            >
              Get in Touch
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-px h-16 bg-gradient-to-b from-amethyst/50 to-transparent" />
        </div>
      </div>
    </section>
  );
}
