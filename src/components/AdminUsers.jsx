import { useEffect, useState } from 'react'
import facade from '../apiFacade'

function AdminUsers({ roles }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // roles may be a comma-separated string or an array
    const roleList = typeof roles === 'string' ? roles.split(',') : roles || []
    if (roleList.includes('admin')) {
      facade.getAllUsers()
        .then((u) => {
          setUsers(u)
          setLoading(false)
        })
        .catch((err) => {
          setError(err)
          setLoading(false)
        })
    } else {
      setLoading(false)
    }
  }, [roles])

  if (loading) return null
  if (!roles) return null
  const roleList = typeof roles === 'string' ? roles.split(',') : roles
  if (!roleList.includes('admin')) return null

  if (error) return <div>Failed to load users</div>

  return (
    <div>
      <h3>All Users (admin)</h3>
      {users.length === 0 ? (
        <div>No users found</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Username</th>
              <th>Roles</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id || u.username}>
                <td>{u.id}</td>
                <td>{u.username}</td>
                <td>{u.roles}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  )
}

export default AdminUsers
