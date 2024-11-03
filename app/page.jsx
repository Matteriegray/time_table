import React from 'react'
import Link from 'next/link';


const page = () => {

  const branches = [
    { id: 1, name: '1', desc: 'First Year', path: '/1' },
    { id: 1, name: '2', desc: 'Second Year', path: '/2' },
    { id: 1, name: '3', desc: 'Third Year', path: '/3' },
    { id: 1, name: '4', desc: 'Fourth Year', path: '/4' },
  ];

  return (
    <>
      <div className='flex flex-col items-center justify-center h-full w-full pt-[5%] pb-5 absolute top-0 left-0'>

        <div><h1 className='font-medium text-[#ffffff] text-[25px] mb-5'>Please select the year: </h1></div>

        <div className='flex flex-wrap gap-7 w-[60%] justify-center overflow-hidden brnchhldr py-2'>

          {branches.map((items, index) => {
            return (
              <Link key={index} href={items.path}>
                <div key={index} className='h-[130px] w-[130px] bg-[#ffffff7d] flex flex-col items-center justify-center rounded-full cursor-pointer smooth crdshdw hover:invert' >
                  {/* <Image className='w-[120px]' src={items.img} alt="" /> */}
                  <div className='flex flex-col text-[#000000] items-center text-center gap-1'>
                    <span className='text-[30px] font-semibold rounded-full flex items-center justify-center'>{items.name}</span>
                    <span className='text-[17px] font-bold rounded-md flex items-center justify-center'>{items.desc}</span>
                  </div>
                </div>
              </Link>
            )
          })}

        </div>
      </div>

      <Link href='/adminlogin'>
        <div className='fixed bottom-5 right-5'><span className='befaft relative active:text-[#ae2929] text-[#ffffff] font-medium text-[25px]'>Login as Admin</span></div>
      </Link>

    </>
  )
}

export default page
