'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa";

const page = () => {
    
    const [shopass, setshopass] = useState(false);
    const [Name, setName] = useState("")
    const [password, setpassword] = useState("")
    const handlesubmit=()=>{
        if(Name=="devloper" && password=="devloper@uvce"){
            window.location.replace("/admin")
        }
        else{
            window.location.reload()
        }
    }

    return (
        <div className='flex justify-center items-center  h-full w-full pt-[5%] pb-5 absolute top-0 left-0'>
            <div className='flex flex-col w-[450px] bg-[#000000bc] font-medium px-5 py-10 text-[#f5f5f5] asushad rounded-md gap-7'>
                <div className='text-center  text-[22px] '>Login as admin</div>

                <div className='flex flex-col gap-3'>
                    <div>Admin Name: </div>
                    <input className='bg-[#ffffff25] rounded-md px-2 py-4 text-[16px]' onChange={(e)=>{setName(e.target.value)}} value={Name} type="text" name="" id="" placeholder='Enter your name' />
                </div>

                <div className='flex flex-col gap-3 '>
                    <div>Password: </div>
                    <form className='relative flex items-center'>
                        <input className='bg-[#ffffff25] rounded-md px-2 py-4 text-[16px] w-full' onChange={(e)=>{setpassword(e.target.value)}} value={password} type={`${shopass ? 'text' : 'password'}`} name="" id="" placeholder='Enter the secret key' />
                        <span onClick={() => setshopass(true)}  className={`absolute cursor-pointer right-4 text-[18px] ${shopass ? 'hidden' : 'block'}`}><FaEyeSlash /></span>
                        <span onClick={() => setshopass(false)} className={`absolute cursor-pointer right-4 text-[18px] ${shopass ? 'block' : 'hidden'}`}><FaEye /></span>
                    </form>
                </div>

                
                    <button onClick={()=>{handlesubmit()}} className='bg-[#ffffff25] rounded-md px-6 py-3 text-[16px] hover:bg-[#ffffff] hover:text-[#000000] smooth font-bold'>Log in</button>
            </div>
        </div>
    )
}

export default page
