import "../../styles/auth/login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/web-pos-system/backend/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        },
      );

      const data = await response.json();

      if (data.status === "success") {
        navigate("/homepage");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <div className="login-primary-wrapper">
      <div className="login-form-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="login-label-wrapper">
            <h1>Smart POS</h1>
            <p>Login to your account</p>
          </div>
          <div className="login-input-wrapper">
            <div className="login-email-and-password-wrapper">
              <img src="./username-icon.png" alt="" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-email-and-password-wrapper">
              <img src="./password-icon.png" alt="" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          {/* <label>
        <input type="checkbox" className="checkbox" /> &nbsp; Remember Me?
              </label>*/}

          <div className="login-button-wrapper">
            <button type="submit" className="login-button">
              Log in
            </button>
          </div>

          {/* <div className="forgot-password">
            <Link to="/forgot-password">Forgot password?</Link>
            </div>*/}

          <div className="register-link">
            <Link to="/Register">Don't have an account? Register </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
