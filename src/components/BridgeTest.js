import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
import styled from "styled-components";
import { theme } from "../config/theme";
const BridgeTest = ({ children }) => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "image-hero.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 2000
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
              quality: 50
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);

  return (
    <StyledBgImage
      image={pluginImage}
      style={{ minWidth: 200, minHeight: 800 }}
    >
      {children}
    </StyledBgImage>
  );
};

const StyledBgImage = styled(BgImage)`
  ::before {
    background: ${theme.colors.primary.dark};
  }
  display: flex;
  width: 100%;

  margin-top: -80px;
`;
export default BridgeTest;
