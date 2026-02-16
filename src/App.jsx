import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/login/header";
import LoginForm from "./components/login/loginform";
import Dashboard from "./components/mainlayout/dashboard";





function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/homepage" element={<Dashboard />} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
