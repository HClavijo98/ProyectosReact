// https://fakestoreapi.com/docs
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Header } from './components/Header.jsx'
import { useState } from 'react'

export function App () {
  const [products, setProducts] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })
  // para filtrar
  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
            (
              filters.category === 'all' ||
              product.category === filters.category
            )
      )
    })
  }
  const filteredProducts = filterProducts(products)
  return (
    <div>
      <Header setFilters={setFilters} />
      <Products products={filteredProducts} />
    </div>
  )
}
