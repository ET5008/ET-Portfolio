// Projects data
export const projects = [
  {
    id: "speechful",
    title: "Speechful",
    shortDescription:
      "An AI-powered speech analysis platform that provides real-time feedback on delivery, pacing, and filler word usage. Built with React and modern web technologies to help users become more confident, articulate speakers through personalized insights and progress tracking.",
    fullDescription:
      "Speechful is a comprehensive speech improvement platform designed to transform how people practice and perfect their public speaking skills. Using advanced AI analysis, the application captures user presentations through webcam recordings and provides detailed, actionable feedback on key speaking metrics including delivery quality, pacing consistency, and filler word frequency. The platform features an intuitive, pastel-themed interface built with React that makes speech practice engaging and accessible. Users can track their progress over time, identify patterns in their speaking habits, and receive personalized recommendations for improvement. Whether preparing for a crucial presentation, interview, or simply working to become a more confident communicator, Speechful offers the tools and insights needed to develop strong oratory skills. Built with a focus on user experience and real-time performance, Speechful represents a modern approach to speech coaching. It combines the convenience of self-paced practice with the precision of AI-driven analysis to deliver professional-level feedback at scale, making expert speech training accessible to anyone looking to improve their communication skills.",
    thumbnail: "/src/assets/images/projects/Speechful.jpg", // TODO: Add project thumbnail
    images: ["/src/assets/projects/Speechful.png", "/assets/projects/vmm-2.jpg"], // TODO: Add project screenshots
    technologies: ["React", "Tailwind", "Node"],
    category: "Web Development",
    featured: true,
    status: "Completed",
    completedDate: "2025-10",
    links: {
      live: "https://devpost.com/software/speechful-th5368",
      github: "https://github.com/onKTun/speechful-cal-hacks-12.0",
      demo: null,
    },
    highlights: [
      "Applied UX laws to increase donations",
      "Improved design cohesion",
      "Enhanced trust signals for users",
    ],
    challenges:
      "The main challenge was balancing medical professionalism with approachability while ensuring the design encouraged donations.",
    solutions:
      "Applied UX principles like Fitt's Law and visual hierarchy to guide users toward donation CTAs while maintaining a trustworthy aesthetic.",
  },
  // Template project - to be replaced with real projects
  {
    id: "template-project",
    title: "Template Project",
    shortDescription: "Project description coming soon",
    fullDescription: "Detailed project information will be added here.",
    thumbnail: "/assets/projects/template-thumb.jpg",
    images: [],
    technologies: ["React", "Tailwind", "Node", "HTML", "CSS"],
    category: "Web Development",
    featured: false,
    status: "In Progress",
    completedDate: null,
    links: {
      live: null,
      github: null,
      demo: null,
    },
    highlights: [],
    challenges: "",
    solutions: "",
  },
];
