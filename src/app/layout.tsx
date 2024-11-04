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
  return (
    <html lang="en" className={`${fontStyle.className} dark`}>
      <body className={`antialiased`}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  );
}
