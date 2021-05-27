import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { BgImage } from "gbimage-bridge";
const ArtDirectedBridgeTest = () => {
  const { mobileImage, desktopImage } = useStaticQuery(
    graphql`
      query {
        mobileImage: file(relativePath: { eq: "image-hero-m.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
        desktopImage: file(relativePath: { eq: "image-hero.jpg" }) {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    `
  );
  // Set up the array of image data and `media` keys.
  // You can have as many entries as you'd like.
  const sources = [
    ...getImage(mobileImage),
    {
      ...getImage(desktopImage),
      media: `(min-width: 491px)`,
    },
  ];

  return (
    <BgImage image={sources} style={{ minWidth: 200, minHeight: 200 }}>
      <div>Hello from BgImage!</div>
    </BgImage>
  );
};

export default ArtDirectedBridgeTest;
