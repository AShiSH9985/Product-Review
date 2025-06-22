import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
<>

    <nav className="bg-[#80ba27] p-4 text-white h-16 w-full text-white flex items-center py-4 justify-between">
        <div className='flex items-center justify-between w-1/2'>
          <NavLink to='/' className='text-green-900 text-2xl'>Product_Review.com</NavLink>
          <input type="text" className='h-10 w-96 p-4 rounded-md text-black' placeholder='Search'/>
        </div>
       <div className='flex items-center justify-between'>
        <button className='bg-green-800 h-10 w-16 rounded-lg items-center m-2'>Sign in</button>
        <button className='m-4 bg-green-900 h-10 w-32 rounded-md'>Write a review</button>
       </div>
    </nav>

    <div className='h-64 w-full bg-green-900 bg-cover opacity-100 flex flex-col items-center justify-center'>
        <h1 className='text-4xl text-white font-bold m-2'>Know better, choose better.</h1>
        <h1 className='text-white'>Reviews by people like you</h1>
        <input type="text" className='h-12 w-3/5 m-2 p-4 rounded-md text-black'  placeholder='What are you looking for?'/>
    </div>

    <div className='h-64 w-full border-b-2 flex flex-col items-center justify-center'>
        <h1 className='font-bold m-2 text-xl'>Your opinion matters</h1>
        <p className='text-xl m-2 '>ProductReview.com.au is a community of consumers helping each other make better purchasing decisions.</p>
        <button className='bg-green-900 h-12 w-1/2 m-8 rounded-md text-white text-xl'>Write a review</button>
    </div>

    <div className='h-64 w-full border-b-2 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl'>The 2025 ProductReview.com.au Awards</h1>
      <p className='text-xl m-2 '>Discover Australia's best products & services of the year.</p>
      <button className='bg-[#80ba27] h-12 w-1/2 text-xl rounded-md' >See the winners</button>
    </div>
    <div className='h-80'></div>
</>
  )
}

export default Home