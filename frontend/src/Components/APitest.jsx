import React, { useState } from 'react';
import axios from 'axios';

const APITest = () => {
  const [foodItem, setFoodItem] = useState('');
  const [nutritionData, setNutritionData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post(
        'https://trackapi.nutritionix.com/v2/natural/nutrients',
        { query: foodItem },
        {
          headers: {
            'x-app-id': '3b51ca84',
            'x-app-key': 'db6587274636bbe1541270ca82241792',
            'Content-Type': 'application/json'
          }
        }
      );
      setNutritionData(response.data.foods);
      console.log(response.data)
    } catch (error) {
      setError('An error occurred while fetching data.');
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>NutriWave API Example</h1>
      <input
        type="text"
        placeholder="Enter a food item"
        value={foodItem}
        onChange={(e) => setFoodItem(e.target.value)}
      />
      <button onClick={handleSearch} disabled={!foodItem || loading}>
        {loading ? 'Loading...' : 'Search'}
      </button>
      {error && <p>{error}</p>}
      {nutritionData.length > 0 && (
        <div>
          <h2>Nutrition Information</h2>
          {nutritionData.map((food, index) => (
            <div key={index}>
              <h3>{food.food_name}</h3>
              <p>Calories: {food.nf_calories}</p>
              <p>Protein: {food.nf_protein}</p>
              <p>Fat: {food.nf_total_fat}</p>
              <p>Carbohydrates: {food.nf_total_carbohydrate}</p>
              <p>Sugar: {food.nf_sugars}</p>
              <img src={food.photo.highres}></img>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default APITest;
