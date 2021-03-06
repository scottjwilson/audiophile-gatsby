import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
const Burger = ({ open, handleOpen }) => {
  return (
    <BurgerWrapper>
      <StyledBurger open={open} onClick={handleOpen}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </BurgerWrapper>
  );
};

const BurgerWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media ${theme.devices.lg} {
    display: none;
  }
`;
const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background-color: transparent;

  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  margin: 0;
  /* &:focus {
    outline: none;
  } */

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) =>
      open ? theme.colors.primary.base : theme.colors.gray.one};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export default Burger;
