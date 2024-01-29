/** @format */

import React, { useState, useEffect } from "react";
import fetchAdventureLog from "../fetchAdventureLog";

const AdventureLogDisplay = () => {
  const [log, setLog] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetchAdventureLog();
        setLog(result);
        setError("");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h2>Adventure Log</h2>
      <p>{log ? log : "No data available"}</p>
    </div>
  );
};

export default AdventureLogDisplay;
