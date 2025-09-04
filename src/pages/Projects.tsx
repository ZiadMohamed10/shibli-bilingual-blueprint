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
    { id: 'all', label: t('projects.allProjects') },
    { id: 'bridges', label: t('projects.bridgesRoads') },
    { id: 'housing', label: t('projects.housingProjects') },
    { id: 'infrastructure', label: t('projects.infrastructure') },
    { id: 'facilities', label: t('projects.publicFacilities') },
  ];

  const ongoingProjects = [
    {
      id: 1,
      title: t('projects.newDamiettaBridge'),
      description: t('projects.bridgeDesc'),
      location: t('projects.newDamietta'),
      startDate: t('projects.newDamiettaBridgeDate').split(' - ')[0],
      expectedCompletion: t('projects.newDamiettaBridgeDate').split(' - ')[1],
      progress: 75,
      category: 'bridges',
      image: heroImage,
      status: t('projects.inProgress'),
      budget: t('projects.newDamiettaBridgeBudget'),
    },
    {
      id: 2,
      title: t('projects.integratedHousingPhase2'),
      description: t('projects.housingDesc'),
      location: t('projects.newDamietta'),
      startDate: t('projects.integratedHousingPhase2Date').split(' - ')[0],
      expectedCompletion: t('projects.integratedHousingPhase2Date').split(' - ')[1],
      progress: 25,
      category: 'housing',
      image: constructionWorkers,
      status: t('projects.underImplementation'),
      budget: t('projects.integratedHousingPhase2Budget'),
    },
    {
      id: 3,
      title: t('projects.roadNetworkDevelopment'),
      description: t('projects.roadDesc'),
      location: t('projects.damietta'),
      startDate: t('projects.roadNetworkDate').split(' - ')[0],
      expectedCompletion: t('projects.roadNetworkDate').split(' - ')[1],
      progress: 40,
      category: 'infrastructure',
      image: heroImage,
      status: t('projects.advancedStage'),
      budget: t('projects.roadNetworkBudget'),
    },
  ];

  const completedProjects = [
    {
      id: 4,
      title: t('projects.integratedHousingPhase1'),
      description: t('projects.housingPhase1Desc'),
      location: t('projects.newDamietta'),
      completionDate: 'ديسمبر 2023',
      category: 'housing',
      image: constructionWorkers,
      status: t('projects.completed'),
      budget: '200 مليون جنيه',
    },
    {
      id: 5,
      title: t('projects.nasrUrbanBridge'),
      description: t('projects.nasrBridgeDesc'),
      location: t('projects.damietta'),
      completionDate: 'سبتمبر 2023',
      category: 'bridges',
      image: heroImage,
      status: t('projects.completed'),
      budget: '80 مليون جنيه',
    },
    {
      id: 6,
      title: t('projects.damiettaMedicalCenter'),
      description: t('projects.medicalCenterDesc'),
      location: t('projects.damietta'),
      completionDate: 'مايو 2023',
      category: 'facilities',
      image: constructionWorkers,
      status: t('projects.completed'),
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
                  <span className="text-sm">{t('projects.completionPercentage')}</span>
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
            {t('projects.budget')}: {project.budget}
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
            {t('projects.subtitle')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-background border-b">
        <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center mb-4">
              <Filter className="h-5 w-5 text-muted-foreground mr-2 rtl:mr-0 rtl:ml-2" />
              <span className="text-muted-foreground font-medium">{t('projects.filterByType')}</span>
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
              <TabsTrigger value="ongoing" className="text-lg">{t('projects.ongoingProjects')}</TabsTrigger>
              <TabsTrigger value="completed" className="text-lg">{t('projects.completedProjects')}</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ongoing">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-primary mb-4">
                  {t('projects.ongoingProjects')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('projects.ongoingDesc')}
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
                  {t('projects.completedProjects')}
                </h2>
                <p className="text-xl text-muted-foreground">
                  {t('projects.completedDesc')}
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
              {t('projects.projectStats')}
            </h2>
            <p className="text-xl text-muted-foreground">
              {t('projects.projectStatsDesc')}
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '120+', label: t('projects.completedProjectsCount') },
              { number: '15+', label: t('projects.ongoingProjectsCount') },
              { number: '2.5B+', label: t('projects.projectsValue') },
              { number: '95%', label: t('projects.satisfactionRate') },
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
            {t('projects.partnerInProject')}
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            {t('projects.partnerDesc')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="construction" size="xl" asChild>
              <Link to="/contact">
                {t('projects.startProject')}
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
                {t('projects.learnAboutCompany')}
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;