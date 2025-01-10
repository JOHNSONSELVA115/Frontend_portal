import React, { useEffect, useState } from "react";

const Home = () => {

  const [collegeData, setCollegeData] = useState([]);


  useEffect(() => {
    // Fetching data from the backend
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the full data to check the structure

        setCollegeData(data.collegeData || []);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      

      {/* Displaying College Data */}
      <h2>College Education</h2>
      {collegeData.length > 0 ? (
        collegeData.map((item, index) => (
          <div key={index}>
            <h3>{item.category}</h3>
            <p>College Name: {item.name}</p>
            <p>Course: {item.course}</p>
            <p>Percentage: {item.percentage}%</p>
            <p>Year passed out: {item.year}</p>
          </div>
        ))
      ) : (
        <p>No college data available</p>
      )}
    </div>
  );
};

export default Home;
