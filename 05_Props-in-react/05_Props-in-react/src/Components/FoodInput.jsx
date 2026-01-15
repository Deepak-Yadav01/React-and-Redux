import styles from "./FoodInput.module.css";

const FoodInput = ({handleOnChange}) => {

  return (
    <div>
      <input type="text" placeholder=' Enter Item Here' 
      className={styles.foodInput}
      onChange={handleOnChange}
      />
    </div>
  )
}

export default FoodInput;
