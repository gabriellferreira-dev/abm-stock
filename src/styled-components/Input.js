import styled from 'styled-components';

export const Input = styled.input`
  outline: none;
  padding: 5px 10px 5px;
  height: 40px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  transition: border 0.1s ease;
  border-radius: 5px;

  ::placeholder {
    color: transparent;
    user-select: none;
  }

  &:focus,
  &:not(:placeholder-shown) {
    border: 2px solid rgba(255, 197, 41, 1);

    & + label {
      transform: translateY(-125%);
      background: white;
      color: #ffc529;
      font-size: 1.2rem;
      font-weight: 600;
    }
  }

  &.error {
    border: 2px solid rgba(255, 0, 0, 1);

    & + label {
      color: red;
    }
  }
`;