import { useState } from "react";
import hookData from "/data/hook.json";
import styles from "/src/styles/LayoutModule.module.css";

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const HookGenerator = () => {
  const [hook, setHook] = useState(null);

  const generateHook = () => {
    const newHook = {
      beginning: randomFromArray(hookData.beginning),
      middle: randomFromArray(hookData.middle),
      end: randomFromArray(hookData.end),
      twist: randomFromArray(hookData.twist),
      consequence: randomFromArray(hookData.consequence),
    };
    setHook(newHook);
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
          <button onClick={generateHook} className={styles.btnGray}>
            Random Hook
          </button>

          <div className={styles.npcCard}>
            <p><strong>Beginning:</strong> {hook?.beginning}</p>
            <p><strong>Middle:</strong> {hook?.middle}</p>
            <p><strong>End:</strong> {hook?.end}</p>
            <p><strong>Twist:</strong> {hook?.twist}</p>
            <p><strong>Consequence:</strong> {hook?.consequence}</p>
          </div>
    
        

          <div className={styles.saveBtnContainer}>
            <button className={styles.btnGray}>Save NPC</button>
          </div>
        </div>
      </main>
    </div>
  );
};


export default HookGenerator;
