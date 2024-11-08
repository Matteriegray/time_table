'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation'; // Import useParams to access the dynamic route params

import aiml from '../public/aiml.jpg';
import cse from '../public/cse.jpg';
import ise from '../public/ise.jpg';
import ece from '../public/ece.jpg';
import eee from '../public/eee.jpg';
import mech from '../public/mech.jpg';
import civil from '../public/civil.jpg';

const DispBranch = () => {
  const params = useParams();
  const [year, setYear] = useState(null);

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params; // Await the params Promise
      setYear(resolvedParams.year);
    }
    fetchParams();
  }, [params]);

  const branches = [
    { id: 1, name: 'AI&ML', desc: 'Artificial Intelligence & Machine Learning', img: aiml, path: year ? `${year}/aiml` : '#' },
    { id: 2, name: 'CSE', desc: 'Computer Science Engineering', img: cse, path: year ? `${year}/cse` : '#' },
    { id: 3, name: 'ISE', desc: 'Information Science Engineering', img: ise, path: year ? `${year}/ise` : '#' },
    { id: 4, name: 'ECE', desc: 'Electronics & Communication', img: ece, path: year ? `${year}/ece` : '#' },
    { id: 5, name: 'EEE', desc: 'Electrical Engineering', img: eee, path: year ? `${year}/eee` : '#' },
    { id: 6, name: 'CIVL', desc: 'Civil Engineering', img: civil, path: year ? `${year}/civil` : '#' },
    { id: 7, name: 'MECH', desc: 'Mechanical Engineering', img: mech, path: year ? `${year}/mech` : '#' },
  ];

  if (!year) {
    return <div>Loading...</div>; // Show a loading message until params are resolved
  }

  return (
    <div className='flex flex-col items-center justify-center h-full w-full pt-[5%] max-md:pt-[10%] pb-5 absolute top-0 left-0'>
      <h1 className='font-medium text-[#ffffff] text-[25px]'>Please select the branch:</h1>
      <div className='flex flex-wrap gap-7 w-[60%] max-md:w-[80%] justify-center overflow-x-hidden max-md:overflow-y-scroll brnchhldr py-2'>
        {branches.map((item) => (
          <Link key={item.id} href={item.path} passHref>
            <div className='h-[230px] w-[190px] bg-[#ffffff] flex flex-col items-center justify-center py-4 rounded-sm cursor-pointer smooth crdshdw hover:invert'>
              <Image className='w-[120px]' src={item.img} alt={item.name} />
              <div className='flex flex-col text-[#000000] items-center text-center gap-1'>
                <span className='text-[18px] font-semibold'>{item.name}</span>
                <span className='text-[15px] font-medium'>{item.desc}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DispBranch;
