import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://digiagri-backend.onrender.com/some-route")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Erreur:", err));
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Digiagri Dashboard</h1>
      <p>Soil Moisture: {data.soilMoisture}%</p>
      <p>Temperature: {data.temperature}°C</p>
    </div>
  );
}

export default App;

