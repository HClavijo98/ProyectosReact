import { FiltersContext } from '../context/Filters.jsx'
import { useContext } from 'react'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  if (!filters || !setFilters) {
    throw new Error('useFilters debe ser usado dentro de un FiltersProvider')
  }

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

  return { filters, filterProducts, setFilters }
}
