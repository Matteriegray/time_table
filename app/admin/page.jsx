"use client";
import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';



const Page = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedBox, setSelectedBox] = useState(null); // Use a single state for one selected box
  const [submit, setSubmit] = useState(false);
  const [view, setView] = useState(false);
  const [aimlfour, setAimlfour] = useState([])
  const [aimlone, setAimlone] = useState([])
  const [isefour, setisefour] = useState([])
  const [csefour, setcsefour] = useState([])
  const [iseone, setiseone] = useState([])
  const [cseone, setcseone] = useState([])
  const [data, setdata] = useState({})
  const [fourHourSubject, setfourHourSubject] = useState([])
  const [oneHourSubject, setoneHourSubject] = useState([])
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
      body: JSON.stringify({ department: selectedButton, sem: selectedBox, data }),
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

  const onSubmityear1 = (data) => {
    setfourHourSubject(data.csedept3credsubs.split(','))
    setoneHourSubject(data.csedept1credsubs.split(','))
    setdata({ fourHourSubject, oneHourSubject })
  }

  const onSubmitsem3 = (data) => {
    setAimlfour(data.AIML3sem3credtheory.split(','))
    setisefour(data.ISE3sem3credtheory.split(','))
    setcsefour(data.CSE3sem3credtheory.split(','))
    setAimlone(data.AIML3sem1credtheory.split(','))
    setiseone(data.ISE3sem1credtheory.split(','))
    setcseone(data.CSE3sem1credtheory.split(','))
    setdata({ aimlfour, isefour, csefour, aimlone, iseone, cseone })
  }

  const onSubmitsem4 = (data) => {
    setAimlfour(data.AIML4sem3credtheory.split(','))
    setisefour(data.ISE4sem3credtheory.split(','))
    setcsefour(data.CSE4sem3credtheory.split(','))
    setAimlone(data.AIML4sem1credtheory.split(','))
    setiseone(data.ISE4sem1credtheory.split(','))
    setcseone(data.CSE4sem1credtheory.split(','))
    setdata({ aimlfour, isefour, csefour, aimlone, iseone, cseone })
  }

  const onSubmitsem5 = (data) => {
    setAimlfour(data.AIML5sem3credtheory.split(','))
    setisefour(data.ISE5sem3credtheory.split(','))
    setcsefour(data.CSE5sem3credtheory.split(','))
    setAimlone(data.AIML5sem1credtheory.split(','))
    setiseone(data.ISE5sem1credtheory.split(','))
    setcseone(data.CSE5sem1credtheory.split(','))
    setdata({ aimlfour, isefour, csefour, aimlone, iseone, cseone })
  }

  const onSubmitsem6 = (data) => {
    setAimlfour(data.AIML6sem3credtheory.split(','))
    setisefour(data.ISE6sem3credtheory.split(','))
    setcsefour(data.CSE6sem3credtheory.split(','))
    setAimlone(data.AIML6sem1credtheory.split(','))
    setiseone(data.ISE6sem1credtheory.split(','))
    setcseone(data.CSE6sem1credtheory.split(','))
    setdata({ aimlfour, isefour, csefour, aimlone, iseone, cseone })
  }

  const onSubmitsem7 = (data) => {
    setAimlfour(data.AIML7sem3credtheory.split(','))
    setisefour(data.ISE7em3credtheory.split(','))
    setcsefour(data.CSE7em3credtheory.split(','))
    setdata({ aimlfour, isefour, csefour })

  }

  const onSubmitsem8 = (data) => {
    setAimlfour(data.AIML8sem10credtheory.split(','))
    setisefour(data.ISE8em10credtheory.split(','))
    setcsefour(data.CSE8em10credtheory.split(','))
    setdata({ aimlfour, isefour, csefour })
  }

  return (
    <div className="flex flex-col items-center w-full text-white pt-[5%] justify-center pb-5 absolute top-0 left-0 gap-4">
      <h1 className="text-3xl font-bold ">Welcome Admin</h1>
      <div className='flex flex-col items-center w-full '>
        <h1 className="font-semibold">Select Department</h1>
        <div className='flex gap-2 mt-5'>
          {["CSE", "ECE", "MECH", "CIVIL", "EEE"].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className={`h-[120px] w-[120px] bg-[#ffffffac] text-[#000] flex items-center justify-center rounded-full cursor-pointer smooth crdshdw hover:invert`}
            >
              {button}
            </button>
          ))}

        </div>
        {selectedButton && (
          <div style={{ marginTop: "20px" }}>
            <h2 className="font-semibold">Select Sem</h2>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((box) => (
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
        <form onSubmit={handleSubmit(onSubmityear1)} action="">
          {["Whole CSE branch"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input {...register("csedept3credsubs")}
                      type="text"
                      id="input"
                      // value={inputValue}
                      // onChange={handleChange}
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                </div>
              )}
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("csedept1credsubs")}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                
              )}
              {/* {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the labs {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input {...register("csedeptlabs")}
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
              )} */}
            </div>
          ))}{showinput && (selectedBox == 1 || selectedBox == 2) && selectedBox && (
            !submit ? (
              <div className='flex gap-5'>
              <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                Generate Timetable
              </button>
              
              </div>
            ) : (
              <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
                Processing
              </button>
            )
          )}</form>
          <form onSubmit={handleSubmit(onSubmitsem3)} action="">
            {

              ["CSE", "ISE", "AIML"].map((subbranch) => (

                <div key={subbranch}>

                  {showinput && selectedBox == 3 && (
                    <div className='flex flex-col mt-5 ml-4' >
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Select the 3 credit subjects for {subbranch}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}3sem3credtheory`)}
                          type="text"
                          id="input"
                          // value={inputValue}
                          // onChange={handleChange}
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                    </div>
                  )}

                  {showinput && selectedBox == 3 && (
                    <div className='flex flex-col mt-5 ml-4'>
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Select the 1 credit theory subjects for {subbranch}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}3sem1credtheory`)}
                          type="text"
                          id="input"
                          // value={inputValue}
                          // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                    </div>
                  )}
                  {/* {showinput && selectedBox == 3 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit labs for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3semlabs`)}
          
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
              )} */}

                </div>

              ))}
            {showinput && selectedBox == 3&& (
              !submit ? (
                <div className='flex gap-5'>
                  <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4)} action="">
            {["CSE", "ISE", "AIML"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col mt-5 ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 3 credit subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credits theory subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem1credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {/* {showinput && selectedBox == 4 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit labs for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem1credlabs`)}
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
              )} */}

              </div>

            ))}
            {showinput && selectedBox == 4  && (
              !submit ? (
                <div className='flex gap-5'>
                  <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5)} action="">
            {["CSE", "ISE", "AIML"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col mt-5 ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 3 credits subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit theory subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem1credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {/* {showinput && selectedBox == 5 && (
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 2 credit lab subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                    <input {...register(`${subbranch}3sem2credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )} */}
                {/* {showinput && selectedBox == 5 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 1 credit labs for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>                      
                  <input {...register(`${subbranch}3sem3credtheory`)}
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
              )} */}

              </div>

            ))}
            {showinput && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6)} action="">
            {["CSE", "ISE", "AIML"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 6 && (
                  <div className='flex flex-col mt-5 ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 3 credits subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}6sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 6 && (
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit theory subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}6sem1credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {/* {showinput && selectedBox == 6 && (
                <div className='flex flex-col mt-5 ml-4'>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 2 credit lab subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3sem3credtheory`)}
                  
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
              )} */}

              </div>

            ))}
            {showinput && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7)} action="">
            {["CSE", "ISE", "AIML"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 7 && (
                  <div className='flex flex-col mt-5 ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 3 credits subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}7sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 7 && (
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 2 credit theory subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}7sem2credtheory`)}

                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}


              </div>

            ))}{showinput && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem8)} action="">
            {["CSE", "ISE", "AIML"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 8 && (
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 10 credit subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}8sem10credtheory`)}

                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}                    placeholder={`Enter the subjects for ${subbranch}`}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 8 && (
                  <div className='flex flex-col mt-5 ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit subject for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}8sem1credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}


              </div>

            ))}{showinput && selectedBox == 8  && (
              !submit ? (
                <div className='flex gap-5'>
                <button onClick={handlesubmit} className="bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                  Generate Timetable
                </button>
                
                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold" disabled>
                  Processing
                </button>
              )
            )}</form>
        </div>




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

