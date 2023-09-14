import PropTypes from "prop-types";
import "./Course.css";

const Course = ({ course, handleAddToCart }) => {
  const { title, description, image, price, time_credit } = course;
  return (
    <div className="shadow-md rounded-xl p-4">
      <img className="w-full  rounded-xl" src={image} alt={title} />
      <div className="flex flex-col gap-3 my-3">
        <h4 className="text-lg font-semibold">{title}</h4>
        <p className="text-sm base-text">{description}</p>
        <div className="base-text text-base font-medium flex justify-between">
          <p>Price: ${price}</p>
          <p className="">Crefit: {time_credit} hr</p>
        </div>
        <button
          onClick={() => handleAddToCart(course)}
          className="font-medium py-2 px-24 rounded-lg bg-blue-500 text-white hover:bg-blue-800 "
        >
          Select
        </button>
      </div>
    </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleAddToCart: PropTypes.func.isRequired,
};

export default Course;
