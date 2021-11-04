import { Button } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { GlobalContext } from '../provider/Provider';
import { Container } from '../styled-components/Container';
import { Form } from '../styled-components/Form';
import { Input } from '../styled-components/Input';
import { TextField } from '../styled-components/TextField';
import checkEmptyField from '../utils/checkEmptyField';
import validateManyFields from '../utils/validateManyFields';
import List from './List';
import * as api from '../services/api';

export default function StockForm({ handleModal }) {
  const { products, setStocks, client, stocks } = useContext(GlobalContext);
  const [searched, setSearched] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [productStock, setProductStock] = useState({});
  const productInputRef = useRef();
  const inputsContainerRef = useRef();

  const searchProduct = (value) => {
    setIsSearching(true);
    const result = products.filter(({ name }) =>
      name.toLowerCase().includes(value.toLowerCase())
    );
    setSearched(result);
  };

  const onClickSearchedItem = (value) => {
    setProductStock({ ...productStock, name: value });
    setIsSearching(false);
  };

  const handleChange = ({ target, target: { name, value } }) => {
    setProductStock({ ...productStock, [name]: value });
    checkEmptyField(target);

    if (name === 'name') {
      searchProduct(value);
    }
  };

  const registerStock = async () => {
    const product = products.find(
      ({ name }) => name.toLowerCase() === productStock.name.toLowerCase()
    );
    const { price, quantity } = productStock;
    const toRegister = { price, quantity, product, client };
    await api.create('stocks', toRegister);
    const stocks = await api.get('stocks');
    setStocks(stocks);
  };

  const handleClick = () => {
    const inputs = inputsContainerRef.current.querySelectorAll('input');

    const inputValidation = validateManyFields(inputs);

    const validations = [
      inputValidation,
      productStock.name,
      productStock.quantity,
      productStock.price,
    ];

    if (validations.includes(true)) {
      registerStock();
      handleModal(false);
    }
  };

  console.log(stocks);

  return (
    <Form>
      <div ref={inputsContainerRef}>
        <Container ref={productInputRef}>
          <TextField>
            <Input
              required
              id='product-name'
              placeholder='Insert product name'
              onChange={handleChange}
              value={productStock.name || ''}
              name='name'
            />
            <label htmlFor='product-name'>Name</label>
          </TextField>
          {isSearching && (
            <List
              searched={searched}
              setProduct={onClickSearchedItem}
              setIsSearching={setIsSearching}
              productName={productStock.name || ''}
            />
          )}
        </Container>
        <TextField>
          <Input
            required
            id='product-quantity'
            placeholder='Insert quantity'
            type='number'
            value={productStock.quantity || ''}
            name='quantity'
            onChange={handleChange}
          />
          <label htmlFor='product-quantity'>Quantity</label>
        </TextField>
        <TextField>
          <Input
            required
            id='product-price'
            value={productStock.price || ''}
            placeholder='Insert price'
            type='number'
            name='price'
            onChange={handleChange}
          />
          <label htmlFor='product-price'>Price</label>
        </TextField>
      </div>
      <Button variant='contained' color='success' onClick={handleClick}>
        Register
      </Button>
    </Form>
  );
}
