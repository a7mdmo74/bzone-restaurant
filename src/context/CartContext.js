import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [isCart, setIsCart] = useState(false);
  const toggleCart = () => {
    setIsCart(!isCart);
  };
  const closeCart = () => {
    setIsCart(false);
  };
  const value = { isCart, toggleCart, closeCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const CartState = () => {
  return useContext(CartContext);
};
