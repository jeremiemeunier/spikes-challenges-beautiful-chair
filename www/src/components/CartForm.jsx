import { useState } from "react";

const CartForm = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="shop-add-cart">
      <QuantityChoice quantity={quantity} setQuantity={setQuantity} />
      <button className="cart-add-action">Add to cart</button>
    </div>
  );
};

export default CartForm;

const QuantityChoice = ({ quantity, setQuantity }) => {
  const addHandler = () => {
    setQuantity(quantity + 1);
  };
  const removeHandler = () => {
    quantity - 1 > 0 && setQuantity(quantity - 1);
  };

  return (
    <div className="shop-quantity">
      <button onClick={removeHandler} disabled={quantity === 1 && true}>
        <i className="icon teaui-icon-remove"></i>
      </button>
      <p>{quantity}</p>
      <button onClick={addHandler}>
        <i className="icon teaui-icon-add"></i>
      </button>
    </div>
  );
};
