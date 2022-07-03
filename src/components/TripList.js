import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

//styles
import "./TripList.css";

function TripList() {
  const [url, setUrl] = useState("http://localhost:3000/trips");
  const { data: trips } = useFetch(url);

  return (
    <div className="trip-list">
      <ul>
        {trips &&
          trips.map((trip) => (
            <li key={trip.id}>
              <h3>{trip.title}</h3>
              <p>{trip.price}</p>
            </li>
          ))}
      </ul>
      <div className="location-filters">
        <button
          onClick={() => setUrl("http://localhost:3000/trips?location=europe")}
        >
          Europe
        </button>
        <button onClick={() => setUrl("http://localhost:3000/trips")}>
          All locations
        </button>
      </div>
    </div>
  );
}

export default TripList;
