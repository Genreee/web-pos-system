import "../../styles/style.scss";
import "../../styles/sidebar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="Sidebar container">
      <ul>
        <li className="pos">
          <h1>POS</h1>
        </li>
        <li>
          <Link to="/homepage">
            <img src="./home-icon.png" alt="" /> home
          </Link>
        </li>
        <li>
          <Link to="/bills">
            <img src="./bills-icon.png" alt="" /> bills
          </Link>
        </li>
        <li>
          <Link to="/items">
            <img src="./items-icon.png" alt="" /> items
          </Link>
        </li>
        <li>
          <Link to="/customers">
            <img src="./customers-icon.png" alt="" /> customers
          </Link>
        </li>
        <li>
          <Link to="/">
            <img src="./logout-icon.png" alt="" /> logout
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
