import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainLayout from "/src/components/layout/MainLayout.jsx";
import LoginLayout from "/src/components/layout/LoginLayout";
import GeneratorLayout from "/src/components/layout/GeneratorLayout";

import NPCGeneratorPage from "/src/pages/NPCPage.jsx";
import TownGeneratorPage from "/src/pages/TownPage";
import BBEGGeneratorPage from "/src/pages/BBEGPage";
import ItemGeneratorPage from "/src/pages/ItemPage";
import HookGeneratorPage from "/src/pages/HookPage";
import MainPage from "/src/pages/MainPage";
import GeneratorMain from "/src/pages/GeneratorMain";
import LoginPage from "/src/pages/LoginPage";
import RegisterPage from "/src/pages/RegisterPage";
import NotFoundPage from "/src/pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />

        <Route path="login" element={<LoginLayout />} />
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        <Route path="generators" element={<GeneratorLayout />}>
          <Route index element={<GeneratorMain />} />
          <Route path="npc" element={<NPCGeneratorPage />} />
          <Route path="town" element={<TownGeneratorPage />} />
          <Route path="bbeg" element={<BBEGGeneratorPage />} />
          <Route path="items" element={<ItemGeneratorPage />} />
          <Route path="hooks" element={<HookGeneratorPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
