import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import aiml from '../public/aiml.jpg'
import cse from '../public/cse.jpg'
import ise from '../public/ise.jpg'
import ece from '../public/ece.jpg'
import eee from '../public/eee.jpg'
import mech from '../public/mech.jpg'
import civil from '../public/civil.jpg'
const DispBranch = ({params}) => {

  const branches = [
    { id: 1, name: 'AI&ML', desc: 'Artificial Intelligence & Machine Learning',img:aiml, path: `${params.year}/aiml` },
    { id: 2, name: 'CSE', desc: 'Computer Science Engineering', img:cse,  path: `${params.year}/cse` },
    { id: 3, name: 'ISE', desc: 'Information Science Engineering', img:ise,  path: `${params.year}/ise` },
    { id: 4, name: 'ECE', desc: 'Electronics & Communication', img:ece,  path: `${params.year}/ece` },
    { id: 5, name: 'EEE', desc: 'Electrical Engineering', img:eee,  path: `${params.year}/eee` },
    { id: 7, name: 'MECH', desc: 'Mechanical Enginnering', img:mech,  path: `${params.year}/mech` },
    { id: 6, name: 'CIVL', desc: 'Civil Engineering', img:civil,  path: `${params.year}/civil` },
  ];

  return (
    <>
        <div className='flex flex-col items-center justify-center h-full w-full pt-[5%] max-md:pt-[10%] pb-5 absolute top-0 left-0'>

          <div><h1 className='font-medium text-[#ffffff] text-[25px]'>Please select the department: </h1></div>

          <div className='flex flex-wrap gap-7 w-[60%] max-md:w-[80%] justify-center overflow-x-hidden max-md:overflow-y-scroll brnchhldr py-2'>

          {branches.map((items, index) => {
            return (
              <Link key={index} href={items.path}>
                <div key={index} className='h-[230px] w-[190px] bg-[#ffffff] flex flex-col items-center justify-center py-4 rounded-sm cursor-pointer smooth crdshdw hover:invert' >
                  <Image className='w-[120px]' src={items.img} alt="" />
                  <div className='flex flex-col text-[#000000] items-center text-center gap-1'>
                    <span className='text-[18px] font-semibold'>{items.name}</span>
                    <span className='text-[15px] font-medium'>{items.desc}</span>
                  </div>
                </div>
              </Link>
            )
          })}

          </div>
        </div>

        
    </>
  )
}

export default DispBranch
