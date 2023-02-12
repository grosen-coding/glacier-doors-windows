import React from "react";
import CostCalculator from "./CostCalculator";
import LoanCard from "./LoanCard";
import Specials from "./Specials";
import Steps from "./Steps";

const FinanceSection = () => {
  return (
    <section>
      <h2>Financing Options</h2>
      <CostCalculator />
      <LoanCard />
      <Specials />
      <Steps />
    </section>
  );
};

export default FinanceSection;
