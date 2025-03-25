import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { HeartPulse, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-green-50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <HeartPulse className="h-6 w-6 text-green-600" />
              <span>AIIMS Wellness</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Connecting international patients with India's best healthcare providers for affordable, high-quality
              medical treatments.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Facebook"
                className="text-medical-600 hover:bg-medical-100"
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Twitter"
                className="text-medical-600 hover:bg-medical-100"
              >
                <Twitter className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Instagram"
                className="text-medical-600 hover:bg-medical-100"
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="LinkedIn"
                className="text-medical-600 hover:bg-medical-100"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-medical-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/hospitals" className="text-muted-foreground hover:text-medical-700 transition-colors">
                  Hospitals
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-muted-foreground hover:text-medical-700 transition-colors">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/packages" className="text-muted-foreground hover:text-medical-700 transition-colors">
                  Packages
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-muted-foreground hover:text-medical-700 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-medical-700 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-medical-700 transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-medical-800">Popular Treatments</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/treatments/cardiology"
                  className="text-muted-foreground hover:text-medical-700 transition-colors"
                >
                  Cardiac Surgery
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/orthopedics"
                  className="text-muted-foreground hover:text-medical-700 transition-colors"
                >
                  Knee Replacement
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/oncology"
                  className="text-muted-foreground hover:text-medical-700 transition-colors"
                >
                  Cancer Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/neurology"
                  className="text-muted-foreground hover:text-medical-700 transition-colors"
                >
                  Neurosurgery
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/fertility"
                  className="text-muted-foreground hover:text-medical-700 transition-colors"
                >
                  IVF Treatment
                </Link>
              </li>
              <li>
                <Link
                  href="/treatments/cosmetic"
                  className="text-muted-foreground hover:text-medical-700 transition-colors"
                >
                  Cosmetic Surgery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 text-medical-800">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                <p className="text-muted-foreground">123 Healthcare Avenue, New Delhi, 110001, India</p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-green-600 shrink-0" />
                <p className="text-muted-foreground">+91 1234567890</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-green-600 shrink-0" />
                <p className="text-muted-foreground">info@aiimswellness.com</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
                <div className="flex gap-2">
                  <Input placeholder="Your email" type="email" />
                  <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-medical-100">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AIIMS Wellness. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-muted-foreground hover:text-medical-700 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-muted-foreground hover:text-medical-700 transition-colors"
              >
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-medical-700 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

