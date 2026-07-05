import ThanksClient from "./ThanksClient";

export const metadata = {
  title: "You're in — Kritagya Bhandari",
  description: "Your free strategy is on its way. Here's exactly what happens next.",
  // Keep this funnel page out of search engines.
  robots: { index: false, follow: false },
};

export default function ThanksPage() {
  return <ThanksClient />;
}
