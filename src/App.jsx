import { useState } from "react";
import LogIn from "./components/auth/LogIn";
import LoggedIn from "./components/auth/LoggedIn";
import facade from "./apiFacade";

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

import "./App.css";

import { Routes, Route } from "react-router-dom";

import MainLayout from "./components/layout/MainLayout";
import LoginLayout from "./components/layout/LoginLayout";
import GeneratorLayout from "./components/layout/GeneratorLayout";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade.login(user, pass).then(() => {
      setLoggedIn(true);
      console.log("Now we are logged in");
      const [username, roles] = facade.getUsernameAndRoles();
      setUsername(username);
      setRoles(roles);
    });
  };

  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />

        <Route path="login" element={<LoginLayout />} />
        <Route index element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>

      <Route path="generators" element={<GeneratorLayout />}>
        <Route index element={<GeneratorMain />} />
        <Route path="npc" element={<NPCGeneratorPage />} />
        <Route path="town" element={<TownGeneratorPage />} />
        <Route path="bbeg" element={<BBEGGeneratorPage />} />
        <Route path="items" element={<ItemGeneratorPage />} />
        <Route path="hooks" element={<HookGeneratorPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
/*<div>
      {!loggedIn ? (
        <LogIn login={login} />
      ) : (
        <div>
          <LoggedIn loggedIn={loggedIn} username={username} roles={roles} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>*/
