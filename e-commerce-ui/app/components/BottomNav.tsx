'use client'

import Link from 'next/link'
import { Home, ShoppingCart, Heart } from 'lucide-react'
import { usePathname } from 'next/navigation'

export default function BottomNav() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t px-4 py-2">
      <div className="flex justify-around items-center">
        <Link 
          href="/"
          className={`flex flex-col items-center ${pathname === '/' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <Home size={24} />
          <span className="text-xs">Home</span>
        </Link>
        <Link 
          href="/cart"
          className={`flex flex-col items-center ${pathname === '/cart' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <ShoppingCart size={24} />
          <span className="text-xs">Cart</span>
        </Link>
        <Link 
          href="/favorites"
          className={`flex flex-col items-center ${pathname === '/favorites' ? 'text-blue-600' : 'text-gray-600'}`}
        >
          <Heart size={24} />
          <span className="text-xs">Favorites</span>
        </Link>
      </div>
    </div>
  )
}

