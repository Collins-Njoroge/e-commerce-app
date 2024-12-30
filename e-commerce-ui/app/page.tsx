import Header from './components/Header'
import CategorySidebar from './components/CategorySidebar'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <CategorySidebar />
          <ProductGrid />
        </div>
      </main>
      <Footer />
    </div>
  )
}

