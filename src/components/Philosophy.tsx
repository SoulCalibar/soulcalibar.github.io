'use client';

import { useEffect, useRef, useState } from 'react';

export default function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="philosophy" ref={ref} className="section-container bg-abyss/30">
      <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-amethyst text-sm tracking-[0.3em] uppercase mb-2 font-inter">Core Beliefs</p>
        <h2 className="section-title">Philosophy & Thoughts</h2>
        <div className="divider" />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <h3 className="font-cinzel text-bone text-xl group-hover:text-amethyst-glow transition-colors duration-300">
              The Ethics of Technology
            </h3>
            <p className="text-ash leading-relaxed">
              Technology is not inherently neutral; it is a profound extension of human intent that shapes the very fabric of our society. As engineers and creators, we carry the responsibility to build systems that respect human dignity, privacy, and agency. Every line of code can either reinforce existing inequities or help dismantle them. Ethical development requires us to consider the long-term impact of our creations, ensuring that the tools we build serve humanity rather than exploit it.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="font-cinzel text-bone text-xl group-hover:text-amethyst-glow transition-colors duration-300">
              Technology in Everyday Life
            </h3>
            <p className="text-ash leading-relaxed">
              We have woven digital systems into every aspect of our existence, from how we connect with loved ones to how we govern our cities. Technology is the invisible infrastructure of the modern human experience. Because it holds such a pivotal role in our lives, our approach to tech must be holistic. It is not merely about writing efficient algorithms or building faster processors; it is about cultivating systems that elevate our shared human experience and empower individuals to live more fulfilling lives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
