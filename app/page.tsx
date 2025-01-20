import VisionSection from '@/components/vision-section'
import Tracking from '@/components/tracking'
import Image from 'next/image'

export default function Home() {
  const services = [
    {
      title: 'Ecommerce',
      image: '/placeholder.svg',
    },
    {
      title: 'International',
      image: '/placeholder.svg',
    },
    {
      title: 'GiftWifts',
      image: '/placeholder.svg',
    },
    {
      title: 'Fintech',
      image: '/placeholder.svg',
    },
  ]

  return (
    <main>
      <Tracking />
      <VisionSection />
      
      
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-xl font-bold text-center text-blue-800">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

