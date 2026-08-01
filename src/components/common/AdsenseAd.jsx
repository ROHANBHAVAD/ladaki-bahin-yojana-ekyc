import { useEffect } from "react";

export default function AdsenseAd({
  slot,
  className = "",
  style = {},
  format = "auto",
  responsive = "true",
}) {
  const publisherId = import.meta.env.VITE_ADSENSE_PUBLISHER_ID;

  useEffect(() => {
    if (!publisherId || !slot) {
      return;
    }

    if (!document.getElementById("adsbygoogle-js")) {
      const script = document.createElement("script");
      script.id = "adsbygoogle-js";
      script.async = true;
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${publisherId}`;
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);
    }

    if (!window.adsbygoogle) {
      window.adsbygoogle = [];
    }

    const timer = window.setTimeout(() => {
      try {
        window.adsbygoogle.push({});
      } catch (error) {
        console.error("AdSense initialization failed", error);
      }
    }, 250);

    return () => window.clearTimeout(timer);
  }, [publisherId, slot]);

  if (!publisherId || !slot) {
    return null;
  }

  return (
    <ins
      className={`adsbygoogle ${className}`.trim()}
      style={{ display: "block", ...style }}
      data-ad-client={publisherId}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
}
