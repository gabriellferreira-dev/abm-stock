import styled from 'styled-components';

export const TextField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  width: 80%;
  margin: 5px 0;

  & label {
    position: absolute;
    left: 5px;
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0 5px;
    transition: all 0.3s ease;
    cursor: text;
  }
`;
