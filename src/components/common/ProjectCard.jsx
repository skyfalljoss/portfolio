import React from 'react';
import Card from '../ui/Card';

// Custom SVG Icons as React components
const GithubIcon = ({ size = 16, className = "" }) => (
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
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
    <path d="M9 18c-4.51 2-5-2-7-2"/>
  </svg>
);

const ExternalLinkIcon = ({ size = 12, className = "" }) => (
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
    <path d="M15 3h6v6"/>
    <path d="M10 14L21 3"/>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
  </svg>
);

const ProjectCard = ({ project }) => {
  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleLiveClick = (e) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card hover={true} padding="none" className="group">
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" /> */}
      </div>

      {/* Project Content */}
      <div className="p-6">
        <Card.Header>
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {project.description}
          </p>
        </Card.Header>

        <Card.Body>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span 
                key={index} 
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card.Body>

        <Card.Footer className="border-t-0 pt-0 mt-0">
          {/* Action Links */}
          <div className="flex items-center justify-between">
            <button
              onClick={handleGithubClick}
              className="inline-flex items-center space-x-2 text-primary hover:text-orange-600 transition-colors group/link"
            >
              <GithubIcon size={16} />
              <span className="text-sm font-medium">View Code</span>
              <ExternalLinkIcon size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
            </button>

            {project.liveUrl && (
              <button
                onClick={handleLiveClick}
                className="inline-flex items-center space-x-2 text-gray-600 hover:text-primary transition-colors group/link"
              >
                <span className="text-sm font-medium">Live Demo</span>
                <ExternalLinkIcon size={12} className="opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </button>
            )}
          </div>
        </Card.Footer>
      </div>
    </Card>
  );
};

export default ProjectCard;
