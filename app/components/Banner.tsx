'use client';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Banner() {
  return (
    <section className="bg-[url(https://img.freepik.com/free-photo/metallic-shopping-cart-empty-supermarket-aisle-generated-by-ai_188544-53810.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming)] bg-contain text-white min-h-[90vh] py-20">
      <div className="container mx-auto px-4 relative top-52">
        <div className="flex flex-col md:flex-row items-end justify-between">
          <div className="md:mb-0 md:mr-8 bg-[hsl(302.67deg 49.45% 82.16%)] shadow-2xl rounded-xl p-4">
            <h1 className="text-5xl md:text-5xl font-bold mb-4">Welcome to Shosta</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">Discover amazing products from vendors worldwide</p>
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <Link href="/products">
                Start Shopping
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </div>
          
          {/* Image section with 3 images */}
          <div className="w-full md:w-2/3 lg:w-2/3 mt-8 md:mt-0">
            <div className="flex space-x-4 justify-center">
              {/* First Image with hover effect and typing animation */}
              <ProductImage
                imgSrc="https://img.freepik.com/free-photo/modern-warehouse_23-2148507280.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming"
                title="Product 1"
                description="Description of the product."
              />

              {/* Second Image with hover effect and typing animation */}
              <ProductImage
                imgSrc="https://img.freepik.com/free-photo/hand-holding-shopping-bags_23-2147491522.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming"
                title="Product 2"
                description="Description of the product."
              />

              {/* Third Image with hover effect and typing animation */}
              <ProductImage
                imgSrc="https://img.freepik.com/free-photo/stack-of-clothes-on-shelves-in-shopping-mall_23-2148507280.jpg?uid=R183282195&ga=GA1.1.1103696323.1736837892&semt=ais_incoming"
                title="Product 3"
                description="Description of the product."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Individual Product Image Component
function ProductImage({ imgSrc, title, description }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-1/3 transform transition-all duration-300 hover:scale-105 hover:rotate-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-auto rounded-lg shadow-lg"
      />
      
      {/* Product details with hover effect */}
      <div
        className={`absolute inset-0 bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 flex items-center justify-center text-center ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white">
          <div className="text-lg font-bold">{title}</div>
          <div className="text-sm">{description}</div>
          {isHovered && <TypingEffect />}
        </div>
      </div>
    </div>
  );
}

// Typing animation component
function TypingEffect() {
  const [text, setText] = useState("");
  const fullText = "Details: High-quality, durable, stylish, affordable."; // Change this to whatever you want to type.

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length) {
        clearInterval(intervalId);
      }
    }, 100); // Adjust speed here

    return () => clearInterval(intervalId);
  }, []);

  return <div>{text}</div>;
}
