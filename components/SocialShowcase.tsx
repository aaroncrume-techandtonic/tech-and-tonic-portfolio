const socialProfiles = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@iamongtheliving",
    href: "https://www.instagram.com/iamongtheliving/",
    description: "Personal updates, visuals, and the most current posts from my Instagram.",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@krazies",
    href: "https://www.tiktok.com/@krazies",
    description: "Short-form videos, ideas, and the latest uploads from my TikTok account.",
  },
];

export default function SocialShowcase() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-6">
      <div className="section-divider mb-3">
        <p className="eyebrow">Social</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {socialProfiles.map((profile) => (
          <article
            key={profile.id}
            className="section-shell rounded-sm px-5 py-5 md:px-6 md:py-6"
          >
            <p className="mb-2 text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
              {profile.label}
            </p>
            <h3 className="text-2xl font-semibold text-[#201c18]">{profile.handle}</h3>
            <p className="mt-3 text-sm text-[#4a433b]">{profile.description}</p>
            <div className="mt-5 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
              <span className="text-xs uppercase tracking-[0.18em] text-[#7a6b5a]">
                Public profile
              </span>
              <a
                href={profile.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center border border-[#7f705f] bg-[#2c251f] px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#f5eee4] hover:bg-[#3a3028]"
              >
                Open {profile.label}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}