import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import Button from '../ui/Button';
import { projects } from '../../data/projects.js';
import {ArrowRightIcon} from '../icons/icons.jsx'
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personalInfo';
import TechStackCard from './TechStackCard';


const LatestWork = ({ setCurrentPage }) => {
  const { skills } = personalInfo;
  const featuredProjects = projects.slice(0, 3);

  const handleViewAllProjects = () => {
    setCurrentPage('projects');
  };

  return (
    <section className="py-16 bg-transparent transition-colors duration-300 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle
          title="Latest Work"
          subtitle="Here are some of my recent projects that showcase my skills in web development and design"
        />

        {/* Projects Grid */}
        <div className="mb-10 grid gap-6 sm:mb-12 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id} 
              initial={{ opacity: 0, x: -150 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.1 }}
              transition={{ duration: 1.2, delay: index * 0.1, ease: "easeOut" }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <Button
            variant="secondary"
            size="lg"
            onClick={handleViewAllProjects}
            className="w-full sm:w-auto"
          >
            <span>View All Projects</span>
            <ArrowRightIcon size={16} />
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="mt-14 border-t border-gray-200 pt-14 dark:border-white/10 sm:mt-16 sm:pt-16">
          <TechStackCard rings={skills.rings} connections={skills.connections} />
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
