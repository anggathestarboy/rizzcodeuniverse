import { Project, Post } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'E-Learning Platform',
    description: 'A comprehensive web solution for students and teachers to interact, share resources, and track progress.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=1000&auto=format&fit=crop',
    tags: ['Next.js', 'Firebase', 'Tailwind'],
    link: '#',
    category: 'Web'
  },
  {
    id: '2',
    title: 'HealthTrack Mobile',
    description: 'A mobile application focused on habit tracking and health monitoring for busy professionals.',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
    tags: ['React Native', 'Supabase', 'Motion'],
    link: '#',
    category: 'Mobile'
  },
  {
    id: '3',
    title: 'Corporate Portfolio',
    description: 'Modern, high-performance landing page for a tech investment firm with a focus on clear information hierarchy.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop',
    tags: ['React', 'Framer Motion', 'SEO'],
    link: '#',
    category: 'Web'
  }
];

export const POSTS: Post[] = [
  {
    id: '1',
    title: 'Membangun Ekosistem Digital di Era 4.0',
    slug: 'membangun-ekosistem-digital',
    excerpt: 'Bagaimana usaha kecil dan profesional dapat memanfaatkan teknologi untuk berkembang di pasar global.',
    content: 'Konten lengkap mengenai strategi digital...',
    date: '2024-05-15',
    author: 'Rizzcode Team',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop',
    category: 'Tech News'
  },
  {
    id: '2',
    title: 'Pentingnya User Experience (UX) bagi Kesuksesan Aplikasi',
    slug: 'pentingnya-ux-aplikasi',
    excerpt: 'Kenapa harga terjangkau tidak boleh mengorbankan pengalaman pengguna. Simak rahasianya di sini.',
    content: 'Analisis mendalam tentang UX...',
    date: '2024-05-10',
    author: 'Rizzcode Team',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=1000&auto=format&fit=crop',
    category: 'Mobile Dev'
  }
];
