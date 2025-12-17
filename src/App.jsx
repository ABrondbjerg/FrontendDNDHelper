import { useState } from 'react'
import LogIn from './components/LogIn'
import LoggedIn from './components/LoggedIn'
import facade from './apiFacade'
import NPCGeneratorPage from "./pages/NPCPage";
import TownGeneratorPage from "./pages/TownPage";
import BBEGGeneratorPage from "./pages/BBEGPage";
import ItemGeneratorPage from "./pages/ItemPage";
import "./App.css";
import HookGeneratorPage from "./pages/HookPage";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [roles, setRoles] = useState([]);

  const logout = () => { 
    facade.logout()
    setLoggedIn(false);
   } 

  const login = (user, pass) => {
    facade.login(user, pass)
    .then(()=>{
      setLoggedIn(true);
      console.log("Now we are logged in");
      const [username, roles] = facade.getUsernameAndRoles();
      setUsername(username);
      setRoles(roles);
    });
  } 

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn loggedIn={loggedIn} username={username} roles={roles} />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
}

export default App;

export default App