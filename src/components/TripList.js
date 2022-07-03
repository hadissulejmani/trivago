import { useState, useEffect } from "react";

//styles
import "./TripList.css";

function TripList() {
  const [trips, setTrips] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/trips");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTrips(data));
  }, [url]);

  return (
    <div className="trip-list">
      <ul>
        {trips.map((trip) => (
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
