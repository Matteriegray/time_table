import React, { useEffect, useState } from 'react';

const Timetableece = ({ data, selectedSemesters }) => {
    let timetable=[];
    let classes=["ECEA","ECEB"]
  return (
    <div className="timetable-container">
      <h1 className="text-3xl font-bold">{data.result.name} Timetable</h1>
      {selectedSemesters.map((sem, index) => {
        switch (sem) {
            case 1:
                timetable = data.result[`ecepcycle`];
                break;
            case 2:
                timetable = data.result[`ececcycle`];
                break;
            case 3:
                timetable = data.result[`ece3rdsem`];
                break;
            case 4:
                timetable = data.result[`ece4thsem`];
                break;
            case 5:
                timetable = data.result[`ece5thsem`];
                break;
            case 6:
                timetable = data.result[`ece6thsem`];
                break;
            case 7:
                timetable = data.result[`ece7thsem`];
                break;
            case 8:
                timetable = data.result[`ece8thsem`];
                break;
            default:
                break;
        }

        if (!timetable || timetable.length <2) {
          return <p key={index}>No timetable available for {sem} semester.</p>;
        }

        return (
          <div className="timetable-container w-full h-[100vh] bg-[#000000a6] text-[#ffffff] absolute top-0 left-0 z-50 overflow-hidden flex flex-col justify-center items-center">
      
              {(timetable.map(({ semester, timetable }, index) => (
                  <div key={index} className="w-full flex justify-center items-center flex-col gap-4 p-10 timetable-section">
                    <h2 className="text-3xl font-bold">Timetable of AI&ML year {semester}</h2>
                    <div className="week border-2 bg-[#00000099] border-[#ffffff] w-full flex flex-col justify-center items-center gap-2 p-4 rounded-md">
                      <h3 className="font-bold text-xl pb-4">AI&ML</h3>
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
                          {week.map((day, dayIndex) => (
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
                  </div>
                ))
              )}
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
        <Timetableece data={data} selectedSemesters={selectedSemesters} />
      ) : (
        <p>Loading timetable...</p>
      )}
    </div>
  );
};

export default Timetableece;
