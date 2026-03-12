import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import Button from '../ui/Button';
import { projects } from '../../data/projects.js';
import {ArrowRightIcon} from '../icons/icons.jsx'
import { motion } from 'framer-motion';


const LatestWork = ({ setCurrentPage }) => {
  // Show only the first 3 projects
  const featuredProjects = projects.slice(0, 3);

  const handleViewAllProjects = () => {
    // Navigate to a projects page or portfolio section
    console.log('Navigate to all projects');
    setCurrentPage('projects');
  };

  return (
    <section className="py-20 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionTitle
          title="Latest Work"
          subtitle="Here are some of my recent projects that showcase my skills in web development and design"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
          >
            <span>View All Projects</span>
            <ArrowRightIcon size={16} />
          </Button>
        </div>

        {/* Skills Preview */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-white/10">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">Technologies I Work With</h3>
            <p className="text-gray-600 dark:text-gray-400 transition-colors duration-300">Always learning and exploring new technologies</p>
          </div>

          <div className="grid grid-cols-2 !md:grid-cols-4 lg:!grid-cols-4   gap-4">
            {[
              'React', 'JavaScript', 'Node.js', 'Python', 'Flask', 'Django','MYSQL','PostGreSQL', 'Tailwindcss', 'Bootstrap','Agile', 'Jira'
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ 
                  duration: 1.0, 
                  delay: index * 0.05,
                  type: "spring",
                  stiffness: 60 
                }}
                className="bg-gray-50/80 dark:bg-white/5 rounded-lg p-4 text-center hover:bg-white dark:hover:bg-white/10 transition-colors duration-300 border border-gray-100 dark:border-white/10 backdrop-blur-sm shadow-sm"
              >
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
