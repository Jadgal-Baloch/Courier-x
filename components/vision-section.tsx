'use client'
import Image from 'next/image'

export default function VisionSection() {
  return (
    <section className="bg-blue-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Vision and Mission</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="Vision"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Vision 2030</h3>
              <p className="text-gray-600">
                To be the Ultimate Choice of our Supply Chain Stakeholders.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg"
                alt="Mission"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-blue-800">Our Mission</h3>
              <p className="text-gray-600">
                Creating Impact & Delivering Value Through Excellence Drive and Innovation for our Stakeholders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

