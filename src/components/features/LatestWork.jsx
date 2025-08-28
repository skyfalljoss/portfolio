import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import Button from '../ui/Button';
import { projects } from '../../data/projects.js';

// Custom SVG Icon as React component
const ArrowRightIcon = ({ size = 16, className = "" }) => (
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
    <line x1="5" y1="12" x2="19" y2="12"/>
    <polyline points="12,5 19,12 12,19"/>
  </svg>
);

const LatestWork = ({ setCurrentPage }) => {
  // Show only the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  const handleViewAllProjects = () => {
    // Navigate to a projects page or portfolio section
    console.log('Navigate to all projects');
    setCurrentPage('projects');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <SectionTitle
          title="Latest Work"
          subtitle="Here are some of my recent projects that showcase my skills in web development and design"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <div key={project.id} className="animate-fade-in-up">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleViewAllProjects}
          >
            <span>View All Projects</span>
            <ArrowRightIcon size={16} />
          </Button>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 pt-16 border-t border-gray-200 bg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Technologies I Work With</h3>
            <p className="text-gray-600">Always learning and exploring new technologies</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              'React', 'JavaScript', 'Node.js', 'Python', 'Flask', 'Django','MYSQL', 'Tailwindcss',
            ].map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
