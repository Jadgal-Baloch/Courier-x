'use client'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useId } from 'react'

export default function Header() {
  return (
    <div className="flex flex-col w-full">
      <header className="border-b">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image src="/placeholder.svg" alt="CourierX Logo" width={150} height={50} />
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

      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-white mb-8">
              Track Your Shipment
            </h1>
            <div className="flex gap-2">
              <Input 
                type="text" 
                placeholder="Enter Your Tracking Number" 
                className="bg-white"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 px-8" id={useId()}>
                Track Shipment
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
  <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
    {['Locate Us', 'Dynamic Calculator', 'Leopards Bulao', 'Tracking', 'Duplicate Slip', 'E-COM Login'].map((service, index) => (
      <div key={index} className="bg-white rounded-lg shadow p-4 text-center hover:shadow-lg transition-shadow">
        <div className="text-sm font-medium">{service}</div>
      </div>
    ))}
  </div>
</div>

    </div>
  )
}

