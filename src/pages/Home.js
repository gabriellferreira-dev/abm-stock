import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Table from '../components/Table';
import { Section } from '../styled-components/Section';
import * as api from '../services/api';
import { GlobalContext } from '../provider/Provider';
import { StyledButton } from '../styled-components/Button';
import ModalRegister from '../components/ModalRegister';
import { Header } from '../styled-components/Header';

function Home() {
  const { setProducts, isLogged } = useContext(GlobalContext);
  const [open, setOpen] = useState(false);

  const handleModal = () => setOpen(!open);

  useEffect(() => {
    const getProducts = async () => {
      const result = await api.get('products');

      setProducts(result);
    };
    getProducts();
  }, [setProducts]);

  if (!isLogged) {
    return <Redirect to='/login' />;
  }

  return (
    <Section>
      <Header>
        <h1>ABM Stock</h1>
        <StyledButton variant='contained' size='small' onClick={handleModal}>
          New stock
        </StyledButton>
      </Header>
      <Table />
      <ModalRegister open={open} handleModal={handleModal} />
    </Section>
  );
}

export default Home;
