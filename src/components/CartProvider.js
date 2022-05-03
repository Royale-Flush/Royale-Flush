import CartContext from '../CartContext'
import { useState, useEffect } from 'react'
import { getCart } from '../api'
import useAuth from '../hooks/useAuth'

const CartProvider = ({ children }) => {
  const { user } = useAuth()
  const [cart, setCart] = useState({})

  console.log('User in Cart Provider:', user)

  useEffect(() => {
    const fetchCart = async () => {
      if (user.username !== 'guest') {
        const result = await getCart(user.id)
        setCart(result)
      }
    }
    fetchCart()
  }, [user])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider
