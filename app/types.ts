export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  category: 'Web' | 'Mobile' | 'Design';
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}

export interface UserProfile {
  uid: string;
  email: string;
  role: 'member' | 'admin';
  name: string;
  createdAt: string;
}

export interface Comment {
  id: string;
  postId: string;
  userId: string;
  userName: string;
  text: string;
  createdAt: string;
}

export interface Consultation {
  id: string;
  name: string;
  email: string;
  description: string;
  createdAt: string;
}
