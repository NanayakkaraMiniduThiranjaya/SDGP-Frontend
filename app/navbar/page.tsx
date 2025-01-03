'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <Image src="/favicon.ico" alt="Logo" width={62} height={62} className="mr-2" />
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="/" className="text-gray-700 hover:text-gray-900">Home</a>
            <a href="/map" className="text-gray-700 hover:text-gray-900">Map</a>
            <a href="/minebot" className="text-gray-700 hover:text-gray-900">Minebot</a>
            <a href="/complain" className="text-gray-700 hover:text-gray-900">Complain</a>
            <a href="/license-portal" className="text-gray-700 hover:text-gray-900">License Portal</a>
            <a href="/minemore" className="text-gray-700 hover:text-gray-900">Minemore</a>
            <a href="/about" className="text-gray-700 hover:text-gray-900">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-gray-900">Contact Us</a>
          </div>

          {/* Sign Up Button */}
          <div className="hidden md:block">
            <a href="/signup" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Sign Up
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Home</a>
            <a href="/map" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Map</a>
            <a href="/minebot" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Minebot</a>
            <a href="/complain" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Complain</a>
            <a href="/minemore" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Minemore</a>
            <a href="/license-portal" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">License Portal</a>
            <a href="/about" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">About Us</a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100">Contact Us</a>
            <a href="/signup" className="block px-3 py-2 rounded-md text-white bg-blue-500 hover:bg-blue-600">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
