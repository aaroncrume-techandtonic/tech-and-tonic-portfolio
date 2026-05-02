// src/components/AboutSection.jsx
export default function AboutSection() {
  return (
    <section id="about" className="py-8">
      <div className="max-w-5xl mx-auto px-6">
        <div className="section-shell rounded-sm px-6 py-7 md:px-8 md:py-8">
          <div className="section-divider mb-3">
            <p className="eyebrow">Background</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-[#201c18]">About Me</h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 space-y-3 text-base md:text-lg text-[#4a433b]">
            <p>
              I am a web developer who builds clean, functional, and high-performing digital solutions. With an A.S. in Computer Information Systems from the College of the Redwoods, my technical foundation is paired with a deep understanding of practical business needs.
            </p>
            <p>
              Before focusing entirely on software and e-commerce, I spent over two decades navigating high-volume, fast-paced environments, including roles as a Bar Lead and Supervisor through 2016. 
            </p>
            <p>
              That background gave me a unique perspective on web development. I don&apos;t just look at the code; I look at the operational efficiency, the user experience, and how an application actually serves the business. Whether I am building a custom storefront for Tech & Tonic or an interactive educational tool, my goal is to deliver software that solves real problems without the clutter.
            </p>
            <p>
              Rooted deeply in the coastal landscapes of Northern California, my professional and personal endeavors are driven by a profound commitment to this region&apos;s future and its past. Much like crafting a perfectly balanced cocktail, sustaining a community requires the right mix of ingredients. Through my work leading digital transformation projects for the local hospitality and tourism sector, I aim to serve up modern, forward-looking technical solutions for rural businesses. Yet, this push for progression is intrinsically balanced by a fierce dedication to preservation. Whether advocating for the conservation of the Klamath River watershed, honoring local history, or helping sustain the unique character of our towns from Crescent City to Smith River, I believe true development builds the future while fiercely protecting the natural environments that make our home irreplaceable. After all, if we don&apos;t preserve the local watershed, what are we going to use to make the ice?
            </p>
            </div>
          
            <div className="flex-1 bg-[var(--surface-strong)] p-6 border border-[var(--border)] rounded-sm relative overflow-hidden">
              <div className="absolute inset-y-0 left-0 w-1 bg-[var(--accent)]/55" />
              <h3 className="text-lg font-semibold mb-3 text-[#201c18] uppercase tracking-wide">Core Focus</h3>
              <ul className="space-y-2 text-[#3f3830]">
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">+</span> Next.js & React Ecosystems
              </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">+</span> E-Commerce Architecture
              </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">+</span> API Integration & Routing
              </li>
                <li className="flex items-center gap-2">
                  <span className="text-[var(--accent)] font-bold">+</span> UI/UX Design Implementation
              </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}