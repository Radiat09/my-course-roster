import CartItem from "../CartItem/CartItem";

import PropTypes from "prop-types";

const Cart = ({ cart, totalCreditHrs, remainingCredits, totalPrice }) => {
  return (
    <section className="ml-10 space-y-8 w-1/4 bg-white rounded-lg p-6 h-fit">
      <div className="">
        <h4 className="text-lg font-bold text-blue-500">
          Remaining Credits: {remainingCredits}
        </h4>
      </div>
      <hr />
      <div className="">
        <h4 className="text-xl font-bold bold--text mb-5">Course Name</h4>
        {cart.map((item, idx) => (
          <CartItem key={idx} idx={idx} item={item}></CartItem>
        ))}
      </div>
      <hr />
      <div>
        <h4 className="font-medium base-medium-text">
          Total Credit Hour: {totalCreditHrs}hrs
        </h4>
      </div>
      <hr />
      <div>
        <h4 className="font-medium base-medium-text">
          Total Price: {totalPrice}
        </h4>
      </div>
    </section>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  totalCreditHrs: PropTypes.number.isRequired,
  remainingCredits: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};

export default Cart;
