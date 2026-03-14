"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

export default function InstagramReelEmbed() {
  const blockquoteRef = useRef<HTMLElement | null>(null);
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }

    // If Instagram is blocked by privacy tools, show a direct link fallback.
    const start = Date.now();
    const interval = window.setInterval(() => {
      const hasRenderedIframe = Boolean(blockquoteRef.current?.querySelector("iframe"));
      if (hasRenderedIframe) {
        setShowFallback(false);
        window.clearInterval(interval);
        return;
      }

      if (Date.now() - start > 5000) {
        setShowFallback(true);
        window.clearInterval(interval);
      }
    }, 400);

    return () => {
      window.clearInterval(interval);
    };
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-3">
      <div className="md:ml-auto w-full max-w-[280px] opacity-90">
        <p className="mb-2 text-xs uppercase tracking-[0.2em] text-[#7a6b5a]">For fun</p>
        <blockquote
          ref={blockquoteRef}
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink="https://www.instagram.com/reel/DUEPxsrCCL4/?utm_source=ig_embed&amp;utm_campaign=loading"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: "1px solid #c8c0b2",
            borderRadius: "2px",
            boxShadow: "none",
            margin: "0 0 0 auto",
            maxWidth: "280px",
            minWidth: "180px",
            padding: 0,
            width: "100%",
          }}
        >
          <a
            href="https://www.instagram.com/reel/DUEPxsrCCL4/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
            rel="noreferrer"
          >
            View this post on Instagram
          </a>
        </blockquote>
      </div>
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds?.process?.()}
      />
      {showFallback && (
        <p className="mt-3 text-right text-xs text-[#5a534b]">
          Embed unavailable in this browser. Watch it on Instagram{" "}
          <a
            href="https://www.instagram.com/reel/DUEPxsrCCL4/?utm_source=ig_embed&amp;utm_campaign=loading"
            target="_blank"
            rel="noreferrer"
            className="text-[var(--accent)] underline hover:text-[var(--accent-strong)]"
          >
            here
          </a>
          .
        </p>
      )}
    </section>
  );
}
