"use client"

import { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Tag } from 'lucide-react';
import { PROJECTS } from '../constants';
import { cn } from '../lib/utils';

export default function Projects() {
  const [filter, setFilter] = useState<'All' | 'Web' | 'Mobile' | 'Design'>('All');

  const filteredProjects = PROJECTS.filter(p => filter === 'All' || p.category === filter);

  const categories: ('All' | 'Web' | 'Mobile' | 'Design')[] = ['All', 'Web', 'Mobile', 'Design'];

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold font-display italic tracking-tighter mb-6">
            Our <span className="text-[var(--primary)]">Projects.</span>
          </h1>
          <p className="text-[var(--foreground)]/60 text-lg max-w-2xl leading-relaxed">
            Menampilkan hasil karya terbaik kami dalam membangun pengalaman digital yang tak terlupakan. Kami percaya setiap klik harus bermakna.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "px-6 py-2 rounded-full border-2 transition-all font-bold text-sm",
                filter === cat 
                  ? "bg-[var(--primary)] border-[var(--primary)] text-white" 
                  : "bg-transparent border-[var(--foreground)]/10 text-[var(--foreground)]/60 hover:border-[var(--primary)]/50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="group flex flex-col gap-6"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-[var(--primary)]/10 shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 group-hover:opacity-100 opacity-0 transition-opacity">
                  <a 
                    href={project.link} 
                    className="p-3 bg-white text-black rounded-full hover:bg-[var(--primary)] hover:text-white transition-all shadow-xl block"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center space-x-2 text-[var(--primary)] font-bold text-xs uppercase tracking-widest mb-3">
                  <Tag size={12} />
                  <span>{project.category}</span>
                </div>
                <h2 className="text-3xl font-bold mb-4 font-display group-hover:text-[var(--primary)] transition-colors">{project.title}</h2>
                <p className="text-[var(--foreground)]/60 leading-relaxed mb-6 font-medium italic">
                  "{project.description}"
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 rounded-full text-[var(--foreground)]/60 text-xs font-bold uppercase tracking-wider">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
