import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppProvider } from "@/providers/AppProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Career Coach";
const description =
  "Practice English speaking and ace your software engineer interviews with your AI career coach.";

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s | ${title}`
  },
  description,
  applicationName: title,
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  keywords: [
    "AI career coach",
    "English speaking practice",
    "Software engineer interview",
    "Interview preparation",
    "Communication skills"
  ],
  authors: [
    {
      name: "Nguyen Thi Cam Binh",
      url: "https://github.com/ntcbinh",
    }
  ],
  creator: "Nguyen Thi Cam Binh",
  openGraph: {
    title,
    description,
    type: "website",
    siteName: title
  },
  twitter: {
    card: "summary",
    title,
    description
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <AppProvider>
          {children}
        </AppProvider>
      </body>
    </html>
  );
}
