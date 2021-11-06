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
  const { isLogged, getStocks, getProducts, setUpdating } =
    useContext(GlobalContext);
  const [open, setOpen] = useState(false);
  const [stock, setStock] = useState({});

  const handleModal = () => setOpen(!open);

  const handleNewStockClick = () => {
    setUpdating(false);
    setStock({});
    handleModal();
  };

  const getStock = async (id) => {
    const result = await api.getById('stocks', id);
    setStock(result);
  };

  useEffect(() => {
    const getData = async () => {
      await getProducts();
      await getStocks();
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isLogged) {
    return <Redirect to='/login' />;
  }

  return (
    <Section>
      <Header>
        <h1>ABM Stock</h1>
        <StyledButton
          variant='contained'
          size='small'
          onClick={handleNewStockClick}
        >
          New stock
        </StyledButton>
      </Header>
      <Table handleModal={handleModal} getStock={getStock} />
      <ModalRegister open={open} handleModal={handleModal} stock={stock} />
    </Section>
  );
}

export default Home;