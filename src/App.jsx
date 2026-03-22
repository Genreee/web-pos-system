import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/auth/loginform";
import RegisterForm from "./pages/auth/registerform";
import Dashboard from "./components/mainlayout/dashboard";
import Bills from "./components/mainlayout/bills";
import Items from "./components/mainlayout/items";
import CartButton from "./components/mainlayout/cartbutton";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/homepage" element={<Dashboard />} />
        <Route path="/bills" element={<Bills />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cartbutton" element={<CartButton />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
