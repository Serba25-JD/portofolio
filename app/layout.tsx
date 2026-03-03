import type { Metadata } from "next";
import { Open_Sans, Poppins } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";

const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: "swap",
});

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: [
    '100','200','300','400','500',
    '600','700','800','900'
  ],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portofolio - Junior Programmer",
  description: "Portofolio Saya Jeremi Salvatores Sihotang, mampu menggunakan HTML, CSS, JavaScript, Next.js, Python, dan dengan desain di Photoshop juga di Adobe Premiere Pro.",
  keywords: [ "portofolio", "junior programmer", "HTML", "CSS", "JavaScript", "Next.js", "Python", "desain", "multimedia" ],
  authors: [
    {
      "name": "Jeremi Salvatores Sihotang"
    }
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Jeremi Salvatores Sihotang",
    description: "Portofolio Saya Jeremi Salvatores Sihotang, mampu menggunakan HTML, CSS, JavaScript, Next.js, Python, dan dengan desain di Photoshop juga di Adobe Premiere Pro.",
    images: [
      {
        "url": "https://portofolio-junior-programmer.netlify.app/assets/image/main/profile-first.webp",
        "width": 651,
        "height": 1156,
        alt: "Jeremi Salvatores Sihotang"
      }
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Portofolio Jeremi Salvatores Sihotang",
    description: "Portofolio Saya Jeremi Salvatores Sihotang, mampu menggunakan HTML, CSS, JavaScript, Next.js, Python, dan dengan desain di Photoshop juga di Adobe Premiere Pro.",
    images: [ "https://portofolio-junior-programmer.netlify.app/assets/image/main/profile-first.webp"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" precedence="default"/>
      <body className={`${openSans.variable} ${poppins.variable} antialiased max-w-4xl mx-auto min-h-screen`}>
        <Header />
        <main>
        {children}
        </main>
        <footer className="bg-foreground text-center p-2 shadow-md border-accent border-t-2 rounded-t-lg">
          <p className="font-bold text-base"> &copy; 2026 Jeremi Salvatores Sihotang </p>
        </footer>
      </body>

    </html>
  );
}
