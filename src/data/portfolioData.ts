export interface ProjectCaseStudy {
  overview?: string;
  problem: string;
  solution: string;
  features: string[];
  contribution: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;
  category: 'Full Stack' | 'React Apps' | 'Client Work' | 'Real-World Client Project';
  description: string;
  fullDescription: string;
  techStack: string[];
  image: string;
  secondaryImage?: string;
  ghLink: string;
  demoLink: string;
  liveButtonLabel?: string;
  featured?: boolean;
  isRealWorldClientProject?: boolean;
  caseStudy: ProjectCaseStudy;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  skills: string[];
  file: string;
}

export interface JourneyMilestone {
  period: string;
  title: string;
  organization: string;
  location?: string;
  description: string;
  highlights: string[];
  type: 'education' | 'training' | 'experience';
}

export const PERSONAL_INFO = {
  name: "Vijendra",
  role: "Junior Full Stack Developer",
  status: "Available for Full-time Roles",
  tagline: "I build modern, responsive web applications with React, Node.js, Express.js and PostgreSQL.",
  bio: "I'm a Junior Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. With a Bachelor of Computer Applications (BCA) from Gulbarga University and specialized full-stack engineering training from NxtWave, I turn ideas into clean, functional digital products with robust REST APIs, normalized databases, and accessible user interfaces.",
  email: "vijendraraddy@gmail.com",
  github: "https://github.com/vijendra431",
  linkedin: "https://www.linkedin.com/in/vijendra-7bb817290/",
  resumePdf: "/Vijendra_Resume_ATS.pdf",
  profileImage: "/assets/profile.png",
  location: "Karnataka, India",
};

export const FOCUS_AREAS = [
  { title: "Full Stack Development", desc: "End-to-end web apps with unified architecture" },
  { title: "React.js Ecosystem", desc: "Component architecture, hooks, and clean state" },
  { title: "Node.js & Express", desc: "Scalable REST APIs, middleware, and route security" },
  { title: "PostgreSQL & SQL", desc: "Relational schema design, queries, and integrity" },
  { title: "Authentication & Security", desc: "JWT tokens, bcrypt password hashing, auth guards" },
  { title: "Responsive Web Design", desc: "Mobile-first, cross-browser, accessible interfaces" },
];

