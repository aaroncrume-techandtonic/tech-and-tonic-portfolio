"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

type AdSenseUnitProps = {
  adSlot: string;
  adFormat?: "auto" | "rectangle" | "vertical" | "horizontal";
  className?: string;
};

export default function AdSenseUnit({
  adSlot,
  adFormat = "auto",
  className,
}: AdSenseUnitProps) {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch {
      // Ignore duplicate init errors from route transitions or hydration timing.
    }
  }, []);

  return (
    <ins
      className={`adsbygoogle block ${className ?? ""}`.trim()}
      style={{ display: "block" }}
      data-ad-client="ca-pub-9930861891048427"
      data-ad-slot={adSlot}
      data-ad-format={adFormat}
      data-full-width-responsive="true"
    />
  );
}
