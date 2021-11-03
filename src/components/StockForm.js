import { Box, TextField } from '@mui/material';
import { useContext, useRef, useState } from 'react';
import { GlobalContext } from '../provider/Provider';
import { Container } from '../styled-components/Container';
import List from './List';

export default function StockForm() {
  const { products } = useContext(GlobalContext);
  const [searched, setSearched] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [productStock, setProductStock] = useState({});
  const productInputRef = useRef();

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

  const handleChange = ({ target: { name, value } }) => {
    setProductStock({ ...productStock, [name]: value });

    if (name === 'name') {
      searchProduct(value);
    }
  };

  return (
    <Box
      component='form'
      sx={{
        '& .MuiTextField-root': {
          m: 1,
          width: '100%',
          margin: '8px 0',
        },
        '& input, & label': {
          fontSize: '1.6rem',
          backgroundColor: '#fff',
        },
        '& label': {
          paddingRight: '4px',
        },
        '&': {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
      noValidate
      autoComplete='off'
    >
      <div>
        <Container ref={productInputRef}>
          <TextField
            required
            id='outlined-required'
            label='Product'
            placeholder='Insert product name'
            onChange={handleChange}
            value={productStock.name || ''}
            name='name'
          />
          {isSearching && (
            <List
              searched={searched}
              setProduct={onClickSearchedItem}
              setIsSearching={setIsSearching}
            />
          )}
        </Container>
        <TextField
          required
          id='outlined-required'
          label='Quantity'
          placeholder='Insert quantity'
          type='text'
          value={productStock.quantity || ''}
          name='quantity'
          onChange={handleChange}
        />
        <TextField
          required
          id='outlined-required'
          label='Price'
          value={productStock.price || ''}
          placeholder='Insert price'
          name='price'
          onChange={handleChange}
        />
      </div>
    </Box>
  );
}
