import Button from "@/components/buttons/Button";
import React, { useState } from "react";
import FooterMenu from "./FooterMenu";
import EstimateForm from "@/components/header/hero/EstimateForm";

const FooterSection = () => {
  const [showForm, setShowForm] = useState(false);

  const closeModal = () => {
    setShowForm(false);
  };

  return (
    <footer>
      <div>
        <h2>Let's Work Together On Your Next Window & Door Project!</h2>
        <Button
          text="Get Started with a Free Estimate"
          onClick={() => setShowForm(true)}
        />
      </div>
      <FooterMenu />
      {showForm && (
        <div>
          <span onClick={closeModal}>X</span>
          <EstimateForm />
        </div>
      )}
    </footer>
  );
};

export default FooterSection;
