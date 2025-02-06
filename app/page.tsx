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
      image: "https://img.freepik.com/free-vector/electronics-store-template-design_23-2151143820.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
      description: "Cutting-edge gadgets and devices",
    },
    { name: "Clothing", image: "https://img.freepik.com/free-photo/lot-different-clothes-hanging-wardrobe_181624-16122.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming", description: "Trendy and comfortable apparel" },
    {
      name: "Home & Garden",
      image: "https://img.freepik.com/free-photo/town-park-with-benches-fireplace_114579-13022.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
      description: "Beautify your living spaces",
    },
    {
      name: "Books",
      image: "https://img.freepik.com/free-photo/books-beach_1048-4666.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
      description: "Expand your knowledge and imagination",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
     <div className=" ">
     <Banner />
     </div>

      <section className="bg-gray-50 ">
        <div className="c">
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

      
    </div>
  )
}

