import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import { personalInfo } from '../data/personalInfo';
import ContactSection from '../components/features/ContactSection';
// SVG Icon for the timeline
const BriefcaseIcon = ({ className = "" }) => (
  <svg 
    className={className}
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const AboutPage = () => {
  const { aboutTitle, aboutDescription, aboutImage, skills, experience, stats } = personalInfo;

  return (
    <div className="pt-20 bg-white dark:bg-gray-900">
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
              <div key={category} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
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

        {/* Work Experience Section */}
        {/* <div>
          <SectionTitle.Small title="Work Experience" />
          <div className="relative border-l-2 border-gray-200 dark:border-gray-700">
            {experience.map((job, index) => (
              <div key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900">
                  <BriefcaseIcon className="w-5 h-5 text-primary" />
                </span>
                <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900 dark:text-white">
                  {job.position}
                  <span className="text-sm font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full ml-3">{job.period}</span>
                </h3>
                <p className="block mb-2 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{job.company}</p>
                <p className="text-base font-normal text-gray-600 dark:text-gray-300">{job.description}</p>
              </div>
            ))}
          </div>
        </div> */}
        {/* Contact Section */}
      <ContactSection />
      </div>
    </div>
  );
};

export default AboutPage;