import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddStore = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rating: "",
  });

  const [message, setMessage] = useState("");
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (role === "Store Owner" || role === "System Administrator") {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
      setMessage("You are not authorized to create a store.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    try {
      await axios.post("http://localhost:5000/api/stores/create", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setMessage("Store created successfully");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error(err);
      setMessage("Failed to create store.");
    }
  };

  if (!isAuthorized) {
    return <div style={{ padding: "2rem" }}>{message}</div>;
  }

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Create Store</h2>
      {message && <p>{message}</p>}

      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", maxWidth: "300px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Store Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          step="0.1"
          name="rating"
          placeholder="Rating"
          value={formData.rating}
          onChange={handleChange}
          required
        />
        <button type="submit" style={{ marginTop: "1rem" }}>
          Create Store
        </button>
      </form>
    </div>
  );
};

export default AddStore;
