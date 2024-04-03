import React, { useState } from 'react';
import FoodSearch from './FoodSearch';
import FoodTable from './FoodTable';
import AddFoodForm from './AddFoodForm';
import {  useEffect } from 'react';


function App() {
  
 const staticSearchResults = [
    { name: 'Apple', calories: 52 },
    { name: 'Banana', calories: 89 },
    
  ];

  const [searchResults, setSearchResults] = useState(staticSearchResults);
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [allFoods, setAllFoods] = useState(staticSearchResults);
  useEffect(() => {
    setSearchResults([]);
  }, []);


  
  const searchFood = async (query) => {
    
    if (query.trim() === '') {
      setSearchResults([]);
      return;
    }
    const filteredData = allFoods.filter(food =>
      food.name.toLowerCase().includes(query.toLowerCase())
    );
  
  
    
    setSearchResults(filteredData);
    
  };

  
  const addFoodToTable = (food) => {
    setSelectedFoods([...selectedFoods, food]);
    setAllFoods([...allFoods, food]);
    
  };

  
  const removeFoodFromTable = (index) => {
    const newSelectedFoods = [...selectedFoods];
    newSelectedFoods.splice(index, 1);
    setSelectedFoods(newSelectedFoods);
  };

  const addFoodHandler = (newFoodData) => {
    setSelectedFoods([...selectedFoods, newFoodData]);
    setAllFoods([...allFoods, newFoodData]);
  };

  return (
    <div className="App">
      <h1>Food Lookup</h1>
      <button onClick={() => setShowAddForm(!showAddForm)}>Add Food</button>
      {showAddForm && <AddFoodForm onAddFood={addFoodHandler} />}
      <FoodSearch onSearch={searchFood} />
      <FoodTable
        searchResults={searchResults}
        selectedFoods={selectedFoods}
        onAddFood={addFoodToTable}
        onRemoveFood={removeFoodFromTable}
      />
    </div>
  );
}

export default App;
