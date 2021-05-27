import React from "react";
import { Link } from "gatsby";
import { menuData } from "../data/menuData";
import styled from "styled-components";
import { Logo } from "./Logo";
import { theme } from "../config/theme";
const Footer = () => {
  return (
    <FooterContainer>
      <Brand to="/">
        <Logo />
      </Brand>
      <NavMenu>
        {menuData.map((link) => {
          const { id, href, title } = link;
          return (
            <NavLink id={id} to={href}>
              {title}
            </NavLink>
          );
        })}
      </NavMenu>
    </FooterContainer>
  );
};
const FooterContainer = styled.div`
  background: ${theme.colors.primary.dark};
`;
const NavMenu = styled.div``;

const Brand = styled(Link)`
  display: flex;

  color: ${theme.colors.gray.one};
  align-items: center;

  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2rem;
`;

const NavLink = styled(Link)`
  display: flex;

  color: ${theme.colors.gray.one};
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2rem;

  @media ${theme.devices.lg} {
  }
`;

export default Footer;
