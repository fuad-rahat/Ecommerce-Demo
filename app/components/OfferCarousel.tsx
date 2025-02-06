"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const offers = [
  { id: 1, title: "50% OFF", description: "On all Electronics - Limited Time Offer!", img: "https://img.freepik.com/free-vector/realistic-shopping-online-landing-page-template_23-2148522598.jpg" },
  { id: 2, title: "Summer Sale", description: "Up to 30% OFF on Select Items - Shop Now!", img: "https://img.freepik.com/free-photo/books-beach_1048-4666.jpg" },
  { id: 3, title: "Free Shipping", description: "On Orders Over $50 - Don't Miss Out!", img: "https://img.freepik.com/free-photo/town-park-with-benches-fireplace_114579-13022.jpg" },
  { id: 4, title: "New Arrivals", description: "Discover the Latest Products in Our Collection", img: "https://img.freepik.com/free-photo/modern-warehouse_23-2148507280.jpg" }
];

export default function OfferCarousel() {
  const [active, setActive] = useState(0);

  const nextOffer = () => setActive((prev) => (prev + 1) % offers.length);
  const prevOffer = () => setActive((prev) => (prev - 1 + offers.length) % offers.length);

  useEffect(() => {
    const timer = setInterval(nextOffer, 5000);
    return () => clearInterval(timer);
  }, [nextOffer]);

  return (
    <div className="relative bg-gradient-to-r from-blue-50 via-pink-50 to-yellow-50  rounded-lg overflow-hidden shadow-lg">
      {/* Header Section */}
      <div className="text-center py-8">
        <h2 className="text-4xl font-semibold text-gray-800">Special Offers Just for You!</h2>
        <p className="text-lg text-gray-600 mt-2">Exclusive deals on our best products. Don't miss out on these limited-time discounts!</p>
      </div>

      <div className="overflow-hidden">
        <div
          className="flex transition-transform  duration-300 ease-in-out"
          style={{ transform: `translateX(-${active * 100}%)` }}
        >
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className={`w-full h-[20rem] flex-shrink-0  bg-center rounded-lg shadow-sm`}
              style={{ backgroundImage: `url(${offer.img})` }}
            >
              {/* <CardHeader className="bg-black bg-opacity-40 p-6 rounded-t-lg">
                <CardTitle className="text-3xl font-bold text-white">{offer.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 bg-black bg-opacity-50 rounded-b-lg">
                <CardDescription className="text-lg text-white">{offer.description}</CardDescription>
              </CardContent> */}
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6">
        <Button variant="outline" size="icon" onClick={prevOffer} className="bg-gray-300 text-gray-700 hover:bg-gray-400">
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button variant="outline" size="icon" onClick={nextOffer} className="bg-gray-300 text-gray-700 hover:bg-gray-400">
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
