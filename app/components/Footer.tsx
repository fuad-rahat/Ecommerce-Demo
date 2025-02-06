import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Shosta</h3>
            <p className="text-gray-400">
              Shosta is a multivendor marketplace where you can find products from various sellers.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary-200">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary-200">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary-200">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/category/electronics" className="text-gray-400 hover:text-primary-200">
                  Electronics
                </Link>
              </li>
              <li>
                <Link href="/category/clothing" className="text-gray-400 hover:text-primary-200">
                  Clothing
                </Link>
              </li>
              <li>
                <Link href="/category/home-and-garden" className="text-gray-400 hover:text-primary-200">
                  Home & Garden
                </Link>
              </li>
              <li>
                <Link href="/category/books" className="text-gray-400 hover:text-primary-200">
                  Books
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-200">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; 2023 Shosta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

