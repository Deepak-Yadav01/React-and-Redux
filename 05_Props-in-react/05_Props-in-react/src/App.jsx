import FoodItems from "./Components/FoodItems";
import ErrorMsg from "./Components/ErrorMsg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";
import FoodInput from "./Components/FoodInput";
import { useState } from "react";

function App() {
  let foodItems = ["apple", "mango", "Milk", "orange", "Ghee", "Dal", "Banana"];

  // let textStateArr = useState();
  // let textStateVal = textStateArr[0];
  // let setTextStateMethod = textStateArr[1];

  
  // let textStateArr = useState("Text Enterd by User Here");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

// destructured  method of usestate

    let [textToShow, setTextState] =useState("Text Enterd by User Here")
  console.log(`Current value of textToShow : ${textToShow}`);
  


  // let textToShow = "Text enterd by User";

  // let foodItems = [];
    const handleOnChange = () => {
        console.log(event.target.value);
        setTextState(event.target.value);
    }

  return (
    <>
    <Container>
      <Container>hii</Container>
      <h1 className="text-center fw-bold my-4 food-heading">Healthy Food</h1>
       <FoodInput handleOnChange={handleOnChange}></FoodInput>
       <p>{textToShow}</p>
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
