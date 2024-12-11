import React, { useEffect, useState } from 'react';

const Timetablecseuser = ({ data, selectedSemester }) => {
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
        semData = data.result[`cseccycle`][0] !== "" ? data.result[`cseccycle`] : data.result[`csepcycle`];
        console.log(semData);
        
        break;
      case 2:
        console.log("Selected Semester is 2");
        semData = data.result[`cse3rdsem`][0] !== "" ? data.result[`cse3rdsem`] : data.result[`cse4thsem`];
        break;
      case 3:
        console.log("Selected Semester is 3");
        semData = data.result[`cse5thsem`][0] !== "" ? data.result[`cse5thsem`] : data.result[`cse6thsem`];
        break;
      case 4:
        console.log("Selected Semester is 4");
        semData = data.result[`cse7thsem`][0] !== "" ? data.result[`cse7thsem`] : data.result[`cse8thsem`];
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
    <div className="timetable-container">
      <h1 className="text-3xl font-bold">{data?.result?.name} Timetable</h1>
      {timetable.length === 0 ? (
        <p>No timetable available for the selected semester.</p>
      ) : (
        timetable.map(({ semester, timetable }, index) => (
          <div key={index} className="timetable-section">
            <h2 className="text-2xl font-semibold">{semester}nd year Timetable</h2>
            <div className="week">
              <h3 className="font-bold">CSE A</h3>
              <table className="timetable-table">
                <thead>
                  <tr>
                    <th className="ml-5">Day</th>
                    <th className="ml-5">8-10:30</th>
                    <th className="ml-5">11-12:40</th>
                    <th className="ml-5">12:40-2:20</th>
                    <th className="ml-5">2:40-5:15</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable[2].map((day, dayIndex) => (
                    <tr key={dayIndex}>
                      <td className="ml-5 text-center px-5">{day[0]}</td>
                      <td className="ml-5 text-center px-5">{day[1]}</td>
                      <td className="ml-5 text-center px-5">{day[2]}</td>
                      <td className="ml-5 text-center px-5">{day[3]}</td>
                      <td className="ml-5 text-center px-5">{day[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {timetable[3] && <div className="week">
              <h3 className="font-bold">CSE B</h3>
              <table className="timetable-table">
                <thead>
                  <tr>
                    <th className="ml-5">Day</th>
                    <th className="ml-5">8-10:30</th>
                    <th className="ml-5">11-12:40</th>
                    <th className="ml-5">12:40-2:20</th>
                    <th className="ml-5">2:40-5:15</th>
                  </tr>
                </thead>
                <tbody>
                  {timetable[3].map((day, dayIndex) => (
                    <tr key={dayIndex}>
                      <td className="ml-5 text-center px-5">{day[0]}</td>
                      <td className="ml-5 text-center px-5">{day[1]}</td>
                      <td className="ml-5 text-center px-5">{day[2]}</td>
                      <td className="ml-5 text-center px-5">{day[3]}</td>
                      <td className="ml-5 text-center px-5">{day[4]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>}
          </div>
        ))
      )}
    </div>
  );
};

export default Timetablecseuser;
