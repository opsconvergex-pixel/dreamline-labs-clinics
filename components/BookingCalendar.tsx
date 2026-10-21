"use client";

import Cal, { getCalApi } from "@calid/react-embed";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BookingCalendar({
  calLink = "dreamlinelabs/clinic-growth-call",
  note = "Free, 30 minutes. For aesthetic and med-spa clinics.",
}: {
  calLink?: string;
  note?: string;
}) {
  const router = useRouter();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: "default",
        embedLibUrl: "https://cal.id/embed-link/embed.js",
      });
      cal("ui", {
        cssVarsPerTheme: { light: { "cal-brand": "#007ee5" }, dark: { "cal-brand": "#fafafa" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
      // Send the visitor to the thank-you page once a call is booked (fires the conversion event).
      cal("on", {
        action: "bookingSuccessful",
        callback: () => router.push("/thank-you"),
      });
    })();
  }, [router]);

  return (
    <div className="booking">
      <div className="cal-frame">
        <Cal
          namespace="default"
          calLink={calLink}
          style={{ width: "100%", height: "100%", overflow: "scroll" }}
          config={{ layout: "month_view" }}
          calOrigin="https://cal.id"
          embedJsUrl="https://cal.id/embed-link/embed.js"
        />
      </div>
      <p className="fine">{note}</p>
    </div>
  );
}
