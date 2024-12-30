import Link from 'next/link'

const categories = [
  "Electronics",
  "Clothing",
  "Home & Garden",
  "Sports & Outdoors",
  "Beauty & Personal Care",
  "Toys & Games",
  "Books",
  "Automotive",
  "Grocery",
  "Health"
]

export default function CategorySidebar() {
  return (
    <aside className="w-full md:w-64">
      <h2 className="text-xl font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((category) => (
          <li key={category}>
            <Link href={`/category/${category.toLowerCase().replace(/ & /g, '-')}`} className="text-gray-600 hover:text-blue-500">
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

