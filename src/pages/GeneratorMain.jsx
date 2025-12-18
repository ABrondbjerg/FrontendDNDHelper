import { Link } from "react-router-dom";

export default function GeneratorMain() {
  return (
    <div>
      <h1>Generators</h1>
      <div className="button-group">
        <Link to="/generators/npc">
          <button>NPC</button>
        </Link>
        <Link to="/generators/town">
          <button>Town</button>
        </Link>
        <Link to="/generators/bbeg">
          <button>BBEG</button>
        </Link>
        <Link to="/generators/items">
          <button>Items</button>
        </Link>
        <Link to="/generators/hooks">
          <button>Hooks</button>
        </Link>
      </div>
    </div>
  );
}
