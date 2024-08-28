import type { Metadata } from 'next';
import { Silkscreen } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from 'sonner';
import { NavMenu } from '@/components/NavMenu';

const silk = Silkscreen({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Dev Highlights',
  description: 'Dev Highlights',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={silk.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <NavMenu />

          <main className="mt-20">{children}</main>

          <Toaster theme="dark" position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
