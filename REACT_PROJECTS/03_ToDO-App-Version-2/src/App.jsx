import AppName from "./components/AppName";
import AddToDo from "./components/AddToDo";
import TodoItems from "./components/TodoItems";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "React-project-03",
      dueDate: "28/12/2025",
    },
    {
      name: "Goto College",
      dueDate: "28/12/2025",
    },
    {
      name: "Buy Milk",
      dueDate: "28/12/2025",
    },
    {
      name: "Practice twice",
      dueDate: "Right Now",
    },
  ];

  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddToDo></AddToDo>
      <TodoItems todoItems={todoItems}></TodoItems>
    
      
    </center>
  );
}

export default App;
