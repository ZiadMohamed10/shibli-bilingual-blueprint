import { Construction, Building2, Home, Wrench, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection } from '@/hooks/useScrollAnimation';
import heroImage from '@/assets/hero-construction.jpg';

const Services = () => {
  const { t, tArray } = useLanguage();

  const services = [
    {
      icon: Construction,
      title: t('services.bridges'),
      description: t('services.bridgesDesc'),
      features: tArray('services.bridgesFeatures'),
      image: heroImage,
    },
    {
      icon: Building2,
      title: t('services.housing'),
      description: t('services.housingDesc'),
      features: tArray('services.housingFeatures'),
      image: heroImage,
    },
    {
      icon: Home,
      title: t('services.infrastructure'),
      description: t('services.infrastructureDesc'),
      features: tArray('services.infrastructureFeatures'),
      image: heroImage,
    },
    {
      icon: Wrench,
      title: t('services.facilities'),
      description: t('services.facilitiesDesc'),
      features: tArray('services.facilitiesFeatures'),
      image: heroImage,
    },
  ];

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
            {t('services.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                <div className="lg:w-1/2">
                  <div className="relative overflow-hidden rounded-2xl shadow-elevated">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mr-4 rtl:mr-0 rtl:ml-4">
                      <service.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <h2 className="text-4xl font-bold text-primary">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="construction" size="lg" asChild>
                    <Link to="/projects">
                      {t('services.relatedProjects')}
                      <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Process Section */}
      <AnimatedSection animation="animate-scale-in" delay={200} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('services.methodology')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('services.methodologySubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: t('services.planningDesign'),
                description: t('services.planningDesc'),
              },
              {
                step: '02',
                title: t('services.technicalStudies'),
                description: t('services.technicalDesc'),
              },
              {
                step: '03',
                title: t('services.implementationMonitoring'),
                description: t('services.implementationDesc'),
              },
              {
                step: '04',
                title: t('services.deliveryWarranty'),
                description: t('services.deliveryDesc'),
              },
            ].map((process, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-secondary-foreground">
                      {process.step}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {process.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection animation="animate-fade-in" delay={300} className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('services.haveProject')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('services.haveProjectDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="construction" size="xl" asChild>
              <Link to="/contact">
                {t('services.getQuote')}
                <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
              </Link>
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              asChild
            >
              <Link to="/projects">
                {t('services.viewPreviousWork')}
              </Link>
            </Button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Services;