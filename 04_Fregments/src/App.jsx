function App() {
  // let foodItems = ["apple", "mango", "Milk", "orange", "Ghee", "Dal", "Banana"];

  let foodItems = [];

  // if -else

  // if (foodItems.length ==0) {
  //   return <h3>I am still Hungry!</h3>
  // }

  // ternary operator
  let EmptyMSG = foodItems.length == 0 ? <h3>I am still Hungry!</h3> : null;

  return (
    <>
      <h1 className="text-center fw-bold my-4">Healthy Food</h1>
      {EmptyMSG}
      {/* {foodItems.length == 0 ? <h3>I am still Hungry!</h3> : null} */}

      {/* logical operator */}
      {foodItems.length == 0 && <h3>I am still Hungry!</h3>}

      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
