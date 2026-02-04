import React from 'react'

const AccessingDom = ({inputElem}) => {


  const btnClicked = () => {
  console.log(inputElem.current);
  inputElem.current.style.backgroung = "blue";
}


  return (
    <div>
       <input type="text" ref={inputElem}/>
      <button onClick={btnClicked}>Click here</button>
    </div>
  )
}

export default AccessingDom;
