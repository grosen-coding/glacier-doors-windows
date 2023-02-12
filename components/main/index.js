import React from "react";
import AwardsSection from "./awards";
import FeaturedInstalls from "./featuredInstalls";
import FinanceSection from "./financing";
import InstagramSection from "./instagram/index.js";
import ProductsSection from "./products";
import ResourcesSection from "./resources";
import ReviewsSection from "./reviews";
import TechnologySection from "./technology";
import WindowStylesSection from "./windowStyles";

const Main = () => {
  return (
    <main>
      <FinanceSection />
      <AwardsSection />
      <ProductsSection />
      <TechnologySection />
      <WindowStylesSection />
      <ResourcesSection />
      <ReviewsSection />
      <FeaturedInstalls />
      <InstagramSection />
    </main>
  );
};

export default Main;
