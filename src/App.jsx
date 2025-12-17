import { useState } from 'react'
import LogIn from './components/LogIn'
import LoggedIn from './components/LoggedIn'
import facade from './apiFacade'

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

const isAdmin = roles.includes("ADMIN");

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (isAdmin ?
        (<Admin logout={logout} username={username} />) :
        (<div>
          <LoggedIn loggedIn={loggedIn} username={username} roles={roles} />
          <button onClick={logout}>Logout</button>
        </div>)
        )}
    </div>
  )
}
export default App