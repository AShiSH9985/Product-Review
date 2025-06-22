import React from 'react'

function Home() {
  return (
<>

    <nav className="bg-green-500 p-4 text-white h-16 w-full text-white flex items-center py-4 justify-between">
        <div className='flex items-center justify-between w-1/2'>
          <h1 className='text-green-900 text-2xl'>Product_Review.com</h1>
          <input type="text" className='h-10 w-96 rounded-md'/>
        </div>
       <div className='flex items-center justify-between'>
        <button className='bg-green-800 h-10 w-16 rounded-lg items-center m-2'>Sign in</button>
        <button className='m-4 bg-green-900 h-10 w-32 rounded-md'>Write a review</button>
       </div>
    </nav>

        <div>

        </div>
</>
  )
}

export default Home