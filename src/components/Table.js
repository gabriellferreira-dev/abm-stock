import {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Button,
} from '@mui/material';
import { useContext } from 'react';
import { GlobalContext } from '../provider/Provider';
import { StyledTable } from '../styled-components/Table';
import * as api from '../services/api';

function TableComponent({ handleModal, getStock }) {
  const { stocks, getStocks, setUpdating } = useContext(GlobalContext);

  const removeStock = async (id) => {
    const isExistStock = stocks.find((stock) => stock._id === id);

    if (isExistStock) {
      await api.remove('stocks', id);
      await getStocks();
    }
  };

  const handleClickDelete = ({ target: { id } }) => {
    removeStock(id);
  };

  const handleClickSelect = ({ target: { id } }) => {
    getStock(id);
    handleModal(true);
    setUpdating(true);
  };

  return (
    <StyledTable sx={{ minWidth: 700 }} aria-label='customized table'>
      <TableHead>
        <TableRow>
          <TableCell>_id</TableCell>
          <TableCell>Product Name</TableCell>
          <TableCell>Quantity</TableCell>
          <TableCell>Price</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {stocks &&
          stocks.map(({ _id, quantity, price, product }) => (
            <TableRow data-testid='product' key={_id}>
              <TableCell>{_id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{quantity}</TableCell>
              <TableCell>{price}</TableCell>
              <TableCell>
                <Button
                  variant='contained'
                  color='warning'
                  id={_id}
                  onClick={handleClickSelect}
                >
                  Select
                </Button>
                <Button
                  variant='outlined'
                  color='error'
                  id={_id}
                  onClick={handleClickDelete}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </StyledTable>
  );
}

export default TableComponent;