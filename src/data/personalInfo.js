import profile from '../assets/images/profile.jpg';
import resumeFile from '../assets/images/resume.pdf';

export const personalInfo = {
  // Basic Information
  name: "Phong Nguyen",
  firstName: "Phong",
  title: "A full-stack developer based in Tampa Florida.",
  email: "pnguyen27@usf.edu",
  phone: "+1 (727) 123-4567",
  location: "St.Petersburg, FL",
  
  // Images
  heroImage: profile,
  aboutImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&h=600&fit=crop",
  
  // Hero Section
  heroDescription: " As a Computer Science student at the University of South Florida, I channel my passion for coding into crafting next generation of intelligent web applications. My toolkit is built on modern technologies like React, JS, Python, Flask and django... which I use to write clean, maintainable code focused on delivering exceptional user experiences. My journey from Vietnam to Florida has given me a unique, cross-cultural perspective that I apply to solving problems and designing intuitive interfaces that resonate with a global audience. I am eager to leverage my technical skills and dedicated work ethic to build the next generation of impactful.",
  
  // About Page
  aboutTitle: "An illustrator and graphic designer based in New Orleans.",
  aboutDescription: [
    "With a background in  computer science, I specialize in creating web applications that are not only functional but also beautiful and intuitive. My journey in tech started over 5 years ago, and I've been passionate about crafting digital experiences ever since.",
    "I work with modern technologies like React, Node.js, JS, and Python to build scalable applications. When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or hiking in the beautiful Bay Area mountains.",
    "I believe in writing clean, maintainable code and creating user experiences that make people's lives easier. Whether you're a startup looking to build your first product or an established company wanting to modernize your tech stack, I'd love to help bring your vision to life."
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
    frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
    backend: ["Node.js", "Express.js", "Python", "Django", "REST APIs", "GraphQL"],
    database: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Prisma"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code", "Postman"],
    other: ["Responsive Design", "Testing", "Agile", "UI/UX Design", "SEO"]
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
