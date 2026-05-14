import Link from 'next/link';
import { Rocket, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--background)] border-t border-[var(--primary)]/10 pt-16 pb-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2">
              <div className="p-1.5 bg-[var(--primary)] text-white rounded-lg">
                <Rocket size={20} />
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">
                RIZZCODE<span className="text-[var(--primary)]">UNIVERSE</span>
              </span>
            </Link>
            <p className="mt-4 text-[var(--foreground)]/60 max-w-sm">
              Solusi digital terbaik untuk web dan mobile development. Kami membantu Anda bertransformasi ke ranah digital dengan harga terjangkau tanpa mengorbankan kualitas.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="p-2 rounded-full border border-[var(--primary)]/20 hover:bg-[var(--primary)] hover:text-white transition-all flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-[var(--primary)]/20 hover:bg-[var(--primary)] hover:text-white transition-all flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="#" className="p-2 rounded-full border border-[var(--primary)]/20 hover:bg-[var(--primary)] hover:text-white transition-all flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Layanan</h4>
            <ul className="space-y-4 text-[var(--foreground)]/60 text-sm">
              <li><Link href="/projects" className="hover:text-[var(--primary)] transition-colors">Web Development</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--primary)] transition-colors">Mobile App Development</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--primary)] transition-colors">UI/UX Design</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--primary)] transition-colors">Digital Branding</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-lg mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-[var(--foreground)]/60 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-[var(--primary)]" />
                <span>hello@rizzcode.dev</span>
              </li>
              <li>Indonesia</li>
              <li className="mt-4 p-4 rounded-xl bg-[var(--primary)]/5 border border-[var(--primary)]/10">
                <p className="font-bold text-[var(--foreground)]">Siap untuk memulai?</p>
                <Link href="/contact" className="text-[var(--primary)] font-medium hover:underline mt-1 block">Konsultasi Gratis</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[var(--primary)]/10 text-center text-[var(--foreground)]/40 text-xs">
          <p>© {new Date().getFullYear()} Rizzcode Universe. All rights reserved. Crafted with ❤️ for Students & Professionals.</p>
        </div>
      </div>
    </footer>
  );
}
