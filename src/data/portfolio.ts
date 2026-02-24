export type ContactType =
  | "phone"
  | "whatsapp"
  | "email"
  | "github"
  | "vercel"
  | "npm"
  | "linkedin";

export interface ContactLink {
  type: ContactType;
  label: string;
  value: string;
  href: string;
  external: boolean;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  summary: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  location: string;
}

export interface ProjectItem {
  title: string;
  description: string;
  stack: string[];
}

export const profile = {
  name: "Saksham Jain",
  role: "Software Engineer",
  positioning: "Early-career Product Engineer with fintech production experience",
  headline:
    "Building scalable, production-ready web applications with modern frontend architecture and backend integrations.",
  location: "Jaipur, India",
};

export const about = [
  "I am a Software Engineer at Finnaux Techsolutions, specializing in building high-performance fintech systems and scalable web applications.",
  "With experience in both React/Next.js and Python-based backend services, I focus on delivering production-grade solutions with clean architecture and optimized performance.",
  "I graduated with a B.Tech in Computer Science from Poornima University, and I'm passionate about workflow automation, state management, and building user-centric products.",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const techStack: TechCategory[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "NestJS", "Django", "Flask"],
  },
  {
    title: "Database",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
  },
  {
    title: "State Management",
    items: ["TanStack Query", "Context API", "TanStack Table"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub", "Postman", "Vercel"],
  },
  {
    title: "Core Concepts",
    items: [
      "Workflow Automation",
      "Performance Optimization",
      "Scalable Architecture",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Finnaux Techsolutions Pvt. Ltd.",
    period: "April 2025 - Present",
    summary:
      "Built and optimized LOS dashboard modules using React, Next.js, and TypeScript for high-volume loan workflows. Developed Python-based backend services and integrated financial APIs to streamline operational processes. Improved UI performance and state management using TanStack Query and TanStack Table.",
  },
  {
    role: "Web Developer",
    company: "99iSolutions",
    period: "Nov 2024 - April 2025",
    summary:
      "Built and optimized Django-based backend services, reducing API response time by 25% through query optimization and database indexing. Developed and deployed full-stack applications with React frontend and Dockerized environments.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Full Stack Learning",
    period: "May 2024 - July 2024",
    summary:
      "Built RESTful APIs and backend modules using Python, Django, and Flask. Implemented authentication, CRUD operations, and structured API services for real-world backend systems.",
  },
];

export const education: EducationItem[] = [
  {
    school: "Poornima University",
    degree: "Bachelor of Technology in Computer Science & Engineering",
    period: "Sept. 2021 – June 2025",
    location: "Jaipur, India",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "SyncNest-Chat",
    description:
      "Real-time chat application using React and Node.js + Socket.io, enabling instant bi-directional messaging with room-based conversations and responsive UI.",
    stack: ["React", "Node.js", "Socket.io"],
  },
  {
    title: "StackPilot",
    description:
      "Modular NestJS backend with JWT, OAuth, MongoDB, and Stripe integration for secure multi-tenant SaaS workflows and subscription management.",
    stack: ["NestJS", "MongoDB", "Stripe", "OAuth"],
  },
];

export const ctaLinks = {
  projects: "#projects",
  contact: "#contact",
};

export const contactLinks: ContactLink[] = [
  {
    type: "phone",
    label: "Phone",
    value: "+91-9461489207",
    href: "tel:+919461489207",
    external: false,
  },
  {
    type: "whatsapp",
    label: "WhatsApp",
    value: "Message directly",
    href: "https://wa.me/919461489207",
    external: true,
  },
  {
    type: "email",
    label: "Email",
    value: "jain.merge@gmail.com",
    href: "mailto:jain.merge@gmail.com",
    external: false,
  },
  {
    type: "github",
    label: "GitHub",
    value: "@saksh3j",
    href: "https://github.com/saksh3j",
    external: true,
  },
  {
    type: "vercel",
    label: "Vercel",
    value: "Deployment profile",
    href: "https://vercel.com/saksh3j",
    external: true,
  },
  {
    type: "npm",
    label: "npm",
    value: "Package profile",
    href: "https://www.npmjs.com/~saksh3j",
    external: true,
  },
  {
    type: "linkedin",
    label: "LinkedIn",
    value: "/in/saksh3j",
    href: "https://www.linkedin.com/in/saksh3j",
    external: true,
  },
];
