"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const [submitted, setSubmitted] = useState(false)
  const [date, setDate] = useState<Date>()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Book Your Medical Treatment</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Fill out the form below to request a consultation with our medical experts.
        </p>
      </div>

      {submitted ? (
        <Card className="max-w-2xl mx-auto">
          <CardContent className="pt-6 text-center">
            <div className="flex flex-col items-center gap-4">
              <CheckCircle className="h-16 w-16 text-green-600" />
              <h2 className="text-2xl font-bold">Booking Request Submitted!</h2>
              <p className="text-muted-foreground">
                Thank you for your booking request. Our medical coordinator will contact you within 24 hours to discuss
                your treatment options.
              </p>
              <Button onClick={() => setSubmitted(false)} className="mt-4">
                Submit Another Request
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Consultation Request Form</CardTitle>
            <CardDescription>
              Please provide your details and medical requirements to help us serve you better.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="step1" value={`step${step}`}>
              <TabsList className="grid w-full grid-cols-3 mb-8 bg-green-100">
                <TabsTrigger
                  value="step1"
                  onClick={() => setStep(1)}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Personal Details
                </TabsTrigger>
                <TabsTrigger
                  value="step2"
                  onClick={() => setStep(2)}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Medical Information
                </TabsTrigger>
                <TabsTrigger
                  value="step3"
                  onClick={() => setStep(3)}
                  className="data-[state=active]:bg-green-600 data-[state=active]:text-white"
                >
                  Preferences
                </TabsTrigger>
              </TabsList>
              <form onSubmit={handleSubmit}>
                <TabsContent value="step1">
                  <div className="grid gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number with country code" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="country">Country</Label>
                        <Select>
                          <SelectTrigger id="country">
                            <SelectValue placeholder="Select your country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="us">United States</SelectItem>
                            <SelectItem value="uk">United Kingdom</SelectItem>
                            <SelectItem value="ca">Canada</SelectItem>
                            <SelectItem value="au">Australia</SelectItem>
                            <SelectItem value="uae">UAE</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input id="age" type="number" placeholder="Enter your age" required />
                      </div>
                    </div>
                    <Button type="button" onClick={() => setStep(2)} className="mt-4 bg-green-600 hover:bg-green-700">
                      Next Step
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="step2">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="treatment">Treatment Required</Label>
                      <Select>
                        <SelectTrigger id="treatment">
                          <SelectValue placeholder="Select treatment type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="cardiac">Cardiac Surgery</SelectItem>
                          <SelectItem value="orthopedic">Orthopedic Surgery</SelectItem>
                          <SelectItem value="neurology">Neurosurgery</SelectItem>
                          <SelectItem value="oncology">Cancer Treatment</SelectItem>
                          <SelectItem value="fertility">Fertility Treatment</SelectItem>
                          <SelectItem value="dental">Dental Procedure</SelectItem>
                          <SelectItem value="cosmetic">Cosmetic Surgery</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="condition">Medical Condition</Label>
                      <Textarea id="condition" placeholder="Please describe your medical condition" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="diagnosis">Previous Diagnosis</Label>
                      <Textarea id="diagnosis" placeholder="Any previous diagnosis or treatments" rows={3} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reports">Medical Reports</Label>
                      <div className="flex items-center gap-2">
                        <Input id="reports" type="file" multiple />
                        <p className="text-xs text-muted-foreground">Upload your medical reports (optional)</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-4">
                      <Button type="button" variant="outline" onClick={() => setStep(1)}>
                        Previous Step
                      </Button>
                      <Button type="button" onClick={() => setStep(3)}>
                        Next Step
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="step3">
                  <div className="grid gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="hospital">Preferred Hospital (Optional)</Label>
                      <Select>
                        <SelectTrigger id="hospital">
                          <SelectValue placeholder="Select preferred hospital" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="apollo">Apollo Hospitals</SelectItem>
                          <SelectItem value="fortis">Fortis Healthcare</SelectItem>
                          <SelectItem value="medanta">Medanta - The Medicity</SelectItem>
                          <SelectItem value="max">Max Super Speciality Hospital</SelectItem>
                          <SelectItem value="manipal">Manipal Hospitals</SelectItem>
                          <SelectItem value="no_preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="city">Preferred City (Optional)</Label>
                      <Select>
                        <SelectTrigger id="city">
                          <SelectValue placeholder="Select preferred city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="no_preference">No Preference</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred Travel Date (Optional)</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !date && "text-muted-foreground",
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP") : "Select your preferred date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget Range (USD)</Label>
                      <Select>
                        <SelectTrigger id="budget">
                          <SelectValue placeholder="Select your budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under5k">Under $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-20k">$10,000 - $20,000</SelectItem>
                          <SelectItem value="20k-30k">$20,000 - $30,000</SelectItem>
                          <SelectItem value="above30k">Above $30,000</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="additional">Additional Requirements</Label>
                      <Textarea id="additional" placeholder="Any additional requirements or questions" rows={3} />
                    </div>
                    <div className="flex gap-4 mt-4">
                      <Button type="button" variant="outline" onClick={() => setStep(2)}>
                        Previous Step
                      </Button>
                      <Button type="submit" className="bg-green-600 hover:bg-green-700">
                        Submit Request
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </form>
            </Tabs>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

