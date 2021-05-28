import React from "react";
import { graphql } from "gatsby";
import { theme } from "../../config/theme";
import styled from "styled-components";
import Layout from "../../components/Layout";
import CatList from "../../components/CatList";
import CallToAction from "../../components/CallToAction";
import SingleProduct from "../../components/SingleProduct";

const ProductPage = ({ data }) => {
  const product = data.strapiProduct;
  return (
    <Layout>
      <Container>
        <SingleProduct product={product} />
        <CatList />
        <CallToAction />
      </Container>
    </Layout>
  );
};

const Container = styled.div`
  ${theme.maxWidth.sixx};
  margin: 0 auto;
  padding: 0 1rem;
  @media ${theme.devices.xl} {
    padding: 0;
  }
`;

export const query = graphql`
  query ProductQuery($slug: String!) {
    strapiProduct(slug: { eq: $slug }) {
      id
      name
      description
      productimage {
        localFile {
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
          }
        }
      }
      price
      features
      box {
        qty
        name
      }
      gallery {
        localFile {
          childImageSharp {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: DOMINANT_COLOR
              quality: 100
            )
          }
        }
      }
    }
  }
`;
export default ProductPage;
