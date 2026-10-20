import type { Metadata } from "next";
import LegalPage, { type LegalSection } from "@/components/LegalPage";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use — Dreamline Labs",
  description: "The terms that apply when you use the Dreamline Labs website.",
};

const sections: LegalSection[] = [
  {
    h: "Acceptance of these terms",
    p: [
      `By using this website, you agree to these terms. If you do not agree, please do not use the site. These terms apply to the ${SITE.name} website and the pages on it.`,
    ],
  },
  {
    h: "About this website",
    p: [
      "This website gives information about our marketing services for aesthetic and med-spa clinics and lets you book a call with us. It is for general information only and is not advice for your specific business. Nothing on it is medical, legal or regulatory advice.",
    ],
  },
  {
    h: "Examples, illustrations and results",
    p: [
      "The example screens on this website, such as the sample messages, calendar and weekly report, are illustrations of how our system looks. The names and numbers in them are made up and are not client results.",
      "Figures about our experience, such as years of work, ad spend managed and appointments generated, describe our past work across different industries. They are not a promise of what a particular clinic will achieve. Your results depend on many things, including your treatments, pricing, location, competition, ad budget, booking process and how quickly your team follows up on leads.",
      "The only guarantee we offer is the one set out in our Guarantee Terms, which applies to qualifying clinics on agreed numbers. Apart from that, we do not guarantee any specific number of leads, patients, revenue or return on ad spend.",
    ],
  },
  {
    h: "Booking a call",
    p: [
      "Booking a call is free and carries no obligation to buy anything. Our calls are for aesthetic and med-spa clinics. We may decline to offer services where we do not think we are the right fit.",
      "Any paid work with us, including the agreed number and the guarantee that applies to it, is governed by a separate written agreement between you and us. Nothing on this website is an offer that you can accept to create a contract.",
    ],
  },
  {
    h: "Your responsibilities as a clinic",
    p: [
      "If you work with us, you stay responsible for your clinical decisions, your treatments and your patients. You are also responsible for making sure your services, claims and advertising follow the laws, professional rules and advertising-platform policies that apply where you operate. These rules differ by country, and some treatments cannot be advertised to the public in some places.",
    ],
  },
  {
    h: "Using the site",
    p: ["You agree not to:"],
    ul: [
      "Use the site in a way that is unlawful, misleading or harmful",
      "Try to gain unauthorised access to the site, our systems or other users' data",
      "Copy, scrape or reuse our content, illustrations or branding without our written permission",
      "Submit false information when booking a call",
    ],
  },
  {
    h: "Intellectual property",
    p: [
      `All content on this website, including text, design, logos, graphics and layouts, belongs to ${SITE.name} or its licensors and is protected by law. You may view and share links to the site for personal, non-commercial use, but you may not otherwise copy or reuse it without our written permission.`,
    ],
  },
  {
    h: "Third-party services and links",
    p: [
      "Our website uses third-party services, such as a scheduling tool and a video host, and may link to other websites. We are not responsible for their content, availability or practices, and your use of them is subject to their own terms.",
    ],
  },
  {
    h: "Disclaimer",
    p: [
      "The website and its content are provided \"as is\" and \"as available\". To the fullest extent the law allows, we do not give any warranty that the site will be uninterrupted, error-free or free of harmful components, or that the information on it is complete or up to date.",
    ],
  },
  {
    h: "Limitation of liability",
    p: [
      "To the fullest extent the law allows, we are not liable for any indirect, incidental or consequential loss, or for loss of profit, revenue or data, arising from your use of, or inability to use, this website or from relying on its content. Nothing in these terms limits liability that cannot be limited by law.",
    ],
  },
  {
    h: "Privacy",
    p: [
      "How we handle your personal information is explained in our Privacy Policy, which forms part of these terms.",
    ],
  },
  {
    h: "Changes to these terms",
    p: [
      "We may change these terms from time to time. The updated version will apply from the date shown at the top of this page. By continuing to use the site, you accept the updated terms.",
    ],
  },
  {
    h: "Governing law",
    p: [
      `These terms are governed by the laws of India. Any dispute arising from them will be subject to the exclusive jurisdiction of the courts at ${SITE.address.replace(", India", "")}, India.`,
    ],
  },
  {
    h: "Contact us",
    p: [`If you have questions about these terms, contact us at ${SITE.email} or ${SITE.phone}.`],
  },
];

export default function Terms() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="Please read these terms before using our website. They explain the rules for using the site and the limits of what it offers."
      sections={sections}
    />
  );
}
