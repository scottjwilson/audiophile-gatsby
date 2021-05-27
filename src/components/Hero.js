import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";
import BridgeTest from "./BridgeTest";
import { Button } from "./Button";
import { NewProduct } from "../components/styles/headings/NewProduct";
import { theme } from "../config/theme";
const Hero = () => {
  return (
    <BridgeTest>
      <HeroContainer>
        <section>
          <NewProduct>new product</NewProduct>
          <h1>xx99 mark ii headphones</h1>
          <p>
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Button primary>see product</Button>
        </section>
      </HeroContainer>
    </BridgeTest>
  );
};

const HeroContainer = styled.div`
  width: 100%;
  /* padding: 0.5rem calc((100vw - 1000px) / 2); */
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${theme.maxWidth.md};

  margin: 0 auto;

  @media ${theme.devices.lg} {
    ${theme.maxWidth.sixx};
    margin: 0 auto;
  }

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    padding: 0 1rem;
    /* margin: 0 auto; */

    @media ${theme.devices.lg} {
      align-items: flex-start;

      text-align: left;

      ${theme.maxWidth.md};
    }
    @media ${theme.devices.xl} {
      padding: 0;
    }
  }
  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
    color: ${theme.colors.gray.one};

    @media ${theme.devices.sm} {
      font-size: 3rem;
    }
  }
  p {
    color: ${theme.colors.gray.two};
  }
`;

export default Hero;
