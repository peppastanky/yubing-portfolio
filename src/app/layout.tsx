import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Lim Yu Bing | Portfolio',
  description: 'Information Systems undergraduate at SMU building user-focused web applications',
  keywords: ['portfolio', 'web developer', 'SMU', 'Information Systems', 'React', 'TypeScript'],
  authors: [{ name: 'Lim Yu Bing' }],
  openGraph: {
    title: 'Lim Yu Bing | Portfolio',
    description: 'Information Systems undergraduate at SMU building user-focused web applications',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
