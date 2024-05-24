import React, { useState } from 'react';
import axios from 'axios';

const CalorieCounter = () => {
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState('');
  const [error, setError] = useState('');

  const searchFood = async () => {
    try {
      const response = await axios.get(`https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodName}&api_key=YOUR_API_KEY`);
      const foodItem = response.data.foods[0]; // Assuming the first result is the desired food item
      const foodId = foodItem.fdcId;
      const nutrients = await axios.get(`https://api.nal.usda.gov/fdc/v1/food/${foodId}?api_key=YOUR_API_KEY`);
      const calorieInfo = nutrients.data.foodNutrients.find(nutrient => nutrient.nutrientName === "Energy");
      setCalories(calorieInfo.value);
    } catch (error) {
      setError('Failed to fetch calorie information');
      console.error('Error fetching calorie information:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setCalories('');
    if (!foodName) {
      setError('Food name is required');
      return;
    }
    searchFood();
  };

  return (
    <div>
      <h1>Calorie Counter</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Food Name:</label>
          <input type="text" value={foodName} onChange={(e) => setFoodName(e.target.value)} required />
        </div>
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      {calories && (
        <div>
          <h2>Calories</h2>
          <p>{calories} kcal</p>
        </div>
      )}
    </div>
  );
};

export default CalorieCounter;
