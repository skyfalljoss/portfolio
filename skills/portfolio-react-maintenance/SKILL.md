# Portfolio React Maintenance

## Overview
This skill captures how this portfolio repo has actually evolved in git history: repeated edits land in `src/data/*` for content, `src/components/layout/Navigation.jsx` and `src/components/features/ContactSection.jsx` for interaction polish, and recent work focuses on dark mode, animation, and responsive refinements. Use it when updating portfolio content, adding or polishing sections, or making UI changes that must stay consistent across mobile and desktop.

## History Signals
- The most frequently changed files are `src/data/personalInfo.js`, `src/data/projects.js`, `src/components/layout/Navigation.jsx`, and `src/components/features/ContactSection.jsx`.
- Recent commits use `feat:` and `style:` more often, but older history also contains vague subjects like `f`, `email`, and `chore`.
- Recurring fix themes are responsive navigation, dark-mode contrast, contact details, and project/content refreshes.
- The repo has no test runner; `npm run lint` and `npm run build` are the practical quality gates.

## Patterns

### Pattern 1: Data-First Content Updates
- When to use: Updating bio, contact details, resume links, project entries, featured flags, or other portfolio content.
- Implementation: Prefer editing `src/data/personalInfo.js` and `src/data/projects.js` first, then let pages and cards consume those exports. Import local assets from `src/assets` instead of hard-coding public paths.
- Example:

```js
import campusNavigationImg from '../assets/project-image/campus.png';

const projectsData = [
  {
    id: 10,
    title: 'Campus Navigation Assistant',
    image: campusNavigationImg,
    featured: true,
  },
];

export const projects = [...projectsData].sort((a, b) => b.id - a.id);
```

### Pattern 2: Theme-Aware Responsive UI Refinement
- When to use: Editing navigation, section layouts, backgrounds, blog/about/project pages, or contact blocks.
- Implementation: Keep the fix local to the component, pair light and dark Tailwind classes together, and check both desktop and mobile layouts. For viewport-dependent behavior, use `matchMedia` inside `useEffect` with both modern and legacy listener support.
- Example:

```js
useEffect(() => {
  const mediaQuery = window.matchMedia('(min-width: 768px)');

  const handleChange = (event) => {
    setIsDesktop(event.matches);
    if (event.matches) {
      setIsMenuOpen(false);
    }
  };

  setIsDesktop(mediaQuery.matches);

  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }

  mediaQuery.addListener(handleChange);
  return () => mediaQuery.removeListener(handleChange);
}, []);
```

### Pattern 3: Keep Side Effects Explicit And Local
- When to use: Theme toggles, local storage sync, animation toggles, and async contact form states.
- Implementation: Store UI state in the component that owns it, use `useEffect` for DOM or `localStorage` writes, and expose explicit loading/success/error states in the UI instead of silent failure.
- Example:

```js
const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  localStorage.setItem('theme', theme);
}, [theme]);
```

## Review Focus
1. Confirm content changes live in `src/data/*` unless there is a clear reason to embed them in a component.
2. Check dark and light themes together for contrast regressions, especially on About, Blog, Post, Navigation, and background layers.
3. Check mobile and desktop behavior together for nav menus, CTA placement, and section spacing.
4. Keep external links opened in a new tab protected with `rel="noopener noreferrer"` and give icon-only actions an `aria-label`.
5. Run `npm run lint` and `npm run build` for non-trivial UI or content changes.

## Best Practices
1. Make small edits in the highest-signal files first: usually `src/data/*`, `Navigation.jsx`, or the feature component tied to the visible change.
2. Preserve the existing React style: functional components, local state, relative imports, and Tailwind-first styling.
3. Add imported assets through `src/assets` and keep derived exports immutable with `map`, `filter`, spread, or sorted copies.
4. Use descriptive commit subjects such as `feat: add background animation` instead of vague one-word messages.

## Common Mistakes
1. Hard-coding contact info or project content directly in feature components. Avoid this by updating the corresponding data module first.
2. Fixing only one theme or one breakpoint. Avoid this by validating mobile/desktop and light/dark together before finishing.
3. Writing side effects inline during render. Avoid this by keeping DOM and `localStorage` writes inside `useEffect`.
4. Using weak commit messages like `f`, `email`, or bare `chore`. Avoid this by naming the actual intent and affected behavior.

## Examples

### Good Example
```jsx
import { useEffect, useState } from 'react';

const AppTheme = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="text-gray-900 dark:text-gray-200"
      aria-label="Toggle theme"
    >
      Toggle theme
    </button>
  );
};
```

### Anti-pattern
```jsx
const ContactSection = () => {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');

  return (
    <a href="https://github.com/skyfalljoss/" target="_blank">
      GitHub
    </a>
  );
};
```

The anti-pattern mixes side effects into render, hard-codes behavior globally, and opens a new tab without `rel="noopener noreferrer"`.
