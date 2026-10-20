import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Guarantee Terms — Dreamline Labs",
  description:
    "The terms behind our guarantee: if we miss the agreed number of attended, treatment-ready patient appointments, we keep working until we deliver it.",
};

const sections: LegalSection[] = [
  {
    h: "What our guarantee is",
    p: [
      "Before the 90-day period starts, we agree with you, in writing, a number of attended, treatment-ready patient appointments. If we have not delivered that number by day 90, we keep managing your campaigns at no charge until we do.",
      "It is not a promise of any particular number of treatments sold, revenue or return on ad spend. It is a promise about how we work with you if the agreed number of appointments is missed.",
    ],
  },
  {
    h: "What counts as an appointment",
    p: [
      "An appointment counts when a new patient who fits the profile we agree with you, and who has shown real interest in a treatment, books an appointment and attends it. Bookings that do not show up, existing patients and duplicates do not count.",
    ],
  },
  {
    h: "Who it applies to",
    p: [
      "The guarantee is for qualifying aesthetic and med-spa clinics. To qualify, a clinic should be advertising or ready to invest in advertising at the monthly ad budget we agree, be willing to share its real booking and lead data, and have a team that can handle the appointments we generate. We check this on a free call, and we tell you honestly if we are not the right fit.",
      "We take one clinic per area, so we are not running ads for two clinics that compete for the same patients.",
    ],
  },
  {
    h: "How the number is set",
    p: [
      "The number depends on your monthly ad budget, your treatments and your area. We look at your first 30 days of real data and agree the exact number with you in writing at the end of that baseline. You know the number before you commit to the rest of the 90 days.",
    ],
  },
  {
    h: "How it is measured",
    p: [
      "We count appointments using your booking system and our tracking. An appointment is counted as attended when it is marked as attended in your booking system. We do not count platform-reported leads or clicks.",
    ],
  },
  {
    h: "What we need from you",
    ul: [
      "Run at least the monthly ad budget we agree for your clinic",
      "Give us prompt access to your ad accounts, booking system and lead data",
      "Follow up on the leads we hand over and mark what happens to them",
      "Keep tracking in place, and tell us before you change your treatments, offers or pricing",
      "Approve ads, pages and offers in good time",
    ],
    p: [
      "If these are not provided, the agreed number may need to be revisited, and the guarantee may not apply for the period affected.",
    ],
  },
  {
    h: "What \"at no charge\" means",
    p: [
      "While we are working towards a missed number, we do not charge our fees for that work. You still pay your own costs, including your advertising spend, paid directly to the ad platforms, and any third-party tools or services.",
      "Our fees start again in the month after the agreed number is reached. The fees themselves are set out in the written agreement.",
    ],
  },
  {
    h: "What is not covered",
    ul: [
      "Results affected by things outside our control, such as an ad account suspension caused by the clinic's own claims or content, a closure or staff shortage at the clinic, a change in the clinic's treatments or pricing made without us, or a booking system outage",
      "Numbers that were not agreed in writing",
      "Clinics that do not meet the qualifying criteria above",
      "Any clinical outcome or the quality of treatment, which remain the clinic's responsibility",
    ],
  },
  {
    h: "Changes",
    p: [
      "We may update these terms from time to time. The terms in your written agreement are the ones that apply to your work with us.",
    ],
  },
  {
    h: "Contact",
    p: [`If you have a question about the guarantee, contact us at ${SITE.email} or ${SITE.phone}.`],
  },
];

export default function GuaranteeTerms() {
  return (
    <LegalPage
      title="Guarantee Terms"
      intro="This page explains the guarantee we offer to qualifying clinics. The exact number and terms for your clinic are always agreed in writing before the 90-day period starts."
      sections={sections}
    />
  );
}
