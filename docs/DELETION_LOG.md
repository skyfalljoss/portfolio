# Code Deletion Log

## [2026-04-03] Refactor Session

### Unused Dependencies Removed
- @heroicons/react - no references found in the application codebase
- @radix-ui/react-dialog - no references found in the application codebase
- @radix-ui/react-navigation-menu - no references found in the application codebase
- @radix-ui/react-slot - no references found in the application codebase
- class-variance-authority - no references found in the application codebase
- clsx - no references found in the application codebase
- lucide-react - no references found in the application codebase
- tailwind-merge - no references found in the application codebase
- @types/react - unused in this JavaScript-only project
- @types/react-dom - unused in this JavaScript-only project

### Unused Files Deleted
- src/assets/icons/icons.js - duplicate icon module replaced by src/components/icons/icons.jsx

### Duplicate Code Consolidated
- src/pages/Homepage.jsx -> src/pages/HomePage.jsx
- Reason: aligned file naming with the existing import path and removed a case-sensitivity mismatch

### Unused Exports Removed
- src/data/personalInfo.js - removed getFullName(), getContactEmail(), getYearsOfExperience(), isAvailable()
- src/data/blogPosts.js - removed getBlogPostById(), getBlogPostsByCategory(), getRecentBlogPosts(), searchBlogPosts()
- src/data/projects.js - removed getProjectById(), getFeaturedProjects(), getProjectsByCategory()

### Dead UI Code Removed
- src/components/features/Hero.jsx - removed debug logging and commented-out sections
- src/components/features/LatestWork.jsx - removed debug logging
- src/components/features/ContactSection.jsx - removed debug logging and stale commented code
- src/pages/BlogPage.jsx - removed unused commented UI blocks
- src/pages/PostBlogPage.jsx - removed unused commented UI blocks

### Impact
- Files deleted: 1
- Dependencies removed: 10
- Lines of code removed: 1,032
- Bundle size reduction: ~1.25 KB (based on build output CSS/JS totals)

### Remaining Manual Review
- ecc-universal in package.json is still reported unused by knip/depcheck, but it was left untouched because it is an existing uncommitted dependency change outside this cleanup batch
- .opencode/ files are still reported as unused by knip; left untouched because they are untracked tooling files outside the app source tree

### Testing
- npm run lint ✅
- npm run build ✅
- npm test not run: no test script is configured in package.json

## [2026-04-09] Refactor Session

### Duplicate Code Consolidated
- src/pages/BlogPage.jsx - removed local SearchIcon and reused src/components/icons/icons.jsx
- src/pages/PostBlogPage.jsx - removed duplicated ArrowLeftIcon, CalendarIcon, ClockIcon, Share2Icon, TwitterIcon, FacebookIcon, and LinkedinIcon in favor of shared icons

### Dead UI Code Removed
- src/pages/PostBlogPage.jsx - removed stale commented BookmarkIcon block
- src/pages/AboutPage.jsx - removed commented-out Work Experience section placeholder that referenced non-rendered code

### Remaining Manual Review
- ecc-universal in package.json is still reported unused by knip/depcheck, but it was left untouched because it is an existing uncommitted dependency change outside this cleanup batch
- .opencode/ files are still reported as unused by knip; left untouched because they are untracked tooling files outside the app source tree

### Testing
- npm run lint ✅
- npm run build ✅
- npm test not run: no test script is configured in package.json
