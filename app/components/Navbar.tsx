"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'motion/react';
import { Moon, Sun, Menu, X, Rocket } from 'lucide-react';
import { useState } from 'react';
import { useTheme } from './ThemeContext';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/posts' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-[var(--primary)]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 20 }}
              className="p-1.5 bg-[var(--primary)] text-white rounded-lg"
            >
              <Rocket size={20} />
            </motion.div>
            <span className="text-xl font-display font-bold tracking-tighter">
              RIZZCODE<span className="text-[var(--primary)]">UNIVERSE</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--primary)]",
                  pathname === link.path ? "text-[var(--primary)]" : "text-[var(--foreground)]/70"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--primary)]/10 transition-colors text-[var(--foreground)]"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            <Link 
              href="/contact" 
              className="bg-[var(--primary)] text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-[var(--primary)]/90 transition-all shadow-md shadow-[var(--primary)]/10"
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-[var(--primary)]/10 transition-colors text-[var(--foreground)]"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[var(--foreground)]"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden glass border-b border-[var(--primary)]/10"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  pathname === link.path ? "text-[var(--primary)] bg-[var(--primary)]/5" : "text-[var(--foreground)]/70 hover:text-[var(--primary)]"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-[var(--primary)]/10 px-3">
              <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-center py-3 bg-[var(--primary)] text-white rounded-xl font-bold">Hire Us</Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
