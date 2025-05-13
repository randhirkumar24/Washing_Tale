'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import SchedulePickupForm from './SchedulePickupForm'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isFormOpen, setIsFormOpen] = useState(false)

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4 py-3 md:py-4">
        <nav className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-3 shrink-0">
            <div className="relative w-10 h-10 md:w-12 md:h-12">
              <Image
                src="/logo.svg"
                alt="Washing Tale Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-gray-800">Washing Tale</span>
              <span className="text-xs md:text-sm text-gray-600 hidden sm:block">Premium Laundry Service</span>
            </div>
          </Link>
          
          <div 
            className={`
              md:flex items-center md:space-x-8 
              ${isMobileMenuOpen 
                ? 'flex flex-col absolute top-full left-0 w-full bg-white py-4 space-y-4 shadow-lg border-t border-gray-100 animate-fadeIn' 
                : 'hidden md:flex'
              }
            `}
          >
            <Link 
              href="/" 
              className="nav-link hover:text-[#FF4A8D] transition-colors px-4 md:px-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="nav-link hover:text-[#FF4A8D] transition-colors px-4 md:px-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/services" 
              className="nav-link hover:text-[#FF4A8D] transition-colors px-4 md:px-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/pricing" 
              className="nav-link hover:text-[#FF4A8D] transition-colors px-4 md:px-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/contact" 
              className="nav-link hover:text-[#FF4A8D] transition-colors px-4 md:px-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="bg-[#FF4A8D] text-white px-4 md:px-6 py-2 rounded-lg text-sm md:text-base font-semibold hover:bg-[#FF4A8D]/90 transition-colors whitespace-nowrap"
            >
              Schedule Pickup
            </button>
            <button 
              className="md:hidden p-2"
              aria-label="Toggle mobile menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Schedule Pickup Form */}
      <SchedulePickupForm 
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
      />
    </header>
  )
}

export default Header 