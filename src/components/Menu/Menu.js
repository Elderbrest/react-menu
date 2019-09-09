import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import LogoImage from '../../assets/img/logo.svg';

import {
  Container,
  Content,
  Header,
  Logo,
  Close
} from "./styled";

const Menu = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Logo src={LogoImage} alt="logo" />
          <Close icon={faTimes} />
        </Header>
      </Content>
    </Container>
  );
};

export default Menu;