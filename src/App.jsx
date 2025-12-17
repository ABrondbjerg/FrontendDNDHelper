import { useState } from 'react'
import LogIn from './components/LogIn'
import LoggedIn from './components/LoggedIn'
import CreateUser from './pages/CreateUser'
import facade from './apiFacade'
import './App.css'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [roles, setRoles] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

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
  )
}
export default App