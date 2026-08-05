export type Language = 'en' | 'hi';

export interface Service {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'general' | 'women' | 'chronic' | 'preventive' | 'diagnostic';
  iconName: string;
  shortDescEn: string;
  shortDescHi: string;
  fullDescEn: string;
  fullDescHi: string;
  preparationEn?: string;
  preparationHi?: string;
  popular?: boolean;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  commentEn: string;
  commentHi: string;
  tag: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  titleEn: string;
  titleHi: string;
  category: 'all' | 'reception' | 'consultation' | 'treatment' | 'equipment' | 'environment';
  imageUrl: string;
  descriptionEn: string;
  descriptionHi: string;
}

export interface FAQItem {
  id: string;
  questionEn: string;
  questionHi: string;
  answerEn: string;
  answerHi: string;
  category: string;
}

export interface AppointmentData {
  id: string;
  fullName: string;
  phone: string;
  email?: string;
  serviceId: string;
  serviceName: string;
  date: string;
  timeSlot: string;
  message?: string;
  createdAt: string;
  status: 'Confirmed' | 'Pending';
}
