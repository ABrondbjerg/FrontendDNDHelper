import '../styles/CreateUserForm.css'

export default function CreateUserForm({ form, onChange, onSubmit, onCancel, submitting, message }) {
  return (
    <div className="cu-container">
      <h2 className="cu-title">Create user</h2>
      <form className="cu-form" onSubmit={onSubmit}>
        <label className="cu-field">
          <span className="cu-label">User Name</span>
          <input id="username" placeholder="User Name" onChange={onChange} value={form.username} />
        </label>
        <label className="cu-field">
          <span className="cu-label">Password</span>
          <input id="password" type="password" placeholder="Password" onChange={onChange} value={form.password} />
        </label>
        <label className="cu-field">
          <span className="cu-label">Repeat Password</span>
          <input id="repeatPassword" type="password" placeholder="Repeat Password" onChange={onChange} value={form.repeatPassword} />
        </label>
        <div className="cu-actions">
          <button type="submit" disabled={submitting} className="cu-create">Create</button>
          <button type="button" onClick={onCancel} className="cu-cancel">Cancel</button>
        </div>
      </form>
      {message && <p className="cu-message">{message}</p>}
    </div>
  )
}
