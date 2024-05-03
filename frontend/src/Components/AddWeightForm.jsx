
import React, { useState } from 'react';
import axios from 'axios';

const AddWeightForm = ({ onWeightAdded }) => {
    const [weight, setWeight] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/weights', { value: weight });
            onWeightAdded(response.data);
            setWeight('');
        } catch (error) {
            console.error('Error adding weight:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
            <button type="submit">Add Weight</button>
        </form>
    );
};

export default AddWeightForm;
