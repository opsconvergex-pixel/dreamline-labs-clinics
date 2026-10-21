import type { Metadata } from "next";
import BookingCalendar from "@/components/BookingCalendar";
import ClinicFooter from "@/components/ClinicFooter";
import ClinicHeader from "@/components/ClinicHeader";
import ClinicIcon from "@/components/ClinicIcons";
import { CalendarMock, ChatMock, ReportMock } from "@/components/ClinicMocks";
import StickyCta from "@/components/StickyCta";
import VslPlayer from "@/components/VslPlayer";
import {
  bonusIcons,
  bonuses,
  clinicFaqs,
  clinicFit,
  clinicNotFit,
  clinicSteps,
  conditions,
  founderNote,
  journey,
  leakIcons,
  leaks,
  NEXT_START,
  startSteps,
  stats,
  stepIcons,
  trustItems,
  VSL,
} from "@/lib/clinics";
import { SITE } from "@/lib/site";
const founderPhoto = "/founder.jpg";

export const metadata: Metadata = {
  title: "The Patient Flow System for Aesthetic & Med-Spa Clinics — Dreamline Labs",
  description:
    "A done-for-you system that gets 75–100 treatment-ready patient appointments into your clinic every month. We run your ads, reply to every lead within minutes, get them booked and track every patient to revenue. Or you don't pay.",
};

const CTA = "Book your free clinic growth call";

