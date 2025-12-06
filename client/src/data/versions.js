// Version history data
export const versions = [
  {
    id: 'v2.0',
    version: '2.0.0',
    date: '2025-11',
    name: 'Number 2',
    description: 'Complete refactor with improved architecture and version history feature',
    techStack: ['React 19', 'Tailwind 4', 'Vite 7', 'Material-UI 7'],
    features: [
      'Version history feature',
      'Improved component architecture',
      'Enhanced animations and interactions',
      'Better accessibility',
      'Separated data layer from components',
      'Reusable UI component library',
      'Dark mode support',
      'Enhanced project showcase'
    ],
    isCurrent: true,
    screenshot: '/assets/version-screenshots/v2.0.png', // TODO: Add screenshot
    demoUrl: null, // Current version
    newest: true
  },
  {
    id: 'v1.0',
    version: '1.0.0',
    date: '2025-10',
    name: 'The Beginning',
    description: 'Initial portfolio launch with basic structure',
    techStack: ['React 19', 'Tailwind 4', 'MUI 7'],
    features: [
      'Basic portfolio structure',
      'Project showcase',
      'Contact section',
      'Responsive navigation'
    ],
    isCurrent: false,
    screenshot: '/assets/version-screenshots/v1.0.png', // TODO: Add V1 screenshot
    demoUrl: null, // Component-based switching
    newest: false
  }
];
