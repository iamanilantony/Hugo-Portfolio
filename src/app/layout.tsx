import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavBar from './components/nav'
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cx = (...classes: string[]) => classes.filter(Boolean).join(' ');
  return (
    <html lang="en" 
    className={cx(
      'text-[#111010] bg-white dark:text-white dark:bg-[#111010]',
      // GeistSans.variable,
      // GeistMono.variable
      )}>
        
      <body className= 'antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 lg:mx-auto'>
        <main className='flex-auto mx-2 min-w-0 flex flex-col mt-8 px-2 md:px-0'>
        <NavBar />
        {children}
        </main>
      </body>
    </html>
  )
}