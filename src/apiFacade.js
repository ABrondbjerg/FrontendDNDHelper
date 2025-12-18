const BASE_URL = "http://localhost:7171/api/";
const LOGIN_ENDPOINT = "auth/login";
const REGISTER_ENDPOINT = "auth/register";

function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

/* Insert utility-methods from later steps 
here (REMEMBER to uncomment in the returned 
object when you do)*/

const login = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password,
  });
  return fetch(BASE_URL + LOGIN_ENDPOINT, options)
    .then(handleHttpErrors)
    .then((data) => {
      setToken(data.token);
      return data;
    });
};

const createUser = (user, password) => {
  const options = makeOptions("POST", false, {
    username: user,
    password: password,
  });
  return fetch(BASE_URL + REGISTER_ENDPOINT, options).then(handleHttpErrors);
};

const fetchData = (endpoint) => {
  const options = makeOptions("GET", true); //True add's the token
  return fetch(BASE_URL + endpoint, options).then(handleHttpErrors);
};

const makeOptions = (method, addToken, body) => {
  var opts = {
    method: method,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  };
  if (addToken && loggedIn()) {
    opts.headers["Authorization"] = `Bearer ${getToken()}`;
  }
  if (body) {
    opts.body = JSON.stringify(body);
  }
  return opts;
};

const setToken = (token) => {
  localStorage.setItem("jwtToken", token);
};

const getToken = () => {
  return localStorage.getItem("jwtToken");
};

const loggedIn = () => {
  const loggedIn = getToken() != null;
  return loggedIn;
};

const logout = () => {
  localStorage.removeItem("jwtToken");
};

const getUsernameAndRoles = () => {
  const token = getToken();
  if (token != null) {
    const payloadBase64 = getToken().split(".")[1];
    const decodedClaims = JSON.parse(window.atob(payloadBase64));
    const roles = decodedClaims.roles;
    const username = decodedClaims.username;
    return [username, roles];
  } else return [];
};

const hasUserAccess = (neededRole, loggedIn) => {
  const roles = getUsernameAndRoles()[1].split(",");
  return loggedIn && roles.includes(neededRole);
};
const getAllUsers = () => {
  return fetch(BASE_URL + "auth/users/", {
    headers: { Authorization: `Bearer ${getToken()}` },
  }).then(handleHttpErrors);
};

const updateUser = (username, user) => {
  return fetch(BASE_URL + `auth/users/${username}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(user),
  }).then(handleHttpErrors);
};

const deleteUser = (username) => {
  return fetch(BASE_URL + `auth/users/${username}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${getToken()}` },
  }).then(handleHttpErrors);
};

const facade = {
  makeOptions,
  setToken,
  getToken,
  loggedIn,
  login,
  createUser,
  logout,
  fetchData,
  getUsernameAndRoles,
  getAllUsers,
  updateUser,
  deleteUser,
  hasUserAccess,
};

export default facade;
