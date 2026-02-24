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
      <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0)_0%,hsl(var(--background))_100%)]" />
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-reveal text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground">
            {profile.role}
          </p>
          <h1 className="text-reveal mt-8 text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          <p className="text-reveal [animation-delay:200ms] mt-8 text-xl leading-relaxed text-muted-foreground sm:text-2xl max-w-2xl mx-auto">
            {profile.headline}
          </p>
          <div className="text-reveal [animation-delay:400ms] mt-12 flex flex-wrap items-center justify-center gap-6">
            <a
              href={ctaLinks.projects}
              className="inline-flex h-14 items-center justify-center rounded-full bg-primary px-10 text-base font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-xl shadow-primary/20"
            >
              View My Work
            </a>
            <a
              href={ctaLinks.contact}
              className="inline-flex h-14 items-center justify-center rounded-full border border-input bg-background px-10 text-base font-bold transition-all hover:bg-accent active:scale-95"
            >
              Get in Touch
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-20">
          <div className="h-10 w-6 rounded-full border-2 border-foreground" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container border-t border-border">
        <div className="grid gap-16 lg:grid-cols-12 items-start">
          <div className="lg:col-span-7 space-y-10">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">About Me</h2>
            <div className="space-y-6">
              {about.map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div id="tech-stack" className="lg:col-span-5 rounded-2xl border border-border bg-accent/30 p-8">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground">
              Core Expertise
            </h3>
            <div className="mt-8 flex flex-wrap gap-3">
              {techStack.flatMap(g => g.items).map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-background border border-border px-4 py-2 text-sm font-semibold text-foreground shadow-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container border-t border-border">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-16">Experience</h2>
          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <div key={i} className="group relative pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border after:absolute after:left-[-4px] after:top-2 after:h-2 after:w-2 after:rounded-full after:bg-primary after:transition-transform group-hover:after:scale-150">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{exp.period}</span>
                </div>
                <p className="text-lg font-medium text-primary mt-1">{exp.company}</p>
                <p className="mt-6 text-base leading-relaxed text-muted-foreground italic">
                  {exp.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-container border-t border-border">
        <div className="max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-16">Education</h2>
          <div className="space-y-12">
            {education.map((edu, i) => (
              <div key={i} className="relative pl-12 before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-border">
                <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-baseline">
                  <h3 className="text-2xl font-bold text-foreground">{edu.degree}</h3>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{edu.period}</span>
                </div>
                <p className="text-lg font-medium text-muted-foreground mt-1">{edu.school}</p>
                <p className="mt-2 text-base text-muted-foreground/70">{edu.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container border-t border-border">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-16 text-center">Featured Projects</h2>
        <div className="grid gap-8 sm:grid-cols-2 max-w-5xl mx-auto">
          {projects.map((project) => (
            <article key={project.title} className="rounded-2xl border border-border bg-card p-10 shadow-sm transition-all hover:shadow-2xl hover:-translate-y-2 group">
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                {project.stack.map(s => (
                  <span key={s} className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
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
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-8 text-center">Get in Touch</h2>
          <p className="text-xl text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
            I'm currently open to new opportunities and collaborations. Feel free to reach out!
          </p>
          
          <div className="grid gap-6 md:grid-cols-3 mb-20">
            {contactLinks.filter(l => ["email", "linkedin", "github"].includes(l.type)).map((link) => (
              <a
                key={link.type}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="flex flex-col items-center gap-4 rounded-2xl border border-border p-8 transition-all hover:bg-accent hover:border-primary/50 group"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                    {link.label}
                  </p>
                  <p className="text-lg font-bold">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-3xl border border-border p-10 sm:p-16 bg-accent/10">
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
