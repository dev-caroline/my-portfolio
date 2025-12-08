'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/certifications', label: 'Certifications' },
    { href: '/projects', label: 'Projects' }
  ]

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <div className='border border-gray-300 p-4 sticky top-0 bg-white z-50'>
        <div className='flex justify-between items-center max-w-7xl mx-auto px-4 lg:px-10'>
            <h1 className='text-2xl font-bold'>Caro.dev</h1>

            {/* Desktop Navigation */}
            <div className='hidden md:flex gap-10'>
                {navItems.map((item) => (
                    <Link key={item.href} href={item.href}>
                        <div className={`font-medium transition-colors hover:text-blue-600 ${
                            isActive(item.href) ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-700'
                        }`}>
                            {item.label}
                        </div>
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className='md:hidden text-gray-700 hover:text-blue-600 transition-colors'
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Toggle menu"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
            <div className='md:hidden border-t border-gray-200 mt-4 pt-4'>
                <div className='flex flex-col gap-4 px-4'>
                    {navItems.map((item) => (
                        <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                            <div className={`font-medium py-2 transition-colors hover:text-blue-600 ${
                                isActive(item.href) ? 'text-blue-600 border-l-4 border-blue-600 pl-2' : 'text-gray-700'
                            }`}>
                                {item.label}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        )}
    </div>
  )
}

export default Navbar