import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <body
        id="body-content" className={"container"}
      >
        <Header/>
        <main id="main-content">
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
