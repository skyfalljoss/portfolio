import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { personalInfo } from '../data/personalInfo';
import ContactSection from '../components/features/ContactSection';

const AboutPage = () => {
  const { aboutTitle, aboutDescription, aboutImage, skills } = personalInfo;

  return (
    <div className="pt-20 bg-transparent transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <SectionTitle
          title="About Me"
          subtitle="A little bit about my journey, skills, and experience."
        />

        {/* Introduction Section */}
        <div className="grid md:grid-cols-5 gap-12 items-center mb-24">
          <div className="md:col-span-2">
            <img 
              src={aboutImage}
              alt="Phong Nguyen"
              className="rounded-xl shadow-2xl w-full"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{aboutTitle}</h2>
            {aboutDescription.map((paragraph, index) => (
              <p key={index} className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

        {/* My Skills Section */}
        <div className="mb-24">
          <SectionTitle.Small title="My Skills" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(skills).map(([category, skillList]) => (
              <div key={category} className="bg-gray-50/80 dark:bg-white/5 border border-gray-100 dark:border-white/10 backdrop-blur-sm p-6 rounded-lg transition-colors duration-300">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 capitalize">{category}</h3>
                <ul className="space-y-2">
                  {skillList.map((skill, index) => (
                    <li key={index} className="text-gray-600 dark:text-gray-300">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        {/* Contact Section */}
      <ContactSection />
      </div>
    </div>
  );
};

export default AboutPage;
