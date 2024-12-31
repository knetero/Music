'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#0E0E0E] z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-white text-2xl font-bold">
              Music Agency
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`${
                  pathname === '/'
                    ? 'text-[#fa4c38]'
                    : 'text-white hover:text-[#fa4c38]'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`${
                  pathname === '/about'
                    ? 'text-[#fa4c38]'
                    : 'text-white hover:text-[#fa4c38]'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                About
              </Link>
              <Link
                href="/services"
                className={`${
                  pathname === '/services'
                    ? 'text-[#fa4c38]'
                    : 'text-white hover:text-[#fa4c38]'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Services
              </Link>
              <Link
                href="/contact"
                className={`${
                  pathname === '/contact'
                    ? 'text-[#fa4c38]'
                    : 'text-white hover:text-[#fa4c38]'
                } px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300`}
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#fa4c38] focus:outline-none"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-[#0E0E0E]`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className={`${
              pathname === '/'
                ? 'text-[#fa4c38]'
                : 'text-white hover:text-[#fa4c38]'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`${
              pathname === '/about'
                ? 'text-[#fa4c38]'
                : 'text-white hover:text-[#fa4c38]'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
          >
            About
          </Link>
          <Link
            href="/services"
            className={`${
              pathname === '/services'
                ? 'text-[#fa4c38]'
                : 'text-white hover:text-[#fa4c38]'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className={`${
              pathname === '/contact'
                ? 'text-[#fa4c38]'
                : 'text-white hover:text-[#fa4c38]'
            } block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300`}
          >
            Contact
          </Link>
        </div>
      </motion.div>
    </nav>
  )
} 