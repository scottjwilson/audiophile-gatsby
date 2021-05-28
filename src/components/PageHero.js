import React from "react";
import { theme } from "../config/theme";
import styled from "styled-components";

const PageHero = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

const Container = styled.header`
  background: ${theme.colors.primary.dark};

  h1 {
    color: ${theme.colors.gray.one};
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    padding: 4rem 0;
    font-size: 2.5rem;
    margin: 0;
  }
`;

export default PageHero;
