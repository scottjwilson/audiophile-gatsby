import styled from "styled-components";
import { Link } from "gatsby";
import { theme } from "../config/theme";

export const Button = styled(Link)`
  width: 12rem;
  border-radius: 0.2rem;
  background: ${({ primary }) =>
    primary ? `${theme.colors.primary.base}` : `${theme.colors.primary.dark}`};
  color: whitesmoke;
  padding: 1rem 2rem;
  color: ${theme.colors.gray.one};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  border: ${({ primary }) =>
    primary ? `${theme.colors.primary.base}` : `${theme.colors.primary.dark}`};
  cursor: pointer;
  transition: all 0.4s ease;
  z-index: 20;

  &:hover {
    background: ${theme.colors.primary.light};
  }
`;

export const OutlineButton = styled(Link)`
  width: 12rem;
  /* padding: 0.7rem 1.7rem; */
  padding: 1rem 2rem;

  font-size: 0.7rem;
  border-radius: 0.2rem;
  background: transparent;
  color: ${theme.colors.primary.dark};
  border: 2px solid ${theme.colors.primary.dark};
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 800;
  transition: all 0.4s ease;
  cursor: pointer;

  @media ${theme.devices.md} {
    font-size: 1rem;
  }

  &:hover {
    background: ${theme.colors.primary.dark};
    color: ${theme.colors.gray.one};
  }
`;
