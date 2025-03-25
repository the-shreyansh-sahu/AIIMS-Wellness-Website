import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Search } from "lucide-react"

export default function HospitalsPage() {
  const hospitals = [
    {
      id: 1,
      name: "Apollo Hospitals",
      location: "Delhi",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      specialties: ["Cardiology", "Oncology", "Neurology"],
      accreditations: ["JCI", "NABH"],
      description:
        "Apollo Hospitals Delhi is a multi-specialty tertiary care hospital with cutting-edge technology and skilled medical professionals.",
    },
    {
      id: 2,
      name: "Fortis Healthcare",
      location: "Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      specialties: ["Orthopedics", "Transplants", "Urology"],
      accreditations: ["JCI", "NABH"],
      description:
        "Fortis Healthcare Mumbai offers comprehensive medical services with state-of-the-art facilities and experienced specialists.",
    },
    {
      id: 3,
      name: "Medanta - The Medicity",
      location: "Gurugram",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.9,
      specialties: ["Cardiac Sciences", "Neurosciences", "Gastroenterology"],
      accreditations: ["JCI", "NABH"],
      description:
        "Medanta is one of India's largest multi-super specialty institutes located in Gurugram, founded by Dr. Naresh Trehan.",
    },
    {
      id: 4,
      name: "Max Super Speciality Hospital",
      location: "Delhi",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.6,
      specialties: ["Oncology", "Cardiology", "Neurology"],
      accreditations: ["NABH"],
      description:
        "Max Super Speciality Hospital offers world-class healthcare services with advanced medical technology and expert doctors.",
    },
    {
      id: 5,
      name: "Kokilaben Dhirubhai Ambani Hospital",
      location: "Mumbai",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.8,
      specialties: ["Neurosurgery", "Cardiac Surgery", "Oncology"],
      accreditations: ["JCI", "NABH"],
      description:
        "Kokilaben Hospital is a premier multi-specialty healthcare institution offering comprehensive tertiary care services.",
    },
    {
      id: 6,
      name: "Manipal Hospitals",
      location: "Bangalore",
      image: "/placeholder.svg?height=200&width=300",
      rating: 4.7,
      specialties: ["Organ Transplant", "Oncology", "Cardiology"],
      accreditations: ["NABH"],
      description:
        "Manipal Hospitals provides high-quality, personalized healthcare services using advanced technology and skilled professionals.",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Top Hospitals in India</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Discover India's leading hospitals offering world-class medical care at affordable prices.
        </p>
      </div>

      <div className="bg-green-50 p-6 rounded-lg mb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search hospitals..." className="pl-9" />
          </div>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="delhi">Delhi</SelectItem>
              <SelectItem value="mumbai">Mumbai</SelectItem>
              <SelectItem value="bangalore">Bangalore</SelectItem>
              <SelectItem value="chennai">Chennai</SelectItem>
              <SelectItem value="hyderabad">Hyderabad</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Filter by specialty" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Specialties</SelectItem>
              <SelectItem value="cardiology">Cardiology</SelectItem>
              <SelectItem value="orthopedics">Orthopedics</SelectItem>
              <SelectItem value="neurology">Neurology</SelectItem>
              <SelectItem value="oncology">Oncology</SelectItem>
              <SelectItem value="fertility">Fertility</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hospitals.map((hospital) => (
          <Card key={hospital.id} className="overflow-hidden">
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
              <p className="text-sm text-muted-foreground mb-4">{hospital.description}</p>
              <div className="flex flex-wrap gap-2">
                {hospital.specialties.map((specialty) => (
                  <Badge key={specialty} variant="outline" className="border-green-200 text-green-700">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="px-6 pb-6 pt-0">
              <Button asChild className="w-full">
                <Link href={`/hospitals/${hospital.id}`}>View Hospital</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="default" size="icon" className="bg-green-600 hover:bg-green-700">
            1
          </Button>
          <Button variant="outline" size="icon">
            2
          </Button>
          <Button variant="outline" size="icon">
            3
          </Button>
          <Button variant="outline" size="icon">
            &gt;
          </Button>
        </div>
      </div>
    </div>
  )
}

