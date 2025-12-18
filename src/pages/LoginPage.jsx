import { useState } from "react";
import Admin from "../components/Admin";
import LogIn from "../components/auth/LogIn";
import LoggedIn from "../components/auth/LoggedIn";
import CreateUser from "./CreateUser";
import facade from "../apiFacade";

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
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

  return (
    <div className="page-container">
      <h1>Login Page</h1>
      <div>
        {!loggedIn ? (
          showRegister ? (
            <CreateUser
              onRegistered={() => setShowRegister(false)}
              onCancel={() => setShowRegister(false)}
            />
          ) : (
            <LogIn
              login={login}
              onRegisterClick={() => setShowRegister(true)}
            />
          )
        ) : isAdmin ? (
          <Admin logout={logout} username={username} />
        ) : (
          <div>
            <LoggedIn loggedIn={loggedIn} username={username} roles={roles} />
            <button onClick={logout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
