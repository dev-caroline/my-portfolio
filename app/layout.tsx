import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import "./globals.css";


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

