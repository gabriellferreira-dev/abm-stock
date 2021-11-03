import { createContext, useState } from 'react';

export const GlobalContext = createContext({});

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const context = {
    products,
    setProducts,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default Provider;
