import Image from 'next/image'
import Link from 'next/link'

interface SimilarProductsProps {
  productId: string
}

// This would typically come from a database or API based on the current product
const similarProducts = [
  { id: 2, name: "Smart Watch", price: 129.99, image: "/s.png" },
  { id: 3, name: "Bluetooth Speaker", price: 79.99, image: "/s.png" },
  { id: 4, name: "Noise-Cancelling Headphones", price: 199.99, image: "/s.png" },
]

export default function SimilarProducts({ productId }: SimilarProductsProps) {
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {similarProducts.map((product) => (
          <Link key={product.id} href={`/product/${product.id}`} className="group">
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform group-hover:scale-105">
              <div className="relative aspect-square">
                <Image
                  src={product.image || '/placeholder.svg'}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
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

