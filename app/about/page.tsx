import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">About CourierX</h1>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            CourierX was founded in 2010 with a vision to revolutionize the courier industry. We started as a small local delivery service and have since grown into a nationwide network, known for our reliability and innovation in logistics.
          </p>
          <p className="text-gray-700 mb-4">
            Our commitment to leveraging technology and prioritizing customer satisfaction has been the cornerstone of our success. We continually strive to improve our services and expand our reach to meet the evolving needs of our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              To provide fast, reliable, and innovative courier solutions that exceed customer expectations and set new industry standards.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">Our Vision</h2>
            <p className="text-gray-700">
              To be the leading courier service provider, recognized for our excellence in delivery, customer service, and technological innovation.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4 text-center">Our Leadership</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "John Doe", role: "CEO", image: "/placeholder.svg" },
              { name: "Jane Smith", role: "COO", image: "/placeholder.svg" },
              { name: "Mike Johnson", role: "CTO", image: "/placeholder.svg" },
            ].map((leader) => (
              <div key={leader.name} className="bg-white rounded-lg shadow-md p-4 text-center">
                <Image
                  src={leader.image || "/placeholder.svg"}
                  alt={leader.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-700">{leader.name}</h3>
                <p className="text-gray-600">{leader.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

