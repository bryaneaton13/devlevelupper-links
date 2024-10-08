import type { Metadata } from 'next';
import { Silkscreen } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from 'sonner';
import { NavMenu } from '@/components/NavMenu';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

const silk = Silkscreen({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevLevelUpper',
  description: 'Helping developers level up with the tools they use.',
  metadataBase: new URL('https://www.devlevelupper.com'),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(silk.className, GeistMono.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <NavMenu />

          <main className="bg-slate-100 dark:bg-slate-700">{children}</main>

          <Toaster theme="dark" position="top-center" richColors />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
