import "../../styles/style.scss";
import "../../styles/dashboard.scss";
/*import Sidebar from "./sidebar";*/
import Navbar from "./navbar";


const Dashboard = () => {
  const products = [
   { id: 1, name: "Apple", price: 1.5, quantity: 0 },
    { id: 2, name: "Banana", price: 0.5, quantity: 0 },
    { id: 3, name: "Orange", price: 2, quantity: 0 },
    { id: 4, name: "Milk", price: 1.2, quantity: 0 },
    { id: 5, name: "Bread", price: 2.5, quantity: 0 },
  ];

  return (
    <div className="homepage container">
      {/*<Sidebar/> */}
      <Navbar/> 
      <main className="dashboard container">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price ($)</th>
              <th>Quantity</th>
              <th>Total ($)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p) => (
              <tr key={p.id}>
                <td>{p.name}</td>
                <td>{p.price}</td>
                <td>{p.quantity}</td>
                <td>{(p.price * p.quantity).toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default Dashboard;
