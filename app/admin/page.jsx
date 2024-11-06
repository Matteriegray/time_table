"use client";
import React, { useState } from 'react';

const Page = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedBoxes, setSelectedBoxes] = useState([]);
  const [submit, setsubmit] = useState(false)
  const [view, setview] = useState(false)
  const handledisplay=()=>{
    window.location.replace("/csetimetable")
  }

  const handlesubmit = async () => {
    setsubmit(true)
    if (selectedBoxes.length === 0) return; // Prevent submission if no boxes are selected

    const requests = selectedBoxes.map(async (sem) => {
      await fetch("/api", {
        method: "post",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ department: selectedButton, sem })
      });
      setsubmit(false)
      setview(true)
    });

    // Wait for all requests to complete
    await Promise.all(requests);
    // Optionally, you can handle success or errors here
  };

  const handleButtonClick = (name) => {
    setSelectedButton(name);
    setSelectedBoxes([]); // Reset box selections when a new button is selected
    setview(false)
  };

  const handleBoxClick = (box) => {
    const pairedBox = box % 2 === 0 ? box - 1 : box + 1;

    setSelectedBoxes((prevSelected) => {
      const isSelected = prevSelected.includes(box);
      const isPairedSelected = prevSelected.includes(pairedBox);
      if (isSelected) {
        // If the box is already selected, deselect it
        return prevSelected.filter((b) => b !== box);
      } else if (isPairedSelected) {
        // If the paired box is selected, replace it with the current box
        return prevSelected.filter((b) => b !== pairedBox).concat(box);
      } else {
        // If the box is not selected, check limits
        if (prevSelected.length < 4) {
          return [...prevSelected, box];
        }
        return prevSelected; // Don't allow more than 4 selections
      }
    });
  };

  const boxes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className='flex flex-col items-center text-white justify-center h-full w-full pt-[5%] pb-5 absolute top-0 left-0'>
      <h1 className='text-3xl font-bold font-serif'>Welcome Admin</h1>
      <div>
        <h1 className='font-semibold'>Select Department</h1>
        <div>
          {['CSE', 'ECE', 'MECH', 'CIVIL', 'EEE'].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              style={{
                backgroundColor: selectedButton === button ? '#3b82f6e0' : 'white',
                color: selectedButton === button ? 'white' : 'black',
                border: '1px solid black',
                padding: '10px 25px',
                cursor: 'pointer',
              }}
            >
              {button}
            </button>
          ))}
        </div>
        {selectedButton && (
          <div style={{ marginTop: '20px' }}>
            <h2 className='font-semibold'>Select Sems</h2>
            {boxes.map((box) => (
              <button
                key={box}
                onClick={() => handleBoxClick(box)}
                style={{
                  backgroundColor: selectedBoxes.includes(box) ? '#3b82f6e0' : 'white',
                  color: selectedBoxes.includes(box) ? 'white' : 'black',
                  border: '1px solid black',
                  margin: '3px',
                  padding: '10px 20px',
                  cursor: 'pointer',
                }}
              >
                {box}
              </button>
            ))}
          </div>
        )}
        {selectedBoxes.length > 0 && (!submit?(
          <button onClick={handlesubmit} className='bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold'>
            Generate Timetable 
          </button>
        ):<button onClick={handlesubmit} className='bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold'>
        Processing
      </button>)}
      {view && <button onClick={()=>{handledisplay()}}  className='bg-yellow-500 text-center w-40 ml-4 h-10 rounded-md text-sm font-semibold'>View Timetable</button>}
      </div>
    </div>
  );
};

export default Page;
