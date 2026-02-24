import "../../styles/style.scss";
import "../../styles/header.scss";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const getTitle = () => {
    if (location.pathname === "/") return "SmartPOS";
    if (location.pathname === "/homepage") return "Dashboard";
    if (location.pathname === "/bills") return "Bills";
  };
  const showSubtitle = location.pathname !== "/";

  return (
    <div className="header-wrapper container">
      <div>
        <h1>{getTitle()}</h1>
      </div>
      <div className="cart-wrapper">
        {showSubtitle && (
          <div className="button-wrapper">
         <span>0</span>

            <button>
              <img src="./shopping-cart.png" alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
