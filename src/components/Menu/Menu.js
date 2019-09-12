import React from 'react';
import { Transition } from "react-transition-group"
import {
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import Listing from "./Listing";
import Footer from './Footer';

import LogoImage from '../../assets/img/logo.svg';

import {
  Container,
  Content,
  Header,
  Logo,
  Close
} from "./styled";

const Menu = ({ isActive, toggleMenu }) => {
  return (
    <Transition in={isActive} timeout={500}>
      {(state) => (
        <Container isActive={isActive} state={state}>
          <Content>
            <Header>
              <Logo src={LogoImage} alt="logo" />
              <Close icon={faTimes} onClick={() => toggleMenu(false)} />
            </Header>
            <Listing />
            <Footer />
          </Content>
        </Container>
      )}
    </Transition>
  );
};

export default Menu;