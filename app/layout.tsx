import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Satayesh — Frontend Developer', description: 'Portfolio of Satayesh, a frontend developer building thoughtful digital experiences.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" dir="ltr"><body>{children}</body></html>;
}
