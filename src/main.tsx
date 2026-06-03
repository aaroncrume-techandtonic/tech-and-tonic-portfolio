import ReactDOM from 'react-dom/client';
import './style.css';

type LinkCard = {
  title: string;
  detail: string;
  href: string;
  label: string;
};

type LinkGroup = {
  id: string;
  eyebrow: string;
  heading: string;
  blurb: string;
  links: LinkCard[];
};

const quickLinks: Array<Pick<LinkCard, 'title' | 'href'>> = [
  { title: 'Om Shanti Directory', href: 'https://omshantidirectory.vercel.app/' },
  { title: 'Featured App', href: 'https://aaroncrume-techandtonic.github.io/OmniCosmosV2.1/' },
  { title: 'Learning Library', href: 'https://aaroncrume-techandtonic.github.io/indigenous-pages/' },
  { title: 'Store', href: 'https://techandtonic.store/' },
  { title: 'Tracker Infographic', href: '/tracker.html' },
  { title: 'Creator Portfolio', href: 'compound-portfolio.html' },
];

const groupedLinks: LinkGroup[] = [
  {
    id: 'featured',
    eyebrow: 'Featured Destination',
    heading: 'Start with the flagship experiences',
    blurb: 'These are the core journeys we want every visitor to see first.',
    links: [
      {
        title: 'Om Shanti Directory',
        detail: 'Featured learning and wellness directory with curated pathways and guided exploration.',
        href: 'https://omshantidirectory.vercel.app/',
        label: 'Top Pick',
      },
      {
        title: 'OmniCosmos V3.0',
        detail: 'Interactive cosmic experience for reflective prompts and personalized exploration.',
        href: 'https://aaroncrume-techandtonic.github.io/OmniCosmosV2.1/',
        label: 'Showcase App',
      },
    ],
  },
  {
    id: 'learning',
    eyebrow: 'Learning and Culture',
    heading: 'Study pathways grouped together',
    blurb: 'Resources focused on history, language, and place-based context.',
    links: [
      {
        title: 'Indigenous Learning Library',
        detail: 'Guided reading and resources organized with cultural context and clear progression.',
        href: 'https://aaroncrume-techandtonic.github.io/indigenous-pages/',
        label: 'Library',
      },
      {
        title: 'Modoc History Archive',
        detail: 'Historical archive connecting timelines, places, and primary source context.',
        href: 'https://aaroncrume-techandtonic.github.io/Modoc-War/',
        label: 'History',
      },
      {
        title: 'Klamath Watershed Story Map',
        detail: 'Interactive map connecting ecosystems, relationships, and regional narratives.',
        href: 'https://aaroncrume-techandtonic.github.io/klamath-watershed/',
        label: 'Story Map',
      },
      {
        title: 'Klamath Language App',
        detail: 'Practice vocabulary in an interactive medicine wheel learning environment.',
        href: 'https://aaroncrume-techandtonic.github.io/klamath-app-medicine-wheel/',
        label: 'Language',
      },
    ],
  },
  {
    id: 'commerce',
    eyebrow: 'Store and Resources',
    heading: 'Commerce links with free learning access',
    blurb: 'Shop, free guides, and spotlight offers in one place.',
    links: [
      {
        title: 'Shop Digital Offerings',
        detail: 'Primary storefront for releases, tools, and educational products.',
        href: 'https://techandtonic.store/',
        label: 'Storefront',
      },
      {
        title: 'Free Guide: Hidden Language of Trauma',
        detail: 'Open the free guide and companion materials for a focused starting point.',
        href: 'https://techandtonic.store/shop/583c5bec-b36c-49f4-bc1d-e06eeaf6ce9f?pageViewSource=lib_view',
        label: 'Free Guide',
      },
      {
        title: 'Featured Product Spotlight',
        detail: 'Jump directly to a highlighted product without browsing the full catalog.',
        href: 'https://techandtonic.store/shop/4440aedc-a40d-45f1-824c-4ca4fe42a3b6',
        label: 'Spotlight',
      },
    ],
  },
  {
    id: 'media',
    eyebrow: 'Media and Tools',
    heading: 'Audio experiences and companion tools',
    blurb: 'Listen, reflect, and move into companion symbolic tools.',
    links: [
      {
        title: 'The Basin Beat',
        detail: 'Long-form storytelling and guided listening on Spotify.',
        href: 'https://open.spotify.com/show/3ZAlwYu3kQbb2qYhu84X2Y?si=ebaed426c58a4f70',
        label: 'Podcast',
      },
      {
        title: 'Romeo Strikes Back',
        detail: 'Featured album and music destination on Spotify.',
        href: 'https://open.spotify.com/album/3TcPEUdfLsr5Tt1bHnrfqC?si=EukzfZHBQDa3GKfvqEdMEQ',
        label: 'Album',
      },
      {
        title: 'Oracle of the Wheel',
        detail: 'Numerology-based companion path for symbolic reflection.',
        href: 'https://aaroncrume-techandtonic.github.io/OracleNeumero/',
        label: 'Companion Tool',
      },
      {
        title: 'Beyond GPS Tracker Infographic',
        detail: 'Interactive tracker infographic hosted directly on this domain.',
        href: '/tracker.html',
        label: 'Infographic',
      },
    ],
  },
  {
    id: 'creator',
    eyebrow: 'Creator and Legacy',
    heading: 'Context and legacy navigation',
    blurb: 'Use these links for profile context and older navigation routes.',
    links: [
      {
        title: 'Creators Portfolio',
        detail: 'Complete creator profile, project constellation, and background context.',
        href: 'compound-portfolio.html',
        label: 'Profile',
      },
      {
        title: 'Legacy Link Hub',
        detail: 'Bridge for visitors navigating from older link-hub routes.',
        href: 'https://beacons.ai/techandtonic',
        label: 'Legacy',
      },
    ],
  },
];

