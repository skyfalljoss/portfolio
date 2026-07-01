# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development Server**: `npm run dev` - Starts Vite development server at http://localhost:5173
- **Production Build**: `npm run build` - Creates optimized production build in `/dist` directory
- **Preview Build**: `npm run preview` - Previews production build locally
- **Linting**: `npm run lint` - Runs ESLint on all source files
- **Deployment**: `npm run deploy` - Builds and deploys to GitHub Pages

## Project Architecture

### Core Structure
- **SPA Architecture**: Single Page Application using React Router implemented via manual state management in App.jsx
- **Component Organization**:
  - `/components/common` - Reusable components (SectionTitle, ProjectCard, BlogCard)
  - `/components/features` - Page-specific sections (Hero, LatestWork, BlogPreview, ContactSection)
  - `/components/layout` - Layout components (Navigation, DarkBackground, LightBackground)
  - `/components/ui` - Primitive UI elements (Button, Card, ThemeSwitcher, StartupAnimation)
  - `/components/icons` - SVG icon components
- **Data Layer**:
  - `/data` - Contains personalInfo.js (personal data), mock data for projects/blog
  - `/pages` - Top-level page components (HomePage, AboutPage, BlogPage, PostBlogPage, ProjectsPage)
- **Styling**:
  - Tailwind CSS with custom colors (primary: #FF6B35, secondary: #1E40AF)
  - Dark mode implemented via class strategy on documentElement
  - Global styles in `/src/styles/globals.css`

### Key Implementation Patterns
- **State Management**: React useState/useEffect for theme, navigation, and modal states
- **Theme System**: Light/dark toggle persists to localStorage, adds/removes 'dark' class on html element
- **Animation**: Framer Motion for scroll-based parallax effects (ContactSection) and entrance animations
- **Form Handling**: ContactSection uses EmailJS for form submission without backend
- **Image Optimization**: Assets stored in `/src/assets/images/` with optimized variants for light/dark backgrounds

### File Conventions
- Component files use `.jsx` extension
- Icons exported as named components from `/src/components/icons/icons.jsx`
- Page components receive setter functions for navigation state
- Tailwind configuration enables JIT mode with content paths for template scanning
