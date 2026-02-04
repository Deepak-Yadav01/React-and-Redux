import React from 'react'

const RememberValue = ({value,setValue,count}) => {

     const decrease = () => {
     setValue(prev => prev - 1)
  }


  return (
    <div>
      <button onClick={decrease}>-1</button>
      <h1> Current Value: {value}</h1>
      <button onClick={() => setValue(prev => prev + 1)}>+1</button>
      <h1>Render Count: {count.current}</h1>
    </div>
  )
}

export default RememberValue;
