import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { theme } from "../config/theme";
import { Button } from "../components/Button";

const ProductList = ({ products }) => {
  return (
    <Section>
      {products.map((product, index) => (
        <article key={index}>
          <StyledImage
            image={getImage(
              product.productimage.localFile.childImageSharp.gatsbyImageData
            )}
          />
          <Text>
            <h1>{product.name}</h1>
            <p>{product.description}</p>

            <Button primary to={`/products/${product.slug}`}>
              see product
            </Button>
          </Text>
        </article>
      ))}
    </Section>
  );
};

const Section = styled.section`
  article {
    display: flex;
    flex-direction: column;
    margin: 6rem 0;

    @media ${theme.devices.lg} {
      flex-direction: row;
    }
  }

  article:nth-child(even) {
    @media ${theme.devices.lg} {
      flex-direction: row-reverse;
    }
  }
`;

const StyledImage = styled(GatsbyImage)`
  border-radius: 0.5rem;
`;

const Text = styled.section`
  ${theme.maxWidth.xl};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  margin: 2rem auto;
  text-align: center;

  @media ${theme.devices.md} {
    padding: 0 4rem;
  }
  @media ${theme.devices.lg} {
    text-align: left;
    align-items: flex-start;
  }

  h1 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }
  p {
    ${theme.colors.gray.five};
  }
`;

export default ProductList;
