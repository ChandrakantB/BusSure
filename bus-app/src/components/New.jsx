import React, { useState } from "react";

export default function New() {
  const [query, setQuery] = useState(""); // single input for searching
  const [results, setResults] = useState([]); // objects returned from backend
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchResults = async () => {
    try {
      setError(null);
      setLoading(true);
      setResults([]);

      const res = await fetch(`http://localhost:3000/api/search?q=${query}`);
      if (!res.ok) throw new Error("Failed to fetch results");

      const data = await res.json();
      setResults(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div style={{ padding: "20px" }}>
      <h2>Village Finder</h2>

      <div>
        <input
          type="text"
          placeholder="From"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={fetchResults} disabled={!query.trim()}>
          Search
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}

      {results.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Results:</h3>
          <ul>
            {results.map((obj, idx) => (
              <li key={idx}>
                <pre>{JSON.stringify(obj, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </div>     
      )}
      {results.length ==  0 && (
        <div style={{ marginTop: "20px" }}>
          <h3>Results:</h3>
          <p>no villages matched to you search</p>
        </div>     
      )}
      
    </div>

    </>
  );
}
