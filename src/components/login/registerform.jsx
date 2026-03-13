import "../../styles/registerform.scss";
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
        // optionally navigate to login page
      }
    } catch (err) {
      console.error("Register error:", err);
    }
  };

  return (
    <div className="register_wrapper">
      <form onSubmit={handleRegister}>
        <div className="form_wrapper">
          <h1>Register</h1>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
