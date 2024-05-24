// MealPlanner.js
import React, { useState } from 'react';
import ChatBot from 'openai-chatbot';

const MealPlanner = () => {
  const [mealPlan, setMealPlan] = useState('');
  const [error, setError] = useState('');

  const handleMealPlanGeneration = async (height, weight) => {
    try {
      const response = await ChatBot({
        message: `Generate a meal plan for a person with height ${height} cm and weight ${weight} kg.`,
        model: 'gpt-3.5-turbo',
        maxTokens: 100,
        stop: ['\n'],
        temperature: 0.7
      });
      setMealPlan(response.message);
    } catch (error) {
      setError('Failed to generate meal plan');
      console.error('Error generating meal plan:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const height = event.target.elements.height.value;
    const weight = event.target.elements.weight.value;
    if (!height || !weight) {
      setError('Height and Weight are required');
      return;
    }
    setError('');
    handleMealPlanGeneration(height, weight);
  };

  return (
    <div>
      <h1>Meal Planner</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Height:</label>
          <input type="number" name="height" required />
        </div>
        <div>
          <label>Weight:</label>
          <input type="number" name="weight" required />
        </div>
        <button type="submit">Generate Meal Plan</button>
      </form>
      {error && <p>{error}</p>}
      {mealPlan && (
        <div>
          <h2>Meal Plan</h2>
          <p>{mealPlan}</p>
        </div>
      )}
    </div>
  );
};

export default MealPlanner;
