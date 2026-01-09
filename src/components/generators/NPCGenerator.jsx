import { useState } from "react";
import npcData from "/data/npc.json";
import styles from "/src/styles/LayoutModule.module.css";
import { NavLink, Link } from "react-router-dom";

import halforc from "../../assets/halforc.png";
import elf from "../../assets/elf.png";
import human from "../../assets/human.png";
import dwarf from "../../assets/dwarf.png";
import tiefling from "../../assets/tiefling.png";
import gnome from "../../assets/gnome.png";
import dragonborn from "../../assets/dragonborn.png";
import halfling from "../../assets/halfling.png";

function randomFromArray(arr) {

  return arr[Math.floor(Math.random() * arr.length)];
}

const raceImages = {
  "Half-Orc": halforc,
  "Elf": elf,
  "Human": human,
  "Dwarf": dwarf,
  "Tiefling": tiefling,
  "Gnome": gnome,
  "Dragonborn": dragonborn,
  "Halfling": halfling
};

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
  
  const getNPCImage = () => {
    if (!npc || !npc.race) return null;
    return raceImages[npc.race];
  };


return (
    <div className={styles.pageWrapper}>
      <main className={styles.mainContent}>
        
        <div className={styles.visualizer}>
          {npc && getNPCImage() && (
            <img 
              src={getNPCImage()} 
              alt={`${npc.race} character`}
              className={styles.npcImage}
            />
          )}
          {!npc && (
            <p className={styles.placeholderText}>
              Click "Random NPC" to generate a character
            </p>
          )}
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
