// src/app/page.jsx
import AboutSection from '../components/AboutSection';
import AdSenseUnit from '../components/AdSenseUnit';
import Footer from '../components/Footer';
import Link from 'next/link';
import ProjectCard from '../components/ProjectCard';
import SocialShowcase from '../components/SocialShowcase';
import { projects } from './data/projects';

export default function Home() {
  return (
    <main className="min-h-screen text-[#201c18]">

      <section className="max-w-5xl mx-auto px-6 pt-6 pb-2">
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/album/3TcPEUdfLsr5Tt1bHnrfqC?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
        <iframe
          data-testid="embed-iframe"
          style={{ borderRadius: "12px" }}
          src="https://open.spotify.com/embed/show/3ZAlwYu3kQbb2qYhu84X2Y?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
        />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-6">
        <AdSenseUnit adSlot="3350521090" className="min-h-[90px]" />
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="section-shell rounded-2xl p-6 md:p-8 border border-[#b7ad9f]">
          <div className="section-divider mb-3">
            <p className="eyebrow">Featured Web App</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#201c18] mb-3">AI Soundscape Experience</h2>
          <p className="text-[#4a433b] max-w-3xl mb-6">
            Explore the new generative soundscape app with Focus, Relax, Sleep, and Move modes, onboarding flow, and subscription-style preview built for Tech &amp; Tonic.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://featured.techandtonic.tech"
              className="inline-flex items-center rounded-lg px-5 py-3 bg-[#201c18] text-[#ece7de] hover:bg-[#000]"
            >
              Launch Featured App
            </Link>
            <Link
              href="/featured"
              className="inline-flex items-center rounded-lg px-5 py-3 border border-[#201c18] text-[#201c18] hover:bg-[#e5ddcf]"
            >
              View Feature Details
            </Link>
          </div>
        </div>
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
