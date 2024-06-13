import FoodItem from "./FoodItem.jsx";
export default function FoodList({ foodData, setfoodID }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} setfoodID={setfoodID} />
      ))}
    </div>
  );
}
