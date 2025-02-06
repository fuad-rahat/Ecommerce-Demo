"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const offers = [
  { id: 1, title: "50% OFF", description: "on all Electronics" },
  { id: 2, title: "Summer Sale", description: "Up to 30% OFF" },
  { id: 3, title: "Free Shipping", description: "on orders over $50" },
  { id: 4, title: "New Arrivals", description: "Check out our latest products" },
]

export default function OfferCarousel() {
  const [active, setActive] = useState(0)

  const nextOffer = () => setActive((prev) => (prev + 1) % offers.length)
  const prevOffer = () => setActive((prev) => (prev - 1 + offers.length) % offers.length)

  useEffect(() => {
    const timer = setInterval(nextOffer, 5000)
    return () => clearInterval(timer)
  }, [nextOffer]) // Added nextOffer to dependencies

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {offers.map((offer) => (
            <Card key={offer.id} className="w-full flex-shrink-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary-600">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-lg">{offer.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4">
        <Button variant="outline" size="icon" onClick={prevOffer}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextOffer}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

