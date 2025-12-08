import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import "./globals.css";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ajiboye Caroline Adetomiwa | Becoming Without Limit',
  description: 'Ajiboye Caroline Adetomiwa- Full-Stack Developer | Building modern, scalable, and user-focused web applications.',
  viewport: 'width=device-width, initial-scale=1',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({children} : {children: React.ReactNode}){
  return (
    <html lang='en'>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css" rel="stylesheet" />
      </head>
      <body className=''>
      <Navbar/>
        <main>
          {children}
        </main>
      <Footer/>
      </body>
    </html>
  )
}

