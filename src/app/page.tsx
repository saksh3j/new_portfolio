import { ContactForm } from "@/components/contact-form";
import { ThemeToggle } from "@/components/theme-toggle";
import { Spotlight } from "@/components/spotlight";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { BackgroundBeams } from "@/components/background-beams";
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
import { ArrowUpRight, Code2, Globe, Sparkles, Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-primary/10 relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />

      {/* Modern Fixed Navbar */}
      <header className="sticky top-0 z-[100] w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-xl font-black tracking-tighter hover:opacity-80 transition-opacity">
            saksh3j<span className="text-primary">.</span>
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="nav-link font-bold uppercase tracking-widest text-[10px]">
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section - Aceternity Style */}
      <section id="hero" className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background antialiased">
        <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />
        
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
          <div className="mb-6 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-primary">
              <Sparkles className="h-3 w-3" />
              Available for new projects
            </span>
          </div>
          
          <h1 className="bg-gradient-to-b from-foreground to-foreground/50 bg-clip-text text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
            {profile.name}
          </h1>
          
          <TextGenerateEffect 
            words={profile.headline}
            className="mt-8 max-w-2xl mx-auto text-center !text-lg md:!text-xl font-medium text-muted-foreground"
          />

          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            <a
              href={ctaLinks.projects}
              className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-12 text-lg font-bold text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-primary/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Work <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
            <a
              href={ctaLinks.contact}
              className="inline-flex h-16 items-center justify-center rounded-full border border-input bg-background px-12 text-lg font-bold transition-all hover:bg-accent active:scale-95"
            >
              Contact Me
            </a>
          </div>
        </div>
        
        {/* Decorative Grid */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </section>

      {/* About Section */}
      <section id="about" className="section-container border-t border-border relative">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-10">
            About Me<span className="text-primary">.</span>
          </h2>
          <div className="space-y-8">
            {about.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground md:text-xl font-medium">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="section-container border-t border-border bg-accent/5">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-right">
          Tech Stack<span className="text-primary">.</span>
        </h2>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group) => (
            <div key={group.title} className="space-y-6 p-6 rounded-2xl border border-border bg-background shadow-sm transition-all hover:border-primary/50 group">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-base font-semibold text-muted-foreground transition-all group-hover:text-foreground hover:!text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section-container border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16">
            Experience<span className="text-primary">.</span>
          </h2>
          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <div key={i} className="group grid md:grid-cols-5 gap-8">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{exp.period}</span>
                </div>
                <div className="md:col-span-4 space-y-4">
                  <div className="space-y-1">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{exp.role}</h3>
                    <p className="text-lg font-semibold text-muted-foreground">{exp.company}</p>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground font-medium">
                    {exp.summary}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section-container border-t border-border">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-right">
            Education<span className="text-primary">.</span>
          </h2>
          <div className="space-y-16">
            {education.map((edu, i) => (
              <div key={i} className="grid md:grid-cols-5 gap-8">
                <div className="md:col-span-1">
                  <span className="text-xs font-bold text-primary uppercase tracking-[0.2em]">{edu.period}</span>
                </div>
                <div className="md:col-span-4 space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">{edu.degree}</h3>
                  <p className="text-lg font-semibold text-muted-foreground">{edu.school}</p>
                  <p className="text-base text-muted-foreground/60 font-medium">{edu.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section - Bento Grid Style */}
      <section id="projects" className="section-container border-t border-border bg-primary/[0.02]">
        <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-16 text-center">
          Projects<span className="text-primary">.</span>
        </h2>
        <BentoGrid className="max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <BentoGridItem
              key={project.title}
              title={project.title}
              description={project.description}
              header={
                <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-100 dark:from-neutral-900 dark:to-neutral-800 to-neutral-50 p-4 flex-col justify-between overflow-hidden relative group border border-border/50">
                  <div className="flex flex-wrap gap-2 relative z-10">
                    {project.stack.slice(0, 3).map(s => (
                      <span key={s} className="text-[8px] font-bold uppercase tracking-widest text-primary bg-background/80 backdrop-blur-sm px-2 py-1 rounded-full">
                        {s}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-primary absolute bottom-3 right-3 transition-transform group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              }
              icon={i % 2 === 0 ? <Code2 className="h-4 w-4 text-primary" /> : <Globe className="h-4 w-4 text-primary" />}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </section>

      {/* Contact Section - Background Beams */}
      <section id="contact" className="section-container border-t border-border relative overflow-hidden">
        <BackgroundBeams />
        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-10 text-center">
            Contact<span className="text-primary">.</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-xl mx-auto font-medium">
            Currently open to new opportunities and collaborations. Drop a message!
          </p>
          
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {contactLinks.filter(l => ["email", "linkedin", "github"].includes(l.type)).map((link) => (
              <a
                key={link.type}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                className="flex flex-col items-center gap-4 rounded-2xl border border-border p-8 transition-all hover:bg-background/50 hover:border-primary/50 group backdrop-blur-sm shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-white">
                  <ArrowUpRight className="h-6 w-6" />
                </div>
                <div className="text-center">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1">
                    {link.label}
                  </p>
                  <p className="text-lg font-bold tracking-tight">{link.value}</p>
                </div>
              </a>
            ))}
          </div>

          <div className="rounded-[2rem] border border-border p-8 sm:p-12 bg-background/50 backdrop-blur-xl shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 text-center">
        <p className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">
          Built with precision by saksh3j © 2024
        </p>
      </footer>
    </main>
  );
}
