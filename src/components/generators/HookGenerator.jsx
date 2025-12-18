import { useState } from "react";
import hookData from "/data/hook.json";

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
    <div className="hook-generator">
      <h2>Hook Generator</h2>
      <button onClick={generateHook} className="generate-btn">
        Generate Hook
      </button>

      {hook && (
        <div className="hook-card">
          <p>
            <strong>Beginning:</strong> {hook.beginning}
          </p>
          <p>
            <strong>Middle:</strong> {hook.middle}
          </p>
          <p>
            <strong>End:</strong> {hook.end}
          </p>
          <p>
            <strong>Twist:</strong> {hook.twist}
          </p>
          <p>
            <strong>Consequence:</strong> {hook.consequence}
          </p>
        </div>
      )}
    </div>
  );
};

export default HookGenerator;
