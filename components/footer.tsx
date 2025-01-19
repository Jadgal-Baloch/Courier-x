'use client'

import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="hover:text-blue-300">About Us</Link></li>
              <li><Link href="/slip" className="hover:text-blue-300">Online Slip</Link></li>
              <li><Link href="/calculator" className="hover:text-blue-300">Dynamic Rate Calculator</Link></li>
              <li><Link href="/management" className="hover:text-blue-300">Company Management</Link></li>
              <li><Link href="/careers" className="hover:text-blue-300">Careers</Link></li>
            </ul>
          </div>

          {/* Head Office */}
          <div>
            <h3 className="text-xl font-bold mb-4">Head Office</h3>
            <p>Leopards Courier Services,</p>
            <p>19-F, Block-6, PECHS, Karachi.</p>
            <p>75400 - PAKISTAN</p>
            
            <h3 className="text-xl font-bold mt-6 mb-4">International Office</h3>
            <ul className="space-y-2">
              <li>United Arab Emirates</li>
              <li>United Kingdom</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services & Products</h3>
            <ul className="space-y-2">
              <li><Link href="/express" className="hover:text-blue-300">Express</Link></li>
              <li><Link href="/logistics" className="hover:text-blue-300">Logistics</Link></li>
              <li><Link href="/ecommerce" className="hover:text-blue-300">Ecommerce</Link></li>
              <li><Link href="/international" className="hover:text-blue-300">International</Link></li>
              <li><Link href="/gifts" className="hover:text-blue-300">GiftWifts by Leopards</Link></li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mt-8">
          <Link href="#" className="hover:text-blue-300"><Linkedin /></Link>
          <Link href="#" className="hover:text-blue-300"><Facebook /></Link>
          <Link href="#" className="hover:text-blue-300"><Instagram /></Link>
          <Link href="#" className="hover:text-blue-300"><Youtube /></Link>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-8 border-t border-blue-800">
          <p>2025 © CourierX Services Pvt. Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

