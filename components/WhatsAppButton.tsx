"use client";

import { SITE } from "@/lib/site";

const MESSAGE = "Hi Dreamline Labs, I'd like to know more about getting more patients for my clinic.";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export default function WhatsAppButton() {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(MESSAGE)}`;

  return (
    <a
      className="wa"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={() => {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "whatsapp_click" });
      }}
    >
      <span className="wa-label">Chat with us</span>
      <span className="wa-icon" aria-hidden>
        <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor">
          <path d="M16.003 3C8.83 3 3 8.83 3 16c0 2.293.6 4.53 1.74 6.5L3 29l6.68-1.72A12.94 12.94 0 0 0 16 29c7.17 0 13-5.83 13-13S23.17 3 16.003 3Zm0 23.72c-1.94 0-3.84-.52-5.5-1.5l-.4-.23-3.97 1.02 1.06-3.86-.26-.4A10.7 10.7 0 0 1 5.3 16c0-5.9 4.8-10.7 10.7-10.7S26.7 10.1 26.7 16s-4.8 10.72-10.7 10.72Zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.04-.3-.1-.5-.16-.72.16-.22.32-.84 1.04-1.03 1.26-.19.22-.38.24-.7.08-.32-.16-1.36-.5-2.58-1.6-.95-.85-1.6-1.9-1.78-2.22-.19-.32-.02-.5.14-.66.14-.14.32-.38.48-.56.16-.19.22-.32.32-.54.1-.22.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.62-.52-.54-.72-.55h-.62c-.22 0-.56.08-.86.4-.3.32-1.12 1.1-1.12 2.68 0 1.58 1.15 3.1 1.31 3.32.16.22 2.26 3.45 5.48 4.84.77.33 1.37.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.13-.3-.21-.62-.37Z" />
        </svg>
      </span>
    </a>
  );
}
