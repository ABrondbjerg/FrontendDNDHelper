import LogIn from './components/Login';
import LoggedIn from './components/Loggedin';
import facade from './apiFacade';
import { useState } from "react"

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const logout = () => { facade.logout()
setLoggedIn(false) } 
  const login = (user, pass) => {facade.login(user,pass)
.then(res =>setLoggedIn(true));} 

  return (
    <div>
      {!loggedIn ? (<LogIn login={login} />) :
        (<div>
          <LoggedIn loggedIn={loggedIn} />
          <button onClick={logout}>Logout</button>
        </div>)}
    </div>
  )
}
export default App