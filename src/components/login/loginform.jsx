import "../../styles/style.scss";
import "../../styles/loginform.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "Admin" && password === "Admin") {
      navigate("/homepage");
    } else {
      alert("Invalid username or password");
    }
  };
  return (
    <div>
      <Header />
      <div className="login-wrapper">
        <div className="loginform-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <div className="input-box">
              <span className="username-icon">
                <img src="./username-icon.png" alt="" />
              </span>
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
              <div className="input-box"></div>
              <span className="password-icon">
                <img src="./password-icon.png" alt="" />
              </span>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" /> &nbsp; Remember me
              </label>
            </div>
            <button type="submit" className="login-button">
              Log in
            </button>{" "}
            <br />
            <a href="#">Forgot password?</a>
            <div className="register-link">
              <a href="#">Dont have an account? Register</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
