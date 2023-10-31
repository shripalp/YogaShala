//import React from 'react'
//import Events from "../components/Events";
import EventForm from "../components/EventsForm";
import HeroSection from "../components/HeroSection";

import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
const Home = () => {
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
    <div>
      <section id="hero">
        <HeroSection />
      </section>
      <section id="eventform">{user ? <EventForm /> : ""}</section>
    </div>
  );
};

export default Home;
