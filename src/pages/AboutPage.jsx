import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { personalInfo } from '../data/personalInfo';
import ContactSection from '../components/features/ContactSection';
import TechStackCard from '../components/features/TechStackCard';

const AboutPage = () => {
  const { aboutTitle, aboutDescription, aboutImage, skills } = personalInfo;

  return (
    <div className="pt-20 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 sm:py-16">
        <SectionTitle
          title="About Me"
          subtitle="A little bit about my journey, skills, and experience."
        />

        {/* Introduction Section */}
        <div className="mb-16 grid items-center gap-8 md:mb-24 md:grid-cols-5 md:gap-12">
          <div className="mx-auto w-full max-w-md md:col-span-2">
            <img 
              src={aboutImage}
              alt="Phong Nguyen"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">{aboutTitle}</h2>
            {aboutDescription.map((paragraph, index) => (
              <p key={index} className="mb-4 text-base leading-relaxed text-gray-600 dark:text-gray-300 sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* My Skills Section */}
        <div className="mb-16 sm:mb-24">
          <TechStackCard rings={skills.rings} connections={skills.connections} />
        </div>
        {/* Contact Section */}
      <ContactSection />
      </div>
    </div>
  );
};

export default AboutPage;
