"use client";
import React, { useState } from 'react';
import { useForm, useFormState } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
    if (selectedButton == "CSE") {  
    window.location.replace("/csetimetable");
    }
    else if (selectedButton == "EEE"){
      window.location.replace("/eeetimetable");
    }
    else if (selectedButton == "ECE"){
      window.location.replace("/ecetimetable");
    }
    else if (selectedButton == "MECH"){
      window.location.replace("/mechtimetable");
    }

  };

  const handlesubmit = async (updateddata) => {
    setSubmit(true);
    setcolur("red")
    if (!selectedBox) return; // Prevent submission if no box is selected
    let result = await fetch("/api", {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ department: selectedButton, sem: selectedBox, data: updateddata }),
    });
    if (result.ok) {
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
    if ((data1.csedept3credsubs.split(',')).length == 5 && data1.csedept1credsubs.split(',').length == 2) {
      let fourHour = (data1.csedept3credsubs.split(','))
      let oneHour = (data1.csedept1credsubs.split(','))
      let updateddata = { fourHourSubject: fourHour, oneHourSubject: oneHour };
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 5 three credit and 2 one credit subject")
    }

  }

  const onSubmitsem3 = (data) => {
    if (data.AIML3sem3credtheory.split(',').length == 4 && data.ISE3sem3credtheory.split(',').length == 4 && data.CSE3sem3credtheory.split(',').length == 4 && data.AIML3sem1credtheory.split(',').length == 3 && data.ISE3sem1credtheory.split(',').length == 3 && data.CSE3sem1credtheory.split(',').length == 3) {
      let aimlfour = data.AIML3sem3credtheory.split(',')
      let isefour = data.ISE3sem3credtheory.split(',')
      let csefour = data.CSE3sem3credtheory.split(',')
      let aimlone = data.AIML3sem1credtheory.split(',')
      let iseone = data.ISE3sem1credtheory.split(',')
      let cseone = data.CSE3sem1credtheory.split(',')
      let updateddata = { aimlfour, isefour, csefour, aimlone, iseone, cseone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem4 = (data) => {
    if (data.AIML4sem3credtheory.split(',').length == 4 && data.ISE4sem3credtheory.split(',').length == 4 && data.CSE4sem3credtheory.split(',').length == 4 && data.AIML4sem1credtheory.split(',').length == 3 && data.ISE4sem1credtheory.split(',').length == 3 && data.CSE4sem1credtheory.split(',').length == 3) {
      let aimlfour = (data.AIML4sem3credtheory.split(','))
      let isefour = (data.ISE4sem3credtheory.split(','))
      let csefour = (data.CSE4sem3credtheory.split(','))
      let aimlone = (data.AIML4sem1credtheory.split(','))
      let iseone = (data.ISE4sem1credtheory.split(','))
      let cseone = (data.CSE4sem1credtheory.split(','))
      let updateddata = { aimlfour, isefour, csefour, aimlone, iseone, cseone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem5 = (data) => {
    if (data.AIML5sem3credtheory.split(',').length == 4 && data.ISE5sem3credtheory.split(',').length == 4 && data.CSE5sem3credtheory.split(',').length == 4 && data.AIML5sem1credtheory.split(',').length == 2 && data.ISE5sem1credtheory.split(',').length == 2 && data.CSE5sem1credtheory.split(',').length == 2) {
      let aimlfour = (data.AIML5sem3credtheory.split(','))
      let isefour = (data.ISE5sem3credtheory.split(','))
      let csefour = (data.CSE5sem3credtheory.split(','))
      let aimlone = (data.AIML5sem1credtheory.split(','))
      let iseone = (data.ISE5sem1credtheory.split(','))
      let cseone = (data.CSE5sem1credtheory.split(','))
      let updateddata = { aimlfour, isefour, csefour, aimlone, iseone, cseone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 2 one credit subjects")
    }
  }

  const onSubmitsem6 = (data) => {
    if (data.AIML6sem3credtheory.split(',').length == 5 && (data.ISE6sem3credtheory.split(',')).length == 5 && (data.CSE6sem3credtheory.split(',')).length == 5) {
      let aimlfour = (data.AIML6sem3credtheory.split(','))
      let isefour = (data.ISE6sem3credtheory.split(','))
      let csefour = (data.CSE6sem3credtheory.split(','))
      let updateddata = { aimlfour, isefour, csefour }
      handlesubmit(updateddata);
    }

    else {toast("You did't entered 5 3 credit subjects :)")
    }
  }

  const onSubmitsem7 = (data) => {
    if (data.AIML7sem3credtheory.split(',').length == 5 && (data.ISE7sem3credtheory.split(',')).length == 5 && (data.CSE7sem3credtheory.split(',')).length == 5) {
      let aimlfour = (data.AIML7sem3credtheory.split(','))
      let isefour = (data.ISE7sem3credtheory.split(','))
      let csefour = (data.CSE7sem3credtheory.split(','))
      let updateddata = { aimlfour, isefour, csefour }
      handlesubmit(updateddata);
    }
    else {toast("You did't entered 5 3 credit subjects :)")
    }
  }
  const onSubmityear1eee = (data1) => {
    if ((data1.eeedept3credsubs.split(',')).length == 5 && data1.eeedept1credsubs.split(',').length == 2) {
      let fourHour = (data1.eeedept3credsubs.split(','))
      let oneHour = (data1.eeedept1credsubs.split(','))
      let updateddata = { fourHourSubject: fourHour, oneHourSubject: oneHour };
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 5 three credit and 2 one credit subject")
    }

  }

  const onSubmitsem3eee = (data) => {
    if (data.eee3sem3credtheory.split(',').length == 4 && data.eee3sem1credtheory.split(',').length == 3) {
      let eeefour = data.eee3sem3credtheory.split(',')
      let eeeone = data.eee3sem1credtheory.split(',')
      let updateddata = { eeefour, eeeone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem4eee = (data) => {
    if (data.eee4sem3credtheory.split(',').length == 4 && data.eee4sem1credtheory.split(',').length == 3) {
      let eeefour = (data.eee4sem3credtheory.split(','))
      let eeeone = (data.eee4sem1credtheory.split(','))
      let updateddata = { eeefour, eeeone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem5eee = (data) => {
    if (data.eee5sem3credtheory.split(',').length == 4 ) {
      let eeefour = (data.eee5sem3credtheory.split(','))
      let updateddata = { eeefour }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 2 one credit subjects")
    }
  }

  const onSubmitsem6eee = (data) => {
    if (data.eee6sem3credtheory.split(',').length == 5 ) {
      let eeefour = (data.eee6sem3credtheory.split(','))
      let updateddata = { eeefour }
      handlesubmit(updateddata);
    }

    else {
      toast("You did't entered 5 3 credit subjects :)")
    }
  }

  const onSubmitsem7eee = (data) => {
    if (data.eee7sem3credtheory.split(',').length == 4) {
      let eeefour = (data.eee7sem3credtheory.split(','))
      let updateddata = { eeefour }
      handlesubmit(updateddata);
    }
    else {
      toast("You did't entered 5 3 credit subjects :)")
    }
  }
  const onSubmityear1ece = (data1) => {
    if ((data1.ecedept3credsubs.split(',')).length == 5 && data1.ecedept1credsubs.split(',').length == 2) {
      let fourHour = (data1.ecedept3credsubs.split(','))
      let oneHour = (data1.ecedept1credsubs.split(','))
      let updateddata = { fourHourSubject: fourHour, oneHourSubject: oneHour };
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 5 three credit and 2 one credit subject")
    }

  }

  const onSubmitsem3ece = (data) => {
    if (data.ece3sem3credtheory.split(',').length == 4 &&  data.ece3sem1credtheory.split(',').length == 3) {
      let ecefour = data.ece3sem3credtheory.split(',')
      let eceone = data.ece3sem1credtheory.split(',')
      let updateddata = { ecefour, eceone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem4ece = (data) => {
    if (data.ece4sem3credtheory.split(',').length == 4 &&  data.ece4sem1credtheory.split(',').length == 3) {
      let ecefour = (data.AIML4sem3credtheory.split(','))
      let eceone = (data.CSE4sem1credtheory.split(','))
      let updateddata = { ecefour,  eceone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem5ece = (data) => {
    if (data.ece5sem3credtheory.split(',').length == 4 && data.ece5sem1credtheory.split(',').length == 2) {
      let  ecefour = (data.AIML5sem3credtheory.split(','))
      let eceone = (data.CSE5sem1credtheory.split(','))
      let updateddata = { ecefour,  eceone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 2 one credit subjects")
    }
  }

  const onSubmitsem6ece = (data) => {
    if (data.ece6sem3credtheory.split(',').length == 5) {
      let ecefour = (data.ece6sem3credtheory.split(','))
      let updateddata = { ecefour }
      handlesubmit(updateddata);
    }

    else {
      toast("Enter 5 three credit subject :")
    }
  }

  const onSubmitsem7ece = (data) => {
    if (data.ece7sem3credtheory.split(',').length == 5) {
      let ecefour = (data.ece7sem3credtheory.split(','))
      let updateddata = { ecefour }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 5 three credit subject :")
    }
  }
  const onSubmityear1mech = (data1) => {
    if ((data1.mechdept3credsubs.split(',')).length == 5 && data1.mechdept1credsubs.split(',').length == 2) {
      let fourHour = (data1.mechdept3credsubs.split(','))
      let oneHour = (data1.mechdept1credsubs.split(','))
      let updateddata = { fourHourSubject: fourHour, oneHourSubject: oneHour };
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 5 three credit and 2 one credit subject")
    }

  }

  const onSubmitsem3mech = (data) => {
    if (data.mech3sem3credtheory.split(',').length == 4 &&  data.mech3sem1credtheory.split(',').length == 3) {
      let mechfour = data.mech3sem3credtheory.split(',')
      let mechone = data.mech3sem1credtheory.split(',')
      let updateddata = { mechfour, mechone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem4mech = (data) => {
    if (data.mech4sem3credtheory.split(',').length == 4 &&  data.mech4sem1credtheory.split(',').length == 3) {
      let mechfour = (data.mech4sem3credtheory.split(','))
      let mechone = (data.mech4sem1credtheory.split(','))
      let updateddata = { mechfour, mechone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 3 one credit subjects")
    }
  }

  const onSubmitsem5mech = (data) => {
    if (data.mech5sem3credtheory.split(',').length == 4 && data.mech5sem1credtheory.split(',').length == 2) {
      let mechfour = (data.AIML5sem3credtheory.split(','))
      let mechone = (data.CSE5sem1credtheory.split(','))
      let updateddata = { mechfour,  mechone }
      handlesubmit(updateddata);
    }
    else {
      toast("Enter 4 three credit and 2 one credit subjects")
    }
  }

  const onSubmitsem6mech = (data) => {
    if (data.mech6sem3credtheory.split(',').length == 5) {
      let mechfour = (data.mech6sem3credtheory.split(','))
      let updateddata = { mechfour }
      handlesubmit(updateddata);
    }

    else {
      toast("You did't entered 5 3 credit subjects :)")
    }
  }

  const onSubmitsem7mech = (data) => {
    if (data.mech7sem3credtheory.split(',').length == 5) {
      let mechfour = (data.mech7sem3credtheory.split(','))
      let updateddata = { mechfour }
      handlesubmit(updateddata);
    }
    else {
      toast("You did't entered 5 3 credit subjects :)")
    }
  }


  return (
    <div className="flex flex-col items-center w-full text-white pt-[5%] justify-center absolute top-0 left-0 gap-4">
      <h1 className="text-3xl font-bold ">Welcome Admin</h1>
      <ToastContainer />
      <div className='flex flex-col items-center w-full '>
        <h1 className="font-semibold text-2xl">Select Department</h1>
        <div className='flex gap-5 mt-2'>
          {["CSE", "EEE", "ECE", "MECH"].map((button) => (
            <button
              key={button}
              onClick={() => handleButtonClick(button)}
              className={`px-10 py-3 bg-[#ffffffd5] font-medium text-[#000] flex items-center justify-center rounded-md cursor-pointer smooth crdshdw hover:invert
                    focus:border-2 focus:border-[#ffffff] focus:bg-[#000000] focus:text-[#ffffff] focus:invert-0 focus:shadow-none border-2 border-[#00000000]`}
                            >
              {button}
            </button>
          ))}

        </div>
        {selectedButton && (
          <div className=' flex flex-col justify-center items-center mt-4 gap-2 pb-10'>

            <h1 className="font-semibold text-2xl ">Select Semester</h1>
            <div className='flex gap-5 '>
              {[1, 2, 3, 4, 5, 6, 7].map((box) => (
                <button
                  key={box}
                  onClick={() => handleBoxClick(box)}
                  className={`px-10 py-3 bg-[#ffffffcc] font-bold  text-[#000] flex items-center justify-center rounded-md cursor-pointer smooth crdshdw hover:invert 
                    focus:border-2 focus:border-[#ffffff] focus:bg-[#000000] focus:text-[#ffffff] focus:invert-0 focus:shadow-none border-2 border-[#00000000]`}
                >
                  {box}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className='flex'>

          {selectedButton == "CSE" && ["Whole CSE branch"].map((subbranch) => (
            <div key={selectedBox} className=''>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1)} action="" className=''>
                  <div className='flex flex-col ' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("csedept3credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>
                    <div className="text-lg font-medium text-[#ffffff] w-full mt-5">
                      Enter the 1 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("csedept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>

                  <div className='flex gap-5'>
                    <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold `}>
                      Generate Timetable
                    </button>

                  </div>
                </form>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3)} action="" className=''>
            <div className='flex gap-2'>
              {selectedButton == "CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

                <div key={subbranch}>

                  {showinput && selectedBox == 3 && (
                    <div className='flex flex-col  ml-4' >
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}3sem3credtheory`)}
                          type="text"
                          id="input"
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                        />
                      </div>

                    </div>
                  )}

                  {showinput && selectedBox == 3 && (
                    <div className='flex flex-col  ml-4'>
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Enter the 1 credit theory subjects for {subbranch.toUpperCase()}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}3sem1credtheory`)}
                          type="text"
                          id="input"
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                        />
                      </div>

                    </div>
                  )}

                </div>

              ))}
            </div>

            {selectedButton == "CSE" && showinput && selectedBox == 3 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4)} action="" className=''>
            <div className='flex gap-2'>
              {selectedButton == "CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

                <div key={subbranch}>

                  {showinput && selectedBox == 4 && (
                    <div className='flex flex-col  ml-4' >
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}4sem3credtheory`)}
                          type="text"
                          id="input"
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                        />
                      </div>

                    </div>
                  )}
                  {showinput && selectedBox == 4 && (
                    <div className='flex flex-col  ml-4'>
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Enter the 1 credits theory subjects for {subbranch.toUpperCase()}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}4sem1credtheory`)}
                          type="text"
                          id="input"
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                        />
                      </div>

                    </div>
                  )}

                </div>

              ))}
            </div>
            {selectedButton == "CSE" && showinput && selectedBox == 4 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5)} action="" className=''>
            <div className='flex gap-2'>
              {selectedButton == "CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

                <div key={subbranch}>

                  {showinput && selectedBox == 5 && (
                    <div className='flex flex-col  ml-4' >
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}5sem3credtheory`)}
                          type="text"
                          id="input"
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                        />
                      </div>

                    </div>
                  )}
                  {showinput && selectedBox == 5 && (
                    <div className='flex flex-col  ml-4'>
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Enter the 1 credit theory subjects for {subbranch.toUpperCase()}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}5sem1credtheory`)}
                          type="text"
                          id="input"
                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                        />
                      </div>

                    </div>
                  )}
                </div>

              ))}
            </div>
            {showinput && selectedButton == "CSE" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6)} action="" className=''>
            <div className='flex gap-2'>
              {selectedButton == "CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

                <div key={subbranch}>

                  {showinput && selectedBox == 6 && (
                    <div className='flex flex-col  ml-4' >
                      <div className="text-lg font-medium text-[#ffffff] w-full">
                        Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                      </div>
                      <div className='flex gap-2 '>
                        <input {...register(`${subbranch}6sem3credtheory`)}
                          type="text"
                          id="input"

                          placeholder={`Enter the subjects for ${subbranch}`}
                          className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                        />
                      </div>

                    </div>
                  )}
                </div>

              ))}
            </div>
            {showinput && selectedButton == "CSE" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7)} action="" className=''>
          <div className='flex gap-2'>
            {selectedButton == "CSE" && ["CSE", "ISE", "AIML"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 7 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}7sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
              </div>
            {showinput && selectedButton == "CSE" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              ))}
          </form>
          {selectedButton == "EEE" && ["eee"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1eee)} action="" className=''>
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("eeedept3credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("eeedept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>

                  <div className='flex gap-5'>
                    <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold `}>
                      Generate Timetable
                    </button>

                  </div>
                </form>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3eee)} action="" className=''>
            {selectedButton == "EEE" && ["eee"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 3 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

                {showinput && selectedBox == 3 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit theory subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton == "EEE" && showinput && selectedBox == 3 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4eee)} action="" className=''>
            {selectedButton == "EEE" && ["eee"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credits theory subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton == "EEE" && showinput && selectedBox == 4 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5eee)} action="" className=''>
            {selectedButton == "EEE" && ["eee"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit theory subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton == "EEE" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6eee)} action="" className=''>
            {selectedButton == "EEE" && ["eee"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 6 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}6sem3credtheory`)}
                        type="text"
                        id="input"

                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton == "EEE" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7eee)} action="" className=''>
            {selectedButton == "EEE" && ["eee"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 7 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}7sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}{showinput && selectedButton == "EEE" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          {selectedButton == "ECE" && ["ece"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1ece)} action="" className=''>
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("ecedept3credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("ecedept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>

                  <div className='flex gap-5'>
                    <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold `}>
                      Generate Timetable
                    </button>

                  </div>
                </form>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3ece)} action="" className=''>
            {selectedButton == "ECE" && ["ece"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 3 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

                {showinput && selectedBox == 3 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit theory subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton == "ECE" && showinput && selectedBox == 3 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4ece)} action="" className=''>
            {selectedButton == "ECE" && ["ece"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credits theory subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton == "ECE" && showinput && selectedBox == 4 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5ece)} action="" className=''>
            {selectedButton == "ECE" && ["ece"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit theory subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton == "ECE" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6ece)} action="" className=''>
            {selectedButton == "ECE" && ["ece"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 6 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}6sem3credtheory`)}
                        type="text"
                        id="input"

                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton == "ECE" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7ece)} action="" className=''>
            {selectedButton == "ECE" && ["ece"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 7 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}7sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}{showinput && selectedButton == "ECE" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          {selectedButton == "MECH" && ["Whole MECH branch"].map((subbranch) => (
            <div key={selectedBox}>
              {showinput && (selectedBox == 1 || selectedBox == 2) && (
                <form onSubmit={handleSubmit(onSubmityear1mech)} action="" className=''>
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("mechdept3credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register("mechdept1credsubs")}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>

                  <div className='flex gap-5'>
                    <button type='submit' className={` ml-5 bg-${colur}-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold `}>
                      Generate Timetable
                    </button>

                  </div>
                </form>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit(onSubmitsem3mech)} action="" className=''>
            {selectedButton == "MECH" && ["mech"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 3 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

                {showinput && selectedBox == 3 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit theory subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}3sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton == "MECH" && showinput && selectedBox == 3 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem4mech)} action="" className=''>
            {selectedButton == "MECH" && ["mech"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credit subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 4 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credits theory subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}4sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}
            {selectedButton == "MECH" && showinput && selectedBox == 4 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem5mech)} action="" className=''>
            {selectedButton == "MECH" && ["mech"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem3credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
                {showinput && selectedBox == 5 && (
                  <div className='flex flex-col  ml-4'>
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 1 credit theory subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}5sem1credtheory`)}
                        type="text"
                        id="input"
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton == "MECH" && selectedBox == 5 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem6mech)} action="" className=''>
            {selectedButton == "MECH" && ["mech"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 6 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}6sem3credtheory`)}
                        type="text"
                        id="input"

                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}
              </div>

            ))}
            {showinput && selectedButton == "MECH" && selectedBox == 6 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
          <form onSubmit={handleSubmit(onSubmitsem7mech)} action="" className=''>
            {selectedButton == "MECH" && ["mech"].map((subbranch) => (

              <div key={subbranch}>

                {showinput && selectedBox == 7 && (
                  <div className='flex flex-col  ml-4' >
                    <div className="text-lg font-medium text-[#ffffff] w-full">
                      Enter the 3 credits subjects for {subbranch.toUpperCase()}ANICAL:
                    </div>
                    <div className='flex gap-2 '>
                      <input {...register(`${subbranch}7sem3credtheory`)}
                        type="text"
                        id="input"
                        // value={inputValue}
                        // onChange={handleChange}
                        placeholder={`Enter the subjects for ${subbranch}`}
                        className="px-4 py-2 w-full font-semibold text-[#000] bg-[#ffffffcc] focus:bg-[#fff] rounded-lg outline-none focus:outline-[#000] focus:outline-1 placeholder:text-[#000000ac]"
                      />
                    </div>

                  </div>
                )}

              </div>

            ))}{showinput && selectedButton == "MECH" && selectedBox == 7 && (
              !submit ? (
                <div className='flex gap-5'>
                  <button type='submit' className=" ml-5 bg-green-500 text-center w-40 mt-5 h-10 rounded-md text-sm font-semibold ">
                    Generate Timetable
                  </button>

                </div>
              ) : (
                <button className="bg-red-500 text-center w-40 mt-2 h-10 rounded-md text-sm font-semibold " disabled>
                  Processing
                </button>
              )
            )}
          </form>
        </div>
        {view && (
          <button
            onClick={handledisplay}
            className="bg-yellow-500 text-center w-40 ml-4 h-10 rounded-md text-sm font-semibold mt-5"
          >
            View Timetable
          </button>
        )}
      </div>

    </div>
  );
};

export default Page;