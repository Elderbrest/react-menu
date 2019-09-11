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

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
`;

const Avatar = styled.img`
  background-color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  padding: 10px;
`;

const Text = styled.p`
  margin: 10px 0 0 0;
  color: #fff;
  font-size: 2rem;
`;

const List = styled.div`
  margin: 24px 0 48px 0;
`

const Item = styled.div`
  display: flex;
  align-items: center;
  padding: 24px 0;
  border-bottom: 2px solid #fff;
  color: #fff;
  font-size: 2rem;
  
  &:last-child {
    border: none;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 20px;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 2px solid #fff;
  padding: 24px 0;
  margin-top: auto;
`;

export {
  Container,
  Content,
  Header,
  Logo,
  Close,
  ProfileSection,
  Avatar,
  Text,
  List,
  Item,
  Icon,
  Footer
}