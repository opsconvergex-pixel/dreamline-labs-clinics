import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy — Dreamline Labs",
  description: "How Dreamline Labs collects, uses and protects your personal information.",
};

const sections: LegalSection[] = [
  {
    h: "Who we are",
    p: [
      `${SITE.name} ("we", "us", "our") is a marketing business that helps aesthetic and med-spa clinics get more patients. We are based in ${SITE.address}. This policy explains how we handle personal information when you visit our website, book a call with us, or contact us.`,
      `You can reach us at ${SITE.email} or ${SITE.phone}.`,
    ],
  },
  {
    h: "Information we collect",
    p: ["We collect the following kinds of information:"],
    ul: [
      "Information you give us: when you book a call through our scheduling tool, we receive details such as your name, email address, phone number, clinic name or website and anything else you choose to add. We also receive the information you send when you email or call us.",
      "Information collected automatically: when you visit our website, we and our service providers may collect technical information such as your IP address, device and browser type, pages viewed, time spent and the website you came from. This uses cookies and similar technologies.",
      "Embedded third-party content: our pages include a booking calendar and videos hosted by third parties. These providers may collect information directly from your browser when you use them.",
      "WhatsApp messages: if you message us on WhatsApp, we receive your phone number, your name as shown on WhatsApp and the content of your messages. WhatsApp's own terms and privacy policy apply to how it handles those chats.",
    ],
  },
  {
    h: "Please do not send us patient information",
    p: [
      "Our website, WhatsApp number and email are for business enquiries only. Please do not send us the names, health details or records of your patients. If a patient's information is ever needed for our work, it will be handled under a separate written agreement with you and the safeguards that apply to it.",
    ],
  },
  {
    h: "How we use your information",
    ul: [
      "To schedule and run the calls you book, and to follow up with you about them",
      "To decide whether your clinic is a good fit for our services, including by looking at the business information you share",
      "To respond to your messages and enquiries",
      "To understand how our website is used and to improve it",
      "To measure the performance of our own advertising",
      "To meet legal and regulatory obligations",
    ],
  },
  {
    h: "Cookies, tags and analytics",
    p: [
      "We use Google Tag Manager to load analytics and advertising tags on our website. Depending on how those tags are configured, they may set cookies or collect data about how you use the site, such as the pages you view and whether you book a call.",
      "You can block or delete cookies in your browser settings, or use the opt-out controls offered by the relevant advertising and analytics providers. Blocking cookies may affect how some parts of the site work.",
    ],
  },
  {
    h: "Who we share information with",
    p: [
      "We do not sell your personal information. We share it only with service providers who help us run our website and business, and only as needed for them to do so. These include:",
    ],
    ul: [
      "Our website hosting provider (Vercel)",
      "Our scheduling tool (Cal.id), which handles your booking details",
      "Our video host (Vimeo), for embedded videos",
      "Analytics and advertising platforms loaded through Google Tag Manager",
      "Professional advisers, and authorities where the law requires us to disclose information",
    ],
  },
  {
    h: "International transfers",
    p: [
      "Some of our service providers store or process information outside India, and we work with clinics in several countries. Where this happens, we take reasonable steps to make sure your information stays protected.",
    ],
  },
  {
    h: "How long we keep information",
    p: [
      "We keep personal information only for as long as we need it for the purposes above, including to follow up on a booked call, or as required by law. After that, we delete it or anonymise it.",
    ],
  },
  {
    h: "How we protect information",
    p: [
      "We use reasonable technical and organisational measures to protect personal information, including encrypted connections (HTTPS) on our website. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.",
    ],
  },
  {
    h: "Your rights",
    p: [
      "We handle personal data in line with applicable Indian law, including the Digital Personal Data Protection Act, 2023. Depending on where you live, other laws may give you additional rights, and we will honour them where they apply. Subject to the law, you may:",
    ],
    ul: [
      "Ask us what personal information we hold about you",
      "Ask us to correct or update information that is wrong or incomplete",
      "Ask us to delete your information",
      "Withdraw consent you have given us, where we rely on your consent",
      "Raise a complaint or grievance with us",
    ],
  },
  {
    h: "Children",
    p: [
      "Our website and services are intended for clinics and their owners and managers. They are not directed at anyone under 18, and we do not knowingly collect information from children.",
    ],
  },
  {
    h: "Links to other websites",
    p: [
      "Our website may link to other websites. We are not responsible for how those sites handle your information, so please read their policies.",
    ],
  },
  {
    h: "Changes to this policy",
    p: [
      "We may update this policy from time to time. The date at the top shows when it was last changed. If we make important changes, we will make that clear on this page.",
    ],
  },
  {
    h: "Contact and grievances",
    p: [
      `For any question about this policy, or to exercise your rights, write to us at ${SITE.email} or call ${SITE.phone}. Our address is ${SITE.address}.`,
    ],
  },
];

export default function Privacy() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="Your privacy matters to us. This policy is written in plain language so you can see what we collect, why we collect it and what choices you have."
      sections={sections}
    />
  );
}
