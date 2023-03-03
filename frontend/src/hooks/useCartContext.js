import { useContext } from 'react';

import { CartContext } from '../context/shoppingCartContext';

const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw Error('useUserContext within proper context tree');
  }

  return context;
};

export default useCartContext;
