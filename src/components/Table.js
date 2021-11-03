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

function TableComponent() {
  const { products } = useContext(GlobalContext);

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
        {products &&
          products.map((product) => (
            <TableRow data-testid='product' key={product._id}>
              <TableCell>{product._id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.price}</TableCell>
              <TableCell>
                <Button variant='contained' color='warning'>
                  Select
                </Button>
                <Button variant='outlined' color='error'>
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
