import React from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import { useState } from "react";
import { windowStyles } from "@/data/home";

const WindowStylesSection = () => {
  const [selectedStyle, setSelectedStyle] = useState(windowStyles[0]);

  return (
    <section>
      <h2>Our Modern Window Styles</h2>
      <div>
        <div>
          <ul>
            {windowStyles.map((style, i) => (
              <li key={i}>
                <button onClick={() => setSelectedStyle(style)}>
                  {style.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div>
            <Image src={selectedStyle.image} alt="" />
          </div>
          <div>
            <h3>{selectedStyle.name} Windows</h3>
            <p>{selectedStyle.text}</p>
            <Link href={`/${selectedStyle.title}-windows`}>
              <Button text="Learn More" />
            </Link>
          </div>
        </div>
      </div>
      <h3>Energy Efficient Windows and Doors are a Great Investment</h3>
      <p>
        Are your windows and doors in good shape? When was the last time you had
        your windows and doors replaced? If it wasn’t recently, now is a good
        time to explore your options for replacement windows, and a new front
        entry door.
      </p>
      <p>
        As a homeowner it’s important to invest in your home. Each renovation
        project you invest in will help maintain your home, improve its overall
        value and functionality. New windows and doors are a great investment
        that add value to your home. When installed by a professional, upgrading
        to new windows will help improve your homes overall energy efficiency,
        increase its value on the real estate market, improve curb appeal, and
        provide you with great peace of mind through a strong product warranty.
        These factors make new windows and doors a great investment worth
        considering when planning to make upgrades to your property. At EcoTech,
        our window and door professionals can help you with all your window and
        door needs.
      </p>
    </section>
  );
};

export default WindowStylesSection;
