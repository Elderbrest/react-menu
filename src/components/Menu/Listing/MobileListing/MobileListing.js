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
      </MenuList>
    </div>
  );
};

export default MobileListing;