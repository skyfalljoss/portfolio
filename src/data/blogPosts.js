export const blogPosts = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for structuring large React applications with proper state management and component architecture.",
    date: "Mar 15, 2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    readTime: "8 min read",
    category: "React",
    tags: ["React", "Architecture", "State Management", "Best Practices"],
    content: `When building large-scale React applications, proper architecture becomes crucial for maintainability and scalability. In this comprehensive guide, we'll explore various patterns and best practices that can help you structure your React applications effectively.

One of the first considerations is how to organize your components. A well-structured component hierarchy makes it easier to locate and maintain code. Consider using a feature-based folder structure where related components, hooks, and utilities are grouped together.

State management is another critical aspect. While React's built-in state management works well for smaller applications, larger applications often benefit from more sophisticated solutions like Redux, Zustand, or the Context API combined with useReducer.

Performance optimization becomes increasingly important as your application grows. Techniques like code splitting, lazy loading, and memoization can significantly improve your application's performance and user experience.

Another important aspect is testing. A well-tested application gives you confidence when making changes and helps prevent regressions. Consider implementing unit tests, integration tests, and end-to-end tests using tools like Jest, React Testing Library, and Cypress.

Finally, don't forget about accessibility and SEO. These aspects are often overlooked but are crucial for creating inclusive and discoverable applications.`
  },
  {
    id: 2,
    title: "Modern CSS Techniques for Developers",
    excerpt: "Explore advanced CSS features including Grid, Flexbox, and custom properties that every developer should know.",
    date: "Mar 10, 2024",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop",
    readTime: "6 min read",
    category: "CSS",
    tags: ["CSS", "Grid", "Flexbox", "Modern Web"],
    content: `CSS has evolved tremendously over the past few years, introducing powerful features that make styling more intuitive and maintainable. Let's dive into some modern CSS techniques that every developer should have in their toolkit.

CSS Grid has revolutionized how we approach layout design. Unlike Flexbox, which is primarily one-dimensional, Grid allows you to work in two dimensions simultaneously. This makes it perfect for complex layouts that would have required multiple nested containers in the past.

Custom properties (CSS variables) provide a way to store and reuse values throughout your stylesheet. They're particularly useful for maintaining consistent design systems and enabling dynamic theming.

Container queries represent the next evolution in responsive design, allowing components to respond to their container's size rather than just the viewport size.

The :has() selector, often called the "parent selector," allows you to style elements based on their descendants. This was previously impossible with CSS alone and required JavaScript solutions.

Modern CSS also includes powerful functions like clamp(), min(), and max() that enable more flexible and responsive designs without media queries.`
  },
  {
    id: 3,
    title: "JavaScript ES2024 Features You Should Know",
    excerpt: "Stay up-to-date with the latest JavaScript features and how they can improve your development workflow.",
    date: "Mar 5, 2024",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop",
    readTime: "10 min read",
    category: "JavaScript",
    tags: ["JavaScript", "ES2024", "Features", "Modern JS"],
    content: `JavaScript continues to evolve with new features that make development more efficient and code more readable. ES2024 introduces several exciting additions that are worth exploring.

The new Array grouping methods provide elegant ways to organize data without external libraries. These methods make it easier to transform and categorize arrays based on specific criteria.

Temporal API is set to replace the often-confusing Date object with a more intuitive and powerful time handling system. While still in proposal stage, it's important to understand its concepts as it will likely become standard.

Decorators offer a clean way to modify or extend class behavior without inheritance. They provide a declarative approach to adding functionality to classes and their members.

The pipeline operator (|>) allows for more readable function composition, making it easier to chain operations without nested function calls.

Import attributes provide a way to specify how modules should be loaded, which is particularly useful for JSON modules and other non-JavaScript resources.

Pattern matching, while still in early stages, promises to bring powerful conditional logic patterns to JavaScript, similar to what we see in functional programming languages.`
  },
  {
    id: 4,
    title: "Building REST APIs with Node.js and Express",
    excerpt: "A comprehensive guide to creating robust and scalable REST APIs using Node.js, Express, and best practices.",
    date: "Feb 28, 2024",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    readTime: "12 min read",
    category: "Backend",
    tags: ["Node.js", "Express", "API", "Backend"],
    content: `Building REST APIs is a fundamental skill for modern web developers. In this guide, we'll explore how to create robust, scalable APIs using Node.js and Express.

First, let's establish a solid foundation. A well-designed API follows RESTful principles, uses appropriate HTTP methods, and returns consistent response formats. Proper error handling and validation are crucial for a production-ready API.

Authentication and authorization are critical security aspects. We'll explore JWT tokens, middleware implementation, and best practices for securing your endpoints.

Database integration is another key component. Whether you're using MongoDB, PostgreSQL, or another database, proper data modeling and efficient queries are essential for performance.

Testing your API ensures reliability and helps catch issues early. We'll cover unit testing, integration testing, and API documentation using tools like Jest and Swagger.

Finally, we'll discuss deployment strategies, monitoring, and scaling considerations for production environments.`
  },
  {
    id: 5,
    title: "The Future of Web Development: Trends to Watch",
    excerpt: "Explore emerging trends and technologies that are shaping the future of web development.",
    date: "Feb 20, 2024",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=300&fit=crop",
    readTime: "7 min read",
    category: "Trends",
    tags: ["Future", "Trends", "Web Development", "Technology"],
    content: `The web development landscape is constantly evolving, with new technologies and approaches emerging regularly. Let's explore some key trends that are shaping the future of web development.

WebAssembly (WASM) is gaining traction as a way to run high-performance applications in the browser. This technology allows developers to use languages like C++, Rust, and Go for web applications.

Serverless architecture continues to grow, with edge computing bringing computation closer to users for improved performance and reduced latency.

Jamstack architecture has proven its worth for building fast, secure, and scalable websites. The combination of JavaScript, APIs, and Markup offers excellent developer experience and performance.

AI and machine learning are becoming more accessible to web developers, with tools and APIs that make it easier to integrate intelligent features into applications.

Progressive Web Apps (PWAs) are bridging the gap between web and native applications, offering app-like experiences with web technologies.

The rise of micro-frontends is changing how we think about large-scale frontend architecture, allowing teams to work independently while maintaining cohesion.`
  },
  {
    id: 6,
    title: "Optimizing Web Performance: A Developer's Guide",
    excerpt: "Learn essential techniques for improving website performance and creating faster user experiences.",
    date: "Feb 15, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    readTime: "9 min read",
    category: "Performance",
    tags: ["Performance", "Optimization", "Web Vitals", "Speed"],
    content: `Web performance directly impacts user experience, SEO rankings, and conversion rates. In this guide, we'll explore essential techniques for optimizing website performance.

Core Web Vitals have become crucial metrics for measuring user experience. Understanding LCP, FID, and CLS helps you focus optimization efforts where they matter most.

Image optimization is often the quickest way to improve performance. Modern formats like WebP and AVIF, along with responsive images and lazy loading, can significantly reduce page load times.

Code splitting and lazy loading allow you to load only the necessary code for each page, reducing initial bundle sizes and improving perceived performance.

Caching strategies, both browser-side and server-side, can dramatically improve repeat visit performance. Understanding different caching headers and techniques is essential.

The Critical Rendering Path optimization ensures that above-the-fold content loads as quickly as possible, improving user perception of your site's speed.

Performance monitoring and measurement tools help you identify bottlenecks and track improvements over time.`
  }
];

export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

export const getBlogPostsByCategory = (category) => {
  if (category === 'all') return blogPosts;
  return blogPosts.filter(post => post.category === category);
};

export const getRecentBlogPosts = (limit = 3) => {
  return blogPosts.slice(0, limit);
};

export const searchBlogPosts = (query) => {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post => 
    post.title.toLowerCase().includes(lowerQuery) ||
    post.excerpt.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
};