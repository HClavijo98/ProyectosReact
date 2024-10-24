import { createContext, useState } from 'react'

// crear contexto
export const CartContext = createContext()

// crear el provider para proveer el contexto
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  function addToCart ({ product }) {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quality += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  function removeFromCart ({ product }) {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  function clearCart () {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
