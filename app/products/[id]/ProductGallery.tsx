"use client"

import { useState } from "react"
import Image from "next/image"

export default function ProductGallery({ images }: { images: string[] }) {
  const [mainImage, setMainImage] = useState(images[0])

  return (
    <div>
      <div className="mb-4 aspect-square relative">
        <Image
          src={mainImage || "/placeholder.svg"}
          alt="Product"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
      </div>
      <div className="flex gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            className={`w-40 h-40 relative rounded-md overflow-hidden ${
              image === mainImage ? "ring-2 ring-primary-600" : ""
            }`}
            onClick={() => setMainImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product thumbnail ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

