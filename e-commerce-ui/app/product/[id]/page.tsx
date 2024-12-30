'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Star, Heart, ArrowLeft } from 'lucide-react'
import ProductGallery from '../../components/ProductGallery'
import ProductReviews from '../../components/ProductReviews'
import SimilarProducts from '../../components/SimilarProducts'
import QuantityPopup from '../../components/QuantityPopup'
import BottomNav from '../../components/BottomNav'

// This would typically come from a database or API
const product = {
  id: 1,
  name: "UPNGI Fashion Necklace",
  price: 59.99,
  rating: 4,
  description: "Elegant butterfly pendant necklace featuring a unique geometric design. Perfect for both casual and formal occasions. The necklace showcases exceptional craftsmanship with its delicate butterfly motif and high-quality alloy chain.",
  specifications: [
    {
      category: "Material",
      details: "High-quality alloy with gold plating"
    },
    {
      category: "Chain Length",
      details: "45cm + 5cm extension chain"
    },
    {
      category: "Style",
      details: "Fashion, Casual, Elegant"
    },
    {
      category: "Closure Type",
      details: "Lobster clasp"
    },
    {
      category: "Water Resistance",
      details: "Not water resistant - avoid contact with water"
    },
    {
      category: "Occasion",
      details: "Daily wear, Party, Dating, Gift"
    },
    {
      category: "Package Includes",
      details: "1 x Necklace with gift box"
    }
  ],
  images: [
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
    "/placeholder.svg",
  ],
  video: "/placeholder-video.mp4",
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [showCartPopup, setShowCartPopup] = useState(false)
  const [showOrderPopup, setShowOrderPopup] = useState(false)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    setIsFavorite(favorites.includes(Number(params.id)))
  }, [params.id])

  const handleAddToCart = (quantity: number) => {
    // Add to cart logic here
    setShowCartPopup(false)
    router.push('/cart')
  }

  const handleOrderNow = (quantity: number) => {
    // Order now logic here
    setShowOrderPopup(false)
  }

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]')
    const productId = Number(params.id)
    
    if (isFavorite) {
      const updatedFavorites = favorites.filter((id: number) => id !== productId)
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites))
      setIsFavorite(false)
    } else {
      favorites.push(productId)
      localStorage.setItem('favorites', JSON.stringify(favorites))
      setIsFavorite(true)
    }
  }

  return (
    <div className="pb-20"> {/* Add padding bottom for bottom nav */}
      <div className="sticky top-0 z-10 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center h-14">
            <button 
              onClick={() => router.back()}
              className="mr-4"
            >
              <ArrowLeft size={24} />
            </button>
            <div className="flex-1">
              <input
                type="search"
                placeholder="Search products..."
                className="w-full px-4 py-2 bg-gray-100 rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <ProductGallery images={product.images} video={product.video} />
        
        <div className="mt-6">
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                }`}
              />
            ))}
            <span className="ml-2 text-gray-600">({product.rating}/5)</span>
          </div>
          <p className="text-2xl font-bold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
        </div>

        <ProductReviews productId={params.id} />

        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Specifications</h2>
          <div className="space-y-4">
            {product.specifications.map((spec, index) => (
              <div key={index} className="border-b pb-4">
                <h3 className="font-semibold text-gray-700">{spec.category}</h3>
                <p className="text-gray-600">{spec.details}</p>
              </div>
            ))}
          </div>
        </div>

        <SimilarProducts productId={params.id} />
      </div>

      <div className="fixed bottom-16 left-0 right-0 bg-white border-t px-4 py-3">
        <div className="flex gap-4">
          <button
            onClick={() => setShowCartPopup(true)}
            className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Add to Cart
          </button>
          <button
            onClick={() => setShowOrderPopup(true)}
            className="flex-1 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700"
          >
            Order Now
          </button>
          <button 
            onClick={toggleFavorite}
            className={`w-12 h-12 flex items-center justify-center border rounded-full ${
              isFavorite ? 'bg-red-100' : ''
            }`}
          >
            <Heart className={`w-6 h-6 ${isFavorite ? 'text-red-500 fill-current' : 'text-gray-400'}`} />
          </button>
        </div>
      </div>

      <BottomNav />

      <QuantityPopup
        product={product}
        isOpen={showCartPopup}
        onClose={() => setShowCartPopup(false)}
        onConfirm={handleAddToCart}
        mode="cart"
      />

      <QuantityPopup
        product={product}
        isOpen={showOrderPopup}
        onClose={() => setShowOrderPopup(false)}
        onConfirm={handleOrderNow}
        mode="order"
      />
    </div>
  )
}

