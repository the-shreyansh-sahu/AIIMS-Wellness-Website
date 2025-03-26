import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { HeartPulse, Building2, Stethoscope, Globe, Calendar, CheckCircle, ArrowRight } from "lucide-react"
import TestimonialCard from "@/components/testimonial-card"
import FeaturedHospitals from "@/components/featured-hospitals"
import TreatmentCategories from "@/components/treatment-categories"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Medical Tourism in India"
          width={1920}
          height={1080}
          className="object-cover w-full h-full"
          priority
        />
        <div className="container absolute inset-x-0 bottom-0 z-20 mx-auto px-4 py-24 sm:py-32">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">AIIMS Wellness</Badge>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              World-Class Healthcare in India Test
            </h1>
            <p className="mt-6 text-xl text-white/90">
              Access affordable, high-quality medical treatments from India's top hospitals and specialists. Your
              journey to better health starts here.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link href="/treatments">Explore Treatments</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
                How It Works
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <HeartPulse className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-3xl font-bold">500+</h3>
              <p className="text-muted-foreground">Accredited Hospitals</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Stethoscope className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-3xl font-bold">10,000+</h3>
              <p className="text-muted-foreground">Specialist Doctors</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Globe className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="text-muted-foreground">Countries Served</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="h-10 w-10 text-primary mb-2" />
              <h3 className="text-3xl font-bold">98%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose India Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-green-pattern"></div>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose India for Medical Tourism?</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              India offers world-class healthcare at a fraction of the cost compared to Western countries, with
              internationally accredited hospitals and highly skilled doctors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Building2 className="h-5 w-5 text-primary" />
                  State-of-the-art Facilities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Access to JCI-accredited hospitals with the latest medical technology and infrastructure comparable to
                  the best in the world.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Stethoscope className="h-5 w-5 text-primary" />
                  Highly Qualified Doctors
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Treatment by internationally trained and experienced specialists who are leaders in their respective
                  medical fields.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  No Waiting Time
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Immediate attention without the long waiting periods often experienced in many countries for
                  specialized treatments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="py-16 bg-green-50">
        <TreatmentCategories />
      </section>

      {/* Featured Hospitals */}
      <FeaturedHospitals />

      {/* Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Patient Success Stories</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear from patients who have experienced successful treatments and exceptional care through our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard
              name="Sarah Johnson"
              country="United States"
              treatment="Cardiac Surgery"
              image="/placeholder.svg?height=100&width=100"
              quote="The care I received in India was exceptional. The doctors were world-class, and the cost was a fraction of what I would have paid in the US."
            />
            <TestimonialCard
              name="Ahmed Al-Farsi"
              country="UAE"
              treatment="Orthopedic Surgery"
              image="/placeholder.svg?height=100&width=100"
              quote="From airport pickup to post-surgery care, everything was perfectly arranged. I'm grateful for the new lease on life I've received."
            />
            <TestimonialCard
              name="Elena Petrova"
              country="Russia"
              treatment="IVF Treatment"
              image="/placeholder.svg?height=100&width=100"
              quote="After years of unsuccessful treatments, we found success in India. The medical team was compassionate and professional throughout our journey."
            />
          </div>

          <div className="text-center mt-10">
            <Button variant="outline" className="gap-2">
              Read More Success Stories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">How It Works</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
              We make your medical journey to India seamless and stress-free with our comprehensive services.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Consultation</h3>
              <p className="text-muted-foreground">
                Share your medical reports for a free evaluation by our medical experts.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Treatment Plan</h3>
              <p className="text-muted-foreground">
                Receive a personalized treatment plan with hospital and doctor recommendations.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Travel Arrangements</h3>
              <p className="text-muted-foreground">
                We assist with visa, accommodation, and local transportation in India.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-700">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Treatment & Recovery</h3>
              <p className="text-muted-foreground">
                Receive your treatment and post-treatment care with our continuous support.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="gap-2">
              Start Your Medical Journey
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to Begin Your Healthcare Journey?</h2>
          <p className="mt-4 text-lg text-white/90 max-w-3xl mx-auto">
            Our team of medical experts is ready to guide you through every step of your treatment in India.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Request a Free Consultation
            </Button>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              Browse Treatments
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}


