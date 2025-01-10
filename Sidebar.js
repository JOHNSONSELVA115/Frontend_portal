import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const sidebarStyle = {
    width: sidebarOpen ? "200px" : "0",
    transition: "width 0.3s ease-in-out",
    overflow: "hidden",
    backgroundColor: "#f0f0f0",
    borderRight: "1px solid #ddd",
    marginBottom: "10px",
    padding: sidebarOpen ? "10px" : "0",
    boxShadow: sidebarOpen ? "2px 0 5px rgba(0,0,0,0.1)" : "none",
    position: "fixed",
    height: "100vh",
  };

  const sidebarItemStyle = {
    padding: "5px",
    cursor: "pointer",
    backgroundColor: "#ffffff",
    margin: "10px 0",
    marginLeft: "10px",
    height: "30px", // Fixed height for all items
    borderRadius: "5px",
    textDecoration: "none",
    color: "black",
    fontWeight: "bold",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    transition: "background-color 0.3s, transform 0.2s",
    display: "flex", // Ensures flex layout
    alignItems: "center", // Vertically centers the content
    justifyContent: "center", // Horizontally centers the content
  };

  const sidebarstyle01 ={
    marginTop:"50px"
  }

  return (
    <div style={sidebarStyle}>
      <ul style={{ listStyleType: "none", padding: "0" }}>
        <div style={sidebarstyle01}>
        <li>
          <Link
            to="/"
            style={sidebarItemStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffb9d9";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.transform = "scale(1)";
            }}
          >
            Home
          </Link>
        </li>
        <br></br>
        <br></br>
        <li>
          <Link
            to="/school"
            style={sidebarItemStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffb9d9";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.transform = "scale(1)";
            }}
          >
            School
          </Link>
        </li>
        <br></br>
        <br></br>
        <li>
          <Link
            to="/college"
            style={sidebarItemStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffb9d9";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.transform = "scale(1)";
            }}
          >
            College
          </Link>
        </li>
        <br></br>
        <br></br>
        <li>
          <Link
            to="/project"
            style={sidebarItemStyle}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffb9d9";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.transform = "scale(1)";
            }}
          >
            Project
          </Link>
        </li>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
