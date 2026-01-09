import { useState } from "react"
import styles from "../../styles/Loginstyle.module.css";
import { useNavigate } from 'react-router-dom';

function LogIn({ login, onRegisterClick, message, clearMessage }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);
  const navigate = useNavigate();

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value });
    if (clearMessage) clearMessage();
  }

  return (
  <div className={styles.loginContainer}>
    <div className={styles.loginCard}>
      <h2>Login</h2>
      
      <form onSubmit={performLogin} className={styles.loginForm}>
        <div className={styles.inputGroup}>
          <label htmlFor="username">Username</label>
          <input 
            placeholder="Enter your username" 
            id="username" 
            onChange={onChange} 
            value={loginCredentials.username}
            autoComplete="username"
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Password</label>
          <input 
            placeholder="Enter your password" 
            id="password" 
            type="password" 
            onChange={onChange} 
            value={loginCredentials.password}
            autoComplete="current-password"
          />
        </div>

        <button type="submit" className={styles.btnLogin}>
          Login
        </button>
        
      </form>

      <div className={styles.divider}>or</div>

      <button 
        type="button" 
        className={styles.linkButton} 
       onClick={() => navigate('/register')}
      >
        Don't have an account? Create one
      </button>
    </div>
  </div>
);
};
export default LogIn