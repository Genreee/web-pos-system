import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/loginform";
import Dashboard from "./components/mainlayout/dashboard";
import Bills from "./components/mainlayout/bills";
import RegisterForm from "./components/login/registerform";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/homepage" element={<Dashboard />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/registerform" element={<RegisterForm />} />;
      </Routes>
    </BrowserRouter>
  );
}

export default App;
