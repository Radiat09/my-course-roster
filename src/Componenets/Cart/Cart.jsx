import CartItem from "../CartItem/CartItem";

import PropTypes from "prop-types";

const Cart = ({ cart, totalCreditHrs, remainingCredits }) => {
  return (
    <section>
      <h3>Cart: {cart.length}</h3>
      <div>
        <h4 className="text-blue-500">Remaining Credits: {remainingCredits}</h4>
      </div>
      <div>
        {cart.map((item, idx) => (
          <CartItem key={idx} idx={idx} item={item}></CartItem>
        ))}
      </div>
      <div>
        <h4>Total Credit Hour: {totalCreditHrs}hrs</h4>
      </div>
    </section>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  totalCreditHrs: PropTypes.number.isRequired,
  remainingCredits: PropTypes.number.isRequired,
};

export default Cart;
