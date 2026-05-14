"use client"

import { motion } from 'motion/react';
import { ArrowRight, Code, Laptop, Smartphone, Rocket, CheckCircle2, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { PROJECTS, POSTS } from './constants';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-[var(--primary)] rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-3/5"
            >
              <div className="inline-flex items-center space-x-2 bg-[var(--primary)]/5 border border-[var(--primary)]/20 px-4 py-2 rounded-full text-[var(--primary)] text-sm font-semibold mb-6">
                <Rocket size={16} />
                <span>Modern Coding Standards</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-display leading-[1.1] mb-6">
                Masa Depan <span className="text-[var(--primary)] text-glow">Digital</span> Anda Dimulai Di Sini.
              </h1>
              <p className="text-xl text-[var(--foreground)]/70 mb-10 max-w-2xl leading-relaxed">
                Kami membangun aplikasi yang luar biasa, intuitif, dan terjangkau. Dari ide sederhana menjadi solusi nyata bagi siswa hingga kalangan profesional.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/projects" 
                  className="bg-[var(--primary)] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-[var(--primary)]/20 transition-all flex items-center group"
                >
                  Lihat Portofolio
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/contact" 
                  className="bg-transparent border-2 border-[var(--foreground)]/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-[var(--foreground)]/5 transition-all"
                >
                  Konsultasi Gratis
                </Link>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:w-2/5 relative"
            >
              <div className="relative z-10 p-4 bg-background rounded-3xl shadow-2xl border border-[var(--primary)]/10">
                <img 
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop" 
                  alt="App Development" 
                  className="rounded-2xl"
                />
                <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl hidden sm:block">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-green-500 text-white rounded-xl">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg">99% Satisfaction</p>
                      <p className="text-sm opacity-70">Happy Clients</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-[var(--foreground)]/5 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Layanan <span className="text-[var(--primary)]">Universe</span> Kami.</h2>
            <p className="text-[var(--foreground)]/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Kami memadukan estetika desain dengan kecanggihan teknologi untuk menciptakan produk digital yang relevan bagi semua kalangan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Laptop />, title: 'Web Development', desc: 'Situs web modern, responsif, dan SEO friendly menggunakan teknologi terbaru seperti React & Next.js.' },
              { icon: <Smartphone />, title: 'Mobile Apps', desc: 'Aplikasi Android & iOS yang kencang dan intuitif untuk bisnis atau kebutuhan personal Anda.' },
              { icon: <Code />, title: 'Custom Solutions', desc: 'Sistem manajemen data, integrasi API, dan automasi yang disesuaikan dengan alur kerja Anda.' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -10 }}
                className="p-10 bg-[var(--background)] rounded-3xl border border-[var(--primary)]/10 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl mb-8 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-[var(--foreground)]/60 leading-relaxed font-medium">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold">Karya Unggulan Kami.</h2>
              <p className="text-[var(--foreground)]/60 mt-4 text-lg">Melihat projek yang lahir dari visi kami.</p>
            </div>
            <Link href="/projects" className="text-[var(--primary)] font-bold flex items-center group">
              Lihat Semua Projek <ChevronRight size={20} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-foreground/5 border border-[var(--primary)]/5">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                  <span className="text-[var(--primary)] font-bold text-xs uppercase tracking-widest mb-2">{project.category}</span>
                  <h3 className="text-white text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-white text-[10px] uppercase font-bold tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post Preview Section */}
      <section className="py-32 bg-[var(--primary)]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 italic">The <span className="text-[var(--primary)]">Code</span> Journal.</h2>
            <p className="text-[var(--foreground)]/60">Insight digital, berita teknologi, dan update terbaru.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {POSTS.map(post => (
              <motion.article 
                key={post.id}
                whileHover={{ x: 10 }}
                className="flex flex-col sm:flex-row gap-6 p-6 glass rounded-3xl border border-[var(--primary)]/10"
              >
                <div className="sm:w-1/3">
                  <img src={post.image} alt={post.title} className="w-full aspect-square object-cover rounded-2xl" />
                </div>
                <div className="sm:w-2/3 flex flex-col justify-center">
                  <span className="text-[var(--primary)] font-bold text-[10px] uppercase mb-2">{post.category} — {post.date}</span>
                  <h3 className="text-xl font-bold mb-3 hover:text-[var(--primary)] transition-colors">
                    <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-[var(--foreground)]/60 text-sm line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <Link href={`/posts/${post.slug}`} className="text-sm font-bold flex items-center">
                    Baca Selengkapnya <ChevronRight size={16} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Simple Stats for SEO/Trust */}
      <section className="py-20 border-y border-[var(--primary)]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: '50+', label: 'Projek Selesai' },
              { val: '15+', label: 'Client Aktif' },
              { val: '3+', label: 'Tahun Pengalaman' },
              { val: '24/7', label: 'Dukungan Teknis' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-display font-bold text-[var(--primary)] mb-2 italic tracking-tighter">
                  {stat.val}
                </p>
                <p className="text-sm font-medium opacity-50 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
