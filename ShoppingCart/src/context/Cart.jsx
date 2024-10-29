import { createContext, useState } from 'react'
// import { cartReducer, cartInitialState } from '../reducers/cart'

// crear contexto
export const CartContext = createContext()
export const CartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

// crear el provider para proveer el contexto
export function CartProvider ({ children }) {
  const [cart, setCart] = useState(CartInitialState)
  // const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  // const addToCart = product => dispatch({
  //   type: 'ADD_TO_CART',
  //   payload: product
  // })

  // const removeFromCart = product => dispatch({
  //   type: 'REMOVE_FROM_CART',
  //   payload: product
  // })

  // const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  function addToCart ({ product }) {
    if (!product || product.id === undefined) {
      console.error("El producto o su propiedad 'id' no están definidos")
      return
    }

    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      updateLocalStorage(newCart)
      return setCart(newCart)
    }

    setCart(prevState => {
      const updatedCart = [
        ...prevState,
        {
          ...product,
          quantity: 1
        }
      ]
      updateLocalStorage(updatedCart) // Llamada a updateLocalStorage en el caso de nuevo producto
      return updatedCart
    })
  }

  function removeFromCart ({ product }) {
    setCart(prevState => {
      const updatedCart = prevState.filter(item => item.id !== product.id)
      updateLocalStorage(updatedCart) // Actualiza el almacenamiento local
      return updatedCart
    })
  }

  function clearCart () {
    updateLocalStorage([])
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
