import React from "react";
import Image from "next/image";
import { products } from "@/data/home";

const ProductsSection = () => {
  return (
    <section>
      <h2>Our Product Line</h2>
      <p>
        EcoTech Windows and Doors offers a full suite of premium and energy
        efficient Windows & Doors for Canada’s Homeowners. Contact us today just
        speak with a sales representative about the windows and doors perfect
        for your home.
      </p>
      {products.map((product, index) => {
        return (
          <div key={index}>
            <Image src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.text}</p>
          </div>
        );
      })}
    </section>
  );
};

export default ProductsSection;
