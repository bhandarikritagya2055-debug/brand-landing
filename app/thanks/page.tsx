import ThanksClient from "./ThanksClient";

// Existing video embed — swap here if needed.
const VIMEO_EMBED_URL = "https://player.vimeo.com/video/1198966045";

export const metadata = {
  title: "You're in — Kritagya Bhandari",
  description: "Your free strategy is on its way. Just 3 quick steps left.",
  // Keep this funnel page out of search engines.
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return <ThanksClient videoUrl={VIMEO_EMBED_URL} />;
}
