"use client"

import { useState } from "react"
import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"

// Dummy cart data (Replace with state management or API call in real app)
const initialCartItems = [
  { id: 1, name: "Smartphone", price: 599.99, quantity: 1, img: "https://via.placeholder.com/80" },
  { id: 2, name: "T-Shirt", price: 19.99, quantity: 2, img: "https://via.placeholder.com/80" },
]

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
    }
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600 text-lg text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b pb-4">
                <img src={item.img} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-gray-900">{item.name}</h2>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <input
                    type="text"
                    value={item.quantity}
                    readOnly
                    className="w-12 text-center border rounded-md"
                  />
                  <button
                    className="bg-gray-200 p-2 rounded-md hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 hover:text-red-800 ml-4"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-xl font-semibold text-gray-900">Total: ${total.toFixed(2)}</p>
            <Link href="/checkout">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
