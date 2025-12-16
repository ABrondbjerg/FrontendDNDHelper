import { useState } from "react";
import NPCGeneratorPage from "./pages/NPCPage";
import TownGeneratorPage from "./pages/TownPage";
import BBEGGeneratorPage from "./pages/BBEGPage";
import ItemGeneratorPage from "./pages/ItemPage";
import "./App.css";
import HookGeneratorPage from "./pages/HookPage";

function App() {
  return (
    <>
      <NPCGeneratorPage />
      <TownGeneratorPage />
      <BBEGGeneratorPage />
      <ItemGeneratorPage />
      <HookGeneratorPage />
    </>
  );
}

export default App;
