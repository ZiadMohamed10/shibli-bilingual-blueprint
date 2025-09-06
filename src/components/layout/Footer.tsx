import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    { name: t('nav.projects'), href: '/projects' },
  ];

  const services = [
    t('services.bridges'),
    t('services.housing'),
    t('services.infrastructure'),
    t('services.facilities'),
  ];

  return (
    <footer className="bg-construction-steel/10 dark:bg-construction-steel/5 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 text-primary">{t('company.name')}</h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              {t('company.description')}
            </p>
            <p className="text-muted-foreground/70 text-sm">
              {t('company.slogan')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('footer.quickLinks')}</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth hover:underline"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">{t('services.title')}</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-border py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">{t('footer.address')}</p>
                <p className="text-muted-foreground text-sm whitespace-pre-line">
                  {t('footer.addressDetails')}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">{t('contact.phone')}</p>
                <p className="text-muted-foreground text-sm" dir="ltr">
                  +20 57 xxx-xxxx
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">{t('contact.email')}</p>
                <p className="text-muted-foreground text-sm" dir="ltr">
                  info@shibli-construction.com
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 rtl:space-x-reverse">
              <Clock className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-foreground">{t('footer.workingHours')}</p>
                <p className="text-muted-foreground text-sm">
                  {t('footer.workingDays')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground/70 text-sm">
              {t('footer.copyrightText')}
            </p>
            <div className="flex space-x-6 rtl:space-x-reverse mt-4 md:mt-0">
              <Link to="/privacy" className="text-muted-foreground/70 hover:text-primary text-sm transition-smooth">
                {t('footer.privacyPolicy')}
              </Link>
              <Link to="/terms" className="text-muted-foreground/70 hover:text-primary text-sm transition-smooth">
                {t('footer.termsConditions')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;