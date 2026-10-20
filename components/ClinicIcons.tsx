import type { ReactNode } from "react";

const paths: Record<string, ReactNode> = {
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  calendar: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </>
  ),
  calendarX: (
    <>
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" />
      <path d="M8 3v4M16 3v4M3.5 10h17M9.5 14.5l5 3.5M14.5 14.5l-5 3.5" />
    </>
  ),
  chart: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />,
  funnel: <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />,
  target: (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.2" />
    </>
  ),
  page: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  chat: (
    <>
      <path d="M4 5.5h16a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 3.5V17.5H4A1.5 1.5 0 0 1 2.5 16V7A1.5 1.5 0 0 1 4 5.5Z" />
      <path d="M7 10h10M7 13.5h6" />
    </>
  ),
  bell: (
    <>
      <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15L6 16.5Z" />
      <path d="M10 20.5a2 2 0 0 0 4 0" />
    </>
  ),
  report: (
    <>
      <rect x="4" y="3.5" width="16" height="17" rx="2.5" />
      <path d="M8 16v-3M12 16V9M16 16v-5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M4 10v4l11 4.5V5.5L4 10Z" />
      <path d="M7 14.5l1.2 4.5h2.6l-1.3-4.7M19 9.5a4 4 0 0 1 0 5" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8.5" r="3.2" />
      <path d="M3.5 19.5a5.5 5.5 0 0 1 11 0M16 5.5a3.2 3.2 0 0 1 0 6M17.5 14.5a5.5 5.5 0 0 1 3 5" />
    </>
  ),
  star: <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.9L12 16.9l-5.2 2.8 1-5.9L3.5 9.7l5.9-.8L12 3.5Z" />,
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.5-3 8-7.5 9.5-4.5-1.5-7.5-5-7.5-9.5V6L12 3Z" />
      <path d="M8.8 12l2.3 2.3 4.2-4.6" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 12.3l2.8 2.8L16.2 9.5" />
    </>
  ),
  rocket: (
    <>
      <path d="M12 3c3.5 1.5 5.5 5 5.5 9l-2.5 3h-6L6.5 12c0-4 2-7.5 5.5-9Z" />
      <circle cx="12" cy="9.5" r="1.6" />
      <path d="M9 15l-2.5 3.5M15 15l2.5 3.5M12 15v4.5" />
    </>
  ),
  gift: (
    <>
      <rect x="3.5" y="9" width="17" height="11" rx="2" />
      <path d="M3.5 12.5h17M12 9v11M12 9c-1-3.5-5-3.5-5-1.2C7 9 9 9 12 9Zm0 0c1-3.5 5-3.5 5-1.2C17 9 15 9 12 9Z" />
    </>
  ),
  phone: (
    <>
      <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
      <path d="M11 18.5h2" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
    </>
  ),
  refresh: (
    <>
      <path d="M4 12a8 8 0 0 1 13.7-5.6L20 8.5M20 4v4.5h-4.5M20 12a8 8 0 0 1-13.7 5.6L4 15.5M4 20v-4.5h4.5" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6.5-5.5 6.5-11A6.5 6.5 0 0 0 5.5 10c0 5.5 6.5 11 6.5 11Z" />
      <circle cx="12" cy="10" r="2.3" />
    </>
  ),
};

export type IconName = keyof typeof paths;

export default function ClinicIcon({ name, size = 26 }: { name: IconName; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {paths[name]}
    </svg>
  );
}
