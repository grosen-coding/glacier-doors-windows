import React from "react";
import Image from "next/image";
import AwardsSection from "./awards";
import FeaturedInstalls from "./featuredInstalls";
import FinanceSection from "./financing";
import InstagramSection from "./instagram/index.js";
import ProductsSection from "./products";
import ResourcesSection from "./resources";
import ReviewsSection from "./reviews";
import TechnologySection from "./technology";
import WindowStylesSection from "./windowStyles";
import ContactSection from "./contact";

const Main = () => {
  return (
    <>
      <FinanceSection />
      <AwardsSection />
      <ProductsSection />
      <TechnologySection />
      <WindowStylesSection />
      <ResourcesSection />
      <ReviewsSection />
      <FeaturedInstalls />
      <InstagramSection />
      <ContactSection />
    </>
  );
};

export default Main;
