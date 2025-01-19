'use client'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useId } from 'react'

export default function Header() {
  return (
    <>
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

    
    </>
  )
}





