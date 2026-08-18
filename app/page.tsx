import React from 'react';
import NextImage, { ImageProps } from 'next/image';
import {
  // Github,
  // Linkedin,
  Mail,
  FileText,
  ExternalLink,
  Code2,
  Terminal,
  BookOpen,
  Briefcase,
  User,
  ArrowUpRight
} from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

// --- DATA CONFIGURATION ---
const Image = NextImage as React.ComponentType<ImageProps>;
const PERSONAL_DATA = {
  name: "Nilesh Pagar",
  role: "Director - Software Engineering Lead",
  location: "Singapore",
  profileImage: "/profile.png", // Add your photo to public/profile.jpg
  bio: "Engineering Leader with 20+ years of experience building and scaling resilient distributed systems. I align technical roadmaps with business strategy and lead high-performing teams to deliver impactful, modern software.",
  socials: {
    github: "https://github.com/nileshpagar",
    linkedin: "https://www.linkedin.com/in/nileshpagar",
    email: "mailto:nileshpagar@gmail.com",
    resume: "/resume.pdf"
  },
  skills: [
    "Java / Spring Boot", "Kong Gateway", "KeyCloak", "Cucumber", "Gatling",  "Apache Kafka", "Cassandra",
    "Kubernetes", "Docker", "PostgreSQL", "Scrum", "Kanban", "TDD"
  ],
  experience: [
    {
      period: "November 2023 — Present",
      role: "Director - Software Engineering Lead",
      company: "Julius Baer",
      description: "Architected event-driven microservices handling 50M+ daily events. Reduced end-to-end API latency by 35% using streaming optimization.",
      technologies: ["Java 21", "Spring Boot", "Kafka", "Kubernetes", "Apache Avro", "BigData pipelines"]
    },
    {
      period: "April 2019 — August 2023",
      role: "Engineering Manager",
      company: "Standard Chartered Bank",
      description: "Designed and implemented containerized deployment pipelines, reducing release rollback frequency by 40%.",
      technologies: ["Java", "Spring Boot", "Camunda", "AWS EKS", "Open Banking", "Payments and Cards", "Banking-as-a-service", "Embedded Finance"]
    },
    {
      period: "April 2012 — April 2019",
      role: "Technical Lead",
      company: "J P Morgan Chase",
      description: "Designed and implemented containerized deployment pipelines, reducing release rollback frequency by 40%.",
      technologies: ["Core Java", "Camunda", "ODS", "Gemfire"]
    }
  ],
  projects: [
    {
      title: "Event-Driven Order Processing Engine",
      description: "A high-throughput monorepo architecture demonstrating end-to-end order processing, state management, and real-time streaming updates.",
      tags: ["Java 21", "Spring Boot", "Kafka", "React"],
      github: "https://github.com",
      demo: "https://example.com"
    },
    {
      title: "Kubernetes Cluster Inspector",
      description: "CLI utility for automated resource health checks, config map audits, and real-time cluster monitoring.",
      tags: ["Go", "Kubernetes", "Docker", "CLI"],
      github: "https://github.com",
      demo: "https://example.com"
    }
  ],
  articles: [
    {
      title: "Optimizing Kafka Consumer Performance in High-Scale Systems",
      date: "May 2025",
      publication: "Engineering Blog",
      summary: "A deep dive into partition strategies, batch processing tuning, and backpressure handling.",
      url: "https://example.com"
    },
    {
      title: "Structuring Clean Monorepos for Full-Stack Applications",
      date: "Jan 2025",
      publication: "Dev.to",
      summary: "Best practices for organizing React frontends alongside Spring Boot microservices.",
      url: "https://example.com"
    }
  ]
};

