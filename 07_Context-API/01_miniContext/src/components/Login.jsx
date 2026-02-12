import React from "react";
import UserContext from "../context/UserContect";
import { useState, useContext } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.trim()) {
      alert("Username is required");
      return;
    }

    setUser({ username, password });

    setUsername("");
    setPassword("");
  };

  return (
    <div>
      <h2>Login Here</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit} type="submit">
        submit
      </button>
    </div>
  );
};

export default Login;
