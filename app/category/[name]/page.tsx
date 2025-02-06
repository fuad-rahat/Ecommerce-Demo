import Link from "next/link"

const products = {
  electronics: [
    { id: 1, name: "Smartphone", price: 599.99, image: "https://img.freepik.com/free-photo/flatlay-smartphone-accessories_53876-33530.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
    { id: 2, name: "Laptop", price: 999.99, image: "https://img.freepik.com/free-vector/top-view-dark-laptop-background-template_52683-5985.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
    { id: 3, name: "Headphones", price: 149.99, image: "https://img.freepik.com/free-vector/headphones-listen-music-dj-audio-headset_107791-12548.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
  ],
  clothing: [
    { id: 4, name: "T-Shirt", price: 19.99, image: "https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
    { id: 5, name: "Jeans", price: 49.99, image: "https://img.freepik.com/free-photo/wide-assortment-jeans-hanging-store_627829-6053.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
    { id: 6, name: "Sneakers", price: 79.99, image: "https://img.freepik.com/free-photo/top-view-sneakers-white-background-fitness-wear-equipment-sport-fashion-sport-accessories-sport-equipment-healthy-concept-copy-space-concept-healthy-lifestyle-sport-diet-sport-equipment_1391-725.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
  ],
  "home & garden": [
    { id: 7, name: "Sofa", price: 499.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 8, name: "Dining Table", price: 299.99, image: "/placeholder.svg?height=200&width=200" },
    { id: 9, name: "Garden Tools Set", price: 89.99, image: "/placeholder.svg?height=200&width=200" },
  ],
  books: [
    { id: 10, name: "Fiction Bestseller", price: 24.99, image: "https://img.freepik.com/free-vector/alien-ufo-composition-with-outdoor-view-city-extraterrestrial-invasion-with-burning-cars-walking-cyborg_1284-60016.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
    { id: 11, name: "Cookbook", price: 34.99, image: "https://img.freepik.com/free-vector/delicious-salad-recipes-illustrated_1308-178082.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
    { id: 12, name: "Self-Help Book", price: 19.99, image: "https://img.freepik.com/free-vector/young-woman-standing-front-mirror-motivate-confident-you-can-it-vector-illustration_10045-633.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming" },
  ],
}

export default function CategoryPage({ params }: { params: { name: string } }) {
  const categoryName = params.name.toLowerCase()
  const categoryProducts = products[categoryName as keyof typeof products] || []

  return (
    <div className="px-5">
      <h1 className="text-3xl font-bold mb-8  capitalize">{categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categoryProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <div className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <img src={product.image || "/placeholder.svg"} alt={product.name} className="w-full h-60 object-cover" />
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

