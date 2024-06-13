import ItemList from "./ItemList";
import styles from "./fooddetail.module.css";

import { useEffect, useState } from "react";
export default function FoodDetail({ foodID }) {
  const URL = `https://api.spoonacular.com/recipes/${foodID}/information`;
  const API_KEY = "956b4a3bf2c846bca8588d069ca9879e";
  const [food, setFood] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  //   console.log(query);
  useEffect(() => {
    async function fetchFoodDetail() {
      const res = await fetch(`${URL}?&apiKey=${API_KEY}`);
      const data = await res.json();

      console.log(data);
      setFood(data);
      setisLoading(false);
    }
    fetchFoodDetail();
  }, [foodID]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
      </div>
      <div className={styles.recipeDetails}>
        <span>
          <strong>⏱{food.readyInMinutes} Minutes</strong>
        </span>
        <span>
          👪
          <strong>Serves: {food.servings}</strong>
        </span>
        <span>
          <strong>
            {food.vegetarian ? "🥕Vegetarian" : "🍖Non-Vegetarian"}
          </strong>{" "}
        </span>
        <span>
          <strong>{food.vegan ? "🐮Vegan" : ""}</strong>
        </span>
      </div>
      <div>
        <span>
          <strong> Price per Serving ${food.pricePerServing}</strong>
        </span>
      </div>
      <h2>Ingredients</h2>
      <ItemList food={food} isLoading={isLoading} />

      <div className={styles.recipeInstructions}>
        <h2>Instructions</h2>
        <ol>
          {isLoading
            ? "Loading....."
            : food.analyzedInstructions[0].steps.map((step) => (
                <li>{step.step}</li>
              ))}
        </ol>
      </div>
    </div>
  );
}
