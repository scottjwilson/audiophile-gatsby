import React from "react";
import styled from "styled-components";
import { theme } from "../config/theme";
import { Button, OutlineButton } from "../components/Button";
import { useStaticQuery, graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const FeaturedProducts = () => {
  const data = useStaticQuery(graphql`
    query {
      one: strapiProduct(id: { eq: "Product_1" }) {
        name
        featuredtext
        featuredimage {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 400)
            }
          }
        }
      }
      two: strapiProduct(id: { eq: "Product_2" }) {
        name
        featuredimage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      three: strapiProduct(id: { eq: "Product_3" }) {
        name
        featuredimage {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  `);

  const { one, two, three } = data;
  const threename = three.name.slice(0, 3) + three.name.slice(12);

  return (
    <Container>
      {/* FIRST PRODUCT */}
      <OneWrapper>
        <StaticImage
          src="../images/pattern-circles.svg"
          alt="circle pattern"
          className="circles"
        />
        <StyledImg
          image={getImage(one.featuredimage.localFile.childImageSharp)}
        />
        <section>
          <h1>{one.name}</h1>
          <p>{one.featuredtext}</p>
          <Button>see product</Button>
        </section>
      </OneWrapper>
      {/* SECOND PRODUCT */}
      <TwoWrapper>
        <BgImage
          image={getImage(two.featuredimage.localFile.childImageSharp)}
          style={{ minHeight: 400 }}
        >
          <TwoText>
            <h2>{two.name}</h2>
            <OutlineButton>see product</OutlineButton>
          </TwoText>
        </BgImage>
      </TwoWrapper>
      {/* THIRD PRODUCT */}
      <ThreeWrapper>
        <ThreeImg
          image={getImage(three.featuredimage.localFile.childImageSharp)}
        />
        <ThreeText>
          <h2>{threename}</h2>
          <OutlineButton>see product </OutlineButton>
        </ThreeText>
      </ThreeWrapper>
    </Container>
  );
};

const Container = styled.section`
  ${theme.maxWidth.sixx};
  margin: 0 auto;

  padding: 0 1rem;

  @media ${theme.devices.xl} {
    padding: 0;
  }
`;

const OneWrapper = styled.article`
  height: 48rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  background-color: ${theme.colors.primary.base};
  border-radius: 0.7rem;
  position: relative;

  @media ${theme.devices.lg} {
    height: 38rem;
    /* align-items: flex-end; */
    justify-content: space-evenly;

    flex-direction: row;
    margin: 0;
  }
  .circles {
    position: absolute;
    top: 0;

    @media ${theme.devices.md} {
      top: -25%;
    }

    @media ${theme.devices.lg} {
      top: 0;
      left: -15%;
    }

    /* padding: 4rem; */
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: ${theme.colors.gray.two};
    ${theme.maxWidth.xs};

    @media ${theme.devices.lg} {
      ${theme.maxWidth.sm};
      align-items: flex-start;
      text-align: left;
    }

    h1 {
      text-transform: uppercase;
      color: ${theme.colors.gray.one};
      font-size: 3rem;
      font-weight: 600;
      @media ${theme.devices.lg} {
        font-size: 3.8rem;
      }
    }
  }
`;

const StyledImg = styled(GatsbyImage)`
  width: 200px;
  display: flex;

  overflow: hidden;
  @media ${theme.devices.md} {
    width: 300px;
  }
  @media ${theme.devices.lg} {
    width: 400px;
    margin-top: 8rem;
  }
`;

const TwoWrapper = styled.div`
  margin: 2rem 0;
  border-radius: 2rem;
`;
const TwoText = styled.section`
  padding: 6rem 2rem;
  @media ${theme.devices.md} {
    padding: 5rem;
  }
  @media ${theme.devices.lg} {
    padding: 6rem;
  }
  h2 {
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 3rem;

    @media ${theme.devices.lg} {
      font-size: 2.5rem;
    }
  }
`;

const ThreeWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;

  @media ${theme.devices.md} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ThreeImg = styled(GatsbyImage)`
  border-radius: 0.7rem;
`;

const ThreeText = styled.section`
  background-color: ${theme.colors.gray.two};
  border-radius: 0.7rem;

  padding: 2rem;
  h2 {
    font-size: 2rem;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 3rem;

    @media ${theme.devices.lg} {
      font-size: 2.5rem;
    }
  }
`;

export default FeaturedProducts;
