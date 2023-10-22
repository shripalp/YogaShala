/* eslint-disable react/prop-types */
//import React from "react";
import yoga from "../assets/astangayoga.jpg";

function EventCard(props) {
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={yoga} alt="Sunset in the mountains" />
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
      </div>
    </div>
  );
}

export default EventCard;
