# Portfolio V2.0 - Refactored Planning Document

## Project Overview
Refactored version of Ethan Tran's portfolio website with improved architecture, enhanced features, and a portfolio version history feature.

**Current Stack:**
- React 19.1.0
- Vite 7.0.4
- Tailwind CSS 4.1.11
- Material-UI 7.3.1

---

## 🎯 Goals & Objectives

### Primary Goals
1. **Improve Code Architecture** - Implement better component structure and separation of concerns
2. **Enhance User Experience** - Add animations, transitions, and interactive elements
3. **Portfolio Version History** - Allow users to view previous versions of the portfolio
4. **Better Content Management** - Separate content from components for easier updates
5. **Performance Optimization** - Improve loading times and responsiveness
6. **Accessibility** - Ensure WCAG 2.1 AA compliance

---

## 📁 Proposed File Structure

```
client/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Work.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Modal.jsx
│   │   │   └── VersionSwitcher.jsx
│   │   ├── projects/
│   │   │   ├── ProjectCard.jsx
│   │   │   ├── ProjectGrid.jsx
│   │   │   └── ProjectModal.jsx
│   │   └── version-history/
│   │       ├── VersionTimeline.jsx
│   │       ├── VersionPreview.jsx
│   │       └── VersionSelector.jsx
│   ├── data/
│   │   ├── projects.js
│   │   ├── personal-info.js
│   │   ├── skills.js
│   │   └── versions.js
│   ├── hooks/
│   │   ├── useScrollSpy.js
│   │   ├── useIntersectionObserver.js
│   │   └── useVersionHistory.js
│   ├── context/
│   │   └── VersionContext.jsx
│   ├── utils/
│   │   ├── animations.js
│   │   └── constants.js
│   ├── styles/
│   │   └── animations.css
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── version-screenshots/
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── VersionHistory.jsx
│   └── App.jsx
```

---

## 🚀 New Features

### 1. Portfolio Version History Feature (PRIMARY NEW FEATURE)

#### Feature Description
Allow visitors to view and interact with previous versions of the portfolio, showcasing the evolution of design and development skills.

#### Components

**VersionSwitcher Component**
```jsx
// Floating button in corner to access version history
- Toggle between current and historical versions
- Smooth transitions between versions
- Version indicator badge
```

**VersionTimeline Component**
```jsx
// Visual timeline of portfolio versions
- Interactive timeline with version milestones
- Version metadata (date, major changes, tech stack)
- Click to preview or switch to that version
```

**VersionPreview Component**
```jsx
// Preview modal/page for historical versions
- Screenshot/thumbnail of old version
- Key features and changes list
- "View Full Version" button
- Tech stack used at that time
```

#### Data Structure
```javascript
// data/versions.js
export const versions = [
  {
    id: 'v2.0',
    version: '2.0.0',
    date: '2025-11',
    name: 'Number 2',
    description: 'Complete refactor with version history',
    techStack: ['React 19', 'Tailwind 4', 'Vite 7'],
    features: [
      'Version history feature',
      'Improved component architecture',
      'Enhanced animations',
      'Better accessibility'
    ],
    isCurrent: true,
    screenshot: '/assets/version-screenshots/v2.0.png',
    demoUrl: null // Current version
  },
  {
    id: 'v1.0',
    version: '1.0.0',
    date: '2025-10',
    name: 'The Beginning',
    description: 'Initial portfolio launch',
    techStack: ['React 19', 'Tailwind 4', 'MUI 7'],
    features: [
      'Basic portfolio structure',
      'Project showcase',
      'Contact section'
    ],
    isCurrent: false,
    screenshot: '/assets/version-screenshots/v1.0.png',
    demoUrl: '/versions/v1.0' // Archived version
  }
];
```

#### Implementation Strategy

**Option A: Component-Based Version Switching (Recommended)**
- Keep all version components in codebase
- Use conditional rendering based on selected version
- Maintain version-specific styling in separate files
- Pros: Fast switching, no page reload, interactive
- Cons: Larger bundle size

**Option B: Static Archive Approach**
- Export static builds of old versions
- Store in `/public/versions/` directory
- Load in iframe or redirect to archived version
- Pros: Smaller main bundle, true historical preservation
- Cons: Less interactive, requires page reload

**Recommended: Hybrid Approach**
- Use Component-Based for recent versions (v1.x, v2.x)
- Use Static Archive for older versions
- Best of both worlds

---

### 2. Enhanced Animations & Transitions

**Scroll Animations**
- Fade in on scroll using Intersection Observer
- Parallax effects on hero section
- Smooth section transitions

**Micro-interactions**
- Button hover states
- Card lift effects
- Link underline animations
- Project card flip/expand effects

**Page Transitions**
- Smooth navigation between sections
- Version switching animations

---

### 3. Improved Component Architecture

