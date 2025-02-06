import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Banner from "./components/Banner"
import OfferCarousel from "./components/OfferCarousel"

export default function Home() {
  const featuredCategories = [
    {
      name: "Electronics",
      image: "/placeholder.svg?height=200&width=200",
      description: "Cutting-edge gadgets and devices",
    },
    { name: "Clothing", image: "/placeholder.svg?height=200&width=200", description: "Trendy and comfortable apparel" },
    {
      name: "Home & Garden",
      image: "/placeholder.svg?height=200&width=200",
      description: "Beautify your living spaces",
    },
    {
      name: "Books",
      image: "/placeholder.svg?height=200&width=200",
      description: "Expand your knowledge and imagination",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Banner />

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">Special Offers</h2>
          <OfferCarousel />
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center text-primary-800">Featured Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredCategories.map((category) => (
            <Card key={category.name} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary-700">{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-48 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/category/${category.name.toLowerCase()}`}>Explore {category.name}</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Become a Seller on Shosta</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start selling your products to millions of customers today and grow your business with our powerful
            platform.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <Link href="/register-shop">
              Get Started
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

