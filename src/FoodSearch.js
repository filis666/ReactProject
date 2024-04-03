
import React from 'react';
import './FoodSearch.css'; 
function FoodSearch({ onSearch }) {
  const handleSearch = (e) => {
    const query = e.target.value;
    if (query.trim() === '') {
      onSearch('');
    } else {
      onSearch(query);
    }
  };

  return (
    <div className="food-search-container"> {}
      <input type="text" onChange={handleSearch} className="food-search-input" placeholder="Search food..." />
    </div>
  );
}

export default FoodSearch;

