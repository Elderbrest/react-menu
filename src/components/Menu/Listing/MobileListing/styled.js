import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const MenuList = styled.div`
  margin: 24px 0 48px 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
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

export {
  Avatar,
  ProfileSection,
  Text,
  MenuList,
  Link,
  Item,
  Icon
}