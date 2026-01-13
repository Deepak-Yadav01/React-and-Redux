import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
  // console.log(styles); /* for debuging */

  //   let { foodItems } = props; /*  destructuring  */

  // const handleBuyButtonClicked = () => {
  const handleBuyButtonClicked = (event) => {
        console.log(event);
        
         console.log(`${foodItems} button clicked`)
  }

  return (
    <li className={`${styles["kg-item"]} list-group-item `}>
      {foodItems}

      <button className={`${styles.button} btn btn-success`}
      onClick={(event) => handleBuyButtonClicked(event)}
      // onClick={handleBuyButtonClicked}

      >BUY</button>

    </li>
  );
};

export default Item;
