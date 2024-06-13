import styles from "./itemList.module.css";

export default function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading
        ? "Loading....."
        : food.extendedIngredients.map((ingredient) => (
            <div className={styles.itemContainer}>
              <h3>{ingredient.aisle} </h3>
              <div className={styles.imageContainer}>
                <img
                  src={
                    `https://spoonacular.com/cdn/ingredients_100x100/` +
                    ingredient.image
                  }
                  alt=""
                />
              </div>

              <div className={styles.nameContainer}>
                <div className={styles.name}>{ingredient.amount}</div>
                <div className={styles.amount}> {ingredient.unit}</div>
              </div>
            </div>
          ))}
    </div>
  );
}
