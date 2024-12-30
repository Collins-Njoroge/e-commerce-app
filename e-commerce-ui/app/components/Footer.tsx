import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-600">Your trusted online marketplace for all your shopping needs.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-gray-600 hover:text-blue-500">Contact Us</Link></li>
              <li><Link href="/faq" className="text-gray-600 hover:text-blue-500">FAQ</Link></li>
              <li><Link href="/shipping" className="text-gray-600 hover:text-blue-500">Shipping Information</Link></li>
              <li><Link href="/returns" className="text-gray-600 hover:text-blue-500">Returns & Exchanges</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">My Account</h3>
            <ul className="space-y-2">
              <li><Link href="/account" className="text-gray-600 hover:text-blue-500">My Account</Link></li>
              <li><Link href="/orders" className="text-gray-600 hover:text-blue-500">Order History</Link></li>
              <li><Link href="/wishlist" className="text-gray-600 hover:text-blue-500">Wish List</Link></li>
              <li><Link href="/newsletter" className="text-gray-600 hover:text-blue-500">Newsletter</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-blue-500">Facebook</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Twitter</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Instagram</a>
              <a href="#" className="text-gray-600 hover:text-blue-500">Pinterest</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-500">
          <p>&copy; 2023 E-Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

