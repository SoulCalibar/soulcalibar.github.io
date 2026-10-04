'use client';

import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Languages',
    icon: '⟐',
    skills: ['Python', 'C', 'C++', 'Rust', 'Go', 'Java', 'JavaScript', 'TypeScript', 'Julia', 'Lua'],
  },
  {
    title: 'Web & Frameworks',
    icon: '◈',
    skills: ['React', 'Vue.js', 'Next.js', 'Node.js', 'GraphQL', 'WebSockets', 'Django', 'Express'],
  },
  {
    title: 'AI & Data',
    icon: '⬡',
    skills: ['PyTorch', 'TensorFlow', 'NLP', 'Computer Vision', 'LLM Optimization', 'CUDA', 'Parallel Computing'],
  },
  {
    title: 'Systems & Security',
    icon: '⏣',
    skills: ['Cybersecurity', 'Blockchain', 'Docker', 'Linux', 'Memory Management', 'Network Security'],
  },
  {
    title: 'Data & Cloud',
    icon: '⎔',
    skills: ['SQL', 'MongoDB', 'PostgreSQL', 'Firebase', 'AWS', 'Git', 'CI/CD'],
  },
];

export default function Skills() {
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
    <section id="skills" ref={ref} className="section-container bg-abyss/30">
      <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-amethyst text-sm tracking-[0.3em] uppercase mb-2 font-inter">The Arsenal</p>
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="divider" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, i) => (
            <div
              key={category.title}
              className="glass-card p-6 group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-amethyst text-2xl group-hover:text-amethyst-glow transition-colors">
                  {category.icon}
                </span>
                <h3 className="font-cinzel text-bone text-lg">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-3 py-1.5 border border-ash/20 text-ash hover:border-amethyst/50 hover:text-amethyst-glow transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
