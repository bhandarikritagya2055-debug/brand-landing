// ─── Thank-you page ───────────────────────────────────────────────────────────
// Video URL is set in VIMEO_EMBED_URL below — easy to swap.
const VIMEO_EMBED_URL = "https://player.vimeo.com/video/1198966045";

const WHATSAPP_URL = "https://wa.me/9779704593561";
const CALENDLY_URL = "https://calendly.com/bhandarikritagya2055/30min";

import ThanksClient from "./ThanksClient";

export const metadata = {
  title: "Thank you — Kritagya Bhandari",
  description: "Your strategy is on its way. Watch the short video below.",
};

export default function ThanksPage() {
  return (
    <ThanksClient
      videoUrl={VIMEO_EMBED_URL}
      whatsappUrl={WHATSAPP_URL}
      calendlyUrl={CALENDLY_URL}
    />
  );
}
