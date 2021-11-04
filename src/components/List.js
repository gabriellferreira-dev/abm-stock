import { Button } from '@mui/material';
import { useContext, useEffect, useRef } from 'react';
import { StyledList } from '../styled-components/List';
import * as api from '../services/api';
import { GlobalContext } from '../provider/Provider';

export default function List({
  searched,
  setProduct,
  setIsSearching,
  productName,
}) {
  const listSearchedRef = useRef();
  const { setProducts, products } = useContext(GlobalContext);

  const createProduct = async () => {
    await api.create('products', { name: productName });
  };

  const getProducts = async () => {
    const products = await api.get('products');
    setProducts(products);
  };

  const onRegisterProduct = async () => {
    createProduct();
    getProducts();
    setIsSearching(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const validations = [
        listSearchedRef && !listSearchedRef.current.contains(event.target),
      ];

      if (validations.includes(true)) {
        setIsSearching(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsSearching]);

  console.log(products);

  return (
    <StyledList
      name='products'
      notFound={!searched.length}
      ref={listSearchedRef}
    >
      {!searched.length ? (
        <li>
          Nenhum produto cadastrado com esse nome.
          <Button
            name='register'
            variant='contained'
            onClick={onRegisterProduct}
          >
            Register Product
          </Button>
        </li>
      ) : (
        searched.map(({ name }, i) => (
          <li key={i} onClick={() => setProduct(name)}>
            {name}
          </li>
        ))
      )}
    </StyledList>
  );
}
