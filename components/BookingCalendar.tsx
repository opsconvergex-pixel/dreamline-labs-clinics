"use client";

import Cal, { getCalApi } from "@calid/react-embed";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BookingCalendar({
  calLink = "dreamlinelabs/clinic-growth-call",
  note = "Free, 30 minutes. For aesthetic and med-spa clinics.",
  theme = "dark",
}: {
  calLink?: string;
  note?: string;
  theme?: "dark" | "light";
}) {
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({
        namespace: "default",
        embedLibUrl: "https://cal.id/embed-link/embed.js",
      });
      cal("ui", {
        theme,
        cssVarsPerTheme: {
          light: { "cal-brand": theme === "light" ? "#0f6b66" : "#007ee5" },
          dark: { "cal-brand": "#fafafa" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      // Send the visitor to the thank-you page once a call is booked.
      cal("on", {
        action: "bookingSuccessful",
        callback: () => router.push("/thank-you"),
      });
    })();
  }, [router, theme]);

  return (
    <div className="booking">
      <div className="cal-frame">
        <Cal
          namespace="default"
          calLink={calLink}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view", theme }}
          calOrigin="https://cal.id"
          embedJsUrl="https://cal.id/embed-link/embed.js"
        />
      </div>
      <p className="fine">{note}</p>
    </div>
  );
}
