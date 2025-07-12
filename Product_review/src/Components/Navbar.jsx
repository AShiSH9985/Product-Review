import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
   <nav className="bg-[#80ba27] p-4 text-white h-16 w-full text-white flex items-center py-4 justify-between">
        <div className='flex items-center justify-between w-1/2'>
          <NavLink to='/' className='text-green-900 text-xl'>Product_Review.com</NavLink>
          <input type="text" className='h-10 w-96 ml-2 p-4 rounded-md text-black' placeholder='Search'/>
        </div>
       <div className='w-1/2 flex items-center justify-end'>
        <button className='bg-green-800 h-10 w-16 rounded-lg items-center m-2'>Sign in</button>
        <button className='m-4 bg-green-900 h-10 w-32 rounded-md'>Write a review</button>
       </div>
    </nav>
  )
}

export default Navbar