'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Minus, Plus, X } from 'lucide-react'

interface QuantityPopupProps {
  product: {
    id: number
    name: string
    price: number
    image: string
  }
  isOpen: boolean
  onClose: () => void
  onConfirm: (quantity: number) => void
  mode: 'cart' | 'order'
}

export default function QuantityPopup({ product, isOpen, onClose, onConfirm, mode }: QuantityPopupProps) {
  const [quantity, setQuantity] = useState(1)

  if (!isOpen) return null

  const total = product.price * quantity

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden">
        <div className="p-4 border-b relative">
          <h3 className="text-lg font-semibold text-center">
            {mode === 'cart' ? 'Add to Cart' : 'Order Now'}
          </h3>
          <button 
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-4">
          <div className="flex gap-4 mb-6">
            <div className="relative w-24 h-24">
              <Image
                src={product.image || '/placeholder.svg'}
                alt={product.name}
                fill
                className="rounded-lg object-cover"
              />
            </div>
            <div>
              <h4 className="font-semibold">{product.name}</h4>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
              <Minus size={20} />
            </button>
            <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="w-10 h-10 rounded-full border flex items-center justify-center"
            >
              <Plus size={20} />
            </button>
          </div>
          <div className="text-center mb-6">
            <p className="text-gray-600">Total Amount:</p>
            <p className="text-2xl font-bold">${total.toFixed(2)}</p>
          </div>
          <button
            onClick={() => onConfirm(quantity)}
            className="w-full py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  )
}

