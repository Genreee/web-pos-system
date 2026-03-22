import "../../styles/auth/registerform.scss";
import { useState } from "react";

const RegisterForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "http://localhost/web-pos-system/backend/register.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        },
      );

      const data = await response.json();
      alert(data.message);

      if (data.status === "success") {
        setEmail("");
        setPassword("");
      }
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  return (
    <div>
      <div className="register-primary-wrapper">
        <div className="register-form-wrapper">
          <form onSubmit={handleRegister}>
            <div className="register-label-wrapper">
              <h1>Smart POS</h1>
              <p>Create an account</p>
            </div>
            <div className="register-input-wrapper">
              <div className="register-email-and-password-wrapper">
                <img src="./username-icon.png" alt="" />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="register-email-and-password-wrapper">
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
            <div className="register-button-wrapper">
              <button type="submit" className="register-button">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
