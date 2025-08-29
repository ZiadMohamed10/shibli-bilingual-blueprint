import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

const translations: Translations = {
  // Navigation
  'nav.home': { ar: 'الرئيسية', en: 'Home' },
  'nav.about': { ar: 'من نحن', en: 'About' },
  'nav.services': { ar: 'خدماتنا', en: 'Services' },
  'nav.projects': { ar: 'المشروعات', en: 'Projects' },
  'nav.careers': { ar: 'الوظائف', en: 'Careers' },
  'nav.contact': { ar: 'اتصل بنا', en: 'Contact' },

  // Company Info
  'company.name': { ar: 'شركة الشبلي للمقاولات والتعمير', en: 'Shibli Construction and Development Company' },
  'company.slogan': { ar: 'نبني المستقبل.. نصنع التنمية', en: 'Building the Future, Driving Development' },
  'company.description': { ar: 'شركة رائدة في مجال المقاولات والبناء والتعمير في جمهورية مصر العربية', en: 'Leading construction and development company in the Arab Republic of Egypt' },

  // Hero Section
  'hero.title': { ar: 'نبني المستقبل.. نصنع التنمية', en: 'Building the Future, Driving Development' },
  'hero.subtitle': { ar: 'شريكك الموثوق في مشروعات البنية التحتية الوطنية', en: 'Your trusted partner in national infrastructure projects' },
  'hero.cta': { ar: 'تصفح مشروعاتنا', en: 'Explore Our Projects' },

  // Services
  'services.title': { ar: 'خدماتنا', en: 'Our Services' },
  'services.bridges': { ar: 'بناء الجسور والطرق', en: 'Bridge and Road Construction' },
  'services.housing': { ar: 'المشروعات السكنية', en: 'Housing Projects' },
  'services.infrastructure': { ar: 'تطوير البنية التحتية', en: 'Infrastructure Development' },
  'services.facilities': { ar: 'المرافق العامة', en: 'Public Facilities' },

  // About
  'about.title': { ar: 'من نحن', en: 'About Us' },
  'about.mission': { ar: 'مهمتنا', en: 'Our Mission' },
  'about.vision': { ar: 'رؤيتنا', en: 'Our Vision' },
  'about.values': { ar: 'قيمنا', en: 'Our Values' },

  // Contact
  'contact.title': { ar: 'اتصل بنا', en: 'Contact Us' },
  'contact.address': { ar: 'دمياط الجديدة، مصر', en: 'New Damietta, Egypt' },
  'contact.phone': { ar: 'الهاتف', en: 'Phone' },
  'contact.email': { ar: 'البريد الإلكتروني', en: 'Email' },

  // Common
  'common.more': { ar: 'المزيد', en: 'More' },
  'common.details': { ar: 'التفاصيل', en: 'Details' },
  'common.readMore': { ar: 'اقرأ المزيد', en: 'Read More' },
  'common.apply': { ar: 'تقدم الآن', en: 'Apply Now' },
  'common.submit': { ar: 'إرسال', en: 'Submit' },
  'common.name': { ar: 'الاسم', en: 'Name' },
  'common.email': { ar: 'البريد الإلكتروني', en: 'Email' },
  'common.phone': { ar: 'رقم الهاتف', en: 'Phone' },
  'common.message': { ar: 'الرسالة', en: 'Message' },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>('ar');

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  useEffect(() => {
    document.dir = direction;
    document.documentElement.lang = language;
  }, [direction, language]);

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};