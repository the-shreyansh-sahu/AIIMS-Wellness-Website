import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

export default function TreatmentsPage() {
  const treatments = [
    {
      id: 1,
      name: "Coronary Artery Bypass Grafting (CABG)",
      category: "cardiology",
      image: "/placeholder.svg?height=200&width=300",
      description: "A surgical procedure to restore normal blood flow to an obstructed coronary artery.",
      averageCost: "$7,000 - $9,000",
      duration: "5-7 days hospital stay",
      success: "98%",
    },
    {
      id: 2,
      name: "Total Knee Replacement",
      category: "orthopedics",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "A surgical procedure to replace the weight-bearing surfaces of the knee joint to relieve pain and disability.",
      averageCost: "$6,000 - $8,000",
      duration: "5-7 days hospital stay",
      success: "95%",
    },
    {
      id: 3,
      name: "IVF Treatment",
      category: "fertility",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "A complex series of procedures used to help with fertility or prevent genetic problems and assist with conception.",
      averageCost: "$3,000 - $5,000",
      duration: "2-3 weeks process",
      success: "60-65%",
    },
    {
      id: 4,
      name: "Brain Tumor Surgery",
      category: "neurology",
      image: "/placeholder.svg?height=200&width=300",
      description:
        "Surgical removal of a brain tumor to relieve pressure on the brain and remove as much tumor as possible.",
      averageCost: "$8,000 - $12,000",
      duration: "7-10 days hospital stay",
      success: "85-90%",
    },
    {
      id: 5,
      name: "Liver Transplant",
      category: "transplant",
      image: "/placeholder.svg?height=200&width=300",
      description: "A surgical procedure to remove a diseased liver and replace it with a healthy liver from a donor.",
      averageCost: "$40,000 - $50,000",
      duration: "2-3 weeks hospital stay",
      success: "90%",
    },
    {
      id: 6,
      name: "Dental Implants",
      category: "dental",
      image: "/placeholder.svg?height=200&width=300",
      description: "Surgical components that interface with the bone of the jaw to support dental prosthesis.",
      averageCost: "$800 - $1,500 per implant",
      duration: "3-6 months process",
      success: "98%",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Medical Treatments</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Explore our comprehensive range of medical treatments offered at affordable prices in India's top hospitals.
        </p>
      </div>

      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search treatments..." className="pl-9" />
        </div>
      </div>

      <Tabs defaultValue="all" className="mb-10">
        <div className="flex justify-center">
          <TabsList className="mb-8 bg-green-100">
            <TabsTrigger value="all" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              All
            </TabsTrigger>
            <TabsTrigger value="cardiology" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Cardiology
            </TabsTrigger>
            <TabsTrigger
              value="orthopedics"
              className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
            >
              Orthopedics
            </TabsTrigger>
            <TabsTrigger value="neurology" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Neurology
            </TabsTrigger>
            <TabsTrigger value="oncology" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Oncology
            </TabsTrigger>
            <TabsTrigger value="fertility" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Fertility
            </TabsTrigger>
            <TabsTrigger value="dental" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Dental
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatments.map((treatment) => (
            <Card key={treatment.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={treatment.image || "/placeholder.svg"} alt={treatment.name} fill className="object-cover" />
                <Badge className="absolute top-2 right-2 bg-green-100 text-green-800">
                  {treatment.category.charAt(0).toUpperCase() + treatment.category.slice(1)}
                </Badge>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{treatment.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{treatment.description}</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <p className="font-medium">Cost</p>
                    <p className="text-muted-foreground">{treatment.averageCost}</p>
                  </div>
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-muted-foreground">{treatment.duration}</p>
                  </div>
                  <div>
                    <p className="font-medium">Success Rate</p>
                    <p className="text-muted-foreground">{treatment.success}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <Button asChild className="w-full">
                  <Link href={`/treatments/${treatment.id}`}>View Details</Link>
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

