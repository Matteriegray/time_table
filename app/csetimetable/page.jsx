"use client"
import React, { useEffect, useState } from 'react';
import Timetable from '../displaytimetable/page'; 
import CustomLayout from '../customlayout';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedSemesters, setSelectedSemesters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get'); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log((error));
        
      }
      
    };

    fetchData();
  }, []);

  const handleSemesterSelection = (sem) => {
    setSelectedSemesters([sem])
  };

  return (
    <CustomLayout>
    <div className="app-container">
      <div>
        <h2>Select Semesters:</h2>
        {[1,2,3, 4, 5, 6, 7, 8].map((sem) => (
          <button
            key={sem}
            onClick={() => handleSemesterSelection(sem)}
            style={{
              backgroundColor: selectedSemesters==sem ? '#3b82f6e0' : 'white',
              color: selectedSemesters==sem  ? 'white' : 'black',
              margin: '5px',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            {sem} Semester
          </button>
        ))}
      </div>
      {data ? (
        <Timetable data={data} selectedSemesters={selectedSemesters} />
      ) : (
        <p>Loading timetable...</p>
      )}
    </div></CustomLayout>
  );
};

export default App;
