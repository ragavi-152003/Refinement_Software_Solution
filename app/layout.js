import { Geist } from "next/font/google";
import "./globals.css";
import { hasCompanyMark } from "./site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://refinementsoftwaresolutions.com"),
  title: {
    default: "Refinement Software Solutions Pvt. Ltd.",
    template: "%s | Refinement Software Solutions Pvt. Ltd.",
  },
  description:
    "Refinement Software Solutions Pvt. Ltd. offers IT training and software development in Coimbatore, Tamil Nadu.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Refinement Software Solutions Pvt. Ltd.",
    title: "Refinement Software Solutions Pvt. Ltd.",
    description:
      "IT training and software development in Coimbatore, Tamil Nadu.",
    url: "https://refinementsoftwaresolutions.com",
  },
  twitter: {
    card: "summary",
    title: "Refinement Software Solutions Pvt. Ltd.",
    description:
      "IT training and software development in Coimbatore, Tamil Nadu.",
  },
  ...(hasCompanyMark && {
    icons: {
      icon: "/favicon-mark.png",
      shortcut: "/favicon-mark.png",
      apple: "/favicon-mark.png",
    },
  }),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
