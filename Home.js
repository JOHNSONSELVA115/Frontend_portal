import React, { useEffect, useState } from "react";

const Home = () => {
  const [personalData, setPersonalData] = useState([]);


  useEffect(() => {
    // Fetching data from the backend
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Log the full data to check the structure
        
        // Setting the data to state variables
        setPersonalData(data.personalData);

      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1>Welcome</h1>

      {/* Displaying Personal Data */}
      <h2>Personal Information</h2>
      {personalData.length > 0 ? (
        personalData.map((item) => (
          <div key={item._id}>
            <h3>{item.name || item.user_name}</h3>
            <p>Date of Birth: {item.dob}</p>
            <p>Address: {item.address}</p>
            <p>Skills: {item.technicalSkills ? item.technicalSkills.join(", ") : "N/A"}</p>
            <p>Hobbies: {item.hobbies ? item.hobbies.join(", ") : "N/A"}</p>
            <p>Languages: {item.languagesKnown ? item.languagesKnown.join(", ") : "N/A"}</p>
          </div>
        ))
      ) : (
        <p>No personal data available</p>
      )}

      
    </div>
  );
};

export default Home;
