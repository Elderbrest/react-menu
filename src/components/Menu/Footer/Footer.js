import React from 'react';
import { Desktop, Mobile } from "../../../utils/device";

import {
  Container,
  Title,
  Text
} from "./styled";

const Footer = () => {
  return (
    <Container>
      <Desktop>
        <Text>We're here to help</Text>
        <Text>+44 (0) 20 8050 3459</Text>
        <Text>support@awaymo.com</Text>
      </Desktop>
      <Mobile>
        <Title>We're here to help</Title>
      </Mobile>
    </Container>
  );
};

export default Footer;