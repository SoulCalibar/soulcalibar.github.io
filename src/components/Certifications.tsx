'use client';

import { useEffect, useRef, useState } from 'react';

const certifications = [
  'NVIDIA — Fundamentals of Accelerated Computing with Modern CUDA C++',
  'Coursera — Parallel Computing with MPI',
  'Coursera — Fine Tune BERT for Text Classification with TensorFlow',
  'Coursera — Sentiment Analysis with Deep Learning using BERT',
  'Coursera - NLP: Twitter Sentiment Analysis',
];

export default function Certifications() {
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
    <section id="certifications" ref={ref} className="section-container">
      <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-amethyst text-sm tracking-[0.3em] uppercase mb-2 font-inter">The Proof</p>
        <h2 className="section-title">Certifications</h2>
        <div className="divider" />

        <div className="mt-12 max-w-3xl">
          {/* Certifications — Terminal Style */}
          <div className="glass-card p-6 font-mono text-sm">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-ash/10">
              <div className="w-3 h-3 rounded-full bg-crimson/60" />
              <div className="w-3 h-3 rounded-full bg-amber-500/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/60" />
              <span className="text-ash/40 text-xs ml-2">certifications.sh</span>
            </div>
            <div className="space-y-2">
              <p className="text-ash/50">$ cat ~/certs/*.cert</p>
              {certifications.map((cert, i) => (
                <p key={i} className="text-ash">
                  <span className="text-amethyst-glow">→</span> {cert}
                </p>
              ))}
              <p className="text-ash/50 mt-4">$ █</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
