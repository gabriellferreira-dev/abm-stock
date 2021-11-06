import { Button } from '@mui/material';
import { useContext, useRef, useState, useEffect } from 'react';
import { GlobalContext } from '../provider/Provider';
import { Container } from '../styled-components/Container';
import { Form } from '../styled-components/Form';
import { Input } from '../styled-components/Input';
import { TextField } from '../styled-components/TextField';
import checkEmptyField from '../utils/checkEmptyField';
import validateManyFields from '../utils/validateManyFields';
import List from './List';
import * as api from '../services/api';

export default function StockForm({ handleModal, stock }) {
  const { products, client, getStocks, isUpdating, setUpdating } =
    useContext(GlobalContext);
  const [searched, setSearched] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [productStock, setProductStock] = useState({});
  const productInputRef = useRef();
  const inputsContainerRef = useRef();

  useEffect(() => {
    setProductStock({
      name: stock?.product?.name,
      ...stock,
    });
  }, [stock]);

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

  const findProduct = () =>
    products.find(
      ({ name }) => name.toLowerCase() === productStock.name.toLowerCase()
    );

  const registerStock = async () => {
    const product = findProduct();
    const { price, quantity } = productStock;
    const toRegister = { price, quantity, product, client };
    await api.create('stocks', toRegister);
    await getStocks();
    handleModal(false);
  };

  const updateStock = async () => {
    const product = findProduct();
    const { price, quantity } = productStock;
    const { _id, ...rest } = stock;
    const toUpdate = { ...rest, price, quantity, product };
    await api.edit('stocks', stock._id, toUpdate);
    await getStocks();
    handleModal(false);
    setUpdating(false);
  };

  const handleClick = () => {
    const inputs = inputsContainerRef.current.querySelectorAll('input');

    const inputValidation = validateManyFields(inputs);

    const validations = [
      inputValidation,
      productStock.product,
      productStock.quantity,
      productStock.price,
    ];

    if (validations.includes(true)) {
      if (isUpdating) {
        updateStock();
      } else {
        registerStock();
      }
    }
  };

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
        {isUpdating ? 'Update' : 'Register'}
      </Button>
    </Form>
  );
}
