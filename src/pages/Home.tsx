import { ArrowRight, Building2, Construction, Home as HomeIcon, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-construction.jpg';
import constructionWorkers from '@/assets/construction-workers.jpg';

const Home = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: Construction,
      title: t('services.bridges'),
      description: 'تصميم وتنفيذ الجسور والطرق السريعة بأحدث التقنيات',
    },
    {
      icon: Building2,
      title: t('services.housing'),
      description: 'مشروعات سكنية متكاملة تلبي احتياجات المجتمع',
    },
    {
      icon: HomeIcon,
      title: t('services.infrastructure'),
      description: 'تطوير البنية التحتية للمدن والمناطق الحضرية',
    },
    {
      icon: Wrench,
      title: t('services.facilities'),
      description: 'إنشاء وصيانة المرافق العامة والحيوية',
    },
  ];

  const featuredProjects = [
    {
      title: 'جسر دمياط الجديد',
      description: 'مشروع استراتيجي لربط ضفتي النيل',
      image: heroImage,
      status: 'جاري التنفيذ',
    },
    {
      title: 'مجمع سكني متكامل',
      description: '500 وحدة سكنية بالمرافق الكاملة',
      image: constructionWorkers,
      status: 'مكتمل',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 hero-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="cta" 
              size="xl" 
              asChild
              className="shadow-elevated"
            >
              <Link to="/projects">
                {t('hero.cta')}
                <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              asChild
            >
              <Link to="/about">
                {t('nav.about')}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('services.title')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نقدم حلولاً متكاملة في مجال المقاولات والتعمير
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <service.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="construction" size="lg" asChild>
              <Link to="/services">
                عرض جميع الخدمات
                <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              مشروعات مميزة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              نفخر بتنفيذ مشروعات استراتيجية تخدم التنمية الوطنية
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-elevated transition-all duration-300">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-sm font-medium">
                    {project.status}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <Button variant="professional" asChild>
                    <Link to="/projects">
                      {t('common.details')}
                      <ArrowRight className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/projects">
                عرض جميع المشروعات
                <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section 
        className="py-20 relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${constructionWorkers})` }}
      >
        <div className="absolute inset-0 bg-primary/90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">
            لماذا تختار شركة الشبلي؟
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            مع خبرة تمتد لسنوات في مجال المقاولات والتعمير، نلتزم بتقديم أعلى معايير الجودة 
            والكفاءة في تنفيذ المشروعات الحيوية التي تخدم التنمية الشاملة.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-lg">سنوات خبرة</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-lg">مشروع مكتمل</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-lg">عميل راضي</div>
            </div>
          </div>

          <div className="mt-12">
            <Button variant="construction" size="lg" asChild>
              <Link to="/about">
                {t('common.readMore')}
                <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;