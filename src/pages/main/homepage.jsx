import "../../styles/main/homepage.scss";

/*const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <ul>
        <li>
          <img src="/burger-with-cheese.jfif" alt="" />{" "}
          <h2>burger with cheese</h2>
          <span>₱ 40.00</span> <button>add to cart</button>
          <span>food</span>
          <span>50 left</span>
          <span>
            Qty: <button>-</button> 0 <button>+</button>
          </span>
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
      </ul>
    </div>
  );
};

export default HomePage;*/

import { useState } from "react";

const HomePage = () => {
  const [qty, setQty] = useState(0);
  const [stock] = useState(50);

  const increaseQty = () => {
    if (qty < stock) setQty(qty + 1);
  };

  const decreaseQty = () => {
    if (qty > 0) setQty(qty - 1);
  };

  const addToCart = () => {
    if (qty === 0) return alert("Please select quantity first");
    alert(`Added ${qty} item(s) to cart`);
  };

  return (
    <li className="product-item">
      <img
        src="/burger-with-cheese.jfif"
        alt="Burger with cheese"
        className="product-image"
      />

      <h2 className="product-title">Burger with Cheese</h2>

      <p className="product-price">₱40.00</p>

      <p className="product-category">Food</p>

      <p className="product-stock">{stock} left</p>

      <div className="quantity">
        <span>Qty:</span>
        <button onClick={decreaseQty}>-</button>
        <span>{qty}</span>
        <button onClick={increaseQty}>+</button>
      </div>

      <button onClick={addToCart} className="add-to-cart">
        Add to Cart
      </button>
    </li>
  );
};

export default HomePage;
