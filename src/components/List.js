import { Button } from '@mui/material';
import { useEffect, useRef } from 'react';
import { StyledList } from '../styled-components/List';

export default function List({ searched, setProduct, setIsSearching }) {
  const listSearchedRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (listSearchedRef && !listSearchedRef.current.contains(event.target)) {
        setIsSearching(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [setIsSearching]);

  return (
    <StyledList
      name='products'
      notFound={!searched.length}
      ref={listSearchedRef}
    >
      {!searched.length ? (
        <li>
          Nenhum produto cadastrado com esse nome.
          <Button variant='contained'>Register Product</Button>
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
