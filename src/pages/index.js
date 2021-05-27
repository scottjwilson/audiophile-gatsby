import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import CatList from "../components/CatList";
import FeaturedProducts from "../components/FeaturedProducts";
import CallToAction from "../components/CallToAction";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <CatList />
      <FeaturedProducts />
      <CallToAction />
    </Layout>
  );
};

export default HomePage;
