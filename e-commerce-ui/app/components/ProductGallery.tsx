'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductGalleryProps {
  images: string[]
  video?: string
}

export default function ProductGallery({ images, video }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  // Ensure we have valid images
  const validImages = images.filter(img => img && img.length > 0)

  return (
    <div>
      <div className="mb-4 relative aspect-square">
        {activeIndex < validImages.length ? (
          <Image
            src={validImages[activeIndex]}
            alt={`Product image ${activeIndex + 1}`}
            fill
            className="object-cover rounded-lg"
          />
        ) : video ? (
          <video
            src={video}
            controls
            className="w-full h-full object-cover rounded-lg"
          />
        ) : (
          <Image
            src="/placeholder.svg"
            alt="Product image placeholder"
            fill
            className="object-cover rounded-lg"
          />
        )}
      </div>
      <div className="grid grid-cols-5 gap-2">
        {validImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`relative aspect-square ${
              activeIndex === index ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <Image
              src={image}
              alt={`Product thumbnail ${index + 1}`}
              fill
              className="object-cover rounded-lg"
            />
          </button>
        ))}
        {video && (
          <button
            onClick={() => setActiveIndex(validImages.length)}
            className={`relative aspect-square ${
              activeIndex === validImages.length ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="relative w-full h-full">
              <Image
                src="/placeholder.svg"
                alt="Video thumbnail"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </button>
        )}
      </div>
    </div>
  )
}

