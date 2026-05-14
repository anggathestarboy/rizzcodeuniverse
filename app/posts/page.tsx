"use client"

import { motion } from 'motion/react';
import Link from 'next/link';
import { ChevronRight, Calendar, User } from 'lucide-react';
import { POSTS } from '../constants';

export default function Blog() {
  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h1 className="text-5xl md:text-7xl font-bold font-display italic tracking-tighter mb-6">
            Post <span className="text-[var(--primary)]">Updates.</span>
          </h1>
          <p className="text-[var(--foreground)]/60 text-lg max-w-2xl leading-relaxed">
            Wawasan digital untuk membantu Anda menguasai teknologi dan mengembangkan bisnis di dunia yang terus berubah.
          </p>
        </div>

        {/* Featured Post (First one) */}
        {POSTS.length > 0 && (
          <Link href={`/posts/${POSTS[0].slug}`} className="group relative block mb-20 overflow-hidden rounded-[40px] border border-[var(--primary)]/10 shadow-xl bg-foreground/5">
            <div className="flex flex-col lg:flex-row h-full">
              <div className="lg:w-1/2 relative overflow-hidden">
                <img 
                  src={POSTS[0].image} 
                  alt={POSTS[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="lg:w-1/2 p-8 lg:p-16 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-6">
                  <span className="px-4 py-1 bg-[var(--primary)] text-white text-[10px] font-bold uppercase rounded-full tracking-widest">{POSTS[0].category}</span>
                  <div className="flex items-center text-[var(--foreground)]/40 text-xs font-medium uppercase tracking-wider">
                    <Calendar size={14} className="mr-2" />
                    {POSTS[0].date}
                  </div>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 group-hover:text-[var(--primary)] transition-colors leading-tight">
                  {POSTS[0].title}
                </h2>
                <p className="text-[var(--foreground)]/60 text-lg mb-8 leading-relaxed max-w-xl">
                  {POSTS[0].excerpt}
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-[var(--primary)]/10 rounded-full flex items-center justify-center">
                    <User size={18} className="text-[var(--primary)]" />
                  </div>
                  <span className="font-bold text-sm">{POSTS[0].author}</span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Other Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.slice(1).map((post) => (
            <motion.article
              key={post.id}
              whileHover={{ y: -5 }}
              className="flex flex-col bg-[var(--background)] rounded-3xl border border-[var(--primary)]/10 overflow-hidden shadow-sm hover:shadow-lg transition-all"
            >
              <Link href={`/posts/${post.slug}`} className="block relative aspect-video overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-background/90 backdrop-blur-md rounded-full text-[var(--primary)] text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
              </Link>
              <div className="p-8">
                <div className="flex items-center text-[var(--foreground)]/40 text-[10px] font-bold uppercase tracking-widest mb-4">
                  <Calendar size={12} className="mr-2" />
                  {post.date}
                </div>
                <h3 className="text-xl font-bold mb-4 font-display hover:text-[var(--primary)] transition-colors">
                  <Link href={`/posts/${post.slug}`}>{post.title}</Link>
                </h3>
                <p className="text-[var(--foreground)]/60 text-sm mb-6 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <Link href={`/posts/${post.slug}`} className="inline-flex items-center text-[var(--primary)] font-bold text-sm group">
                  Baca Selengkapnya
                  <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
