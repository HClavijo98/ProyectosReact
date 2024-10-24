import { useId } from 'react'
import { CartIcon, ClearCartIcon } from './icons'

export function Cart () {
  const cartCheckboxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <CartIcon />
      </label>
      <input type='checkbox' hidden id={cartCheckboxId} />

      <aside className='cart'>
        <ul>
          <li>
            <img src='' alt='' />
            <div>
              <strong />
            </div>
            <footer>
              <small />
              <button>+</button>
            </footer>
          </li>
        </ul>

        <button>
          <ClearCartIcon /> Eliminar todos los productos
        </button>
      </aside>
    </>
  )
}
