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
  const [showinput, setShowinput] = useState(false)
  const [colur, setcolur] = useState("green")


  const handledisplay = () => {
    window.location.replace("/csetimetable");
  };

  const handlesubmit = async (updateddata) => {
    setSubmit(true);
    setcolur("red")
    if (!selectedBox) return; // Prevent submission if no box is selected
    let result=await fetch("/api", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ department: selectedButton, sem: selectedBox, data:updateddata }),
    });
    if(result.ok){
      setcolur("green")
    }
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

  const onSubmityear1 = (data1) => {
    if ((data1.csedept3credsubs.split(',')).length==5 && data1.csedept1credsubs.split(',').length==2 ) {
      let fourHour=(data1.csedept3credsubs.split(','))
    let oneHour=(data1.csedept1credsubs.split(','))
    let updateddata = { fourHourSubject:fourHour, oneHourSubject:oneHour };
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }

  }

  const onSubmitsem3 = (data) => {
    if (data.AIML3sem3credtheory.split(',').length==4 && data.ISE3sem3credtheory.split(',').length==4 && data.CSE3sem3credtheory.split(',').length==4 && data.AIML3sem1credtheory.split(',').length==3 && data.ISE3sem1credtheory.split(',').length==3 && data.CSE3sem1credtheory.split(',').length==3  ) {
    let aimlfour=data.AIML3sem3credtheory.split(',')
    let isefour=data.ISE3sem3credtheory.split(',')
    let csefour=data.CSE3sem3credtheory.split(',')
    let aimlone=data.AIML3sem1credtheory.split(',')
    let iseone=data.ISE3sem1credtheory.split(',')
    let cseone=data.CSE3sem1credtheory.split(',')
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem4 = (data) => {
    if (data.AIML4sem3credtheory.split(',').length==4 && data.ISE4sem3credtheory.split(',').length==4 && data.CSE4sem3credtheory.split(',').length==4 && data.AIML4sem1credtheory.split(',').length==3 && data.ISE4sem1credtheory.split(',').length==3 && data.CSE4sem1credtheory.split(',').length==3  ) {
    let aimlfour =(data.AIML4sem3credtheory.split(','))
    let isefour=(data.ISE4sem3credtheory.split(','))
    let csefour=(data.CSE4sem3credtheory.split(','))
    let aimlone=(data.AIML4sem1credtheory.split(','))
    let iseone=(data.ISE4sem1credtheory.split(','))
    let cseone=(data.CSE4sem1credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
      }
      else{
        alert("You did't entered required subjects or You had entered more number of subjects :)")
      }
  }

  const onSubmitsem5 = (data) => {
    if (data.AIML5sem3credtheory.split(',').length==4 && data.ISE5sem3credtheory.split(',').length==4 && data.CSE5sem3credtheory.split(',').length==4 && data.AIML5sem1credtheory.split(',').length==2 && data.ISE5sem1credtheory.split(',').length==2 && data.CSE5sem1credtheory.split(',').length==2  ) {
    let aimlfour=(data.AIML5sem3credtheory.split(','))
    let isefour=(data.ISE5sem3credtheory.split(','))
    let csefour=(data.CSE5sem3credtheory.split(','))
    let aimlone=(data.AIML5sem1credtheory.split(','))
    let iseone=(data.ISE5sem1credtheory.split(','))
    let cseone=(data.CSE5sem1credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
        }
        else{
          alert("You did't entered required subjects or You had entered more number of subjects :)")
        }
  }

  const onSubmitsem6 = (data) => {
    if (data.AIML6sem3credtheory.split(',').length==5 && (data.ISE6sem3credtheory.split(',')).length==5 && (data.CSE6sem3credtheory.split(',')).length==5 ) {
      let aimlfour=(data.AIML6sem3credtheory.split(','))
      let isefour=(data.ISE6sem3credtheory.split(','))
      let csefour=(data.CSE6sem3credtheory.split(','))
      let updateddata={ aimlfour, isefour, csefour}
      handlesubmit(updateddata);
    }
  
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem7 = (data) => {
    if (data.AIML7sem3credtheory.split(',').length==5 && (data.ISE7sem3credtheory.split(',')).length==5 && (data.CSE7sem3credtheory.split(',')).length==5 ) {
    let aimlfour=(data.AIML7sem3credtheory.split(','))
    let isefour=(data.ISE7sem3credtheory.split(','))
    let csefour=(data.CSE7sem3credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour}
    handlesubmit(updateddata);
  }
else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }
  const onSubmityear1eee = (data1) => {
    if ((data1.eeedept3credsubs.split(',')).length==5 && data1.eeedept1credsubs.split(',').length==2 ) {
      let fourHour=(data1.eeedept3credsubs.split(','))
    let oneHour=(data1.eeedept1credsubs.split(','))
    let updateddata = { fourHourSubject:fourHour, oneHourSubject:oneHour };
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }

  }

  const onSubmitsem3eee = (data) => {
    if (data.eee3sem3credtheory.split(',').length==4 && data.eee3sem1credtheory.split(',').length==3  ) {
    let eeefour=data.AIML3sem3credtheory.split(',')
    let eeeone=data.CSE3sem1credtheory.split(',')
    let updateddata={ eeefour, eeeone }
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem4eee = (data) => {
    if (data.eee4sem3credtheory.split(',').length==4 && data.eee4sem1credtheory.split(',').length==3  ) {
    let eeefour =(data.eee4sem3credtheory.split(','))
    let eeeone=(data.eee4sem1credtheory.split(','))
    let updateddata={ eeefour, eeeone }
    handlesubmit(updateddata);
      }
      else{
        alert("You did't entered required subjects or You had entered more number of subjects :)")
      }
  }

  const onSubmitsem5eee = (data) => {
    if (data.eee5sem3credtheory.split(',').length==4 &&  data.eee5sem1credtheory.split(',').length==2  ) {
    let eeefour=(data.eee5sem3credtheory.split(','))
    let eeeone=(data.eee5sem1credtheory.split(','))
    let updateddata={ eeefour, eeeone }
    handlesubmit(updateddata);
        }
        else{
          alert("You did't entered required subjects or You had entered more number of subjects :)")
        }
  }

  const onSubmitsem6eee = (data) => {
    if (data.AIML6sem3credtheory.split(',').length==5 && (data.ISE6sem3credtheory.split(',')).length==5 && (data.CSE6sem3credtheory.split(',')).length==5 ) {
      let aimlfour=(data.AIML6sem3credtheory.split(','))
      let isefour=(data.ISE6sem3credtheory.split(','))
      let csefour=(data.CSE6sem3credtheory.split(','))
      let updateddata={ aimlfour, isefour, csefour}
      handlesubmit(updateddata);
    }
  
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem7eee = (data) => {
    if (data.AIML7sem3credtheory.split(',').length==5 && (data.ISE7sem3credtheory.split(',')).length==5 && (data.CSE7sem3credtheory.split(',')).length==5 ) {
    let aimlfour=(data.AIML7sem3credtheory.split(','))
    let isefour=(data.ISE7sem3credtheory.split(','))
    let csefour=(data.CSE7sem3credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour}
    handlesubmit(updateddata);
  }
else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }
  const onSubmityear1ece = (data1) => {
    if ((data1.csedept3credsubs.split(',')).length==5 && data1.csedept1credsubs.split(',').length==2 ) {
      let fourHour=(data1.csedept3credsubs.split(','))
    let oneHour=(data1.csedept1credsubs.split(','))
    let updateddata = { fourHourSubject:fourHour, oneHourSubject:oneHour };
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }

  }

  const onSubmitsem3ece = (data) => {
    if (data.AIML3sem3credtheory.split(',').length==4 && data.ISE3sem3credtheory.split(',').length==4 && data.CSE3sem3credtheory.split(',').length==4 && data.AIML3sem1credtheory.split(',').length==3 && data.ISE3sem1credtheory.split(',').length==3 && data.CSE3sem1credtheory.split(',').length==3  ) {
    let aimlfour=data.AIML3sem3credtheory.split(',')
    let isefour=data.ISE3sem3credtheory.split(',')
    let csefour=data.CSE3sem3credtheory.split(',')
    let aimlone=data.AIML3sem1credtheory.split(',')
    let iseone=data.ISE3sem1credtheory.split(',')
    let cseone=data.CSE3sem1credtheory.split(',')
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem4ece = (data) => {
    if (data.AIML4sem3credtheory.split(',').length==4 && data.ISE4sem3credtheory.split(',').length==4 && data.CSE4sem3credtheory.split(',').length==4 && data.AIML4sem1credtheory.split(',').length==3 && data.ISE4sem1credtheory.split(',').length==3 && data.CSE4sem1credtheory.split(',').length==3  ) {
    let aimlfour =(data.AIML4sem3credtheory.split(','))
    let isefour=(data.ISE4sem3credtheory.split(','))
    let csefour=(data.CSE4sem3credtheory.split(','))
    let aimlone=(data.AIML4sem1credtheory.split(','))
    let iseone=(data.ISE4sem1credtheory.split(','))
    let cseone=(data.CSE4sem1credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
      }
      else{
        alert("You did't entered required subjects or You had entered more number of subjects :)")
      }
  }

  const onSubmitsem5ece = (data) => {
    if (data.AIML5sem3credtheory.split(',').length==4 && data.ISE5sem3credtheory.split(',').length==4 && data.CSE5sem3credtheory.split(',').length==4 && data.AIML5sem1credtheory.split(',').length==2 && data.ISE5sem1credtheory.split(',').length==2 && data.CSE5sem1credtheory.split(',').length==2  ) {
    let aimlfour=(data.AIML5sem3credtheory.split(','))
    let isefour=(data.ISE5sem3credtheory.split(','))
    let csefour=(data.CSE5sem3credtheory.split(','))
    let aimlone=(data.AIML5sem1credtheory.split(','))
    let iseone=(data.ISE5sem1credtheory.split(','))
    let cseone=(data.CSE5sem1credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
        }
        else{
          alert("You did't entered required subjects or You had entered more number of subjects :)")
        }
  }

  const onSubmitsem6ece = (data) => {
    if (data.AIML6sem3credtheory.split(',').length==5 && (data.ISE6sem3credtheory.split(',')).length==5 && (data.CSE6sem3credtheory.split(',')).length==5 ) {
      let aimlfour=(data.AIML6sem3credtheory.split(','))
      let isefour=(data.ISE6sem3credtheory.split(','))
      let csefour=(data.CSE6sem3credtheory.split(','))
      let updateddata={ aimlfour, isefour, csefour}
      handlesubmit(updateddata);
    }
  
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem7ece = (data) => {
    if (data.AIML7sem3credtheory.split(',').length==5 && (data.ISE7sem3credtheory.split(',')).length==5 && (data.CSE7sem3credtheory.split(',')).length==5 ) {
    let aimlfour=(data.AIML7sem3credtheory.split(','))
    let isefour=(data.ISE7sem3credtheory.split(','))
    let csefour=(data.CSE7sem3credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour}
    handlesubmit(updateddata);
  }
else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }
  const onSubmityear1mech = (data1) => {
    if ((data1.csedept3credsubs.split(',')).length==5 && data1.csedept1credsubs.split(',').length==2 ) {
      let fourHour=(data1.csedept3credsubs.split(','))
    let oneHour=(data1.csedept1credsubs.split(','))
    let updateddata = { fourHourSubject:fourHour, oneHourSubject:oneHour };
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }

  }

  const onSubmitsem3mech = (data) => {
    if (data.AIML3sem3credtheory.split(',').length==4 && data.ISE3sem3credtheory.split(',').length==4 && data.CSE3sem3credtheory.split(',').length==4 && data.AIML3sem1credtheory.split(',').length==3 && data.ISE3sem1credtheory.split(',').length==3 && data.CSE3sem1credtheory.split(',').length==3  ) {
    let aimlfour=data.AIML3sem3credtheory.split(',')
    let isefour=data.ISE3sem3credtheory.split(',')
    let csefour=data.CSE3sem3credtheory.split(',')
    let aimlone=data.AIML3sem1credtheory.split(',')
    let iseone=data.ISE3sem1credtheory.split(',')
    let cseone=data.CSE3sem1credtheory.split(',')
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
    }
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem4mech = (data) => {
    if (data.AIML4sem3credtheory.split(',').length==4 && data.ISE4sem3credtheory.split(',').length==4 && data.CSE4sem3credtheory.split(',').length==4 && data.AIML4sem1credtheory.split(',').length==3 && data.ISE4sem1credtheory.split(',').length==3 && data.CSE4sem1credtheory.split(',').length==3  ) {
    let aimlfour =(data.AIML4sem3credtheory.split(','))
    let isefour=(data.ISE4sem3credtheory.split(','))
    let csefour=(data.CSE4sem3credtheory.split(','))
    let aimlone=(data.AIML4sem1credtheory.split(','))
    let iseone=(data.ISE4sem1credtheory.split(','))
    let cseone=(data.CSE4sem1credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
      }
      else{
        alert("You did't entered required subjects or You had entered more number of subjects :)")
      }
  }

  const onSubmitsem5mech = (data) => {
    if (data.AIML5sem3credtheory.split(',').length==4 && data.ISE5sem3credtheory.split(',').length==4 && data.CSE5sem3credtheory.split(',').length==4 && data.AIML5sem1credtheory.split(',').length==2 && data.ISE5sem1credtheory.split(',').length==2 && data.CSE5sem1credtheory.split(',').length==2  ) {
    let aimlfour=(data.AIML5sem3credtheory.split(','))
    let isefour=(data.ISE5sem3credtheory.split(','))
    let csefour=(data.CSE5sem3credtheory.split(','))
    let aimlone=(data.AIML5sem1credtheory.split(','))
    let iseone=(data.ISE5sem1credtheory.split(','))
    let cseone=(data.CSE5sem1credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour, aimlone, iseone, cseone }
    handlesubmit(updateddata);
        }
        else{
          alert("You did't entered required subjects or You had entered more number of subjects :)")
        }
  }

  const onSubmitsem6mech = (data) => {
    if (data.AIML6sem3credtheory.split(',').length==5 && (data.ISE6sem3credtheory.split(',')).length==5 && (data.CSE6sem3credtheory.split(',')).length==5 ) {
      let aimlfour=(data.AIML6sem3credtheory.split(','))
      let isefour=(data.ISE6sem3credtheory.split(','))
      let csefour=(data.CSE6sem3credtheory.split(','))
      let updateddata={ aimlfour, isefour, csefour}
      handlesubmit(updateddata);
    }
  
    else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }

  const onSubmitsem7mech = (data) => {
    if (data.AIML7sem3credtheory.split(',').length==5 && (data.ISE7sem3credtheory.split(',')).length==5 && (data.CSE7sem3credtheory.split(',')).length==5 ) {
    let aimlfour=(data.AIML7sem3credtheory.split(','))
    let isefour=(data.ISE7sem3credtheory.split(','))
    let csefour=(data.CSE7sem3credtheory.split(','))
    let updateddata={ aimlfour, isefour, csefour}
    handlesubmit(updateddata);
  }
else{
      alert("You did't entered required subjects or You had entered more number of subjects :)")
    }
  }


  return (
    <div className="flex flex-col items-center w-full text-white pt-[5%] justify-center pb-5 absolute top-0 left-0 gap-4">
      <h1 className="text-3xl font-bold ">Welcome Admin</h1>
      <div className='flex flex-col items-center w-full '>
        <h1 className="font-semibold text-2xl">Select Department</h1>
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
          <div className=' flex flex-col justify-center items-center mt-10 gap-2'>

        <h1 className="font-semibold text-2xl ">Select Semester</h1>
          <div  className='flex gap-2 '>
            {[1, 2, 3, 4, 5, 6, 7].map((box) => (
              <button
              key={box}
              onClick={() => handleBoxClick(box)}
              className={`h-[100px] w-[100px] bg-[#ffffffac] text-[#000] flex items-center justify-center rounded-full cursor-pointer smooth crdshdw hover:invert`}
              >
                {box}
              </button>
            ))}
          </div>
            </div>
        )}
        <div className='flex'>
        
          {selectedButton=="CSE" && ["Whole CSE branch"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1)} action="" className='flex items-center'>
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input {...register("csedept3credsubs")}
                      type="text"
                      id="input"
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("csedept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                </div>
                
                <div className='flex gap-5'>
              <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold`}>
                Generate Timetable
              </button>
               
              </div>
                </form>
              )}
         </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                    </div>
                  )}

                </div>

              ))}
            {selectedButton=="CSE" && showinput && selectedBox == 3&& (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton=="CSE" && showinput && selectedBox == 4  && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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

              </div>

            ))}{showinput && selectedButton=="CSE" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          {selectedButton=="EEE" && ["EEE"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1eee)} action="" className='flex items-center'>
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input {...register("eeedept3credsubs")}
                      type="text"
                      id="input"
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("csedept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                </div>
                
                <div className='flex gap-5'>
              <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold`}>
                Generate Timetable
              </button>
               
              </div>
                </form>
              )}
         </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                    </div>
                  )}

                </div>

              ))}
            {selectedButton=="CSE" && showinput && selectedBox == 3&& (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton=="CSE" && showinput && selectedBox == 4  && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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

              </div>

            ))}{showinput && selectedButton=="CSE" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          {selectedButton=="CSE" && ["Whole CSE branch"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1)} action="" className='flex items-center'>
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input {...register("csedept3credsubs")}
                      type="text"
                      id="input"
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("csedept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                </div>
                
                <div className='flex gap-5'>
              <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold`}>
                Generate Timetable
              </button>
               
              </div>
                </form>
              )}
         </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                    </div>
                  )}

                </div>

              ))}
            {selectedButton=="CSE" && showinput && selectedBox == 3&& (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton=="CSE" && showinput && selectedBox == 4  && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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

              </div>

            ))}{showinput && selectedButton=="CSE" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          {selectedButton=="CSE" && ["Whole CSE branch"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1)} action="" className='flex items-center'>
                <div className='flex flex-col mt-5 ml-4' >
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                    Select the 3 credit subjects for {subbranch}:
                  </div>
                  <div className='flex gap-2 '>
                    <input {...register("csedept3credsubs")}
                      type="text"
                      id="input"
                      placeholder={`Enter the subjects for ${subbranch}`}
                      className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div className="text-lg font-medium text-[#ffffff] w-full">
                      Select the 1 credit subjects for {subbranch}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("csedept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                </div>
                
                <div className='flex gap-5'>
              <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold`}>
                Generate Timetable
              </button>
               
              </div>
                </form>
              )}
         </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                    </div>
                  )}

                </div>

              ))}
            {selectedButton=="CSE" && showinput && selectedBox == 3&& (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton=="CSE" && showinput && selectedBox == 4  && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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
                        
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 border w-full text-[#000] border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton=="CSE" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7)} action="" className='flex items-center'>
            {selectedButton=="CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

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

              </div>

            ))}{showinput && selectedButton=="CSE" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold ml-5" disabled>
                  Processing
                </button>
              )
            )}
          </form>
        </div>
        {view && (
          <button
            onClick={handledisplay}
            className="bg-yellow-500 text-center w-40 ml-4 h-10 rounded-md text-sm font-semibold m-5"
          >
            View Timetable
          </button>
        )}
      </div>
      
    </div>
  );
};

export default Page;