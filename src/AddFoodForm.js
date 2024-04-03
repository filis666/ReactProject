import React, { useState } from 'react';

function AddFoodForm({ onAddFood }) {
  const [name, setName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState(0); 
  const [fat, setFat] = useState(0); 
  const [carbs, setCarbs] = useState(0);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    if (!name || !calories) {
      setError('Моля, попълнете всички полета.');
      return;
    }

    
    const caloriesNumber = parseInt(calories);

    
    onAddFood({ name, calories: caloriesNumber, protein, fat, carbs });

    
    setName('');
    setCalories('');
    setProtein(0); 
    setFat(0); 
    setCarbs(0); 
    setError(null);

    
    alert('Храната е добавена успешно!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <label>Calories:</label>
      <input type="number" value={calories} onChange={(e) => setCalories(e.target.value)} />
      <label>Protein (g):</label>
      <input type="number" value={protein} onChange={(e) => setProtein(parseInt(e.target.value) || 0)} />
      <label>Fat (g):</label>
      <input type="number" value={fat} onChange={(e) => setFat(parseInt(e.target.value) || 0)} />
      <label>Carbs (g):</label>
      <input type="number" value={carbs} onChange={(e) => setCarbs(parseInt(e.target.value) || 0)} />
      <button type="submit">Add Food</button>
    </form>
  );
}

export default AddFoodForm;


