/** Next onboarding start date shown on the page, e.g. "3 November". Leave empty to hide the line. */
export const NEXT_START = "";

/**
 * The VSL shown under the hero headline. Paste the video's embed URL (the iframe src from Vimeo,
 * Wistia, YouTube, etc.). Leave empty to hide the video.
 */
export const VSL = {
  embedUrl: "https://player.vimeo.com/video/1199425461?h=1d0d09e5f2",
  title: "Watch: how the Patient Flow System works",
};

export const stats = [
  { n: "₹20Cr+", sub: "over $2M", l: "Ad Spend Managed" },
  { n: "30,000+", sub: "", l: "Appointments Generated" },
  { n: "8+", sub: "", l: "Years Experience" },
];

export const leaks = [
  {
    title: "Leads wait, then go cold",
    body: "Someone asks about a treatment, and nobody replies for hours. By then they have booked with the next clinic.",
  },
  {
    title: "Bookings that never show up",
    body: "The calendar looks full on Monday and half empty by Friday. Every no-show is a treatment room sitting idle.",
  },
  {
    title: "Reports about clicks, not patients",
    body: "Your agency sends numbers about reach and cost per lead. Nobody can tell you how many new patients the ads brought in.",
  },
  {
    title: "Leads that never become appointments",
    body: "You pay for leads that are price-shoppers, wrong-area or not serious, and the good ones get lost on a slow booking process.",
  },
];

export const clinicSteps = [
  {
    n: "01",
    title: "Ads that find the right patients",
    body: "We run Google Search and Meta ads that reach people already looking for treatments in your area, with questions on the form that filter out tyre-kickers.",
  },
  {
    n: "02",
    title: "A page built to book",
    body: "A fast landing page with your reviews, provider bios and answers to the common questions, so people can book a consultation in two taps.",
  },
  {
    n: "03",
    title: "A reply within minutes, day and night",
    body: "Every new lead gets an instant text and call-back, even at 11pm on a Sunday. Your staff get an alert to pick up the conversation.",
  },
  {
    n: "04",
    title: "A system that gets them to show up",
    body: "Reminders, a short pre-visit message and an optional deposit. If someone cancels, the slot is offered to the next person.",
  },
  {
    n: "05",
    title: "Fresh ads that stay inside Meta's rules",
    body: "A monthly batch of ads built from your own content, checked against the platform's health and cosmetic ad rules before they go live.",
  },
  {
    n: "06",
    title: "A weekly report you can read in a minute",
    body: "Every lead tracked from first click to booked, attended and treated, so you always know what the ads are worth.",
  },
];

export const bonuses = [
  {
    title: "The Lead Leak Audit",
    body: "We check how fast and how well your clinic handles new leads today, and hand you a clear list of fixes.",
    value: "$750",
  },
  {
    title: "The Dormant Patient Win-Back Campaign",
    body: "A one-time campaign to bring back old leads and past patients who never booked again.",
    value: "$1,500",
  },
  {
    title: "The Consult-to-Treatment Playbook",
    body: "A script, answers to common objections, recorded training for your team and one live session.",
    value: "$1,000",
  },
  {
    title: "The Review Booster",
    body: "Automatic review requests after visits, so your reputation grows while you work.",
    value: "$500",
  },
];

export const startSteps = [
  {
    n: "Within 5 business days",
    title: "Lead Leak Audit delivered",
    body: "You see exactly where new patients leak out of your clinic today.",
  },
  {
    n: "Within 7 days",
    title: "Instant response system live",
    body: "Every lead gets a reply within minutes from this point on.",
  },
  {
    n: "Within 14 days",
    title: "First campaigns running",
    body: "Ads and your booking page go live. Day 30 is when we agree your number in writing.",
  },
];

export const conditions = [
  "You run at least the ad budget we agree for your clinic. The number grows with the budget.",
  "You give us access to your ad accounts, booking system and lead data.",
  "Your team follows up on the leads we hand over and marks what happens to them.",
  "Tracking stays in place, and you tell us before you change your offers or pricing.",
  "We agree your exact number in writing at the end of a 30-day baseline.",
];

export const clinicFit = [
  "You run an aesthetic or med-spa clinic",
  "You already advertise, or are ready to invest seriously in ads",
  "You want more new patients, not just more leads",
  "Your team can handle more consultations and will follow up fast",
];

export const clinicNotFit = [
  "You want results with no ad budget",
  "You can't share booking or lead data",
  "You want leads handed over with no follow-up from your team",
  "Another clinic near you already works with us",
];

export const clinicFaqs = [
  {
    q: "What counts as a treatment-ready patient appointment?",
    a: "A new patient who fits the profile we agree with you, has shown real interest in a treatment, books an appointment and attends it. Bookings that don't show up don't count towards your number.",
  },
  {
    q: "What happens if you miss the number?",
    a: "If we haven't delivered the agreed number of attended appointments by day 90, we keep managing your campaigns at no charge until we do. You keep paying your ad spend directly to Google and Meta. The full terms are agreed in writing before we start.",
  },
  {
    q: "How is my number decided?",
    a: "It depends on your ad budget, your treatments and your area. We look at your first 30 days of real data and agree the exact number in writing, so you know it before you commit to the rest of the 90 days.",
  },
  {
    q: "Who pays for the ads?",
    a: "You do, directly to Google and Meta, so you can see every dollar. Our fee is separate, and we go through it on the call.",
  },
  {
    q: "What does it cost?",
    a: "It depends on your clinic and your ad budget. We'll look at your numbers on the call and give you a clear quote, with no surprises later.",
  },
  {
    q: "How long is the agreement?",
    a: "The first 90 days. After that it moves month to month, so you stay because it's working.",
  },
  {
    q: "Do you work with competing clinics nearby?",
    a: "No. We take one clinic per area, so we're never running ads for two clinics competing for the same patients.",
  },
  {
    q: "Do you have clinic case studies?",
    a: "Not yet, and we won't invent any. This is our first program built for aesthetic and med-spa clinics. What we do have is a track record of running paid ads at scale for 30+ brands. We only take on clinics we believe we can deliver for, and we'll tell you honestly on the call if we can't.",
  },
];

export const stepIcons = ["target", "page", "chat", "bell", "megaphone", "report"] as const;
export const bonusIcons = ["search", "refresh", "users", "star"] as const;
export const leakIcons = ["clock", "calendarX", "chart", "funnel"] as const;

export const journey = [
  { icon: "megaphone", label: "Your ad" },
  { icon: "page", label: "Booking page" },
  { icon: "chat", label: "Instant reply" },
  { icon: "calendar", label: "Booked" },
  { icon: "check", label: "Shows up" },
  { icon: "report", label: "Tracked to revenue" },
] as const;

export const trustItems = [
  { icon: "shield", title: "100% done for you", body: "We build it, run it and fix it." },
  { icon: "clock", title: "Replies in minutes", body: "Every lead, day and night." },
  { icon: "map", title: "One clinic per area", body: "Never two competing clinics." },
  { icon: "rocket", title: "Live in 14 days", body: "Audit, response system, then ads." },
] as const;

export const founderNote =
  "Over 8 years in performance marketing, working inside agencies serving finance, travel, edtech and e-commerce, plus hands-on growth work with 30+ fashion brands. Every campaign is planned and watched by someone who has run paid ads at scale.";
