import React, { useState, useEffect, useContext } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Logo } from "./Logo";
import { theme } from "../config/theme";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { menuData } from "../data/menuData";
import Burger from "./Burger";
import Menu from "./Menu";
import { StoreContext } from "../contexts/StoreContext";
const Header = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);
  // const { addProductToCart } = useContext(StoreContext);
  useEffect(() => {
    if (window.location.pathname) {
      setNavbar(window.location.pathname);
    }
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Nav navbar={navbar}>
      <Container>
        <Burger open={open} handleOpen={handleOpen} />
        <Menu open={open} handleOpen={handleOpen} />

        <Brand to="/">
          <Logo />
        </Brand>
        <NavMenu>
          {menuData.map((link, index) => {
            const { href, title } = link;
            return (
              <NavLink key={index} to={href} activeClassName="active">
                {title}
              </NavLink>
            );
          })}
        </NavMenu>
        <CartContainer>
          {/* {cart.length == 0 ? <></> : cart.length} */}

          <CartIcon />
        </CartContainer>
      </Container>
    </Nav>
  );
};

const Nav = styled.nav`
  background: ${({ navbar }) =>
    navbar !== "/" ? `${theme.colors.primary.dark}` : "transparent"};
`;
const Container = styled.div`
  ${theme.maxWidth.sixx};
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin: 0 auto;
  z-index: 200;
  position: relative;
  @media ${theme.devices.lg} {
    padding: 0 1rem;
  }
  @media ${theme.devices.xl} {
    padding: 0;
  }
`;
const Brand = styled(Link)`
  display: flex;

  color: ${theme.colors.gray.one};
  align-items: center;
  justify-content: center;

  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2rem;
`;

const NavLink = styled(Link)`
  display: none;

  font-size: 0.9rem;
  color: ${theme.colors.gray.one};
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2rem;
  transition: all 0.2s;
  &:hover {
    color: ${theme.colors.primary.base};
  }

  @media ${theme.devices.lg} {
    display: flex;
  }
`;

const NavMenu = styled.div`
  position: absolute;
  width: 100%;

  .active {
    color: ${theme.colors.primary.base};
  }

  @media ${theme.devices.lg} {
    position: static;
    display: flex;
    justify-content: center;
  }
`;

const CartContainer = styled.div`
  display: flex;
  color: white;
`;

const CartIcon = styled(AiOutlineShoppingCart)`
  font-size: 2rem;
  color: ${theme.colors.gray.one};
`;

export default Header;
