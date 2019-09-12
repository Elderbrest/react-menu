import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  color: #fff;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${props => props.flex ? props.flex : '1'};
`

const List = styled.ul`
  margin: 24px 0 0 0;
  padding: 0;
  display: inline-block;
  list-style: none;
`;

const Item = styled.li`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 4px 0 0 0;
`;

const Link = styled.a`
  text-decoration: none;
  color: #fff;
  cursor: pointer;
`;

const ProfileSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 24px 0;
  border-bottom: 1px solid #fff;
`;

const AvatarContainer = styled.div`
  margin-right: 24px;
  display: flex;
  align-items: center;
  border: 3px solid #fff;
  padding: 2px;
  border-radius: 50%;
`
const Avatar = styled.img`
  background-color: #fff;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  padding: 10px;
`;

const Description = styled.p`
  margin: 0;
  padding: 0;
  font-size: 1.2rem;
  font-weight: bold;
`

export {
  Container,
  List,
  Column,
  Item,
  Link,
  ProfileSection,
  AvatarContainer,
  Avatar,
  Description
}