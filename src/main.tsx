import ReactDOM from 'react-dom/client';
import './style.css';

type LinkCard = {
  title: string;
  detail: string;
  href: string;
  label?: string;
  cta?: string;
  tags?: string[];
};

type LinkGroup = {
  id: string;
  eyebrow: string;
  heading: string;
  blurb: string;
  links: LinkCard[];
};

type ShopifyStore = {
  title: string;
  detail: string;
  href: string;
  logoSrc?: string;
};

// Direct destinations for the showcase apps. The same-origin /go/* redirects
// defined in vercel.json are not resolving in production, so link straight
// to the hosted apps until that routing issue is fixed.
const goLinks = {
  omnicosmos: 'https://aaroncrume-techandtonic.github.io/OmniCosmosV2.1/',
  library: 'https://aaroncrume-techandtonic.github.io/indigenous-pages/',
  modoc: 'https://aaroncrume-techandtonic.github.io/Modoc-War/',
  watershed: 'https://aaroncrume-techandtonic.github.io/klamath-watershed/',
  language: 'https://aaroncrume-techandtonic.github.io/klamath-app-medicine-wheel/',
  oracle: 'https://aaroncrume-techandtonic.github.io/OracleNeumero/',
} as const;

const shopifyStores: ShopifyStore[] = [
  {
    title: 'Tech & Tonic Store',
    detail: 'Primary storefront for releases, tools, and educational products.',
    href: 'https://techandtonicshop.myshopify.com/',
    logoSrc: '/logos/tech-and-tonic-shop.png',
  },
  {
    title: 'Asymptomaticly Ravishing',
    detail: 'Apothecary, fashion, and beauty — self-tanning rituals and curated glow essentials.',
    href: 'https://asymptomaticlyravishing.myshopify.com/',
    logoSrc: '/logos/asymptomaticly-ravishing.png',
  },
];

const quickLinks: Array<Pick<LinkCard, 'title' | 'href'>> = [
  { title: 'Faraday Protection for your Electronics', href: 'https://amzn.to/4oLVS6W' },
  { title: 'Om Shanti Directory', href: 'https://omshantidirectory.vercel.app/' },
  { title: 'Featured App', href: goLinks.omnicosmos },
  { title: 'Learning Library', href: goLinks.library },
  { title: 'Store', href: 'https://techandtonic.store/' },
  { title: 'Tracker Infographic', href: '/tracker.html' },
  { title: 'Professional Portfolio', href: '/portfolio.html' },
];

const groupedLinks: LinkGroup[] = [
  {
    id: 'featured',
    eyebrow: 'Featured Destination',
    heading: 'Begin with the flagship experiences',
    blurb: 'Start here for the fastest path into the core Tech and Tonic journeys.',
    links: [
      {
        title: 'Om Shanti Directory',
        detail:
          'A sacred digital sanctuary of 100 self-led knowledge infusions, bridging ancient mystical wisdom with modern psychology and somatic practice. Every entry pairs an origin story with a guided script and a one-minute daily practice to calm the nervous system and return to center.',
        href: 'https://omshantidirectory.vercel.app/',
        label: 'Top Pick · Return to the Center',
        tags: ['100 Knowledge Infusions', 'Ancient Mysticism × Modern Psychology', 'Guided Daily Practice'],
      },
      {
        title: 'OmniCosmos V3.0',
        detail: 'Interactive cosmic experience for reflective prompts and personalized exploration.',
        href: goLinks.omnicosmos,
        label: 'Showcase App',
      },
    ],
  },
  {
    id: 'learning',
    eyebrow: 'Learning and Culture',
    heading: 'Learning paths in one lane',
    blurb: 'History, language, and place-based context organized for steady progression.',
    links: [
      {
        title: 'Indigenous Learning Library',
        detail: 'Guided reading and resources organized with cultural context and clear progression.',
        href: goLinks.library,
        label: 'Library',
      },
      {
        title: 'Modoc History Archive',
        detail: 'Historical archive connecting timelines, places, and primary source context.',
        href: goLinks.modoc,
        label: 'History',
      },
      {
        title: 'Klamath Watershed Story Map',
        detail: 'Interactive map connecting ecosystems, relationships, and regional narratives.',
        href: goLinks.watershed,
        label: 'Story Map',
      },
      {
        title: 'Klamath Language App',
        detail: 'Practice vocabulary in an interactive medicine wheel learning environment.',
        href: goLinks.language,
        label: 'Language',
      },
    ],
  },
  {
    id: 'commerce',
    eyebrow: 'Store and Resources',
    heading: 'Shop and free resources together',
    blurb: 'Browse paid offerings and free materials without leaving the same section.',
    links: [
      {
        title: 'Free Guide: Hidden Language of Trauma',
        detail: 'Open the free guide and companion materials for a focused starting point.',
        href: 'https://techandtonic.store/shop/583c5bec-b36c-49f4-bc1d-e06eeaf6ce9f?pageViewSource=lib_view',
        label: 'Free Guide',
      },
    ],
  },
  {
    id: 'media',
    eyebrow: 'Media and Tools',
    heading: 'Audio, reflection, and utility tools',
    blurb: 'Move from listening into interactive tools in a single flow.',
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
        href: goLinks.oracle,
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
    eyebrow: 'Creator',
    heading: 'Creator profile',
    blurb: 'Open the full profile for background, case studies, and testimonials.',
    links: [
      {
        title: 'Professional Portfolio',
        detail: '20+ years bridging hospitality operations and full-stack development, with case studies and testimonials.',
        href: '/portfolio.html',
        label: 'Profile',
      },
    ],
  },
];

