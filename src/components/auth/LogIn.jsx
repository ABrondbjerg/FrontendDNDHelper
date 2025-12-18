import { useState } from "react"

function LogIn({ login, onRegisterClick }) {
  const init = { username: "", password: "" };
  const [loginCredentials, setLoginCredentials] = useState(init);

  const performLogin = (evt) => {
    evt.preventDefault();
    login(loginCredentials.username, loginCredentials.password);
  }
  const onChange = (evt) => {
    setLoginCredentials({ ...loginCredentials,[evt.target.id]: evt.target.value })
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={performLogin}>
        <input placeholder="User Name" id="username" onChange={onChange} value={loginCredentials.username} />
        <input placeholder="Password" id="password" type="password" onChange={onChange} value={loginCredentials.password} />
        <button type="submit">Login</button>
      </form>
      <button type="button" className="link-button" onClick={onRegisterClick}>Create user</button>
    </div>
  )
}
export default LogIn