export const SKILL_CATEGORIES = [
  {
    category: "Frontend",
    description: "Building responsive, modern, and accessible client interfaces",
    skills: [
      { name: "React.js", level: "Primary" },
      { name: "JavaScript (ES6+)", level: "Core" },
      { name: "HTML5", level: "Core" },
      { name: "CSS3", level: "Core" },
      { name: "Tailwind CSS", level: "Styling" },
      { name: "Bootstrap", level: "Styling" },
      { name: "React Router", level: "Navigation" },
    ],
  },
  {
    category: "Backend",
    description: "Crafting performant server logic, controllers, and APIs",
    skills: [
      { name: "Node.js", level: "Runtime" },
      { name: "Express.js", level: "Framework" },
      { name: "REST APIs", level: "Architecture" },
      { name: "JWT", level: "Auth" },
      { name: "bcrypt", level: "Security" },
      { name: "Middleware", level: "Pipeline" },
    ],
  },
  {
    category: "Database",
    description: "Designing relational schemas and managing persistent data",
    skills: [
      { name: "PostgreSQL", level: "Relational DB" },
      { name: "SQL", level: "Querying" },
      { name: "SQLite", level: "Embedded DB" },
      { name: "Schema Design", level: "Modeling" },
    ],
  },
  {
    category: "Tools & Technologies",
    description: "Industry-standard developer workflow and tooling",
    skills: [
      { name: "Git", level: "Version Control" },
      { name: "GitHub", level: "Collaboration" },
      { name: "VS Code", level: "IDE" },
      { name: "Postman", level: "API Testing" },
      { name: "Vite", level: "Build Tool" },
      { name: "Netlify", level: "Deployment" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "dr-nayak-dental",
    title: "Dr Nayak’s Dental",
    subtitle: "Dental Clinic Website | Real-World Client Project",
    badge: "Real-World Client Project",
    category: "Real-World Client Project",
    featured: true,
    isRealWorldClientProject: true,
    liveButtonLabel: "Live Website",
    description: "A modern, responsive dental clinic website designed and developed for Dr Nayak’s Dental in Raichur, Karnataka. The website provides clinic information, services, appointment booking, contact options, Google Maps integration, WhatsApp/call actions, and a professional healthcare-focused user experience.",
    fullDescription: "A real-world dental clinic website built to provide patients with an easy way to learn about the clinic, explore services, contact the clinic and request appointments.",
    techStack: ["React 19", "TypeScript", "Tailwind CSS", "React Router", "Motion", "Lucide React", "Vite"],
    image: "/assets/dr-nayak-hero.jpg",
    secondaryImage: "/assets/dr-nayak-clinic.jpg",
    ghLink: "https://github.com/vijendra431/dental-clinic-website",
    demoLink: "https://dr-nayak-s-dental-dental-clinic-in-raichur.ai.studio/",
    caseStudy: {
      overview: "A real-world dental clinic website built to provide patients with an easy way to learn about the clinic, explore services, contact the clinic and request appointments.",
      problem: "Dr Nayak’s Dental clinic in Raichur, Karnataka needed an accessible, modern digital presence to help patients find clinic location, view operating hours, learn about available dental procedures, and request appointments online without relying solely on walk-ins or phone calls.",
      solution: "Engineered a fast, responsive dental healthcare website with clean navigation, clear treatment catalogues, appointment request workflow, integrated Google Maps location, and immediate WhatsApp and telephone actions for patient convenience.",
      features: [
        "Responsive dental clinic website",
        "Appointment booking",
        "Clinic information",
        "Services section",
        "Gallery",
        "Google Maps integration",
        "Call functionality",
        "WhatsApp contact",
        "Responsive design",
        "Mobile-friendly interface",
        "Professional healthcare UI",
      ],
      contribution: "Designed and developed the website, implemented the frontend experience, integrated the required functionality, tested the responsive layout, and deployed the project.",
    },
  },
  {
    id: "project-management",
    title: "Project Management Application",
    subtitle: "Full-Stack Task & Project Management Suite",
    category: "Full Stack",
    featured: true,
    liveButtonLabel: "Live Demo",
    description: "A full-stack task and project management suite built with React.js, Node.js, Express.js, and PostgreSQL to organize tasks, track milestones, and manage team workflows.",
    fullDescription: "Designed and engineered an end-to-end Project Management web application. Provides full CRUD operations for workspaces, boards, and tasks with granular status filters (To Do, In Progress, Done). Built with a relational PostgreSQL database schema and protected with JWT token-based authentication and secure password hashing.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "REST API", "Tailwind CSS"],
    image: "/assets/project-management.png",
    ghLink: "https://github.com/vijendra431/project-management",
    demoLink: "https://project-management-apps.netlify.app/",
    caseStudy: {
      overview: "A full-stack web application designed to help users create, organize, and manage projects and tasks efficiently.",
      problem: "Teams and students often struggle with cluttered task tracking and lack a clear, intuitive view of project milestones without heavy enterprise overhead.",
      solution: "A high-performance lightweight task manager with clean kanban-style columns, real-time status updates, and relational PostgreSQL storage.",
      features: [
        "User authentication with JWT & encrypted passwords via bcrypt",
        "Project workspace creation and category filtering",
        "Task creation, priority tagging, and status toggle (To Do / In Progress / Completed)",
        "Responsive desktop and mobile view with zero layout shifting",
        "Custom RESTful API endpoints for resilient CRUD operations",
      ],
      contribution: "Architected the backend Express REST API, designed the normalized PostgreSQL schema, implemented token verification middleware, and built the responsive React UI with clean state management.",
    },
  },
  {
    id: "job-hunt",
    title: "Job Hunt / Jobby Platform",
    subtitle: "Full-Stack Career & Job Exploration Platform",
    category: "Full Stack",
    featured: true,
    liveButtonLabel: "Live Demo",
    description: "A full-stack career platform designed to help candidates search, filter, and explore tech job opportunities with employment type and salary bracket filters.",
    fullDescription: "Built a full-stack Job Hunt portal with role-based job searching, multi-criteria filtering (employment type, salary range brackets, search keywords), detailed job descriptions, and user profile management. Powered by an Express.js backend with PostgreSQL.",
    techStack: ["React.js", "Node.js", "Express.js", "PostgreSQL", "JWT", "REST API"],
    image: "/assets/job-hunt.png",
    ghLink: "https://github.com/vijendra431/jobbys-app",
    demoLink: "https://myjobbyapp.netlify.app/",
    caseStudy: {
      overview: "A full-stack Job Hunt application designed to help users search, explore, and manage job opportunities efficiently.",
      problem: "Job seekers often face cluttered portals with poor filtering capabilities and slow navigation when looking for specific compensation ranges or employment types.",
      solution: "A focused, streamlined job exploration platform with instant search, debounce filtering, and responsive job specification cards.",
      features: [
        "JWT session management with cookies and authorization headers",
        "Multi-parameter filter query handling in Express & PostgreSQL",
        "Detailed salary breakdown and job requirement viewer",
        "Failure view & retry handling for network errors",
        "Interactive company detail modal with life-at-company insights",
      ],
      contribution: "Implemented backend API pagination and filtering, secure login workflows, and modular React view states (Loading, Success, Failure).",
    },
  },
  {
    id: "nxt-trend",
    title: "NXT Trend Video Streaming",
    subtitle: "Responsive Video Streaming Application",
    category: "React Apps",
    featured: false,
    liveButtonLabel: "Live Demo",
    description: "A responsive video streaming web application featuring trending feeds, gaming content, saved collections, and dynamic dark/light theme switching.",
    fullDescription: "Engineered a video streaming web application featuring trending video feeds, gaming categories, dedicated saved video library, dynamic dark/light theme switching with React Context, and video player integration.",
    techStack: ["React.js", "React Router", "REST API", "Context API", "CSS"],
    image: "/assets/nxt-trend.png",
    ghLink: "https://github.com/vijendra431/nxtWatchApp",
    demoLink: "https://app.netlify.com/projects/nxt-watch-app/deploys",
    caseStudy: {
      overview: "A responsive video streaming web application built with React.js that allows users to browse and explore videos.",
      problem: "Building a complex single-page application with global state management for theme toggling and saved video collections without prop drilling.",
      solution: "Leveraged React Context API for centralized theme and saved-videos state, combined with React Router for seamless navigation.",
      features: [
        "Dynamic theme switcher (Dark Mode / Light Mode) preserved in memory",
        "Search queries and category filtering (Trending, Gaming)",
        "Video detail page with embedded player and like/dislike reactions",
        "Saved videos collection persistent across views",
        "Protected authentication routes with automatic redirection",
      ],
      contribution: "Built the entire React component hierarchy, integrated third-party video APIs, and handled complex conditional rendering and error boundaries.",
    },
  },
  {
    id: "ipl-dashboard",
    title: "IPL Match Dashboard",
    subtitle: "Sports Analytics & Franchise Statistics",
    category: "React Apps",
    featured: false,
    liveButtonLabel: "Live Demo",
    description: "A responsive sports analytics application displaying Indian Premier League teams, match results, competing squads, and recent match breakdowns.",
    fullDescription: "Developed a dynamic sports dashboard that fetches team data and match histories via REST APIs. Highlights team cards, recent match results, competing teams, and venue statistics with responsive animations.",
    techStack: ["React.js", "JavaScript", "React Router", "REST API", "CSS"],
    image: "/assets/ipl-dashboard.png",
    ghLink: "https://github.com/vijendra431/IPL-dash-board",
    demoLink: "https://ipl-dashboard-details.netlify.app/",
    caseStudy: {
      overview: "A responsive IPL Dashboard application built with React.js to display IPL teams, match details, and team-specific information.",
      problem: "Presenting detailed sports match data and team statistics in a fast, mobile-friendly interactive interface.",
      solution: "Clean dashboard design displaying team identity colors, win/loss breakdown, and historical match cards with responsive grids.",
      features: [
        "Dynamic route rendering for individual IPL franchise teams",
        "Recent match card breakdown with status indicators",
        "Smooth route transitions and responsive card layout",
        "Interactive match outcome visualizations",
      ],
      contribution: "Engineered the API consumption pipeline, mapped match statistics to reusable React components, and styled custom team themes.",
    },
  },
  {
    id: "routing-project",
    title: "Single Page Routing Project",
    subtitle: "Client-Side Architecture & History State",
    category: "React Apps",
    featured: false,
    liveButtonLabel: "Live Demo",
    description: "A client-side navigation application demonstrating multi-page SPA routing, nested views, history state, and smooth view transitions.",
    fullDescription: "Built an architectural showcase demonstrating client-side navigation without full-page reloads, 404 fallback routing, URL query synchronization, and smooth page transitions using React Router.",
    techStack: ["React.js", "React Router", "JavaScript", "CSS"],
    image: "/assets/routing.png",
    ghLink: "https://github.com/vijendra431/routing-websites",
    demoLink: "https://routing-singlepages-navigate.netlify.app/",
    caseStudy: {
      overview: "A React.js routing project built to demonstrate client-side navigation and multi-page application structure.",
      problem: "Traditional multi-page sites cause jarring full-page refreshes that degrade user engagement and lose state between pages.",
      solution: "A clean multi-route implementation showcasing nested layouts, programmatic navigation, and header active states with zero reload latency.",
      features: [
        "Declarative route configuration with React Router",
        "Protected routes with redirection logic",
        "Active navigation state synchronization",
        "Custom 404 page handling and back navigation",
      ],
      contribution: "Designed and implemented the route hierarchy and modular layout components.",
    },
  },
];


export const JOURNEY: JourneyMilestone[] = [
  {
    period: "2024 — Present",
    title: "Full Stack Developer & Client Projects",
    organization: "Independent & Open Source",
    location: "Karnataka, India",
    description: "Building production-quality full stack web applications with React.js, Node.js, Express.js, and PostgreSQL. Delivered a real-world client website for a dental clinic practice and continuously developing full-stack personal projects.",
    highlights: [
      "Designed and deployed the Dental Clinic commercial client website with custom appointment inquiries",
      "Built full-stack Project Management and Job Hunt platforms with secure JWT authentication and PostgreSQL",
      "Actively maintaining code quality, Git commits, and responsive cross-device compatibility",
    ],
    type: "experience",
  },
  {
    period: "2023 — 2024",
    title: "Full Stack Web Development (CCBP 4.0)",
    organization: "NxtWave",
    location: "Remote",
    description: "Intensive hands-on engineering program focused on industry-ready full-stack software development. Earned 6 verified certifications covering modern frontend, backend, databases, and version control.",
    highlights: [
      "Mastered React.js component lifecycle, state management, and React Router",
      "Built robust backend services with Node.js, Express.js, REST APIs, and SQL databases",
      "Earned 6 NxtWave certifications: JavaScript, Database, HTML/CSS, Git, Flexbox, and Bootstrap",
    ],
    type: "training",
  },
  {
    period: "2020 — 2023",
    title: "Bachelor of Computer Applications (BCA)",
    organization: "Gulbarga University",
    location: "Karnataka, India",
    description: "Undergraduate degree in computer applications, establishing foundational computer science knowledge in programming, relational databases, data structures, and computer networking.",
    highlights: [
      "Graduated with strong foundations in software engineering and database management",
      "Completed coursework in Object-Oriented Programming, Database Systems (RDBMS/SQL), and Web Technologies",
      "Transitioned academic fundamentals into practical modern web development",
    ],
    type: "education",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: 1,
    title: "JavaScript",
    issuer: "NxtWave",
    date: "Verified Credential",
    skills: ["ES6+", "Async/Await", "DOM Manipulation", "Event Loop"],
    file: "/certificates/javascript.pdf",
  },
  {
    id: 2,
    title: "Database (SQL)",
    issuer: "NxtWave",
    date: "Verified Credential",
    skills: ["SQL", "Relational Modeling", "Queries", "Database Joins"],
    file: "/certificates/database.pdf",
  },
  {
    id: 3,
    title: "Git & Version Control",
    issuer: "NxtWave",
    date: "Verified Credential",
    skills: ["Git", "GitHub", "Branching", "Collaboration"],
    file: "/certificates/git.pdf",
  },
  {
    id: 4,
    title: "HTML5 & CSS3",
    issuer: "NxtWave",
    date: "Verified Credential",
    skills: ["Semantic HTML", "Modern CSS", "Layouts", "Accessibility"],
    file: "/certificates/html-css.pdf",
  },
  {
    id: 5,
    title: "Flexbox Layout",
    issuer: "NxtWave",
    date: "Verified Credential",
    skills: ["CSS Flexbox", "Responsive Positioning", "Alignment"],
    file: "/certificates/flexbox.pdf",
  },
  {
    id: 6,
    title: "Bootstrap Framework",
    issuer: "NxtWave",
    date: "Verified Credential",
    skills: ["Grid System", "Responsive Utilities", "Components"],
    file: "/certificates/bootstrap.pdf",
  },
];
