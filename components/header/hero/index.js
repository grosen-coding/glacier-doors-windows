import React from "react";
import Button from "../../buttons/Button";
import EstimateForm from "../../forms/EstimateForm";

const Hero = () => {
  return (
    <>
      <div>
        <div>
          <h2>Premium Quality Products with Premium Quality Service</h2>
          <h1>Glacier Doors & Windows</h1>
          <Button text="Check Out Our Financing!" />
        </div>
        <div>
          <EstimateForm />
        </div>
      </div>
    </>
  );
};

export default Hero;