#### Current Issues to Fix
1. All sections in single Home.jsx file (228 lines)
2. Hardcoded content mixed with components
3. No reusable UI component library
4. Limited prop validation

#### Improvements

**Component Separation**
- Extract each section into its own component
- Create reusable UI components (Button, Card, etc.)
- Implement Layout component for consistent structure

**Content Management**
- Move all text, images, and data to separate data files
- Easy updates without touching component code
- Support for multiple languages in future

**Props & Type Safety**
- Add PropTypes or TypeScript
- Proper prop validation
- Default props where appropriate

---

### 4. Enhanced Project Showcase

**Current Project Component Issues:**
- Basic card layout
- Limited information display
- No filtering or sorting
- Links don't open properly

**Proposed Improvements:**

**ProjectCard Component**
```jsx
- Project thumbnail/screenshot
- Tech stack badges
- Brief description
- Hover overlay with more details
- "View Project" and "View Code" buttons
- Project status badge (Completed, In Progress, etc.)
```

**ProjectGrid Component**
```jsx
- Responsive grid layout
- Filter by technology
- Sort by date/featured
- Search functionality
- Category tabs (Web, Mobile, Design, etc.)
```

**ProjectModal Component**
```jsx
- Detailed project information
- Multiple screenshots/images
- Full tech stack
- Challenges & solutions
- Live demo link
- GitHub repository link
- Video demo (optional)
```

---

### 5. Improved Navigation

**Current Nav Issues:**
- Mobile menu not functional
- No active section highlighting
- No smooth scroll indicators

**Proposed Improvements:**
- Functional mobile hamburger menu
- Active section highlighting based on scroll
- Progress indicator showing scroll position
- Version switcher button in nav
- Smooth scroll behavior

---

### 6. Enhanced Contact Section

**Current Contact Issues:**
- Social icons not clickable
- No actual contact form
- Limited information

**Proposed Improvements:**
- Clickable social media links with proper hrefs
- Optional contact form with validation
- Email copy button
- Download resume button
- Availability status indicator

---

### 7. Additional Enhancements

**Skills Section**
- Visual skill representation (bars, icons, or badges)
- Categorized by Frontend, Backend, Tools, etc.
- Proficiency levels

**Testimonials/Recommendations Section**
- Showcase LinkedIn recommendations
- Client testimonials
- Carousel or grid layout

**Blog/Writing Section (Optional)**
- Link to Medium or dev.to articles
- Showcase thought leadership
- Tech blog posts

**Dark/Light Mode Toggle**
- Theme switcher
- Persistent preference (localStorage)
- Smooth transition between themes

---

## 🎨 Design System - Elegant Minimalism

### Design Philosophy
**Minimalism with Purpose** - Every element serves a function. Clean, spacious layouts with intentional use of white space. Focus on content, enhanced by subtle interactions and elegant typography.

**Core Principles:**
- **Clarity** - Clear visual hierarchy and intuitive navigation
- **Breathing Room** - Generous white space, never cramped
- **Subtle Sophistication** - Refined details without overwhelming
- **Responsive Elegance** - Beautiful on all devices
- **Smooth Interactions** - Polished animations and transitions

---

### Color Palette

#### Light Mode
```javascript
const lightMode = {
  // Background Layers
  background: {
    primary: '#FFFFFF',      // Main background
    secondary: '#F8F9FA',    // Card backgrounds, alternate sections
    tertiary: '#F1F3F5',     // Subtle dividers, hover states
    elevated: '#FFFFFF',     // Modals, dropdowns (with shadow)
  },

  // Text Colors
  text: {
    primary: '#1A1A1A',      // Headings, primary content
    secondary: '#4A5568',    // Body text, descriptions
    tertiary: '#718096',     // Subtle text, metadata
    disabled: '#A0AEC0',     // Disabled states
  },

  // Brand Colors
  brand: {
    primary: '#2563EB',      // Primary actions, links
    primaryHover: '#1D4ED8', // Hover state
    secondary: '#7C3AED',    // Accent elements
    secondaryHover: '#6D28D9',
  },

  // Semantic Colors
  semantic: {
    success: '#059669',      // Success states, completed
    successBg: '#D1FAE5',
    warning: '#D97706',      // Warning states
    warningBg: '#FEF3C7',
    error: '#DC2626',        // Error states
    errorBg: '#FEE2E2',
    info: '#0284C7',         // Info states
    infoBg: '#E0F2FE',
  },

  // UI Elements
  ui: {
    border: '#E2E8F0',       // Default borders
    borderHover: '#CBD5E0',  // Hover borders
    shadow: 'rgba(0, 0, 0, 0.08)', // Shadow color
    overlay: 'rgba(0, 0, 0, 0.4)', // Modal overlays
  },

  // Tech Stack Badge Colors
  tech: {
    react: '#61DAFB',
    javascript: '#F7DF1E',
    typescript: '#3178C6',
    tailwind: '#06B6D4',
    node: '#339933',
    python: '#3776AB',
  }
}
```

