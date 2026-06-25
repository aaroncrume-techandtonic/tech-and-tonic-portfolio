"use client";

import { useEffect, useState } from "react";

type TopNavProps = {
  storefrontUrl: string;
};

type SectionId = "home" | "projects" | "about";

const navItemBase =
  "inline-flex items-center rounded-full px-3 py-1.5 text-xs sm:text-sm border transition-colors";

export default function TopNav({ storefrontUrl }: TopNavProps) {
  const [activeSection, setActiveSection] = useState<SectionId>("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const projectSection = document.getElementById("projects");
    const aboutSection = document.getElementById("about");

    if (!projectSection || !aboutSection) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections.length > 0) {
          const currentId = visibleSections[0].target.id as SectionId;
          setActiveSection(currentId);
          return;
        }

        const projectsTop = projectSection.getBoundingClientRect().top;
        if (projectsTop > 240) {
          setActiveSection("home");
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-20% 0px -55% 0px",
      }
    );

    observer.observe(projectSection);
    observer.observe(aboutSection);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(5,8,20,0.72)] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex flex-wrap items-center justify-between gap-2 sm:gap-3">
        <a
          href="#top"
          aria-current={activeSection === "home" ? "page" : undefined}
          className={`text-xs sm:text-sm uppercase tracking-[0.18em] font-medium rounded-full px-3 py-1 transition-colors ${
            activeSection === "home" ? "text-[#ebf8ff] bg-[#133264]" : "text-[#c7e4ff]"
          }`}
        >
          Tech and Tonic Main Site
        </a>

        <button
          type="button"
          className="sm:hidden inline-flex items-center rounded-full px-3 py-1.5 text-xs border border-[var(--border)] text-[#d6ecff] hover:bg-[#122858]"
          aria-controls="mobile-section-nav"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav className="hidden sm:flex flex-wrap items-center gap-2 sm:gap-3" aria-label="Section navigation">
          <a
            href="#projects"
            aria-current={activeSection === "projects" ? "location" : undefined}
            className={`${navItemBase} ${
              activeSection === "projects"
                ? "border-[#56baff] bg-[#133264] text-[#ebf8ff]"
                : "border-[var(--border)] text-[#d6ecff] hover:bg-[#122858]"
            }`}
          >
            Projects
          </a>
          <a
            href="#about"
            aria-current={activeSection === "about" ? "location" : undefined}
            className={`${navItemBase} ${
              activeSection === "about"
                ? "border-[#56baff] bg-[#133264] text-[#ebf8ff]"
                : "border-[var(--border)] text-[#d6ecff] hover:bg-[#122858]"
            }`}
          >
            About
          </a>
          <a
            href={storefrontUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-3 py-1.5 text-xs sm:text-sm font-semibold bg-[var(--accent)] text-[#001017] hover:bg-[var(--accent-2)]"
          >
            Storefront
          </a>
        </nav>

        {menuOpen && (
          <nav
            id="mobile-section-nav"
            className="w-full sm:hidden mt-1 rounded-2xl border border-[var(--border)] bg-[rgba(7,16,37,0.9)] p-3 flex flex-col gap-2"
            aria-label="Mobile section navigation"
          >
            <a
              href="#projects"
              aria-current={activeSection === "projects" ? "location" : undefined}
              className={`${navItemBase} justify-center ${
                activeSection === "projects"
                  ? "border-[#56baff] bg-[#133264] text-[#ebf8ff]"
                  : "border-[var(--border)] text-[#d6ecff] hover:bg-[#122858]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#about"
              aria-current={activeSection === "about" ? "location" : undefined}
              className={`${navItemBase} justify-center ${
                activeSection === "about"
                  ? "border-[#56baff] bg-[#133264] text-[#ebf8ff]"
                  : "border-[var(--border)] text-[#d6ecff] hover:bg-[#122858]"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>
            <a
              href={storefrontUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full px-3 py-1.5 text-xs font-semibold bg-[var(--accent)] text-[#001017] hover:bg-[var(--accent-2)]"
              onClick={() => setMenuOpen(false)}
            >
              Storefront
            </a>
          </nav>
        )}
      </div>
    </section>
  );
}
