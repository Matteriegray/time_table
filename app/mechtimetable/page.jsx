"use client"
import React, { useEffect, useState } from 'react';
import Timetablemech from '../displaytimetablemech/page';
import CustomLayout from '../customlayout';

const App = () => {
  const [data, setData] = useState(null);
  const [selectedSemesters, setSelectedSemesters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/get/mech');
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
    <div className="app-container absolute top-0 left-0 w-full h-full z-50 overflow-x-hidden overflow-y-scroll">
      <div className=' p-5 bg-[#ffffff]'>
        <h2 className='text-2xl text-center font-semibold text-[#000000]'>Select Semesters:</h2>
        <div className='flex flex-wrap justify-center'>
          <div className=' border-2 border-[#0000004f] rounded-md smooth p-2'>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
              <button
                key={sem}
                onClick={() => handleSemesterSelection(sem)}
                className={`${selectedSemesters.includes(sem) ? 'bg-[#000000] border-2 border-[#000000] font-semibold text-[#ffffff]' : 'bg-[#00000018]'
                  } m-1.5 p-2.5 cursor-pointer smooth border-2 border-[#00000000] text-[#000000] rounded-md hover:border-[#000000] hover:border-2`}
              >
                {sem} Semester
              </button>
            ))}
          </div>
        </div>
      </div>
      {data ? (
        <Timetablemech data={data} selectedSemesters={selectedSemesters} />
      ) : (
        <p>Loading timetable...</p>
      )}
    </div>
  );
};

export default App;
