import React, { useEffect, useState } from 'react';

const Timetableeceuser = ({ data, selectedSemester }) => {
  const [timetable, setTimetable] = useState([]);
console.log(data);

  useEffect(() => {
    if (!selectedSemester || !data) {
      return; // Exit early if selectedSemester or data is missing
    }

    // Log selectedSemester and its type to debug
    console.log("selectedSemester:", selectedSemester, typeof selectedSemester);

    // Convert selectedSemester to a number, if it's not already
    const semester = Number(selectedSemester); // Convert to number if necessary

    // Log after conversion to see the final value
    console.log("Converted semester:", semester);

    let semData = [];

    // Check the selected semester and get the timetable data
    switch (semester) {
      case 1:
        console.log("Selected Semester is 1");
        semData = data.result[`ececcycle`][0] !== "" ? data.result[`ececcycle`] : data.result[`ecepcycle`];
        console.log(semData);
        
        break;
      case 2:
        console.log("Selected Semester is 2");
        semData = data.result[`ece3rdsem`][0] !== "" ? data.result[`ece3rdsem`] : data.result[`ece4thsem`];
        break;
      case 3:
        console.log("Selected Semester is 3");
        semData = data.result[`ece5thsem`][0] !== "" ? data.result[`ece5thsem`] : data.result[`ece6thsem`];
        break;
      case 4:
        console.log("Selected Semester is 4");
        semData = data.result[`ece7thsem`][0] !== "" ? data.result[`ece7thsem`] : data.result[`ece8thsem`];
        break;
      default:
        console.log("Default case hit, invalid semester:", selectedSemester);
        break;
    }

    // If valid timetable data is found, update state
    if (semData && semData.length > 0) {
      setTimetable([{ semester, timetable: semData }]);
    } else {
      setTimetable([]); // No timetable available for the selected semester
    }

    console.log('Final selected semester:', semester); // Debugging statement

  }, [selectedSemester, data]); // This hook runs when either `selectedSemester` or `data` changes

  if (!data) {
    return <p>Loading timetable...</p>; // Show loading state if `data` is not available
  }

  return (
    <div className="timetable-container w-full h-[100vh] bg-[#000000a6] text-[#ffffff] absolute top-0 left-0 z-50 overflow-x-hidden overflow-y-scroll flex flex-col justify-center items-center">
      <div className='h-[100vh] w-full pt-7'>
      {timetable.length === 0 ? (
        <p>No timetable available for the selected semester.</p>
      ) : (
        timetable.map(({ semester, timetable }, index) => (
          <div key={index} className="w-full flex justify-center items-center flex-col gap-4 p-10 timetable-section ">
            <h2 className="text-3xl font-bold">Timetable of ECE year {semester}</h2>
            <div className="week border-2 bg-[#00000099] border-[#ffffff] w-full flex flex-col justify-center items-center gap-2 p-4 rounded-md">
              <h3 className="font-bold text-xl pb-4">ECE - A</h3>
              <table className="timetable-table w-[90%]">
                <thead className=''>
                  <tr className='flex justify-evenly gap-1 mb-2'>
                    <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">Day</th>
                    <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">8-10:30</th>
                    <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">11-12:40</th>
                    <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">12:40-2:20</th>
                    <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">2:40-5:15</th>
                  </tr>
                </thead>
                <tbody className='flex flex-col gap-1'>
                  {timetable[0].map((day, dayIndex) => (
                    <tr key={dayIndex} className='flex justify-evenly gap-1'>
                      <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[0]}</td>
                      <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[1]}</td>
                      <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[2]}</td>
                      <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[3]}</td>
                      <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>

              {timetable[1] && <div  className="week border-2 bg-[#00000099] border-[#ffffff] w-full flex flex-col justify-center items-center gap-2 p-4 rounded-md">
                <h3 className="font-bold text-xl pb-4">ECE - B</h3>
                <table className="timetable-table w-[90%]">
                  <thead className=''>
                  <tr className='flex justify-evenly gap-1 mb-2'>
                      <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">Day</th>
                      <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">8-10:30</th>
                      <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">11-12:40</th>
                      <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">12:40-2:20</th>
                      <th className="w-1/5 text-center rounded-md py-3 bg-[#ffffff] text-[#000]">2:40-5:15</th>
                    </tr>
                  </thead>
                  <tbody className='flex flex-col gap-1'>
                    {timetable[1].map((day, dayIndex) => (
                      <tr key={dayIndex} className='flex justify-evenly gap-1'>
                        <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[0]}</td>
                        <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[1]}</td>
                        <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[2]}</td>
                        <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[3]}</td>
                        <td className="w-1/5 text-center rounded-md py-2 bg-[#ffffffef] text-[#000]">{day[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>}
          </div>
        ))
      )}
      </div>
    </div>
  );
};

export default Timetableeceuser;
