import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";

const StackedBridgeTest = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "image-hero-m.jpg" }) {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    `
  );
  const pluginImage = getImage(placeholderImage);

  // Watch out for CSS's stacking order, especially when styling the individual
  // positions! The lowermost image comes last!
  const backgroundFluidImageStack = [
    `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
    pluginImage,
  ].reverse();

  return (
    <BgImage
      image={backgroundFluidImageStack}
      style={{ minWidth: 200, minHeight: 200 }}
    >
      <div>Hello from BgImage!</div>
    </BgImage>
  );
};

export default StackedBridgeTest;
