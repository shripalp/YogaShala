/* eslint-disable react/prop-types */
//import yoga from "../assets/astangayoga.jpg";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utilities/firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

function EventCard(props) {
  const [user, setUser] = useState(null);
  const [register, setRegister] = useState(false);

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

  const handleDelete = async () => {
    try {
      await deleteDoc(doc(db, `events/${props.id}`));
      window.location.reload();
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };
  const handleRegister = () => {
    setRegister(true);
  };

  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={props.url} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {props.eventname}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.location}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props.description}
          </p>
          <button
            className="text-lg font-semibold rounded-full bg-orange-300 px-4"
            type="submit"
            onClick={handleRegister}
          >
            Register
          </button>
        </div>
      </div>
      {register ? (
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSdm6Q6PM-1mLLqN-qsL05tHF5Z47G2f8cqrBXYI_HU238mxlA/viewform?embedded=true"
          width="640"
          height="658"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      ) : (
        ""
      )}

      {user ? (
        <div className="p-2">
          <button
            className="text-lg font-semibold rounded-full bg-orange-300 px-4"
            type="submit"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default EventCard;
