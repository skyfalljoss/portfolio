import profile from '../assets/images/profile.jpeg';
import resumeFile from '../assets/images/resume.pdf';

export const personalInfo = {
  // Basic Information
  name: "Phong Nguyen",
  firstName: "Phong",
  title: "A software engineer enthusiast based in Tampa Florida.",
  email: "phongng.swe@gmail.com",
  phone: "+1 (727) 123-4567",
  location: "St.Petersburg, FL",
  
  // Images
  heroImage: profile,
  aboutImage: profile,
  
  // Hero Section
  heroDescription: " As a Computer Science student at the University of South Florida, I channel my passion for coding into crafting next generation of intelligent web applications. My toolkit is built on modern technologies like React, JS, Python, Flask and django... which I use to write clean, maintainable code focused on delivering exceptional user experiences. My journey from Vietnam to Florida has given me a unique, cross-cultural perspective that I apply to solving problems and designing intuitive interfaces that resonate with a global audience. I am eager to leverage my technical skills and dedicated work ethic to build the next generation of impactful.",
  
  // About Page
  aboutTitle: "A software engineer based in Florida.",
  aboutDescription: [
    "My journey from Vietnam to Florida is more than a change of scenery; it's a metaphor for my approach to software engineering: always moving forward, adapting, and seeking new challenges. I am a backend specialist who architects the intelligent core of web applications.",
    "I wield Python and its powerful ecosystems—Flask and Django—to build robust, scalable, and smart server-side systems. My passion is engineering the \"brain\" of an operation: creating sophisticated data pipelines, integrating fine-tuned AI models, and designing efficient APIs that transform complex logic into seamless user experiences. I don't just build applications; I engineer intelligent solutions that learn, adapt, and deliver real value.",
    "When I'm not architecting databases or optimizing endpoints, I apply the same strategic thinking to video games and soccer, or find a different kind of bug to avoid while camping in the Florida wilderness.",
    "I'm always excited to connect and collaborate on the next great project. Let's connect to discuss how we can build something intelligent together."
  ],
  
  // Social Links
  socialLinks: {
    github: "https://github.com/skyfalljoss/",
    linkedin: "https://www.linkedin.com/in/phong-nguyen-3467a5207/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    email: "https://mail.google.com/mail/u/0/?to=phongng.swe@gmail.com"
    
  },
  
  // Experience
  experience: [
    
  ],
  
  // Skills
  skills: {
    rings: [
      {
        id: "languages",
        label: "Languages",
        color: "#FF9F0A",
        skills: [
          { name: "Python", proficiency: 90 },
          { name: "C/C++", proficiency: 80 },
          { name: "JavaScript", proficiency: 85 },
          { name: "TypeScript", proficiency: 80 },
          { name: "SQL", proficiency: 85 },
          { name: "HTML/CSS", proficiency: 90 },
        ],
      },
      {
        id: "frameworks",
        label: "Frameworks & Libraries",
        color: "#00D2FF",
        skills: [
          { name: "React", proficiency: 80 },
          { name: "Next.js", proficiency: 75 },
          { name: "Node.js", proficiency: 80 },
          { name: "Django", proficiency: 85 },
          { name: "Flask", proficiency: 80 },
          { name: "TailwindCSS", proficiency: 85 },
          { name: "SpaCy", proficiency: 70 },
          { name: "Keras/TensorFlow", proficiency: 70 },
        ],
      },
      {
        id: "databases",
        label: "Databases",
        color: "#00FF87",
        skills: [
          { name: "PostgreSQL", proficiency: 80 },
          { name: "MySQL", proficiency: 80 },
          { name: "SQLite", proficiency: 75 },
          { name: "Prisma", proficiency: 70 },
          { name: "SQLAlchemy", proficiency: 75 },
        ],
      },
      {
        id: "devops",
        label: "DevOps & Tools",
        color: "#BF5AF2",
        skills: [
          { name: "Git", proficiency: 85 },
          { name: "GitHub", proficiency: 85 },
          { name: "Docker", proficiency: 70 },
          { name: "Vercel", proficiency: 75 },
          { name: "Clerk", proficiency: 70 },
          { name: "Postman", proficiency: 80 },
          { name: "Jira", proficiency: 75 },
          { name: "Inngest", proficiency: 65 },
          { name: "OpenAI API", proficiency: 75 },
        ],
      },
    ],
    connections: [
      // Python ecosystem
      { from: "Python", to: "Django" },
      { from: "Python", to: "Flask" },
      { from: "Python", to: "SpaCy" },
      { from: "Python", to: "Keras/TensorFlow" },
      { from: "Python", to: "SQLAlchemy" },
      // JavaScript/TypeScript ecosystem
      { from: "JavaScript", to: "React" },
      { from: "JavaScript", to: "Next.js" },
      { from: "JavaScript", to: "Node.js" },
      { from: "JavaScript", to: "TailwindCSS" },
      { from: "TypeScript", to: "React" },
      { from: "TypeScript", to: "Next.js" },
      { from: "TypeScript", to: "Node.js" },
      { from: "TypeScript", to: "Prisma" },
      // HTML/CSS connections
      { from: "HTML/CSS", to: "TailwindCSS" },
      { from: "HTML/CSS", to: "React" },
      // SQL connections
      { from: "SQL", to: "PostgreSQL" },
      { from: "SQL", to: "MySQL" },
      { from: "SQL", to: "SQLite" },
      // Framework-to-database connections
      { from: "Django", to: "PostgreSQL" },
      { from: "Django", to: "SQLite" },
      { from: "Django", to: "Docker" },
      { from: "Flask", to: "SQLAlchemy" },
      { from: "Flask", to: "SQLite" },
      { from: "Flask", to: "Docker" },
      { from: "Next.js", to: "Vercel" },
      { from: "Next.js", to: "Prisma" },
      { from: "Next.js", to: "Node.js" },
      { from: "Node.js", to: "Prisma" },
      { from: "Node.js", to: "Inngest" },
      // Database ORM connections
      { from: "PostgreSQL", to: "Prisma" },
      { from: "PostgreSQL", to: "SQLAlchemy" },
      { from: "PostgreSQL", to: "Docker" },
      // DevOps connections
      { from: "React", to: "Next.js" },
      { from: "React", to: "TailwindCSS" },
      { from: "React", to: "Vercel" },
      { from: "Git", to: "GitHub" },
      { from: "Git", to: "Jira" },
      { from: "Docker", to: "Vercel" },
      { from: "Clerk", to: "Next.js" },
      // AI connections
      { from: "OpenAI API", to: "Python" },
      { from: "OpenAI API", to: "Node.js" },
    ],
  },
  
  // Statistics
  stats: {
    yearsExperience: 1,
    projectsCompleted: 10,
    happyClients: 10,
    coffeeCups: 1250
  },
  
  // Availability
  availability: {
    status: "available", // available, busy, unavailable
    message: "Currently accepting new projects",
    nextAvailable: "Immediately"
  },
  
  // Resume
  resume: {
    url: resumeFile,
    lastUpdated: "August 2025"
  }
};
