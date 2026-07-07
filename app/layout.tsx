import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tarek Hamraoui — Network Engineer & Full-Stack Developer",
  description:
    "Portfolio of Tarek Hamraoui — Network Engineer and Full-Stack Developer with a Master's degree in Networks & Multimedia, passionate about networking, cybersecurity, and building modern web applications.",
  keywords: [
    "Tarek Hamraoui",
    "Network Administrator",
    "Full-Stack Developer",
    "Computer Science",
    "CCNA",
    "Cisco",
    "Networking",
    "Next.js",
    "TypeScript",
    "PHP",
    "Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: "Tarek Hamraoui" }],
  openGraph: {
    title: "Tarek Hamraoui — Network Engineer & Full-Stack Developer",
    description:
      "Network Engineer and Full-Stack Developer with a Master's degree in Networks & Multimedia, passionate about networking and building modern web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
