import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';
import { projects } from '../data/projects.js';
import Button from '../components/ui/Button';

const ArrowLeftIcon = ({ size = 16, className = "" }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="12" x2="5" y2="12"/>
    <polyline points="12,19 5,12 12,5"/>
  </svg>
);

const ProjectsPage = ({ setCurrentPage }) => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle
          title="All Projects"
          subtitle="A collection of my work, showcasing my skills in web development and design."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.id} className="animate-fade-in-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setCurrentPage('home')}
          >
            <ArrowLeftIcon size={16} />
            <span>Back to Home</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;