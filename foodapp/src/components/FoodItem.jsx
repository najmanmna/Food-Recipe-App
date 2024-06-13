import styles from "./fooditem.module.css";

export default function ({ food, setfoodID }) {
  return (
    <div className={styles.foodContainer}>
      <img className={styles.itemimage} src={food.image} alt="" />
      <div className={styles.itemContainer}>
        <p className={styles.itemContent}>{food.title}</p>
      </div>
      <div className={styles.btnContainer}>
        <button onClick={() => setfoodID(food.id)} className={styles.itemBtn}>
          View Recipe
        </button>
      </div>
    </div>
  );
}
