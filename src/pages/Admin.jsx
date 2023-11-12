//import Authentication from "../components/Authentication";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import EventForm from "../components/EventsForm";

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
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl font-bold">Admin Page</h1>
      <section id="eventform">{user ? <EventForm /> : ""}</section>
    </div>
  );
};

export default Admin;
