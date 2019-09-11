import React from 'react';
import { Desktop, Mobile } from '../../utils/device';
import {
  faTimes,
  faUserCircle,
  faPlane,
  faCreditCard,
  faLifeRing,
  faPhoneAlt,
  faSignOutAlt,
  faQuestionCircle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons'

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
  Text,
  List,
  Item,
  Icon,
  Footer
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
        <List>
          <Item>
            <Icon icon={faUserCircle} />
            Profile
          </Item>
          <Item>
            <Icon icon={faPlane} />
            My Bookings
          </Item>
          <Item>
            <Icon icon={faCreditCard} />
            My Payments
          </Item>
          <Item>
            <Icon icon={faLifeRing} />
            Support
          </Item>
          <Item>
            <Icon icon={faPhoneAlt} />
            Contact Us
          </Item>
          <Item>
            <Icon icon={faSignOutAlt} />
            Log Out
          </Item>
          <Item>
            <Icon icon={faQuestionCircle} />
            About
          </Item>
          <Item>
            <Icon icon={faInfoCircle} />
            FAQ
          </Item>
        </List>
        <Footer>
          <Desktop>
            <Text>We are here to help</Text>
          </Desktop>
          <Mobile>
            <Text>Mobile Footer</Text>
          </Mobile>
        </Footer>
      </Content>
    </Container>
  );
};

export default Menu;