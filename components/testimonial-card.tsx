import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { QuoteIcon } from "lucide-react"

interface TestimonialCardProps {
  name: string
  country: string
  treatment: string
  image: string
  quote: string
}

export default function TestimonialCard({ name, country, treatment, image, quote }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden border-green-100 hover:border-green-300 transition-colors">
      <CardContent className="p-6">
        <QuoteIcon className="h-8 w-8 text-green-500/20 mb-4" />
        <p className="mb-6 italic">{quote}</p>
        <div className="flex items-center gap-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={50}
            height={50}
            className="rounded-full object-cover border-2 border-medical-200"
          />
          <div>
            <h4 className="font-semibold text-medical-800">{name}</h4>
            <p className="text-sm text-muted-foreground">
              {country} • {treatment}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

