import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-top: 2px solid #fff;
  padding: 24px 0;
  margin-top: auto;
  color: #fff;
`;

const Title = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 2rem;
`;

const Text = styled.p`
  margin: 4px 0 0 0;
  padding: 0;
  font-size: 1rem;
`

export {
  Container,
  Title,
  Text
}