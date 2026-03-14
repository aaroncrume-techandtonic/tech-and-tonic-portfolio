// src/app/page.jsx
import AboutSection from '../components/AboutSection';
import AdSenseUnit from '../components/AdSenseUnit';
import Footer from '../components/Footer';
import InstagramReelEmbed from '../components/InstagramReelEmbed';
import ProjectCard from '../components/ProjectCard';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main className="min-h-screen text-[#201c18]">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="rounded-sm border border-[var(--border)] bg-[var(--surface)] px-6 py-8 md:px-10 md:py-10 shadow-[0_10px_30px_rgba(32,28,24,0.08)]">
          <p className="mb-3 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">Tech & Tonic</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 text-[#201c18]">
          Hi, I&apos;m Aaron.
          </h1>
          <h2 className="text-xl md:text-2xl text-[#4a433b] mb-5">
            Founder & Lead Developer at <span className="text-[var(--accent)] font-semibold">Tech & Tonic</span>.
          </h2>
          <p className="text-base md:text-lg text-[#4a433b] max-w-2xl mb-7">
            I build clean, high-performance web applications and e-commerce solutions. Welcome to my digital portfolio.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center border border-[#7f705f] bg-[#2c251f] px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-[#f5eee4] hover:bg-[#3a3028]"
          >
            View My Work
          </a>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-6">
        <AdSenseUnit adSlot="3350521090" className="min-h-[90px]" />
      </section>

      {/* Insert the new About Section right here */}
      <AboutSection />

      <InstagramReelEmbed />

      {/* Projects Showcase Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-semibold mb-6 text-[#201c18] border-b border-[var(--border)] pb-3">Featured Projects</h2>
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project: (typeof projects)[number]) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-4">
        <AdSenseUnit adSlot="7098194417" className="min-h-[90px]" />
      </section>
      
      <Footer />
    </main>
  );
}
