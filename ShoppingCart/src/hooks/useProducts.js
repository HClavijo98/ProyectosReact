import { useState, useEffect } from 'react'
import { searchProducts } from '../services/products.js'

export function useProducts () {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const loadProducts = async () => {
    try {
      const fetchedProducts = await searchProducts()
      setProducts(fetchedProducts)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadProducts()
  }, [])

  return { products, error, loading }
}
