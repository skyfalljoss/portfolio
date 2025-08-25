export const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Full-stack React application with Node.js backend, featuring user authentication, payment integration with Stripe, and real-time inventory management.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.netlify.app",
    tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
    category: "Full Stack",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Real-time collaborative task management application built with React and Firebase. Features include drag-and-drop functionality, team collaboration, and progress tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/task-manager",
    liveUrl: "https://task-manager-demo.netlify.app",
    tech: ["React", "Firebase", "Tailwind CSS", "React DnD"],
    category: "Frontend",
    featured: true
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Interactive weather dashboard with data visualization and location-based forecasts. Features beautiful charts and responsive design for all devices.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    tech: ["JavaScript", "D3.js", "API Integration", "Chart.js"],
    category: "Frontend",
    featured: true
  },
  {
    id: 4,
    title: "Social Media API",
    description: "RESTful API for a social media platform with user authentication, post management, real-time messaging, and advanced security features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/social-api",
    tech: ["Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    category: "Backend",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/portfolio-website",
    liveUrl: "https://alex-portfolio.netlify.app",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Netlify"],
    category: "Frontend",
    featured: false
  },
  {
    id: 6,
    title: "Blog CMS",
    description: "Content Management System for blogs with rich text editor, media management, SEO optimization, and multi-user support.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68e2c6b696?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/blog-cms",
    liveUrl: "https://blog-cms-demo.netlify.app",
    tech: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "Full Stack",
    featured: false
  }
];

export const getProjectById = (id) => {
  return projects.find(project => project.id === id);
};

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};