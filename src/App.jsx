//import { useState } from "react";
import Admin from "./components/Admin";
import LogIn from "./components/LogIn";
import LoggedIn from "./components/LoggedIn";
import CreateUser from "./pages/CreateUser";
//import facade from "./apiFacade";
import "./App.css";
import "./App.css";
//import LogIn from "./components/auth/LogIn";
//import LoggedIn from "./components/auth/LoggedIn";
//import facade from "./apiFacade";

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
  /*const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

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
  const isAdmin = roles.includes("ADMIN") || username === "admin";
*/
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

    /*
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (isAdmin || loggedIn ?
        (<Admin logout={logout} username={username} />) :
        (<div>
          <LoggedIn loggedIn={loggedIn} username={username} roles={roles} />
          <button onClick={logout}>Logout</button>
        </div>)
        )}
      {!loggedIn ? (
        showRegister ? (
          <CreateUser onRegistered={() => setShowRegister(false)} onCancel={() => setShowRegister(false)} />
        ) : (
          <LogIn login={login} onRegisterClick={() => setShowRegister(true)} />
        )
      ) : (
        <div>
          <LoggedIn loggedIn={loggedIn} username={username} roles={roles} />
          <button onClick={logout}>Logout</button>
        </div>
      )}
    </div>
    */
  );
}

export default App;
