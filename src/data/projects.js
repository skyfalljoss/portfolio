import chatbotImg from '../assets/images/chatbot.jpeg';
import dashboardImg from '../assets/images/stock-dashboard.jpg';
import newsAggregatorImg from '../assets/images/news-aggregator.jpg';
import loveableImg from '../assets/images/loveableImg.jpg'
export const projects = [
  {
 
    id: 1,
    title: "Loveable clone ",
    description: "Developed a full-stack SaaS application that leverages AI to generate, build, and deploy complete, functional websites from a single text prompt. The platform handles user authentication, tiered subscriptions, and executes AI-generated code in a secure, sandboxed cloud environment.",
    image: loveableImg,
    githubUrl: "https://github.com/skyfalljoss/Loveable",
    liveUrl: "https://loveable-two.vercel.app/",
    tech: [ "Next.js"," React 19", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Inngest", "OpenAI", "E2B", "Clerk", "Docker", "TailwindCSS", "Vercel"],
    category: "Full-stack",
    featured: true
  },
  {
 
    id: 2,
    title: "Stock Chatbot ",
    description: "Stock Chatbot is a full-stack AI-powered assistant designed for stock prediction, analysis, and conversational financial insights. The project combines deep learning (LSTM) for time series forecasting, a robust backend API, and an interactive Streamlit frontend, enabling users to ask questions, request predictions, and visualize stock trends in a user-friendly chat interface.",
    image: chatbotImg,
    githubUrl: "https://github.com/skyfalljoss/STOCK_CHATBOT",
    liveUrl: null,
    tech: ["Python", "Flask", "Spacy", "Keras/TensorFlow", "Pandas", "Streamlit"],
    category: "Back-End",
    featured: true
  },
  {
    id: 3,
    title: "Finance Portfolio Dashboard",
    description: "This is a real-time portfolio management dashboard that allows users to track their stock investments and portfolio performance with live market data. The application features a Python/Flask backend that fetches real-time stock data from yfinance and a frontend built with HTML, CSS, and JavaScript for a responsive user experience.",
    image: dashboardImg,
    githubUrl: "https://github.com/skyfalljoss/Dashboard",
    liveUrl: null,
    tech: ["Python", "Flask", "SQLAlchemy", "Pandas", "yfinance", "HTML/CSS", "JavaScript"],
    category: "Full Stack",
    featured: true
  },
  {
    id: 4,
    title: "News Aggregator Websites",
    description: "his is a Django-based news aggregator that scrapes articles from various news sources, stores them in a database, and displays them on a modern, responsive website. The project utilizes BeautifulSoup for web scraping, Django for the backend, and Tailwindcss for the frontend design.",
    image: newsAggregatorImg,
    githubUrl: "https://github.com/skyfalljoss/news_aggregator/",
    liveUrl: null,
    tech: ["Python", "Django", "REST API", "MySQL", "BeautifulSoup", "TailwindCSS"],
    category: "Full Stack",
    featured: true
  },
  {
    id: 5,
    title: "Command-Line Game Launcher and Shell.",
    description: "This \"shelf-steam\" project is a perfect example of your skills in a lower-level language (C), which complements the higher-level Python projects you already have. It demonstrates your understanding of operating system concepts like process management and inter-process communication, which are highly valued and set you apart from many other candidates.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/skyfalljoss/Shelf_steam",
    liveUrl: null,
    tech: ["C", "Makefile", "POSIX API", "Unix/Linux"],
    category: "Other",
    featured: false
  },
  {
    id: 6,
    title: "Portfolio Website",
    description: "Modern, responsive portfolio website built with React and Tailwind CSS. Features smooth animations, dark mode, and optimized performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    githubUrl: "https://github.com/username/portfolio-website",
    liveUrl: null,
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Frontend",
    featured: false
  },
  {
    id: 7,
    title: "3D Tic-Tac-Toe AI Competition System",
    description: "Developed a 3D Tic-Tac-Toe game engine for a 5x5x5 board featuring two autonomous AI agents with optimized minimax algorithm and strategic heuristics, complete with automated tournament system for performance benchmarking.",
    image: "https://images.unsplash.com/photo-1668901382969-8c73e450a1f5?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username/3d-tic-tac-toe-ai",
    liveUrl: null,
    tech: ["Python", "Artificial Intelligence", "Minimax Algorithm", "Alpha-Beta Pruning", "Heuristic Design", "Object-Oriented Design"],
    category: "AI/ML",
    featured: false
  },
  {
    id: 8,
    title: "Movie Review Sentiment Analysis",
    description: "Developed a machine learning model to perform sentiment analysis on movie reviews, achieving 100% accuracy, precision, and recall on a balanced test set of over 2,500 reviews. Features text preprocessing pipeline using NLTK and n-gram feature extraction with Logistic Regression classifier.",
    image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    githubUrl: "https://github.com/username/movie-sentiment-analysis",
    liveUrl: null,
    tech: ["Python", "Scikit-learn", "NLTK", "Natural Language Processing", "Logistic Regression", "Text Preprocessing"],
    category: "AI/ML",
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