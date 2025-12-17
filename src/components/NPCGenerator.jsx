import { useState } from "react";
import npcData from "/data/npc.json";

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const NPCGenerator = () => {
  const [npc, setNpc] = useState(null);

  const generateNPC = () => {
    const newNpc = {
      name: randomFromArray(npcData.name),
      race: randomFromArray(npcData.race),
      sex: randomFromArray(npcData.sex),
      profession: randomFromArray(npcData.profession),
      quirk: randomFromArray(npcData.quirk),
      personality: randomFromArray(npcData.personalitie),
      secret: randomFromArray(npcData.secret),
    };
    setNpc(newNpc);
  };

  return (
    <div className="npc-generator">
      <h2>NPC Generator</h2>
      <button onClick={generateNPC} className="generate-btn">
        Generate NPC
      </button>

      {npc && (
        <div className="npc-card">
          <p>
            <strong>Name:</strong> {npc.name}
          </p>
          <p>
            <strong>Race:</strong> {npc.race}
          </p>
          <p>
            <strong>Sex:</strong> {npc.sex}
          </p>
          <p>
            <strong>Profession:</strong> {npc.profession}
          </p>
          <p>
            <strong>Quirk:</strong> {npc.quirk}
          </p>
          <p>
            <strong>Personality:</strong> {npc.personality}
          </p>
          <p>
            <strong>Secret:</strong> {npc.secret}
          </p>
        </div>
      )}
    </div>
  );
};

export default NPCGenerator;
