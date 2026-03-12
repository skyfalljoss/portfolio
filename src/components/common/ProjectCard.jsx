import React from "react";
import Card from "../ui/Card";
import { GithubIcon, ExternalLinkIcon } from "../icons/icons";


const ProjectCard = ({ project }) => {
  const handleGithubClick = (e) => {
    e.stopPropagation();
    window.open(project.githubUrl, "_blank", "noopener,noreferrer");
  };

  const handleLiveClick = (e) => {
    e.stopPropagation();
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
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
      </div>

      {/* Project Content */}
      <div className="p-6">
        <Card.Header>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-primary-light transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-200 text-sm leading-relaxed transition-colors duration-300">
            {project.description}
          </p>
        </Card.Header>

        <Card.Body>
          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200 rounded-full text-sm font-medium transition-colors duration-300"
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
              className="inline-flex items-center space-x-2 text-primary dark:text-primary-light hover:text-orange-600 transition-colors group/link cursor-pointer"
            >
              <GithubIcon size={16} />
              <span className="text-sm font-medium">View Code</span>
              <ExternalLinkIcon
                size={12}
                className="opacity-0 group-hover/link:opacity-100 transition-opacity"
              />
            </button>

            {project.liveUrl && (
              <button
                onClick={handleLiveClick}
                className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors group/link cursor-pointer"
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
