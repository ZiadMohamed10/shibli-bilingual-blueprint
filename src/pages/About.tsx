import { Target, Eye, Award, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import constructionWorkers from '@/assets/construction-workers.jpg';

const About = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      title: t('about.qualityExcellence'),
      description: t('about.qualityDesc'),
    },
    {
      icon: Users,
      title: t('about.partnershipCooperation'),
      description: t('about.partnershipDesc'),
    },
    {
      icon: Target,
      title: t('about.commitmentDeadlines'),
      description: t('about.commitmentDesc'),
    },
    {
      icon: Eye,
      title: t('about.transparencyTrust'),
      description: t('about.transparencyDesc'),
    },
  ];

  const milestones = [
    {
      year: '2008',
      title: t('about.establishmentYear'),
      description: t('about.establishmentDesc'),
    },
    {
      year: '2015',
      title: t('about.firstMajorProject'),
      description: t('about.firstProjectDesc'),
    },
    {
      year: '2020',
      title: t('about.regionalExpansion'),
      description: t('about.expansionDesc'),
    },
    {
      year: '2024',
      title: t('about.presentFuture'),
      description: t('about.presentDesc'),
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
            {t('about.title')}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                {t('about.mission')}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.missionDesc1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.missionDesc2')}
                </p>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-primary mb-8">
                {t('about.vision')}
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.visionDesc1')}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.visionDesc2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('about.values')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.valuesSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-elevated transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('about.historyMilestones')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('about.historySubtitle')}
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-primary/20"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="hover:shadow-card transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="text-2xl font-bold text-secondary mb-2">
                          {milestone.year}
                        </div>
                        <h3 className="text-xl font-bold text-primary mb-3">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="relative">
                    <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-card"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            {t('about.managementTeam')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-12 max-w-3xl mx-auto">
            {t('about.teamSubtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="h-16 w-16 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">المهندس / أحمد الشبلي</h3>
              <p className="text-primary-foreground/80">{t('about.chairmanTitle')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="h-16 w-16 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">المهندس / محمد الشبلي</h3>
              <p className="text-primary-foreground/80">{t('about.operationsTitle')}</p>
            </div>
            
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 bg-secondary/20 rounded-full flex items-center justify-center">
                <Users className="h-16 w-16 text-secondary" />
              </div>
              <h3 className="text-xl font-bold mb-2">المهندسة / فاطمة الشبلي</h3>
              <p className="text-primary-foreground/80">{t('about.financialTitle')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;