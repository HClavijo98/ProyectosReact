import { Filters } from './Filters.jsx'
import { CartIcon } from './icons'

export function Header () {
  return (
    <header>
      <h1>SHOP <CartIcon /></h1>
      <Filters />
    </header>
  )
}
