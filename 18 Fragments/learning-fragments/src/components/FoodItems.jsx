const fooditems = () =>{

  let foodItems = ["Dal", "Green vegetable", "Roti", "Salad", "Milk"];


return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <li key={item}    className="list-group-item">
          {item}
        </li> 
      ))}
    </ul>
  );
};

export default fooditems;