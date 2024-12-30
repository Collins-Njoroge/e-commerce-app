'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import BottomNav from '../components/BottomNav'

// This would typically come from a database or API
const allProducts = [
  { id: 1, name: "UPNGI Fashion Necklace", price: 59.99, image: "/placeholder.svg" },
  { id: 2, name: "Smart Watch", price: 129.99, image: "/placeholder.svg" },
  { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "/placeholder.svg" },
  { id: 4, name: "Noise-Cancelling Headphones", price: 199.99, image: "/placeholder.svg" },
]

export default function FavoritesPage() {
  const router = useRouter()
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setFavorites(storedFavorites)
  }, [])

  const favoriteProducts = allProducts.filter(product => favorites.includes(product.id))

  return (
    <div className="pb-20">
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14">
            <button 
              onClick={() => router.back()}
              className="mr-4"
            >
              <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-semibold">Favorites</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        {favoriteProducts.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">No favorite products yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {favoriteProducts.map(product => (
              <Link key={product.id} href={`/product/${product.id}`} className="block">
                <div className="border rounded-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-2">
                    <h2 className="font-semibold truncate">{product.name}</h2>
                    <p className="text-gray-600">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  )
}

