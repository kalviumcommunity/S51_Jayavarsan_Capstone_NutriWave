import React, { useState, useEffect } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Gauge } from "@mui/x-charts/Gauge";
import "../styles/dashboardhome.css";
import tick from '../assets/check.png'

function Dashboardhome() {
  // State for calories data
  const [caloriesData, setCaloriesData] = useState([]);

  // State for water gauge value
  const [waterValue, setWaterValue] = useState(0);

  // State for user's weight data
  const [weightData, setWeightData] = useState({
    current: [],
    expected: [],
  });

  // State to control displaying tick image
  const [showTick, setShowTick] = useState(false);

  // Fetch initial data
  useEffect(() => {
    // Fetch calories data from endpoint
    fetchCaloriesData();

    // Fetch weight data from endpoint
    fetchWeightData();

    // Fetch initial weight from local storage (if available)
    const storedWeight = localStorage.getItem("weight");
    if (storedWeight) {
      setWeightData((prevWeightData) => ({
        ...prevWeightData,
        current: [...prevWeightData.current, parseInt(storedWeight)],
      }));
    }
  }, []);

  // Function to fetch calories data from endpoint
  const fetchCaloriesData = async () => {
    try {
      const response = await fetch("/calories"); // Assuming /calories is your endpoint
      const data = await response.json();
      setCaloriesData(data);
    } catch (error) {
      console.error("Error fetching calories data:", error);
    }
  };

  // Function to fetch weight data from endpoint
  const fetchWeightData = async () => {
    try {
      const response = await fetch("/weight"); // Assuming /weight is your endpoint
      const data = await response.json();
      setWeightData(data);
    } catch (error) {
      console.error("Error fetching weight data:", error);
    }
  };

  // Function to handle water graph click
  const handleWaterClick = () => {
    setWaterValue((prevValue) => Math.min(prevValue + 5, 100)); // Increase water value by 5%, up to 100%
    if (waterValue >= 95) {
      setShowTick(true); // Show tick image when water value reaches 100
    }
  };

  // Function to handle weight graph click
  const handleWeightClick = () => {
    // Prompt user to input their weight
    const weightInput = prompt("Enter your weight:");
    if (weightInput) {
      const newWeight = parseInt(weightInput);
      setWeightData((prevWeightData) => ({
        ...prevWeightData,
        current: [...prevWeightData.current, newWeight],
      }));
      localStorage.setItem("weight", newWeight); // Store weight in local storage
      // Post new weight to the endpoint (assuming the endpoint accepts POST requests)
      fetch("/weight", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ weight: newWeight }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error("Error posting weight:", error));
    }
  };

  return (
    <>
      <div className="dashboard_mainelements_main_div">
        <div className="dashboardhome_section1_maindiv">
          <div className="dashboardhome_section1_subdiv_1">
            <div className="caloriesgraph_main_div">
              <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: caloriesData,
                    label: "calories",
                    color: "#FFC830",
                  },
                ]}
                width={800}
                height={300}
              />
            </div>
            <div className="subsection1_subsecion_1">
              <div className="addmeals_main_div">
                <input
                  type="number"
                  placeholder="Enter your weight"
                  value={weightData.current[weightData.current.length - 1] || ""}
                  onChange={() => {}} // Prevent direct editing of the input field
                />
              </div>
              <div className="watergraph_main_div">
                {showTick ? (
                  <img
                    src={tick}
                    alt="Tick"
                    style={{ width: "200px", height: "200px" }}
                  />
                ) : (
                  <Gauge
                    width={200}
                    height={200}
                    value={waterValue}
                    onClick={handleWaterClick}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="dashboardhome_section2_maindiv">
          <div className="weightgraph_main_div">
            <LineChart
              xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
              series={[
                {
                  data: weightData.current,
                  label: "current weight",
                  color: "grey",
                },
                {
                  data: weightData.expected,
                  label: "expected weight",
                  color: "#5D7DF0",
                },
              ]}
              width={500}
              height={300}
              onClick={handleWeightClick}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboardhome;
