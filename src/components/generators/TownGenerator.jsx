import { useState } from "react";
import townData from "/data/town.json";
import styles from "/src/styles/LayoutModule.module.css";

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
  <div className={styles.pageWrapper}>
    <main className={styles.mainContent}>
      
      {/* Venstre side - Visualizer */}
      <div className={styles.visualizer}>
        
      </div>

      {/* Højre side - Info */}
      <div className={styles.infoSection}>
        <button onClick={generateTown} className={styles.btnGray}>
          Random Town
        </button>

        <div className={styles.npcCard}>
          <p><strong>Name:</strong> {town?.name}</p>
          <p><strong>Size:</strong> {town?.size}</p>
          <p><strong>Description:</strong> {town?.description}</p>
          <p><strong>Landmark:</strong> {town?.landmark}</p>
          <p><strong>Shop:</strong> {town?.shop}</p>
          <p><strong>Quirk:</strong> {town?.quirk}</p>
          <p><strong>Rumor:</strong> {town?.rumor}</p>
        </div>

        <div className={styles.saveBtnContainer}>
          <button className={styles.btnGray}>Save Town</button>
        </div>
      </div>
    </main>
  </div>
);
};

export default TownGenerator;
