import { useState } from "react";
import BBEGData from "/data/bbeg.json";
import styles from "/src/styles/LayoutModule.module.css";

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const BBEGGenerator = () => {
  const [bbeg, setBBEG] = useState(null);

  const generateBBEG = () => {
    const newBBEG = {
      name: randomFromArray(BBEGData.name),
      title: randomFromArray(BBEGData.title),
      description: randomFromArray(BBEGData.description),
      archetype: randomFromArray(BBEGData.archetype),
      goal: randomFromArray(BBEGData.goal),
      backstory: randomFromArray(BBEGData.backstory),
      quirk: randomFromArray(BBEGData.quirk),
      weakness: randomFromArray(BBEGData.weakness),
      plan: randomFromArray(BBEGData.plan),
      secret: randomFromArray(BBEGData.secret),
    };
    setBBEG(newBBEG);
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
          <button onClick={generateBBEG} className={styles.btnGray}>
            Random BBEG
          </button>

          <div className={styles.npcCard}>
            <p><strong>Name:</strong> {bbeg?.name}</p>
            <p><strong>Title:</strong> {bbeg?.title}</p>
            <p><strong>Description:</strong> {bbeg?.description}</p>
            <p><strong>Archetype:</strong> {bbeg?.archetype}</p>
            <p><strong>Goal:</strong> {bbeg?.goal}</p>
            <p><strong>Backstory:</strong> {bbeg?.backstory}</p>
            <p><strong>Quirk:</strong> {bbeg?.quirk}</p>
            <p><strong>Weakness:</strong> {bbeg?.weakness}</p>
            <p><strong>Plan:</strong> {bbeg?.plan}</p>
            <p><strong>Secret:</strong> {bbeg?.secret}</p>
          </div>

          <div className={styles.saveBtnContainer}>
            <button className={styles.btnGray}>Save BBEG</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BBEGGenerator;
