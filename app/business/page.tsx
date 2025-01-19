import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from 'next/link'

export default function BusinessPage() {
  const services = [
    {
      title: "Express Delivery",
      description: "Same-day and next-day delivery options for urgent shipments.",
      icon: "🚚"
    },
    {
      title: "International Shipping",
      description: "Reliable and fast international delivery to over 200 countries.",
      icon: "🌎"
    },
    {
      title: "Bulk Shipping",
      description: "Cost-effective solutions for high-volume shipments.",
      icon: "📦"
    },
    {
      title: "Warehousing",
      description: "Secure storage and inventory management services.",
      icon: "🏭"
    },
    {
      title: "E-commerce Integration",
      description: "Seamless integration with major e-commerce platforms.",
      icon: "🖥️"
    },
    {
      title: "Custom Solutions",
      description: "Tailored logistics solutions for unique business needs.",
      icon: "🔧"
    }
  ]

  return (
    <div className="min-h-screen bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-800 mb-8 text-center">Business Solutions</h1>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8 mb-12">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Why Choose CourierX for Your Business?</h2>
          <p className="text-gray-700 mb-4">
            At CourierX, we understand that efficient logistics is crucial for your business success. Our comprehensive range of services is designed to meet the diverse needs of businesses of all sizes, from startups to large corporations.
          </p>
          <p className="text-gray-700 mb-4">
            With our cutting-edge technology, extensive network, and dedicated team, we ensure that your shipments are delivered on time, every time. Partner with us to streamline your supply chain and enhance your customer satisfaction.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service) => (
            <Card key={service.title}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <span className="text-3xl mr-2">{service.icon}</span>
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-blue-600 hover:bg-blue-700">
            <Link href="/contact">Contact Our Business Team</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

