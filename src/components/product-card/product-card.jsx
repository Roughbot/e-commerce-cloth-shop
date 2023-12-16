import { useContext } from "react";
import { CartContext } from "../context/cart";
import "./product-card-styles.scss";
import Button, { BUTTON_TYPE_CLASS } from "../button/button_types";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);
  const addProductToCart = () => addItemToCart(product);
  return (
    <div className="product-card-container">
      <img alt={`${name}`} src={imageUrl} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        buttonType={BUTTON_TYPE_CLASS.inverted}
        onClick={addProductToCart}
      >
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
