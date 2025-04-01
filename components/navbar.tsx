"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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
              <Link href="/hospitals" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:bg-green-50 hover:text-green-700")}
                >
                  Hospitals
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/treatments" legacyBehavior passHref>
                <NavigationMenuLink
                  className={cn(navigationMenuTriggerStyle(), "hover:bg-green-50 hover:text-green-700")}
                >
                  Treatments
                </NavigationMenuLink>
              </Link>
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
            <span>+91 8527896172</span>
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
