'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <div className="container mx-auto px-4 py-2 md:py-3">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src="/logo.svg"
                alt="Washing Tale Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-bold text-gray-800">Washing Tale</span>
              <span className="text-xs text-gray-600 hidden sm:block">Premium Laundry Service</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</Link>
            <Link href="/services" className="text-gray-600 hover:text-gray-800 transition-colors">Services</Link>
            <Link href="/pricing" className="text-gray-600 hover:text-gray-800 transition-colors">Pricing</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">About</Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <Link 
              href="/book"
              className="bg-[#FF4A8D] text-white px-3 md:px-5 py-1.5 rounded-lg text-sm font-semibold hover:bg-[#FF4A8D]/90 transition-colors whitespace-nowrap"
            >
              Schedule Pickup
            </Link>
            <button 
              className="md:hidden p-1.5"
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-100">
            <div className="flex flex-col space-y-2">
              <Link href="/" className="text-gray-600 hover:text-gray-800 transition-colors">Home</Link>
              <Link href="/services" className="text-gray-600 hover:text-gray-800 transition-colors">Services</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-800 transition-colors">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-800 transition-colors">About</Link>
              <Link href="/contact" className="text-gray-600 hover:text-gray-800 transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 