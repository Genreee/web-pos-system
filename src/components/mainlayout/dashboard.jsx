import "../../styles/style.scss";
import "../../styles/dashboard.scss";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Header from "../login/header";

const Dashboard = () => {
 

  return (
    <div className="homepage-wrapper">
      <Sidebar />

      <div className="homepage container">
        <Header />
        <Navbar />
        <main className="dashboard container">
          <ul>
            <li>
              <img src="/burger-with-cheese.jfif" alt="" />{" "}
              <h2>burger with cheese</h2>
              <span>₱ 40.00</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/fries.jfif" alt="" /> <h2>fries</h2>
              <span>₱ 35.00</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>₱12.5</span> <button>add to cart</button>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
