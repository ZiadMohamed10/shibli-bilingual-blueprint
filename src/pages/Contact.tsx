import { MapPin, Phone, Mail, Clock, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: MapPin,
      title: 'العنوان',
      details: [
        'دمياط الجديدة، محافظة دمياط',
        'جمهورية مصر العربية',
        'الرمز البريدي: 34517',
      ],
    },
    {
      icon: Phone,
      title: t('contact.phone'),
      details: [
        '+20 57 xxx-xxxx',
        '+20 57 xxx-xxxx (فاكس)',
        'الخط الساخن: 19xxx',
      ],
    },
    {
      icon: Mail,
      title: t('contact.email'),
      details: [
        'info@shibli-construction.com',
        'projects@shibli-construction.com',
        'hr@shibli-construction.com',
      ],
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: [
        'الأحد - الخميس: 8:00 - 17:00',
        'الجمعة: 9:00 - 14:00',
        'السبت: مغلق',
      ],
    },
  ];

  const departments = [
    {
      name: 'قسم المشروعات',
      email: 'projects@shibli-construction.com',
      phone: '+20 57 xxx-1001',
      description: 'للاستفسار عن المشروعات الجديدة والقائمة',
    },
    {
      name: 'قسم المبيعات',
      email: 'sales@shibli-construction.com',
      phone: '+20 57 xxx-1002',
      description: 'للحصول على عروض الأسعار والاستشارات',
    },
    {
      name: 'قسم الموارد البشرية',
      email: 'hr@shibli-construction.com',
      phone: '+20 57 xxx-1003',
      description: 'للتوظيف والاستفسارات الوظيفية',
    },
    {
      name: 'خدمة العملاء',
      email: 'support@shibli-construction.com',
      phone: '+20 57 xxx-1004',
      description: 'للدعم الفني وخدمة ما بعد البيع',
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
            نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في تحقيق مشروعاتكم
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              معلومات التواصل
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تواصل معنا عبر الطرق المختلفة المتاحة
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
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                أرسل لنا رسالة
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
                          {t('common.phone')}
                        </Label>
                        <Input 
                          id="phone" 
                          placeholder="+20 xxx xxx xxxx"
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="subject" className="text-base font-medium">
                          موضوع الرسالة *
                        </Label>
                        <Input 
                          id="subject" 
                          placeholder="مثال: استفسار عن مشروع"
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
                        placeholder="اكتب رسالتك هنا..."
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <Button variant="hero" size="lg" className="w-full">
                      إرسال الرسالة
                      <Send className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map Placeholder */}
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                موقعنا
              </h2>
              
              <Card className="shadow-elevated">
                <CardContent className="p-0">
                  <div className="bg-muted h-80 rounded-lg flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="h-16 w-16 mx-auto mb-4" />
                      <p className="text-lg font-medium">خريطة الموقع</p>
                      <p className="text-sm">دمياط الجديدة، محافظة دمياط</p>
                      <p className="text-sm">جمهورية مصر العربية</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>5 دقائق من محطة قطار دمياط الجديدة</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>10 دقائق من مطار دمياط الجديد</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground">
                  <MapPin className="h-5 w-5 text-secondary flex-shrink-0" />
                  <span>مواقف مجانية متاحة</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              الأقسام المختلفة
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              تواصل مع القسم المناسب لاستفسارك للحصول على خدمة أفضل
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
                    تواصل الآن
                    <ArrowRight className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            اتصال طارئ؟
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            في حالة الطوارئ أو المشاكل العاجلة، يمكنك التواصل معنا على مدار الساعة
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2" dir="ltr">
                19xxx
              </div>
              <div className="text-primary-foreground/80">الخط الساخن (24/7)</div>
            </div>
            
            <div className="hidden sm:block w-px h-12 bg-primary-foreground/30"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2" dir="ltr">
                +20 xxx xxx xxxx
              </div>
              <div className="text-primary-foreground/80">رقم الطوارئ</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;