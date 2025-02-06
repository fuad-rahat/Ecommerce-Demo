import Link from "next/link"
import { Facebook, Twitter, Instagram, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[url(https://img.freepik.com/premium-photo/eshop-ecommerce-shopping-groceries-online-supermarket-basket-laptop-3d-illustration_771335-2076.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming)] bg-contain  text-white">
      <section className=" relative right-80 text-white py-16 ">
        <div className="container  px-4 text-center">
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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Shosta</h3>
            <p className="text-white">
              Shosta is a multivendor marketplace where you can find products from various sellers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-white hover:text-primary-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white hover:text-primary-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-white hover:text-primary-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-white hover:text-primary-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/electronics" className="text-white hover:text-primary-200">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/clothing" className="text-white hover:text-primary-200">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/category/home-and-garden" className="text-white hover:text-primary-200">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link href="/category/books" className="text-white hover:text-primary-200">
                  Books
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-primary-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-white hover:text-primary-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-white">&copy; 2023 Shosta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