function App() {
  return (
    <>
      <div className="site-bg" />
      <div className="site-shell">
        <section className="app-rail" aria-label="Quick access links">
          <p className="app-rail-label">Quick Access</p>
          <nav className="app-rail-links">
            {quickLinks.map((item) => (
              <a key={item.title} href={item.href} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            ))}
          </nav>
        </section>

        <header className="hero" id="top">
          <p className="eyebrow">Tech and Tonic</p>
          <h1>Clear pathways. Brighter design. Every destination grouped by purpose.</h1>
          <p className="hero-copy">
            Start with Om Shanti, then move through learning, commerce, media, and creator resources with fewer clicks and cleaner context.
          </p>
          <div className="hero-actions">
            <a href="https://omshantidirectory.vercel.app/" target="_blank" rel="noopener noreferrer">
              Visit Om Shanti Directory
            </a>
            <a href="#featured">Browse Grouped Links</a>
          </div>
        </header>

        <nav className="jump-nav" aria-label="Section navigation">
          {groupedLinks.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.eyebrow}
            </a>
          ))}
        </nav>

        {groupedLinks.map((group) => (
          <section key={group.id} className="section" id={group.id}>
            <div className="section-head">
              <p className="eyebrow">{group.eyebrow}</p>
              <h2>{group.heading}</h2>
            </div>
            <p className="group-blurb">{group.blurb}</p>
            <div className="card-grid card-grid-directory">
              {group.links.map((item) => (
                <article key={item.title} className="link-card">
                  <p className="card-label">{item.label}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    Open Link
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}

        <footer className="footer">
          <p>Tech and Tonic</p>
          <a href="https://techandtonic.store/" target="_blank" rel="noopener noreferrer">
            Visit Store
          </a>
        </footer>
      </div>
    </>
  );
}

const root = document.getElementById('root');
if (!root) {
  throw new Error('Root element not found');
}

ReactDOM.createRoot(root).render(
  <App />
);
