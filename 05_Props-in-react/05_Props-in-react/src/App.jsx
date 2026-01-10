import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";

function App() {
  let foodItems = ["apple", "mango", "Milk", "orange", "Ghee", "Dal", "Banana"];

  // let foodItems = [];

  return (
    <>
    <Container>
      <Container>hii</Container>
      <h1 className="text-center fw-bold my-4 food-heading">Healthy Food</h1>
      <ErrorMsg items={foodItems}></ErrorMsg>
      <FoodItems items={foodItems}></FoodItems>
    </Container>

    <Container>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid libero deleniti aperiam. Facere fugiat incidunt odio tempora delectus voluptatem. Eaque libero quae laudantium ipsam? Fuga tenetur ipsum voluptate libero odit. <b>Deepak Yadav</b></p>
    </Container>
    
    </>
  );
}

export default App;
