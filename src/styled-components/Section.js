import styled, { css } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 80px 20px 10px;
  position: relative;
  overflow: hidden;

  ${({ login }) =>
    login &&
    css`
      background-color: #fff;
      height: 100vh;
      padding: 0;
      flex-direction: row;
      justify-content: center;

      & a {
        position: absolute;
        bottom: 20px;
        text-decoration: none;
        font-weight: 500;
        color: #ffc529;

        :visited {
          color: #ffc529;
        }
      }
    `}
`;
