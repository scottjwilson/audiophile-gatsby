import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import logo from "../images/logo.svg";
import styled from "styled-components";
export function Logo() {
  return <Img src={logo} alt="audiophile logo" style={{ marginBottom: "0" }} />;
}

const Img = styled.img`
  margin-bottom: 0;
`;
