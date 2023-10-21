import Authentication from "../components/Authentication";
import EventForm from "../components/EventsForm";
import Navbar from "../components/Navbar";
import { getAuth } from "firebase/auth";

import { useEffect, useState } from "react";

const Admin = () => {
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
      <Navbar />
      <Authentication />

      {user ? <EventForm /> : ""}
    </div>
  );
};

export default Admin;
