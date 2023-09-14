import PropTypes from "prop-types";

const CartItem = ({ item, idx }) => {
  return (
    <div className="flex gap-1">
      <span>{idx + 1}.</span>
      <h3>{item.title}</h3>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  idx: PropTypes.number.isRequired,
};

export default CartItem;
