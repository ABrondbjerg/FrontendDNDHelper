import { useState, useEffect } from 'react'
import facade from '../apiFacade'

function Admin({ logout, username }) {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({ username: '', password: '' });

  const loadUsers = () => {
    facade.getAllUsers().then(setUsers).catch(console.error);
  };
  
  useEffect(() => {
    loadUsers();
  }, []);

  

  const handleCreate = () => {
    facade.createUser(formData).then(() => {
      setFormData({ username: '', password: '' });
      loadUsers();
    }).catch(console.error);
  };

  const handleUpdate = (id) => {
    facade.updateUser(id, formData).then(() => {
      setEditId(null);
      setFormData({ username: '', password: '' });
      loadUsers();
    }).catch(console.error);
  };

  const handleDelete = (id) => {
    facade.deleteUser(id).then(loadUsers).catch(console.error);
  };

  return (
    <div>
      <h1>Admin Dashboard - {username}</h1>

      <h2>Users</h2>
      <div style={{marginBottom: '20px'}}>
        <input 
          placeholder="Username" 
          value={formData.username} 
          onChange={(e) => setFormData({...formData, username: e.target.value})} 
        />
        <input 
          placeholder="Password" 
          type="password" 
          value={formData.password} 
          onChange={(e) => setFormData({...formData, password: e.target.value})} 
        />
        {editId ? (
          <>
            <button onClick={() => handleUpdate(editId)}>Gem</button>
            <button onClick={() => { setEditId(null); setFormData({ username: '', password: '' }); }}>Annuller</button>
          </>
        ) : (
          <button onClick={handleCreate}>Opret</button>
        )}
      </div>

      <table border="1">
        <thead>
          <tr>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.username}>
              <td>{user.username}</td>
              <td>
                <button onClick={() => { setEditId(user.username); setFormData({username: user.username, password: ''}); }}>Rediger</button>
                <button onClick={() => handleDelete(user.username)}>Slet</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <hr />
      <button onClick={logout}>Logout</button>
    </div>
  )
}
export default Admin