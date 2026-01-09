import React from 'react'
import '../styles/CreateUserForm.css'
import { useNavigate } from 'react-router-dom';



export default function CreateUserForm({ form, onChange, onSubmit, submitting, message }) {
  const navigate = useNavigate();
  return (
    <div className="cu-container">
      <div className="cu-card">
        <h2 className="cu-title">Create Account</h2>
        
        <form className="cu-form" onSubmit={onSubmit}>
          <div className="cu-field">
            <label className="cu-label">Username</label>
            <input 
              id="username" 
              placeholder="Choose a username" 
              onChange={onChange} 
              value={form.username} 
            />
          </div>

          <div className="cu-field">
            <label className="cu-label">Password</label>
            <input 
              id="password" 
              type="password" 
              placeholder="Choose a password" 
              onChange={onChange} 
              value={form.password} 
            />
          </div>

          <div className="cu-field">
            <label className="cu-label">Repeat Password</label>
            <input 
              id="repeatPassword" 
              type="password" 
              placeholder="Repeat your password" 
              onChange={onChange} 
              value={form.repeatPassword} 
            />
          </div>

          {message && <p className="cu-message" style={{ color: message.includes("Error") || message.includes("not match") || message.includes("fill out") ? "#d9534f" : "#28a745" }}>{message}</p>}

          <button type="submit" disabled={submitting} className="cu-create">
            {submitting ? "Creating..." : "Create Account"}
          </button>
        </form>

        <div className="cu-divider">or</div>

        <button type="button" onClick={() => navigate('/login')} className="cu-cancel">
          Already have an account? Login
        </button>
      </div>
    </div>
  )
}
