/*import "../../styles/style.scss";
import "../../styles/sidebar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sidebar container">
      <button className="menu" onClick={toggleNav}>
        <img src="./menu-icon.png" alt="" />
      </button>
      <ul className={`mobile-nav ${isOpen ? "show" : ""}`}>
        <li>
          <Link to="/homepage">
            <img src="./home-icon.png" alt="" />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
*/