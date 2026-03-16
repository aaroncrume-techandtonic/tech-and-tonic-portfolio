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
  const tiktokIsLive = process.env.NEXT_PUBLIC_TIKTOK_IS_LIVE === "true";
  const tiktokLiveUrl = process.env.NEXT_PUBLIC_TIKTOK_LIVE_URL;

  return (
    <section className="max-w-5xl mx-auto px-6 py-6">
      <div className="section-divider mb-3">
        <p className="eyebrow">Social</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {socialProfiles.map((profile) => {
          const isTikTok = profile.id === "tiktok";
          const isLive = isTikTok && tiktokIsLive;
          const ctaHref = isLive && tiktokLiveUrl ? tiktokLiveUrl : profile.href;
          const ctaLabel = isLive ? "Watch Live" : `Open ${profile.label}`;

          return (
            <article
              key={profile.id}
              className="section-shell rounded-sm px-5 py-5 md:px-6 md:py-6"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
                  {profile.label}
                </p>
                {isLive && (
                  <span className="inline-flex items-center gap-2 rounded-full border border-[#9e312c] bg-[#3a0e0c] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#ffd7d4]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#ff6e66] animate-pulse" />
                    Live Now
                  </span>
                )}
              </div>
              <h3 className="text-2xl font-semibold text-[#201c18]">{profile.handle}</h3>
              <p className="mt-3 text-sm text-[#4a433b]">{profile.description}</p>
              <div className="mt-5 flex items-center justify-between gap-4 border-t border-[var(--border)] pt-4">
                <span className="text-xs uppercase tracking-[0.18em] text-[#7a6b5a]">
                  {isLive ? "Streaming" : "Public profile"}
                </span>
                <a
                  href={ctaHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center border border-[#7f705f] bg-[#2c251f] px-4 py-2 text-xs font-medium uppercase tracking-wide text-[#f5eee4] hover:bg-[#3a3028]"
                >
                  {ctaLabel}
                </a>
              </div>
            </article>
          );
        })}
      </div>

      <article className="section-shell mt-4 rounded-sm px-5 py-5 md:px-6 md:py-6">
        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--accent)]">
            Spotify
          </p>
          <span className="text-xs uppercase tracking-[0.18em] text-[#7a6b5a]">
            Album Pick
          </span>
        </div>
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
      </article>
    </section>
  );
}