#### Dark Mode
```javascript
const darkMode = {
  // Background Layers
  background: {
    primary: '#0F0F0F',      // Main background - deeper black
    secondary: '#1A1A1A',    // Card backgrounds
    tertiary: '#262626',     // Hover states, dividers
    elevated: '#2D2D2D',     // Modals, dropdowns (with shadow)
  },

  // Text Colors
  text: {
    primary: '#F7F7F7',      // Headings, primary content
    secondary: '#D1D5DB',    // Body text, descriptions
    tertiary: '#9CA3AF',     // Subtle text, metadata
    disabled: '#6B7280',     // Disabled states
  },

  // Brand Colors (adjusted for dark bg)
  brand: {
    primary: '#3B82F6',      // Slightly brighter for contrast
    primaryHover: '#60A5FA',
    secondary: '#8B5CF6',
    secondaryHover: '#A78BFA',
  },

  // Semantic Colors (dark mode optimized)
  semantic: {
    success: '#10B981',
    successBg: '#064E3B',
    warning: '#F59E0B',
    warningBg: '#78350F',
    error: '#EF4444',
    errorBg: '#7F1D1D',
    info: '#06B6D4',
    infoBg: '#164E63',
  },

  // UI Elements
  ui: {
    border: '#2D2D2D',
    borderHover: '#404040',
    shadow: 'rgba(0, 0, 0, 0.5)',
    overlay: 'rgba(0, 0, 0, 0.7)',
  },

  // Tech Stack Badge Colors (same as light - colorful badges)
  tech: {
    react: '#61DAFB',
    javascript: '#F7DF1E',
    typescript: '#3178C6',
    tailwind: '#06B6D4',
    node: '#339933',
    python: '#3776AB',
  }
}
```

#### Gradient Accents (Both Modes)
```javascript
const gradients = {
  hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  card: 'linear-gradient(to bottom right, #f8f9fa, #ffffff)', // Light
  cardDark: 'linear-gradient(to bottom right, #1a1a1a, #2d2d2d)', // Dark
  button: 'linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)',
  accent: 'linear-gradient(90deg, #2563EB, #7C3AED, #2563EB)',
}
```

---

### Typography System

#### Font Families
```css
/* Primary Font - Clean Sans-Serif */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;

/* Display Font - For Hero/Large Headings */
--font-display: 'Cal Sans', 'Inter', sans-serif; /* or 'Plus Jakarta Sans' */

/* Monospace - For Code/Tech Elements */
--font-mono: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
```

#### Font Scale
```javascript
const typography = {
  // Display (Hero, Major Headings)
  display: {
    xl: '4.5rem',     // 72px - Hero title (desktop)
    lg: '3.75rem',    // 60px - Hero title (tablet)
    md: '3rem',       // 48px - Hero title (mobile)
    weight: 700,
    lineHeight: 1.1,
    letterSpacing: '-0.02em',
  },

  // Headings
  h1: {
    size: '2.5rem',   // 40px
    weight: 700,
    lineHeight: 1.2,
    letterSpacing: '-0.01em',
  },
  h2: {
    size: '2rem',     // 32px
    weight: 600,
    lineHeight: 1.3,
    letterSpacing: '-0.01em',
  },
  h3: {
    size: '1.5rem',   // 24px
    weight: 600,
    lineHeight: 1.4,
    letterSpacing: '0',
  },
  h4: {
    size: '1.25rem',  // 20px
    weight: 600,
    lineHeight: 1.5,
    letterSpacing: '0',
  },

  // Body Text
  body: {
    xl: '1.125rem',   // 18px - Lead paragraphs
    lg: '1rem',       // 16px - Default body
    md: '0.875rem',   // 14px - Small body
    sm: '0.75rem',    // 12px - Captions, labels
    weight: 400,
    lineHeight: 1.7,
    letterSpacing: '0',
  },

  // Special
  label: {
    size: '0.875rem', // 14px
    weight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.025em',
    textTransform: 'uppercase',
  },

  button: {
    size: '0.875rem', // 14px
    weight: 500,
    lineHeight: 1.5,
    letterSpacing: '0.01em',
  },
}
```

#### Responsive Typography
```javascript
// Desktop (1024px+)
h1: '2.5rem',
h2: '2rem',
body: '1rem',

// Tablet (768px - 1023px)
h1: '2rem',
h2: '1.75rem',
body: '1rem',

// Mobile (< 768px)
h1: '1.75rem',
h2: '1.5rem',
body: '1rem',
```

---

### Spacing & Layout System

#### Spacing Scale (Tailwind-based)
```javascript
const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
}
```

