import "./App.css";
import Cart from "./Componenets/Cart/Cart";
import Header from "./Componenets/Header/Header";
import Courses from "./Componenets/Courses/Courses";

function App() {
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Courses></Courses>
        <Cart></Cart>
      </main>
    </>
  );
}

export default App;
