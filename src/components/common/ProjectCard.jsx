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

  const handleCardClick = () => {
    if (project.liveUrl) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Card hover={true} padding="none" className="group h-full" onClick={project.liveUrl ? handleCardClick : undefined}>
      {/* Project Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-36 w-full object-cover transition-transform duration-300 group-hover:scale-105 sm:h-48"
        />
      </div>

      {/* Project Content */}
      <div className="flex h-full flex-col p-4 sm:p-6">
        <Card.Header className="mb-3 sm:mb-4">
          <h3 className="mb-1.5 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-primary dark:text-white dark:group-hover:text-primary-light sm:mb-2 sm:text-xl">
            {project.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-300 dark:text-gray-200 sm:text-base">
            {project.description}
          </p>
        </Card.Header>

        <Card.Body className="flex-1">
          {/* Tech Stack */}
          <div className="mb-3 flex flex-wrap gap-1.5 sm:mb-4 sm:gap-2">
            {project.tech.map((tech, index) => (
              <span
                key={index}
                className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700 transition-colors duration-300 dark:bg-white/10 dark:text-gray-200 sm:px-3 sm:text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </Card.Body>

        <Card.Footer className="mt-auto border-t-0 pt-0">
          {/* Action Links */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between sm:gap-3">
            <button
              onClick={handleGithubClick}
              className="inline-flex items-center gap-2 text-primary transition-colors group/link cursor-pointer hover:text-orange-600 dark:text-primary-light"
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
                className="inline-flex items-center gap-2 text-gray-600 transition-colors group/link cursor-pointer hover:text-primary dark:text-gray-400 dark:hover:text-primary-light"
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
