import Link from "next/link"
import { Star } from "lucide-react"

const products = [
  { id: "1", name: "Smartphone", price: 599.99, rating: 4.5, image: "/placeholder.svg?height=300&width=300" },
  { id: "2", name: "Laptop", price: 999.99, rating: 4.2, image: "/placeholder.svg?height=300&width=300" },
  { id: "3", name: "Headphones", price: 149.99, rating: 4.8, image: "/placeholder.svg?height=300&width=300" },
  { id: "4", name: "T-Shirt", price: 19.99, rating: 4.0, image: "/placeholder.svg?height=300&width=300" },
]

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary-800">All Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`} className="group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2 text-primary-700 group-hover:text-primary-500 transition-colors">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">({product.rating})</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

