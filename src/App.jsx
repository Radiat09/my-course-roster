import "./App.css";
import Cart from "./Componenets/Cart/Cart";
import Header from "./Componenets/Header/Header";
import Courses from "./Componenets/Courses/Courses";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (course) => {
    console.log(course);

    const isThere = cart.find((item) => item.id === course.id);

    if (isThere) {
      return alert("You can not Select same Course twice");
    } else {
      setCart([...cart, course]);
      console.log("it worked");
    }
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Courses handleAddToCart={handleAddToCart}></Courses>
        <Cart cart={cart}></Cart>
      </main>
    </>
  );
}

export default App;
