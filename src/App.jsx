import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/auth/login";
import RegisterForm from "./pages/auth/register";
import HomePage from "./pages/main/homepage";
/*import Bills from "./components/mainlayout/bills";
import Items from "./components/mainlayout/items";
import CartButton from "./components/mainlayout/cartbutton";*/


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/homepage" element={<HomePage />} />
       {/* <Route path="/bills" element={<Bills />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cartbutton" element={<CartButton />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