#### Section Spacing
```javascript
const sections = {
  // Vertical padding between major sections
  desktop: 'py-24',    // 96px
  tablet: 'py-20',     // 80px
  mobile: 'py-16',     // 64px

  // Container widths
  maxWidth: {
    sm: '640px',       // Small content (text)
    md: '768px',       // Medium content
    lg: '1024px',      // Default container
    xl: '1280px',      // Wide layouts
    full: '100%',      // Full width sections
  },

  // Container padding
  padding: {
    desktop: 'px-8',   // 32px
    tablet: 'px-6',    // 24px
    mobile: 'px-4',    // 16px
  }
}
```

#### Grid System
```css
/* Project Grid */
.project-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
}

/* Two Column Layout */
.two-column {
  display: grid;
  gap: 4rem;
  grid-template-columns: 1fr 1fr;
}

/* Asymmetric Grid (40/60) */
.asymmetric-grid {
  display: grid;
  gap: 3rem;
  grid-template-columns: 2fr 3fr;
}
```

---

### Component Design Guidelines

#### Cards
```javascript
const cardStyles = {
  // Default Card
  default: {
    lightMode: {
      background: '#FFFFFF',
      border: '1px solid #E2E8F0',
      borderRadius: '12px',
      padding: '24px',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
      hoverShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
    },
    darkMode: {
      background: '#1A1A1A',
      border: '1px solid #2D2D2D',
      borderRadius: '12px',
      padding: '24px',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
      hoverShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
    },
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    hoverTransform: 'translateY(-4px)',
  },

  // Project Card (Special)
  project: {
    aspectRatio: '16 / 10',
    overflow: 'hidden',
    imageOverlay: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
  }
}
```

#### Buttons
```javascript
const buttonStyles = {
  // Primary Button
  primary: {
    lightMode: {
      background: '#2563EB',
      text: '#FFFFFF',
      hover: '#1D4ED8',
      shadow: '0 2px 8px rgba(37, 99, 235, 0.25)',
    },
    darkMode: {
      background: '#3B82F6',
      text: '#FFFFFF',
      hover: '#60A5FA',
      shadow: '0 2px 8px rgba(59, 130, 246, 0.25)',
    },
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '0.875rem',
    fontWeight: 500,
    transition: 'all 0.2s ease',
  },

  // Secondary Button (Outline)
  secondary: {
    lightMode: {
      background: 'transparent',
      text: '#2563EB',
      border: '1.5px solid #2563EB',
      hover: {
        background: '#EFF6FF',
        border: '#1D4ED8',
      }
    },
    darkMode: {
      background: 'transparent',
      text: '#60A5FA',
      border: '1.5px solid #3B82F6',
      hover: {
        background: '#1E3A8A',
        border: '#60A5FA',
      }
    },
  },

  // Ghost Button
  ghost: {
    lightMode: {
      background: 'transparent',
      text: '#4A5568',
      hover: {
        background: '#F1F3F5',
        text: '#1A1A1A',
      }
    },
    darkMode: {
      background: 'transparent',
      text: '#D1D5DB',
      hover: {
        background: '#262626',
        text: '#F7F7F7',
      }
    },
  }
}
```

#### Navigation
```javascript
const navStyles = {
  desktop: {
    height: '72px',
    lightMode: {
      background: 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(226, 232, 240, 0.5)',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
    },
    darkMode: {
      background: 'rgba(15, 15, 15, 0.8)',
      backdropFilter: 'blur(12px)',
      border: '1px solid rgba(45, 45, 45, 0.5)',
      shadow: '0 1px 3px rgba(0, 0, 0, 0.3)',
    },
    sticky: true,
    zIndex: 1000,
  },

  links: {
    lightMode: {
      color: '#4A5568',
      hover: '#2563EB',
      active: '#2563EB',
      underline: '2px solid #2563EB',
    },
    darkMode: {
      color: '#D1D5DB',
      hover: '#60A5FA',
      active: '#60A5FA',
      underline: '2px solid #60A5FA',
    },
    transition: 'color 0.2s ease',
  }
}
```

#### Inputs & Forms
```javascript
const inputStyles = {
  default: {
    lightMode: {
      background: '#FFFFFF',
      border: '1.5px solid #E2E8F0',
      text: '#1A1A1A',
      placeholder: '#9CA3AF',
      focus: {
        border: '#2563EB',
        ring: '0 0 0 3px rgba(37, 99, 235, 0.1)',
      }
    },
    darkMode: {
      background: '#1A1A1A',
      border: '1.5px solid #2D2D2D',
      text: '#F7F7F7',
      placeholder: '#6B7280',
      focus: {
        border: '#3B82F6',
        ring: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      }
    },
    padding: '12px 16px',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'all 0.2s ease',
  }
}
```

