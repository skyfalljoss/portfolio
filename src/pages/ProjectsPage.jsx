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
    <div className="pt-20 min-h-screen bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle
          title="All Projects"
          subtitle="A collection of my work, showcasing my skills in web development and design."
        />

        <div className="mb-10 grid gap-6 sm:mb-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
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
            className="w-full sm:w-auto"
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
