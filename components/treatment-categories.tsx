import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Brain, Bone, Activity, Baby, Eye, SmileIcon as Tooth, Scissors } from "lucide-react"

export default function TreatmentCategories() {
  const categories = [
    {
      id: "cardiology",
      name: "Cardiology",
      description: "Heart surgeries and treatments",
      icon: Heart,
    },
    {
      id: "neurology",
      name: "Neurology",
      description: "Brain and nervous system treatments",
      icon: Brain,
    },
    {
      id: "orthopedics",
      name: "Orthopedics",
      description: "Joint replacements and spine surgeries",
      icon: Bone,
    },
    {
      id: "oncology",
      name: "Oncology",
      description: "Cancer treatments and surgeries",
      icon: Activity,
    },
    {
      id: "fertility",
      name: "Fertility",
      description: "IVF and fertility treatments",
      icon: Baby,
    },
    {
      id: "ophthalmology",
      name: "Ophthalmology",
      description: "Eye surgeries and treatments",
      icon: Eye,
    },
    {
      id: "dental",
      name: "Dental",
      description: "Dental procedures and surgeries",
      icon: Tooth,
    },
    {
      id: "cosmetic",
      name: "Cosmetic",
      description: "Cosmetic and plastic surgeries",
      icon: Scissors,
    },
  ]

  return (
    <section className="py-16 bg-medical-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Medical Specialties</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            We offer a wide range of medical treatments across various specialties at affordable prices.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            // Create a gradient of green backgrounds
            // const bgColorClass = `bg-medical-${Math.min(100 + (index * 50), 400)}/20`

            return (
              <Link key={category.id} href={`/treatments/${category.id}`}>
                <Card className="h-full transition-all hover:shadow-md hover:border-green-300">
                  <CardContent className="pt-6 text-center">
                    <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-100 mb-4">
                      <Icon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

