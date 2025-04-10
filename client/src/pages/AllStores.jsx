import React, { useEffect, useState } from "react";
import axios from "axios";

const AllStores = () => {
  const [stores, setStores] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStores = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/stores");
        setStores(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch stores");
      }
    };

    fetchStores();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Store List</h2>
      {error && <p>{error}</p>}

      {stores.length === 0 ? (
        <p>No stores yet</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {stores.map((store) => (
            <li
              key={store.id}
              style={{
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "1rem",
                marginBottom: "1rem",
              }}
            >
              <h3>{store.name}</h3>
              <p>{store.description}</p>
              <p> Rating: {store.rating}</p>
              <p style={{ fontSize: "0.8rem", color: "#666" }}>
                User ID: {store.userId}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllStores;