#### Badges & Tags
```javascript
const badgeStyles = {
  // Tech Stack Badge
  tech: {
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '0.75rem',
    fontWeight: 500,
    lightMode: {
      background: '#EFF6FF',
      text: '#1E40AF',
      border: '1px solid #DBEAFE',
    },
    darkMode: {
      background: '#1E3A8A',
      text: '#BFDBFE',
      border: '1px solid #1E40AF',
    }
  },

  // Status Badge
  status: {
    completed: {
      lightMode: { background: '#D1FAE5', text: '#065F46' },
      darkMode: { background: '#064E3B', text: '#6EE7B7' },
    },
    inProgress: {
      lightMode: { background: '#FEF3C7', text: '#92400E' },
      darkMode: { background: '#78350F', text: '#FCD34D' },
    }
  }
}
```

---

### Visual Hierarchy & Patterns

#### Z-Index Layers
```javascript
const zIndex = {
  base: 0,
  dropdown: 100,
  sticky: 200,
  fixed: 300,
  modalBackdrop: 400,
  modal: 500,
  popover: 600,
  tooltip: 700,
}
```

#### Border Radius Scale
```javascript
const borderRadius = {
  none: '0',
  sm: '4px',      // Small elements
  md: '8px',      // Buttons, inputs
  lg: '12px',     // Cards
  xl: '16px',     // Large cards
  '2xl': '24px',  // Hero sections
  full: '9999px', // Pills, avatars
}
```

#### Shadow System
```javascript
const shadows = {
  // Light Mode
  light: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.05)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.08)',
    md: '0 4px 12px rgba(0, 0, 0, 0.1)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.12)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.15)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.06)',
  },

  // Dark Mode
  dark: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.2)',
    sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
    md: '0 4px 12px rgba(0, 0, 0, 0.4)',
    lg: '0 8px 24px rgba(0, 0, 0, 0.5)',
    xl: '0 16px 48px rgba(0, 0, 0, 0.6)',
    inner: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
  }
}
```

---

### Animation & Motion Design

#### Easing Functions
```javascript
const easing = {
  // Entrances
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',

  // Exits
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',

  // Emphasis
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',

  // Bouncy (for playful interactions)
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
}
```

#### Transition Durations
```javascript
const duration = {
  fast: '150ms',     // Quick UI feedback
  base: '250ms',     // Default transitions
  moderate: '350ms', // Card hovers, reveals
  slow: '500ms',     // Page transitions
  verySlow: '700ms', // Large animations
}
```

#### Animation Presets
```javascript
const animations = {
  // Fade In Up (for scroll reveals)
  fadeInUp: {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: easing.easeOut },
  },

  // Scale In (for modals)
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.3, ease: easing.easeOut },
  },

  // Slide In (for side panels)
  slideIn: {
    initial: { x: '100%' },
    animate: { x: 0 },
    exit: { x: '100%' },
    transition: { duration: 0.4, ease: easing.easeInOut },
  },

  // Hover Lift (for cards)
  hoverLift: {
    hover: { y: -4, shadow: 'lg' },
    transition: { duration: 0.25, ease: easing.easeOut },
  },

  // Pulse (for notification badge)
  pulse: {
    animate: { scale: [1, 1.1, 1] },
    transition: { duration: 2, repeat: Infinity },
  }
}
```

#### Scroll Animations
```javascript
const scrollAnimations = {
  // Stagger children (for project grid)
  staggerContainer: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
      }
    }
  },

  // Parallax factor
  parallax: {
    hero: 0.5,     // Background moves slower
    floating: 0.3, // Subtle floating effect
  },

  // Scroll-triggered progress
  scrollProgress: {
    scaleX: 0,
    transformOrigin: 'left',
  }
}
```

---

### Theme Toggle Design

#### Toggle Switch
```javascript
const themeToggle = {
  // Switch Container
  container: {
    width: '56px',
    height: '28px',
    borderRadius: '9999px',
    padding: '2px',
    lightMode: {
      background: '#E2E8F0',
    },
    darkMode: {
      background: '#404040',
    },
    transition: 'background 0.3s ease',
  },

  // Switch Thumb
  thumb: {
    size: '24px',
    borderRadius: '9999px',
    background: '#FFFFFF',
    shadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    icons: {
      light: '☀️',
      dark: '🌙',
    },
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  },

  // Position
  position: 'fixed',
  top: '20px',
  right: '20px',
  zIndex: 50,
}
```

---

### Responsive Breakpoints

