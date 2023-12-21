import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    
    <div  className="bg-blue-500 w-screen h-[60px] flex">
        <Link to={"/"}>
        <h1 className='text-black text-[30px] font-extrabold mx-4 mt-1'>
            Subin.<span className='text-white'>Dev</span>
        </h1>
        </Link>
       <ul className='flex gap-4 md:mx-[400px] sm:mx-auto lg:mx-[1040px] lg:text-[20px] p-4'>
        <li>
            <Link to={"/"}>
            Home
            </Link>
            
        </li>
        <li>
            <Link to={"/about"}>
            
            About
            </Link>
        </li>
        <li>
            <Link to={"/contact"}>
            Contact
            </Link>
        </li>
       </ul>
    </div>
   
  )
}
