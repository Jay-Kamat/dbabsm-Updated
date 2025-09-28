export interface Member {
  id: string;
  name: string;
  nameMarathi: string;
  role: string;
  roleMarathi: string;
  photo: string;
  contact?: string;
  email?: string;
}

export interface Event {
  id: string;
  title: string;
  titleMarathi: string;
  description: string;
  descriptionMarathi: string;
  date: string;
  time: string;
  location: string;
  locationMarathi: string;
  image: string;
  category: 'festival' | 'educational' | 'community';
}

export interface Activity {
  id: string;
  title: string;
  titleMarathi: string;
  description: string;
  descriptionMarathi: string;
  images: string[];
  videos?: string[];
  category: 'meditation' | 'awareness' | 'welfare' | 'religious';
  date: string;
}

export interface GalleryItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  titleMarathi: string;
  description: string;
  descriptionMarathi: string;
  category: string;
  date: string;
}

export interface Teaching {
  id: string;
  title: string;
  titleMarathi: string;
  author: 'Buddha' | 'Ambedkar';
  content: string;
  contentMarathi: string;
  category: 'quote' | 'teaching' | 'principle';
  source?: string;
}

export type Language = 'en' | 'mr';