import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./components/login/loginform";
import Dashboard from "./components/mainlayout/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/homepage" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
