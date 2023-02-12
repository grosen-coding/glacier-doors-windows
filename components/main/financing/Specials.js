import React from "react";
import { specials } from "@/data/home";
import Button from "@/components/buttons/Button";

const Specials = () => {
  return (
    <div>
      <h2>Take Advantage of This Month's Specials!</h2>
      {specials.map((special, i) => (
        <div key={i}>
          <div>
            <i>{special.icon}</i>
          </div>
          <div>{special.text}</div>
        </div>
      ))}
      <Button text="Get a Free Quote" />
    </div>
  );
};

export default Specials;
