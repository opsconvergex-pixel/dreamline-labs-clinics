import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import "./clinic.css";

const GTM_ID = "GTM-NWWGKQ3Q";

export const metadata: Metadata = {
  title: "Dreamline Labs — Patient Flow System for Aesthetic & Med-Spa Clinics",
  description:
    "A done-for-you system that gets treatment-ready patient appointments into your clinic every month. We run your ads, reply to every lead within minutes, get them booked and track every patient to revenue.",
  openGraph: {
    title: "Dreamline Labs — Patient Flow System for Aesthetic & Med-Spa Clinics",
    description:
      "Get 75–100 treatment-ready patient appointments every month, or you don't pay.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f7f9fd",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
