import Image from 'next/image'
import Link from 'next/link'

const products = [
  { id: 1, name: "Wireless Earbuds", price: 59.99, image: "/placeholder.svg" },
  { id: 2, name: "Smart Watch", price: 129.99, image: "/placeholder.svg" },
  { id: 3, name: "Laptop Backpack", price: 49.99, image: "/placeholder.svg" },
  { id: 4, name: "Portable Charger", price: 29.99, image: "/placeholder.svg" },
  { id: 5, name: "Bluetooth Speaker", price: 79.99, image: "/placeholder.svg" },
  { id: 6, name: "Fitness Tracker", price: 89.99, image: "/placeholder.svg" },
]

export default function ProductGrid() {
  return (
    <div className="flex-grow">
      <h2 className="text-2xl font-semibold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

