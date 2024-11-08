"use client";
import React, { useState } from 'react';

const Page = () => {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null); // Use a single state for one selected box
  const [submit, setSubmit] = useState(false);
  const [view, setView] = useState(false);
  const [aiml, setAiml] = useState([])
  const [ise, setIse] = useState([])
  const [csea, setCsea] = useState([])
  const [cse, setCseb] = useState([])
  const [showinput, setShowinput] = useState(false)


  const handledisplay = () => {
    window.location.replace("/csetimetable");
  };

  const handlesubmit = async () => {
    setSubmit(true);
    if (!selectedBox) return; // Prevent submission if no box is selected
    await fetch("/api", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ department: selectedButton, sem: selectedBox }),
    });
    setSubmit(false);
    setView(true);
  };

  const handleButtonClick = (name) => {
    setSelectedButton(name);
    setSelectedBox(null); // Reset box selection when a new button is selected
    setView(false);
  };

  const handleBoxClick = (box) => {
    setSelectedBox(box); // Set only the selected box
    setShowinput(true)
  };

  const boxes = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="flex flex-col items-center w-full text-white pt-[5%] justify-center pb-5 absolute top-0 left-0">
      <h1 className="text-3xl font-bold ">Welcome Admin</h1>
      <div className='flex flex-col items-center w-full '>
        <h1 className="font-semibold">Select Department</h1>
        <div>
          {["CSE", "ECE", "MECH", "CIVIL", "EEE"].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              style={{
                backgroundColor: selectedButton === button ? "#3b82f6e0" : "white",
                color: selectedButton === button ? "white" : "black",
                border: "1px solid black",
                padding: "10px 25px",
                cursor: "pointer",
                margin: "5px"
              }}
            >
              {button}
            </button>
          ))}
        </div>
        {selectedButton && (
          <div style={{ marginTop: "20px" }}>
            <h2 className="font-semibold">Select Sem</h2>
            {boxes.map((box) => (
              <button
                key={box}
                onClick={() => handleBoxClick(box)}
                style={{
                  backgroundColor: selectedBox === box ? "#3b82f6e0" : "white",
                  color: selectedBox === box ? "white" : "black",
                  border: "1px solid black",
                  margin: "3px",
                  padding: "10px 20px",
                  cursor: "pointer",
                }}
              >
                {box}
              </button>
            ))}
          </div>
        )}
        <div className='flex'>

          {["Whole CSE branch"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 4 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 2 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the labs {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}

            </div>
          ))}

          {["CSE", "ISE", "AIML"].map((subbranch) => (

            <div key={subbranch}>
              {showinput && selectedBox == 3 && (
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 3 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 3 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit labs for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
            </div>

          ))}

          {["CSE", "ISE", "AIML"].map((subbranch) => (

            <div key={subbranch}>
              {showinput && selectedBox == 4 && (
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 4 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 4 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 2 credit theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 4 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credits theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 4 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit labs for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
            </div>

          ))}

          {["CSE", "ISE", "AIML"].map((subbranch) => (

            <div key={subbranch}>
              {showinput && selectedBox == 5 && (
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credits subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 5 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 5 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 2 credit lab subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 5 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit labs for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
            </div>

          ))}

          {["CSE", "ISE", "AIML"].map((subbranch) => (

            <div key={subbranch}>
              {showinput && selectedBox == 6 && (
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credits subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 6 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 2 credit theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 6 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 6 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 2 credit lab subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
            </div>

          ))}

          {["CSE", "ISE", "AIML"].map((subbranch) => (

            <div key={subbranch}>
              {showinput && selectedBox == 7 && (
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credits subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 7 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 2 credit theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 7 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 10 credit theory subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
            </div>

          ))}

          {["CSE", "ISE", "AIML"].map((subbranch) => (

            <div key={subbranch}>
              {showinput && selectedBox == 8 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 10 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
              {showinput && selectedBox == 8 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit subject for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300">
                      Next
                    </button>
                  </div>

                </div>
              )}
            </div>

          ))}
        </div>



        {selectedBox && (
          !submit ? (
            <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
              Generate Timetable
            </button>
          ) : (
            <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
              Processing
            </button>
          )
        )}
        {view && (
          <button
            onClick={handledisplay}
            className="bg-yellow-500 text-center w-40 ml-4 h-10 rounded-md text-sm font-semibold"
          >
            View Timetable
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
