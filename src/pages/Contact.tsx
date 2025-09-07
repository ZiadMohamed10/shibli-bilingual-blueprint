import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection } from '@/hooks/useScrollAnimation';

const Contact = () => {
  const { t, tArray } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: t('contact.address'),
      details: tArray('contact.addressDetails'),
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: tArray('contact.phoneDetails'),
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: tArray('contact.emailDetails'),
    },
    {
      icon: Clock,
      title: t('contact.workingHours'),
      details: tArray('contact.workingHoursDetails'),
    },
  ];

  const departments = [
    {
      name: t('contact.projectsDepart'),
      email: 'projects@shibli-construction.com',
      phone: '+20 57 xxx-1001',
      description: t('contact.projectsDepartDesc'),
    },
    {
      name: t('contact.salesDepart'),
      email: 'sales@shibli-construction.com',
      phone: '+20 57 xxx-1002',
      description: t('contact.salesDepartDesc'),
    },
    {
      name: t('contact.hrDepart'),
      email: 'hr@shibli-construction.com',
      phone: '+20 57 xxx-1003',
      description: t('contact.hrDepartDesc'),
    },
    {
      name: t('contact.supportDepart'),
      email: 'support@shibli-construction.com',
      phone: '+20 57 xxx-1004',
      description: t('contact.supportDepartDesc'),
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-24 bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {t('contact.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('contact.contactInfo')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.contactInfoDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <info.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {info.title}
                  </h3>
                  <div className="space-y-2">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground leading-relaxed">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Contact Form & Map */}
      <AnimatedSection animation="animate-scale-in" delay={200} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                {t('contact.sendMessage')}
              </h2>
              
              <Card className="shadow-elevated">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-base font-medium">
                          {t('common.name')} *
                        </Label>
                        <Input 
                          id="name" 
                          placeholder={t('common.namePlaceholder')}
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
                          placeholder={t('common.emailPlaceholder')}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="phone" className="text-base font-medium">
                          {t('common.phone')}
                        </Label>
                        <Input 
                          id="phone" 
                          placeholder={t('common.phonePlaceholder')}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-base font-medium">
                          {t('contact.subject')} *
                        </Label>
                        <Input 
                          id="subject" 
                          placeholder={t('contact.subjectPlaceholder')}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-medium">
                        {t('common.message')} *
                      </Label>
                      <Textarea 
                        id="message"
                        placeholder={t('contact.messagePlaceholder')}
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button variant="hero" size="lg" className="w-full">
                      {t('contact.sendMessageBtn')}
                      <Send className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                {t('contact.ourLocation')}
              </h2>
              
              <Card className="shadow-elevated">
                <CardContent className="p-0">
                  <div className="bg-muted h-80 rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <MapPin className="h-16 w-16 mx-auto mb-4" />
                    <p className="text-lg font-medium">{t('contact.mapLocation')}</p>
                    <p className="text-sm">{t('contact.addressDetails')[0]}</p>
                    <p className="text-sm">{t('contact.addressDetails')[1]}</p>
                  </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 space-y-4">
                {tArray('contact.locationDirections').map((direction: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                    <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                    <span>{direction}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Departments */}
      <AnimatedSection animation="animate-fade-in" delay={300} className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('contact.departments')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('contact.departmentsDesc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <Card key={index} className="hover:shadow-card transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {dept.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {dept.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                      <Mail className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground" dir="ltr">{dept.email}</span>
                    </div>
                    <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm">
                      <Phone className="h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-muted-foreground" dir="ltr">{dept.phone}</span>
                    </div>
                  </div>
                  
                  <Button variant="professional" size="sm">
                    {t('contact.contactNow')}
                    <ArrowRight className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Emergency Contact */}
      <AnimatedSection animation="animate-scale-in" delay={400} className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('contact.emergencyContact')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('contact.emergencyDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2" dir="ltr">
                19xxx
              </div>
              <div className="text-primary-foreground/80">{t('contact.hotline')}</div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-primary-foreground/30"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2" dir="ltr">
                +20 xxx xxx xxxx
              </div>
              <div className="text-primary-foreground/80">{t('contact.emergencyNumber')}</div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Contact;