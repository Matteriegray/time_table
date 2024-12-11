"use client"
import React, { useEffect, useState } from 'react';
import Timetableeeeuser from '@/app/displaytimetableeee2/page';
import CustomLayout from '@/app/customlayout';

const App = () => {
  const [data, setData] = useState(null);
  const [sem, setsem] = useState()
  useEffect(() => {
    let url=(window.location.href).split("/")
    setsem(url.at(-2))

    const fetchData = async () => {
      try {
        const response = await fetch('/api/get/eee'); 
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.log((error));
      }
      
    };

    fetchData();
  }, []);



  return (
    <CustomLayout>
      <div>
      {data ? (
        <Timetableeeeuser data={data} selectedSemester={sem} />
      ) : (
        <p>Loading timetable...</p>
      )}
      </div>
</CustomLayout>
  );
};

export default App;
