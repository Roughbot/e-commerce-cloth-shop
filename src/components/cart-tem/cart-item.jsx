import "./cart-item-styles.scss";

const CartItem = ({ cartItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <div className="cart-item-container">
      <img alt={`${name}`} src={imageUrl} />
      <div className="item-details">
        <span>{name}</span>
        <span>
          {quantity} X ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