```javascript
const breakpoints = {
  xs: '475px',   // Small phones
  sm: '640px',   // Phones
  md: '768px',   // Tablets
  lg: '1024px',  // Laptops
  xl: '1280px',  // Desktops
  '2xl': '1536px', // Large desktops
}

// Usage patterns
const responsive = {
  // Mobile-first approach
  container: 'px-4 sm:px-6 lg:px-8',
  section: 'py-12 sm:py-16 lg:py-24',
  text: 'text-base sm:text-lg lg:text-xl',
  grid: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',

  // Hide/show at breakpoints
  mobileOnly: 'block md:hidden',
  desktopOnly: 'hidden md:block',
}
```

---

### Accessibility in Design

#### Focus States
```javascript
const focusStyles = {
  // Keyboard focus ring
  default: {
    outline: '2px solid',
    outlineOffset: '2px',
    lightMode: {
      outlineColor: '#2563EB',
    },
    darkMode: {
      outlineColor: '#60A5FA',
    }
  },

  // Focus-visible (keyboard only)
  visible: {
    ring: '3px',
    ringOffset: '2px',
    lightMode: {
      ringColor: 'rgba(37, 99, 235, 0.5)',
    },
    darkMode: {
      ringColor: 'rgba(96, 165, 250, 0.5)',
    }
  }
}
```

#### Contrast Ratios (WCAG AA)
```javascript
const contrast = {
  // Minimum requirements
  normalText: '4.5:1',      // Body text
  largeText: '3:1',         // 18px+ or 14px+ bold
  uiComponents: '3:1',      // Buttons, inputs

  // Our targets (better than minimum)
  targets: {
    headings: '7:1',        // Enhanced readability
    body: '5:1',            // Enhanced readability
    ui: '4:1',              // Clear UI elements
  }
}
```

#### Reduced Motion Support
```css
/* Respect user preferences */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

### Design Tokens (Implementation)

#### Tailwind Config Structure
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Custom color palette here
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      spacing: {
        // Custom spacing
      },
      borderRadius: {
        // Custom radius values
      },
      boxShadow: {
        // Custom shadows
      },
      animation: {
        // Custom animations
      },
    },
  },
}
```

#### CSS Custom Properties (for theme switching)
```css
:root {
  /* Light mode (default) */
  --bg-primary: #FFFFFF;
  --bg-secondary: #F8F9FA;
  --text-primary: #1A1A1A;
  --text-secondary: #4A5568;
  --brand-primary: #2563EB;
  --border: #E2E8F0;
}

[data-theme="dark"] {
  /* Dark mode */
  --bg-primary: #0F0F0F;
  --bg-secondary: #1A1A1A;
  --text-primary: #F7F7F7;
  --text-secondary: #D1D5DB;
  --brand-primary: #3B82F6;
  --border: #2D2D2D;
}

/* Usage */
.card {
  background: var(--bg-primary);
  color: var(--text-primary);
  border: 1px solid var(--border);
  transition: all 0.3s ease;
}
```

---

### Icon System

#### Icon Library
- Use: Lucide React or Material Icons
- Size scale: 16px, 20px, 24px, 32px, 48px
- Stroke width: 1.5px - 2px (for line icons)
- Style: Outline style for consistency

#### Icon Usage
```javascript
const iconSizes = {
  xs: '16px',  // Inline with small text
  sm: '20px',  // Inline with body text
  md: '24px',  // Buttons, nav
  lg: '32px',  // Section headers
  xl: '48px',  // Hero, features
}

const iconColors = {
  lightMode: {
    primary: '#4A5568',
    secondary: '#718096',
    brand: '#2563EB',
  },
  darkMode: {
    primary: '#D1D5DB',
    secondary: '#9CA3AF',
    brand: '#60A5FA',
  }
}
```

---

### Loading States

#### Skeleton Screens
```javascript
const skeleton = {
  lightMode: {
    base: '#E2E8F0',
    shimmer: '#F1F3F5',
  },
  darkMode: {
    base: '#2D2D2D',
    shimmer: '#404040',
  },
  animation: 'shimmer 2s infinite',
}
```

#### Spinners
```javascript
const spinner = {
  size: {
    sm: '20px',
    md: '32px',
    lg: '48px',
  },
  color: 'var(--brand-primary)',
  animation: 'spin 1s linear infinite',
}
```

---

### Print Styles (Bonus)

```css
@media print {
  /* Optimize for resume printing */
  body {
    background: white;
    color: black;
  }

  /* Hide unnecessary elements */
  nav, footer, .theme-toggle, .version-switcher {
    display: none;
  }

  /* Expand collapsed sections */
  .project-card {
    break-inside: avoid;
  }
}
```

---

## 🔧 Technical Improvements

### Performance
1. **Code Splitting**
   - Lazy load sections
   - Dynamic imports for version history
   - Split vendor bundles

2. **Image Optimization**
   - Use WebP format
   - Lazy loading images
   - Responsive images with srcset

3. **Asset Optimization**
   - Minification
   - Tree shaking
   - Bundle analysis

