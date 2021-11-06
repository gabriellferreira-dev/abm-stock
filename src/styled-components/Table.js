import { Table } from '@mui/material';
import styled from 'styled-components';

export const StyledTable = styled(Table)`
  width: 100%;

  & th,
  & td {
    font-size: 1.4rem;
    font-family: 'Montserrat', sans-serif;
  }

  & tbody {
    & tr {
      transition: background 0.2s ease;
      width: 100%;

      &:nth-child(even) {
        background-color: #f6f6f6;
      }

      &:hover {
        background-color: rgba(0, 0, 0, 0.1);

        & td {
          font-weight: 500;
        }
      }

      & td {
        &:nth-child(1) {
          font-weight: 500;
        }

        &:last-child {
          text-align: center;
          & button {
            margin: 0 5px;
            font-weight: 500;
            font-size: 1.1rem;
          }
        }
      }
    }
  }
`;
