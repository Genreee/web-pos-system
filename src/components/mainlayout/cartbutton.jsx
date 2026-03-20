import "../../styles/cartbutton.scss";

const CartButton = ({ showSubtitle = true, count = 0 }) => {
  return (
    <div className="cart-wrapper">
      {showSubtitle && (
       
          <button className="cart-btn">
            <span className="count">{count}</span>
            <img src="./shopping-cart.png" alt="Shopping cart" />
          </button>
       
      )}
    </div>
  );
};

export default CartButton;
