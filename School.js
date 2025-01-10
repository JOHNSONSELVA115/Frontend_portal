import React, { useEffect, useState } from "react";

const Home = () => {

  const [schoolData, setSchoolData] = useState([]);


  useEffect(() => {
    // Fetching data from the backend
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Log the full data to check the structure

        // Set the data into respective state variables

        setSchoolData(data.schoolData || []);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      

      {/* Displaying School Data */}
      <h2>School Education</h2>
      {schoolData.length > 0 ? (
        schoolData.map((item, index) => (
          <div key={index}>
            <h3>{item.category}</h3>
            <p>School Name: {item.name}</p>
            <p>Percentage: {item.percentage}%</p>
            <p>Year passed out: {item.year}</p>
          </div>
        ))
      ) : (
        <p>No school data available</p>
      )}

    </div>
  );
};

export default Home;
