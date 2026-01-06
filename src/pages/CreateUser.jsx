import { useState } from "react";
import CreateUserForm from "../components/CreateUserForm";
import facade from "../apiFacade";

function CreateUser({ onRegistered, onCancel }) {
  const init = { username: "", password: "", repeatPassword: "" };
  const [form, setForm] = useState(init);
  const [msg, setMsg] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.id]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    if (form.password !== form.repeatPassword) {
      setMsg("Passwords do not match");
      return;
    }
    if (!form.username || !form.password) {
      setMsg("Please fill out all fields");
      return; 
    }

    setSubmitting(true);
    try {
      await facade.createUser(form.username, form.password);
      const successMsg = "User created successfully. You can now login.";
      setMsg(successMsg);
      if (onRegistered) onRegistered(successMsg);
    } catch (err) {
      err.fullError && err.fullError
        .then((e) => {
          // Prefer common server message fields: message, warning, error
          const serverMsg = e && (e.message || e.warning || e.error || (typeof e === 'string' ? e : undefined));
          setMsg(serverMsg || JSON.stringify(e));
        })
        .catch(() => setMsg("Failed to create user"));
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <CreateUserForm
      form={form}
      onChange={onChange}
      onSubmit={handleSubmit}
      onCancel={onCancel}
      submitting={submitting}
      message={msg}
    />
  );
}

export default CreateUser;
