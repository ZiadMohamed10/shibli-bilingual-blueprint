import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type Language = 'ar' | 'en';
export type Direction = 'rtl' | 'ltr';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  tArray: (key: string) => string[];
}

interface Translations {
  [key: string]: {
    ar: string;
    en: string;
  };
}

interface ArrayTranslations {
  [key: string]: {
    ar: string[];
    en: string[];
  };
}

const arrayTranslations: ArrayTranslations = {
  'services.bridgesFeatures': {
    ar: [
      'تصميم الجسور المعلقة والكباري',
      'إنشاء الطرق السريعة والدائرية',
      'أعمال الرصف والبنية التحتية للطرق',
      'صيانة وتطوير الطرق الموجودة',
    ],
    en: [
      'Design of suspension bridges and overpasses',
      'Construction of highways and ring roads',
      'Road paving and infrastructure work',
      'Maintenance and development of existing roads',
    ]
  },
  'services.housingFeatures': {
    ar: [
      'مجمعات سكنية متكاملة',
      'الوحدات السكنية الاقتصادية',
      'المباني الإدارية والتجارية',
      'مشروعات الإسكان الاجتماعي',
    ],
    en: [
      'Integrated residential complexes',
      'Affordable housing units',
      'Administrative and commercial buildings',
      'Social housing projects',
    ]
  },
  'services.infrastructureFeatures': {
    ar: [
      'شبكات المياه والصرف الصحي',
      'شبكات الكهرباء والاتصالات',
      'تخطيط وتطوير المناطق الحضرية',
      'البنية التحتية للمدن الجديدة',
    ],
    en: [
      'Water and sewage networks',
      'Electricity and telecommunications networks',
      'Urban area planning and development',
      'Infrastructure for new cities',
    ]
  },
  'services.facilitiesFeatures': {
    ar: [
      'المستشفيات والمراكز الطبية',
      'المدارس والجامعات',
      'المراكز التجارية والترفيهية',
      'المرافق الرياضية والثقافية',
    ],
    en: [
      'Hospitals and medical centers',
      'Schools and universities',
      'Commercial and entertainment centers',
      'Sports and cultural facilities',
    ]
  },
  'contact.addressDetails': {
    ar: [
      'دمياط الجديدة، محافظة دمياط',
      'جمهورية مصر العربية',
      'الرمز البريدي: 34517',
    ],
    en: [
      'New Damietta, Damietta Governorate',
      'Arab Republic of Egypt',
      'Postal Code: 34517',
    ]
  },
  'contact.phoneDetails': {
    ar: [
      '+20 57 xxx-xxxx',
      '+20 57 xxx-xxxx (فاكس)',
      'الخط الساخن: 19xxx',
    ],
    en: [
      '+20 57 xxx-xxxx',
      '+20 57 xxx-xxxx (Fax)',
      'Hotline: 19xxx',
    ]
  },
  'contact.emailDetails': {
    ar: [
      'info@shibli-construction.com',
      'projects@shibli-construction.com',
      'hr@shibli-construction.com',
    ],
    en: [
      'info@shibli-construction.com',
      'projects@shibli-construction.com',
      'hr@shibli-construction.com',
    ]
  },
  'contact.workingHoursDetails': {
    ar: [
      'الأحد - الخميس: 8:00 - 17:00',
      'الجمعة: 9:00 - 14:00',
      'السبت: مغلق',
    ],
    en: [
      'Sunday - Thursday: 8:00 - 17:00',
      'Friday: 9:00 - 14:00',
      'Saturday: Closed',
    ]
  },
  'contact.locationDirections': {
    ar: [
      '5 دقائق من محطة قطار دمياط الجديدة',
      '10 دقائق من مطار دمياط الجديد',
      'مواقف مجانية متاحة',
    ],
    en: [
      '5 minutes from New Damietta train station',
      '10 minutes from New Damietta airport',
      'Free parking available',
    ]
  }
};

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
  'contact.phone': { ar: 'الهاتف', en: 'Phone' },
  'contact.email': { ar: 'البريد الإلكتروني', en: 'Email' },
  
  // Footer
  'footer.quickLinks': { ar: 'روابط سريعة', en: 'Quick Links' },
  'footer.address': { ar: 'العنوان', en: 'Address' },
  'footer.workingHours': { ar: 'ساعات العمل', en: 'Working Hours' },
  'footer.privacyPolicy': { ar: 'سياسة الخصوصية', en: 'Privacy Policy' },
  'footer.termsConditions': { ar: 'الشروط والأحكام', en: 'Terms & Conditions' },
  'footer.copyrightText': { ar: '© 2025 شركة الشبلي للمقاولات والتعمير. جميع الحقوق محفوظة.', en: '© 2025 Al-Shibli Construction & Development Company. All rights reserved.' },
  
  // Management Team Names
  'team.ahmed': { ar: 'المهندس / أحمد الشبلي', en: 'Eng. Ahmed Al-Shibli' },
  'team.mohamed': { ar: 'المهندس / محمد الشبلي', en: 'Eng. Mohamed Al-Shibli' },
  'team.fatima': { ar: 'المهندسة / فاطمة الشبلي', en: 'Eng. Fatima Al-Shibli' },
  
  // Project Dates and Budget Labels
  'projects.projectDate': { ar: 'تاريخ المشروع', en: 'Project Date' },
  'projects.projectBudget': { ar: 'الميزانية', en: 'Budget' },
  
  // Specific Project Dates
  'projects.newDamiettaBridgeDate': { ar: 'يناير 2023 - ديسمبر 2024', en: 'January 2023 - December 2024' },
  'projects.newDamiettaBridgeBudget': { ar: '500 مليون جنيه', en: '500 Million EGP' },
  'projects.integratedHousingPhase2Date': { ar: 'مارس 2024 - مارس 2026', en: 'March 2024 - March 2026' },
  'projects.integratedHousingPhase2Budget': { ar: '300 مليون جنيه', en: '300 Million EGP' },
  'projects.roadNetworkDate': { ar: 'يونيو 2024 - يونيو 2025', en: 'June 2024 - June 2025' },
  'projects.roadNetworkBudget': { ar: '150 مليون جنيه', en: '150 Million EGP' },

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
  'common.namePlaceholder': { ar: 'ادخل اسمك الكامل', en: 'Enter your full name' },
  'common.emailPlaceholder': { ar: 'example@email.com', en: 'example@email.com' },
  'common.phonePlaceholder': { ar: '+20 xxx xxx xxxx', en: '+20 xxx xxx xxxx' },

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

  // Home Page
  'home.servicesSubtitle': { ar: 'نقدم حلولاً متكاملة في مجال المقاولات والتعمير', en: 'We provide comprehensive solutions in construction and development' },
  'home.viewAllServices': { ar: 'عرض جميع الخدمات', en: 'View All Services' },
  'home.featuredProjects': { ar: 'مشروعات مميزة', en: 'Featured Projects' },
  'home.featuredProjectsSubtitle': { ar: 'نفخر بتنفيذ مشروعات استراتيجية تخدم التنمية الوطنية', en: 'We pride ourselves on executing strategic projects that serve national development' },
  'home.viewAllProjects': { ar: 'عرض جميع المشروعات', en: 'View All Projects' },
  'home.whyChooseShibli': { ar: 'لماذا تختار شركة الشبلي؟', en: 'Why Choose Shibli Company?' },
  'home.whyChooseDescription': { ar: 'مع خبرة تمتد لسنوات في مجال المقاولات والتعمير، نلتزم بتقديم أعلى معايير الجودة والكفاءة في تنفيذ المشروعات الحيوية التي تخدم التنمية الشاملة.', en: 'With years of experience in construction and development, we are committed to providing the highest standards of quality and efficiency in executing vital projects that serve comprehensive development.' },
  'home.experienceYears': { ar: 'سنوات خبرة', en: 'Years of Experience' },
  'home.completedProjects': { ar: 'مشروع مكتمل', en: 'Completed Projects' },
  'home.satisfiedClients': { ar: 'عميل راضي', en: 'Satisfied Clients' },

  // About Page
  'about.subtitle': { ar: 'شركة رائدة في مجال المقاولات والتعمير، نساهم في بناء مستقبل مصر من خلال مشروعات البنية التحتية الحيوية', en: 'A leading company in construction and development, contributing to building Egypt\'s future through vital infrastructure projects' },
  'about.missionDesc1': { ar: 'مهمتنا هي المساهمة في التنمية الشاملة لجمهورية مصر العربية من خلال تنفيذ مشروعات البنية التحتية الحيوية بأعلى معايير الجودة والكفاءة.', en: 'Our mission is to contribute to the comprehensive development of the Arab Republic of Egypt by executing vital infrastructure projects with the highest standards of quality and efficiency.' },
  'about.missionDesc2': { ar: 'نلتزم بتوفير حلول مبتكرة ومستدامة تلبي احتياجات المجتمع وتساهم في رفع مستوى المعيشة للمواطنين.', en: 'We are committed to providing innovative and sustainable solutions that meet society\'s needs and contribute to improving citizens\' standard of living.' },
  'about.visionDesc1': { ar: 'رؤيتنا أن نكون الشركة الرائدة في مجال المقاولات والتعمير على مستوى الجمهورية، والشريك الأول للحكومة في تنفيذ المشروعات القومية الكبرى.', en: 'Our vision is to be the leading company in construction and development at the national level, and the first partner of the government in implementing major national projects.' },
  'about.visionDesc2': { ar: 'نسعى لتحقيق التميز والابتكار في جميع أعمالنا، والمساهمة الفاعلة في بناء مصر الحديثة التي نطمح إليها جميعاً.', en: 'We strive to achieve excellence and innovation in all our work, and active participation in building the modern Egypt we all aspire to.' },
  'about.valuesSubtitle': { ar: 'القيم التي توجه عملنا وتحدد هويتنا كشركة رائدة في المجال', en: 'The values that guide our work and define our identity as a leading company in the field' },
  'about.qualityExcellence': { ar: 'الجودة والتميز', en: 'Quality and Excellence' },
  'about.qualityDesc': { ar: 'نلتزم بأعلى معايير الجودة في جميع مراحل العمل', en: 'We adhere to the highest quality standards in all work phases' },
  'about.partnershipCooperation': { ar: 'الشراكة والتعاون', en: 'Partnership and Cooperation' },
  'about.partnershipDesc': { ar: 'نبني علاقات طويلة المدى مع عملائنا وشركائنا', en: 'We build long-term relationships with our clients and partners' },
  'about.commitmentDeadlines': { ar: 'الالتزام بالمواعيد', en: 'Commitment to Deadlines' },
  'about.commitmentDesc': { ar: 'نحرص على تسليم المشروعات في الوقت المحدد', en: 'We ensure projects are delivered on time' },
  'about.transparencyTrust': { ar: 'الشفافية والثقة', en: 'Transparency and Trust' },
  'about.transparencyDesc': { ar: 'نتعامل بشفافية كاملة مع جميع أصحاب المصلحة', en: 'We deal with complete transparency with all stakeholders' },
  'about.historyMilestones': { ar: 'تاريخنا ومحطاتنا المهمة', en: 'Our History and Important Milestones' },
  'about.historySubtitle': { ar: 'رحلة نمو وتطور مستمر في خدمة التنمية والتعمير', en: 'A journey of continuous growth and development in service of development and construction' },
  'about.establishmentYear': { ar: 'تأسيس الشركة', en: 'Company Establishment' },
  'about.establishmentDesc': { ar: 'بداية رحلتنا في عالم المقاولات والتعمير', en: 'The beginning of our journey in the world of construction and development' },
  'about.firstMajorProject': { ar: 'أول مشروع كبير', en: 'First Major Project' },
  'about.firstProjectDesc': { ar: 'تنفيذ مجمع سكني متكامل بدمياط الجديدة', en: 'Implementation of an integrated residential complex in New Damietta' },
  'about.regionalExpansion': { ar: 'التوسع الإقليمي', en: 'Regional Expansion' },
  'about.expansionDesc': { ar: 'بدء العمل في محافظات متعددة بجمهورية مصر العربية', en: 'Starting work in multiple governorates in the Arab Republic of Egypt' },
  'about.presentFuture': { ar: 'الحاضر والمستقبل', en: 'Present and Future' },
  'about.presentDesc': { ar: 'مواصلة النمو والتطوير لخدمة التنمية الوطنية', en: 'Continuing growth and development to serve national development' },
  'about.managementTeam': { ar: 'فريق الإدارة', en: 'Management Team' },
  'about.teamSubtitle': { ar: 'فريق من المهندسين والخبراء المتخصصين في مجال المقاولات والتعمير، يقود الشركة نحو تحقيق أهدافها الاستراتيجية', en: 'A team of engineers and experts specialized in construction and development, leading the company towards achieving its strategic goals' },
  'about.chairmanTitle': { ar: 'رئيس مجلس الإدارة والعضو المنتدب', en: 'Chairman and Managing Director' },
  'about.operationsTitle': { ar: 'مدير العمليات والمشروعات', en: 'Operations and Projects Manager' },
  'about.financialTitle': { ar: 'مدير الشؤون المالية والإدارية', en: 'Financial and Administrative Affairs Manager' },

  // Services Page
  'services.subtitle': { ar: 'نقدم حلولاً متكاملة في مجال المقاولات والتعمير تلبي احتياجات التنمية الحديثة', en: 'We provide comprehensive solutions in construction and development that meet modern development needs' },
  'services.bridgesDesc': { ar: 'نتخصص في تصميم وتنفيذ الجسور والطرق السريعة باستخدام أحدث التقنيات العالمية والمواد عالية الجودة.', en: 'We specialize in designing and implementing bridges and highways using the latest global technologies and high-quality materials.' },
  'services.housingDesc': { ar: 'نقوم بتنفيذ مشروعات سكنية متكاملة تشمل الوحدات السكنية والمرافق والخدمات المصاحبة.', en: 'We implement integrated residential projects including housing units, facilities and accompanying services.' },
  'services.infrastructureDesc': { ar: 'نساهم في تطوير البنية التحتية للمدن والمناطق الحضرية الجديدة بما يخدم التنمية الشاملة.', en: 'We contribute to developing infrastructure for cities and new urban areas to serve comprehensive development.' },
  'services.facilitiesDesc': { ar: 'نتولى إنشاء وصيانة المرافق العامة والحيوية التي تخدم المجتمع والمواطنين.', en: 'We undertake the construction and maintenance of public and vital facilities that serve the community and citizens.' },
  'services.relatedProjects': { ar: 'مشاهدة المشروعات ذات الصلة', en: 'View Related Projects' },
  'services.methodology': { ar: 'منهجية العمل', en: 'Work Methodology' },
  'services.methodologySubtitle': { ar: 'نتبع منهجية علمية ومنظمة في تنفيذ جميع مشروعاتنا لضمان أعلى معايير الجودة', en: 'We follow a scientific and organized methodology in implementing all our projects to ensure the highest quality standards' },
  'services.planningDesign': { ar: 'التخطيط والتصميم', en: 'Planning and Design' },
  'services.planningDesc': { ar: 'دراسة شاملة للمشروع ووضع التصاميم الأولية', en: 'Comprehensive project study and initial design development' },
  'services.technicalStudies': { ar: 'الدراسات الفنية', en: 'Technical Studies' },
  'services.technicalDesc': { ar: 'إجراء الدراسات الفنية والهندسية المطلوبة', en: 'Conducting required technical and engineering studies' },
  'services.implementationMonitoring': { ar: 'التنفيذ والمتابعة', en: 'Implementation and Follow-up' },
  'services.implementationDesc': { ar: 'بدء العمل مع المتابعة المستمرة لجودة التنفيذ', en: 'Starting work with continuous monitoring of implementation quality' },
  'services.deliveryWarranty': { ar: 'التسليم والضمان', en: 'Delivery and Warranty' },
  'services.deliveryDesc': { ar: 'تسليم المشروع مع ضمان الجودة وخدمة ما بعد التسليم', en: 'Project delivery with quality guarantee and after-delivery service' },
  'services.haveProject': { ar: 'هل لديك مشروع؟', en: 'Do You Have a Project?' },
  'services.haveProjectDesc': { ar: 'تواصل معنا اليوم للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك', en: 'Contact us today for a free consultation and customized quote for your project' },
  'services.getQuote': { ar: 'احصل على عرض سعر', en: 'Get a Quote' },
  'services.viewPreviousWork': { ar: 'مشاهدة أعمالنا السابقة', en: 'View Our Previous Work' },

  // Projects Page
  'projects.subtitle': { ar: 'نفخر بتنفيذ مشروعات استراتيجية تساهم في التنمية الشاملة وتخدم المجتمع', en: 'We are proud to implement strategic projects that contribute to comprehensive development and serve the community' },
  'projects.filterByType': { ar: 'تصفية حسب النوع:', en: 'Filter by Type:' },
  'projects.allProjects': { ar: 'جميع المشروعات', en: 'All Projects' },
  'projects.bridgesRoads': { ar: 'الجسور والطرق', en: 'Bridges and Roads' },
  'projects.housingProjects': { ar: 'مشروعات سكنية', en: 'Housing Projects' },
  'projects.infrastructure': { ar: 'البنية التحتية', en: 'Infrastructure' },
  'projects.publicFacilities': { ar: 'المرافق العامة', en: 'Public Facilities' },
  'projects.ongoingProjects': { ar: 'مشروعات قيد التنفيذ', en: 'Ongoing Projects' },
  'projects.completedProjects': { ar: 'مشروعات مكتملة', en: 'Completed Projects' },
  'projects.ongoingDesc': { ar: 'نعمل حالياً على تنفيذ مشروعات استراتيجية متنوعة', en: 'We are currently working on implementing various strategic projects' },
  'projects.completedDesc': { ar: 'مشروعات تم تسليمها بنجاح وحققت أهدافها التنموية', en: 'Projects successfully delivered and achieved their developmental goals' },
  'projects.completionPercentage': { ar: 'نسبة الإنجاز', en: 'Completion Percentage' },
  'projects.budget': { ar: 'الميزانية', en: 'Budget' },
  'projects.projectStats': { ar: 'إحصائيات مشروعاتنا', en: 'Our Projects Statistics' },
  'projects.projectStatsDesc': { ar: 'أرقام تعكس خبرتنا وتميزنا في المجال', en: 'Numbers that reflect our experience and excellence in the field' },
  'projects.completedProjectsCount': { ar: 'مشروع مكتمل', en: 'Completed Projects' },
  'projects.ongoingProjectsCount': { ar: 'مشروع قيد التنفيذ', en: 'Ongoing Projects' },
  'projects.projectsValue': { ar: 'جنيه قيمة المشروعات', en: 'EGP Projects Value' },
  'projects.satisfactionRate': { ar: 'معدل رضا العملاء', en: 'Customer Satisfaction Rate' },
  'projects.partnerInProject': { ar: 'هل تريد أن نكون شريكك في مشروعك القادم؟', en: 'Do you want us to be your partner in your next project?' },
  'projects.partnerDesc': { ar: 'تواصل معنا لمناقشة متطلبات مشروعك والحصول على عرض سعر مفصل', en: 'Contact us to discuss your project requirements and get a detailed quote' },
  'projects.startProject': { ar: 'ابدأ مشروعك معنا', en: 'Start Your Project With Us' },
  'projects.learnAboutCompany': { ar: 'تعرف على الشركة', en: 'Learn About the Company' },
  'projects.newDamiettaBridge': { ar: 'جسر دمياط الجديد الاستراتيجي', en: 'New Damietta Strategic Bridge' },
  'projects.bridgeDesc': { ar: 'مشروع استراتيجي لربط ضفتي النيل بطول 2.5 كيلومتر، يهدف لتسهيل حركة التجارة والمرور', en: 'Strategic project to connect the two banks of the Nile with a length of 2.5 kilometers, aimed at facilitating trade and traffic movement' },
  'projects.integratedHousingPhase2': { ar: 'مجمع سكني متكامل - المرحلة الثانية', en: 'Integrated Housing Complex - Phase Two' },
  'projects.housingDesc': { ar: 'مشروع سكني يضم 300 وحدة سكنية مع جميع المرافق والخدمات الأساسية', en: 'Housing project comprising 300 housing units with all basic facilities and services' },
  'projects.roadNetworkDevelopment': { ar: 'تطوير شبكة الطرق الداخلية', en: 'Internal Road Network Development' },
  'projects.roadDesc': { ar: 'تطوير وتحسين شبكة الطرق الداخلية للمدينة مع إضافة مسارات جديدة للمشاة والدراجات', en: 'Development and improvement of the city\'s internal road network with the addition of new pedestrian and bicycle paths' },
  'projects.integratedHousingPhase1': { ar: 'مجمع سكني متكامل - المرحلة الأولى', en: 'Integrated Housing Complex - Phase One' },
  'projects.housingPhase1Desc': { ar: 'مجمع سكني يضم 200 وحدة سكنية مع مسجد ومدرسة ومركز تجاري', en: 'Housing complex comprising 200 housing units with a mosque, school and commercial center' },
  'projects.nasrUrbanBridge': { ar: 'كوبري النصر الحضري', en: 'Nasr Urban Bridge' },
  'projects.nasrBridgeDesc': { ar: 'جسر حضري بطول 800 متر يربط بين منطقتين سكنيتين مهمتين', en: 'Urban bridge with a length of 800 meters connecting two important residential areas' },
  'projects.damiettaMedicalCenter': { ar: 'مركز دمياط الطبي المتخصص', en: 'Damietta Specialized Medical Center' },
  'projects.medicalCenterDesc': { ar: 'مركز طبي متكامل يضم عيادات خارجية وقسم طوارئ ومعامل تحليل', en: 'Integrated medical center including outpatient clinics, emergency department and analysis laboratories' },
  'projects.inProgress': { ar: 'جاري التنفيذ', en: 'In Progress' },
  'projects.completed': { ar: 'مكتمل', en: 'Completed' },
  'projects.advancedStage': { ar: 'مرحلة متقدمة', en: 'Advanced Stage' },
  'projects.underImplementation': { ar: 'قيد التنفيذ', en: 'Under Implementation' },
  'projects.newDamietta': { ar: 'دمياط الجديدة، مصر', en: 'New Damietta, Egypt' },
  'projects.damietta': { ar: 'دمياط، مصر', en: 'Damietta, Egypt' },

  // Contact Page
  'contact.subtitle': { ar: 'نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تحقيق مشروعاتكم', en: 'We are here to answer all your inquiries and help you achieve your projects' },
  'contact.contactInfo': { ar: 'معلومات التواصل', en: 'Contact Information' },
  'contact.contactInfoDesc': { ar: 'تواصل معنا عبر الطرق المختلفة المتاحة', en: 'Contact us through various available methods' },
  'contact.address': { ar: 'العنوان', en: 'Address' },
  'contact.workingHours': { ar: 'ساعات العمل', en: 'Working Hours' },
  'contact.sendMessage': { ar: 'أرسل لنا رسالة', en: 'Send Us a Message' },
  'contact.ourLocation': { ar: 'موقعنا', en: 'Our Location' },
  'contact.mapLocation': { ar: 'خريطة الموقع', en: 'Location Map' },
  'contact.departments': { ar: 'الأقسام المختلفة', en: 'Different Departments' },
  'contact.departmentsDesc': { ar: 'تواصل مع القسم المناسب لاستفسارك للحصول على خدمة أفضل', en: 'Contact the appropriate department for your inquiry to get better service' },
  'contact.contactNow': { ar: 'تواصل الآن', en: 'Contact Now' },
  'contact.emergencyContact': { ar: 'اتصال طارئ؟', en: 'Emergency Contact?' },
  'contact.emergencyDesc': { ar: 'في حالة الطوارئ أو المشاكل العاجلة، يمكنك التواصل معنا على مدار الساعة', en: 'In case of emergencies or urgent problems, you can contact us around the clock' },
  'contact.hotline': { ar: 'الخط الساخن (24/7)', en: 'Hotline (24/7)' },
  'contact.emergencyNumber': { ar: 'رقم الطوارئ', en: 'Emergency Number' },
  'contact.subject': { ar: 'موضوع الرسالة', en: 'Message Subject' },
  'contact.subjectPlaceholder': { ar: 'مثال: استفسار عن مشروع', en: 'Example: Project inquiry' },
  'contact.messagePlaceholder': { ar: 'اكتب رسالتك هنا...', en: 'Write your message here...' },
  'contact.sendMessageBtn': { ar: 'إرسال الرسالة', en: 'Send Message' },
  'contact.projectsDepart': { ar: 'قسم المشروعات', en: 'Projects Department' },
  'contact.projectsDepartDesc': { ar: 'للاستفسار عن المشروعات الجديدة والقائمة', en: 'For inquiries about new and existing projects' },
  'contact.salesDepart': { ar: 'قسم المبيعات', en: 'Sales Department' },
  'contact.salesDepartDesc': { ar: 'للحصول على عروض الأسعار والاستشارات', en: 'For quotes and consultations' },
  'contact.hrDepart': { ar: 'قسم الموارد البشرية', en: 'Human Resources Department' },
  'contact.hrDepartDesc': { ar: 'للتوظيف والاستفسارات الوظيفية', en: 'For employment and job inquiries' },
  'contact.supportDepart': { ar: 'خدمة العملاء', en: 'Customer Service' },
  'contact.supportDepartDesc': { ar: 'للدعم الفني وخدمة ما بعد البيع', en: 'For technical support and after-sales service' },

  // NotFound Page
  'notFound.title': { ar: '404', en: '404' },
  'notFound.subtitle': { ar: 'عذراً! الصفحة غير موجودة', en: 'Oops! Page not found' },
  'notFound.returnHome': { ar: 'العودة للرئيسية', en: 'Return to Home' },

  // Service Features
  'features.suspensionBridges': { ar: 'تصميم الجسور المعلقة والكباري', en: 'Design of suspension bridges and overpasses' },
  'features.highways': { ar: 'إنشاء الطرق السريعة والدائرية', en: 'Construction of highways and ring roads' },
  'features.roadPaving': { ar: 'أعمال الرصف والبنية التحتية للطرق', en: 'Road paving and infrastructure work' },
  'features.roadMaintenance': { ar: 'صيانة وتطوير الطرق الموجودة', en: 'Maintenance and development of existing roads' },
  'features.residentialComplexes': { ar: 'مجمعات سكنية متكاملة', en: 'Integrated residential complexes' },
  'features.economicHousing': { ar: 'الوحدات السكنية الاقتصادية', en: 'Economic housing units' },
  'features.administrativeBuildings': { ar: 'المباني الإدارية والتجارية', en: 'Administrative and commercial buildings' },
  'features.socialHousing': { ar: 'مشروعات الإسكان الاجتماعي', en: 'Social housing projects' },
  'features.waterSewer': { ar: 'شبكات المياه والصرف الصحي', en: 'Water and sewage networks' },
  'features.electricComm': { ar: 'شبكات الكهرباء والاتصالات', en: 'Electrical and telecommunications networks' },
  'features.urbanPlanning': { ar: 'تخطيط وتطوير المناطق الحضرية', en: 'Urban area planning and development' },
  'features.newCitiesInfra': { ar: 'البنية التحتية للمدن الجديدة', en: 'Infrastructure for new cities' },
  'features.hospitals': { ar: 'المستشفيات والمراكز الطبية', en: 'Hospitals and medical centers' },
  'features.schools': { ar: 'المدارس والجامعات', en: 'Schools and universities' },
  'features.commercialCenters': { ar: 'المراكز التجارية والترفيهية', en: 'Commercial and entertainment centers' },
  'features.sportsCultural': { ar: 'المرافق الرياضية والثقافية', en: 'Sports and cultural facilities' },

  // Project Data
  'project.newDamiettaBridge': { ar: 'جسر دمياط الجديد الاستراتيجي', en: 'New Damietta Strategic Bridge' },
  'project.bridgeDesc': { ar: 'مشروع استراتيجي لربط ضفتي النيل بطول 2.5 كيلومتر، يهدف لتسهيل حركة التجارة والمرور', en: 'Strategic project to connect the two banks of the Nile with a length of 2.5 kilometers, aimed at facilitating trade and traffic movement' },
  'project.residentialPhase2': { ar: 'مجمع سكني متكامل - المرحلة الثانية', en: 'Integrated Residential Complex - Phase Two' },
  'project.residential300Units': { ar: 'مشروع سكني يضم 300 وحدة سكنية مع جميع المرافق والخدمات الأساسية', en: 'Residential project comprising 300 housing units with all basic facilities and services' },
  'project.internalRoads': { ar: 'تطوير شبكة الطرق الداخلية', en: 'Internal Road Network Development' },
  'project.roadsDesc': { ar: 'تطوير وتحسين شبكة الطرق الداخلية للمدينة مع إضافة مسارات جديدة للمشاة والدراجات', en: 'Development and improvement of the city\'s internal road network with the addition of new pedestrian and bicycle paths' },
  'project.residentialPhase1': { ar: 'مجمع سكني متكامل - المرحلة الأولى', en: 'Integrated Residential Complex - Phase One' },
  'project.residential200Units': { ar: 'مجمع سكني يضم 200 وحدة سكنية مع مسجد ومدرسة ومركز تجاري', en: 'Residential complex comprising 200 housing units with a mosque, school and commercial center' },
  'project.nasrBridge': { ar: 'كوبري النصر الحضري', en: 'Al-Nasr Urban Bridge' },
  'project.urbanBridge': { ar: 'جسر حضري بطول 800 متر يربط بين منطقتين سكنيتين مهمتين', en: 'Urban bridge with a length of 800 meters connecting two important residential areas' },
  'project.medicalCenter': { ar: 'مركز دمياط الطبي المتخصص', en: 'Damietta Specialized Medical Center' },
  'project.medicalDesc': { ar: 'مركز طبي متكامل يضم عيادات خارجية وقسم طوارئ ومعامل تحليل', en: 'Integrated medical center including outpatient clinics, emergency department and analysis laboratories' },

  // Status Labels  
  'status.ongoing': { ar: 'جاري التنفيذ', en: 'Ongoing' },
  'status.inProgress': { ar: 'قيد التنفيذ', en: 'In Progress' },
  'status.advanced': { ar: 'مرحلة متقدمة', en: 'Advanced Stage' },
  'status.completed': { ar: 'مكتمل', en: 'Completed' },

  // Time References
  'time.january2023': { ar: 'يناير 2023', en: 'January 2023' },
  'time.december2024': { ar: 'ديسمبر 2024', en: 'December 2024' },
  'time.march2024': { ar: 'مارس 2024', en: 'March 2024' },
  'time.march2026': { ar: 'مارس 2026', en: 'March 2026' },
  'time.june2024': { ar: 'يونيو 2024', en: 'June 2024' },
  'time.june2025': { ar: 'يونيو 2025', en: 'June 2025' },
  'time.december2023': { ar: 'ديسمبر 2023', en: 'December 2023' },
  'time.september2023': { ar: 'سبتمبر 2023', en: 'September 2023' },
  'time.may2023': { ar: 'مايو 2023', en: 'May 2023' },

  // Contact Form
  'form.nameFullPlaceholder': { ar: 'ادخل اسمك الكامل', en: 'Enter your full name' },
  'form.subjectPlaceholder': { ar: 'مثال: استفسار عن مشروع', en: 'Example: Project inquiry' },
  'form.messagePlaceholder': { ar: 'اكتب رسالتك هنا...', en: 'Write your message here...' },

  // Contact Info
  'address.newDamietta': { ar: 'دمياط الجديدة، محافظة دمياط', en: 'New Damietta, Damietta Governorate' },
  'address.egypt': { ar: 'جمهورية مصر العربية', en: 'Arab Republic of Egypt' },
  'address.postalCode': { ar: 'الرمز البريدي: 34517', en: 'Postal Code: 34517' },
  'workingHours.sunThu': { ar: 'الأحد - الخميس: 8:00 - 17:00', en: 'Sunday - Thursday: 8:00 - 17:00' },
  'workingHours.fri': { ar: 'الجمعة: 9:00 - 14:00', en: 'Friday: 9:00 - 14:00' },
  'workingHours.sat': { ar: 'السبت: مغلق', en: 'Saturday: Closed' },

  // Departments
  'dept.projects': { ar: 'قسم المشروعات', en: 'Projects Department' },
  'dept.sales': { ar: 'قسم المبيعات', en: 'Sales Department' },
  'dept.hr': { ar: 'قسم الموارد البشرية', en: 'Human Resources Department' },
  'dept.customerService': { ar: 'خدمة العملاء', en: 'Customer Service' },
  'dept.projectsDesc': { ar: 'للاستفسار عن المشروعات الجديدة والقائمة', en: 'For inquiries about new and existing projects' },
  'dept.salesDesc': { ar: 'للحصول على عروض الأسعار والاستشارات', en: 'For quotes and consultations' },
  'dept.hrDesc': { ar: 'للتوظيف والاستفسارات الوظيفية', en: 'For employment and job inquiries' },
  'dept.customerServiceDesc': { ar: 'للدعم الفني وخدمة ما بعد البيع', en: 'For technical support and after-sales service' },

  // Location Info
  'location.trainStation': { ar: '5 دقائق من محطة قطار دمياط الجديدة', en: '5 minutes from New Damietta train station' },
  'location.airport': { ar: '10 دقائق من مطار دمياط الجديد', en: '10 minutes from New Damietta airport' },
  'location.parking': { ar: 'مواقف مجانية متاحة', en: 'Free parking available' },
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

  const tArray = (key: string): string[] => {
    return arrayTranslations[key]?.[language] || [key];
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
    <LanguageContext.Provider value={{ language, direction, setLanguage, t, tArray }}>
      {children}
    </LanguageContext.Provider>
  );
};