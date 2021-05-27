import React from "react";
import { Link, graphql } from "gatsby";
import { theme } from "../../config/theme";
import styled from "styled-components";
import Layout from "../../components/Layout";
import CatList from "../../components/CatList";
import CallToAction from "../../components/CallToAction";
import PageHero from "../../components/PageHero";
import ProductList from "../../components/ProductList";

const CategoryPage = ({ data }) => {
  const products = data.strapiCategory.products;
  const title = data.strapiCategory.name;
  return (
    <Layout>
      <PageHero title={title} />
      <Container>
        <ProductList products={products} />
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
  query CategoryQuery($slug: String!) {
    strapiCategory(slug: { eq: $slug }) {
      name
      products {
        id
        slug
        name
        description
        productimage {
          localFile {
            childImageSharp {
              gatsbyImageData(
                layout: FULL_WIDTH
                placeholder: BLURRED
                aspectRatio: 1.3
              )
            }
          }
        }
      }
    }
  }
`;
export default CategoryPage;
