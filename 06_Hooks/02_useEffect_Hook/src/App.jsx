import { useEffect, useState } from 'react';
import './App.css';


function App() {
   const [count, setCount] = useState(0);
   
  //  Case 1: Empty Dependency [] 

  //  useEffect(() =>{
  //   setTimeout(() =>{
  //     setCount(count=>count+1)
  //   },2000)
  //  }, []);

  //  Case 2: No Dependency Array => Run on every render

  useEffect(() =>{
    setTimeout(() =>{
      setCount(count=>count+1)
    },2000)
   });

  return (
    <>
     <h1>I have Rendered {count} times </h1>
    </>
  )
}

export default App
