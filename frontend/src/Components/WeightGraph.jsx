// Front-end (React.js)

// WeightGraph component
import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';

const WeightGraph = ({ weights }) => {
    useEffect(() => {
        const ctx = document.getElementById('weightChart').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: weights.map(weight => weight.date),
                datasets: [{
                    label: 'Weight',
                    data: weights.map(weight => weight.value),
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }, [weights]);

    return <canvas id="weightChart" width="400" height="400"></canvas>;
};

export default WeightGraph;
