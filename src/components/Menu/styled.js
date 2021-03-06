import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  position: fixed;
  min-height: 100vh;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #fc6365;
  padding: 24px;
  overflow-y: auto;
  transition: 0.5s;
  transform: translateX(${({ state }) => (state === "entering" || state === "entered" ? 0 : '-100%')});
  font-family: 'Lato', sans-serif;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
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
`;





export {
  Container,
  Content,
  Header,
  Logo,
  Close,
}