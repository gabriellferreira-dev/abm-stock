import styled, { css } from 'styled-components';

export const StyledList = styled.ul`
  width: 100%;
  max-height: 100px;
  list-style: none;
  background-color: white;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  z-index: 1000;
  text-align: left;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);

  & li {
    padding: 5px 10px;
    transition: background 0.2s ease;
  }

  ${({ notFound }) =>
    !notFound &&
    css`
      & li:hover {
        background-color: rgba(0, 0, 0, 0.25);
        font-weight: 500;
      }
    `}

  ${({ notFound }) =>
    notFound &&
    css`
      text-align: center;
    `}
`;
