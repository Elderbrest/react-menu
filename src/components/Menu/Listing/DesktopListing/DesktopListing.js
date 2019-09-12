import React from 'react';

import AvatarImage from '../../../../assets/img/avatar.png';

import {
  Container,
  Column,
  List,
  Item,
  Link,
  ProfileSection,
  AvatarContainer,
  Avatar,
  Description
} from "./styled";

const DesktopListing = () => {
  return (
    <Container>
      <Column flex={1}>
        <List>
          <Item>
            <Link href="#">Home</Link>
          </Item>
          <Item>Flights</Item>
        </List>
        <List>
          <Item>About Us</Item>
          <Item>FAQ</Item>
          <Item>Support</Item>
          <Item>Contact Us</Item>
        </List>
      </Column>
      <Column flex={1}>
        <ProfileSection>
          <AvatarContainer>
            <Avatar src={AvatarImage} alt="avatar" />
          </AvatarContainer>
          <div>
            <Description>Dominik Biel</Description>
            <Description>£1,500.00 Available</Description>
          </div>
        </ProfileSection>
        <List>
          <Item>Profile</Item>
          <Item>My Bookings</Item>
          <Item>My Payments</Item>
          <Item>Log Out</Item>
          <Item>Resume Application</Item>
        </List>
      </Column>
      <Column flex={1}/>
    </Container>
  );
};

export default DesktopListing;