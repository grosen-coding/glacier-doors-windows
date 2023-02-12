import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import Button from "../buttons/Button";
import { navLinks } from "@/data/home";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Logo />
      </Link>

      <ul>
        {navLinks.map((link, i) => (
          <li key={i}>
            <Link href={link.path}>
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
      <Button text="Service Request" />
      <h3>Call Us Anytime: 1-800-455-4956</h3>
    </nav>
  );
};

export default Navbar;
