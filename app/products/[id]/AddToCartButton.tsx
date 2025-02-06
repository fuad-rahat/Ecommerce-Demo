"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ShoppingCart, Plus, Minus } from "lucide-react"

interface Product {
  id: string
  name: string
  price: number
}

export default function AddToCartButton({ product }: { product: Product }) {
  const router = useRouter()
  const [quantity, setQuantity] = useState(1)

  const addToCart = () => {
    // In a real application, you would update the cart state here
    console.log(`Added ${quantity} ${product.name}(s) to cart`)
    router.push("/cart")
  }

  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center border rounded-md">
        <button
          className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setQuantity(Math.max(1, quantity - 1))}
        >
          <Minus size={20} />
        </button>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number.parseInt(e.target.value))}
          className="w-12 text-center border-x py-2"
        />
        <button
          className="p-2 text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setQuantity(quantity + 1)}
        >
          <Plus size={20} />
        </button>
      </div>
      <button
        onClick={addToCart}
        className="flex items-center bg-primary-600 text-white px-6 py-3 rounded-md hover:bg-primary-700 transition-colors"
      >
        <ShoppingCart className="mr-2" size={20} />
        Add to Cart
      </button>
    </div>
  )
}

