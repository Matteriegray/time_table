
import React from 'react'
import Link from 'next/link';


const NavBar = () => {

  const links = [
    { id: 1, name: 'HOME', path: '/' },
    { id: 2, name: 'SYLLABUS', path: '/syllabus' },
    { id: 3, name: 'PYQ PAPERS', path: '/pyqpapers' },
    { id: 4, name: 'CALENDAR OF EVENTS', path: '/coe' },
  ];


  return (
    <nav className='flex items-center justify-between px-10 py-2  w-[100%] absolute top-0 left-0 z-50'>
      {/* <div className='flex items-baseline gap-5 font-bold w-[100%] bg-[#ffffff] text-[#000] navfont'>
        <div>
          <span className='text-[40px]'>U</span><span className='text-[30px] '>NIVERSTITY</span>
        </div>
        <div>
          <span className='text-[30px] '>OF</span>
        </div>
        <div>
          <span className='text-[40px]'>V</span><span className='text-[30px] '>ISVESVARAYA</span>
        </div>
        <div>
          <span className='text-[40px]'>C</span><span className='text-[30px] '>OLLEGE</span>
        </div>
        <div>
          <span className='text-[30px] '>OF</span>
        </div>
        <div>
          <span className='text-[40px]'>E</span><span className='text-[30px] '>NGINEERING</span>
        </div>
      </div> */}

      <div className='flex gap-5 font-bold text-[#fff] '>
        <span className=' text-[50px] navfont'>UVCE</span>
      </div>

      <div className='flex gap-10 text-[#ffffff]'>

        {links.map((item, index) => (
          <Link href={item.path} key={index} >
            <div className='flex flex-col'>
              <span className='befaft relative active:text-[#ae2929] font-semibold text-[18px]'>{item.name}</span>
            </div>
          </Link>
        ))}

      </div>
    </nav>
  )
}

export default NavBar
