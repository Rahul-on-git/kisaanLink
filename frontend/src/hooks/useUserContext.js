import { useContext } from 'react';

import { UserContext } from '../context/userContext';

const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw Error('useUserContext within proper context tree');
  }

  return context;
};

export default useUserContext;
