import styled from 'styled-components';

const url =
  'https://blog.nortesys.com.br/wp-content/uploads/2019/05/288963-entenda-x-riscos-de-gestao-de-estoque-no-excel.jpg';

export const ImageBg = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(32, 31, 90, 0.5),
      rgba(32, 31, 90, 0.5)
    ),
    url(${url});
  filter: blur(5px);
  transform: scale(1.1);
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  position: absolute;
`;
