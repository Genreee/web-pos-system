import "../../styles/style.scss";
import "../../styles/header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const isMenu = location.pathname === "/homepage";
   const bills = location.pathname === "/bills";

  const getTitle = () => {
    if (location.pathname === "/") return "SmartPOS";
    if (location.pathname === "/homepage") return "Menu";
    if (location.pathname === "/bills") return "Bills";
    return "SmartPOS";
  };

  
  return (
    <div className="header-wrapper container">
      {isHome && (
        <div>
          <h1 className="login-header">{getTitle()}</h1>
        </div>
      )}

      {isMenu && (
        <div className="dashboard-header">
          <h1>{getTitle()}</h1>
        </div>
      )}
      {bills && (
        <div className="dashboard-header">
          <h1>{getTitle()}</h1>
        </div>
      )}
    </div>
  );
};

export default Header;
