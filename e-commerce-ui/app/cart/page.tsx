'use client'

import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import BottomNav from '../components/BottomNav'

export default function CartPage() {
  const router = useRouter()

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
            <h1 className="text-xl font-semibold">Cart</h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-4">
        <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
      </div>

      <BottomNav />
    </div>
  )
}

