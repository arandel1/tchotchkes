// TO-DO:

// import any queries from slices we create, if needed
// Review specific inputs (lines 27-33 and lines 39-44) once we are aligned on those values / keys
// This can all be changed later on, but starting with just requesting a username/email and password

// -----------------------------
// -----------------------------

import { useState } from "react";

export default function Register() {
  // const Register = ({ register }) => {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    const credentials = {
      newUsername,
      newPassword,
    };
    await register(credentials);
  };

  return (
    <>
      <div className="container">
        <h3> Register </h3>
        <form onSubmit={submit}>
          <label className="username">
            Username or Email:
            <input
              name="username"
              placeholder="Username or Email"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
          </label>
          <br />
          <label className="password">
            Password:
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <br />
          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
}

// export default Register;
