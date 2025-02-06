import Link from "next/link"

const products = {
  electronics: [
    { id: 1, name: "Smartphone", price: 599.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 2, name: "Laptop", price: 999.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 3, name: "Headphones", price: 149.99, image: "/placeholder.svg?height=200&width=200" },
  ],
  clothing: [
    { id: 4, name: "T-Shirt", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 5, name: "Jeans", price: 49.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 6, name: "Sneakers", price: 79.99, image: "/placeholder.svg?height=200&width=200" },
  ],
  "home & garden": [
    { id: 7, name: "Sofa", price: 499.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "Dining Table", price: 299.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 9, name: "Garden Tools Set", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
  ],
  books: [
    { id: 10, name: "Fiction Bestseller", price: 24.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 11, name: "Cookbook", price: 34.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 12, name: "Self-Help Book", price: 19.99, image: "/placeholder.svg?height=200&width=200" },
  ],
}

export default function CategoryPage({ params }: { params: { name: string } }) {
  const categoryName = params.name.toLowerCase()
  const categoryProducts = products[categoryName as keyof typeof products] || []

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8 capitalize">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