const getCtaText = (item: LinkCard): string => {
  if (item.cta) {
    return item.cta;
  }

  const title = item.title.toLowerCase();
  const label = (item.label || '').toLowerCase();

  if (title.includes('directory')) return 'Explore Directory';
  if (title.includes('omni')) return 'Launch Experience';
  if (title.includes('library') || label.includes('library')) return 'Browse Library';
  if (title.includes('modoc')) return 'Explore Archive';
  if (title.includes('watershed')) return 'Open Story Map';
  if (title.includes('shop') || title.includes('store') || label.includes('store')) return 'Shop Now';
  if (title.includes('spotlight')) return 'View Spotlight';
  if (title.includes('guide')) return 'Read Guide';
  if (title.includes('language')) return 'Practice Language';
  if (title.includes('podcast') || title.includes('basin beat')) return 'Listen Now';
  if (title.includes('album') || title.includes('romeo')) return 'Play Album';
  if (title.includes('oracle')) return 'Open Oracle';
  if (title.includes('tracker')) return 'View Infographic';
  if (title.includes('portfolio')) return 'View Portfolio';
  if (title.includes('policy')) return 'Open Explorer';
  return 'Open Destination';
};

const omShantiFeature = groupedLinks
  .find((group) => group.id === 'featured')
  ?.links.find((item) => item.title === 'Om Shanti Directory');

const kelvinWaveFeature: LinkCard = {
  title: 'Pacific Kelvin Wave 2026',
  detail:
    'An interactive simulation of the planetary Kelvin wave moving across the Pacific in 2026 — explore the ocean-atmosphere dynamics behind the event.',
  href: 'https://aaroncrume-techandtonic.github.io/pacific-kelvin-wave-2026/',
  label: 'New · Infographic',
};

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
          <h1>One directory to begin every journey.</h1>
        </header>

        <section className="spotlight kelvin-spotlight" aria-labelledby="kelvin-spotlight-heading">
          <div className="spotlight-content">
            <p className="spotlight-eyebrow">{kelvinWaveFeature.label}</p>
            <h2 id="kelvin-spotlight-heading">{kelvinWaveFeature.title}</h2>
            <p className="spotlight-detail">{kelvinWaveFeature.detail}</p>
            <a
              className="spotlight-cta"
              href={kelvinWaveFeature.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Kelvin Wave Infographic &rarr;
            </a>
          </div>
        </section>

        {omShantiFeature && (
          <section className="spotlight" aria-labelledby="spotlight-heading">
            <div className="spotlight-motif" aria-hidden="true">
              <div className="medicine-wheel">
                <div className="seg red" />
                <div className="seg yellow" />
                <div className="seg black" />
                <div className="seg white" />
              </div>
            </div>
            <div className="spotlight-content">
              <p className="spotlight-eyebrow">{omShantiFeature.label}</p>
              <h2 id="spotlight-heading">{omShantiFeature.title}</h2>
              <p className="spotlight-detail">{omShantiFeature.detail}</p>
              {omShantiFeature.tags && (
                <ul className="spotlight-tags">
                  {omShantiFeature.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
              )}
              <a
                className="spotlight-cta"
                href={omShantiFeature.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Enter the Directory &rarr;
              </a>
              <p className="spotlight-microcopy">Free to begin &middot; Self-led &middot; Always available</p>
            </div>
          </section>
        )}

        <nav className="jump-nav" aria-label="Section navigation">
          {groupedLinks.map((group) => (
            <a key={group.id} href={`#${group.id}`}>
              {group.eyebrow}
            </a>
          ))}
        </nav>

        {groupedLinks.map((group) => {
          const links =
            group.id === 'featured'
              ? group.links.filter((item) => item.title !== 'Om Shanti Directory')
              : group.links;

          return (
            <section key={group.id} className="section" id={group.id}>
              <div className="section-head">
                <p className="eyebrow">{group.eyebrow}</p>
                <h2>{group.heading}</h2>
              </div>
              <p className="group-blurb">{group.blurb}</p>
              {group.id === 'commerce' && (
                <div className="shop-grid">
                  {shopifyStores.map((store) => (
                    <a
                      key={store.title}
                      className="shop-card"
                      href={store.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="card-label">Shopify Store</p>
                      {store.logoSrc ? (
                        <img className="shop-card-logo" src={store.logoSrc} alt={`${store.title} logo`} />
                      ) : (
                        <span className="shop-card-wordmark">{store.title}</span>
                      )}
                      <h3>{store.title}</h3>
                      <p>{store.detail}</p>
                      <span className="shop-card-cta">Shop Now</span>
                    </a>
                  ))}
                </div>
              )}
              <div className="card-grid card-grid-directory">
                {links.map((item) => (
                  <article key={item.title} className="link-card">
                    {item.label && <p className="card-label">{item.label}</p>}
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      {getCtaText(item)}
                    </a>
                  </article>
                ))}
              </div>
            </section>
          );
        })}

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
