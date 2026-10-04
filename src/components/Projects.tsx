'use client';

import { useEffect, useRef, useState } from 'react';

const projects = [
  {
    title: 'LLM Optimization for In-Browser Usage',
    tag: '🏆 1st Place Senior Project',
    description:
      'Engineered a privacy-focused system for running large language models entirely in the browser. Applied advanced quantization techniques and WebAssembly optimization to achieve offline inference without sacrificing model quality.',
    tech: ['Python', 'WebAssembly', 'ONNX', 'Quantization', 'LLMs'],
    accent: 'amethyst',
  },
  {
    title: 'Cyber Guards — AI Defense System',
    tag: 'Hackathon Project',
    description:
      'Built an AI-driven self-healing cybersecurity defense platform with immutable blockchain audit logs. The system autonomously detects, classifies, and responds to threats in real-time while maintaining a tamper-proof evidence chain.',
    tech: ['Python', 'AI/ML', 'Blockchain', 'Cybersecurity', 'Docker'],
    accent: 'crimson',
  },
  {
    title: 'Custom 3D Game Engine',
    tag: 'Systems Programming',
    description:
      'Designed and built a complete 3D rendering engine from scratch in C. Implements custom rendering pipelines, physics simulation, memory management, and entity systems — no external engine dependencies.',
    tech: ['C', 'OpenGL', 'Memory Management', 'Linear Algebra', 'ECS'],
    accent: 'amethyst',
  },
  {
    title: 'Paragon — Interactive ARG',
    tag: 'In Progress',
    description:
      'A 30+ hour alternate reality game blending narrative storytelling with real-world cryptographic puzzles. Players decrypt ciphers, navigate hidden web pages, and unravel a multi-layered mystery.',
    tech: ['JavaScript', 'Cryptography', 'Narrative Design', 'Web', 'Puzzle Design'],
    accent: 'crimson',
  },
  {
    title: 'Social Network Platform',
    tag: 'Full-Stack',
    description:
      'A feature-rich social media application with real-time messaging via WebSockets, post feeds, user authentication, and interactive engagement features. Built with a modern reactive frontend and RESTful API backend.',
    tech: ['Vue.js', 'Node.js', 'WebSockets', 'MongoDB', 'JWT'],
    accent: 'amethyst',
  },
  {
    title: 'Forum Application',
    tag: 'Full-Stack',
    description:
      'A threaded discussion forum with category-based organization, user roles, and real-time updates. Features include markdown support, search functionality, and moderation tools.',
    tech: ['Go', 'SQLite', 'JavaScript', 'REST API', 'Authentication'],
    accent: 'crimson',
  },
];

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={ref} className="section-container">
      <div className={`transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <p className="text-amethyst text-sm tracking-[0.3em] uppercase mb-2 font-inter">The compendium</p>
        <h2 className="section-title">Projects</h2>
        <div className="divider" />

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`glass-card p-8 group relative overflow-hidden ${
                i === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Subtle top accent line */}
              <div
                className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent ${
                  project.accent === 'crimson'
                    ? 'via-crimson'
                    : 'via-amethyst'
                } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`text-xs px-3 py-1 border ${
                    project.accent === 'crimson'
                      ? 'border-crimson/40 text-crimson-glow'
                      : 'border-amethyst/40 text-amethyst-glow'
                  }`}
                >
                  {project.tag}
                </span>
              </div>

              <h3 className="font-cinzel text-bone text-xl mb-3 group-hover:text-amethyst-glow transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-ash text-sm leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 bg-void/50 text-ash/70 border border-ash/10"
                  >
                    {t}
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
