import { createContext, useContext } from 'react';

type CartContextType = {
  cartCount: number | undefined,
  setCartCount: (quantity: number) => void
}

const initialValue = {
  cartCount: 0,
  setCartCount: (quantity: number) => ({})
}


export const CartContext = createContext<CartContextType>(initialValue)
export const useCart = () => useContext(CartContext)
