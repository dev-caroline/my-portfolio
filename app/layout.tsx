import Navbar from '@/components/Navbar'
import React from 'react'
import "./globals.css";


export default function RootLayout({children} : {children: React.ReactNode}){
  return (
    <html lang='en'>
      <body className=''>
      <Navbar/> 
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}

