import Link from "next/link"

export default function OrderConfirmationPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Thank You for Your Order!</h1>
      <p className="mb-8">Your order has been successfully placed and is being processed.</p>
      <Link
        href="/"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
      >
        Continue Shopping
      </Link>
    </div>
  )
}

