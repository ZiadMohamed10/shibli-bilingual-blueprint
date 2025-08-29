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
  'common.reset': { ar: 'إعادة تعيين', en: 'Reset' },
  'common.fullTime': { ar: 'دوام كامل', en: 'Full Time' },
  'common.years': { ar: 'سنوات', en: 'Years' },
  'common.required': { ar: '*', en: '*' },

  // Careers Page
  'careers.title': { ar: 'الوظائف', en: 'Careers' },
  'careers.subtitle': { ar: 'انضم إلى فريق العمل المتميز وكن جزءاً من مستقبل البناء والتعمير في مصر', en: 'Join our outstanding team and be part of the future of construction and development in Egypt' },
  'careers.whyWorkWithUs': { ar: 'لماذا تعمل معنا؟', en: 'Why Work With Us?' },
  'careers.whyWorkWithUsDesc': { ar: 'نؤمن بأن الموظفين هم أساس نجاح الشركة، ونسعى لتوفير بيئة عمل مثالية', en: 'We believe that employees are the foundation of company success, and we strive to provide an ideal work environment' },
  'careers.availableJobs': { ar: 'الوظائف المتاحة', en: 'Available Jobs' },
  'careers.availableJobsDesc': { ar: 'تصفح الفرص الوظيفية المتاحة وانضم إلى فريق العمل', en: 'Browse available job opportunities and join our team' },
  'careers.requirements': { ar: 'المتطلبات:', en: 'Requirements:' },
  'careers.applicationForm': { ar: 'تقدم بطلب توظيف', en: 'Apply for a Job' },
  'careers.applicationFormDesc': { ar: 'املأ النموذج التالي وسنتواصل معك في أقرب وقت', en: 'Fill out the following form and we will contact you soon' },
  'careers.fullName': { ar: 'الاسم الكامل', en: 'Full Name' },
  'careers.position': { ar: 'الوظيفة المطلوبة', en: 'Position Applied For' },
  'careers.experience': { ar: 'سنوات الخبرة', en: 'Years of Experience' },
  'careers.education': { ar: 'المؤهل العلمي', en: 'Education' },
  'careers.coverLetter': { ar: 'خطاب التغطية', en: 'Cover Letter' },
  'careers.uploadCV': { ar: 'رفع السيرة الذاتية', en: 'Upload CV' },
  'careers.uploadCVDesc': { ar: 'اضغط لرفع السيرة الذاتية أو اسحب الملف هنا', en: 'Click to upload CV or drag file here' },
  'careers.fileFormats': { ar: 'PDF, DOC, DOCX (الحد الأقصى 5 MB)', en: 'PDF, DOC, DOCX (Max 5 MB)' },
  'careers.hrContact': { ar: 'هل لديك استفسارات حول التوظيف؟', en: 'Do you have questions about employment?' },
  'careers.hrContactDesc': { ar: 'تواصل مع قسم الموارد البشرية للحصول على المزيد من المعلومات', en: 'Contact the Human Resources department for more information' },
  'careers.contactHR': { ar: 'تواصل مع الموارد البشرية', en: 'Contact HR' },
  'careers.callUs': { ar: 'أو اتصل على:', en: 'Or call us:' },

  // Job Benefits
  'benefits.competitiveSalary': { ar: 'راتب تنافسي', en: 'Competitive Salary' },
  'benefits.competitiveSalaryDesc': { ar: 'نقدم رواتب تنافسية تتناسب مع الخبرة والكفاءة', en: 'We offer competitive salaries that match experience and competence' },
  'benefits.professionalDevelopment': { ar: 'التطوير المهني', en: 'Professional Development' },
  'benefits.professionalDevelopmentDesc': { ar: 'برامج تدريبية وتطويرية مستمرة لرفع مستوى الأداء', en: 'Continuous training and development programs to enhance performance' },
  'benefits.workEnvironment': { ar: 'بيئة عمل محفزة', en: 'Motivating Work Environment' },
  'benefits.workEnvironmentDesc': { ar: 'بيئة عمل إيجابية تشجع على الإبداع والابتكار', en: 'Positive work environment that encourages creativity and innovation' },
  'benefits.workFlexibility': { ar: 'مرونة في العمل', en: 'Work Flexibility' },
  'benefits.workFlexibilityDesc': { ar: 'ساعات عمل مرنة وإمكانية العمل من المنزل عند الحاجة', en: 'Flexible working hours and the possibility of working from home when needed' },

  // Job Positions
  'jobs.seniorCivilEngineer': { ar: 'مهندس مدني أول', en: 'Senior Civil Engineer' },
  'jobs.architect': { ar: 'مهندس معماري', en: 'Architect' },
  'jobs.projectManager': { ar: 'مدير مشروع', en: 'Project Manager' },
  'jobs.electricalEngineer': { ar: 'مهندس كهرباء', en: 'Electrical Engineer' },

  // Departments
  'dept.engineering': { ar: 'الهندسة', en: 'Engineering' },
  'dept.architecture': { ar: 'التصميم المعماري', en: 'Architectural Design' },
  'dept.projectManagement': { ar: 'إدارة المشروعات', en: 'Project Management' },
  'dept.electrical': { ar: 'الهندسة الكهربائية', en: 'Electrical Engineering' },

  // Locations
  'location.newDamietta': { ar: 'دمياط الجديدة، مصر', en: 'New Damietta, Egypt' },

  // Experience Levels
  'exp.5to8years': { ar: '5-8 سنوات', en: '5-8 Years' },
  'exp.3to5years': { ar: '3-5 سنوات', en: '3-5 Years' },
  'exp.7to10years': { ar: '7-10 سنوات', en: '7-10 Years' },
  'exp.2to4years': { ar: '2-4 سنوات', en: '2-4 Years' },

  // Placeholders
  'placeholder.fullName': { ar: 'ادخل اسمك الكامل', en: 'Enter your full name' },
  'placeholder.email': { ar: 'example@email.com', en: 'example@email.com' },
  'placeholder.phone': { ar: '+20 xxx xxx xxxx', en: '+20 xxx xxx xxxx' },
  'placeholder.position': { ar: 'مثال: مهندس مدني', en: 'Example: Civil Engineer' },
  'placeholder.experience': { ar: 'مثال: 5 سنوات', en: 'Example: 5 years' },
  'placeholder.education': { ar: 'مثال: بكالوريوس هندسة مدنية', en: 'Example: Bachelor of Civil Engineering' },
  'placeholder.coverLetter': { ar: 'اكتب نبذة عن خبراتك وسبب اهتمامك بالوظيفة...', en: 'Write about your experience and why you are interested in this position...' },

  // Job Descriptions
  'job.seniorCivilEngineer.desc': { ar: 'نبحث عن مهندس مدني ذي خبرة للإشراف على مشروعات البنية التحتية والجسور', en: 'We are looking for an experienced civil engineer to supervise infrastructure and bridge projects' },
  'job.architect.desc': { ar: 'للعمل في تصميم المشروعات السكنية والمرافق العامة', en: 'To work in the design of residential projects and public facilities' },
  'job.projectManager.desc': { ar: 'لإدارة وتنسيق المشروعات الكبيرة وضمان تسليمها في الوقت المحدد', en: 'To manage and coordinate large projects and ensure their delivery on time' },
  'job.electricalEngineer.desc': { ar: 'للعمل في تصميم وتنفيذ الأنظمة الكهربائية للمشروعات', en: 'To work in the design and implementation of electrical systems for projects' },

  // Job Requirements
  'job.seniorCivilEngineer.req1': { ar: 'بكالوريوس هندسة مدنية', en: 'Bachelor of Civil Engineering' },
  'job.seniorCivilEngineer.req2': { ar: 'خبرة لا تقل عن 5 سنوات', en: 'Minimum 5 years of experience' },
  'job.seniorCivilEngineer.req3': { ar: 'إجادة برامج التصميم الهندسي', en: 'Proficiency in engineering design software' },
  'job.seniorCivilEngineer.req4': { ar: 'مهارات قيادة فريق العمل', en: 'Team leadership skills' },

  'job.architect.req1': { ar: 'بكالوريوس هندسة معمارية', en: 'Bachelor of Architecture' },
  'job.architect.req2': { ar: 'خبرة في المشروعات السكنية', en: 'Experience in residential projects' },
  'job.architect.req3': { ar: 'إتقان برامج التصميم المعماري', en: 'Mastery of architectural design software' },
  'job.architect.req4': { ar: 'إبداع في التصميم', en: 'Creativity in design' },

  'job.projectManager.req1': { ar: 'بكالوريوس هندسة أو إدارة أعمال', en: 'Bachelor of Engineering or Business Administration' },
  'job.projectManager.req2': { ar: 'خبرة واسعة في إدارة المشروعات', en: 'Extensive experience in project management' },
  'job.projectManager.req3': { ar: 'شهادات إدارة المشروعات (PMP مفضلة)', en: 'Project management certifications (PMP preferred)' },
  'job.projectManager.req4': { ar: 'مهارات تواصل وقيادة متميزة', en: 'Excellent communication and leadership skills' },

  'job.electricalEngineer.req1': { ar: 'بكالوريوس هندسة كهرباء', en: 'Bachelor of Electrical Engineering' },
  'job.electricalEngineer.req2': { ar: 'معرفة بالأنظمة الكهربائية للمباني', en: 'Knowledge of building electrical systems' },
  'job.electricalEngineer.req3': { ar: 'خبرة في التصميم الكهربائي', en: 'Experience in electrical design' },
  'job.electricalEngineer.req4': { ar: 'إلمام بالكودات المصرية', en: 'Familiarity with Egyptian codes' },
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