import { useState, useEffect } from 'react'
import facade from '../apiFacade'

function LoggedIn( { loggedIn, username, roles }) {
  const [dataFromServer, setDataFromServer] = useState("Loading...")

  useEffect(()=>{
    const promise = facade.fetchData('protected/admin_demo');
    promise.then((data)=>{
        console.log(data);
        setDataFromServer(data);
    });
  },[]);

  return (
    <div>
      <h2>Data Received from server</h2>
      <h3>{username}</h3>
      <h3>{roles}</h3>
    </div>
  )
}
export default LoggedIn