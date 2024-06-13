import { useState } from "react";
import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Nav from "./components/Nav.jsx";
import "./App.css";
import Conatiner from "./components/Container.jsx";
import InnerContainer from "./components/InnerContainer.jsx";
import FoodDetail from "./components/FoodDetail.jsx";

function App() {
  const [foodData, setfoodData] = useState([]);
  const [foodID, setfoodID] = useState(658615);
  return (
    <div>
      <Nav />
      <Search foodData={foodData} setfoodData={setfoodData} />
      <Conatiner>
        <InnerContainer>
          <FoodList setfoodID={setfoodID} foodData={foodData} />
        </InnerContainer>
        <InnerContainer>
          <FoodDetail foodID={foodID} />
        </InnerContainer>
      </Conatiner>
    </div>
  );
}

export default App;