export default function Home() {
  return (
    <div className="cl">
      <ClinicHeader ctaHref="#book" />

      <main>
        {/* HERO */}
        <section className="cl-hero">
          <div className="cl-wrap cl-hero-stack">
            <p className="cl-callout">
              <ClinicIcon name="target" size={18} />
              For aesthetic and med-spa clinics
            </p>
            <h1 className="cl-h1">
              Get <em>75–100 Treatment-Ready Patient Appointments</em> Every Month — Or You Don't Pay
            </h1>
            <p className="cl-lead">
              If you're tired of depending on referrals, walk-ins, social media marketing, and inconsistent
              lead flow, we'll implement our <strong>Patient Flow System</strong> into your clinic. It is a
              100% done-for-you system where we run your ads, reply to every lead within minutes, get them
              booked, make sure they show up, and track every patient to revenue.
            </p>

            {VSL.embedUrl && (
              <div className="cl-vsl">
                <div className="cl-vsl-frame">
                  <VslPlayer src={VSL.embedUrl} title={VSL.title} />
                </div>
              </div>
            )}

            <div className="cl-cta" id="hero-cta">
              <a href="#book" className="cl-btn">
                {CTA} →
              </a>
              <p className="cl-micro">Free 30-minute call. We tell you honestly if we can deliver for your clinic.</p>
            </div>
            <ul className="cl-stats" aria-label="Track record">
              {stats.map((s) => (
                <li key={s.l}>
                  <strong>{s.n}</strong>
                  <span>{s.l}</span>
                  {s.sub && <small>({s.sub})</small>}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section className="cl-trust" aria-label="What you get">
          <div className="cl-wrap cl-trust-grid">
            {trustItems.map((t) => (
              <div className="cl-trust-item" key={t.title}>
                <span className="cl-ico cl-ico-sm">
                  <ClinicIcon name={t.icon} size={22} />
                </span>
                <div>
                  <strong>{t.title}</strong>
                  <span>{t.body}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* LEAKS */}
        <section className="cl-sec">
          <div className="cl-wrap">
            <div className="cl-head-block">
              <p className="cl-kicker">Where new patients slip away</p>
              <h2 className="cl-h2">
                Most clinics don't have a leads problem. They have a leak between the click and the chair.
              </h2>
            </div>
            <div className="cl-grid cl-grid-4">
              {leaks.map((l, i) => (
                <div className="cl-card" key={l.title}>
                  <span className="cl-ico">
                    <ClinicIcon name={leakIcons[i]} />
                  </span>
                  <h3>{l.title}</h3>
                  <p>{l.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SYSTEM */}
        <section className="cl-sec cl-sand" id="system">
          <div className="cl-wrap">
            <div className="cl-head-block">
              <p className="cl-kicker">The Patient Flow System</p>
              <h2 className="cl-h2">One system from first click to a patient in your chair.</h2>
              <p className="cl-sub">We build it, run it and fix it. Your team just takes the appointments.</p>
            </div>
            <ol className="cl-journey" aria-label="The patient journey">
              {journey.map((j) => (
                <li key={j.label}>
                  <span className="cl-ico cl-ico-round">
                    <ClinicIcon name={j.icon} size={24} />
                  </span>
                  <b>{j.label}</b>
                </li>
              ))}
            </ol>
            <div className="cl-grid cl-grid-3">
              {clinicSteps.map((s, i) => (
                <div className="cl-card cl-step" key={s.n}>
                  <span className="cl-ico">
                    <ClinicIcon name={stepIcons[i]} />
                  </span>
                  <span className="cl-num">Step {s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEE IT */}
        <section className="cl-sec">
          <div className="cl-wrap">
            <div className="cl-head-block">
              <p className="cl-kicker">See how it looks</p>
              <h2 className="cl-h2">What your clinic sees once the system is running.</h2>
              <p className="cl-sub">Illustrations of the system. Names and numbers are examples.</p>
            </div>
            <div className="cl-grid cl-grid-3 cl-mocks">
              <ChatMock />
              <CalendarMock />
              <ReportMock />
            </div>
          </div>
        </section>

        {/* GUARANTEE */}
        <section className="cl-sec" id="guarantee">
          <div className="cl-wrap">
            <div className="cl-guarantee">
              <div className="cl-g-main">
                <p className="cl-kicker cl-kicker-light">The guarantee</p>
                <h2 className="cl-h2 cl-h2-light">
                  We agree your number in writing. If we miss it, we keep working for free.
                </h2>
                <p>
                  We agree your number of attended, treatment-ready patient appointments in writing, based on
                  your ad budget, treatments and area. If we haven't delivered it by day 90, we keep managing
                  your campaigns at no charge until we do. You keep paying your ad spend directly to Google
                  and Meta.
                </p>
                <p className="cl-g-def">
                  An appointment counts when a new patient who fits your profile, and is ready for treatment,
                  books and attends.
                </p>
              </div>
              <div className="cl-g-side">
                <h3>What we need from you</h3>
                <ul>
                  {conditions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* BONUSES */}
        <section className="cl-sec cl-sand">
          <div className="cl-wrap">
            <div className="cl-head-block">
              <p className="cl-kicker">Included when you start</p>
              <h2 className="cl-h2">Four bonuses, so you see results sooner.</h2>
            </div>
            <div className="cl-grid cl-grid-2">
              {bonuses.map((b, i) => (
                <div className="cl-card cl-bonus" key={b.title}>
                  <span className="cl-ico">
                    <ClinicIcon name={bonusIcons[i]} />
                  </span>
                  <span className="cl-chip">Stand-alone value: {b.value}</span>
                  <h3>{b.title}</h3>
                  <p>{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAST START */}
        <section className="cl-sec">
          <div className="cl-wrap">
            <div className="cl-head-block">
              <p className="cl-kicker">A fast start</p>
              <h2 className="cl-h2">You'll see movement in your first two weeks.</h2>
            </div>
            <ol className="cl-timeline">
              {startSteps.map((s) => (
                <li key={s.title}>
                  <span className="cl-when">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* WHO YOU WORK WITH */}
        <section className="cl-sec cl-sand">
          <div className="cl-wrap">
            <div className="cl-founder">
              <img src={founderPhoto} alt="Nitesh Jaiswal, Founder of Dreamline Labs" loading="lazy" />
              <div>
                <p className="cl-kicker">Who you'll work with</p>
                <h2 className="cl-h2">Nitesh Jaiswal, Founder of Dreamline Labs</h2>
                <p className="cl-sub">{founderNote}</p>
                <p className="cl-sub">
                  The Patient Flow System is our first program built for aesthetic and med-spa clinics, so we
                  don't show clinic case studies yet and we won't make any up. You'll see every number in
                  your own weekly report.
                </p>
                <ul className="cl-founder-stats">
                  {stats.map((s) => (
                    <li key={s.l}>
                      <strong>{s.n}</strong>
                      <span>{s.l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FIT */}
        <section className="cl-sec">
          <div className="cl-wrap">
            <div className="cl-head-block">
              <p className="cl-kicker">Is this for you?</p>
              <h2 className="cl-h2">We're selective, because the guarantee only works for the right fit.</h2>
            </div>
            <div className="cl-grid cl-grid-2 cl-fit">
              <div className="cl-card cl-yes">
                <h3>A great fit if</h3>
                <ul>
                  {clinicFit.map((t) => (
                    <li key={t}>
                      <span aria-hidden>✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cl-card cl-no">
                <h3>Not a fit if</h3>
                <ul>
                  {clinicNotFit.map((t) => (
                    <li key={t}>
                      <span aria-hidden>×</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="cl-sec cl-sand" id="faq">
          <div className="cl-wrap cl-narrow">
            <div className="cl-head-block">
              <h2 className="cl-h2">Questions to ask before we talk.</h2>
            </div>
            <div className="cl-faq">
              {clinicFaqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* BOOK */}
        <section className="cl-sec cl-book" id="book">
          <div className="cl-wrap cl-narrow cl-center">
            <p className="cl-kicker">Your next step</p>
            <h2 className="cl-h2">Let's see if we can fill your calendar.</h2>
            <p className="cl-sub">
              On a free 30-minute call we'll look at your clinic's numbers and tell you plainly whether we can
              deliver. We take a limited number of new clinics each month, and only one clinic per area.
            </p>
            {NEXT_START && (
              <p className="cl-sub cl-strong">
                Next start date: {NEXT_START}. Clinics that start by then get the Win-Back Campaign included.
              </p>
            )}
          </div>
          <div className="cl-wrap cl-cal">
            <div className="cl-cal-card">
              <BookingCalendar
                calLink={SITE.clinicCalLink}
                note="Free, 30 minutes. For aesthetic and med-spa clinics."
              />
            </div>
          </div>
        </section>
      </main>

      <ClinicFooter />

      <StickyCta href="#book" label={CTA} />
    </div>
  );
}
