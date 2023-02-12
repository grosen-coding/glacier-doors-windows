import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import Button from "../buttons/Button";
import { services } from "@/data/home";

const ServicesBar = () => {
  return (
    <>
      <ul>
        {services.map((service, i) => (
          <li key={i}>
            <Link href={service.path}>
              <h2>{service.icon}</h2>
              <span>{service.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button text="Book an Appointment" />
    </>
  );
};

export default ServicesBar;
