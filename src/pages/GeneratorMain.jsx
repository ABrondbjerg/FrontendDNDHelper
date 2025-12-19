import { Link } from "react-router-dom";
import "/src/styles/GeneratorMainStyle.css";
import npcBg from "../assets/npc-bg.png";
import npcFigure from "../assets/npc-figure.png";
import townBg from "../assets/town-bg.png";
import townFigure from "../assets/town-figure.png";
/*import bbegBg from "../assets/bbeg-bg.png";
import bbegFigure from "../assets/bbeg-figure.png";
import itemBg from "../assets/item-bg.png";
import itemFigure from "../assets/item-figure.png";
import hookBg from "../assets/hook-bg.png";
import hookFigure from "../assets/hook-figure.png";
*/

export default function GeneratorMain() {
  const generators = [
    { name: "NPC", path: "/generators/npc", image: npcBg, figure: npcFigure },
    {
      name: "Town",
      path: "/generators/town",
      image: townBg,
      figure: townFigure,
    },
    { name: "BBEG", path: "/generators/bbeg", image: npcBg, figure: npcFigure },
    {
      name: "Items",
      path: "/generators/items",
      image: npcBg,
      figure: npcFigure,
    },
    {
      name: "Hooks",
      path: "/generators/hooks",
      image: npcBg,
      figure: npcFigure,
    },
  ];

  return (
    <div className="generators-container">
      <h1>Generators</h1>
      <div className="generators-list">
        {generators.map((gen) => (
          <Link key={gen.path} to={gen.path} className="generator-card">
            <div
              className="generator-banner"
              style={{ backgroundImage: `url(${gen.image})` }}
            >
              <button className="generator-button">{gen.name}</button>
              <img
                src={gen.figure}
                alt={gen.name}
                className="generator-figure"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
