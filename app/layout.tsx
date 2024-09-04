import type { Metadata } from 'next';
import { Silkscreen } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Toaster } from 'sonner';
import { NavMenu } from '@/components/NavMenu';
import { GeistMono } from 'geist/font/mono';
import { cn } from '@/lib/utils';

const silk = Silkscreen({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DevLevelUpper',
  description: 'Helping developers level up with the tools they use.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(silk.className, GeistMono.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NavMenu />

          <main>{children}</main>

          <Toaster theme="dark" position="top-center" richColors />
        </ThemeProvider>
      </body>
    </html>
  );
}
