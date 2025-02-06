import Link from "next/link"
import { ShoppingCart, Search, Menu, User } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary-600">
          Shosta
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/category/electronics" className="text-gray-600 hover:text-primary-600 transition-colors">
            Electronics
          </Link>
          <Link href="/category/clothing" className="text-gray-600 hover:text-primary-600 transition-colors">
            Clothing
          </Link>
          <Link href="/category/home-and-garden" className="text-gray-600 hover:text-primary-600 transition-colors">
            Home & Garden
          </Link>
          <Link href="/category/books" className="text-gray-600 hover:text-primary-600 transition-colors">
            Books
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <form className="hidden md:block relative">
            <input
              type="text"
              placeholder="Search products..."
              className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
          </form>
          <Link href="/cart" className="text-gray-600 hover:text-primary-600 transition-colors">
            <ShoppingCart size={24} />
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <User size={24} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link href="/profile">Profile</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/orders">Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings">Settings</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu size={24} />
          </Button>
        </div>
      </div>
    </header>
  )
}

