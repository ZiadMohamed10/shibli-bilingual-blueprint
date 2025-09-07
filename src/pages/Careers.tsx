import { Briefcase, Clock, MapPin, Users, ArrowRight, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection } from '@/hooks/useScrollAnimation';
import { useState } from 'react';
import constructionWorkers from '@/assets/construction-workers.jpg';

const Careers = () => {
  const { t } = useLanguage();
  const [selectedJob, setSelectedJob] = useState<string>('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const jobOpenings = [
    {
      title: t('jobs.seniorCivilEngineer'),
      department: t('dept.engineering'),
      location: t('location.newDamietta'),
      type: t('common.fullTime'),
      experience: t('exp.5to8years'),
      description: t('job.seniorCivilEngineer.desc'),
      requirements: [
        t('job.seniorCivilEngineer.req1'),
        t('job.seniorCivilEngineer.req2'),
        t('job.seniorCivilEngineer.req3'),
        t('job.seniorCivilEngineer.req4'),
      ],
    },
    {
      title: t('jobs.architect'),
      department: t('dept.architecture'),
      location: t('location.newDamietta'),
      type: t('common.fullTime'),
      experience: t('exp.3to5years'),
      description: t('job.architect.desc'),
      requirements: [
        t('job.architect.req1'),
        t('job.architect.req2'),
        t('job.architect.req3'),
        t('job.architect.req4'),
      ],
    },
    {
      title: t('jobs.projectManager'),
      department: t('dept.projectManagement'),
      location: t('location.newDamietta'),
      type: t('common.fullTime'),
      experience: t('exp.7to10years'),
      description: t('job.projectManager.desc'),
      requirements: [
        t('job.projectManager.req1'),
        t('job.projectManager.req2'),
        t('job.projectManager.req3'),
        t('job.projectManager.req4'),
      ],
    },
    {
      title: t('jobs.electricalEngineer'),
      department: t('dept.electrical'),
      location: t('location.newDamietta'),
      type: t('common.fullTime'),
      experience: t('exp.2to4years'),
      description: t('job.electricalEngineer.desc'),
      requirements: [
        t('job.electricalEngineer.req1'),
        t('job.electricalEngineer.req2'),
        t('job.electricalEngineer.req3'),
        t('job.electricalEngineer.req4'),
      ],
    },
  ];

  const benefits = [
    {
      title: t('benefits.competitiveSalary'),
      description: t('benefits.competitiveSalaryDesc'),
      icon: Briefcase,
    },
    {
      title: t('benefits.professionalDevelopment'),
      description: t('benefits.professionalDevelopmentDesc'),
      icon: Users,
    },
    {
      title: t('benefits.workEnvironment'),
      description: t('benefits.workEnvironmentDesc'),
      icon: MapPin,
    },
    {
      title: t('benefits.workFlexibility'),
      description: t('benefits.workFlexibilityDesc'),
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
            {t('careers.subtitle')}
          </p>
        </div>
      </section>

      {/* Company Culture */}
      <AnimatedSection className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('careers.whyWorkWithUs')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('careers.whyWorkWithUsDesc')}
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
      </AnimatedSection>

      {/* Job Openings */}
      <AnimatedSection animation="animate-scale-in" delay={200} className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {t('careers.availableJobs')}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('careers.availableJobsDesc')}
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
                    <h4 className="font-semibold text-primary mb-3">{t('careers.requirements')}</h4>
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
                          {t('careers.applicationForm')} - {job.title}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <form className="space-y-6 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="fullName" className="text-base font-medium">
                              {t('careers.fullName')} {t('common.required')}
                            </Label>
                            <Input 
                              id="fullName" 
                              placeholder={t('placeholder.fullName')}
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-base font-medium">
                              {t('common.email')} {t('common.required')}
                            </Label>
                            <Input 
                              id="email" 
                              type="email"
                              placeholder={t('placeholder.email')}
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="phone" className="text-base font-medium">
                              {t('common.phone')} {t('common.required')}
                            </Label>
                            <Input 
                              id="phone" 
                              placeholder={t('placeholder.phone')}
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="position" className="text-base font-medium">
                              {t('careers.position')} {t('common.required')}
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
                              {t('careers.experience')}
                            </Label>
                            <Input 
                              id="experience" 
                              placeholder={t('placeholder.experience')}
                              className="mt-2"
                            />
                          </div>
                          <div>
                            <Label htmlFor="education" className="text-base font-medium">
                              {t('careers.education')}
                            </Label>
                            <Input 
                              id="education" 
                              placeholder={t('placeholder.education')}
                              className="mt-2"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="coverLetter" className="text-base font-medium">
                            {t('careers.coverLetter')}
                          </Label>
                          <Textarea 
                            id="coverLetter"
                            placeholder={t('placeholder.coverLetter')}
                            rows={4}
                            className="mt-2"
                          />
                        </div>

                        <div>
                          <Label htmlFor="cv" className="text-base font-medium">
                            {t('careers.uploadCV')} {t('common.required')}
                          </Label>
                          <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors">
                            <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                            <p className="text-muted-foreground mb-1 text-sm">
                              {t('careers.uploadCVDesc')}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {t('careers.fileFormats')}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                          <Button variant="hero" size="lg" className="flex-1">
                            {t('common.submit')}
                            <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                          </Button>
                          <Button variant="outline" size="lg" type="button" className="flex-1">
                            {t('common.reset')}
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
      </AnimatedSection>

      {/* Contact HR */}
      <AnimatedSection animation="animate-fade-in" delay={300} className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t('careers.hrContact')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('careers.hrContactDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="construction" size="xl">
              {t('careers.contactHR')}
              <ArrowRight className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
            </Button>
            <div className="text-primary-foreground/80">
              <p>{t('careers.callUs')} <span className="font-bold" dir="ltr">+20 57 xxx-xxxx</span></p>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
};

export default Careers;