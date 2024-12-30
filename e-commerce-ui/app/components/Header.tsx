'use client'

import { useState, Fragment } from 'react'
import Link from 'next/link'
import { ShoppingCart, User, Search, Menu, ChevronDown } from 'lucide-react'
import { Popover, Transition } from '@headlessui/react'

const categories = [
  { name: 'Electronics', href: '/category/electronics' },
  { name: 'Clothing', href: '/category/clothing' },
  { name: 'Home & Garden', href: '/category/home-garden' },
  { name: 'Sports & Outdoors', href: '/category/sports-outdoors' },
  { name: 'Beauty & Personal Care', href: '/category/beauty-personal-care' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600 mr-6">
              E-Shop
            </Link>
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                      ${open ? 'text-gray-900' : 'text-gray-500'}
                      group inline-flex items-center rounded-md bg-white text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                    `}
                  >
                    <span>Categories</span>
                    <ChevronDown
                      className={`${open ? 'text-gray-600' : 'text-gray-400'}
                        ml-2 h-5 w-5 group-hover:text-gray-500`}
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:max-w-3xl">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {categories.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                            >
                              <div className="ml-4">
                                <p className="text-base font-medium text-gray-900">{item.name}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <form className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-64 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="submit" className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-500">
                <Search size={20} />
              </button>
            </form>
            <Link href="/cart" className="text-gray-600 hover:text-blue-500">
              <ShoppingCart size={24} />
            </Link>
            <Link href="/account" className="text-gray-600 hover:text-blue-500">
              <User size={24} />
            </Link>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu size={24} />
          </button>
        </div>
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <form className="mb-4">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </form>
            <div className="flex justify-around">
              <Link href="/cart" className="text-gray-600 hover:text-blue-500">
                <ShoppingCart size={24} />
              </Link>
              <Link href="/account" className="text-gray-600 hover:text-blue-500">
                <User size={24} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

