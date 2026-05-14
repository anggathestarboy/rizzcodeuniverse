"use client"

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Share2, Tag, MessageCircle } from 'lucide-react';
import { POSTS } from '../../constants';

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-6">Post Tidak Ditemukan</h1>
        <Link href="/posts" className="text-[var(--primary)] font-bold flex items-center justify-center">
          <ArrowLeft size={18} className="mr-2" /> Kembali ke Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Link href="/posts" className="inline-flex items-center text-[var(--foreground)]/60 hover:text-[var(--primary)] font-bold text-sm mb-12 transition-colors group">
            <ArrowLeft size={18} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Kembali ke Blog
          </Link>

          <div className="flex items-center space-x-4 mb-8">
            <span className="px-4 py-1.5 bg-[var(--primary)]/10 text-[var(--primary)] text-xs font-bold uppercase rounded-full tracking-widest border border-[var(--primary)]/20">
              {post.category}
            </span>
            <div className="h-1 w-1 rounded-full bg-[var(--foreground)]/20" />
            <div className="flex items-center text-[var(--foreground)]/60 text-sm font-medium uppercase tracking-wider">
              <Calendar size={14} className="mr-2" />
              {post.date}
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold font-display mb-10 leading-tight italic tracking-tighter">
            {post.title}
          </h1>

          <div className="flex items-center justify-between mb-12 pb-12 border-b border-[var(--primary)]/10">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-[var(--primary)] text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg shadow-[var(--primary)]/20">
                {post.author.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[var(--foreground)]">{post.author}</p>
                <p className="text-xs text-[var(--foreground)]/60 uppercase font-bold tracking-widest">Tech Strategist</p>
              </div>
            </div>
            <button className="p-3 rounded-full bg-[var(--foreground)]/5 hover:bg-[var(--primary)] hover:text-white transition-all text-[var(--foreground)]/60">
              <Share2 size={20} />
            </button>
          </div>

          <div className="relative aspect-video overflow-hidden rounded-[40px] mb-16 shadow-2xl border border-[var(--primary)]/10">
            <img 
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
          </div>

          <article className="prose prose-lg dark:prose-invert max-w-none text-[var(--foreground)]/80 leading-relaxed font-medium">
            <div className="bg-[var(--primary)]/5 border-l-4 border-[var(--primary)] p-8 italic rounded-r-2xl mb-12 text-xl font-display font-bold">
              "{post.excerpt}"
            </div>
            
            <div className="space-y-8 markdown-body">
              <p>
                Dalam dunia yang semakin terkoneksi, memiliki keberadaan digital yang kuat bukan lagi sekadar pilihan, melainkan sebuah kebutuhan dasar. Di Rizzcode Universe, kami melihat bagaimana teknologi dapat menjadi jembatan bagi inovasi yang luar biasa.
              </p>
              <h3 className="text-2xl font-bold font-display">Transformasi Digital untuk Semua</h3>
              <p>
                Mulai dari mahasiswa yang sedang membangun portofolio hingga pengusaha profesional yang ingin melakukan ekspansi pasar, solusi digital kami dirancang untuk inklusivitas. Kami mengutamakan pengalaman pengguna (User Experience) sebagai pondasi utama pengembangan.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
                <div className="p-8 rounded-3xl bg-foreground/5 border border-[var(--primary)]/10">
                  <h4 className="font-bold mb-4 flex items-center text-[var(--primary)]">
                    <Tag size={18} className="mr-2" /> Fleksibilitas
                  </h4>
                  <p className="text-sm opacity-70">Sistem yang kami bangun siap berkembang seiring pertumbuhan kebutuhan Anda.</p>
                </div>
                <div className="p-8 rounded-3xl bg-foreground/5 border border-[var(--primary)]/10">
                  <h4 className="font-bold mb-4 flex items-center text-[var(--primary)]">
                    <Tag size={18} className="mr-2" /> Kecepatan
                  </h4>
                  <p className="text-sm opacity-70">Optimasi performa adalah prioritas kami agar setiap milidetik waktu pengguna tidak terbuang.</p>
                </div>
              </div>
              <p>
                Kami yakin bahwa setiap baris kode yang kami tulis adalah investasi bagi masa depan digital Anda. Dengan pendekatan yang terintegrasi, Rizzcode Universe berkomitmen untuk terus menghadirkan kejutan-kejutan teknologi yang solutif.
              </p>
            </div>
          </article>

          {/* CTA at the end of post */}
          <div className="mt-20 p-12 rounded-[40px] bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white relative overflow-hidden shadow-2xl shadow-[var(--primary)]/30 group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold font-display mb-4">Ingin Membangun Sesuatu yang Luar Biasa?</h2>
              <p className="text-white/80 mb-8 max-w-xl text-lg">Konsultasikan kebutuhan digital Anda dengan tim ahli kami secara gratis hari ini.</p>
              <Link href="/contact" className="inline-flex items-center bg-white text-[var(--primary)] px-8 py-3 rounded-full font-bold hover:shadow-xl transition-all group">
                Hubungi Kami Sekarang <ArrowLeft size={18} className="ml-2 rotate-180 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Comments Section (Static Template) */}
        <div className="mt-32 pt-20 border-t border-[var(--primary)]/10">
          <div className="flex items-center space-x-3 mb-12">
            <MessageCircle size={28} className="text-[var(--primary)]" />
            <h2 className="text-3xl font-display font-bold italic tracking-tighter">Comments (2)</h2>
          </div>

          <form className="mb-16" onSubmit={(e) => e.preventDefault()}>
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] flex items-center justify-center font-bold">
                U
              </div>
              <div className="flex-grow">
                <textarea 
                  placeholder="Apa pendapat Anda tentang artikel ini?"
                  className="w-full p-6 rounded-3xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:border-[var(--primary)] outline-none transition-all resize-none min-h-[120px] font-medium"
                />
                <div className="mt-4 flex justify-end">
                  <button 
                    disabled
                    className="bg-[var(--primary)] text-white px-8 py-3 rounded-2xl font-bold flex items-center space-x-2 shadow-lg shadow-[var(--primary)]/20 opacity-50 cursor-not-allowed"
                  >
                    <span>Kirim Komentar</span>
                  </button>
                </div>
              </div>
            </div>
          </form>

          <div className="space-y-10">
            {[
              { name: 'Arief R.', text: 'Artikel yang sangat menginspirasi! Benar-benar membuka mata tentang pentingnya transformasi digital saat ini.', date: '2 hari lalu' },
              { name: 'Sarah W.', text: 'Penjelasan yang sangat jelas dan mudah dipahami. Ditunggu update selanjutnya!', date: '3 hari lalu' }
            ].map((comment, idx) => (
              <div key={idx} className="flex space-x-4 sm:space-x-6">
                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-foreground/5 border border-[var(--primary)]/10 flex items-center justify-center font-bold text-[var(--primary)]">
                  {comment.name.charAt(0)}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className="font-bold text-sm sm:text-base">{comment.name}</span>
                    <span className="text-[10px] sm:text-xs opacity-40 uppercase tracking-widest font-bold">
                      {comment.date}
                    </span>
                  </div>
                  <div className="p-5 sm:p-6 rounded-3xl bg-foreground/5 border border-[var(--foreground)]/5 text-[var(--foreground)]/80 text-sm sm:text-base leading-relaxed">
                    {comment.text}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
