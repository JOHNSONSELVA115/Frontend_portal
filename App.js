import React from 'react';
import { Routes, Route } from 'react-router-dom';
import School from './components/School';
import College from './components/College';
import Project from './components/Project';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import Home from './components/Home';

const App = () => {
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} /> {/* Use Sidebar here */}

      {/* Main Content */}
      <div
        style={{
          flex: 1,
          padding: '10px',
          backgroundColor: '#f9f9f9',
          marginLeft: sidebarOpen ? '250px' : '50px', // Keep this here
          transition: 'margin-left 0.3s ease-in-out', // Ensure this transition applies only to marginLeft
        }}
      >
        {/* Sidebar Toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            backgroundColor: '#ff81bc',
            color: '#ffffff',
            border: 'none',
            padding: '10px',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/school" element={<School />} />
          <Route path="/college" element={<College />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
