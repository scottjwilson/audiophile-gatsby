import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { theme } from "../config/theme";
import { Button } from "../components/Button";

const SingleProduct = ({ product }) => {
  const productImage =
    product.productimage.localFile.childImageSharp.gatsbyImageData;

  return (
    <Section>
      <Link to="/">go back</Link>
      <ProductHero>
        <StyledImage image={getImage(productImage)} />
        <BuyMe>
          <h1>{product.name}</h1>
          <p>{product.description}</p>

          <h3>${product.price}</h3>

          <button>-</button>
          <button>+</button>
          <Button primary>add to cart</Button>
        </BuyMe>
      </ProductHero>
      <FeaturesContainer>
        <Features>
          <h1>Features</h1>
          <p>{product.features}</p>
        </Features>
        <InTheBox>
          <h1>in the box</h1>
          {product.box.map((x) => (
            <>
              <p>
                <span>{x.qty}x </span>
                {x.name}
              </p>
            </>
          ))}
        </InTheBox>
      </FeaturesContainer>
      <Gallery>
        {product.gallery.map((g) => (
          <GalleryImage
            image={getImage(g.localFile.childImageSharp.gatsbyImageData)}
          />
        ))}
      </Gallery>
    </Section>
  );
};

const Section = styled.section`
  padding-top: 10rem 0;

  h1 {
    text-transform: uppercase;
  }
  @media ${theme.devices.md} {
    margin-top: 4rem 0;
  }
  @media ${theme.devices.lg} {
    margin-top: 6rem 0;
  }
`;

const ProductHero = styled.header`
  @media ${theme.devices.md} {
    display: flex;
  }
`;
const FeaturesContainer = styled.section`
  margin: 4rem 0;

  @media ${theme.devices.md} {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media ${theme.devices.lg} {
    margin: 8rem 0;
  }
`;
const Features = styled.div``;
const StyledImage = styled(GatsbyImage)`
  border-radius: 0.5rem;

  @media ${theme.devices.md} {
    width: 33rem;
  }
`;
const BuyMe = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media ${theme.devices.md} {
    padding: 4rem;
    ${theme.maxWidth.md};
  }
  @media ${theme.devices.lg} {
    padding: 4rem;
    ${theme.maxWidth.lg};
  }
`;
const InTheBox = styled.div`
  margin: 4rem 0;
  p {
    text-transform: capitalize;
  }
  span {
    color: ${theme.colors.primary.base};
    font-weight: 600;
    margin-right: 2rem;
  }
  @media ${theme.devices.md} {
    margin: 0 0 0 6rem;
  }
`;
const Gallery = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas:
    "a"
    "b"
    "c";
  @media ${theme.devices.md} {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-template-areas:
      "a c"
      "b c";
  }
  gap: 1.5rem;
`;
const GalleryImage = styled(GatsbyImage)`
  border-radius: 0.5rem;
  ${GalleryImage}:nth-child(1) {
    grid-area: a;
  }
  ${GalleryImage}:nth-child(2) {
    grid-area: b;
  }
  ${GalleryImage}:nth-child(3) {
    grid-area: c;
  }
`;

export default SingleProduct;
