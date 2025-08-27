import profile from '../assets/images/profile.jpg';
import resumeFile from '../assets/images/resume.pdf';

export const personalInfo = {
  // Basic Information
  name: "Phong Nguyen",
  firstName: "Phong",
  title: "A software engineer enthusiast based in Tampa Florida.",
  email: "pnguyen27@usf.edu",
  phone: "+1 (727) 123-4567",
  location: "St.Petersburg, FL",
  
  // Images
  heroImage: profile,
  aboutImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
  
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
    github: "https://github.com/",
    linkedin: "https://linkedin.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    email: "https://mail.google.com/mail/u/0/?to=pnguyen27@usf.edu"
    
  },
  
  // Experience
  experience: [
    {
      position: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2022 - Present",
      description: "Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for complex business requirements.",
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
    },
    {
      position: "Full Stack Developer",
      company: "Digital Solutions Co.",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects including e-commerce platforms, content management systems, and custom web applications.",
      technologies: ["React", "Express.js", "MongoDB", "HTML/CSS", "JavaScript"]
    },
    {
      position: "Frontend Developer",
      company: "StartupXYZ",
      period: "2019 - 2020",
      description: "Built responsive user interfaces and improved user experience for the company's main product. Collaborated closely with designers and backend developers.",
      technologies: ["React", "Redux", "Sass", "Bootstrap", "Git"]
    },
    {
      position: "Junior Web Developer",
      company: "Web Agency Pro",
      period: "2018 - 2019",
      description: "Started my professional journey building websites for small businesses and learning modern web development practices.",
      technologies: ["HTML", "CSS", "JavaScript", "WordPress", "PHP"]
    }
  ],
  
  // Skills
  skills: {
    Languages: ["Python", "C/C++", "C#", "SQL", "HTML", "CSS", "JavaScript"],
    Frameworks: ["Reactjs", "Django", "Flask", "Tailwindcss", "Bootstrap"],
    database: ["MYSQL", "SQLite", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Docker",  "Figma", "VS Code", "Postman"],
    other: ["Responsive Design", "Testing", "Agile", "UI/UX Design"]
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

// Helper functions
export const getFullName = () => personalInfo.name;
export const getContactEmail = () => personalInfo.email;
export const getYearsOfExperience = () => personalInfo.stats.yearsExperience;
export const isAvailable = () => personalInfo.availability.status === "available";
