import { useState } from "react";
import townData from "/data/town.json";

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const TownGenerator = () => {
  const [town, setTown] = useState(null);

  const generateTown = () => {
    const newTown = {
      name: randomFromArray(townData.name),
      size: randomFromArray(townData.size),
      description: randomFromArray(townData.description),
      landmark: randomFromArray(townData.landmark),
      shop: randomFromArray(townData.shop),
      quirk: randomFromArray(townData.quirk),
      rumor: randomFromArray(townData.rumor),
    };
    setTown(newTown);
  };

  return (
    <div className="npc-generator">
      <h2>NPC Generator</h2>
      <button onClick={generateTown} className="generate-btn">
        Generate NPC
      </button>

      {town && (
        <div className="npc-card">
          <p>
            <strong>Name:</strong> {town.name}
          </p>
          <p>
            <strong>Size:</strong> {town.size}
          </p>
          <p>
            <strong>Description:</strong> {town.description}
          </p>
          <p>
            <strong>Landmark:</strong> {town.landmark}
          </p>
          <p>
            <strong>Quirk:</strong> {town.quirk}
          </p>
          <p>
            <strong>Rumor:</strong> {town.rumor}
          </p>
        </div>
      )}
    </div>
  );
};

export default TownGenerator;
