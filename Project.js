import React, { useEffect, useState } from "react";

const Home = () => {

  const [projectDetailsData, setprojectDetailsData] = useState([]);

  useEffect(() => {
    // Fetching data from the backend
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the full data to check the structure

        // Separate data into school, college, and project data
        setprojectDetailsData(data.projectDetailsData || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Projects</h2>
      {projectDetailsData.length > 0 ? (
        projectDetailsData.map((item, index) => (
          <div key={index}>
            <h3>{item.category}</h3>

            {/* Display data conditionally */}
            {item.category === "Self-Project" || item.category === "College-Project" ? (
              <>
                <p>Title: {item.title}</p>
                <p>Tools: {item.tools}</p>
                <p>Language: {item.language}</p>
                <p>Description: {item.description}</p>
              </>
            ) : (
              <>
                <p>Name: {item.name}</p>
                <p>Percentage: {item.percentage}</p>
                <p>Year: {item.year}</p>
              </>
            )}
          </div>
        ))
      ) : (
        <p>No project data available</p>
      )}
    </div>
  );
};

export default Home;
