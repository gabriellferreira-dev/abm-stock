import { createContext, useState } from 'react';
import * as api from '../services/api';

export const GlobalContext = createContext({});

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [stocks, setStocks] = useState([]);
  const [clients, setClients] = useState([]);
  const [client, setClient] = useState();
  const [isLogged, setLogged] = useState(false);

  const getStocks = async () => {
    const result = await api.get('stocks');
    setStocks(result);
  };

  const getProducts = async () => {
    const result = await api.get('products');
    setProducts(result);
  };

  const context = {
    products,
    setProducts,
    isLogged,
    setLogged,
    clients,
    setClients,
    client,
    setClient,
    stocks,
    setStocks,
    getStocks,
    getProducts,
  };

  return (
    <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
  );
};

export default Provider;
