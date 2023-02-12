import Button from "@/components/buttons/Button";
import Link from "next/link";
import React from "react";

const FeaturedInstalls = () => {
  return (
    <section>
      <h2>Featured Window Installations</h2>
      <div>Project Image Slider</div>
      <Link href="/portfolio">
        <Button text="View More" />
      </Link>
    </section>
  );
};

export default FeaturedInstalls;
