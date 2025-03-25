import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, Calendar, MapPin } from "lucide-react"

export default function PackagesPage() {
  const packages = [
    {
      id: 1,
      name: "Premium Cardiac Care Package",
      category: "cardiology",
      image: "/placeholder.svg?height=200&width=300",
      hospital: "Apollo Hospitals",
      location: "Delhi",
      price: "$8,500",
      duration: "10 days",
      includes: [
        "Pre-surgery consultations",
        "Comprehensive diagnostics",
        "Surgery by top cardiac surgeon",
        "7 days hospital stay",
        "Post-operative care",
        "Follow-up consultations",
        "Airport transfers",
        "Hotel accommodation for companion",
      ],
    },
    {
      id: 2,
      name: "Complete Knee Replacement Package",
      category: "orthopedics",
      image: "/placeholder.svg?height=200&width=300",
      hospital: "Fortis Healthcare",
      location: "Mumbai",
      price: "$7,200",
      duration: "14 days",
      includes: [
        "Pre-surgery consultations",
        "Comprehensive diagnostics",
        "Surgery by senior orthopedic surgeon",
        "7 days hospital stay",
        "Physiotherapy sessions",
        "Post-operative care",
        "Airport transfers",
        "Hotel accommodation for companion",
      ],
    },
    {
      id: 3,
      name: "Advanced IVF Treatment Package",
      category: "fertility",
      image: "/placeholder.svg?height=200&width=300",
      hospital: "Manipal Hospitals",
      location: "Bangalore",
      price: "$4,500",
      duration: "21 days",
      includes: [
        "Initial fertility assessment",
        "Hormone therapy",
        "Egg retrieval procedure",
        "ICSI if required",
        "Embryo transfer",
        "Pregnancy test",
        "Airport transfers",
        "Hotel accommodation for couple",
      ],
    },
    {
      id: 4,
      name: "Comprehensive Health Checkup Package",
      category: "preventive",
      image: "/placeholder.svg?height=200&width=300",
      hospital: "Max Super Speciality Hospital",
      location: "Delhi",
      price: "$1,200",
      duration: "3 days",
      includes: [
        "Complete blood work",
        "Cardiac evaluation",
        "Cancer screening",
        "Full body imaging",
        "Specialist consultations",
        "Detailed health report",
        "Airport transfers",
        "Hotel accommodation",
      ],
    },
    {
      id: 5,
      name: "Dental Makeover Package",
      category: "dental",
      image: "/placeholder.svg?height=200&width=300",
      hospital: "Clove Dental",
      location: "Mumbai",
      price: "$3,200",
      duration: "7 days",
      includes: [
        "Comprehensive dental assessment",
        "Digital smile design",
        "Up to 8 dental implants/veneers",
        "Teeth whitening",
        "Follow-up care",
        "Airport transfers",
        "Hotel accommodation",
      ],
    },
    {
      id: 6,
      name: "Comprehensive Cancer Treatment Package",
      category: "oncology",
      image: "/placeholder.svg?height=200&width=300",
      hospital: "Tata Memorial Hospital",
      location: "Mumbai",
      price: "$12,000",
      duration: "30 days",
      includes: [
        "Initial oncology consultation",
        "Comprehensive diagnostics",
        "Personalized treatment plan",
        "Surgery if required",
        "Chemotherapy/Radiation therapy",
        "Hospital stay",
        "Follow-up consultations",
        "Airport transfers and accommodation",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Medical Tourism Packages</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          All-inclusive medical packages designed to provide you with the best care at affordable prices.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-10">
        <div className="flex justify-center">
          <TabsList className="mb-8 bg-green-100">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              All Packages
            </TabsTrigger>
            <TabsTrigger value="cardiology" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Cardiac Care
            </TabsTrigger>
            <TabsTrigger
              value="orthopedics"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Orthopedic
            </TabsTrigger>
            <TabsTrigger value="fertility" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Fertility
            </TabsTrigger>
            <TabsTrigger value="oncology" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Cancer Care
            </TabsTrigger>
            <TabsTrigger value="preventive" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Health Checkup
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <Card key={pkg.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={pkg.image || "/placeholder.svg"} alt={pkg.name} fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-green-100 text-green-800">
                  {pkg.category.charAt(0).toUpperCase() + pkg.category.slice(1)}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                  <MapPin className="h-4 w-4" />
                  <span>
                    {pkg.hospital}, {pkg.location}
                  </span>
                </div>
                <div className="flex justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-primary" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  <div className="text-xl font-bold text-green-600">{pkg.price}</div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Package Includes:</h4>
                  <ul className="space-y-1">
                    {pkg.includes.slice(0, 4).map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-600 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/packages/${pkg.id}`}>View Package Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </TabsContent>

        {/* Similar TabsContent for other categories */}
      </Tabs>

      <div className="flex justify-center mt-12">
        <div className="flex gap-2">
          <Button variant="outline" size="icon" disabled>
            &lt;
          </Button>
          <Button variant="default" size="icon">
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

