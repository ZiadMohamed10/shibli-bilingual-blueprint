import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-construction.jpg';
import constructionWorkers from '@/assets/construction-workers.jpg';

const Projects = () => {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'جميع المشروعات' },
    { id: 'bridges', label: 'الجسور والطرق' },
    { id: 'housing', label: 'مشروعات سكنية' },
    { id: 'infrastructure', label: 'البنية التحتية' },
    { id: 'facilities', label: 'المرافق العامة' },
  ];

  const ongoingProjects = [
    {
      id: 1,
      title: 'جسر دمياط الجديد الاستراتيجي',
      description: 'مشروع استراتيجي لربط ضفتي النيل بطول 2.5 كيلومتر، يهدف لتسهيل حركة التجارة والمرور',
      location: 'دمياط الجديدة، مصر',
      startDate: 'يناير 2023',
      expectedCompletion: 'ديسمبر 2024',
      progress: 75,
      category: 'bridges',
      image: heroImage,
      status: 'جاري التنفيذ',
      budget: '500 مليون جنيه',
    },
    {
      id: 2,
      title: 'مجمع سكني متكامل - المرحلة الثانية',
      description: 'مشروع سكني يضم 300 وحدة سكنية مع جميع المرافق والخدمات الأساسية',
      location: 'دمياط الجديدة، مصر',
      startDate: 'مارس 2024',
      expectedCompletion: 'مارس 2026',
      progress: 25,
      category: 'housing',
      image: constructionWorkers,
      status: 'قيد التنفيذ',
      budget: '300 مليون جنيه',
    },
    {
      id: 3,
      title: 'تطوير شبكة الطرق الداخلية',
      description: 'تطوير وتحسين شبكة الطرق الداخلية للمدينة مع إضافة مسارات جديدة للمشاة والدراجات',
      location: 'دمياط، مصر',
      startDate: 'يونيو 2024',
      expectedCompletion: 'يونيو 2025',
      progress: 40,
      category: 'infrastructure',
      image: heroImage,
      status: 'مرحلة متقدمة',
      budget: '150 مليون جنيه',
    },
  ];

  const completedProjects = [
    {
      id: 4,
      title: 'مجمع سكني متكامل - المرحلة الأولى',
      description: 'مجمع سكني يضم 200 وحدة سكنية مع مسجد ومدرسة ومركز تجاري',
      location: 'دمياط الجديدة، مصر',
      completionDate: 'ديسمبر 2023',
      category: 'housing',
      image: constructionWorkers,
      status: 'مكتمل',
      budget: '200 مليون جنيه',
    },
    {
      id: 5,
      title: 'كوبري النصر الحضري',
      description: 'جسر حضري بطول 800 متر يربط بين منطقتين سكنيتين مهمتين',
      location: 'دمياط، مصر',
      completionDate: 'سبتمبر 2023',
      category: 'bridges',
      image: heroImage,
      status: 'مكتمل',
      budget: '80 مليون جنيه',
    },
    {
      id: 6,
      title: 'مركز دمياط الطبي المتخصص',
      description: 'مركز طبي متكامل يضم عيادات خارجية وقسم طوارئ ومعامل تحليل',
      location: 'دمياط، مصر',
      completionDate: 'مايو 2023',
      category: 'facilities',
      image: constructionWorkers,
      status: 'مكتمل',
      budget: '120 مليون جنيه',
    },
  ];

  const filterProjects = (projects: any[]) => {
    if (selectedCategory === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory);
  };

  const ProjectCard = ({ project, showProgress = false }: { project: any; showProgress?: boolean }) => (
    <Card className="group overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {project.status}
        </div>
        {showProgress && (
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3 text-white">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm">نسبة الإنجاز</span>
                <span className="text-sm font-bold">{project.progress}%</span>
              </div>
              <div className="w-full bg-white/30 rounded-full h-2">
                <div 
                  className="bg-secondary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-primary-light transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>
        
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" />
            {project.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2 flex-shrink-0" />
            {showProgress ? `${project.startDate} - ${project.expectedCompletion}` : project.completionDate}
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-secondary">
            الميزانية: {project.budget}
          </span>
          <Button variant="professional" size="sm">
            {t('common.details')}
            <ArrowRight className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('nav.projects')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            نفخر بتنفيذ مشروعات استراتيجية تساهم في التنمية الشاملة وتخدم المجتمع
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-muted-foreground mr-2 rtl:mr-0 rtl:ml-2" />
              <span className="text-muted-foreground font-medium">تصفية حسب النوع:</span>
            </div>
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "construction" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="transition-all duration-300"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Tabs */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="ongoing" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="ongoing" className="text-lg">مشروعات قيد التنفيذ</TabsTrigger>
              <TabsTrigger value="completed" className="text-lg">مشروعات مكتملة</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ongoing">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  المشروعات قيد التنفيذ
                </h2>
                <p className="text-xl text-muted-foreground">
                  نعمل حالياً على تنفيذ مشروعات استراتيجية متنوعة
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filterProjects(ongoingProjects).map((project) => (
                  <ProjectCard key={project.id} project={project} showProgress={true} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  المشروعات المكتملة
                </h2>
                <p className="text-xl text-muted-foreground">
                  مشروعات تم تسليمها بنجاح وحققت أهدافها التنموية
                </p>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {filterProjects(completedProjects).map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">
              إحصائيات مشروعاتنا
            </h2>
            <p className="text-xl text-muted-foreground">
              أرقام تعكس خبرتنا وتميزنا في المجال
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '120+', label: 'مشروع مكتمل' },
              { number: '15+', label: 'مشروع قيد التنفيذ' },
              { number: '2.5B+', label: 'جنيه قيمة المشروعات' },
              { number: '95%', label: 'معدل رضا العملاء' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            هل تريد أن نكون شريكك في مشروعك القادم؟
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            تواصل معنا لمناقشة متطلبات مشروعك والحصول على عرض سعر مفصل
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="construction" size="xl" asChild>
              <Link to="/contact">
                ابدأ مشروعك معنا
                <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/about">
                تعرف على الشركة
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;