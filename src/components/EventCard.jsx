/* eslint-disable react/prop-types */
import yoga from "../assets/astangayoga.jpg";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../utilities/firebase";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

function EventCard(props) {
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

  const handleDelete = async (e) => {
    try {
      await deleteDoc(doc(db, `events/${props.id}`));
      window.location.reload();
      console.log("Document successfully deleted!");
    } catch (error) {
      console.error("Error deleting document: ", error);
    }
  };

  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={props.url} alt="Image" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{props.eventname}</div>
          <p className="text-gray-700 text-base">{props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.location}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {props.schedule}
          </span>
        </div>
        {user ? (
          <div className="p-4">
            <button type="submit" onClick={handleDelete}>
              Delete
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default EventCard;
