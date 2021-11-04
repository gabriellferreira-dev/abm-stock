import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [isLogged, setLogged] = useState(false);

  const context = {
    products,
    setProducts,
    isLogged,
    setLogged,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default Provider;
