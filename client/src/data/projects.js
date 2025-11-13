// Projects data
export const projects = [
  {
    id: 'vmm-website',
    title: 'Virtual Medical Missions Website',
    slug: 'vmm-website',
    shortDescription: 'Co-developed healthcare nonprofit website with UX-focused design improvements',
    fullDescription: 'I used HTML/CSS and JavaScript to co-develop the VMM website. I specifically applied multiple UX laws to drive more donations, and to make the design more cohesive, creating a more trustful mood when users enter the website.',
    thumbnail: '/assets/projects/vmm-thumb.jpg', // TODO: Add project thumbnail
    images: [
      '/assets/projects/vmm-1.jpg',
      '/assets/projects/vmm-2.jpg'
    ], // TODO: Add project screenshots
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
      'Enhanced trust signals for users'
    ],
    challenges: 'The main challenge was balancing medical professionalism with approachability while ensuring the design encouraged donations.',
    solutions: 'Applied UX principles like Fitt\'s Law and visual hierarchy to guide users toward donation CTAs while maintaining a trustworthy aesthetic.'
  },
  // Template project - to be replaced with real projects
  {
    id: 'template-project',
    title: 'Template Project',
    slug: 'template-project',
    shortDescription: 'Project description coming soon',
    fullDescription: 'Detailed project information will be added here.',
    thumbnail: '/assets/projects/template-thumb.jpg',
    images: [],
    technologies: ['React', 'Tailwind', 'Node', 'HTML', 'CSS'],
    category: 'Web Development',
    featured: false,
    status: 'In Progress',
    completedDate: null,
    links: {
      live: null,
      github: null,
      demo: null
    },
    highlights: [],
    challenges: '',
    solutions: ''
  }
];
