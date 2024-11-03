import React from 'react'
import Link from 'next/link';


const page = ({ params }) => {

    const semesters = [];
    if (params.year === '1') {
        semesters.push({ id: 1, name: '1', desc: 'First', path: `${params.branch}/1` },
            { id: 2, name: '2', desc: 'Second', path: `${params.branch}/2` })
    }

    else if (params.year === '2') {
        semesters.push({ id: 1, name: '3', desc: 'Third', path: `${params.branch}/3` },
            { id: 2, name: '4', desc: 'Fourth', path: `${params.branch}/4` })
    }

    else if (params.year === '3') {
        semesters.push({ id: 1, name: '5', desc: 'Fifth', path: `${params.branch}/5` },
            { id: 2, name: '6', desc: 'Sixth', path: `${params.branch}/6` })
    }

    else {
        semesters.push({ id: 1, name: '7', desc: 'Seventh', path: `${params.branch}/7` },
            { id: 2, name: '8', desc: 'Eighth', path: `${params.branch}/8` })
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center h-full w-full pt-[5%] pb-5 absolute top-0 left-0'>

                <div><h1 className='font-medium text-[#ffffff] text-[25px] mb-5'>SELECT THE SEMESTER OF <b>{params.branch.toUpperCase()}</b> YEAR <b>{params.year}</b> </h1></div>

                <div className='flex flex-wrap gap-7 w-[40%] justify-center overflow-hidden brnchhldr py-2'>

                    {semesters.map((items, index) => {
                        return (
                            <Link key={index} href={items.path}>
                                <div key={index} className='h-[130px] w-[130px] bg-[#ffffff7d] flex flex-col items-center justify-center rounded-full cursor-pointer smooth crdshdw hover:invert' >
                                    {/* <Image className='w-[120px]' src={items.img} alt="" /> */}
                                    <div className='flex flex-col text-[#000000] items-center text-center'>
                                        <span className='text-[30px] font-semibold rounded-full flex items-center justify-center'>{items.name}</span>
                                        <span className='text-[17px] font-bold rounded-md flex items-center justify-center'>{items.desc}</span>
                                        <span className='text-[17px] font-bold rounded-md flex items-center justify-center'>Semester</span>
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

export default page
