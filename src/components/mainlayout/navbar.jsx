import "../../styles/style.scss";
import "../../styles/navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="Navbar container">
      <ul>
        <li>
          <Link to="/soup">
            soup <img src="./soup-icon.jfif" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/salad">
            salad <img src="./salad-icon.jfif" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/wrap">
            wrap <img src="./wrap-icon.jfif" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/bowl">
            bowl <img src="./bowl-icon.jfif" alt="" />
          </Link>
        </li>
        <li>
          <Link to="/juice">
            juice <img src="./juice-icon.jfif" alt="" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
