import { useState } from "react";
import itemData from "/data/item.json";
import styles from "/src/styles/LayoutModule.module.css";

function randomFromArray(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const ItemGenerator = () => {
  const [item, setItem] = useState(null);

  const generateItem = () => {
    const newItem = {
      name: randomFromArray(itemData.name),
      type: randomFromArray(itemData.type),
      rarity: randomFromArray(itemData.rarity),
      attunement: randomFromArray(itemData.attunement),
      description: randomFromArray(itemData.description),
      effect: randomFromArray(itemData.effect),
      charges: randomFromArray(itemData.charges),
      origin: randomFromArray(itemData.origin),
      quirk: randomFromArray(itemData.quirk),
    };
    setItem(newItem);
  };

  return (
  <div className={styles.pageWrapper}>
    <main className={styles.mainContent}>
      
      {/* Venstre side - Visualizer */}
      <div className={styles.visualizer}>
        {[1, 2, 3].map((i) => (
          <div key={i} className={styles.selectorRow}>
            <button className={styles.arrowBtn}>←</button>
            <button className={styles.arrowBtn}>→</button>
          </div>
        ))}
      </div>

      {/* Højre side - Info */}
      <div className={styles.infoSection}>
        <button onClick={generateItem} className={styles.btnGray}>
          Random Item
        </button>

        <div className={styles.npcCard}>
          <p><strong>Name:</strong> {item?.name}</p>
          <p><strong>Type:</strong> {item?.type}</p>
          <p><strong>Rarity:</strong> {item?.rarity}</p>
          <p><strong>Attunement:</strong> {item?.attunement}</p>
          <p><strong>Description:</strong> {item?.description}</p>
          <p><strong>Effect:</strong> {item?.effect}</p>
          <p><strong>Charges:</strong> {item?.charges}</p>
          <p><strong>Origin:</strong> {item?.origin}</p>
          <p><strong>Quirk:</strong> {item?.quirk}</p>
        </div>

        <div className={styles.saveBtnContainer}>
          <button className={styles.btnGray}>Save Item</button>
        </div>
      </div>
    </main>
  </div>
);
};

export default ItemGenerator;
