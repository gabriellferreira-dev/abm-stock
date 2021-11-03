import React, { useContext, useEffect } from 'react';
import Table from '../components/Table';
import { Section } from '../styled-components/Section';
import * as api from '../services/api';
import { GlobalContext } from '../provider/Provider';
import { StyledButton } from '../styled-components/Button';

function Home() {
  const { setProducts } = useContext(GlobalContext);

  useEffect(() => {
    const getProducts = async () => {
      const result = await api.get('products');

      setProducts(result);
    };
    getProducts();
  }, [setProducts]);

  return (
    <Section>
      <div>
        <h1>ABM Stock</h1>
        <StyledButton variant='contained' size="small">New stock</StyledButton>
      </div>
      <Table />
    </Section>
  );
}

export default Home;
