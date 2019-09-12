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
          <Item>
            <Link href="#">Flights</Link>
            </Item>
        </List>
        <List>
          <Item>
            <Link href="#">About Us</Link>
          </Item>
          <Item>
            <Link href="#">FAQ</Link>
          </Item>
          <Item>
            <Link href="#">Support</Link>
          </Item>
          <Item>
            <Link href="#">Contact Us</Link>
          </Item>
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
          <Item>
            <Link href="#">Profile</Link>
          </Item>
          <Item>
            <Link href="#">My Bookings</Link>
          </Item>
          <Item>
            <Link href="#">My Payments</Link>
          </Item>
          <Item>
            <Link href="#">Log Out</Link>
          </Item>
          <Item>
            <Link href="#">Resume Application</Link>
          </Item>
        </List>
      </Column>
      <Column flex={1}/>
    </Container>
  );
};

export default DesktopListing;