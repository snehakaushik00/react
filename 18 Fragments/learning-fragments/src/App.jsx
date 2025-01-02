import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  //let foodItems = []; 
  //let foodItems = ["Dal", "Green vegetable", "Roti", "Salad", "Milk"];

return (
<>
  <h1>Healthy Food</h1>
  {foodItems.length === 0 && <h3>I am still hungry.</h3>}
  <ErrorMessage></ErrorMessage>
  <FoodItems></FoodItems>
</>
);
}

export default App
