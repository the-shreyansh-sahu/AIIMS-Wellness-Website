"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { HeartPulse, Menu, Phone, User } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-10">
                <Link href="/" className="flex items-center gap-2 font-bold text-xl" onClick={() => setIsOpen(false)}>
                  <HeartPulse className="h-6 w-6 text-green-600" />
                  <span>AIIMS Wellness</span>
                </Link>
                <Link href="/hospitals" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Hospitals
                </Link>
                <Link href="/treatments" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Treatments
                </Link>
                <Link href="/packages" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Packages
                </Link>
                <Link href="/about" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About Us
                </Link>
                <Link href="/contact" className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
                <div className="flex flex-col gap-2 mt-4">
                  <Button className="w-full bg-medical-600 hover:bg-medical-700">Book Consultation</Button>
                  <Button variant="outline" className="w-full border-medical-600 text-medical-600 hover:bg-medical-50">
                    Login / Register
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <HeartPulse className="h-6 w-6 text-green-600" />
            <span className="hidden sm:inline-block">AIIMS Wellness</span>
          </Link>
        </div>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Hospitals</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li className="row-span-3">
                    <NavigationMenuLink asChild>
                      <a
                        className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-medical-100 to-medical-200 p-6 no-underline outline-none focus:shadow-md"
                        href="/hospitals"
                      >
                        <div className="mb-2 mt-4 text-lg font-medium text-medical-900">Top Hospitals</div>
                        <p className="text-sm leading-tight text-medical-800">
                          Explore India's leading JCI-accredited hospitals offering world-class medical care.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/hospitals/delhi"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-900 focus:bg-medical-50 focus:text-medical-900"
                      >
                        <div className="text-sm font-medium leading-none">Delhi NCR</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Top hospitals in Delhi and National Capital Region
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/hospitals/mumbai"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-900 focus:bg-medical-50 focus:text-medical-900"
                      >
                        <div className="text-sm font-medium leading-none">Mumbai</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Leading medical institutions in Mumbai
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/hospitals/chennai"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-medical-50 hover:text-medical-900 focus:bg-medical-50 focus:text-medical-900"
                      >
                        <div className="text-sm font-medium leading-none">Chennai</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Renowned hospitals in Chennai
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Treatments</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/treatments/cardiology"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Cardiology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Heart surgeries and treatments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/treatments/orthopedics"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Orthopedics</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Joint replacements and spine surgeries
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/treatments/oncology"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Oncology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Cancer treatments and surgeries
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/treatments/neurology"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Neurology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Brain and nervous system treatments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/treatments/fertility"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">Fertility</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          IVF and fertility treatments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        href="/treatments"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="text-sm font-medium leading-none">View All Treatments</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Explore our complete range of medical treatments
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/packages" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:bg-green-50 hover:text-green-700")}
                >
                  Packages
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/about" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:bg-green-50 hover:text-green-700")}
                >
                  About Us
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/contact" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:bg-green-50 hover:text-green-700")}
                >
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Link href="/contact" className="hidden md:flex items-center gap-2 text-sm font-medium">
            <Phone className="h-4 w-4 text-green-600" />
            <span>+91 1234567890</span>
          </Link>
          <div className="hidden sm:flex gap-2">
            <Button asChild variant="ghost" size="icon">
              <Link href="/login">
                <User className="h-5 w-5" />
                <span className="sr-only">Login</span>
              </Link>
            </Button>
            <Button className="bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600">
              Book Consultation
            </Button>
          </div>
          <Button asChild className="sm:hidden" size="icon" variant="ghost">
            <Link href="/login">
              <User className="h-5 w-5" />
              <span className="sr-only">Login</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

