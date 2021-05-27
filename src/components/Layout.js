import React from "react";
import Header from "./Header";
import { GlobalStyle } from "./styles/GlobalStyles";
import "@fontsource/manrope";
import "@fontsource/manrope/800.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/200.css";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
