// src/app/page.jsx
import AboutSection from '../components/AboutSection';
import AdSenseUnit from '../components/AdSenseUnit';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import SocialShowcase from '../components/SocialShowcase';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main className="min-h-screen text-[#201c18]">
      
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-14">
        <div className="section-shell rounded-sm px-6 py-8 md:px-10 md:py-10">
          <p className="eyebrow mb-4">Tech & Tonic</p>
          <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(220px,0.8fr)] md:items-end">
            <div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 text-[#201c18]">
          Hi, I&apos;m Aaron.
              </h1>
              <h2 className="text-xl md:text-2xl text-[#4a433b] mb-5">
                Founder & Lead Developer at <span className="text-[var(--accent)] font-semibold">Tech & Tonic</span>.
              </h2>
              <p className="text-base md:text-lg text-[#4a433b] max-w-2xl mb-7">
                I build clean, high-performance web applications and e-commerce solutions with a focus on speed, clarity, and practical business value.
              </p>
              <a
                href="#projects"
                className="inline-flex items-center border border-[#7f705f] bg-[#2c251f] px-6 py-2.5 text-sm font-medium uppercase tracking-wide text-[#f5eee4] hover:bg-[#3a3028]"
              >
                See Projects
              </a>
            </div>
            <div className="border-l border-[var(--border)] pl-5 text-sm text-[#4a433b] md:min-h-[132px]">
              <p className="mb-2 font-medium uppercase tracking-[0.18em] text-[var(--accent)]">Built For</p>
              <p>Clean storefronts, fast interfaces, and practical systems that support the business behind the screen.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-6">
        <AdSenseUnit adSlot="3350521090" className="min-h-[90px]" />
      </section>

      {/* Projects Showcase Section */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-10">
        <div className="section-divider mb-3">
          <p className="eyebrow">Selected Work</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#201c18]">Featured Projects</h2>
        <p className="mb-6 max-w-2xl text-[#4a433b]">A focused mix of commerce, cultural, media, and API-driven builds with an emphasis on usable systems and clean delivery.</p>
        
        {/* The Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project: (typeof projects)[number]) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <SocialShowcase />

      <AboutSection />

      <section className="max-w-5xl mx-auto px-6 py-4">
        <AdSenseUnit adSlot="7098194417" className="min-h-[90px]" />
      </section>
      
      <Footer />
    </main>
  );
}
