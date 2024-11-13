'use client';
import Navbar from '@/components/Navbar';
import { Sen } from 'next/font/google';
import './globals.css';

const fontStyle = Sen({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <html lang="en" className={`${fontStyle.className} dark`}>
      <title>Dikshant Sharma</title>
      <body className={`antialiased`}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar scrollToSection={scrollToSection} />
        </div>
        {children}
      </body>
    </html>
  );
}
