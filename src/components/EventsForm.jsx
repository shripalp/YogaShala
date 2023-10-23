import { useState } from "react";
import { db } from "../utilities/firebase";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function EventForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventLocation: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    const eventsCollection = collection(db, "events");
    try {
      const docRef = await addDoc(eventsCollection, formData);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setIsSubmitted(true);
    // Automatically hide the message after 5 seconds (5000 milliseconds)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
    setFormData({
      eventSchedule: "",
      eventName: "",
      eventLocation: "",
      eventDescription: "",
      eventUrl: "",
    });
    navigate("/");
  };

  return (
    <div className="container mx-auto text-slate-600 p-4">
      <h2 className="text-2xl font-bold marker:font-bold mb-4">
        Event Announcement
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="eventName" className="block font-medium">
            Event Name:
          </label>
          <input
            placeholder="type event name here"
            type="text"
            id="eventName"
            name="eventName"
            value={formData.eventName}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="eventDate" className="block font-medium">
            Event Schedule:
          </label>
          <input
            type="text"
            id="eventSchedule"
            name="eventSchedule"
            value={formData.eventSchedule}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="eventLocation" className="block font-medium ">
            Event Location:
          </label>
          <input
            placeholder="type event location here"
            type="text"
            id="eventLocation"
            name="eventLocation"
            value={formData.eventLocation}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        <div>
          <label htmlFor="eventUrl" className="block font-medium ">
            Image Url:
          </label>
          <input
            placeholder="type event location here"
            type="url"
            id="eventUrl"
            name="eventUrl"
            value={formData.eventUrl}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>
        
        <div>
          <label htmlFor="eventDescription" className="block font-medium ">
            Event Description:
          </label>
          <textarea
            placeholder="type event decsription here"
            id="eventDescription"
            name="eventDescription"
            value={formData.eventDescription}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-lg py-2 font-medium hover:bg-blue-600"
        >
          Announce Event
        </button>
      </form>
      {isSubmitted && (
        <div className="text-2xl text-slate-600">
          Form submitted successfully! This message will disappear in 5 seconds.
        </div>
      )}
    </div>
  );
}

export default EventForm;
