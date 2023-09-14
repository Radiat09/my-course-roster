import CartItem from "../CartItem/CartItem";

import PropTypes from "prop-types";

const Cart = ({ cart }) => {
  return (
    <section>
      <h3>Cart: {cart.length}</h3>
      <div>
        {cart.map((item, idx) => (
          <CartItem key={idx} idx={idx} item={item}></CartItem>
        ))}
      </div>
    </section>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
};

export default Cart;
