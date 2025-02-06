import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Welcome to Shosta</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">Discover amazing products from vendors worldwide</p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/products">
                Start Shopping
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="Shopping illustration"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

