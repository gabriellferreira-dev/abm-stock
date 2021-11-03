import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 80px 20px 10px;

  & > div {
    width: 100%;
    height: 60px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #272d2f;
    top: 0;
    left: 0;
    position: fixed;
    margin-bottom: 10px;

    & h1 {
      color: #ffc529;
      font-weight: 700;
      font-size: 1.6em;
    }
  }
`;
