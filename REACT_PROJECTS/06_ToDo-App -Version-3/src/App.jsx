import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

function App() {

  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`New Item Added: ${itemName} Date Added: ${itemDueDate}`);
    const newTodoItems = [
      ...todoItems,
      { name: itemName, dueDate: itemDueDate },
    ];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) =>{
    const newTodoItems =todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
      console.log(`Item Delete : ${todoItemName}`);
      
  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo onNewItem={handleNewItem}></AddToDo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick = {handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
