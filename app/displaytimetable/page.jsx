import React, { useEffect, useState } from 'react';

const Timetable = ({ data, selectedSemesters }) => {
    let timetable=[];
    let classes=["AIML","ISE","CSEA","CSEB"]
  return (
    <div className="timetable-container">
      <h1 className="text-3xl font-bold">{data.result.name} Timetable</h1>
      {selectedSemesters.map((sem, index) => {
        switch (sem) {
            case 1:
                timetable = data.result[`cseccycle`]; 
                break;
            case 2:
                timetable = data.result[`csepcycle`];
                break;
            case 3:
                timetable = data.result[`cse3rdsem`];
                break;
            case 4:
                timetable = data.result[`cse4thsem`];
                break;
            case 5:
                timetable = data.result[`cse5thsem`];
                break;
            case 6:
                timetable = data.result[`cse6thsem`];
                break;
            case 7:
                timetable = data.result[`cse7thsem`];
                break;
            case 8:
                timetable = data.result[`cse8thsem`];
                break;
            default:
                break;
        }

        if (!timetable || timetable.length <2) {
          return <p key={index}>No timetable available for {sem} semester.</p>;
        }

        return (
          <div key={index} className="timetable-section">
            <h2 className="text-2xl font-semibold">{sem} Semester Timetable</h2>
            {timetable.map((week, weekIndex) => (
              <div key={weekIndex} className="week flex flex-col">
                <h3 className="font-bold">{classes[weekIndex]}</h3>
                <table className="timetable-table w-[100%] flex flex-col justify-center items-center">
                  <thead className='w-[90%] mb-2'>
                    <tr className='flex justify-evenly gap-2'>
                      <th className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>Day</th>
                      <th className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>8-10:30</th>
                      <th className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>11-12:40</th>
                      <th className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>12:40-2:20</th>
                      <th className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>2:40-5:15</th>
                    </tr>
                  </thead>
                  <tbody className='w-[90%] flex flex-col gap-1'>
                    {week.map((day, dayIndex) => (
                      <tr key={dayIndex} className='flex justify-evenly gap-2'>
                        <td className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>{day[0]}</td>
                        <td className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>{day[1]}</td>
                        <td className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>{day[2]}</td>
                        <td className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>{day[3]}</td>
                        <td className='w-1/5 text-center border-[#000000] border-2 rounded-md py-1'>{day[4]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const [data, setData] = useState(null);
  const [selectedSemesters, setSelectedSemesters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api'); // Adjust the API endpoint
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  const handleSemesterSelection = (sem) => {
    setSelectedSemesters((prev) => {
      if (prev.includes(sem)) {
        return prev.filter((s) => s !== sem); // Deselect if already selected
      } else if (prev.length < 4) {
        return [...prev, sem]; // Select if less than 4
      }
      return prev; // Don't allow more than 4 selections
    });
  };

  return (
    <div className="app-container">
      <div>
        <h2>Select Semesters:</h2>
        {[3, 4, 5, 6, 7, 8].map((sem) => (
          <button
            key={sem}
            onClick={() => handleSemesterSelection(sem)}
            style={{
              backgroundColor: selectedSemesters.includes(sem) ? '#3b82f6e0' : 'white',
              color: selectedSemesters.includes(sem) ? 'white' : 'black',
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
    </div>
  );
};

export default Timetable;
