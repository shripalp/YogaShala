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
    <div
      className="text-center text-slate-900 p-4 bg-cover bg-center h-screen"
      style={{
        backgroundImage:
          'url("https://cdn.pixabay.com/photo/2020/08/31/20/26/zen-5533537_640.jpg")',
      }}
    >
      <h1 className="text-4xl font-bold mt-6 mb-6">Welcome to YogaShala</h1>

      <div>
        <h1 className="text-2xl font-bold mb-6">Our Schedule</h1>
        <ul className="flex flex-wrap gap-10 p-4 mx-auto justify-center">
          {events.map((event) => (
            <li key={event.id}>
              <EventCard
                eventname={event.eventName}
                description={event.eventDescription}
                schedule={event.eventSchedule}
                location={event.eventLocation}
                imageLink={event.eventImageLink}
                registrationLink={event.eventRegistrationLink}
                id={event.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HeroSection;
