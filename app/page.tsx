import AboutSection from "../components/AboutSection";
import AdSenseUnit from "../components/AdSenseUnit";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import SocialShowcase from "../components/SocialShowcase";
import TopNav from "../components/TopNav";
import { projects } from "./data/projects";
import { siteConfig } from "./data/site";

export default function Home() {
  const storefrontUrl = siteConfig.storefrontUrl;

  return (
    <main id="top" className="cosmic-main min-h-screen text-[var(--foreground)] pb-10">
      <TopNav storefrontUrl={storefrontUrl} />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 md:pt-10 pb-7 md:pb-8 reveal-up">
        <div className="section-shell rounded-3xl p-5 sm:p-7 md:p-10 border border-[var(--border)]">
          <p className="eyebrow">Cosmic Science Interface</p>
          <h1 className="mt-3 text-3xl sm:text-4xl md:text-6xl font-semibold text-[#f4fbff] leading-tight">
            Tech and Tonic, now split for focus: discovery here, commerce in the storefront.
          </h1>
          <p className="mt-4 md:mt-5 max-w-3xl text-[#c6dff7] text-sm sm:text-base md:text-lg">
            The main site is now your mission control for media, projects, lessons, and social channels.
            Product transactions and catalog growth can live in a dedicated storefront architecture.
          </p>
          <div className="mt-6 md:mt-8 grid gap-3 sm:gap-4 md:grid-cols-2">
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-2)]">Main Site</p>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-[#ecf7ff]">Stories, Media, and Portfolio</h2>
              <p className="mt-2 text-sm text-[#bdd6f0]">Keep publishing, artist branding, and product showcases here with fast editorial updates.</p>
            </article>
            <article className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-5 backdrop-blur-md">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent-3)]">Storefront</p>
              <h2 className="mt-2 text-xl sm:text-2xl font-semibold text-[#ecf7ff]">Products and Checkout</h2>
              <p className="mt-2 text-sm text-[#bdd6f0]">Route customers to a dedicated commerce domain with cleaner analytics, conversion tracking, and scaling.</p>
            </article>
          </div>
          <div className="mt-5 md:mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={storefrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 bg-[var(--accent)] text-[#001017] text-sm sm:text-base font-semibold hover:bg-[var(--accent-2)] transition-colors"
            >
              Open Storefront
            </a>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-[var(--border)] text-[#d6ecff] text-sm sm:text-base hover:bg-[#0f2248] transition-colors"
            >
              Explore Main Site Projects
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-7 md:pb-8 reveal-up reveal-delay-1">
        <div className="section-shell rounded-3xl p-6 md:p-8 border border-[#2a6fb2] bg-gradient-to-br from-[#0b5fa6]/75 via-[#0c2f5a]/75 to-[#3f1a70]/75 shadow-[0_8px_32px_rgba(8,38,94,0.36)]">
          <div className="section-divider mb-3">
            <p className="eyebrow text-white">Special Feature</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 drop-shadow">Om Shanti Learning Directory</h2>
          <p className="text-white/90 max-w-3xl mb-6">
            Explore a curated directory of spiritual, wellness, and learning resources. Handpicked for the Tech &amp; Tonic community.
          </p>
          <a
            href={siteConfig.omShantiDirectoryUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center rounded-full px-7 py-3 text-lg font-bold bg-[#f5fcff] text-[#0b1f3f] shadow-[0_8px_28px_rgba(19,241,255,0.2)] hover:bg-[#8fd5ff] hover:text-[#071429] transition-colors border-2 border-white/80"
          >
            Visit Om Shanti Directory &rarr;
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-1 md:pt-2 pb-3 spotify-embeds reveal-up reveal-delay-2">
        <iframe
          data-testid="embed-iframe"
          title="Tech and Tonic Album on Spotify"
          src="https://open.spotify.com/embed/album/3TcPEUdfLsr5Tt1bHnrfqC?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="border border-[var(--border)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
        />
        <iframe
          data-testid="embed-iframe"
          title="Tech and Tonic Podcast on Spotify"
          src="https://open.spotify.com/embed/show/3ZAlwYu3kQbb2qYhu84X2Y?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="border border-[var(--border)] shadow-[0_12px_30px_rgba(0,0,0,0.35)]"
        />
        <div className="mt-6 rounded-3xl overflow-hidden border border-[var(--border)] bg-[var(--surface)] backdrop-blur-md">
          <div className="px-5 py-4 bg-[#07172f] text-[#d6ecff]">
            <p className="text-sm uppercase tracking-[0.2em]">YouTube Channel</p>
            <h3 className="mt-2 text-xl font-semibold">Om Shanti on YouTube</h3>
          </div>
          <iframe
            data-testid="youtube-embed-iframe"
            title="Om Shanti YouTube Channel"
            src="https://www.youtube.com/embed?listType=user_uploads&list=THE_OMSHANTI"
            width="100%"
            height="640"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
            className="bg-[#040712]"
          />
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-5 md:pb-6 reveal-up reveal-delay-2">
        <AdSenseUnit adSlot="3350521090" className="min-h-[90px]" />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-7 md:pb-8 reveal-up reveal-delay-3">
        <div className="section-shell rounded-3xl p-5 sm:p-6 md:p-8 border border-[var(--border)]">
          <div className="section-divider mb-3">
            <p className="eyebrow">Featured Web App</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ecf7ff] mb-3">AI Soundscape Experience</h2>
          <p className="text-[#bdd6f0] max-w-3xl mb-6">
            Explore the new generative soundscape app with Focus, Relax, Sleep, and Move modes, onboarding flow, and subscription-style preview built for Tech &amp; Tonic.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.featuredAppUrl}
              className="inline-flex items-center rounded-lg px-5 py-3 bg-[var(--accent)] text-[#001017] font-semibold hover:bg-[var(--accent-2)]"
            >
              Launch Featured App
            </a>
            <a
              href="/featured"
              className="inline-flex items-center rounded-lg px-5 py-3 border border-[var(--border)] text-[#d6ecff] hover:bg-[#0f2248]"
            >
              View Feature Details
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-7 md:pb-8 reveal-up">
        <div className="section-shell rounded-3xl p-5 sm:p-6 md:p-8 border border-[var(--border)] bg-[var(--surface-strong)]">
          <div className="section-divider mb-3">
            <p className="eyebrow">Lesson Spotlight</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#ecf7ff] mb-3">Full Faraday Lesson</h2>
          <p className="text-[#bdd6f0] max-w-3xl mb-6">
            Placeholder entry for the Full Faraday lesson, linked directly to the Amazon listing for easy access.
          </p>
          <a
            href={siteConfig.faradayLessonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-lg px-5 py-3 bg-[#051733] text-[#d8f6ff] hover:bg-[#08244f] border border-[var(--border)]"
          >
            View Full Faraday Lesson
          </a>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-10 reveal-up">
        <div className="section-divider mb-3">
          <p className="eyebrow">Selected Work</p>
        </div>
        <h2 className="text-3xl md:text-4xl font-semibold mb-3 text-[#ecf7ff]">Featured Projects</h2>
        <p className="mb-6 max-w-2xl text-[#bdd6f0]">A focused mix of commerce, cultural, media, and API-driven builds with an emphasis on usable systems and clean delivery.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project: (typeof projects)[number]) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <SocialShowcase />

      <AboutSection />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <AdSenseUnit adSlot="7098194417" className="min-h-[90px]" />
      </section>

      <Footer />
    </main>
  );
}
