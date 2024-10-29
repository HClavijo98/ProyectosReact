// https://fakestoreapi.com/docs
import './index.css'
// import { products as initialProducts } from './mocks/products.json'
import { useProducts } from './hooks/useProducts.js'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { Cart } from './components/Cart.jsx'
import { Footer } from './components/Footer.jsx'
import { useFilters } from './hooks/useFilters.js'
import { CartProvider } from './context/Cart.jsx'

export function App () {
  const { products } = useProducts()
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(products)

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  )
}
