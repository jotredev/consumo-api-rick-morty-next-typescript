import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/libs/utils';

const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ricky & Morty',
  description: 'Ricky & Morty',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body
        className={cn(
          'container mx-auto py-10 px-5 lg:px-0 bg-gray-100 dark:bg-dark dark:text-gray-300',
          font.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
