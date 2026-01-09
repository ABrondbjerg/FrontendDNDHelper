import { useState } from "react";
import Admin from "../components/Admin";
import LogIn from "../components/auth/LogIn";
import LoggedIn from "../components/auth/LoggedIn";
import CreateUser from "./CreateUser";
import facade from "../apiFacade";
import styles from "../styles/Loginstyle.module.css";
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [roles, setRoles] = useState([]);
  const [showRegister, setShowRegister] = useState(false);
  const [registerMessage, setRegisterMessage] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const navigate = useNavigate();

  const logout = () => {
    facade.logout();
    setLoggedIn(false);
  };

  const login = (user, pass) => {
    facade.login(user, pass)
      .then(() => {
        setLoggedIn(true);
        setLoginMessage("");
        console.log("Now we are logged in");
        const [username, roles] = facade.getUsernameAndRoles();
        setUsername(username);
        setRoles(roles);
        navigate('/generators');
      })
      .catch((err) => {
        if (err.fullError) {
          err.fullError
            .then((e) => {
              const serverMsg = e && (e.message || e.warning || e.error || (typeof e === 'string' ? e : undefined));
              setLoginMessage(serverMsg || "Invalid username or password");
            })
            .catch(() => setLoginMessage("Invalid username or password"));
        } else {
          setLoginMessage("Invalid username or password");
        }
      });
  };
  const isAdmin = roles.includes("ADMIN") || username === "admin";

 return (
  <div className={styles.pageContainer}>
    {!loggedIn ? (
      showRegister ? (
        <CreateUser onBackToLogin={() => setShowRegister(false)} />
      ) : (
        <LogIn 
          login={login} 
          onRegisterClick={() => setShowRegister(true)} 
        />
      )
    ) : isAdmin ? (
      <Admin logout={logout} username={username} />
    ) : (
      <LoggedIn logout={logout} username={username} />
    )}
  </div>
);
};

export default LoginPage;
