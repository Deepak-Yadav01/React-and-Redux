import FoodItems from "./Components/foodItems";
import ErrorMsg from "./Components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  let foodItems = ["apple", "mango", "Milk", "orange", "Ghee", "Dal", "Banana"];

  // let foodItems = [];

  return (
    <>
      <h1 className="text-center fw-bold my-4 food-heading">Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
