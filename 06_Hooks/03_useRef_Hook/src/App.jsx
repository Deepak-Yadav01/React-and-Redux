import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import RememberValue from "./components/RememberValue";
import AccessingDom from "./components/AccessingDom";

const App = () => {
  const [value, setValue] = useState(0);
  // const [count, setCount] = useState(0);

 const count = useRef(0);

 useEffect(() => {
  count.current = count.current + 1 ;
 })


// this runs continuesoly
  // useEffect(() => {
  //   setCount(count+1)
  // })

  const inputElem = useRef();

 
  return (
    <>
      <RememberValue value={value} setValue={setValue} count={count}></RememberValue>
      <AccessingDom inputElem={inputElem}></AccessingDom>
    </>
  );
};

export default App;
