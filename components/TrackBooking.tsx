"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const KEY = "dl_booking_tracked";

/** Pushes a `booking_completed` event to the GTM data layer, once per browser session. */
export default function TrackBooking() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(KEY)) return;
      sessionStorage.setItem(KEY, "1");
    } catch {
      // Storage blocked: fall through and fire anyway.
    }
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "booking_completed",
      booking_type: "clinic_growth_call",
    });
  }, []);

  return null;
}
