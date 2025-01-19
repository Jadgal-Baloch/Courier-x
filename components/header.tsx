'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { useId } from 'react'

export default function Header() {
  return (
    <div className="flex flex-col w-full">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/app/images/logo.png" alt="CourierX Logo" width={150} height={50} />
            </Link>
            
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600">About Us</Link>
              <Link href="/business" className="text-gray-700 hover:text-blue-600">Business</Link>
              <Link href="/account" className="text-gray-700 hover:text-blue-600">Open An Account</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700" id={useId()}>Ecom Login</Button>
          </div>
        </div>
      </header>

      
    </div>
  )
}

