import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: #fc6365;
  padding: 24px;
`;

const Content = styled.div`
  width: 100%;
`;

const Header = styled.header`
  width: 100%;
  border-bottom: 3px solid white;
`;

export {
  Container,
  Content,
  Header
}