### Accessibility
1. **Semantic HTML**
   - Proper heading structure
   - Landmark regions (header, nav, main, footer)
   - Lists for navigation

2. **Keyboard Navigation**
   - Focus indicators
   - Skip links
   - Logical tab order

3. **Screen Reader Support**
   - Alt text for images
   - ARIA labels where needed
   - Meaningful link text

4. **Color Contrast**
   - WCAG AA compliance
   - Sufficient contrast ratios

### SEO
1. **Meta Tags**
   - Title, description, keywords
   - Open Graph tags
   - Twitter Card tags

2. **Structured Data**
   - Schema.org Person markup
   - Project markup

3. **Performance**
   - Fast loading times
   - Core Web Vitals optimization

---

## 📊 Project Data Structure

### projects.js
```javascript
export const projects = [
  {
    id: 'project-1',
    title: 'Virtual Medical Missions Website',
    slug: 'vmm-website',
    shortDescription: 'Redesigned healthcare nonprofit website',
    fullDescription: '...',
    thumbnail: '/assets/projects/vmm-thumb.jpg',
    images: [
      '/assets/projects/vmm-1.jpg',
      '/assets/projects/vmm-2.jpg'
    ],
    technologies: ['JavaScript', 'HTML', 'CSS'],
    category: 'Web Development',
    featured: true,
    status: 'Completed',
    completedDate: '2024-09',
    links: {
      live: 'https://www.vmmhealthcare.org',
      github: null,
      demo: null
    },
    highlights: [
      'Applied UX laws to increase donations',
      'Improved design cohesion',
      'Enhanced trust signals'
    ],
    challenges: '...',
    solutions: '...'
  }
  // ... more projects
];
```

### personal-info.js
```javascript
export const personalInfo = {
  name: 'Ethan Tran',
  title: 'Computer Science Student & Developer',
  tagline: 'Bridging gaps in business with technology',
  bio: '...',
  location: 'UC Berkeley',
  email: 'your-email@example.com',
  availability: 'Open to opportunities',
  resume: '/assets/resume.pdf',
  social: {
    github: 'https://github.com/yourusername',
    linkedin: 'https://linkedin.com/in/yourusername',
    email: 'mailto:your-email@example.com'
  },
  image: '/assets/profile.jpg'
};
```

---

## 🗓️ Implementation Phases

### Phase 1: Foundation (Week 1)
- [ ] Create new file structure
- [ ] Set up data files (projects, personal-info, versions)
- [ ] Create Layout component system
- [ ] Extract sections into individual components
- [ ] Create reusable UI component library

### Phase 2: Version History Feature (Week 2)
- [ ] Design version data structure
- [ ] Create VersionContext
- [ ] Build VersionSwitcher component
- [ ] Build VersionTimeline component
- [ ] Build VersionPreview component
- [ ] Take screenshots of V1.0 for archive
- [ ] Implement version switching logic
- [ ] Add version indicator to footer

### Phase 3: Enhanced Features (Week 3)
- [ ] Implement scroll animations
- [ ] Add micro-interactions
- [ ] Build ProjectModal component
- [ ] Add project filtering/sorting
- [ ] Create functional mobile menu
- [ ] Implement active section highlighting
- [ ] Add Skills section
- [ ] Enhance Contact section with working links

### Phase 4: Polish & Optimization (Week 4)
- [ ] Add dark/light mode toggle
- [ ] Implement lazy loading
- [ ] Optimize images
- [ ] Accessibility audit and fixes
- [ ] SEO optimization
- [ ] Performance testing
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing

### Phase 5: Deployment & Documentation (Week 5)
- [ ] Create archive of V1.0
- [ ] Update deployment pipeline
- [ ] Write component documentation
- [ ] Create README with setup instructions
- [ ] Final QA testing
- [ ] Deploy V2.0

---

## 🎬 Version History Feature - User Flow

1. **User lands on portfolio (V2.0 by default)**
   - Sees floating "Version History" button in corner
   - Optional banner: "New V2.0 - View previous versions"

2. **User clicks Version History button**
   - Modal/side panel opens with timeline
   - Shows all versions with dates and descriptions
   - Current version highlighted

3. **User explores timeline**
   - Hovers over version to see preview tooltip
   - Clicks version to see detailed preview
   - Views features, tech stack, and screenshot

4. **User selects a version to view**
   - "View This Version" button
   - Smooth transition/animation
   - Portfolio updates to show that version
   - Banner at top: "Viewing V1.0 - Return to current"

5. **User returns to current version**
   - Clicks "Return to Current" button
   - Smooth transition back to V2.0

---

## 🎯 Success Metrics

### User Experience
- Improved time on site
- Higher engagement with projects
- Lower bounce rate
- Version history feature usage

### Technical
- Lighthouse score > 90 in all categories
- Build size < 500kb (gzipped)
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation functional
- Screen reader compatible

