export const projects = [
  {
    id: 1,
    title: "Stock Chatbot ",
    description: "Stock Chatbot is a full-stack AI-powered assistant designed for stock prediction, analysis, and conversational financial insights. The project combines deep learning (LSTM) for time series forecasting, a robust backend API, and an interactive Streamlit frontend, enabling users to ask questions, request predictions, and visualize stock trends in a user-friendly chat interface.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/skyfalljoss/STOCK_CHATBOT",
    liveUrl: "https://ecommerce-demo.netlify.app",
    tech: ["Python", "Flask", "Spacy", "Keras/TensorFlow", "Pandas", "Streamlit"],
    category: "Back-End",
    featured: true
  },
  {
    id: 2,
    title: "Finance Portfolio Dashboard",
    description: "This is a real-time portfolio management dashboard that allows users to track their stock investments and portfolio performance with live market data. The application features a Python/Flask backend that fetches real-time stock data from yfinance and a frontend built with HTML, CSS, and JavaScript for a responsive user experience.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/skyfalljoss/Dashboard",
    liveUrl: "https://task-manager-demo.netlify.app",
    tech: ["Python", "Flask", "SQLAlchemy", "Pandas", "yfinance", "HTML/CSS", "JavaScript"],
    category: "Full Stack",
    featured: true
  },
  {
    id: 3,
    title: "News Aggregator Websites",
    description: "his is a Django-based news aggregator that scrapes articles from various news sources, stores them in a database, and displays them on a modern, responsive website. The project utilizes BeautifulSoup for web scraping, Django for the backend, and Tailwindcss for the frontend design.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/skyfalljoss/news_aggregator/",
    liveUrl: "https://weather-dashboard-demo.netlify.app",
    tech: ["Python", "Django", "REST API", "MySQL", "BeautifulSoup", "TailwindCSS"],
    category: "Full Stack",
    featured: true
  },
  {
    id: 4,
    title: "Command-Line Game Launcher and Shell.",
    description: "This \"shelf-steam\" project is a perfect example of your skills in a lower-level language (C), which complements the higher-level Python projects you already have. It demonstrates your understanding of operating system concepts like process management and inter-process communication, which are highly valued and set you apart from many other candidates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/skyfalljoss/Shelf_steam",
    tech: ["C", "Makefile", "POSIX API", "Unix/Linux"],
    category: "Other",
    featured: false
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/portfolio-website",
    liveUrl: "https://alex-portfolio.netlify.app",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
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