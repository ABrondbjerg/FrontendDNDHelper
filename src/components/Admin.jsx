import { useState, useEffect } from 'react'
import facade from '../apiFacade'

function Admin({ logout, username }) {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');
  
  

  const loadUsers = () => {
  facade.getAllUsers()
    .then(data => {
      console.log("Users data:", data);
      setUsers(data);
    })
    .catch(console.error);
};


  useEffect(() => {
    loadUsers();
  }, []);

  



  const handleUpdateRole = (username) => {
  console.log("Updating role for:", username, "to:", selectedRole);
  
  if (!selectedRole) {
    alert("Vælg en rolle først!");
    return;
  }
  
  facade.updateUserRole(username, selectedRole)  
    .then((response) => {
      console.log("Role updated successfully:", response);
      setEditId(null);
      setSelectedRole('');
      loadUsers();
    })
    .catch((error) => {
      console.error("Error updating role:", error);
      alert("Fejl ved opdatering af rolle: " + error.message);
    });
};

  const handleDelete = (id) => {
    facade.deleteUser(id).then(loadUsers).catch(console.error);
  };

 return (
    <div className="admin-container">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <span className="admin-username">Logged in as: {username}</span>
      </div>

      <div className="admin-content">
        <h2>User Management</h2>
        
        <table className="users-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>Roles</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.username}>
                <td className="username-cell">{user.username}</td>
                <td className="roles-cell">
                  {editId === user.username ? (
                    <div className="edit-role-container">
                      <select 
                        className="role-select"
                        value={selectedRole} 
                        onChange={(e) => setSelectedRole(e.target.value)}
                      >
                        <option value="">Vælg rolle</option>
                        <option value="USER">USER</option>
                        <option value="ADMIN">ADMIN</option>
                      </select>
                      <button 
                        className="btn btn-save"
                        onClick={() => handleUpdateRole(user.username)}
                      >
                        Gem
                      </button>
                      <button 
                        className="btn btn-cancel"
                        onClick={() => { setEditId(null); setSelectedRole(''); }}
                      >
                        Annuller
                      </button>
                    </div>
                  ) : (
                    <span className="role-badge">{user.roles}</span>
                  )}
                </td>
                <td className="actions-cell">
                  {editId !== user.username && (
                    <div className="action-buttons">
                      <button 
                        className="btn btn-edit"
                        onClick={() => { 
                          setEditId(user.username); 
                          setSelectedRole(user.roles?.[0] || ''); 
                        }}
                      >
                        Rediger rolle
                      </button>
                      <button 
                        className="btn btn-delete"
                        onClick={() => handleDelete(user.username)}
                      >
                        Slet
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="admin-footer">
        <button className="btn btn-logout" onClick={logout}>Logout</button>
      </div>
    </div>
  )
}
export default Admin