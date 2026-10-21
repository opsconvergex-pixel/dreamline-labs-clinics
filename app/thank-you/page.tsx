import type { Metadata } from "next";
import ClinicFooter from "@/components/ClinicFooter";
import ClinicHeader from "@/components/ClinicHeader";
import ClinicIcon from "@/components/ClinicIcons";
import TrackBooking from "@/components/TrackBooking";

export const metadata: Metadata = {
  title: "Thank you — Dreamline Labs",
  description: "Your clinic growth call is booked. Here is what happens next.",
  robots: { index: false, follow: false },
};

const steps = [
  {
    icon: "bell",
    title: "Check your inbox",
    body: "A calendar invite is on its way to the email you booked with. Accept it so the time is saved.",
  },
  {
    icon: "report",
    title: "Get your numbers ready",
    body: "Rough numbers are enough. They help us get to the answer faster.",
  },
  {
    icon: "chat",
    title: "The 30-minute call",
    body: "We look at where new patients slip away, what to fix first, and give you a plain answer on whether we can deliver for your clinic.",
  },
] as const;

const ready = [
  "Your new-patient leads and booked appointments for the last 90 days",
  "Your monthly ad spend and where it goes (Meta, Google, other)",
  "Your show-up rate and average value of a new patient, if you know them",
  "Your top 3 treatments by revenue",
  "The booking or CRM system your clinic uses",
];

export default function ThankYou() {
  return (
    <div className="cl">
      <TrackBooking />
      <ClinicHeader ctaHref="/" ctaLabel="Back to home" />
      <main className="cl-ty">
        <section className="cl-wrap cl-narrow cl-center cl-ty-hero">
          <span className="cl-ty-tick" aria-hidden>
            <ClinicIcon name="check" size={34} />
          </span>
          <p className="cl-kicker">Call booked</p>
          <h1 className="cl-h1">Your clinic growth call is booked.</h1>
          <p className="cl-sub">You're all set. Here's exactly what happens next, so there are no surprises.</p>
        </section>

        <section className="cl-wrap">
          <div className="cl-grid cl-grid-3">
            {steps.map((s) => (
              <div className="cl-card" key={s.title}>
                <span className="cl-ico">
                  <ClinicIcon name={s.icon} />
                </span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cl-wrap cl-narrow cl-ty-ready">
          <div className="cl-card">
            <h3>Have these ready for the call</h3>
            <p>Rough numbers are fine. Don't share any patient names or health details with us.</p>
            <ul className="cl-ready-list">
              {ready.map((r) => (
                <li key={r}>
                  <ClinicIcon name="check" size={18} />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <ClinicFooter />
    </div>
  );
}
