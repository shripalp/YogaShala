//import React from 'react'
//import Events from "../components/Events";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import EventForm from "../components/EventsForm";
import HeroSection from "../components/HeroSection";

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
    <div className="flex flex-col text-center text-black p-4">
      <section id="hero">
        <HeroSection />
      </section>
      <section>
        <div className="flex flex-col justify-center">
          <section id="eventform">{user ? <EventForm /> : ""}</section>
        </div>
      </section>
    </div>
  );
};

export default Home;
