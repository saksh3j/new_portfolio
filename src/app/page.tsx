import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  about,
  contactLinks,
  ctaLinks,
  experiences,
  education,
  navItems,
  profile,
  projects,
  techStack,
} from "@/data/portfolio";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Modern Fixed Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-6">
          <p className="text-sm font-bold tracking-tight">
            {profile.name}
          </p>
          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="section-container">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            {profile.role}
          </p>
          <h1 className="heading-lg mt-4 leading-tight">
            {profile.headline}
          </h1>
          <p className="subheading mt-6">
            Based in {profile.location}. Currently building fintech solutions at Finnaux Techsolutions.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={ctaLinks.projects}
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View Projects
            </a>
            <a
              href={ctaLinks.contact}
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              Contact Me
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container border-t border-border">
        <h2 className="text-xl font-bold">About</h2>
        <div className="mt-8 grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-6">
            {about.map((paragraph, i) => (
              <p key={i} className="text-base leading-relaxed text-muted-foreground">
                {paragraph}
              </p>
            ))}
          </div>
          <div id="tech-stack" className="md:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Core Skills
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.flatMap(g => g.items).map((item) => (
                <span
                  key={item}
                  className="rounded-md bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="section-container border-t border-border">
        <div className="grid gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-xl font-bold">Work Experience</h2>
            <div className="mt-8 space-y-12">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-primary">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="font-semibold text-foreground">{exp.role}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {exp.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div id="education">
            <h2 className="text-xl font-bold">Education</h2>
            <div className="mt-8 space-y-8">
              {education.map((edu, i) => (
                <div key={i} className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-border">
                  <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
                    <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                    <span className="text-sm text-muted-foreground">{edu.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{edu.school} • {edu.location}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container border-t border-border">
        <h2 className="text-xl font-bold">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="card-base group">
              <div className="flex items-start justify-between">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map(s => (
                  <span key={s} className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground/70">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container border-t border-border">
        <div className="max-w-2xl">
          <h2 className="text-xl font-bold">Get in Touch</h2>
          <p className="mt-4 text-muted-foreground">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {contactLinks.filter(l => ["email", "linkedin", "github"].includes(l.type)).map((link) => (
              <a
                key={link.type}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="flex items-center gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-accent"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground">
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {link.label}
                  </p>
                  <p className="text-sm font-semibold">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-border p-8">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12">
        <div className="mx-auto max-w-4xl px-6 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
