# Phong Nguyen's Portfolio - Project Context

This is a modern, responsive personal portfolio website built for Phong Nguyen, a software engineer based in Florida. The project showcases projects, professional experience, and blog posts.

## Project Overview

- **Core Tech Stack:** React 19, Vite, Tailwind CSS 4.
- **Styling:** Utility-first CSS with Tailwind CSS, utilizing `@tailwindcss/vite` plugin and custom global styles in `src/styles/globals.css`.
- **Animations:** Powered by `framer-motion` and `canvas-confetti`.
- **Icons:** `lucide-react` (aliased in `package.json` to be compatible with React 19).
- **Communication:** `emailjs-browser` for the contact form.

## Architecture & Navigation

The application is structured as a Single Page Application (SPA) but uses a **custom routing mechanism** instead of a library like `react-router-dom`.

- **Main Entry:** `src/main.jsx`
- **Routing Logic:** `src/App.jsx` manages the `currentPage` state and conditionally renders components from `src/pages/`.
- **Theme Management:** Support for Dark/Light modes is implemented in `App.jsx`, persisting preference in `localStorage` and toggling the `dark` class on the root element.

## Directory Structure

- `src/components/`: Reusable components categorized by scope:
  - `common/`: Shared components like cards and titles.
  - `features/`: Major section previews and complex interactive components.
  - `layout/`: Structural components like Navigation and Background wrappers.
  - `ui/`: Lower-level UI primitives like buttons and animations.
- `src/data/`: **Critical Directory.** Contains the source-of-truth for all portfolio content.
  - `personalInfo.js`: Profile details, social links, and skills.
  - `projects.js`: Project descriptions, tech stacks, and links.
  - `blogPosts.js`: Content for the blog section.
- `src/pages/`: Top-level view components (Home, About, Blog, Projects).
- `src/styles/`: Global CSS and Tailwind configuration.

## Building and Running

- **Development:** `npm run dev` (Starts Vite server at `http://localhost:5173`)
- **Production Build:** `npm run build`
- **Linting:** `npm run lint`
- **Deployment:** `npm run deploy` (Uses `gh-pages` to deploy to GitHub Pages)

## Development Conventions

1.  **Content Updates:** To update any information on the site (projects, bio, skills), modify the files in `src/data/`. Do not hardcode content directly into components.
2.  **Navigation:** When adding a new page, add its key to the `renderPage` switch statement in `src/App.jsx` and update `Navigation.jsx`.
3.  **Styling:** Use Tailwind utility classes primarily. For theme-specific styling, use the `dark:` prefix.
4.  **React 19:** Ensure compatibility with React 19 features and avoid deprecated APIs. Use the `overrides` section in `package.json` if adding libraries that haven't officially updated their peer dependencies yet.
5.  **Images:** Store local images in `src/assets/images/` and import them into the data files.
