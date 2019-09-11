import React from 'react';
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import LogoImage from '../../assets/img/logo.svg';
import AvatarImage from '../../assets/img/avatar.png';

import {
  Container,
  Content,
  Header,
  Logo,
  Close,
  ProfileSection,
  Avatar,
  Text
} from "./styled";

const Menu = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Logo src={LogoImage} alt="logo" />
          <Close icon={faTimes} />
        </Header>
        <ProfileSection>
          <Avatar src={AvatarImage} alt="avatar" />
          <Text>Dominik</Text>
          <Text>Available Balance</Text>
          <Text>£1500</Text>
        </ProfileSection>
      </Content>
    </Container>
  );
};

export default Menu;