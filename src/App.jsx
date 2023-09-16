import "./App.css";
import Cart from "./Componenets/Cart/Cart";
import Header from "./Componenets/Header/Header";
import Courses from "./Componenets/Courses/Courses";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCreditHrs, setTotalCreditHrs] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(20);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAddToCart = (course) => {
    // console.log(course.time_credit);

    const newTotalCreditHrs = totalCreditHrs + course.time_credit;
    const newRemainingCredits = remainingCredits - course.time_credit;
    const newTotalPrice = totalPrice + course.price;

    const isThere = cart.find((item) => item.id === course.id);
    if (isThere) {
      return toast.error("You can not Select same Course twice");
    } else if (newTotalCreditHrs > 20) {
      return toast.error("You have Exceeded Credit Limits");
    } else {
      setCart([...cart, course]);
      setTotalCreditHrs(newTotalCreditHrs);
      setRemainingCredits(newRemainingCredits);
      setTotalPrice(newTotalPrice);
    }
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart
          totalPrice={totalPrice}
          remainingCredits={remainingCredits}
          totalCreditHrs={totalCreditHrs}
          cart={cart}
        ></Cart>
      </main>
      <ToastContainer theme="dark" position="top-right"></ToastContainer>
    </>
  );
}

export default App;
