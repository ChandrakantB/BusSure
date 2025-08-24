import React, { useState } from "react";

export default function New() {
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [subdistrict, setSubdistrict] = useState("");
  const [villages, setVillages] = useState([]);
  const [error, setError] = useState(null);

  const fetchVillages = async () => {
    try {
      setError(null);
      setVillages([]);

      const res = await fetch(
        `http://localhost:3000/api/villages/${state}/${district}/${subdistrict}`
      );

      if (!res.ok) throw new Error("Failed to fetch villages");

      const data = await res.json();
      setVillages(data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Village Finder</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter district"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Enter subdistrict"
          value={subdistrict}
          onChange={(e) => setSubdistrict(e.target.value)}
        />
      </div>

      <button onClick={fetchVillages}>Get Villages</button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {villages.map((village, idx) => (
          <li key={idx}>{village}</li>
        ))}
      </ul>
    </div>
  );
}
