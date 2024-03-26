// TO-DO: 

  // import any queries from slices we create, if needed
  // Review specific inputs (lines 27-33 and lines 39-44) once we are aligned on those values / keys
  // This can all be changed later on, but starting with just requesting a username/email and password

// -----------------------------
// -----------------------------

import { useState } from "react";

export default function registerForm() {
  const [newUsername, setNewUsername] = useState("");
  const [newPassword, setNewPassword] = useState("");

async function handleSubmit(e) {
  e.preventDefault();
  await registerNewUser({ username, password });
  refetch();
}

return(
  <>
    <div className="register-form">
      <h3> Register </h3>
        <form onSubmit = {handleSubmit}>
          <label className = "username">
              Username or Email:
              <input
                type = "text"
                name = "username"
                id = "username"
                placeholder = "Username or Email" 
                value = {username}
                onChange={(e) => setNewUsername(e.target.value)}
              />
          </label>
          <label className = "password">
              Password:
              <input
                type = "password"
                name = "password"
                id = "password"
                placeholder = "Password" 
                value = { password }
                onChange={(e) => setNewPassword(e.target.value)}
              />
          </label>
          <br/>
          <button type = "submit">Register</button>
        </form>
    </div>
  </>
)

}
