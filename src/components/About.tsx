'use client';

import { useEffect, useRef, useState } from 'react';

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="section-container">
      <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-amethyst text-sm tracking-[0.3em] uppercase mb-2 font-inter">Who I Am</p>
        <h2 className="section-title">About Me</h2>
        <div className="divider" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <p className="text-ash leading-relaxed">
              I&apos;m a Computer Science student driven by a deep fascination with how technologies think, interact, and evolve.
            </p>
            <p className="text-ash leading-relaxed">
              My work spans the full spectrum; from optimizing <span className="text-amethyst-glow">large language models</span> to 
              run entirely in-browser, to engineering <span className="text-amethyst-glow">3D game engines from scratch in C</span>, 
              to building <span className="text-amethyst-glow">AI-driven cybersecurity defenses</span>. I&apos;m equally comfortable 
              in the depths of memory management and the heights of cloud architecture!
            </p>
          </div>

          <div className="space-y-4">
            <div className="glass-card p-6">
              <h3 className="font-cinzel text-bone text-lg mb-3">Education</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-bone text-sm">B.Sc Computer Science</p>
                </div>
                <div className="w-full h-px bg-ash/10" />
                <div>
                  <p className="text-bone text-sm">Full Stack Development Diploma</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="font-cinzel text-bone text-lg mb-3">Recognition</h3>
              <ul className="space-y-2">
                <li className="text-ash text-sm flex items-start gap-2">
                  <span className="text-amethyst mt-1">◆</span>
                  Enrolled in a prestigious International Scholarship Program
                </li>
                <li className="text-ash text-sm flex items-start gap-2">
                  <span className="text-amethyst mt-1">◆</span>
                  Dean&apos;s Award: 98% GPA
                </li>
                <li className="text-ash text-sm flex items-start gap-2">
                  <span className="text-amethyst mt-1">◆</span>
                  1st Place Prize: Senior Project (LLM Optimization)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
