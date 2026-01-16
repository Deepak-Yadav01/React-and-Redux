import styles from "./FoodInput.module.css";

const FoodInput = ({handleKeyDown}) => {

  return (
    <div>
      <input type="text" placeholder=' Enter Item Here' 
      className={styles.foodInput}
      onKeyDown={handleKeyDown}
      />
    </div>
  )
}

export default FoodInput;
