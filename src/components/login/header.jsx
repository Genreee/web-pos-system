import "../../styles/style.scss";
import "../../styles/header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname === "/") return "SmartPOS";
    if (location.pathname === "/homepage") return "Dashboard";
  };

  return (
    <header className="header-wrapper container">
      <h1>{getTitle()}</h1>
      <nav>
        <Link to="/homepage"></Link>
      </nav>
    </header>
  );
};

export default Header;
