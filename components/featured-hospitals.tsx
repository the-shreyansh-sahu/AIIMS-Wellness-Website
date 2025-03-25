import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, ArrowRight } from "lucide-react"

export default function FeaturedHospitals() {
  const hospitals = [
    {
      id: 1,
      name: "Apollo Hospitals",
      location: "Delhi",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      specialties: ["Cardiology", "Oncology", "Neurology"],
      accreditations: ["JCI", "NABH"],
    },
    {
      id: 2,
      name: "Fortis Healthcare",
      location: "Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      specialties: ["Orthopedics", "Transplants", "Urology"],
      accreditations: ["JCI", "NABH"],
    },
    {
      id: 3,
      name: "Medanta - The Medicity",
      location: "Gurugram",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      specialties: ["Cardiac Sciences", "Neurosciences", "Gastroenterology"],
      accreditations: ["JCI", "NABH"],
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-white to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Hospitals</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We partner with India's top JCI-accredited hospitals to provide you with world-class medical care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {hospitals.map((hospital) => (
            <Card
              key={hospital.id}
              className="overflow-hidden border-medical-100 hover:border-medical-300 transition-colors"
            >
              <div className="relative h-48">
                <Image src={hospital.image || "/placeholder.svg"} alt={hospital.name} fill className="object-cover" />
                <div className="absolute top-2 right-2 flex gap-1">
                  {hospital.accreditations.map((accreditation) => (
                    <Badge key={accreditation} variant="secondary" className="bg-green-100 text-green-800">
                      {accreditation}
                    </Badge>
                  ))}
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{hospital.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-green-500 text-green-500" />
                    <span className="text-sm font-medium">{hospital.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{hospital.location}</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {hospital.specialties.map((specialty) => (
                    <Badge key={specialty} variant="outline" className="border-green-200 text-green-700">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                  <Link href={`/hospitals/${hospital.id}`}>View Hospital</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" className="gap-2 border-green-600 text-green-700 hover:bg-green-50">
            <Link href="/hospitals">View All Hospitals</Link>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

