import React from "react";
import Header from "./Header";
import TechCard from "./TechCard";
import { technologies } from "@/data/home";

const TechnologySection = () => {
  return (
    <section>
      <Header />
      {technologies.map((tech, i) => (
        <TechCard key={i} tech={tech} />
      ))}
    </section>
  );
};

export default TechnologySection;
