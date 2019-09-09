import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 3px solid white;
  padding: 0 0 24px 0;
`;

const Logo = styled.img`
  height: 36px;
`;

const Close = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 2rem;
  position: absolute;
  right: 0;
  cursor: pointer;
`

export {
  Container,
  Content,
  Header,
  Logo,
  Close
}