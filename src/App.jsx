import "./App.css";
import Cart from "./Componenets/Cart/Cart";
import Header from "./Componenets/Header/Header";
import Courses from "./Componenets/Courses/Courses";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [totalCreditHrs, setTotalCreditHrs] = useState(0);
  const [remainingCredits, setRemainingCredits] = useState(20);

  const handleAddToCart = (course) => {
    // console.log(course.time_credit);

    const newTotalCreditHrs = totalCreditHrs + course.time_credit;
    const newRemainingCredits = remainingCredits - course.time_credit;

    const isThere = cart.find((item) => item.id === course.id);
    if (isThere) {
      return alert("You can not Select same Course twice");
    } else if (newTotalCreditHrs > 20) {
      return alert("Credit Limit Exceeded");
    } else {
      setCart([...cart, course]);
      setTotalCreditHrs(newTotalCreditHrs);
      setRemainingCredits(newRemainingCredits);
    }
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart
          remainingCredits={remainingCredits}
          totalCreditHrs={totalCreditHrs}
          cart={cart}
        ></Cart>
      </main>
    </>
  );
}

export default App;
