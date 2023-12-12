//import React from "react";
import { Navbar } from "flowbite-react";
import logo from "../assets/anubhavyogashala_logo.png";

import LoginModal from "./LoginModal";

const Nav = () => {
  return (
    <Navbar className="bg-amber-600 h-18" fluid rounded>
      <Navbar.Brand href="/">
        <img src={logo} className="mr-3 h-auto sm:h-9" alt="YogaShala Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Anubhav YogaShala
        </span>
      </Navbar.Brand>

      <div className="flex md:order-2">
        <LoginModal />

        <Navbar.Toggle />
      </div>

      <Navbar.Collapse>
        <Navbar.Link className="text-xl text-slate-200" href="/" active>
          Home
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
