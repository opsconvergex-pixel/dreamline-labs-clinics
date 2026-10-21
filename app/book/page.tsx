import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";
import ClinicFooter from "@/components/ClinicFooter";
import ClinicHeader from "@/components/ClinicHeader";
import ClinicIcon from "@/components/ClinicIcons";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book Your Free Clinic Growth Call — Dreamline Labs",
  description:
    "Book a free 30-minute call. We'll look at your clinic's numbers, find where new patients slip away, and tell you plainly whether we can deliver.",
};

const points = [
  { icon: "search", text: "Where new patients are slipping away today, and what it costs you" },
  { icon: "target", text: "What to fix first, and what to ignore" },
  { icon: "check", text: "A plain answer on whether we can deliver for your clinic" },
] as const;

export default function BookPage() {
  return (
    <div className="cl">
      <ClinicHeader ctaHref="#calendar" ctaLabel="Pick a time" />
      <main className="cl-bookpage">
        <div className="cl-wrap cl-bookgrid">
          <div className="cl-bookcopy">
            <p className="cl-callout">For aesthetic and med-spa clinics</p>
            <h1 className="cl-h1">Book your free clinic growth call</h1>
            <p className="cl-lead">
              A 30-minute call to look at your clinic's numbers, find the leaks between the click and the
              chair, and tell you plainly whether we can fill your calendar.
            </p>
            <ul className="cl-points">
              {points.map((p) => (
                <li key={p.text}>
                  <span className="cl-ico cl-ico-sm">
                    <ClinicIcon name={p.icon} size={20} />
                  </span>
                  {p.text}
                </li>
              ))}
            </ul>
            <p className="cl-micro">
              Prefer to talk first? Call <a href={SITE.phoneHref}>{SITE.phone}</a> or email{" "}
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
            </p>
          </div>
          <div className="cl-cal-card" id="calendar">
            <BookingCalendar
              calLink={SITE.clinicCalLink}
              note="Free, 30 minutes. For aesthetic and med-spa clinics."
            />
          </div>
        </div>
      </main>
      <ClinicFooter />
    </div>
  );
}
