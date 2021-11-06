import styled, { css } from 'styled-components';

export const Form = styled.form`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  & h1 {
    font-size: 3rem;
    color: #272d2f;
    font-weight: 700;
  }

  & > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    & span {
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  ${({ login, register }) =>
    (login || register) &&
    css`
      width: 400px;
      height: 300px;
      background: white;
      position: relative;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);

      & button {
        padding: 10px 20px;
        width: 200px;
        background-color: #ffc529;
        border: none;
        border-radius: 5px;
        font-size: 1.4rem;
        color: white;
        font-weight: 600;
        transition: background 0.2s ease;
        margin: 15px 0;

        &:hover {
          background-color: rgba(255, 197, 41, 0.8);
        }
      }
    `}
`;
