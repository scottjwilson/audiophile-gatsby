import React from "react";
import { Link } from "gatsby";
import { menuData } from "../data/menuData";
import styled from "styled-components";
import { Logo } from "./Logo";
import { theme } from "../config/theme";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <FooterBg>
      <Container>
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

        <p className="content">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we’re open 7 days a week.{" "}
        </p>
        <FootersFooter>
          <p>Copyright {new Date().getFullYear()} All Rights Reserved</p>

          <article>
            <AiFillFacebook />
            <AiOutlineTwitter />
            <AiOutlineInstagram />
          </article>
        </FootersFooter>
      </Container>
    </FooterBg>
  );
};
const FooterBg = styled.footer`
  background: ${theme.colors.primary.dark};

  padding: 2rem 1rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.devices.md} {
    ${theme.maxWidth.sixx};
    margin: 0 auto;
  }

  .content {
    color: ${theme.colors.gray.four};
  }
`;
const NavMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${theme.devices.md} {
    flex-direction: row;
  }
`;

const Brand = styled(Link)`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  color: ${theme.colors.gray.one};
  height: 100%;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2rem;

  @media ${theme.devices.md} {
    justify-content: start;
  }
`;

const NavLink = styled(Link)`
  color: ${theme.colors.gray.one};
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 0.2rem;

  font-size: 0.9rem;

  margin-bottom: 2rem;
  @media ${theme.devices.md} {
    margin-right: 2rem;
  }
`;

const FootersFooter = styled.div`
  display: flex;
  flex-direction: column;

  @media ${theme.devices.md} {
    flex-direction: row;
    justify-content: space-between;
    /* background: purple; */
    /* align-items: center; */
  }

  p {
    color: ${theme.colors.gray.four};
    text-align: center;
  }

  article {
    display: flex;
    justify-content: space-around;
    color: ${theme.colors.gray.one};
    font-size: 2rem;

    width: 8rem;
    margin: 0 auto;
  }
`;

export default Footer;
