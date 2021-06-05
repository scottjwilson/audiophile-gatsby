import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import styled from "styled-components";
import { theme } from "../config/theme";
import { useStaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const CatList = () => {
  const data = useStaticQuery(graphql`
    query {
      allStrapiCategory {
        nodes {
          name
          slug
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(placeholder: TRACED_SVG)
              }
            }
          }
        }
      }
    }
  `);

  const {
    allStrapiCategory: { nodes: categories },
  } = data;

  return (
    <Container>
      {categories.map((cat, index) => {
        return (
          <Card key={index} to={`/categories/${cat.slug}`}>
            <ImageRelative>
              <ImageAbsolute>
                <GatsbyImage
                  image={getImage(cat.image.localFile.childImageSharp)}
                  alt="category image"
                />
              </ImageAbsolute>
            </ImageRelative>

            <TextBox>
              <h2>{cat.name}</h2>

              <h6>
                shop <AiOutlineRight />
              </h6>
            </TextBox>
          </Card>
        );
      })}
    </Container>
  );
};

const Container = styled.section`
  ${theme.maxWidth.sixx};
  margin: 8rem auto 6rem auto;

  @media ${theme.devices.md} {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    padding: 0 1rem;
    margin: 12rem auto 8rem auto;
  }
  @media ${theme.devices.lg} {
    gap: 1rem;
  }
  @media ${theme.devices.xl} {
    padding: 0;
  }
`;

const Card = styled(Link)`
  cursor: pointer;
  // position: relative;
  background: ${theme.colors.gray.two};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.7rem;
  height: 14rem;

  text-decoration: none;
  color: ${theme.colors.gray.five};
  transition: all 0.2s;
  margin: 6rem 1rem;
  &:hover {
    transform: translateY(-0.5rem);
    color: ${theme.colors.primary.base};
  }

  @media ${theme.devices.md} {
    height: 12rem;
    margin: 0;
  }
`;

const ImageRelative = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageAbsolute = styled.div`
  position: absolute;
  top: -4rem;
  @media ${theme.devices.md} {
    position: absolute;
    top: -7rem;
  }
  margin: 0 auto;
  height: 15rem;
  width: 15rem;
`;

const TextBox = styled.section`
  text-transform: uppercase;
  text-align: center;

  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: flex-end;

  h2 {
    font-size: 1.2rem;
  }

  h6 {
    color: ${theme.colors.gray.four};
  }
`;

export default CatList;
