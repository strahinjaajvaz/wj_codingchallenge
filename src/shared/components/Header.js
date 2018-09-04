import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container from "../container/Container";

const Header = styled.header`
  background-color: #ffab91;
`;

const StyledLink = styled(Link)`
  font-size: 2.4rem;
  display: inline-block;
  font-color: white;
  color: white;
  text-decoration: none;
  padding: 15px 0;

  &:hover {
    color: white;
    text-decoration: none;
  }
`

export default function Navbar() {
  return (
    <Header>
      <Container>
        <StyledLink to={`/`}>Webjet coding challenge</StyledLink>
      </Container>
    </Header>
  );
}
