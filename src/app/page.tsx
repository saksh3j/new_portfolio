import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  about,
  contactLinks,
  ctaLinks,
  experiences,
  navItems,
  profile,
  projects,
  techStack,
} from "@/data/portfolio";
import { personJsonLd, websiteJsonLd } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <div className="mx-auto max-w-5xl px-5 py-8 sm:px-8 sm:py-12">
        <div className="sticky top-4 z-20 mb-6 rounded-lg border border-border bg-card/95 px-4 py-3 shadow-sm backdrop-blur">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold tracking-tight">
              {profile.name} / saksh3j
            </p>
            <div className="flex items-center gap-3">
              <nav aria-label="Primary" className="hidden gap-3 sm:flex">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <section
            id="hero"
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
              {profile.role}
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {profile.name}
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {profile.positioning} - also known as saksh3j
            </p>
            <p className="mt-5 max-w-3xl text-base leading-7 text-foreground">
              {profile.headline}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={ctaLinks.projects}
                className="inline-flex items-center gap-2 rounded-md border border-primary bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href={ctaLinks.contact}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Contact Me
              </a>
            </div>
          </section>

          <section
            id="about"
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-base font-semibold uppercase tracking-[0.1em]">
              About
            </h2>
            <div className="mt-4 space-y-4">
              {about.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>

          <section
            id="tech-stack"
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-base font-semibold uppercase tracking-[0.1em]">
              Tech Stack
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {techStack.map((group) => (
                <article
                  key={group.title}
                  className="rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent/40"
                >
                  <h3 className="text-sm font-semibold">{group.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {group.items.join(", ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="experience"
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-base font-semibold uppercase tracking-[0.1em]">
              Experience
            </h2>
            <div className="mt-4 space-y-3">
              {experiences.map((experience) => (
                <article
                  key={`${experience.company}-${experience.period}`}
                  className="rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent/40"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold">
                      {experience.role} - {experience.company}
                    </h3>
                    <p className="text-xs text-muted-foreground">{experience.period}</p>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {experience.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="projects"
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-base font-semibold uppercase tracking-[0.1em]">
              Projects
            </h2>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className="rounded-lg border border-border bg-background p-4 transition-colors hover:bg-accent/40"
                >
                  <h3 className="text-sm font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  <p className="mt-3 text-xs text-muted-foreground">
                    {project.stack.join(" • ")}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="rounded-xl border border-border bg-card p-6 shadow-sm sm:p-8"
          >
            <h2 className="text-base font-semibold uppercase tracking-[0.1em]">
              Contact
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Email, phone, and profiles are listed below. You can also send a
              direct message using the form.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {contactLinks.map((link) => (
                <li key={link.type}>
                  <a
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noreferrer noopener" : undefined}
                    className="flex items-center justify-between rounded-md border border-border bg-background px-3 py-2.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <span className="font-medium">{link.label}</span>
                    <span className="inline-flex items-center gap-1 text-muted-foreground">
                      {link.value}
                      {link.external ? <ArrowUpRight className="h-3.5 w-3.5" /> : null}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-lg border border-border bg-background p-4 sm:p-5">
              <ContactForm />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