export default function Portfolio() {
  return (
      <div className="min-h-screen bg-slate-950 text-slate-100 font-sans antialiased selection:bg-teal-500 selection:text-slate-950">

        {/* Navigation */}
        <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/80 border-b border-slate-800/80">

          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="#" className="font-bold text-lg text-teal-400 tracking-tight flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              <span>{PERSONAL_DATA.name.toLowerCase().replace(' ', '')}</span>
            </a>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
              <a href="#about" className="hover:text-teal-400 transition-colors">About</a>
              <a href="#experience" className="hover:text-teal-400 transition-colors">Experience</a>
              {/*<a href="#projects" className="hover:text-teal-400 transition-colors">Projects</a>*/}
              {/*<a href="#articles" className="hover:text-teal-400 transition-colors">Articles</a>*/}
              <a href="#contact" className="hover:text-teal-400 transition-colors">Contact</a>
            </nav>
            <a
                href={PERSONAL_DATA.socials.resume}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-teal-500/10 text-teal-300 border border-teal-500/30 text-xs font-semibold hover:bg-teal-500/20 transition-all flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5" /> Resume
            </a>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6 py-12 space-y-24">

          {/* HERO / BIO SECTION WITH PROFILE PHOTO SIDE-BY-SIDE */}
          <section id="about" className="pt-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-teal-400 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              Available for new opportunities
            </div>

            {/* SIDE-BY-SIDE CONTAINER */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 pt-2">

              {/* 1. Profile Picture (Left on desktop) */}
              <div className="shrink-0">
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full p-1 bg-gradient-to-tr from-teal-400 to-slate-700 shadow-xl shadow-teal-500/10">
                  <div className="relative w-full h-full rounded-full overflow-hidden bg-slate-900">
                    <Image
                        src={PERSONAL_DATA.profileImage}
                        alt={PERSONAL_DATA.name}
                        fill
                        sizes="(max-width: 768px) 144px, 176px"
                        className="object-cover"
                        priority
                    />
                  </div>
                </div>
              </div>

              {/* 2. Intro Content (Right on desktop) */}
              <div className="flex-1 space-y-3 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
                  {PERSONAL_DATA.name}
                </h1>
                <p className="text-xl text-teal-400/90 font-medium">
                  {PERSONAL_DATA.role}
                </p>
                <p className="text-slate-400 max-w-2xl text-base sm:text-lg leading-relaxed">
                  {PERSONAL_DATA.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center justify-center md:justify-start gap-4 pt-2">
                  <a href={PERSONAL_DATA.socials.github} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/50 hover:text-teal-400 transition-all">
                    <FaGithub className="w-5 h-5" />
                  </a>
                  <a href={PERSONAL_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/50 hover:text-teal-400 transition-all">
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a href={PERSONAL_DATA.socials.email} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-teal-500/50 hover:text-teal-400 transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Tech Stack Badges */}
            <div className="pt-6 border-t border-slate-800/60">
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-500 mb-3">Core Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {PERSONAL_DATA.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 rounded-md text-xs font-medium bg-slate-900 text-slate-300 border border-slate-800">
                  {skill}
                </span>
                ))}
              </div>
            </div>
          </section>

          {/* EXPERIENCE SECTION */}
          <section id="experience" className="space-y-8">
            <div className="flex items-center gap-3">
              <Briefcase className="w-6 h-6 text-teal-400" />
              <h2 className="text-2xl font-bold tracking-tight text-slate-100">Work Experience</h2>
            </div>
            <div className="space-y-6">
              {PERSONAL_DATA.experience.map((item, index) => (
                  <div key={index} className="p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                      <h3 className="text-lg font-semibold text-slate-200">{item.role} <span className="text-teal-400">@ {item.company}</span></h3>
                      <span className="text-xs font-mono text-slate-500">{item.period}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {item.technologies.map((tech, idx) => (
                          <span key={idx} className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-teal-500/10 text-teal-300 border border-teal-500/20">
                      {tech}
                    </span>
                      ))}
                    </div>
                  </div>
              ))}
            </div>
          </section>

          {/* PROJECTS SECTION */}
          {/*<section id="projects" className="space-y-8">*/}
          {/*  <div className="flex items-center gap-3">*/}
          {/*    <Code2 className="w-6 h-6 text-teal-400" />*/}
          {/*    <h2 className="text-2xl font-bold tracking-tight text-slate-100">Featured Projects</h2>*/}
          {/*  </div>*/}
          {/*  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">*/}
          {/*    {PERSONAL_DATA.projects.map((project, index) => (*/}
          {/*        <div key={index} className="group p-6 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-slate-700/80 transition-all flex flex-col justify-between">*/}
          {/*          <div className="space-y-3">*/}
          {/*            <div className="flex items-center justify-between">*/}
          {/*              <h3 className="text-lg font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">{project.title}</h3>*/}
          {/*              <div className="flex items-center gap-2 text-slate-400">*/}
          {/*                <a href={project.github} target="_blank" rel="noreferrer" className="hover:text-slate-100">*/}
          {/*                  /!*<Github className="w-4 h-4" />*!/*/}
          {/*                </a>*/}
          {/*                <a href={project.demo} target="_blank" rel="noreferrer" className="hover:text-slate-100"><ExternalLink className="w-4 h-4" /></a>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*            <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>*/}
          {/*          </div>*/}
          {/*          <div className="flex flex-wrap gap-2 pt-4">*/}
          {/*            {project.tags.map((tag, idx) => (*/}
          {/*                <span key={idx} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-800 text-slate-300">*/}
          {/*            {tag}*/}
          {/*          </span>*/}
          {/*            ))}*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/* ARTICLES & PUBLICATIONS */}
          {/*<section id="articles" className="space-y-8">*/}
          {/*  <div className="flex items-center gap-3">*/}
          {/*    <BookOpen className="w-6 h-6 text-teal-400" />*/}
          {/*    <h2 className="text-2xl font-bold tracking-tight text-slate-100">Articles & Writing</h2>*/}
          {/*  </div>*/}
          {/*  <div className="space-y-4">*/}
          {/*    {PERSONAL_DATA.articles.map((article, index) => (*/}
          {/*        <a*/}
          {/*            key={index}*/}
          {/*            href={article.url}*/}
          {/*            target="_blank"*/}
          {/*            rel="noreferrer"*/}
          {/*            className="group p-5 rounded-xl bg-slate-900/30 border border-slate-800/60 hover:border-teal-500/40 transition-all block space-y-2"*/}
          {/*        >*/}
          {/*          <div className="flex items-center justify-between">*/}
          {/*            <span className="text-xs font-mono text-teal-400">{article.publication} • {article.date}</span>*/}
          {/*            <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-teal-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />*/}
          {/*          </div>*/}
          {/*          <h3 className="text-base font-semibold text-slate-200 group-hover:text-teal-300 transition-colors">{article.title}</h3>*/}
          {/*          <p className="text-slate-400 text-sm">{article.summary}</p>*/}
          {/*        </a>*/}
          {/*    ))}*/}
          {/*  </div>*/}
          {/*</section>*/}

          {/* CONTACT SECTION */}
          <section id="contact" className="p-8 rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-900/20 border border-slate-800 text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">Lets Connect</h2>
            <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">For any valuable engineering collaborations, or technical discussions. Feel free to reach out via email.</p>
            <a
                href={PERSONAL_DATA.socials.email}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-500 text-slate-950 font-semibold text-sm hover:bg-teal-400 transition-all shadow-lg shadow-teal-500/10"
            >
              <Mail className="w-4 h-4" />nileshpagar@gmail.com</a>
          </section>

        </main>

        {/* Footer */}
        <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-600">
          © {new Date().getFullYear()} {PERSONAL_DATA.name}. Built with Next.js & Tailwind CSS.
        </footer>
      </div>
  );
}