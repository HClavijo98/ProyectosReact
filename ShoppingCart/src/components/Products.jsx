import { useCart } from '../hooks/useCart'
import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './icons'

export function Products ({ products }) {
  const { addToCart, removeFromCart, cart } = useCart()
  function checkProductInCart ({ product }) {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products'>
      <ul>
        {products.map(product => {
          const isProductInCart = checkProductInCart({ product })
          return (
            <li key={product.id}>
              <img src={product.image} alt={product.title} />
              <div>
                <strong>{product.title}</strong>
                <p>€{product.price}</p>
              </div>
              <div>
                <button
                  style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }}
                  onClick={() => isProductInCart ? removeFromCart({ product }) : addToCart({ product })}
                >
                  {
                    isProductInCart
                      ? <RemoveFromCartIcon />
                      : <AddToCartIcon />
                  }
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
