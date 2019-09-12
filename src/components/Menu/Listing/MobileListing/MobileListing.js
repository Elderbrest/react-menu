import React from 'react';
import {
  faCreditCard,
  faInfoCircle,
  faLifeRing,
  faPhoneAlt,
  faPlane,
  faQuestionCircle,
  faSignOutAlt,
  faUserCircle
} from "@fortawesome/free-solid-svg-icons";

import AvatarImage from '../../../../assets/img/avatar.png';

import {
  Avatar,
  ProfileSection,
  Text,
  MenuList,
  Link,
  Item,
  Icon
} from './styled'

const MobileListing = () => {
  return (
    <div>
      <ProfileSection>
        <Avatar src={AvatarImage} alt="avatar" />
        <Text>Dominik</Text>
        <Text>Available Balance</Text>
        <Text>£1,500.00</Text>
      </ProfileSection>
      <MenuList>
        <Item>
          <Link href="#">
            <Icon icon={faUserCircle} />
            Profile
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <Icon icon={faPlane} />
            My Bookings
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <Icon icon={faCreditCard} />
            My Payments
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <Icon icon={faLifeRing} />
            Support
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <Icon icon={faPhoneAlt} />
            Contact Us
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <Icon icon={faSignOutAlt} />
            Log Out
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <Icon icon={faQuestionCircle} />
            About
          </Link>
        </Item>
        <Item>
          <Link href="#">
            <Icon icon={faInfoCircle} />
            FAQ
          </Link>
        </Item>
      </MenuList>
    </div>
  );
};

export default MobileListing;