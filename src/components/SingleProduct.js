import React, { useState, useContext } from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { theme } from "../config/theme";
import { StoreContext } from "../contexts/StoreContext";
import { Button } from "./Button";
import { AiFillBackward } from "react-icons/ai";
const SingleProduct = ({ product }) => {
  const productImage =
    product.productimage.localFile.childImageSharp.gatsbyImageData;

  const productId = product.id;

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(product.price);
  return (
    <>
      <GoBack to="/">
        {" "}
        <BackIcon />
        go back
      </GoBack>
      <Section>
        <ProductHero>
          <StyledImage image={getImage(productImage)} alt="product image" />
          <BuyMe>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <h3>${price * qty}</h3>

            <PurchaseWrapper>
              <Quantity>
                <button onClick={() => setQty(qty - 1)}>-</button>
                <span>{qty}</span>
                <button onClick={() => setQty(qty + 1)}>+</button>
              </Quantity>
              <Button primary="true">add to cart</Button>
            </PurchaseWrapper>
          </BuyMe>
        </ProductHero>
        <FeaturesContainer>
          <Features>
            <h1>Features</h1>
            <p>{product.features}</p>
          </Features>
          <InTheBox>
            <h1>in the box</h1>
            {product.box.map((x, index) => (
              <div key={index}>
                <p>
                  <span>{x.qty}x </span>
                  {x.name}
                </p>
              </div>
            ))}
          </InTheBox>
        </FeaturesContainer>
        <Gallery>
          {product.gallery.map((g, index) => (
            <React.Fragment key={index}>
              <GatsbyImage
                image={getImage(g.localFile.childImageSharp.gatsbyImageData)}
                className="galleryimage"
                alt="gallery image"
              />
            </React.Fragment>
          ))}
        </Gallery>
      </Section>
    </>
  );
};

const Section = styled.section`
  margin-top: 1rem;
  h1 {
    text-transform: uppercase;
  }
`;

const GoBack = styled(Link)`
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  color: ${theme.colors.primary.dark};

  transition: all 0.2s;

  &:hover {
    color: ${theme.colors.primary.base};
  }
`;

const BackIcon = styled(AiFillBackward)`
  color: ${theme.colors.primary.four};

  font-size: 1.2rem;
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
const PurchaseWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

const Quantity = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  border-radius: 0.2rem;
  background: ${theme.colors.gray.two};
  span {
    font-weight: 800;
  }
  button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
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

  .galleryimage {
    border-radius: 0.5rem;

    &:nth-child(1) {
      grid-area: a;
    }
    &:nth-child(2) {
      grid-area: b;
    }
    &:nth-child(3) {
      grid-area: c;
    }
  }
`;

export default SingleProduct;
