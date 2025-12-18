import { useState } from "react";
import itemData from "/data/item.json";

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
    <div className="item-generator">
      <h2>Item Generator</h2>
      <button onClick={generateItem} className="generate-btn">
        Generate Item
      </button>

      {item && (
        <div className="item-card">
          <p>
            <strong>Name:</strong> {item.name}
          </p>
          <p>
            <strong>Type:</strong> {item.type}
          </p>
          <p>
            <strong>Rarity:</strong> {item.rarity}
          </p>
          <p>
            <strong>Attunement:</strong> {item.attunement}
          </p>
          <p>
            <strong>Description:</strong> {item.description}
          </p>
          <p>
            <strong>Effect:</strong> {item.effect}
          </p>
          <p>
            <strong>Charges:</strong> {item.charges}
          </p>
          <p>
            <strong>Origin:</strong> {item.origin}
          </p>
          <p>
            <strong>Quirk:</strong> {item.quirk}
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemGenerator;
