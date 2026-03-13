import "../../styles/style.scss";
import "../../styles/loginform.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
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
    <div>
      <Header />
      <div className="login-wrapper">
        <div className="loginform-wrapper">
          <form onSubmit={handleSubmit}>
            <h1>Log in</h1>
            <div className="input-box">
              <div className="input-wrapper">
                <img src="./username-icon.png" alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-wrapper">
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
            <div className="remember-forgot">
              {/*   <label>
                <input type="checkbox" className="checkbox" /> &nbsp; Remember
                me
              </label>*/}
            </div>
            <div className="button-wrapper">
              <button type="submit" className="login-button">
                Log in
              </button>
            </div>

            {/*  <a href="#">Forgot password?</a>*/}
            <div className="register-link">
              <Link to="/RegisterForm">Dont have an account? Register </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
