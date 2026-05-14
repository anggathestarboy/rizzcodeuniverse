"use client"

import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', description: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call for template
    setTimeout(() => {
      setSuccess(true);
      setFormData({ name: '', email: '', description: '' });
      setLoading(false);
      setTimeout(() => setSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/2">
            <h1 className="text-5xl md:text-7xl font-bold font-display italic tracking-tighter mb-8">
              Let's <span className="text-[var(--primary)] text-glow">Connect.</span>
            </h1>
            <p className="text-[var(--foreground)]/60 text-lg mb-12 leading-relaxed max-w-xl">
              Punya ide brilian atau butuh bantuan teknis? Tim kami siap mendengarkan dan mewujudkan visi digital Anda.
            </p>

            <div className="space-y-10">
              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Kami</h4>
                  <p className="text-[var(--foreground)]/60">hello@rizzcode.dev</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">WhatsApp</h4>
                  <p className="text-[var(--foreground)]/60">+62 812 3456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 group">
                <div className="p-4 bg-[var(--primary)]/10 text-[var(--primary)] rounded-2xl group-hover:bg-[var(--primary)] group-hover:text-white transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Lokasi</h4>
                  <p className="text-[var(--foreground)]/60">Semarang, Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <motion.form 
              onSubmit={handleSubmit}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 md:p-12 glass border border-[var(--primary)]/10 rounded-[40px] shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--primary)]/5 rounded-bl-full pointer-events-none" />
              
              {success && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-green-500 font-bold text-center">
                  Pesan terkirim! Tim kami akan segera menghubungi Anda.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--foreground)]/60 uppercase tracking-widest pl-4">Nama Lengkap</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:border-[var(--primary)] transition-all outline-none font-medium"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[var(--foreground)]/60 uppercase tracking-widest pl-4">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-6 py-4 rounded-2xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:border-[var(--primary)] transition-all outline-none font-medium"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <label className="text-sm font-bold text-[var(--foreground)]/60 uppercase tracking-widest pl-4">Pesan Anda</label>
                <textarea 
                  rows={4}
                  placeholder="Ceritakan projek Anda..."
                  value={formData.description}
                  onChange={e => setFormData({...formData, description: e.target.value})}
                  className="w-full px-6 py-4 rounded-3xl bg-[var(--foreground)]/5 border border-[var(--foreground)]/10 focus:border-[var(--primary)] transition-all outline-none font-medium resize-none"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-[var(--primary)] text-white py-5 rounded-2xl font-bold text-lg shadow-xl shadow-[var(--primary)]/20 hover:bg-[var(--primary-dark)] transition-all flex items-center justify-center group space-x-3 disabled:opacity-50"
              >
                <span>{loading ? 'Mengirim...' : 'Kirim Pesan'}</span>
                {!loading && <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
              </button>
              
              <div className="mt-8 flex items-center justify-center space-x-2 text-[var(--foreground)]/40 text-sm">
                <MessageSquare size={16} />
                <span>Rata-rata balasan: 2 jam</span>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </div>
  );
}
