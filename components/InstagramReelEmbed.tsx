"use client";

import { useEffect } from "react";
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
  useEffect(() => {
    if (window.instgrm?.Embeds?.process) {
      window.instgrm.Embeds.process();
    }
  }, []);

  return (
    <section className="max-w-5xl mx-auto px-6 py-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-900 border-b pb-4">Latest Reel</h2>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/reel/DUEPxsrCCL4/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "3px",
          boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "1px auto",
          maxWidth: "540px",
          minWidth: "326px",
          padding: 0,
          width: "calc(100% - 2px)",
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
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds?.process?.()}
      />
    </section>
  );
}
