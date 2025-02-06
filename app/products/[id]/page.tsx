import { notFound } from "next/navigation"
import AddToCartButton from "./AddToCartButton"
import ProductGallery from "./ProductGallery"
import { Star, Truck, RefreshCcw, ShieldCheck } from "lucide-react"

const products = [
  {
    id: "1",
    name: "Smartphone",
    price: 599.99,
    description:
      "A high-end smartphone with advanced features. This device offers cutting-edge technology, a powerful camera system, and long-lasting battery life.",
    images: [
      "https://img.freepik.com/free-vector/dark-themed-mobile-phone-surrounded-by-apps_52683-23826.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
      "https://img.freepik.com/premium-psd/smartphone-mockup-floating_772836-946.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
      "https://img.freepik.com/free-vector/home-screen-concept-illustration_114360-4703.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
    ],
    rating: 4.5,
    reviews: 120,
    specs: [
      { name: "Display", value: '6.5" OLED' },
      { name: "Processor", value: "Octa-core" },
      { name: "RAM", value: "8GB" },
      { name: "Storage", value: "128GB" },
      { name: "Camera", value: "48MP + 12MP + 8MP" },
      { name: "Battery", value: "4500mAh" },
    ],
  },
  {
    id: "2",
    name: "Laptop",
    price: 999.99,
    description: "A powerful laptop for work and entertainment.",
    images: [
      "https://img.freepik.com/free-photo/laptop-with-white-screen-isolated-white-wall_231208-8594.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
      "https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
      "https://img.freepik.com/free-psd/macbook-mockup-floating_1332-60671.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming",
    ],
    rating: 4,
    reviews: 85,
    specs: [
      { name: "Display", value: '15.6" IPS' },
      { name: "Processor", value: "Intel Core i7" },
      { name: "RAM", value: "16GB" },
      { name: "Storage", value: "512GB SSD" },
    ],
  },
  {
    id: "3",
    name: "Headphones",
    price: 149.99,
    description: "Noise-cancelling headphones for immersive audio experience.",
    images: ["https://img.freepik.com/free-photo/recording-human-icon-stereo-wireless_1232-3551.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming", "https://img.freepik.com/free-vector/bright-headphones-music-wallpaper_98292-3988.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming"],
    rating: 4.8,
    reviews: 250,
    specs: [
      { name: "Driver Size", value: "40mm" },
      { name: "Connectivity", value: "Bluetooth 5.0" },
      { name: "Battery Life", value: "25 hours" },
    ],
  },
  {
    id: "4",
    name: "T-Shirt",
    price: 19.99,
    description: "A comfortable cotton t-shirt for everyday wear.",
    images: ["https://img.freepik.com/free-photo/black-t-shirt-with-word-kiri-1-it_1340-37795.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming"],
    rating: 3.9,
    reviews: 50,
    specs: [
      { name: "Material", value: "100% Cotton" },
      { name: "Size", value: "S, M, L, XL" },
    ],
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-1/2">
          <ProductGallery images={product.images} />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-4xl font-bold mb-4 text-primary-800">{product.name}</h1>
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${
                    i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-gray-600">({product.reviews} reviews)</span>
          </div>
          <p className="text-3xl font-semibold mb-6 text-primary-600">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6 leading-relaxed">{product.description}</p>
          <AddToCartButton product={product} />
          <div className="mt-8 space-y-4">
            <div className="flex items-center text-gray-700">
              <Truck className="w-5 h-5 mr-2 text-primary-500" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center text-gray-700">
              <RefreshCcw className="w-5 h-5 mr-2 text-primary-500" />
              <span>30-day return policy</span>
            </div>
            <div className="flex items-center text-gray-700">
              <ShieldCheck className="w-5 h-5 mr-2 text-primary-500" />
              <span>2-year warranty</span>
            </div>
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4 text-primary-700">Specifications</h2>
            <ul className="space-y-2 bg-gray-50 p-4 rounded-lg">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium text-gray-600">{spec.name}</span>
                  <span className="text-gray-800">{spec.value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

