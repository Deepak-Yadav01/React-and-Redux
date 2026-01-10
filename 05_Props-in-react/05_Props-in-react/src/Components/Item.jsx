import styles from "./Item.module.css";

const Item = ({ foodItems }) => {
  // console.log(styles); /* for debuging */

  //   let { foodItems } = props; /*  destructuring  */
  return <li className={`${styles["kg-item"]} list-group-item `}>{foodItems}</li>;
};

export default Item;
