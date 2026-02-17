import "../../styles/style.scss";
import "../../styles/dashboard.scss";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Header from "../login/header";


const Dashboard = () => {
  const products = [
    { id: 1, name: "Apple", price: 1.5 },
    { id: 2, name: "Banana", price: 0.5 },
    { id: 3, name: "Orange", price: 2 },
    { id: 4, name: "Milk", price: 1.2 },
    { id: 5, name: "Bread", price: 2.5 },
  ];

  return (
    <div className="homepage-wrapper">
      <Sidebar />

      <div className="homepage container">
        <Header />
        <Navbar />
        <main className="dashboard container">
          <ul>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger with cheese</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span>
              <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
            <li>
              <img src="/salad-icon.jfif" alt="" /> <h2>burger</h2>
              <span>12.5</span> <button>add to cart</button>
            </li>
          </ul>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
