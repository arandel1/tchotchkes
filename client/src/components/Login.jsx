import { useState } from "react";

const baseUrl = "http://localhost:8080/tchotchke/users";

function Login({ auth, updateUserId }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
    Logout();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const user = await response.json();
        const userId = user.id;
        localStorage.setItem("auth", JSON.stringify({ ...user }));
        auth(user);
        setSuccessMessage("You're logged in!");
        setFormData({ email: formData.email, password: "" });
        const token = user.token;
        console.log(token);
        auth(user);
        localStorage.setItem("auth", JSON.stringify(user));
        updateUserId(userId);
        console.log("userId:", userId, "sourced from Login.jsx");
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("Login failed. Check your username or password.");
    }
  };

  const Logout = (token) => {
    localStorage.removeItem("auth");
    console.log(token);
    setSuccessMessage("You're logged out!");
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <label className="email">Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label className="password">Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Login</button>
        <button onClick={handleLogout}>Logout</button>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </div>
  );
}

export default Login;
