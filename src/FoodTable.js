import React from 'react';
import './FoodTable.css';

function FoodTable({ searchResults, selectedFoods, onAddFood, onRemoveFood }) {
  
  const calculateTotalNutrition = () => {
    let totalCalories = 0;
    let totalProtein = 0;
    let totalFat = 0;
    let totalCarbs = 0;

    

    
    selectedFoods.forEach((food) => {
      totalCalories += food.calories || 0;
      totalProtein += food.protein || 0;
      totalFat += food.fat || 0;
      totalCarbs += food.carbs || 0;
    });

    return { totalCalories, totalProtein, totalFat, totalCarbs };
  };

  const totalNutrition = calculateTotalNutrition();

  

  return (
    <div>
      <table className="food-table">
        <thead>
          <tr>
            <th>Description</th>
            <th>Calories</th>
            <th>Protein(g)</th>
            <th>Fat(g)</th>
            <th>Carbs(g)</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((food, index) => (
            <tr key={index}>
              <td>{food.name}</td>
              <td>{food.calories || 0}</td>
              <td>{food.protein || 0}</td>
              <td>{food.fat || 0}</td>
              <td>{food.carbs || 0}</td>
              <button onClick={() => onAddFood(food)}>Add</button>
            </tr>
          ))}
        </tbody>
      </table>

      <table className="food-table">
        <thead>
        <h1>Selected foods</h1>
          <tr>   
            <th>Description</th>
            <th>Calories</th>
            <th>Protein(g)</th>
            <th>Fat(g)</th>
            <th>Carbs(g)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {selectedFoods.map((food, index) => (
            <tr key={index}>
              <td>{food.name}</td>
              <td>{food.calories || 0}</td>
              <td>{food.protein || 0}</td>
              <td>{food.fat || 0}</td>
              <td>{food.carbs || 0}</td>
              <button onClick={() => onRemoveFood(index)}>Remove</button>
            </tr>
          ))}
          <tr>
            <td>Total</td>
            <td>{totalNutrition.totalCalories}</td>
            <td>{totalNutrition.totalProtein}</td>
            <td>{totalNutrition.totalFat}</td>
            <td>{totalNutrition.totalCarbs}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
  
      
    </div>
  );
  
}



export default FoodTable;
