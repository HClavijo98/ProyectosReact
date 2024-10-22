import { useId, useState } from 'react'
import './Filters.css'

export function Filters ({ setFilters }) {
  const [minPrice, setMinPrice] = useState(0)
  const minPriceFilterId = useId()
  const categoryFilterId = useId()

  function handleMinPrice (event) {
    setMinPrice(event.target.value)
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }
  function handleChangeCategory (event) {
    setFilters(prevState => ({
      ...prevState,
      category: event.target.value
    }))
  }
  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleMinPrice}
        />
        <span>€{minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryFilterId}>Category</label>
        <select id={categoryFilterId} onChange={handleChangeCategory}>
          <option value='all'>All</option>
          <option value="men's clothing">Men's clothing</option>
          <option value='jewelery'>Jewelery</option>
          <option value='electronics'>Electronics</option>
          <option value="women's clothing">Women's clothing</option>
        </select>
      </div>
    </section>
  )
}
