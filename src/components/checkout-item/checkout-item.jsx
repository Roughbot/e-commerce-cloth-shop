import "./checkout-item-styles.scss";
import { useContext } from "react";
import { CartContext } from "../context/cart";
import React from "react";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const { name, price, imageUrl, quantity } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeItemHandler}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={addItemHandler}>
          &#10095;
        </div>
      </span>
      <span className="proce">{price}</span>
      <div className="remove-button">
        <span className="button-content" onClick={clearItemHandler}>
          &#10005;
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
