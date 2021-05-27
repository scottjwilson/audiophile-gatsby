import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { Link } from "gatsby";
import { menuData } from "../data/menuData";

const Menu = ({ open, handleOpen }) => {
  return (
    <StyledMenu open={open} onClick={handleOpen}>
      <MenuCard open={open}>
        {menuData.map((link) => {
          const { id, href, title } = link;
          return <MenuLink to={href}>{title}</MenuLink>;
        })}
      </MenuCard>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};
  display: flex;
  height: 100vh;
  text-align: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.1s cubic-bezier(0.455, 0.03, 0.515, 0.955);
`;

const MenuCard = styled.div`
  transform: ${({ open }) => (open ? "translateY(0)" : "translateY(-100%)")};

  transition: transform 0.4s cubic-bezier(0.215, 0.61, 0.355, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgba(80, 86, 98, 0.03);
  height: 30vh;
  border-radius: 4px;
  width: 90%;
  margin: 6rem auto;
  background-color: ${theme.colors.black.base};
  ul {
    list-style: none;
  }
`;

const MenuLink = styled(Link)`
  text-transform: uppercase;
  padding: 1rem 0;
  font-weight: bold;

  color: ${theme.colors.gray.one};
  text-decoration: none;
  transition: all s linear;

  &:hover {
    color: ${theme.colors.gray.four};
    cursor: pointer;
  }
`;

export default Menu;
