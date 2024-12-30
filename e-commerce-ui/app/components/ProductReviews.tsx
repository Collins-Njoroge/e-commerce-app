import { Star } from 'lucide-react'
import Image from 'next/image'

interface ProductReviewsProps {
  productId: string
}

interface ReviewMedia {
  type: 'image' | 'video'
  url: string
}

interface Review {
  id: number
  user: string
  rating: number
  comment: string
  media: ReviewMedia[]
}

// This would typically come from a database or API
const reviews: Review[] = [
  {
    id: 1,
    user: "John D.",
    rating: 5,
    comment: "Great product, highly recommended!",
    media: [
      { type: 'image', url: '/s.png' },
      { type: 'image', url: '/s.png' },
    ]
  },
  {
    id: 2,
    user: "Sarah M.",
    rating: 4,
    comment: "Good quality, but a bit pricey.",
    media: [
      { type: 'image', url: '/s.png' },
    ]
  },
  {
    id: 3,
    user: "Mike R.",
    rating: 5,
    comment: "Excellent quality and fast delivery.",
    media: [
      { type: 'image', url: '/s.png' },
    ]
  },
]

export default function ProductReviews({ productId }: ProductReviewsProps) {
  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">Customer Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-6">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.user}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
            <p className="text-gray-600 mb-4">{review.comment}</p>
            {review.media && review.media.length > 0 && (
              <div className="grid grid-cols-3 gap-2">
                {review.media.map((item, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    {item.type === 'image' ? (
                      <Image
                        src={item.url || '/placeholder.svg'}
                        alt={`Review media ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <video
                        src={item.url}
                        className="w-full h-full object-cover"
                        controls
                      />
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