---

## 🛠️ Development Guidelines

### Code Style
- Use functional components with hooks
- Implement custom hooks for reusable logic
- Follow Airbnb React style guide
- Use consistent naming conventions
- Add comments for complex logic

### Component Guidelines
- Keep components small and focused (< 200 lines)
- Props should be clearly defined
- Use composition over inheritance
- Implement error boundaries where appropriate

### Git Workflow
- Feature branches for new features
- Descriptive commit messages
- PR reviews before merging to main
- Tag versions (v2.0.0, v2.1.0, etc.)

---

## 📚 Dependencies to Consider

### Current Dependencies
- React 19.1.0 ✓
- Tailwind CSS 4.1.11 ✓
- Material-UI 7.3.1 ✓
- Vite 7.0.4 ✓

### Potential Additions

**Animation Libraries**
- `framer-motion` - Smooth animations and transitions
- `react-intersection-observer` - Scroll animations

**Utilities**
- `clsx` or `classnames` - Conditional class names
- `react-helmet` - SEO meta tags

**Forms (if adding contact form)**
- `react-hook-form` - Form handling
- `zod` - Form validation

**Icons**
- Already have MUI Icons ✓
- Consider `lucide-react` as alternative

---

## 🎨 Design Inspiration & References

### Version History Examples
- GitHub's branch/tag viewer
- Product versioning on SaaS platforms
- App Store version history
- Wayback Machine aesthetic

### Portfolio References
- Clean, modern designs
- Focus on work showcase
- Interactive elements
- Professional yet personable

---

## 📝 Content to Prepare

### Version 1.0 Archive
- [ ] Screenshot full homepage
- [ ] Screenshot individual sections
- [ ] Document feature list
- [ ] Note tech stack
- [ ] Save commit hash for reference

### Version 2.0 Content
- [ ] Updated bio
- [ ] Professional headshot
- [ ] Project details (full descriptions)
- [ ] Project screenshots
- [ ] Skills list with proficiency
- [ ] Resume (PDF)
- [ ] Social media links

---

## 🚀 Future Enhancements (V3.0+)

- Blog integration
- Project case studies with detailed write-ups
- Interactive code examples/demos
- Testimonials section
- Achievement/certification showcase
- Analytics dashboard
- CMS for easier content updates
- Multi-language support
- 3D elements or animations
- WebGL background effects

---

## 📖 Documentation Needs

1. **Component Documentation**
   - Props and usage examples
   - Storybook (optional)

2. **Setup Guide**
   - Installation instructions
   - Environment variables
   - Build and deployment

3. **Contribution Guidelines**
   - Code style
   - PR process
   - Issue templates

4. **Version History Maintenance Guide**
   - How to archive new versions
   - Screenshot guidelines
   - Version data format

---

## ✅ Quality Checklist

### Before Launch
- [ ] All links work correctly
- [ ] Images load and have alt text
- [ ] Mobile responsive on all screen sizes
- [ ] Works in Chrome, Firefox, Safari, Edge
- [ ] No console errors or warnings
- [ ] Lighthouse audit passes
- [ ] Accessibility audit passes
- [ ] SEO meta tags present
- [ ] Version history feature tested
- [ ] All animations smooth (60fps)
- [ ] Fast loading times
- [ ] Contact information accurate
- [ ] Resume link works
- [ ] Social media links correct

---

## 🎉 Launch Strategy

1. **Soft Launch**
   - Deploy to staging
   - Share with friends for feedback
   - Make final adjustments

2. **Public Launch**
   - Deploy to production
   - Update LinkedIn with new portfolio link
   - Share on social media
   - Update resume with portfolio link

3. **Post-Launch**
   - Monitor analytics
   - Collect feedback
   - Iterate on features
   - Plan for V2.1 improvements

---

## 📞 Questions to Answer

- [ ] Should version history be a separate page or modal?
- [ ] How many versions to keep in active codebase vs archive?
- [ ] Add contact form or keep email links only?
- [ ] Include blog section now or wait for V3.0?
- [ ] Dark mode priority (now or later)?
- [ ] Self-host fonts or use CDN?
- [ ] Analytics tool preference?

---

## Notes

**Key Focus**: The version history feature is the marquee addition for V2.0. It showcases:
1. Development evolution and growth
2. Technical skill in building unique features
3. Attention to user experience
4. Creative approach to portfolio presentation

This feature differentiates the portfolio from typical single-version sites and tells a story of continuous improvement.

**Remember**: Keep commits tagged with versions for easy reference when building the history feature. Consider using semantic versioning (MAJOR.MINOR.PATCH) for clear version communication.

---

**Document Version**: 1.0
**Created**: 2025-11-12
**Last Updated**: 2025-11-12
**Author**: Planning for Ethan Tran's Portfolio V2.0
