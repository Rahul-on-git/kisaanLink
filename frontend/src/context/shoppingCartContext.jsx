import React, { createContext, useReducer } from 'react';

export const CartContext = createContext();

export const cartReducer = (state, action) => {
  switch (action.type) {
    case 'SET_CART':
      return {
        cart: [action.payload],
      };
    case 'CREATE_CART':
      return {
        cart: [...state.cart, action.payload],
      };
    case 'DELETE_CART':
      return {
        cart: state.cart.filter((todo) => todo._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { cart: null });
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ ...state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}