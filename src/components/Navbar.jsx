//import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import ToggleModal from "./ToggleModal";

const Nav = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        setUser(user);
      } else {
        // User is signed out.
        setUser(null);
      }
    });

    return () => unsubscribe(); // Unsubscribe from the listener when the component unmounts.
  }, []);
  return (
    <Navbar fluid rounded>
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
        <ToggleModal />

        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/contact">Contact</Navbar.Link>
        <Navbar.Link href="/admin">Admin</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Nav;
