//import React from "react";
import { Navbar } from "flowbite-react";

import LoginModal from "./LoginModal";

const Nav = () => {
  return (
    <Navbar className="h-16 bg-amber-600" fluid rounded>
      <Navbar.Brand href="/">
        <img
          src="https://cdn.pixabay.com/photo/2018/04/12/04/39/om-3312546_1280.png"
          className="mr-3 h-8 sm:h-9"
          alt="YogaShala Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          YogaShala
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
        <Navbar.Link className="text-xl text-slate-200" href="/about">
          About
        </Navbar.Link>
        <Navbar.Link className="text-xl text-slate-200" href="/contact">
          Contact
        </Navbar.Link>
        <Navbar.Link className="text-xl text-slate-200" href="/admin">
          Admin
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
