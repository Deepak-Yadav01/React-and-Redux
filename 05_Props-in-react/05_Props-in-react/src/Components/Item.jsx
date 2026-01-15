import styles from "./Item.module.css";

const Item = ({ foodItems, handleBuyButton}) => {
  // console.log(styles); /* for debuging */

  //   let { foodItems } = props; /*  destructuring  */

  // const handleBuyButtonClicked = () => {
  

  return (
    <li className={`${styles["kg-item"]} list-group-item `}>
      {foodItems}

      <button className={`${styles.button} btn btn-success`}
      onClick={handleBuyButton}
      // onClick={handleBuyButtonClicked}

      >BUY</button>

    </li>
  );
};

export default Item;
