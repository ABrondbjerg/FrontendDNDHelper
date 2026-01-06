import { useState } from "react";
import npcData from "/data/npc.json";
import styles from "/src/styles/LayoutModule.module.css";
import { NavLink, Link } from "react-router-dom";

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
    <div className={styles.pageWrapper}>
     

      {/* main content */}
      <main className={styles.mainContent}>
        
        {/* Venstre side*/}
        <div className={styles.visualizer}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.selectorRow}>
              <button className={styles.arrowBtn}>←</button>
              <button className={styles.arrowBtn}>→</button>
            </div>
          ))}
        </div>

        {/* Højre side */}
        <div className={styles.infoSection}>
          <button onClick={generateNPC} className={styles.btnGray}>
            Random NPC
          </button>

          <div className={styles.npcCard}>
            <p><strong>Name:</strong> {npc?.name}</p>
            <p><strong>Race:</strong> {npc?.race}</p>
            <p><strong>Sex:</strong> {npc?.sex}</p>
            <p><strong>Profession:</strong> {npc?.profession}</p>
            <p><strong>Quirk:</strong> {npc?.quirk}</p>
            <p><strong>Personality:</strong> {npc?.personality}</p>
            <p><strong>Secret:</strong> {npc?.secret}</p>
          </div>

          <div className={styles.saveBtnContainer}>
            <button className={styles.btnGray}>Save NPC</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NPCGenerator;
