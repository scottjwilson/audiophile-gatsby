import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { StaticImage } from "gatsby-plugin-image";

const CallToAction = () => {
  return (
    <Container>
      <StaticImage src="../images/image-best-gear.jpg" className="image" />

      <TextBox>
        <h1>
          BRINGING YOU THE <span>BEST </span>
          AUDIO GEAR
        </h1>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </TextBox>
    </Container>
  );
};

const Container = styled.section`
  ${theme.maxWidth.sixx};
  margin: 6rem auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  padding: 0 1rem;

  @media ${theme.devices.lg} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
  @media ${theme.devices.xl} {
    padding: 0;
  }

  .image {
    width: 100%;
    height: 30rem;
    padding: 4rem 0;
    margin: 2rem 0;
    border-radius: 0.7rem;

    @media ${theme.devices.lg} {
      width: 32rem;
    }
  }
`;

const TextBox = styled.article`
  ${theme.maxWidth.threex};

  /* margin-right: 8rem; */
  h1 {
    font-size: 2.4rem;
    text-transform: uppercase;
    line-height: 3rem;

    @media ${theme.devices.sm} {
      font-size: 3rem;
    }
    span {
      color: ${theme.colors.primary.base};
    }
  }

  p {
    color: $color-gray-500;
  }

  @media ${theme.devices.md} {
    ${theme.maxWidth.xl};
  }
  @media ${theme.devices.lg} {
    ${theme.maxWidth.md};
    text-align: left;
  }
`;

export default CallToAction;
