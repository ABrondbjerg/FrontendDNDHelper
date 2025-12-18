import { Link } from "react-router-dom";

export default function GeneratorMain() {
  return (
    <div>
      <h1>Generators</h1>
      <Link to="/generators/npc">NPC</Link>
      <Link to="/generators/town">Town</Link>
      <Link to="/generators/bbeg">BBEG</Link>
      <Link to="/generators/items">Items</Link>
      <Link to="/generators/hooks">Hooks</Link>
    </div>
  );
}
