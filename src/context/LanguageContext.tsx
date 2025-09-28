import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    events: 'Events & Updates',
    activities: 'Activities',
    vihar: 'New Vihar Construction',
    members: 'Body Members',
    gallery: 'Gallery',
    teachings: 'Teachings & Resources',
    contact: 'Contact Us',
    
    // Homepage
    heroTitle: 'Dr. Babasaheb Ambedkar Bouddha Sanskar Mandal',
    heroSubtitle: 'Preserving Buddhist Values & Dr. Ambedkar\'s Vision',
    mission: 'Mission',
    vision: 'Vision',
    missionText: 'To promote Buddhist teachings and Dr. Ambedkar\'s principles of equality, education, and social justice in our community.',
    visionText: 'A society based on Buddhist values of compassion, wisdom, and social harmony, following Dr. Ambedkar\'s path of enlightenment.',
    
    // Common
    learnMore: 'Learn More',
    readMore: 'Read More',
    viewAll: 'View All',
    register: 'Register',
    donate: 'Donate',
    submit: 'Submit',
    cancel: 'Cancel',
    loading: 'Loading...',
    
    // About
    aboutTitle: 'About Our Organization',
    historyTitle: 'Our History',
    achievementsTitle: 'Our Achievements',
    
    // Events
    upcomingEvents: 'Upcoming Events',
    pastEvents: 'Past Events',
    eventRegistration: 'Event Registration',
    
    // Activities
    activitiesTitle: 'Our Activities',
    meditationCamps: 'Meditation Camps',
    awarenessPrograms: 'Awareness Programs',
    communityWelfare: 'Community Welfare',
    
    // Members
    membersTitle: 'Our Committee Members',
    president: 'President',
    secretary: 'Secretary',
    treasurer: 'Treasurer',
    
    // Gallery
    galleryTitle: 'Photo & Video Gallery',
    photos: 'Photos',
    videos: 'Videos',
    
    // Teachings
    teachingsTitle: 'Teachings & Resources',
    buddhaTeachings: 'Buddha\'s Teachings',
    ambedkarTeachings: 'Dr. Ambedkar\'s Teachings',
    digitalResources: 'Digital Resources',
    
    // Contact
    contactTitle: 'Contact Us',
    getInTouch: 'Get in Touch',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    sendMessage: 'Send Message',
    
    // Vihar Construction
    viharTitle: 'New Vihar Construction Project',
    constructionProgress: 'Construction Progress',
    architecturalPlans: 'Architectural Plans',
    donationDetails: 'Donation Details',
  },
  mr: {
    // Navigation
    home: 'मुख्यपृष्ठ',
    about: 'आमच्याबद्दल',
    events: 'कार्यक्रम आणि अपडेट्स',
    activities: 'क्रियाकलाप',
    vihar: 'नवीन विहार बांधकाम',
    members: 'समिती सदस्य',
    gallery: 'गॅलरी',
    teachings: 'शिकवणी आणि संसाधने',
    contact: 'संपर्क',
    
    // Homepage
    heroTitle: 'डॉ. बाबासाहेब आंबेडकर बौद्ध संस्कार मंडळ',
    heroSubtitle: 'बौद्ध मूल्ये आणि डॉ. आंबेडकरांच्या दृष्टीकोनाचे जतन',
    mission: 'ध्येय',
    vision: 'दृष्टी',
    missionText: 'आमच्या समुदायात बौद्ध शिकवणी आणि समानता, शिक्षण आणि सामाजिक न्यायाच्या डॉ. आंबेडकरांच्या तत्त्वांचा प्रचार करणे.',
    visionText: 'डॉ. आंबेडकरांच्या ज्ञानाच्या मार्गावर चालत करुणा, ज्ञान आणि सामाजिक सौहार्द्याच्या बौद्ध मूल्यांवर आधारित समाज.',
    
    // Common
    learnMore: 'अधिक जाणून घ्या',
    readMore: 'अधिक वाचा',
    viewAll: 'सर्व पहा',
    register: 'नोंदणी करा',
    donate: 'देणगी द्या',
    submit: 'सबमिट करा',
    cancel: 'रद्द करा',
    loading: 'लोड होत आहे...',
    
    // About
    aboutTitle: 'आमच्या संघटनेबद्दल',
    historyTitle: 'आमचा इतिहास',
    achievementsTitle: 'आमची उपलब्धी',
    
    // Events
    upcomingEvents: 'आगामी कार्यक्रम',
    pastEvents: 'मागील कार्यक्रम',
    eventRegistration: 'कार्यक्रम नोंदणी',
    
    // Activities
    activitiesTitle: 'आमचे क्रियाकलाप',
    meditationCamps: 'ध्यान शिबिरे',
    awarenessPrograms: 'जागरूकता कार्यक्रम',
    communityWelfare: 'समुदायिक कल्याण',
    
    // Members
    membersTitle: 'आमचे समिती सदस्य',
    president: 'अध्यक्ष',
    secretary: 'सचिव',
    treasurer: 'खजिनदार',
    
    // Gallery
    galleryTitle: 'फोटो आणि व्हिडिओ गॅलरी',
    photos: 'फोटो',
    videos: 'व्हिडिओ',
    
    // Teachings
    teachingsTitle: 'शिकवणी आणि संसाधने',
    buddhaTeachings: 'बुद्धांची शिकवणी',
    ambedkarTeachings: 'डॉ. आंबेडकरांची शिकवणी',
    digitalResources: 'डिजिटल संसाधने',
    
    // Contact
    contactTitle: 'आमच्याशी संपर्क साधा',
    getInTouch: 'संपर्कात रहा',
    address: 'पत्ता',
    phone: 'फोन',
    email: 'ईमेल',
    sendMessage: 'संदेश पाठवा',
    
    // Vihar Construction
    viharTitle: 'नवीन विहार बांधकाम प्रकल्प',
    constructionProgress: 'बांधकाम प्रगती',
    architecturalPlans: 'स्थापत्य योजना',
    donationDetails: 'देणगी तपशील',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'mr' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};