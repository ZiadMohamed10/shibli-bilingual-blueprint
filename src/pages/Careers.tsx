import { Briefcase, Clock, MapPin, Users, ArrowRight, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import constructionWorkers from '@/assets/construction-workers.jpg';

const Careers = () => {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const jobOpenings = [
    {
      title: 'مهندس مدني أول',
      department: 'الهندسة',
      location: 'دمياط الجديدة، مصر',
      type: 'دوام كامل',
      experience: '5-8 سنوات',
      description: 'نبحث عن مهندس مدني ذي خبرة للإشراف على مشروعات البنية التحتية والجسور',
      requirements: [
        'بكالوريوس هندسة مدنية',
        'خبرة لا تقل عن 5 سنوات',
        'إجادة برامج التصميم الهندسي',
        'مهارات قيادة فريق العمل',
      ],
    },
    {
      title: 'مهندس معماري',
      department: 'التصميم المعماري',
      location: 'دمياط الجديدة، مصر',
      type: 'دوام كامل',
      experience: '3-5 سنوات',
      description: 'للعمل في تصميم المشروعات السكنية والمرافق العامة',
      requirements: [
        'بكالوريوس هندسة معمارية',
        'خبرة في المشروعات السكنية',
        'إتقان برامج التصميم المعماري',
        'إبداع في التصميم',
      ],
    },
    {
      title: 'مدير مشروع',
      department: 'إدارة المشروعات',
      location: 'دمياط الجديدة، مصر',
      type: 'دوام كامل',
      experience: '7-10 سنوات',
      description: 'لإدارة وتنسيق المشروعات الكبيرة وضمان تسليمها في الوقت المحدد',
      requirements: [
        'بكالوريوس هندسة أو إدارة أعمال',
        'خبرة واسعة في إدارة المشروعات',
        'شهادات إدارة المشروعات (PMP مفضلة)',
        'مهارات تواصل وقيادة متميزة',
      ],
    },
    {
      title: 'مهندس كهرباء',
      department: 'الهندسة الكهربائية',
      location: 'دمياط الجديدة، مصر',
      type: 'دوام كامل',
      experience: '2-4 سنوات',
      description: 'للعمل في تصميم وتنفيذ الأنظمة الكهربائية للمشروعات',
      requirements: [
        'بكالوريوس هندسة كهرباء',
        'معرفة بالأنظمة الكهربائية للمباني',
        'خبرة في التصميم الكهربائي',
        'إلمام بالكودات المصرية',
      ],
    },
  ];

  const benefits = [
    {
      title: 'راتب تنافسي',
      description: 'نقدم رواتب تنافسية تتناسب مع الخبرة والكفاءة',
      icon: Briefcase,
    },
    {
      title: 'التطوير المهني',
      description: 'برامج تدريبية وتطويرية مستمرة لرفع مستوى الأداء',
      icon: Users,
    },
    {
      title: 'بيئة عمل محفزة',
      description: 'بيئة عمل إيجابية تشجع على الإبداع والابتكار',
      icon: MapPin,
    },
    {
      title: 'مرونة في العمل',
      description: 'ساعات عمل مرنة وإمكانية العمل من المنزل عند الحاجة',
      icon: Clock,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${constructionWorkers})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('nav.careers')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            انضم إلى فريق العمل المتميز وكن جزءاً من مستقبل البناء والتعمير في مصر
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              لماذا تعمل معنا؟
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نؤمن بأن الموظفين هم أساس نجاح الشركة، ونسعى لتوفير بيئة عمل مثالية
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <benefit.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              الوظائف المتاحة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تصفح الفرص الوظيفية المتاحة وانضم إلى فريق العمل
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <Card key={index} className="hover:shadow-elevated transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-2">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Briefcase className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                          {job.type}
                        </div>
                      </div>
                    </div>
                    <div className="bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {job.experience}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-primary mb-3">المتطلبات:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-muted-foreground flex items-center">
                          <div className="w-2 h-2 bg-secondary rounded-full mr-3 rtl:mr-0 rtl:ml-3 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        variant="construction" 
                        className="w-full"
                        onClick={() => setSelectedJob(job.title)}
                      >
                        {t('common.apply')}
                        <ArrowRight className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold text-primary">
                          تقدم بطلب توظيف - {job.title}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <form className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="fullName" className="text-base font-medium">
                              {t('common.name')} الكامل *
                            </Label>
                            <Input 
                              id="fullName" 
                              placeholder="ادخل اسمك الكامل"
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-base font-medium">
                              {t('common.email')} *
                            </Label>
                            <Input 
                              id="email" 
                              type="email"
                              placeholder="example@email.com"
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone" className="text-base font-medium">
                              {t('common.phone')} *
                            </Label>
                            <Input 
                              id="phone" 
                              placeholder="+20 xxx xxx xxxx"
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="position" className="text-base font-medium">
                              الوظيفة المطلوبة *
                            </Label>
                            <Input 
                              id="position" 
                              value={job.title}
                              readOnly
                              className="mt-2 bg-muted"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="experience" className="text-base font-medium">
                              سنوات الخبرة
                            </Label>
                            <Input 
                              id="experience" 
                              placeholder="مثال: 5 سنوات"
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="education" className="text-base font-medium">
                              المؤهل العلمي
                            </Label>
                            <Input 
                              id="education" 
                              placeholder="مثال: بكالوريوس هندسة مدنية"
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="coverLetter" className="text-base font-medium">
                            خطاب التغطية
                          </Label>
                          <Textarea 
                            id="coverLetter"
                            placeholder="اكتب نبذة عن خبراتك وسبب اهتمامك بالوظيفة..."
                            rows={4}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cv" className="text-base font-medium">
                            رفع السيرة الذاتية *
                          </Label>
                          <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                            <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <p className="text-muted-foreground mb-1 text-sm">
                              اضغط لرفع السيرة الذاتية أو اسحب الملف هنا
                            </p>
                            <p className="text-xs text-muted-foreground">
                              PDF, DOC, DOCX (الحد الأقصى 5 MB)
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button variant="hero" size="lg" className="flex-1">
                            {t('common.submit')}
                            <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                          </Button>
                          <Button variant="outline" size="lg" type="button" className="flex-1">
                            إعادة تعيين
                          </Button>
                        </div>
                      </form>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            هل لديك استفسارات حول التوظيف؟
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            تواصل مع قسم الموارد البشرية للحصول على المزيد من المعلومات
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="construction" size="xl">
              تواصل مع الموارد البشرية
              <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
            </Button>
            <div className="text-primary-foreground/80">
              <p>أو اتصل على: <span className="font-bold" dir="ltr">+20 57 xxx-xxxx</span></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;