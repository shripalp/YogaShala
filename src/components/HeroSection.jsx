import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../utilities/firebase";
import EventCard from "./EventCard";

function HeroSection() {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    const eventsCollection = collection(db, "events"); // Replace 'events' with your collection name
    const querySnapshot = await getDocs(eventsCollection);

    const events = [];
    querySnapshot.forEach((doc) => {
      events.push({ id: doc.id, ...doc.data() });
    });

    return events;
  };

  useEffect(() => {
    async function fetchEventData() {
      const data = await fetchEvents();
      setEvents(data);
    }
    fetchEventData();
  }, []);
  return (
    <div className="flex flex-row">
      <div className="text-center text-slate-600 p-4">
        <h1 className="text-4xl font-bold mb-2">Welcome to Our YogaShala</h1>
        <div>
          <h1>Our Schedule</h1>
          <ul className="flex flex-wrap m-4 p-4">
            {events.map((event) => (
              <li key={event.id}>
                <EventCard name={event.eventName} />
                {event.eventSchedule}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
