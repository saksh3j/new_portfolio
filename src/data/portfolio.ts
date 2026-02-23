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
  "I am a Software Engineer focused on building clean, scalable, and high-performance web applications where architecture, performance, and usability matter.",
  "I have worked in production product environments, contributing to dashboard systems, workflow automation modules, API-driven interfaces, and real-time application features.",
  "My primary stack includes React, Next.js, TypeScript, and Python. I focus on maintainable code and shipping features that solve clear business problems.",
];

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Tech Stack", href: "#tech-stack" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const techStack: TechCategory[] = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & APIs",
    items: ["Python", "REST APIs", "Strapi"],
  },
  {
    title: "Database",
    items: ["MySQL"],
  },
  {
    title: "DevOps & Tools",
    items: ["Docker", "Git", "GitHub"],
  },
  {
    title: "Core Focus Areas",
    items: [
      "Performance Optimization",
      "Workflow Automation",
      "State Management",
      "Real-time Systems",
    ],
  },
];

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Finnaux Techsolutions Pvt. Ltd.",
    period: "Apr 2025 - Present",
    summary:
      "Worked on Loan Origination and Loan Management modules, built dashboard components, integrated APIs, improved performance, and contributed to backend workflow logic.",
  },
  {
    role: "Frontend Developer",
    company: "99isolutions",
    period: "Nov 2024 - Apr 2025",
    summary:
      "Contributed to the GetGabs product through UI enhancements, bug fixes, and API integrations in a live product environment.",
  },
  {
    role: "Full Stack Developer Intern",
    company: "Internship",
    period: "May 2024 - Jul 2024",
    summary:
      "Built responsive web applications and gained hands-on exposure to full-stack development workflows.",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Real-time Support Ticket System",
    description:
      "Role-based ticket management platform with real-time updates, clear assignment workflow, and scalable backend architecture.",
    stack: ["Socket.io", "TypeScript", "REST APIs"],
  },
  {
    title: "Fintech Dashboard",
    description:
      "Full-stack financial dashboard with authentication, API integrations, and performance-optimized UI components.",
    stack: ["Next.js", "MySQL", "Python"],
  },
  {
    title: "Workflow Automation Web App",
    description:
      "Scalable web application focused on workflow automation, reliable data handling, and operational efficiency.",
    stack: ["React", "Node.js", "Docker"],
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
