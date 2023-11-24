import "./cart-dropdown-styles.scss";
import Button from "../button/button_types";
import CartItem from "../cart-tem/cart-item";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckouthandler = () => {
    navigate("/checkout");
  };
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goToCheckouthandler}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
